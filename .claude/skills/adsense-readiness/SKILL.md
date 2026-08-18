---
name: adsense-readiness
description: End-to-end audit of a website in this repository for Google AdSense approval. Use when a site has been rejected ("low value content", "site does not comply", "under construction"), when preparing a first application, or when the user asks whether a site will pass ad-network review. Stack-agnostic - works for SPAs, static site generators, SSR frameworks, WordPress and hand-written HTML. Leads with what Google's crawler actually receives, then measures content depth, originality, trust signals and policy compliance, and produces a prioritised fix list.
argument-hint: [site URL] [build output dir]
---

# AdSense Readiness Review

Audit a website end-to-end, find every reason it would be rejected, fix what can be fixed in the repository, and hand back a prioritised list of what cannot.

This is a **measurement exercise, not an opinion exercise**.
Almost every failed AdSense application has a specific, checkable cause, and the single most common one is invisible from a browser.

---

## Mental model: you are writing for two different audiences

Everything in this skill follows from one fact. An AdSense application is judged by two things that see completely different websites.

**The crawler** (`Mediapartners-Google`, `AdsBot-Google`, `AdsBot-Google-Mobile`, `Google-Display-Ads-Bot`) fetches raw HTTP responses.
It does not reliably execute JavaScript for ad review.
If your content is assembled client-side, the crawler may see an empty container and nothing else.

**A human reviewer** opens the site in a browser and forms a judgement in well under a minute.
They land on a page, scan the navigation, click through to two or three more, and decide whether this looks like a real publication or like something built to hold ads.

The asymmetry that catches people out:

- The crawler decides whether your content **exists at all**. This is binary and it gates everything else.
- The human decides whether your content **is worth anything**. This is a judgement about the whole site, not any one page, and it is formed mostly from index pages, titles and summaries rather than from reading articles end to end.

A site can have 150,000 excellent words and be rejected because the crawler received 2 KB of empty shell.
A site can be perfectly crawlable and be rejected because every page title reads like it came out of the same template.

**Work the gates in order.** Never spend effort polishing prose on a site whose crawler view is empty. Never assume good bodies rescue bad packaging.

---

## Rules of engagement

Follow these while running the review. They are what separate a useful audit from a generic checklist.

1. **Measure before you opine.** Every claim in your report must come with a number and the command that produced it. "The content feels thin" is worthless. "23 of 61 pages have under 300 words of non-boilerplate text" is actionable.

2. **Fetch the live site, not the repo.** What is in `src/` is irrelevant. What matters is what the server returns. Check both, and treat any divergence as a finding in itself.

3. **Respect gates.** Phases 0, 1, 5 and 6 contain hard gates. If a gate fails, that failure is the headline of your report. Continue the audit for completeness, but do not bury a gate failure under styling suggestions.

4. **Never delete content without asking.** Removing pages changes traffic, backlinks and indexation. Present the option, recommend, and let the user decide. Rewriting in place is almost always the better default because it keeps the URL.

5. **Distinguish policy from heuristic.** Google publishes its policies but does not publish word counts, page counts or quality scores. Where this skill gives a number, it is a practitioner heuristic. Say so in your report. Do not invent thresholds and present them as Google's.

6. **Ask about history early.** Whether the site has already been rejected, when, with what stated reason, and whether anything has changed since, materially changes the advice. See Phase 0.

7. **Do not remove the ad code.** See Anti-patterns. This is the single most common self-inflicted wound.

---

## Phase overview

| Phase | Subject | Gate? | Typical time |
| --- | --- | --- | --- |
| 0 | Ground truth: stack, URLs, application history | **Gate** | 10 min |
| 1 | Crawlability and indexability | **Gate** | 20 min |
| 2 | Inventory and measurement | - | 20 min |
| 3 | Content sufficiency and duplication | - | 30 min |
| 4 | Originality, honesty and E-E-A-T | - | 60 min+ |
| 5 | Site identity and required pages | **Gate** | 20 min |
| 6 | Ad implementation and privacy law | **Gate** | 20 min |
| 7 | Navigation, UX and technical hygiene | - | 30 min |
| 8 | Fix, re-verify, report | - | remainder |

---

## Phase 0 - Ground truth  **[GATE]**

You cannot audit a site you have not identified. Establish these before anything else.

### Determine from the repository

```sh
# What is this built with?
cat package.json 2>/dev/null | head -40
ls -1 | grep -iE 'next.config|astro.config|nuxt.config|gatsby-config|vite.config|hugo.toml|config.toml|_config.yml|wp-config.php|Gemfile'

# Where does the built site land?
grep -rE '"(build|outDir|publicDir|output)"' package.json *.config.* 2>/dev/null | head

# What is the canonical hostname?
grep -rEho 'https?://[a-z0-9.-]+\.[a-z]{2,}' src/ public/ *.config.* 2>/dev/null \
  | sort | uniq -c | sort -rn | head
```

Classify the rendering model, because it predicts the Phase 1 result:

| Model | Crawler risk |
| --- | --- |
| Static HTML, SSG (Hugo, Jekyll, Astro, Eleventy) | Low |
| SSR / pre-rendered (Next.js, Nuxt, SvelteKit, prerendered Vite) | Low, but verify per-route |
| **Client-rendered SPA with no pre-render** | **Critical - assume Phase 1 fails until proven otherwise** |
| WordPress / traditional CMS | Low, but check caching plugins and JS-gated content |

### Ask the user (do not guess these)

- What is the live URL? Is the current `main` deployed to it?
- Has AdSense been applied for? **How many times, when, and what exact reason did Google give?**
- Has anything changed since the last rejection, and has Google re-crawled since?
- Are there other ad networks live, or has the site ever been in an ad network before?
- Is the site's traffic organic, or is any of it purchased or incentivised?

That third question matters more than it looks.
Reapplying while Google still has the old version cached invites the same answer regardless of what you fix.

**Gate:** if the site is not live at a public URL, stop. Nothing can be reviewed and AdSense cannot approve it.

---

## Phase 1 - Crawlability and indexability  **[GATE]**

This is the highest-yield phase in the entire skill. Run it first and run it properly.

### 1.1 The decisive test: what does the ad crawler receive?

```sh
URL="https://example.com"

# Bytes returned to the ad crawler
curl -sL -A "Mediapartners-Google" "$URL" -o /tmp/crawl.html -w "HTTP %{http_code}  %{size_download} bytes\n"

# Words of actual text in that response, with no JavaScript executed
perl -0777 -pe 's/<script.*?<\/script>//gsi; s/<style.*?<\/style>//gsi;
                s/<head.*?<\/head>//gsi; s/<[^>]+>/ /gs' /tmp/crawl.html \
  | tr -s ' \n\t' ' ' | wc -w
```

Interpretation:

- **Under ~50 words, or an empty `<div id="root">` / `<div id="app">`**: the crawler sees nothing. This is a **gate failure** and it is almost certainly the whole reason for rejection. Nothing else in this audit matters until it is fixed.
- **A few hundred words**: partial. Check whether the main content or just nav and footer came through.
- **Comparable to what a browser shows**: pass.

Repeat on at least five deep pages, not just the homepage.
Some frameworks pre-render the index and nothing else.

### 1.2 Per-page `<head>` uniqueness

Identical titles across a site are a strong "templated, low value" signal and they also destroy indexation.

```sh
for u in / /about /contact /blog /blog/some-post; do
  printf '%-28s %s\n' "$u" "$(curl -sL -A 'Mediapartners-Google' "$URL$u" \
    | grep -oiP '(?<=<title>).*?(?=</title>)' | head -1)"
done
```

Every page needs its own `<title>`, its own `<meta name="description">`, and a self-referencing `<link rel="canonical">` pointing at the **final** URL after redirects.

### 1.3 robots.txt

```sh
curl -sI "$URL/robots.txt" | head -3     # must be 200 and text/plain, not HTML
curl -s  "$URL/robots.txt"
```

The trap: **Google's ad crawlers ignore the `User-agent: *` group entirely.**
A permissive wildcard rule does not grant them access.
Name them explicitly:

```
User-agent: Mediapartners-Google
Allow: /

User-agent: AdsBot-Google
Allow: /

User-agent: AdsBot-Google-Mobile
Allow: /

User-agent: Google-Display-Ads-Bot
Allow: /
```

A `robots.txt` that returns an HTML page (common on SPAs with a catch-all rewrite) means the crawlers have no usable rules at all.

### 1.4 Soft 404s

```sh
curl -sIL -o /dev/null -w "%{http_code}\n" "$URL/this-page-does-not-exist-$(date +%s)"
```

Must be `404` or `410`.
A `200` with a shell page means **every** non-existent URL on the domain looks like a real but empty page.
On a SPA with a catch-all rewrite this produces soft 404s at infinite scale and it reads exactly like an auto-generated site.

### 1.5 Host and protocol consistency

```sh
for h in "http://example.com" "https://example.com" "http://www.example.com" "https://www.example.com"; do
  printf '%-32s %s -> %s\n' "$h" \
    "$(curl -sI -o /dev/null -w '%{http_code}' "$h")" \
    "$(curl -sI -o /dev/null -w '%{redirect_url}' "$h")"
done
```

Exactly one canonical host, everything else redirecting to it in a single hop, HTTPS everywhere.
Canonical tags, Open Graph URLs, sitemap entries and structured data must all point at the final URL, never at a redirect.

### 1.6 Sitemap and indexation

```sh
curl -s "$URL/sitemap.xml" | grep -c '<loc>'
```

- Sitemap exists, is valid XML, is referenced from `robots.txt`.
- URL count roughly matches the site's real page count.
- No `noindex` on content pages: `curl -sL "$URL/page" | grep -i 'noindex'` should be empty.
- If you have Search Console access, check Pages → Indexed. A site with almost nothing indexed will not be approved.

### Gate criteria for Phase 1

All of these must pass:

- [ ] Ad crawler receives the real content on the homepage **and** on deep pages
- [ ] Unique title, description and canonical per page
- [ ] `robots.txt` is plain text and does not block ad crawlers
- [ ] Unknown URLs return a real 404
- [ ] One canonical host, HTTPS, single-hop redirects
- [ ] Valid sitemap; content pages are not `noindex`

---

## Phase 2 - Inventory and measurement

Build a factual picture of the site before judging it.

### 2.1 Enumerate every public URL

In order of preference: the sitemap, then the framework's route registry, then a crawl of the built output.

```sh
curl -s "$URL/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g' > urls.txt
wc -l urls.txt
```

### 2.2 Measure each page

Use `scripts/inventory.mjs` (Appendix C). For every page it reports:

- total rendered words
- **unique words** (total minus boilerplate shared with the rest of the site)
- boilerplate ratio
- title, meta description and their lengths
- H1 count

**Unique word count is the number that matters.**
A page showing 1,200 words where 700 are navigation, sidebar and footer has 500 words of actual content.
Measuring raw word count flatters every page on a site with a heavy chrome.

### 2.3 Heuristic thresholds

Google publishes no minimum. These are practitioner heuristics - label them as such in your report.

| Unique words | Reading |
| --- | --- |
| < 150 | Thin. Will be counted against the site. |
| 150-300 | Thin unless the page is a genuine utility (a working tool, a reference table). |
| 300-600 | Acceptable if original and useful. |
| 600+ | Comfortable. |

| Site-level | Reading |
| --- | --- |
| Fewer than ~15 substantial pages | Frequently rejected as insufficient content. |
| Boilerplate ratio > 50% site-wide | Chrome is drowning the content. |
| More than ~20% of pages under 300 unique words | The long tail is dragging the site down. |

Utility pages are a real exception. A calculator that does something genuinely useful is valuable inventory even at 200 words, **provided the page also explains what it does and how**. Wrap tools in explanation.

---

## Phase 3 - Content sufficiency and duplication

### 3.1 Internal near-duplicates

Two articles covering the same ground are not a policy violation if the text differs, but they signal padding and they compete with each other.

Run `scripts/duplicates.mjs` (Appendix C). It shingles each page into word 5-grams and reports pairwise Jaccard similarity.

- **> 0.30**: effectively the same page. Merge, or differentiate hard.
- **0.15-0.30**: substantial overlap. Check the heading structures; if 5+ headings cover the same concepts, give one page a genuinely distinct scope.
- **< 0.15**: normal for a site with a consistent topic.

Also compare heading sets directly - it catches overlap that word-level shingling misses.

### 3.2 External duplication

Content copied from elsewhere, or spun from it, is a hard rejection.

Take 3-5 distinctive full sentences from different pages and search them verbatim in quotes.
If they appear on other domains, establish which came first.
Pay particular attention to:

- Product descriptions taken from manufacturers
- Text lifted from Wikipedia or documentation
- Syndicated or PLR articles
- Auto-translated versions of other people's content

### 3.3 Programmatic and templated page sets

Detect URL families that share a pattern (`/city/{name}`, `/compare/{a}-vs-{b}`, `/{keyword}-calculator`).

These are not automatically bad - a genuinely differentiated per-item page is fine.
They are bad when the only thing that changes between them is a noun.
Sample five, diff them, and see how much is actually different.

If the answer is "a place name and a number", that is **scaled content abuse** and it is one of the clearest rejection triggers.

### 3.4 Batch publishing

```sh
# Adapt to wherever the dates live
grep -rho 'date: *"[0-9-]*"' src/ | sort | uniq -c | sort -rn | head
```

Thirty articles sharing one publication date says "generated in a batch".
This is not fatal on its own, and you cannot honestly rewrite history by faking dates.
Treat it as context that raises the bar on everything else, and mention it in the report rather than trying to hide it.

### 3.5 Index, tag and archive pages

Auto-generated taxonomy pages are a classic source of thin content at scale.

- Category or tag pages with 1-2 items and no original text: add real introductory content or `noindex` them.
- Paginated archives beyond page 1: usually should not be indexed.
- Empty search results pages: must not be indexable.

---

## Phase 4 - Originality, honesty and E-E-A-T

This is where most of the actual work lives on a site that already passes Phases 1-3.
It is also the phase most checklists skip.

### 4.1 The packaging is more visible than the prose

Titles, excerpts and meta descriptions are not incidental metadata.
On a typical site each one is rendered many times: as the page `<h1>`, on the index, on category hubs, in "related" blocks, in sidebars, in search results and in social cards.

A reviewer opening `/blog` sees fifty **summaries**, not fifty articles.
If those summaries are all built from one template, the site reads as generated at scale no matter how good the underlying writing is.

Extract every title and excerpt into one list and read them together. That is the view the reviewer gets.

```sh
node scripts/register-scan.mjs ./dist
```

Tells to grep for, in titles, excerpts and opening paragraphs:

| Pattern | Why it reads badly |
| --- | --- |
| `Discover how...`, `Learn about...`, `Explore the...` | Verb-first SEO opener, near-universal in generated copy |
| `Complete guide to...`, `The Ultimate Guide to...` | Template. Damning when it appears more than twice on one site. |
| `Comprehensive analysis of...`, `Deep dive into...` | Same |
| `Master X: ...`, `Everything You Need to Know About X` | Same |
| `In this article, we'll...`, `Let's dive in`, `In conclusion` | Filler scaffolding |
| `evidence-based strategies for`, `unlock the secrets`, `game-changer`, `take your X to the next level` | Marketing filler with no information content |
| Emoji in body prose | Reads as unserious in editorial content |
| High exclamation-mark density | Same |
| `As an AI`, `I hope this helps`, `Certainly!` | Unedited model output. Immediate credibility loss. |

The fix is not synonym substitution.
Rewrite each summary to say what is specifically in **that** piece, including something concrete: a number, a limit, a claim the reader can check.

#### Find the second copy

Rewriting the summaries is only half the job, and the other half is easy to miss.

On most sites the same title and summary is written down in more than one place: a central index or front-matter block, **and** hardcoded again in "related posts" widgets, sidebars, hand-built card grids, hero sections, CTA blocks and JSON-LD.
Fix the index alone and the stale copies keep rendering, so the templated text survives on exactly the pages a reviewer clicks through to.

After rewriting, **re-run the scanner against the built output rather than the source**, and grep the build for the old phrasing:

```sh
npm run build
grep -rl "Complete guide to" ./dist --include=*.html
```

Any hit is a second copy. The durable fix is to delete it and derive from the single source, not to edit both.
Read times and dates hide in the same widgets and go stale the same way; watch for placeholders like `date: "Recent"`, which is a reliable sign the block was never wired to real data.

### 4.2 Verifiability - the honesty axis

This is the highest-value thing you can fix on an otherwise decent site, and it is invisible to most checklists.

Scan for **numbers presented as measured**, then ask where each one came from.

```sh
grep -rEno '(our|we) (analysis|research|study|data|testing|survey)[^.]{0,80}' src/ | head -40
grep -rEno '[0-9,]+\+? (users|customers|riders|studies|sessions|hours|tests)' src/ | head -40
grep -rEno '[0-9]{1,3}% of [a-z ]{3,40}' src/ | head -40
```

For each hit, one of three things must be true:

1. It links to where it was actually measured.
2. It is explicitly labelled as an estimate, a model output, or personal experience.
3. It is deleted.

There is no fourth option, and "it sounds about right" is not one of them.

Related failures to look for:

- **Citations that do not support the claim.** Open them. This happens constantly in generated content.
- **Forums as sources.** Reddit, Quora and product forums are not sources. Replace or remove.
- **Dead links.** Check every external link resolves.
- **First-hand claims the author cannot have.** A travel guide to a city the author has never visited; a product review of hardware they do not own. Either reframe honestly ("I have not ridden this; here is what I can tell you about preparing for it") or cut it.
- **Fabricated testimonials, reviews or case studies.** A hard rejection and, depending on jurisdiction, illegal.
- **Invented author personas.** Stock-photo bylines with fake credentials.

A site that says plainly "I do not know this, here is what I do know" reads as far more trustworthy than one that fills the gap confidently.
Reviewers are people, and this register is recognisable.

### 4.3 Author and publisher identity

Google's quality guidance leans heavily on knowing who is behind content.

- [ ] A named, real author (or a clearly identified organisation)
- [ ] An author page with genuine background, and an honest statement of what they are **not** qualified to advise on
- [ ] Byline on every article, linking to that page
- [ ] Publication date, and a modification date where content was revised
- [ ] Some statement of how content is produced, reviewed and corrected

An **editorial policy page** is one of the highest-leverage pages you can add.
It should cover sourcing, how claims are verified, how corrections are handled, advertising independence, and - if relevant - where AI is and is not used in production.

AI-assisted content is **not** against AdSense policy.
Google judges output quality, not production method.
What it penalises is unreviewed content generated at scale to game search.
Saying plainly that a human sets the argument, checks the numbers and takes responsibility is a strength, not an admission.

### 4.4 Voice consistency

Check that the site's stated identity matches how it is written.

A one-person site that says "our team of experts analysed" is claiming something untrue and it is trivially detectable.

```sh
grep -rn "our team\|our experts\|our analysts\|we surveyed\|our lab" src/ | head
```

### 4.5 Media

- Do you have the right to every image? Stock without licence is a copyright exposure.
- Are AI-generated images presented as photographs of real things?
- Are embedded videos yours, or someone else's presented as if they were? Frame them honestly.
- Alt text must describe the image, not repeat keywords. `alt="cheap flights to paris booking discount"` is spam signalling; `alt="Departures board at Charles de Gaulle Terminal 2"` is alt text.

---

## Phase 5 - Site identity and required pages  **[GATE]**

A reviewer needs to be able to tell who runs this site and how to reach them.

| Page | Required? | Notes |
| --- | --- | --- |
| Privacy policy | **Yes** | Must carry the Google-specific disclosures. See below. |
| About | **Yes in practice** | Who runs this, why it exists |
| Contact | **Yes** | Email, form or postal address - Google treats these as interchangeable. A contact form is not mandatory. |
| Terms of service | Recommended | |
| Editorial policy | Strong differentiator | See 4.3 |
| Cookie policy | Where law requires | May be part of the privacy policy |

The privacy policy must disclose, at minimum:

- That third-party vendors, **including Google**, use cookies to serve ads based on prior visits
- That users can opt out of personalised advertising via Google Ads Settings
- The opt-outs at `aboutads.info` and, for EU users, `youronlinechoices.eu`
- Any analytics in use, and how to opt out
- What data is collected, why, and the legal basis where GDPR applies

Also confirm:

- [ ] Consistent site name across `<title>`, header, footer and structured data
- [ ] Favicon and a valid Open Graph image
- [ ] Footer identifying the operator (and, if a company, its registered details)
- [ ] Every policy page is reachable from every page, normally via the footer

**Gate:** missing privacy policy or no way to contact the operator is a common, avoidable rejection.

---

## Phase 6 - Ad implementation and privacy law  **[GATE]**

### 6.1 The ad code must be live

```sh
curl -sL "$URL" | grep -c 'pagead2.googlesyndication.com'   # must be >= 1
curl -sL "$URL" | grep -o 'google-adsense-account[^>]*'      # verification meta tag
curl -s  "$URL/ads.txt"                                      # publisher line at the domain root
```

Google requires the ad code to be present on a live content page **during** review.
"Your ad code is missing or incomplete" is one of the reasons an application is rejected.
See Anti-patterns - people remove it, believing the opposite.

`ads.txt` is not mandatory but is strongly recommended and doubles as a verification method:

```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

### 6.2 Consent for EEA, UK and Switzerland traffic

If the site is operated from, or receives meaningful traffic from, those regions, you need a Google-certified CMP, and Consent Mode v2 signals should be wired up.

The ordering trap: the consent defaults must execute **before** `gtag.js` and before the AdSense tag, or cookies are set before consent can gate them.

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
    region: ['AT','BE','BG','CH','CY','CZ','DE','DK','EE','ES','FI','FR','GB','GR',
             'HR','HU','IE','IS','IT','LI','LT','LU','LV','MT','NL','NO','PL','PT',
             'RO','SE','SI','SK']
  });

  gtag('consent', 'default', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  });
</script>
<!-- gtag.js and the AdSense tag go AFTER this block -->
```

**Warn the user explicitly:** with denied defaults and no published consent message, EEA visitors are never measured and personalised ads never serve there.
The CMP is usually published from the AdSense console rather than committed to the repo, so you cannot verify it from the codebase. Ask.

### 6.3 Content policy scan

Ads cannot serve against certain content. Scan for anything in these categories and flag it.

- Adult or sexually suggestive content
- Shocking or violent content
- Weapons, explosives, ammunition
- Recreational drugs, tobacco, vaping; alcohol in some contexts
- Illegal or infringing content, including pirated media and cracked software
- Misrepresentation, fabricated news, unsubstantiated health or financial claims
- Content facilitating dishonest behaviour (exam cheating, fake documents, hacking)
- Unlicensed gambling
- Content that primarily exists to drive affiliate clicks with no original value

Also check: no page-level `noindex` on ad-bearing pages; no ads on error, login or thank-you pages; ads must not outweigh content.

---

## Phase 7 - Navigation, UX and technical hygiene

### 7.1 Navigation

A reviewer must be able to move around the site without effort.

- [ ] Persistent navigation on every page
- [ ] Every indexable page reachable from the homepage within about three clicks
- [ ] Footer links to all policy pages
- [ ] Working internal search, or a browsable index, on a content-heavy site
- [ ] No orphan pages present in the sitemap but linked from nowhere

Run `scripts/links.mjs` (Appendix C). **Zero broken internal links.** Broken navigation reads as an abandoned site.

### 7.2 Mobile

Reviewers commonly check on mobile, and most traffic is mobile.

- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] No horizontal scrolling at 360 px wide
- [ ] Tap targets not overlapping
- [ ] Text readable without zoom
- [ ] Wide content (tables, code, diagrams) scrolls inside its own container rather than the page

### 7.3 Looks-unfinished check

Google explicitly rejects sites that appear under construction.

```sh
grep -rniE 'lorem ipsum|coming soon|under construction|placeholder|TODO|FIXME|test page|sample text' \
  ./dist --include=*.html | head -20
```

Also look for: empty sections, dead buttons, "Page 1 of 1" pagination, category pages with no items, and forms that do not submit.

### 7.4 Stray third-party scripts

Scaffolding tools and abandoned integrations leave scripts behind.
They cost performance, add privacy exposure, and can look careless.

```sh
grep -rhoE 'src="https?://[^"]+"' ./dist --include=*.html \
  | sed -E 's|.*//([^/"]+).*|\1|' | sort | uniq -c | sort -rn
```

Justify every host in that list. Remove anything unused.

### 7.5 Performance sanity

Not a formal AdSense criterion, but it feeds "site experience" and it is cheap to check.

- Images sized appropriately and in a modern format; `loading="lazy"` below the fold
- No multi-megabyte images (check `find ./public -size +1M`)
- Content visible without JavaScript where possible; never leave content at `opacity: 0` waiting on an observer that may not fire
- Run Lighthouse on the homepage and one article

---

## Phase 8 - Fix, re-verify, report

### 8.1 Triage

Sort every finding into exactly one bucket.

| Bucket | Definition | Action |
| --- | --- | --- |
| **Gate** | Blocks approval outright: crawler sees nothing, no privacy policy, no contact, ad code absent, prohibited content | Fix before anything else |
| **High** | Very likely the stated rejection reason: thin content, scaled/duplicated content, no original value, templated packaging | Fix in this pass |
| **Medium** | Weakens the application: E-E-A-T gaps, unverifiable claims, register, navigation, thin taxonomy pages | Fix in this pass if time allows |
| **Low** | Polish: alt text, meta lengths, deprecated attributes, minor UX | Batch at the end |

### 8.2 Fix, in this order

1. Crawlability. Everything else is invisible until this is right.
2. Required pages and ad implementation. Cheap, and they are gates.
3. Packaging: titles, excerpts, meta descriptions. Highest visible impact per hour spent.
4. The weakest 10-20% of pages: rewrite, merge or expand. Ask before deleting.
5. Verifiability: sourcing, honest framing, dead links.
6. Navigation and UX.
7. Polish.

### 8.3 Re-verify

Re-run every measurement after fixing. Ship nothing on the assumption that a change worked.

```sh
npm run build            # or the project's equivalent
node scripts/inventory.mjs ./dist
node scripts/links.mjs ./dist
node scripts/duplicates.mjs ./dist
node scripts/register-scan.mjs ./dist
# then, after deploying:
curl -sL -A "Mediapartners-Google" "$URL" | wc -c
```

Also confirm you have not made things worse:

- Total word count should not have collapsed. Replacing filler with substance should hold volume roughly steady while raising density.
- Internal links: still zero broken.
- Every page still renders in the built output.

### 8.4 Report

Use the template in Appendix D.
Lead with gate failures. Give numbers. Separate what you fixed from what needs a human.

---

## Appendix A - What Google's rejection reasons actually mean

Google's messages are deliberately generic. Translations, in rough order of frequency:

| Stated reason | What it usually means |
| --- | --- |
| **Low value content** | Any of: crawler receives nothing; pages too thin; content duplicated or spun; nothing original versus what already ranks; templated at scale. Check crawlability **first** - it is invisible from a browser and it is the most common cause on JS-heavy sites. |
| **Site does not comply with Google policies** | A content-policy category, or something structural like scraped content or misrepresentation. |
| **Under construction** | Placeholder text, empty sections, broken navigation, or too few pages. Also triggered when the crawler gets an empty shell. |
| **Ad code missing or incomplete** | Snippet absent, on the wrong pages, or removed before applying. |
| **Site unreachable / cannot be reviewed** | DNS, hosting, geo-blocking, aggressive bot protection or a `robots.txt` blocking ad crawlers. Check Cloudflare-style protection - it can block reviewers. |
| **Insufficient content** | Too few substantial pages. Adding thin pages makes this worse, not better. |
| **Valuable inventory: no content** | The specific pages carrying ad code have little or nothing on them. |

Google's own published examples of low-value pages include "too little text", pages that look "under construction", and test pages "empty except for the code".
A client-rendered app with no pre-rendering hits all three simultaneously, whatever is in the repository.

---

## Appendix B - Anti-patterns

Things people do that make the situation worse. Several are actively counterproductive.

**Removing the ad code before reapplying.**
This is backwards and it is the most common self-inflicted failure.
Google requires the code to be live during review, the flow asks you to confirm it is placed, and "ad code is missing" is itself a rejection reason.
Leave the snippet, the verification meta tag and `ads.txt` exactly where they are.

**Reapplying immediately after fixing.**
If Google's cache still holds the broken version you get the same answer.
Deploy, submit the sitemap, confirm in Search Console that pages are indexed **with real content**, then apply. Usually one to two weeks.

**Adding more pages to fix "insufficient content".**
Ten more thin pages makes a thin site thinner.
Depth on existing pages beats breadth every time.

**Padding word count.**
Reviewers and classifiers both detect filler. A tight 600-word page beats a padded 2,000-word one.

**Rewriting dates to hide batch publishing.**
Dishonest, detectable via crawl history, and it breaks the trust signal you are trying to build.

**Deleting pages without checking traffic.**
Ask first. Rewriting in place keeps the URL, its history and its links.

**Treating AI assistance as the problem.**
It is not against policy. Unreviewed scale is. Fix the review step, not the tool.

**Trusting the browser view.**
Your browser runs JavaScript. The ad crawler may not. Always fetch with `curl` and a crawler user agent.

**Ignoring the mobile view.**
A large share of reviews happen on mobile.

**Assuming a second rejection has the same cause as the first.**
Re-run Phase 0 and Phase 1 every time. Fixing the crawler often reveals a content problem that was previously hidden behind it.

---

## Appendix C - Scripts

Portable Node scripts, no dependencies. Drop them in `scripts/` and adapt the selectors to the project.
Each takes a directory of built HTML, or a file of URLs.

### `scripts/inventory.mjs`

Per-page word counts, boilerplate ratio and `<head>` audit. The core measurement tool.

```js
// Usage: node scripts/inventory.mjs ./dist [minUniqueWords=300]
import fs from 'fs';
import path from 'path';

const ROOT = process.argv[2] || './dist';
const MIN = Number(process.argv[3] || 300);

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(ROOT);

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#x?[0-9a-f]+;/gi, ' ');

const tag = (html, re) => (html.match(re)?.[1] ?? '').trim();

// Route as it will be served, independent of how ROOT was spelled on the CLI.
const rel = (f) =>
  '/' + path.relative(ROOT, f).split(path.sep).join('/').replace(/(^|\/)index\.html$/, '$1');

// Boilerplate = sentences appearing on more than 70% of pages.
const seen = new Map();
const pages = files.map((f) => {
  const html = fs.readFileSync(f, 'utf8');
  const text = strip(html).replace(/\s+/g, ' ').trim();
  const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => s.split(' ').length > 3);
  for (const s of new Set(sentences)) seen.set(s, (seen.get(s) || 0) + 1);
  return { f, html, text, sentences };
});

const cutoff = files.length * 0.7;
const boiler = new Set([...seen].filter(([, n]) => n > cutoff).map(([s]) => s));

const words = (s) => s.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w)).length;
const rows = pages.map(({ f, html, text, sentences }) => {
  const total = words(text);
  const unique = sentences.filter((s) => !boiler.has(s)).reduce((n, s) => n + words(s), 0);
  const title = tag(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const desc = tag(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  return {
    url: rel(f),
    total,
    unique,
    boiler: total ? Math.round(((total - unique) / total) * 100) : 0,
    title,
    tLen: title.length,
    dLen: desc.length,
    h1: (html.match(/<h1[\s>]/gi) || []).length,
  };
});

rows.sort((a, b) => a.unique - b.unique);
console.log('unique  total  boiler%  h1  tLen  dLen  url');
for (const r of rows) {
  console.log(
    `${String(r.unique).padStart(6)}${String(r.total).padStart(7)}${String(r.boiler).padStart(8)}%` +
      `${String(r.h1).padStart(4)}${String(r.tLen).padStart(6)}${String(r.dLen).padStart(6)}  ${r.url}`,
  );
}

const thin = rows.filter((r) => r.unique < MIN);
const dupTitles = [...new Map(rows.map((r) => [r.title, 0])).keys()].length;
console.log(`\nPages: ${rows.length}`);
console.log(`Thin (< ${MIN} unique words): ${thin.length} (${Math.round((thin.length / rows.length) * 100)}%)`);
console.log(`Distinct titles: ${dupTitles}/${rows.length}${dupTitles < rows.length ? '   <-- DUPLICATE TITLES' : ''}`);
console.log(`Titles > 60 chars: ${rows.filter((r) => r.tLen > 60).length}`);
console.log(`Descriptions outside 120-155: ${rows.filter((r) => r.dLen < 120 || r.dLen > 155).length}`);
console.log(`Pages without exactly one H1: ${rows.filter((r) => r.h1 !== 1).length}`);
```

### `scripts/duplicates.mjs`

Pairwise near-duplicate detection via 5-gram shingles.

```js
// Usage: node scripts/duplicates.mjs ./dist [threshold=0.15]
import fs from 'fs';
import path from 'path';

const ROOT = process.argv[2] || './dist';
const T = Number(process.argv[3] || 0.15);

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(ROOT);

const shingles = (html) => {
  const w = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .toLowerCase()
    .split(/\W+/)
    .filter(Boolean);
  const s = new Set();
  for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(' '));
  return s;
};

const rel = (f) =>
  '/' + path.relative(ROOT, f).split(path.sep).join('/').replace(/(^|\/)index\.html$/, '$1');

const docs = files.map((f) => ({ url: rel(f), s: shingles(fs.readFileSync(f, 'utf8')) }));

const jaccard = (a, b) => {
  let i = 0;
  for (const x of a) if (b.has(x)) i++;
  return i / (a.size + b.size - i || 1);
};

const hits = [];
for (let i = 0; i < docs.length; i++)
  for (let j = i + 1; j < docs.length; j++) {
    const sim = jaccard(docs[i].s, docs[j].s);
    if (sim >= T) hits.push({ sim, a: docs[i].url, b: docs[j].url });
  }

hits.sort((x, y) => y.sim - x.sim);
if (!hits.length) console.log(`No page pairs above ${T} similarity.`);
for (const h of hits) console.log(`${h.sim.toFixed(3)}  ${h.a}\n       ${h.b}\n`);
```

### `scripts/register-scan.mjs`

Flags the generated-content tells described in Phase 4.1.

```js
// Usage: node scripts/register-scan.mjs ./dist
import fs from 'fs';
import path from 'path';

const ROOT = process.argv[2] || './dist';

const TELLS = [
  [/\bdiscover how\b/gi, 'opener: "Discover how"'],
  [/\blearn (about|how)\b/gi, 'opener: "Learn about/how"'],
  [/\bexplore the\b/gi, 'opener: "Explore the"'],
  [/\bcomplete guide to\b/gi, 'template: "Complete guide to"'],
  [/\b(the )?ultimate guide\b/gi, 'template: "Ultimate guide"'],
  [/\bcomprehensive (guide|analysis|overview)\b/gi, 'template: "Comprehensive X"'],
  [/\bdeep dive into\b/gi, 'template: "Deep dive into"'],
  [/\beverything you need to know\b/gi, 'template: "Everything you need to know"'],
  [/\bin this (article|post|guide),? we('ll| will)\b/gi, 'filler: "In this article we will"'],
  [/\blet's dive (in|into)\b/gi, 'filler: "Let\'s dive in"'],
  [/\bin conclusion\b/gi, 'filler: "In conclusion"'],
  [/\bevidence-based strategies\b/gi, 'filler: "evidence-based strategies"'],
  [/\bgame[- ]changer\b/gi, 'filler: "game-changer"'],
  [/\bunlock the secrets\b/gi, 'filler: "unlock the secrets"'],
  [/\btake your \w+ to the next level\b/gi, 'filler: "next level"'],
  [/\bas an ai\b|\bi hope this helps\b|\bcertainly!/gi, 'UNEDITED MODEL OUTPUT'],
  [/[\u{1F300}-\u{1FAFF}]/gu, 'emoji in prose'],
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(ROOT);

const totals = new Map();
let flagged = 0;

for (const f of files) {
  const text = fs
    .readFileSync(f, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');

  const found = [];
  for (const [re, label] of TELLS) {
    const n = (text.match(re) || []).length;
    if (n) {
      found.push(`${label} x${n}`);
      totals.set(label, (totals.get(label) || 0) + n);
    }
  }
  const bangs = (text.match(/!/g) || []).length;
  if (bangs > 5) found.push(`exclamation marks x${bangs}`);

  if (found.length) {
    flagged++;
    console.log(`/${path.relative(ROOT, f).split(path.sep).join('/')}\n    ${found.join('\n    ')}\n`);
  }
}

console.log(`\n${flagged}/${files.length} pages flagged.`);
console.log('\nSite-wide totals (a template used many times is the real signal):');
for (const [label, n] of [...totals].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(4)}  ${label}`);
}
```

### `scripts/links.mjs`

Internal link integrity against the built output.

```js
// Usage: node scripts/links.mjs ./dist
import fs from 'fs';
import path from 'path';

const ROOT = process.argv[2] || './dist';

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(ROOT);

const exists = (route) => {
  if (route === '/') return fs.existsSync(path.join(ROOT, 'index.html'));
  const c = route.replace(/^\//, '').replace(/\/$/, '');
  return (
    fs.existsSync(path.join(ROOT, c, 'index.html')) ||
    fs.existsSync(path.join(ROOT, `${c}.html`)) ||
    fs.existsSync(path.join(ROOT, c))
  );
};

const broken = new Map();
const hosts = new Set();
let internal = 0;

for (const f of files) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:)?\/\//.test(href)) {
      try { hosts.add(new URL(href.startsWith('//') ? 'https:' + href : href).host); } catch {}
      continue;
    }
    if (/^(#|mailto:|tel:|javascript:)/.test(href)) continue;
    const route = href.split('#')[0].split('?')[0];
    if (!route || /\.(css|js|png|jpe?g|webp|avif|svg|ico|xml|txt|json|woff2?|pdf)$/i.test(route)) continue;
    internal++;
    if (!exists(route)) {
      if (!broken.has(route)) broken.set(route, new Set());
      broken.get(route).add('/' + path.relative(ROOT, f).split(path.sep).join('/'));
    }
  }
}

console.log(`Pages: ${files.length}   Internal links: ${internal}   Broken: ${broken.size}`);
for (const [route, from] of broken) {
  console.log(`\n  BROKEN ${route}\n    from: ${[...from].slice(0, 5).join(', ')}`);
}
console.log('\nExternal hosts (justify every one):');
for (const h of [...hosts].sort()) console.log('  ' + h);
process.exitCode = broken.size ? 1 : 0;
```

### Live crawler check (shell)

```sh
# Usage: ./crawler-view.sh https://example.com urls.txt
URL="$1"
while read -r u; do
  body=$(curl -sL -A "Mediapartners-Google" "$u")
  words=$(printf '%s' "$body" | perl -0777 -pe 's/<script.*?<\/script>//gsi; s/<head.*?<\/head>//gsi; s/<[^>]+>/ /gs' | tr -s ' \n' ' ' | wc -w)
  title=$(printf '%s' "$body" | grep -oiP '(?<=<title>).*?(?=</title>)' | head -1)
  printf '%6s words  %-60s %s\n' "$words" "$u" "$title"
done < "${2:-urls.txt}"
```

---

## Appendix D - Report template

```markdown
# AdSense readiness review: <site>

Reviewed <date> against <commit>. Live site fetched as `Mediapartners-Google`.

## Verdict

<One paragraph. Ready / not ready, and the single most important reason.>

## Gate failures

<Anything that blocks approval outright. Empty section is a good sign - say so.>

## Findings

| # | Severity | Finding | Evidence | Status |
|---|----------|---------|----------|--------|
| 1 | Gate | Ad crawler receives 2,280 bytes and 0 words on every URL | `curl -A Mediapartners-Google` on 6 URLs | Fixed |
| 2 | High | 41 of 42 article summaries use one template | `register-scan.mjs`: "Complete guide to" x12 | Fixed |
| 3 | Medium | 6 articles claim first-hand experience of places the author has not visited | Manual review | Rewritten |

## Measurements

| Metric | Before | After |
| --- | --- | --- |
| Bytes to ad crawler (homepage) | 2,280 | 58,197 |
| Pages with unique title | 1/62 | 62/62 |
| Pages under 300 unique words | 23 | 0 |
| Broken internal links | 14 | 0 |
| Near-duplicate page pairs (>0.15) | 3 | 0 |
| Total unique words site-wide | 141,000 | 152,000 |

## Fixed in this pass

<What changed, grouped, with file paths.>

## Needs a human

<Deploy, submit sitemap, publish CMP, decisions you declined to make alone.>

## Not addressed, and why

<Anything deliberately left. Be explicit rather than silent.>
```

---

## Appendix E - Submission protocol

Order matters. Applying at the wrong moment wastes the attempt.

1. **Deploy** every fix. Nothing counts until it is live.
2. **Verify from outside**: re-run the crawler-view check against the production URL, not a preview deployment.
3. **Submit the sitemap** in Google Search Console.
4. **Use URL Inspection** on the homepage and two or three deep pages. Confirm the rendered HTML Google holds now contains real content.
5. **Wait for re-crawl.** Typically one to two weeks. Confirm in Search Console that pages are indexed **with content**, not merely discovered.
6. **Confirm the ad code is still live**, along with `ads.txt` and the verification meta tag.
7. **Publish the consent message** if you serve EEA, UK or Swiss traffic.
8. **Then** request review in AdSense.

If rejected again, do not guess.
Re-run Phase 0 and Phase 1 from scratch: fixing one layer routinely exposes a problem the previous one was masking.

---

## Quick reference

Run these four commands to triage any site in about five minutes.

```sh
# 1. Does the crawler see anything? (the single highest-yield check)
curl -sL -A "Mediapartners-Google" "$URL" \
  | perl -0777 -pe 's/<script.*?<\/script>//gsi; s/<head.*?<\/head>//gsi; s/<[^>]+>/ /gs' \
  | tr -s ' \n' ' ' | wc -w

# 2. Are unknown URLs real 404s?
curl -sIL -o /dev/null -w "%{http_code}\n" "$URL/no-such-page-$(date +%s)"

# 3. Can ad crawlers read robots.txt, and is it plain text?
curl -sI "$URL/robots.txt" | head -2 && curl -s "$URL/robots.txt"

# 4. Is the ad code live?
curl -sL "$URL" | grep -c googlesyndication
```

If check 1 returns a number under 50, stop reading and fix that.
It is almost certainly the whole problem.
