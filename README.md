# ZwiftCalculator.com

Calculators and long-form writing about training and racing on Zwift.
Live at <https://www.zwiftcalculator.com>.

Built with Vite, React 18, TypeScript, Tailwind CSS and shadcn/ui, and deployed as a fully pre-rendered static site.

## Getting started

```sh
npm install
npm run dev      # dev server on http://localhost:8080
```

## Build

```sh
npm run build
```

That runs three steps in order:

| Step | Script | What it does |
| --- | --- | --- |
| 1 | `build:client` | Normal Vite build into `dist/` |
| 2 | `build:ssr` | Builds `src/entry-server.tsx` into `.ssr-build/` |
| 3 | `prerender` | Renders every route to a real HTML file, then writes `404.html`, `sitemap.xml` and `robots.txt` |

`npm run prerender` on its own will fail unless the two build steps have already run, because it needs both `dist/index.html` and `.ssr-build/entry-server.js`.

## Why the site is pre-rendered

The site used to ship as a plain client-rendered single-page app.
Every URL returned the same 2.2 kB HTML shell with an empty `<div id="root">`, the same `<title>` and the same meta description.
Crawlers that do not execute JavaScript - which includes the crawler Google AdSense uses to review a site - saw fifty-odd identical, contentless pages, and unknown URLs returned HTTP 200 instead of 404, producing soft 404s at scale.

Pre-rendering fixes all of that at the source.
Each route is rendered to its own file with its own `<head>`, the browser hydrates that markup rather than rebuilding it, and unknown URLs fall through to a real 404.

## Adding a page

1. Create the component under `src/pages/`.
2. Add the route to `src/AppRoutes.tsx`.
3. Add a matching entry to `seoRoutes` in `src/lib/seo.ts`.

Step 3 is not optional. The pre-render step iterates over the SEO registry, so a route missing from it never gets a static file, never gets `<head>` tags and never reaches the sitemap. If a registry entry has no matching route the build fails loudly rather than silently shipping a 404 page under a real URL.

## Adding an article

Add one entry to `blogPosts` in `src/data/blogPosts.ts` and one route in `src/AppRoutes.tsx`.
Everything else follows from that single entry: the `/blog` index, the category hub pages, the related-articles blocks, the `<head>` tags, the `BlogPosting` structured data and the sitemap.

Keep `metaTitle` under 60 characters and `metaDescription` between 120 and 155.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/lib/siteConfig.ts` | Site, author and company constants. Change the canonical host here. |
| `src/lib/seo.ts` | The route registry, `<head>` tag builder and JSON-LD graph |
| `src/data/blogPosts.ts` | The article index |
| `src/data/faq.ts` | FAQ content, shared by the page and the `FAQPage` schema |
| `src/lib/zwiftClimbs.ts` | Timed climb segment reference data |
| `src/lib/climbPhysics.ts` | The steady-state climbing model and its constants |
| `scripts/prerender.mjs` | Static rendering, sitemap and robots.txt |
| `scripts/optimize-images.mjs` | One-pass image optimiser for `public/` |

## Images

Run `npm run optimize:images` after adding anything to `public/`.
Editorial images under `public/pictures/` are downscaled to 1600 px and converted to WebP, with references in `src/` rewritten automatically.
Everything else is re-encoded in place so its URL never changes.
The script is idempotent, so running it twice does not degrade quality.

## Advertising

The AdSense snippet and the `google-adsense-account` meta tag live in `index.html`, and `public/ads.txt` carries the publisher line.
Google requires the ad code to be live on a real content page during review, so none of it should be removed while an application is pending.

## Deployment

Vercel, configured by `vercel.json`. There is deliberately **no** SPA catch-all rewrite: every route has its own static file, and anything unmatched is served by `dist/404.html` with a real 404 status.

The apex domain 308-redirects to `www`, so `SITE.url` in `src/lib/siteConfig.ts` uses `www` - canonical URLs, Open Graph URLs, JSON-LD identifiers and sitemap entries all have to point at the final URL rather than at a redirect.
