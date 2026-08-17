import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SITE } from "@/lib/siteConfig";
import { buildHeadTags, buildJsonLd, getSeoRoute, type SeoRoute } from "@/lib/seo";

const MANAGED_ATTR = "data-seo";
const JSON_LD_ID = "seo-structured-data";

const notFoundRoute: SeoRoute = {
  path: "/404",
  title: `Page Not Found | ${SITE.name}`,
  description:
    "This page does not exist on ZwiftCalculator.com. Head back to the calculators or the article index to find what you were looking for.",
  type: "website",
  sitemapPriority: 0,
  changefreq: "yearly",
  noindex: true,
};

/**
 * Keeps `document.head` in sync with the SEO registry during client-side
 * navigation.
 *
 * On a cold load these tags are already present - the pre-render step writes
 * them into the static HTML, which is what crawlers read. This component only
 * has to fix them up when React Router swaps the page without a reload.
 */
const SEOMetaTags = () => {
  const location = useLocation();

  useEffect(() => {
    const route = getSeoRoute(location.pathname) ?? notFoundRoute;

    document.title = route.title;

    // Remove the previous set so stale tags can never linger between routes.
    document.head.querySelectorAll(`[${MANAGED_ATTR}]`).forEach((node) => node.remove());

    for (const tag of buildHeadTags(route)) {
      // Drop any build-time tag with the same identity before re-adding it.
      const [attrName, attrValue] = tag.key.split("=");
      document.head
        .querySelectorAll(`${tag.tag}[${attrName}="${attrValue}"]`)
        .forEach((node) => node.remove());

      const element = document.createElement(tag.tag);
      for (const [name, value] of Object.entries(tag.attrs)) {
        element.setAttribute(name, value);
      }
      element.setAttribute(MANAGED_ATTR, "");
      document.head.appendChild(element);
    }

    let script = document.getElementById(JSON_LD_ID);
    if (!script) {
      script = document.createElement("script");
      script.id = JSON_LD_ID;
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildJsonLd(route));
  }, [location.pathname]);

  return null;
};

export default SEOMetaTags;
