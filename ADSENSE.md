# AdSense: what was wrong, what was fixed, what to do next

ZwiftCalculator.com was rejected by Google AdSense for low value content.
This document records the actual cause, the work done in response, and the steps left for a human.

It replaces an earlier analysis file whose central recommendation - remove the AdSense code before re-applying - was wrong.
See "Corrections to the previous analysis" at the end.

## The actual cause

The site was a client-rendered single-page app with no pre-rendering.
Fetched as Google's ad crawler, **every** URL returned the same 2,280-byte HTML shell:

```
<body><div id="root"></div>...</body>
```

Zero words of text. Identical `<title>` on all 55 pages ("Alpe du Zwift Calculator | Predict Your Climbing TIme", including the typo). Identical meta description. No canonical tag.
`/robots.txt` returned HTML rather than robots directives, so the ad crawlers had no usable rules at all.
Unknown URLs returned HTTP 200 with the same shell, which is a soft 404 on every non-existent path.

Google's own list of reasons for this rejection names, in its own words, "too little text", pages that look "under construction", and test pages "empty except for the code". A JavaScript app that never renders server-side hits all three, no matter how much content is in the repository.

The 77,000 words of articles already on the site were, from Google's point of view, not there.

## What was changed

### Crawlability (the decisive fix)

- **Static pre-rendering of every route.** `npm run build` now renders each route to its own HTML file with the full page content baked in. 152,000 words are now present in the HTML without running any JavaScript. `scripts/prerender.mjs`.
- **Per-page `<head>`.** Unique title, meta description, canonical URL, Open Graph and Twitter tags for all 62 routes, from one registry in `src/lib/seo.ts`.
- **Structured data.** Organization, WebSite, Person, BreadcrumbList on every page; BlogPosting on articles; WebApplication on calculators; FAQPage on `/faq`.
- **Real 404s.** The SPA catch-all rewrite is gone. Unknown URLs now serve `dist/404.html` with a 404 status instead of a 200 shell.
- **robots.txt**, generated at build time. Google's ad crawlers ignore the `User-agent: *` group, so `Mediapartners-Google`, `Google-Display-Ads-Bot`, `AdsBot-Google` and `AdsBot-Google-Mobile` are each named explicitly.
- **sitemap.xml**, generated from the same route registry, so it cannot drift.
- **Canonical host.** The apex domain 308-redirects to `www`, so every canonical URL, OG URL and sitemap entry now points at `www` rather than at a redirect.
- **Scroll animations made non-blocking.** Content used to sit at `opacity: 0` until an IntersectionObserver fired. If that observer did not run, the page was blank. A CSS failsafe now reveals everything after 1.2s regardless, and `prefers-reduced-motion` skips the animation entirely.

### Content

- Homepage rewritten. The invented statistics ("5,000+ Active Readers", "1,000+ Rides Analyzed") are gone, replaced with the published regression equation, a worked example anyone can check by hand, and a reference table computed from that equation.
- Twelve of the thinnest articles expanded, several by 3-4x.
- About, Author and Contact pages rewritten with real substance and an honest disclosure of what the author is and is not qualified to advise on.
- The four category hub pages now read from the article index instead of hard-coded lists, and each carries 1,000+ words of original guidance.
- New pages: `/zwift-ftp-calculator`, `/zwift-racing-category-calculator`, `/zwift-climb-time-calculator`, `/zwift-climbs`, `/faq`, `/editorial-policy`.
- All 42 meta titles and descriptions rewritten to proper lengths (titles 52-59 characters, descriptions 133-152).
- Every external citation checked. One dead link found and fixed.

### Trust signals

- `/editorial-policy` covers sourcing, how the calculators are validated, corrections, advertising independence, and where AI is and is not used.
- The privacy policy now carries Google's required disclosures: third-party vendors including Google using cookies, the opt-outs at Google Ads Settings and aboutads.info, and a Google Analytics opt-out.
- Every article carries an author byline linking to a real named person, a publication date, and a revision date where it was revised.

### Housekeeping

- `public/lovable-uploads/10articles_blog_zwiftcalculator.txt` deleted. It was a publicly crawlable 164 kB plain-text file containing near-verbatim copies of ten articles, opening with the line "10 SEO-Optimized Articles to Boost Traffic". Duplicate content plus an explicit statement that the content was written for search engines.
- Images: 106 MB reduced to 7.4 MB. Several were 5-10 MB straight off a camera.
- Two unused multi-megabyte uploads and a stray `testest.jpg` deleted.

### Content integrity

An adversarial review of the first pass found that seven articles reported findings from a dataset that does not exist - phrases like "our analysis of 2,000+ Zwift training sessions", "our analysis of 500+ group rides", and detailed within-climb power distributions.

The site's only real dataset, as its own methodology page states, is roughly 500 verified Alpe du Zwift and 300 Ven-Top ZwiftPower records, each a power figure paired with a finishing time. It contains no timestamps, no chronotypes, no group-ride records and no power traces, so none of those claims could have come from it.

Around a hundred invented figures were removed across those articles. Each one was either deleted and the idea rewritten as reasoning the reader can follow, relabelled explicitly as an estimate, or replaced with a number computed from the site's own published equations. The articles got longer in the process, not shorter.

This mattered beyond honesty: the new editorial policy promises that "any number presented as measured carries a link to the place it was measured". Publishing that policy alongside invented research would have been worse than never writing it.

## What still needs a human

1. **Deploy.** None of this reaches Google until the new build is live. Verify afterwards with:
   ```sh
   curl -A "Mediapartners-Google" https://www.zwiftcalculator.com/ | wc -c
   ```
   It should return tens of kilobytes, not 2,280 bytes.
2. **Submit the sitemap** at `https://www.zwiftcalculator.com/sitemap.xml` in Google Search Console, and use URL Inspection on a few pages to confirm Google now sees rendered content.
3. **Wait for re-crawl before re-applying.** Applying again while Google still has the empty version cached invites the same answer. Give it one to two weeks and confirm in Search Console that pages are indexed with real content.
4. **Then request the review** in AdSense.

### Consent messaging (decide before or shortly after)

The privacy policy names consent as a legal basis for advertising and analytics cookies, but there is no consent mechanism in this repository. If a GDPR message is already published in the AdSense console under Privacy & messaging, that is fine - it deploys through the existing AdSense tag and leaves no trace in the code, so it cannot be confirmed from here. If one is **not** published, publish it: the site is operated from Denmark, so GDPR applies by establishment regardless of where the traffic comes from.

Separately, `gtag('config', ...)` in `index.html` fires with no `gtag('consent', 'default', ...)` call before it, so the Google Analytics cookie is set before any consent message can gate it. Adding the default consent state above the `config` call is the fix.

### Two judgement calls left alone

- **`/blog/the-mechanical-engineering-of-zwift-performance`** and **`/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed`** cover overlapping ground - both work through drag, drivetrain efficiency and flywheel inertia. They are textually distinct, so this is not duplicate content in the policy sense, but merging them into one stronger article would be better than keeping two.
- **Em dashes** were normalised to plain hyphens site-wide except on the Alpe du Zwift calculator page, which was left untouched by request. `src/components/calculator/AlpeFacts.tsx` still contains a few.

## Corrections to the previous analysis

The earlier `ADSENSE_REJECTION_ANALYSIS.md` recommended removing the AdSense script before re-applying. That is backwards.

Google requires the code to be live during review. Its own help documentation lists "Your ad code is missing or incomplete" as one of a small number of reasons a site is not ready to show ads, the review flow asks you to confirm the code is placed before you can request a review, and the guidance says to place it on a live page because "test pages that are empty except for the code won't be approved".

The AdSense snippet and the `google-adsense-account` meta tag in `index.html`, and `public/ads.txt`, should all stay exactly where they are.

## Things worth knowing

- **ads.txt** is not mandatory but is strongly recommended, and doubles as a verification method. It is at `public/ads.txt` and served from the domain root.
- **AI-assisted content is not banned.** Google judges output quality, not production method. What it penalises is unreviewed content generated at scale to manipulate rankings. `/editorial-policy` states plainly where a human sets the argument, checks the numbers and takes responsibility.
- **A contact form is not required.** Google treats an email address, a postal address and a form as interchangeable. The site publishes all of the company details and an email address.
