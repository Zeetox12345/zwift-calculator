# ZwiftCalculator.com

Calculators and long-form writing about training and racing on Zwift.
Live at <https://www.zwiftcalculator.com>, deployed from `main` to Vercel.

Vite + React 18 + TypeScript + Tailwind + shadcn/ui, shipped as a **fully pre-rendered static site**.
There is no server and no database.

## Commands

```sh
npm run dev              # dev server on http://localhost:8080
npm run build            # client build -> SSR build -> prerender. All three, in order.
npm run lint             # eslint
npx tsc --noEmit -p tsconfig.app.json   # typecheck
npm run optimize:images  # run after adding anything to public/
```

`npm run prerender` alone will fail: it needs `dist/index.html` and `.ssr-build/entry-server.js` to exist first.

## Why the site is pre-rendered

This is the single most important architectural fact about the repo.

The site used to ship as a plain client-rendered SPA.
Every URL returned the same 2.2 kB shell with an empty `<div id="root">`, the same `<title>` and the same meta description.
Crawlers that do not execute JavaScript, which includes the crawler Google AdSense uses to review a site, saw fifty-odd identical contentless pages.
That is what got the site rejected by AdSense for "low value content".

`scripts/prerender.mjs` now renders every route to its own HTML file with the full content and its own `<head>` baked in.
Anything that breaks pre-rendering re-creates the original problem, so treat a prerender failure as a release blocker rather than a nuisance.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/lib/siteConfig.ts` | Site, author and company constants. The canonical host is set here. |
| `src/lib/seo.ts` | Route registry, `<head>` builder and the JSON-LD graph |
| `src/data/blogPosts.ts` | **The article index. Single source of truth for every article's title, excerpt, date and read time.** |
| `src/data/faq.ts` | FAQ content, shared by `/faq` and the `FAQPage` schema |
| `src/lib/zwiftClimbs.ts` | Timed climb segment reference data |
| `src/lib/climbPhysics.ts` | The steady-state climbing model and its constants |
| `src/components/BlogPost.tsx` | Article shell: H1, byline, dates, related articles, sidebar |
| `scripts/prerender.mjs` | Static rendering plus `sitemap.xml` and `robots.txt` |

## Adding a page

1. Create the component under `src/pages/`.
2. Add the route to `src/AppRoutes.tsx`.
3. Add a matching entry to `seoRoutes` in `src/lib/seo.ts`.

Step 3 is not optional.
The pre-render step iterates the SEO registry, so a route missing from it never gets a static file, never gets `<head>` tags and never reaches the sitemap.
If a registry entry has no matching route the build fails loudly rather than shipping a 404 under a real URL.

## Adding an article

Add one entry to `blogPosts` in `src/data/blogPosts.ts` and one route in `src/AppRoutes.tsx`.
Everything else follows from that entry: the `/blog` index, the category hubs, related-article blocks, `<head>` tags, `BlogPosting` structured data and the sitemap.

**Never write an article's title, summary, date or read time anywhere except `blogPosts.ts`.**

This has bitten the repo three times and each time the symptom was the same: stale text rendering on real pages after the index was updated.

- `<BlogPost>` no longer accepts `title` or `date` props. It reads them from the index.
- Article pages no longer define local `relatedArticles` arrays. `BlogPost` derives four related articles automatically via `autoRelated()`.
- `VentopCalculator.tsx` derives its sidebar and card grid from `getPostBySlug()`.

If you need to show an article somewhere new, look it up with `getPostBySlug()`. Do not retype it.
After any change to the index, rebuild and grep `dist/` for the old wording to be sure no second copy survived.

Constraints on the metadata:

- `metaTitle` at most 60 characters.
- `metaDescription` between 120 and 155 characters.
- `readTime` must be **measured, not guessed**: word count of the rendered article body divided by 200, rounded. These were all wrong by up to 2x before they were measured.
- `dateModified` only when the body is substantively revised.

## House rules for content

These exist because the site was rejected once and the fixes are load-bearing.

### Never invent data

The only dataset this site holds is roughly **500 verified Alpe du Zwift and 300 Ven-Top ZwiftPower records**, each one a power-to-weight figure paired with a finishing time.
No timestamps, no power traces, no split times, no group-ride records, no repeat attempts.

Before writing any statistic, check it against the two fitted curves:

```
Alpe:    time_seconds = 148.60*(W/kg)^2 - 1954.08*(W/kg) + 8329.87
Ven-Top: time_minutes = 3.205 + 253.38/(W/kg)
```

If a claim needs data beyond power-and-time pairs, either delete it, label it explicitly as reasoning or personal experience, or replace it with a value computed from those equations.
**Never invent a citation to patch the hole.**

Around a hundred fabricated figures ("our analysis of 2,000+ Zwift training sessions") were removed for exactly this reason.
`/editorial-policy` promises that any number presented as measured links to where it was measured, so publishing invented research alongside that policy is worse than never writing the policy.

Forum threads are not sources. Reddit citations were removed site-wide.

### Voice

One person writes this site and signs his name to it.
Write in the first person singular.
Editorial "we" that implies a team is wrong, though the collective "we riders" in an essay is fine.

No cheerleading conclusions, no emoji in article prose, no "Discover how...", "Learn about...", "Complete guide to...", "Master X" openings.
Every article excerpt and title on the site was rewritten once already to remove exactly that register; it reads as generated at scale and it is the most visible quality signal on `/blog`.

Emoji used as functional UI, such as the legend markers on `/alpe-vs-ventop`, are fine.

### Never use em dashes

Use a plain hyphen.
The one deliberate exception is `src/components/calculator/AlpeFacts.tsx`, which is left alone (see below).

### Alt text describes the picture

Not the article, and not a list of keywords.
Look at the image before writing it.

## The Alpe calculator page is off-limits

`/alpeduzwiftcalculator` (`src/pages/Calculator.tsx` plus `src/components/calculator/*`) is the site's dominant traffic source and should be left as it is.

Site-wide changes should reach that page only through shared infrastructure: nav, footer, the SEO registry, pre-rendering.
Factual corrections are acceptable; design and copy changes are not.

## Advertising and privacy

- The AdSense snippet and the `google-adsense-account` meta tag are in `index.html`; `public/ads.txt` carries the publisher line. Google requires the ad code to be live during review, so none of it should be removed while an application is pending.
- Google Consent Mode v2 defaults are set in `index.html` **before** gtag.js and the AdSense tag. Denied across the EEA, UK and Switzerland; granted elsewhere. The consent message published in the AdSense console is what calls `gtag('consent', 'update', ...)`.
- There is no consent management platform in this repository by design. It is published from the AdSense console.

## Deployment

Vercel, configured by `vercel.json`.

There is deliberately **no SPA catch-all rewrite**: every route has its own static file, and anything unmatched is served by `dist/404.html` with a real 404 status.
Adding a catch-all would turn every unknown URL back into a soft 404.

The apex domain 308-redirects to `www`, so `SITE.url` uses `www`.
Canonical URLs, Open Graph URLs, JSON-LD identifiers and sitemap entries all have to point at the final URL rather than at a redirect.

## Verifying a change

```sh
npm run build
npx tsc --noEmit -p tsconfig.app.json
npm run lint
```

After a build, `dist/` contains one directory per route.
Useful spot checks:

- Every internal `href` in `dist/**/*.html` resolves to a file that exists.
- `dist/sitemap.xml` has the same number of URLs as the SEO registry has routes.
- A page fetched as `Mediapartners-Google` returns tens of kilobytes, not 2 kB.

## Background

`ADSENSE.md` at the repo root records what was wrong, what was fixed and what still needs a human.
Read it before changing anything that touches crawlability, structured data or content policy.
