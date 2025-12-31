import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedArticle {
  title: string;
  excerpt: string;
  slug: string;
  readTime?: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

const RelatedArticles = ({ articles, title = "Related Articles" }: RelatedArticlesProps) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-2xl font-bold mb-6 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6">
        Continue reading with these related articles and guides:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <Link
            key={index}
            to={article.slug}
            className="group block"
          >
            <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-orange/50 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-zwift-orange transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 line-clamp-3">{article.excerpt}</CardDescription>
                <div className="flex items-center justify-between">
                  {article.readTime && (
                    <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                  )}
                  <div className="flex items-center text-xs text-zwift-orange group-hover:translate-x-1 transition-transform ml-auto">
                    Read Article
                    <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;

