import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { getSeoRoute, type Breadcrumb } from "@/lib/seo";

interface BreadcrumbsProps {
  /** Overrides the trail from the SEO registry - useful for pages not in it. */
  items?: Breadcrumb[];
  className?: string;
}

/**
 * Visible breadcrumb trail. The matching BreadcrumbList structured data is
 * emitted from the same registry entry in `src/lib/seo.ts`, so the markup and
 * the schema can never disagree.
 */
const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  const location = useLocation();
  const trail = items ?? getSeoRoute(location.pathname)?.breadcrumbs;

  if (!trail || trail.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-muted-foreground ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;

          return (
            <li key={crumb.path} className="flex items-center gap-x-1.5 min-w-0">
              {index > 0 && <ChevronRight size={14} className="flex-shrink-0 opacity-50" aria-hidden="true" />}
              {isLast ? (
                <span className="truncate max-w-[16rem] sm:max-w-[28rem] text-foreground/80" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link to={crumb.path} className="hover:text-zwift-orange transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
