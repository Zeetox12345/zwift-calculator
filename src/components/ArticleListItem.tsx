import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

interface ArticleListItemProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const ArticleListItem = ({ title, excerpt, date, readTime, category, slug }: ArticleListItemProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Training": "bg-zwift-orange/10 text-zwift-orange border-zwift-orange/30",
      "Racing": "bg-zwift-blue/10 text-zwift-blue border-zwift-blue/30",
      "Setup": "bg-zwift-green/10 text-zwift-green border-zwift-green/30",
      "Data Analysis": "bg-purple-500/10 text-purple-500 border-purple-500/30",
      "Physics": "bg-zwift-orange/10 text-zwift-orange border-zwift-orange/30",
      "Personal": "bg-zwift-blue/10 text-zwift-blue border-zwift-blue/30",
      "Nutrition": "bg-zwift-green/10 text-zwift-green border-zwift-green/30",
      "Psychology": "bg-purple-500/10 text-purple-500 border-purple-500/30",
      "Philosophy": "bg-zwift-orange/10 text-zwift-orange border-zwift-orange/30",
      "Gaming": "bg-zwift-blue/10 text-zwift-blue border-zwift-blue/30",
      "Fitness": "bg-zwift-green/10 text-zwift-green border-zwift-green/30",
    };
    return colors[category] || "bg-muted text-muted-foreground border-border";
  };

  return (
    <article className="py-4 sm:py-6 border-b border-border last:border-b-0 group">
      <Link to={slug} className="block">
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs font-medium px-2 py-1 rounded border ${getCategoryColor(category)}`}>
                {category}
              </span>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar size={12} className="mr-1" />
                {/* The mobile variant used to show only the day of the month,
                    which on its own tells the reader nothing. The row wraps,
                    so the full date fits at every width. */}
                <span>{date}</span>
              </div>
              <span className="text-xs text-muted-foreground">{readTime} read</span>
            </div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-zwift-orange transition-colors leading-tight">
              {title}
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
              {excerpt}
            </p>
            
            <div className="flex items-center text-xs sm:text-sm text-zwift-orange font-semibold group-hover:translate-x-1 transition-transform">
              Read Article
              <ArrowRight size={14} className="ml-2" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleListItem;

