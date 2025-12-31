import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight, Activity, Trophy, Settings, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeaturedArticle {
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  slug: string;
  category?: string;
}

interface CategoryLink {
  name: string;
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

interface FeaturedArticlesSidebarProps {
  articles?: FeaturedArticle[];
  categoryLinks?: CategoryLink[];
  title?: string;
}

const FeaturedArticlesSidebar = ({ 
  articles = [], 
  categoryLinks = [],
  title = "Featured Articles"
}: FeaturedArticlesSidebarProps) => {
  const defaultCategoryLinks: CategoryLink[] = [
    {
      name: "Training",
      path: "/blog/category/training",
      icon: Activity,
      color: "text-zwift-orange"
    },
    {
      name: "Racing",
      path: "/blog/category/racing",
      icon: Trophy,
      color: "text-zwift-blue"
    },
    {
      name: "Setup",
      path: "/blog/category/setup",
      icon: Settings,
      color: "text-zwift-green"
    },
    {
      name: "Data Analysis",
      path: "/blog/category/data-analysis",
      icon: BarChart3,
      color: "text-purple-500"
    }
  ];

  const linksToShow = categoryLinks.length > 0 ? categoryLinks : defaultCategoryLinks;

  return (
    <aside className="space-y-4 sm:space-y-6">
      {/* Featured Articles */}
      {articles.length > 0 && (
        <Card className="border-2">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg flex items-center">
              <BookOpen size={16} className="mr-2 text-zwift-orange" />
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={article.slug}
                className="block group"
              >
                <div className="space-y-1.5 sm:space-y-2 pb-3 sm:pb-4 border-b border-border last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-xs sm:text-sm group-hover:text-zwift-orange transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  {article.date && (
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar size={10} className="mr-1" />
                      <span className="hidden sm:inline">{article.date}</span>
                      <span className="sm:hidden">{article.date.split('-')[0]}</span>
                      {article.readTime && <span className="ml-2">• {article.readTime}</span>}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Category Navigation */}
      {linksToShow.length > 0 && (
        <Card className="border-2">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg">Browse by Category</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="space-y-1.5 sm:space-y-2">
              {linksToShow.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <Icon size={14} className={`${link.color} flex-shrink-0`} />
                    <span className="text-xs sm:text-sm group-hover:text-zwift-orange transition-colors">
                      {link.name}
                    </span>
                    <ArrowRight size={12} className="ml-auto text-muted-foreground group-hover:text-zwift-orange group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </aside>
  );
};

export default FeaturedArticlesSidebar;

