/**
 * Site-wide constants. Anything that appears in more than one place - the
 * footer, the structured data, the pre-rendered <head> tags, the sitemap -
 * lives here so there is exactly one place to change it.
 */

export const SITE = {
  name: "ZwiftCalculator.com",
  shortName: "ZwiftCalculator",
  /**
   * The canonical host. The apex domain 308-redirects to www, so every
   * canonical URL, Open Graph URL, sitemap entry and JSON-LD identifier has to
   * use www or it points at a redirect rather than at the live page.
   */
  url: "https://www.zwiftcalculator.com",
  tagline: "Data-driven calculators and training analysis for Zwift riders",
  description:
    "Independent Zwift performance tools and training analysis: climb time calculators, FTP and racing category guides, and long-form articles on the physics of virtual cycling.",
  locale: "en",
  defaultImage: "/og-image.png",
  email: "zwiftcalculator@gmail.com",
  founded: "2024",
} as const;

export const AUTHOR = {
  name: "Christian Lassen Dam",
  shortName: "Christian L. Dam",
  path: "/author",
  jobTitle: "Mechanical engineering MSc student and endurance athlete",
  image: "/CLD_billede_4.jpg",
  description:
    "Christian Lassen Dam is a mechanical engineering MSc student at Aalborg University, a long-time Zwift rider and an Ironman-distance triathlete. He builds and maintains every calculator on ZwiftCalculator.com.",
  affiliation: "Aalborg University",
  knowsAbout: [
    "Indoor cycling",
    "Zwift",
    "Cycling power analysis",
    "Power-to-weight ratio",
    "Endurance training",
    "Mechanical engineering",
  ],
} as const;

export const ORGANIZATION = {
  legalName: "CLD Consulting",
  vatId: "DK45654230",
  registrationNumber: "45654230",
  street: "Krøyer Kielbergsvej 10",
  postalCode: "8660",
  city: "Skanderborg",
  country: "DK",
  countryName: "Denmark",
} as const;

/** Convert a site-relative path into a fully qualified URL. */
export function absoluteUrl(pathname: string): string {
  if (/^https?:\/\//i.test(pathname)) return pathname;
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return clean === "/" ? `${SITE.url}/` : `${SITE.url}${clean}`;
}
