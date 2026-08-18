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

## Second pass, before submitting

The first pass fixed crawlability, which was the decisive problem.
This pass went after what a human reviewer would see once the pages were actually readable.
Nothing had been resubmitted to Google at this point, so none of it is a response to a second rejection.

### The packaging read as generated at scale

Forty-one of the forty-two article excerpts still opened with SEO boilerplate: "Discover how...", "Complete guide to...", "Comprehensive analysis of...", "Learn about X, Y and evidence-based strategies for Z".
Twelve began with the identical phrase "Complete guide to".

That text is not incidental. It is the H1 of every article and the card copy on the homepage, the `/blog` index, all four category hubs, every related-articles block and every sidebar.
A reviewer opening `/blog` saw forty-two cards written to one template, whatever the quality of the bodies underneath.

All 42 titles and excerpts were rewritten in the site's own voice.

Article pages were also passing `title` and `date` straight into `<BlogPost>`, so each article's title existed in two places and the two had drifted.
Those props are gone and `blogPosts.ts` is now authoritative.

### Read times were guessed

They were wrong in both directions and some by more than 2x: an article billed at "22 min" was a 12 minute read, one billed at "8 min" was 19.
All 42 are now measured from the rendered body at 200 wpm.

### Six destination guides had no basis

Great Ocean Road, Sydney to Wollongong, New York City, Colorado, Vermont and the Shimanami Kaido were generic travel writing about four continents, published on the same day, by an author who has not ridden any of them.
One of them used an editorial "we" and leaned on someone else's video for the first-hand detail it lacked.
That combination - off-topic for a Zwift calculator site, no first-hand authority, published in a batch - is the clearest scaled-content pattern the site had.

All six were rewritten as Zwift training articles keyed to the kind of riding each destination represents, keeping the URLs.
Each states plainly that the author has not ridden the route, keeps the destination section short and clearly sourced, and frames the embedded video as somebody else's first-hand account.

The substance in each is now arithmetic the reader can check:

- **New York** - the energy cost of a standing start, and why average power misleads on stop-start rides
- **Great Ocean Road** - a four-hour day costs 400 to 475 g of carbohydrate against a 400 to 500 g store, which is why day three goes wrong
- **Sydney to Wollongong** - the difference between running low on muscle glycogen and running out of liver glycogen
- **Colorado** - what 10% less power costs in minutes on this site's own Alpe curve, plus gearing worked to a cadence
- **Vermont** - rolling resistance on gravel against asphalt, and the speed at which drag overtakes it
- **Shimanami Kaido** - why easy riding recovers better than rest, and how to actually ride easy on Zwift

### The weakest bodies

`get-fit-and-lose-weight-with-zwift` was the worst content on the site: emoji, cheerleading ("You've got this - Ride On towards a lighter, fitter you!"), an unsourced "people have lost 20, 50, 100 lbs", Reddit as a citation, and advice that contradicted the site's own FAQ.
Rewritten around the kilojoule-to-kilocalorie identity and a worked example showing that losing 4 kg is worth nearly three minutes on the Alpe if power holds and 28 seconds if it costs 10 W.

`regression-analysis-methodology` was written in corporate "we" throughout (80 instances) and made process claims no reader could check.
Rewritten in the first person, stating plainly that it is one person with a spreadsheet, and quoting the holdout error in minutes rather than as a percentage that sounds better than it is.

`the-mechanical-engineering-of-zwift-performance` overlapped both the methodology article and the pain-cave essay.
Given a distinct scope neither covers: the measurement chain from muscle to screen, which resolves why a crank meter and a trainer disagree by a few percent.
That also settles the duplicate-content question flagged at the end of the previous pass.

Cheerleading conclusions and emoji were removed from `zwift-racing-for-beginners`, `zwift-powerups-guide`, `level-up-fast-in-zwift` and `zwift-vs-outdoor-cycling`.
`level-up-fast-in-zwift` had a passage admitting "memory fuzzy as they changed it" and "60 maybe unlocked some concept wheels?", now replaced with the durable version plus a pointer to ZwiftInsider for the current list.

All Reddit citations are gone.

### Technical

- **Consent Mode v2** now sets defaults before gtag.js and the AdSense tag: denied across the EEA, UK and Switzerland, granted elsewhere. Previously `gtag('config', ...)` fired with no default state, so the analytics cookie was set before any consent message could gate it.
- **`gptengineer.js` removed** from `index.html`. It was a third-party script from `cdn.gpteng.co` loading on every production page with no function for visitors. If the Lovable visual editor is still used to edit this project, restoring that one script tag is the revert.
- Alt text rewritten on eight images. The old values were keyword strings describing the article rather than the picture.
- `frameBorder` removed from every iframe and `loading="lazy"` added.
- Article cards showed a bare day number as the date on mobile, which is meaningless on its own. They show the full date now.

### The second copy of every summary

Rewriting `blogPosts.ts` turned out to be only half the job.

Ten article pages defined their own local `relatedArticles` arrays, and `VentopCalculator.tsx` had two more hand-written lists, each with its own copy of a title, summary, date and read time. All of them were stale the moment the index was rewritten, so the old templated text ("Complete guide to setting up your Zwift training environment.") carried on rendering in sidebars and card grids on the pages a reviewer is most likely to click into. Two used the literal string `"Recent"` as a publication date.

This was found by running the audit tooling against `dist/` rather than against `src/`, which is the only way to see it. All thirteen lists now derive from the index via `autoRelated()` or `getPostBySlug()`, and `CLAUDE.md` records the rule.

### Lovable removed

`gptengineer.js` was removed from `index.html` in the first part of this pass. Christian has confirmed the Lovable visual editor is no longer used, so `lovable-tagger` has now also been removed from `vite.config.ts` and `package.json`.

The `public/lovable-uploads/` directory stays: both files in it are still referenced, one of them from the Alpe calculator page, and renaming the paths would mean touching that page and adding redirects for no visitor-visible benefit.

### Verified after the pass

62 routes pre-rendered, 62 URLs in the sitemap, 3,285 internal links with zero broken destinations, every page over 1,000 rendered words, typecheck clean, lint clean apart from pre-existing shadcn warnings.

The audit tooling used for this pass is checked in as a reusable skill at `.claude/skills/adsense-readiness/SKILL.md`, so the same review can be run against any other site.

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

The code side of this is **now done**. `index.html` sets Consent Mode v2 defaults before both gtag.js and the AdSense tag: denied for `ad_storage`, `ad_user_data`, `ad_personalization` and `analytics_storage` across the EEA, the UK and Switzerland, granted elsewhere.

What that means in practice: for EEA traffic, analytics and personalised advertising stay off until something calls `gtag('consent', 'update', ...)`. The GDPR message published in the AdSense console is what makes that call. **If no message is published, publish one**, or EEA visitors will simply never be measured. Non-EEA traffic is unaffected.

### One judgement call left alone

- **Em dashes** were normalised to plain hyphens site-wide except on the Alpe du Zwift calculator page, which was left untouched by request. `src/components/calculator/AlpeFacts.tsx` still contains a few.

The duplicate-content question previously listed here - the overlap between `/blog/the-mechanical-engineering-of-zwift-performance` and `/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed` - was resolved in the second pass by giving the first article a distinct scope rather than merging the two. See above.

## Corrections to the previous analysis

The earlier `ADSENSE_REJECTION_ANALYSIS.md` recommended removing the AdSense script before re-applying. That is backwards.

Google requires the code to be live during review. Its own help documentation lists "Your ad code is missing or incomplete" as one of a small number of reasons a site is not ready to show ads, the review flow asks you to confirm the code is placed before you can request a review, and the guidance says to place it on a live page because "test pages that are empty except for the code won't be approved".

The AdSense snippet and the `google-adsense-account` meta tag in `index.html`, and `public/ads.txt`, should all stay exactly where they are.

## Things worth knowing

- **ads.txt** is not mandatory but is strongly recommended, and doubles as a verification method. It is at `public/ads.txt` and served from the domain root.
- **AI-assisted content is not banned.** Google judges output quality, not production method. What it penalises is unreviewed content generated at scale to manipulate rankings. `/editorial-policy` states plainly where a human sets the argument, checks the numbers and takes responsibility.
- **A contact form is not required.** Google treats an email address, a postal address and a form as interchangeable. The site publishes all of the company details and an email address.
