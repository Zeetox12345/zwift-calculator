/**
 * The SEO route registry.
 *
 * Every URL the site serves is described exactly once here. Three consumers
 * read it:
 *
 *   1. `SEOMetaTags` applies the entry to `document.head` on client-side
 *      navigation.
 *   2. `scripts/prerender.mjs` bakes the same tags into the static HTML that
 *      crawlers download, so the page is complete without running JavaScript.
 *   3. `scripts/prerender.mjs` also generates `sitemap.xml` from this list, so
 *      the sitemap can never drift away from the routes that actually exist.
 */

import { blogPosts, categoryPages } from "@/data/blogPosts";
import { faqEntries } from "@/data/faq";
import { SITE, AUTHOR, ORGANIZATION, absoluteUrl } from "./siteConfig";

export type SeoType = "website" | "article";

export interface Breadcrumb {
  name: string;
  path: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface SeoRoute {
  /** Route path exactly as registered in App.tsx */
  path: string;
  /** <title> - aim for 50-60 characters */
  title: string;
  /** Meta description - aim for 120-155 characters */
  description: string;
  keywords?: string;
  type: SeoType;
  /** Site-relative image used for og:image / twitter:image */
  image?: string;
  /** ISO date, articles only */
  datePublished?: string;
  /** ISO date, articles only */
  dateModified?: string;
  /** Article section / category */
  section?: string;
  breadcrumbs?: Breadcrumb[];
  /** Rendered as FAQPage structured data when present */
  faq?: FaqEntry[];
  /** Marks a page as an interactive tool for structured data */
  tool?: { name: string; description: string };
  sitemapPriority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  /** Excluded from the sitemap and marked noindex */
  noindex?: boolean;
}

const HOME_CRUMB: Breadcrumb = { name: "Home", path: "/" };
const BLOG_CRUMB: Breadcrumb = { name: "Blog", path: "/blog" };

/** Pages that are not articles: the homepage, the tools, and the trust pages. */
const staticRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Zwift Calculator | Climb Times, FTP & Training Analysis",
    description:
      "Free Zwift calculators for climb times, FTP and racing category, with the equations published so you can check every number yourself.",
    keywords:
      "Zwift calculator, Alpe du Zwift time, Zwift FTP calculator, Zwift racing category, watts per kilogram, indoor cycling",
    type: "website",
    breadcrumbs: [HOME_CRUMB],
    sitemapPriority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/alpeduzwiftcalculator",
    title: "Alpe du Zwift Calculator | Predict Your Climbing Time",
    description:
      "Predict your Alpe du Zwift time from your weight and power. Built on a regression of real Zwift climb data, with pacing advice and the full method explained.",
    keywords:
      "Alpe du Zwift calculator, Alpe du Zwift time, Zwift climbing calculator, Zwift time predictor, Zwift w/kg calculator",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Alpe du Zwift Calculator", path: "/alpeduzwiftcalculator" }],
    tool: {
      name: "Alpe du Zwift Time Calculator",
      description:
        "Estimates your finishing time for Zwift's 12.2 km, 1,036 m Alpe du Zwift climb from your body weight and sustainable power.",
    },
    sitemapPriority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/ventop-calculator",
    title: "Ven-Top Calculator | Predict Your Zwift Ventoux Time",
    description:
      "Estimate your Ven-Top climbing time in Zwift from your weight and power. Includes the climb profile, pacing strategy and how Ven-Top compares with Alpe du Zwift.",
    keywords:
      "Ven Top calculator, Zwift Ven Top time, Ventoux Zwift, Ven-Top climbing calculator, Zwift time predictor",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Ven-Top Calculator", path: "/ventop-calculator" }],
    tool: {
      name: "Ven-Top Time Calculator",
      description:
        "Estimates your finishing time for Zwift's Ven-Top climb in France from your body weight and sustainable power.",
    },
    sitemapPriority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/alpe-vs-ventop",
    title: "Alpe du Zwift vs Ven-Top: Which Climb Is Harder?",
    description:
      "A side-by-side comparison of Zwift's two biggest climbs: gradient profiles, pacing demands, typical times at every W/kg, and which one suits your riding.",
    keywords:
      "Alpe du Zwift vs Ven Top, Zwift climbing comparison, hardest Zwift climb, Zwift climbs compared",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Alpe du Zwift vs Ven-Top", path: "/alpe-vs-ventop" }],
    sitemapPriority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/zwift-climb-time-calculator",
    title: "Zwift Climb Time Calculator | Any Climb, Any Rider",
    description:
      "Estimate your time on any sustained Zwift climb from your weight, height and power. Physics-based, with the full equation and every constant published.",
    keywords:
      "Zwift climb calculator, Zwift climb time, Epic KOM time, Innsbruck KOM calculator, cycling climbing calculator, VAM calculator",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Climb Time Calculator", path: "/zwift-climb-time-calculator" }],
    tool: {
      name: "Zwift Climb Time Calculator",
      description:
        "Estimates finishing time on any sustained Zwift climb from rider weight, height, equipment weight and sustainable power, using a steady-state cycling power model.",
    },
    sitemapPriority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/zwift-ftp-calculator",
    title: "Zwift FTP Calculator & Training Zones",
    description:
      "Turn a 20-minute, 8-minute or ramp test into an FTP number and a full set of Coggan training zones, with every multiplier explained and sourced.",
    keywords:
      "Zwift FTP calculator, FTP test calculator, 20 minute FTP test, ramp test FTP, cycling training zones, Coggan zones, watts per kilogram",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "FTP Calculator", path: "/zwift-ftp-calculator" }],
    tool: {
      name: "Zwift FTP and Training Zones Calculator",
      description:
        "Converts a cycling field test into a functional threshold power figure and the seven power-based training zones derived from it.",
    },
    sitemapPriority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/zwift-racing-category-calculator",
    title: "Zwift Racing Category Calculator | Which Pen Are You In?",
    description:
      "Work out your Zwift racing category from zFTP and zMAP, see where Racing Score pens fall, and find out exactly what it takes to move up.",
    keywords:
      "Zwift racing category calculator, Zwift category enforcement, Zwift Racing Score, zFTP, zMAP, Zwift race pens, ZwiftPower categories",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Racing Category Calculator", path: "/zwift-racing-category-calculator" }],
    tool: {
      name: "Zwift Racing Category Calculator",
      description:
        "Determines a rider's Zwift Pace Category Enforcement category from zFTP and zMAP, and maps a Zwift Racing Score onto its start pen.",
    },
    sitemapPriority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/zwift-climbs",
    title: "Every Timed Climb in Zwift | Length, Elevation, Gradient",
    description:
      "A sortable reference table of every timed KOM and QOM segment in Zwift, with length, elevation gain, average gradient and an estimated time at 3.5 W/kg.",
    keywords:
      "Zwift climbs list, Zwift KOM segments, Zwift climb elevation, Alpe du Zwift gradient, Epic KOM length, Zwift climbing reference",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Zwift Climb Data", path: "/zwift-climbs" }],
    sitemapPriority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/faq",
    title: "Zwift Calculator FAQ | Climbing, Power & W/kg Answers",
    description:
      "Straight answers about the calculators, climbing times on Zwift, what W/kg really means, trainer accuracy, and how this site is run.",
    keywords:
      "Zwift FAQ, Alpe du Zwift time questions, what is a good w/kg, Zwift trainer accuracy, Zwift FTP questions",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "FAQ", path: "/faq" }],
    faq: faqEntries,
    sitemapPriority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/editorial-policy",
    title: "Editorial Policy | How ZwiftCalculator.com Is Run",
    description:
      "How facts get sourced, how the calculators are validated, where AI is and is not used, how corrections work, and why advertising never touches the writing.",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Editorial Policy", path: "/editorial-policy" }],
    sitemapPriority: 0.5,
    changefreq: "yearly",
  },
  {
    path: "/blog",
    title: "Zwift Training Articles & Performance Analysis",
    description:
      "Long-form articles on Zwift training, racing tactics, indoor setup and the physics of virtual cycling - written and maintained by a single named author.",
    keywords:
      "Zwift blog, Zwift training articles, indoor cycling guides, Zwift racing tips, virtual cycling analysis",
    type: "website",
    breadcrumbs: [HOME_CRUMB, BLOG_CRUMB],
    sitemapPriority: 0.8,
    changefreq: "weekly",
  },
  {
    path: "/about-us",
    title: "About ZwiftCalculator.com",
    description:
      "Who runs ZwiftCalculator.com, why it exists, how the tools are funded, and the standards every calculator and article on the site is held to.",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "About Us", path: "/about-us" }],
    sitemapPriority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/author",
    title: "Christian Lassen Dam | About the Author",
    description:
      "Background, qualifications and cycling history of Christian Lassen Dam, the mechanical engineering student who builds and maintains ZwiftCalculator.com.",
    type: "website",
    image: AUTHOR.image,
    breadcrumbs: [HOME_CRUMB, { name: "Author", path: "/author" }],
    sitemapPriority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/contact",
    title: "Contact ZwiftCalculator.com",
    description:
      "Get in touch about a calculator result, a correction, a feature request or a privacy question. Every message reaches the person who built the site.",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Contact", path: "/contact" }],
    sitemapPriority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | ZwiftCalculator.com",
    description:
      "How ZwiftCalculator.com handles personal data, cookies, analytics and advertising, including your GDPR and CCPA rights and how to exercise them.",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Privacy Policy", path: "/privacy-policy" }],
    sitemapPriority: 0.4,
    changefreq: "yearly",
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | ZwiftCalculator.com",
    description:
      "The terms that apply when you use ZwiftCalculator.com, including how the calculator estimates should and should not be relied on.",
    type: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Terms of Service", path: "/terms-of-service" }],
    sitemapPriority: 0.4,
    changefreq: "yearly",
  },
];

const categoryDescriptions: Record<string, { title: string; description: string }> = {
  Training: {
    title: "Zwift Training Articles | Plans, Zones & Progression",
    description:
      "Every training article on ZwiftCalculator.com: structured plans, FTP progression, periodisation, recovery and how to make indoor hours actually count.",
  },
  Racing: {
    title: "Zwift Racing Articles | Tactics, Categories & PowerUps",
    description:
      "Zwift racing tactics from the start pen to the finish line: categories, drafting, PowerUp timing, pacing and the mistakes that cost you places.",
  },
  Setup: {
    title: "Zwift Setup Articles | Trainers, Cooling & Accuracy",
    description:
      "Getting your pain cave right: trainers, cooling, sweat protection, power accuracy, network stability and the small details that change your numbers.",
  },
  "Data Analysis": {
    title: "Zwift Data Analysis | Numbers Behind Virtual Cycling",
    description:
      "Where the numbers come from: regression on real climb data, power-to-weight benchmarks, subscription economics and what the data does and does not say.",
  },
};

const categoryRoutes: SeoRoute[] = categoryPages.map((c) => ({
  path: c.slug,
  title: categoryDescriptions[c.id]?.title ?? `${c.name} Articles | ZwiftCalculator.com`,
  description:
    categoryDescriptions[c.id]?.description ??
    `Articles about ${c.name.toLowerCase()} on ZwiftCalculator.com.`,
  type: "website" as const,
  breadcrumbs: [HOME_CRUMB, BLOG_CRUMB, { name: c.name, path: c.slug }],
  sitemapPriority: 0.6,
  changefreq: "weekly" as const,
}));

const articleRoutes: SeoRoute[] = blogPosts.map((post) => ({
  path: post.slug,
  title: post.metaTitle,
  description: post.metaDescription,
  type: "article" as const,
  datePublished: post.date,
  dateModified: post.dateModified ?? post.date,
  section: post.category,
  breadcrumbs: [HOME_CRUMB, BLOG_CRUMB, { name: post.title, path: post.slug }],
  sitemapPriority: 0.7,
  changefreq: "monthly" as const,
}));

export const seoRoutes: SeoRoute[] = [...staticRoutes, ...categoryRoutes, ...articleRoutes];

const routeIndex = new Map(seoRoutes.map((r) => [r.path, r]));

export function getSeoRoute(pathname: string): SeoRoute | undefined {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routeIndex.get(clean || "/");
}

/** All indexable paths, used to drive pre-rendering and the sitemap. */
export const allRoutePaths: string[] = seoRoutes.filter((r) => !r.noindex).map((r) => r.path);

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

const organizationId = `${SITE.url}/#organization`;
const websiteId = `${SITE.url}/#website`;
const authorId = `${SITE.url}${AUTHOR.path}#person`;

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: SITE.name,
    legalName: ORGANIZATION.legalName,
    url: `${SITE.url}/`,
    email: SITE.email,
    vatID: ORGANIZATION.vatId,
    foundingDate: SITE.founded,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.defaultImage),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ORGANIZATION.street,
      postalCode: ORGANIZATION.postalCode,
      addressLocality: ORGANIZATION.city,
      addressCountry: ORGANIZATION.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.email,
      availableLanguage: ["English", "Danish"],
    },
  };
}

function personNode() {
  return {
    "@type": "Person",
    "@id": authorId,
    name: AUTHOR.name,
    url: absoluteUrl(AUTHOR.path),
    image: absoluteUrl(AUTHOR.image),
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.description,
    knowsAbout: [...AUTHOR.knowsAbout],
    affiliation: { "@type": "CollegeOrUniversity", name: AUTHOR.affiliation },
    worksFor: { "@id": organizationId },
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.locale,
    publisher: { "@id": organizationId },
  };
}

function breadcrumbNode(route: SeoRoute) {
  if (!route.breadcrumbs || route.breadcrumbs.length < 2) return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: route.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function articleNode(route: SeoRoute) {
  return {
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(route.path)}#article`,
    headline: route.breadcrumbs?.[route.breadcrumbs.length - 1]?.name ?? route.title,
    description: route.description,
    datePublished: route.datePublished,
    dateModified: route.dateModified ?? route.datePublished,
    articleSection: route.section,
    inLanguage: SITE.locale,
    author: { "@id": authorId },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": websiteId },
    image: absoluteUrl(route.image ?? SITE.defaultImage),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(route.path) },
  };
}

function toolNode(route: SeoRoute) {
  if (!route.tool) return null;
  return {
    "@type": "WebApplication",
    "@id": `${absoluteUrl(route.path)}#app`,
    name: route.tool.name,
    description: route.tool.description,
    url: absoluteUrl(route.path),
    applicationCategory: "SportsApplication",
    operatingSystem: "Any modern web browser",
    browserRequirements: "Requires JavaScript",
    inLanguage: SITE.locale,
    author: { "@id": authorId },
    publisher: { "@id": organizationId },
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  };
}

function faqNode(route: SeoRoute) {
  if (!route.faq || route.faq.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(route.path)}#faq`,
    mainEntity: route.faq.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

/** Build the JSON-LD graph for a route. */
export function buildJsonLd(route: SeoRoute): Record<string, unknown> {
  const graph: Record<string, unknown>[] = [organizationNode(), websiteNode(), personNode()];

  const breadcrumbs = breadcrumbNode(route);
  if (breadcrumbs) graph.push(breadcrumbs);

  if (route.type === "article") graph.push(articleNode(route));

  const tool = toolNode(route);
  if (tool) graph.push(tool);

  const faq = faqNode(route);
  if (faq) graph.push(faq);

  return { "@context": "https://schema.org", "@graph": graph };
}

/* ------------------------------------------------------------------ */
/* <head> tags                                                         */
/* ------------------------------------------------------------------ */

export interface HeadTag {
  tag: "meta" | "link";
  attrs: Record<string, string>;
  /** Attribute used to identify the tag when updating it client-side */
  key: string;
}

/** The complete set of head tags for a route, excluding <title> and JSON-LD. */
export function buildHeadTags(route: SeoRoute): HeadTag[] {
  const canonical = absoluteUrl(route.path);
  const image = absoluteUrl(route.image ?? SITE.defaultImage);

  const tags: HeadTag[] = [
    { tag: "meta", key: "name=description", attrs: { name: "description", content: route.description } },
    { tag: "meta", key: "name=author", attrs: { name: "author", content: SITE.name } },
    { tag: "link", key: "rel=canonical", attrs: { rel: "canonical", href: canonical } },
    { tag: "meta", key: "property=og:type", attrs: { property: "og:type", content: route.type } },
    { tag: "meta", key: "property=og:site_name", attrs: { property: "og:site_name", content: SITE.name } },
    { tag: "meta", key: "property=og:title", attrs: { property: "og:title", content: route.title } },
    { tag: "meta", key: "property=og:description", attrs: { property: "og:description", content: route.description } },
    { tag: "meta", key: "property=og:url", attrs: { property: "og:url", content: canonical } },
    { tag: "meta", key: "property=og:image", attrs: { property: "og:image", content: image } },
    { tag: "meta", key: "property=og:locale", attrs: { property: "og:locale", content: "en_US" } },
    { tag: "meta", key: "name=twitter:card", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", key: "name=twitter:title", attrs: { name: "twitter:title", content: route.title } },
    { tag: "meta", key: "name=twitter:description", attrs: { name: "twitter:description", content: route.description } },
    { tag: "meta", key: "name=twitter:image", attrs: { name: "twitter:image", content: image } },
  ];

  if (route.keywords) {
    tags.push({ tag: "meta", key: "name=keywords", attrs: { name: "keywords", content: route.keywords } });
  }

  if (route.type === "article") {
    if (route.datePublished) {
      tags.push({
        tag: "meta",
        key: "property=article:published_time",
        attrs: { property: "article:published_time", content: route.datePublished },
      });
    }
    if (route.dateModified ?? route.datePublished) {
      tags.push({
        tag: "meta",
        key: "property=article:modified_time",
        attrs: { property: "article:modified_time", content: (route.dateModified ?? route.datePublished) as string },
      });
    }
    if (route.section) {
      tags.push({
        tag: "meta",
        key: "property=article:section",
        attrs: { property: "article:section", content: route.section },
      });
    }
    tags.push({
      tag: "meta",
      key: "property=article:author",
      attrs: { property: "article:author", content: AUTHOR.name },
    });
  }

  if (route.noindex) {
    tags.push({ tag: "meta", key: "name=robots", attrs: { name: "robots", content: "noindex, follow" } });
  }

  return tags;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Render the whole SEO block as HTML. Used by the pre-render step to bake the
 * tags into the static file so they are present without running JavaScript.
 */
export function renderHeadHtml(route: SeoRoute): string {
  const lines: string[] = [`<title>${escapeHtml(route.title)}</title>`];

  for (const tag of buildHeadTags(route)) {
    const attrs = Object.entries(tag.attrs)
      .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
      .join(" ");
    lines.push(`<${tag.tag} ${attrs} />`);
  }

  const jsonLd = JSON.stringify(buildJsonLd(route)).replace(/</g, "\\u003c");
  lines.push(`<script type="application/ld+json" id="seo-structured-data">${jsonLd}</script>`);

  return lines.map((line) => `    ${line}`).join("\n");
}
