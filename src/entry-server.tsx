import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import AppShell from "./AppShell";
import { seoRoutes, getSeoRoute, renderHeadHtml, type SeoRoute } from "./lib/seo";
import { SITE } from "./lib/siteConfig";

/**
 * Server entry used by `scripts/prerender.mjs`.
 *
 * It renders the exact same component tree the browser renders, so the static
 * HTML a crawler downloads already contains the full page. The browser then
 * hydrates that markup instead of rebuilding it from scratch.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>
  );
}

/** The `<head>` contents for a route, as an HTML string. */
export function renderHead(pathname: string): string {
  const route = getSeoRoute(pathname);
  if (!route) throw new Error(`No SEO registry entry for route: ${pathname}`);
  return renderHeadHtml(route);
}

/** Head contents for the 404 page, which is intentionally not in the registry. */
export function renderNotFoundHead(): string {
  const notFound: SeoRoute = {
    path: "/404",
    title: `Page Not Found | ${SITE.name}`,
    description:
      "This page does not exist on ZwiftCalculator.com. Head back to the calculators or the article index to find what you were looking for.",
    type: "website",
    sitemapPriority: 0,
    changefreq: "yearly",
    noindex: true,
  };
  return renderHeadHtml(notFound);
}

export { seoRoutes };
export const siteUrl = SITE.url;
