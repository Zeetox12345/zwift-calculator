/**
 * Image optimiser for everything under `public/`.
 *
 * The blog images were committed straight from a camera and a screenshot tool -
 * several were 5-10 MB each, which is fatal for mobile page speed and for Core
 * Web Vitals.
 *
 * Two strategies:
 *
 *   - Editorial images (`public/pictures/**` and the homepage hero) are
 *     downscaled and converted to WebP. The originals are deleted and every
 *     reference in `src/` is rewritten to the new extension.
 *   - Everything else (the OG card, the author portrait, the chart used by the
 *     Alpe calculator) is re-encoded in place so its URL never changes.
 *
 * Re-running is safe: files already at their target size are skipped.
 *
 * Run with `npm run optimize:images`.
 */

import { readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(rootDir, "public");
const srcDir = path.join(rootDir, "src");

/** Images wider than this are downscaled - 1600px covers every layout slot. */
const MAX_WIDTH = 1600;
/** Below this, re-encoding wins nothing. */
const MIN_BYTES = 100 * 1024;
/** Quality is stepped down until a converted image fits under this. */
const TARGET_MAX_BYTES = 400 * 1024;

/** Converted to WebP, with references rewritten. */
const toWebp = (rel) => rel.startsWith("pictures/") || rel.startsWith("lovable-uploads/d4903085-");

/** Re-encoded in place, keeping the original format and URL. */
const inPlaceOverrides = {
  "og-image.png": { maxWidth: 1200 },
  "CLD_billede_4.jpg": { maxWidth: 640 },
};

const SKIP = new Set(["favicon.ico", "placeholder.svg"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

let totalBefore = 0;
let totalAfter = 0;
const changes = [];
const renames = new Map();

for await (const file of walk(publicDir)) {
  const rel = path.relative(publicDir, file).split(path.sep).join("/");
  const base = path.basename(file);
  const ext = path.extname(file).toLowerCase();

  if (SKIP.has(base)) continue;
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;

  const before = (await stat(file)).size;
  const wantsWebp = toWebp(rel) && ext !== ".webp";
  const override = inPlaceOverrides[rel] ?? inPlaceOverrides[base] ?? {};

  if (before < MIN_BYTES && !wantsWebp && !override.maxWidth) {
    totalBefore += before;
    totalAfter += before;
    continue;
  }

  const maxWidth = override.maxWidth ?? MAX_WIDTH;
  // Read into memory first: on Windows sharp keeps the source file open, which
  // makes writing back to the same path fail.
  const input = sharp(await readFile(file), { failOn: "none" });
  const meta = await input.metadata();

  // Already converted and already small enough - re-encoding would only throw
  // away more quality, so leave it alone and keep this script idempotent.
  if (ext === ".webp" && before <= TARGET_MAX_BYTES && (meta.width ?? 0) <= maxWidth) {
    totalBefore += before;
    totalAfter += before;
    continue;
  }

  let pipeline = input.rotate();
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  if (wantsWebp || ext === ".webp") {
    // Noisy photographs can still land well over half a megabyte at q80, so
    // step the quality down until the file is a reasonable size for the web.
    let output = null;
    for (const quality of [80, 72, 64, 58]) {
      output = await pipeline.clone().webp({ quality, effort: 6 }).toBuffer();
      if (output.length <= TARGET_MAX_BYTES) break;
    }

    if (!wantsWebp && output.length >= before) {
      totalBefore += before;
      totalAfter += before;
      continue;
    }

    const target = file.replace(/\.(png|jpe?g)$/i, ".webp");
    await writeFile(target, output);
    if (target !== file) await rm(file);

    if (wantsWebp) {
      renames.set(`/${rel}`, `/${path.relative(publicDir, target).split(path.sep).join("/")}`);
    }
    totalBefore += before;
    totalAfter += output.length;
    changes.push({ rel, before, after: output.length, width: meta.width, newWidth: Math.min(meta.width ?? 0, maxWidth) });
    continue;
  }

  const output =
    ext === ".png"
      ? await pipeline.png({ compressionLevel: 9, palette: true, quality: 82, effort: 8 }).toBuffer()
      : await pipeline.jpeg({ quality: 82, mozjpeg: true, progressive: true }).toBuffer();

  // Never make a file bigger than it already was.
  if (output.length < before) {
    await writeFile(file, output);
    changes.push({ rel, before, after: output.length, width: meta.width, newWidth: Math.min(meta.width ?? 0, maxWidth) });
  }

  totalBefore += before;
  totalAfter += Math.min(output.length, before);
}

/* ---------------------------------------------------------------- */
/* Rewrite references                                                */
/* ---------------------------------------------------------------- */

let rewrittenFiles = 0;
if (renames.size > 0) {
  for await (const file of walk(srcDir)) {
    if (!/\.(tsx?|css)$/.test(file)) continue;

    const original = await readFile(file, "utf8");
    let updated = original;
    for (const [from, to] of renames) updated = updated.split(from).join(to);

    if (updated !== original) {
      await writeFile(file, updated, "utf8");
      rewrittenFiles += 1;
    }
  }
}

changes.sort((a, b) => b.before - a.before);
for (const change of changes) {
  console.log(
    `${mb(change.before).padStart(9)} -> ${mb(change.after).padStart(9)}  ` +
      `${String(change.width).padStart(5)}px -> ${String(change.newWidth).padStart(5)}px  ${change.rel}`
  );
}

console.log(
  `\n${changes.length} image(s) rewritten, ${renames.size} converted to WebP, ` +
    `${rewrittenFiles} source file(s) updated.`
);
console.log(
  `Total public/ images: ${mb(totalBefore)} -> ${mb(totalAfter)} ` +
    `(${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`
);
