/**
 * Static pre-rendering.
 *
 * The site is a React single-page app. Without this step every URL returns the
 * same near-empty `<div id="root"></div>`, which is all a crawler that does not
 * execute JavaScript ever sees - one duplicated, contentless page repeated
 * across the whole site.
 *
 * This script renders every route in the SEO registry to a real HTML file with
 * its own <title>, meta description, canonical URL and JSON-LD, writes a
 * genuine 404 page, and generates sitemap.xml and robots.txt from the same
 * registry so they can never drift out of sync with the routes.
 *
 * Run automatically by `npm run build`.
 */

import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, ".ssr-build");

const APP_MARKER = "<!--app-html-->";
const SEO_START = "<!--seo-start-->";
const SEO_END = "<!--seo-end-->";

function fail(message) {
  console.error(`\n[prerender] ${message}\n`);
  process.exit(1);
}

const templatePath = path.join(distDir, "index.html");
if (!existsSync(templatePath)) {
  fail("dist/index.html is missing - run the client build first.");
}

const entryPath = path.join(ssrDir, "entry-server.js");
if (!existsSync(entryPath)) {
  fail(".ssr-build/entry-server.js is missing - run the SSR build first.");
}

const template = await readFile(templatePath, "utf8");

if (!template.includes(APP_MARKER)) fail(`index.html is missing the ${APP_MARKER} marker.`);
if (!template.includes(SEO_START) || !template.includes(SEO_END)) {
  fail(`index.html is missing the ${SEO_START} / ${SEO_END} markers.`);
}

const { render, renderHead, renderNotFoundHead, seoRoutes, siteUrl } = await import(
  pathToFileURL(entryPath).href
);

/** Swap the placeholder head block and the empty root div for real content. */
function buildDocument(headHtml, appHtml) {
  const seoStart = template.indexOf(SEO_START);
  const seoEnd = template.indexOf(SEO_END) + SEO_END.length;

  return (
    template.slice(0, seoStart) +
    headHtml.trimStart() +
    template.slice(seoEnd)
  ).replace(APP_MARKER, appHtml);
}

/** `/blog/foo` -> `dist/blog/foo/index.html`; `/` -> `dist/index.html`. */
function outputPathFor(routePath) {
  if (routePath === "/") return path.join(distDir, "index.html");
  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

const results = [];
const failures = [];

for (const route of seoRoutes) {
  try {
    const appHtml = render(route.path);

    if (appHtml.includes("404") && appHtml.includes("gone off course")) {
      failures.push(`${route.path} rendered the 404 page - the route is in the SEO registry but not in AppRoutes.`);
      continue;
    }

    const document = buildDocument(renderHead(route.path), appHtml);
    const outFile = outputPathFor(route.path);

    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, document, "utf8");

    results.push({ path: route.path, bytes: Buffer.byteLength(document), textBytes: appHtml.length });
  } catch (error) {
    failures.push(`${route.path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// A real 404 document. Vercel and Netlify both serve dist/404.html with a 404
// status, which stops unknown URLs from being reported as soft 404s.
//
// Google's publisher policies do not allow ads on an error screen, so the
// AdSense tag is stripped from this one document. Everything else keeps it.
try {
  const notFoundHtml = render("/this-route-does-not-exist");
  const notFoundDoc = buildDocument(renderNotFoundHead(), notFoundHtml).replace(
    /\s*<script async src="https:\/\/pagead2\.googlesyndication\.com[^"]*"[^>]*><\/script>/,
    ""
  );

  if (notFoundDoc.includes("googlesyndication")) {
    failures.push("404.html still references the AdSense tag - the strip pattern no longer matches index.html.");
  }

  await writeFile(path.join(distDir, "404.html"), notFoundDoc, "utf8");
} catch (error) {
  failures.push(`404.html: ${error instanceof Error ? error.message : String(error)}`);
}

/* ---------------------------------------------------------------- */
/* sitemap.xml + robots.txt                                          */
/* ---------------------------------------------------------------- */

// `lastmod` is only emitted when the registry actually knows when the page last
// changed. Defaulting it to the build date would restamp every URL on every
// deploy, which trains crawlers to ignore the field.
const sitemapEntries = seoRoutes
  .filter((route) => !route.noindex)
  .map((route) => {
    const loc = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
    const lastmod = route.dateModified ?? route.datePublished;

    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.sitemapPriority.toFixed(1)}</priority>`,
      "  </url>",
    ].join("\n");
  });

const missingLastmod = seoRoutes.filter((r) => !r.noindex && !r.dateModified && !r.datePublished).length;

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapEntries,
  "</urlset>",
  "",
].join("\n");

await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

// Google's ad crawlers ignore the `User-agent: *` group entirely, so each one
// has to be named explicitly for the rules to apply to it at all.
const robots = [
  `# ${siteUrl}/robots.txt`,
  "User-agent: *",
  "Allow: /",
  "",
  "User-agent: Mediapartners-Google",
  "Allow: /",
  "",
  "User-agent: Google-Display-Ads-Bot",
  "Allow: /",
  "",
  "User-agent: AdsBot-Google",
  "Allow: /",
  "",
  "User-agent: AdsBot-Google-Mobile",
  "Allow: /",
  "",
  "User-agent: Googlebot",
  "Allow: /",
  "",
  `Sitemap: ${siteUrl}/sitemap.xml`,
  "",
].join("\n");

await writeFile(path.join(distDir, "robots.txt"), robots, "utf8");

// The SSR bundle is a build artefact, not something to deploy.
await rm(ssrDir, { recursive: true, force: true });

/* ---------------------------------------------------------------- */
/* Report                                                            */
/* ---------------------------------------------------------------- */

if (failures.length > 0) {
  console.error("\n[prerender] FAILED:");
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

const thin = results.filter((r) => r.textBytes < 12000);
const smallest = [...results].sort((a, b) => a.textBytes - b.textBytes).slice(0, 5);

console.log(`\n[prerender] ${results.length} routes rendered + 404.html`);
console.log(`[prerender] sitemap.xml: ${sitemapEntries.length} URLs`);
console.log(`[prerender] robots.txt written`);

if (thin.length > 0) {
  console.log(`\n[prerender] ${thin.length} route(s) render less than 12 kB of markup:`);
  for (const route of smallest) {
    console.log(`  ${String(Math.round(route.textBytes / 1024)).padStart(4)} kB  ${route.path}`);
  }
}
