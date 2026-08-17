import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, Calculator, ArrowRight, Clock, Tag } from "lucide-react";

import Author from "./Author";
import Breadcrumbs from "./Breadcrumbs";
import RelatedArticles from "./RelatedArticles";
import FeaturedArticlesSidebar from "./FeaturedArticlesSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts, displayDate, getPostBySlug, type BlogPostMeta } from "@/data/blogPosts";
import { AUTHOR } from "@/lib/siteConfig";

interface RelatedArticle {
  title: string;
  excerpt: string;
  slug: string;
  readTime?: string;
}

interface BlogPostProps {
  /** Overrides the H1. Defaults to the article's title in `src/data/blogPosts.ts`. */
  title?: string;
  /** Overrides the published date. Defaults to the date in the article index. */
  date?: string;
  content: React.ReactNode;
  relatedCalculators?: Array<{ name: string; path: string; description: string }>;
  relatedArticles?: RelatedArticle[];
}

/**
 * Pick four related articles: same category first, then the most recent
 * articles from elsewhere on the site. Every article therefore links out to
 * four others even when the page itself does not list any.
 */
function autoRelated(current: BlogPostMeta | undefined): RelatedArticle[] {
  const pool = blogPosts.filter((post) => post.slug !== current?.slug);
  const sameCategory = pool
    .filter((post) => post.category === current?.category)
    .sort((a, b) => b.date.localeCompare(a.date));
  const rest = pool
    .filter((post) => post.category !== current?.category)
    .sort((a, b) => b.date.localeCompare(a.date));

  return [...sameCategory, ...rest].slice(0, 4).map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    readTime: post.readTime,
  }));
}

const DEFAULT_CALCULATORS = [
  {
    name: "Alpe du Zwift Calculator",
    path: "/alpeduzwiftcalculator",
    description: "Predict your time up Zwift's 21 hairpins from your weight and power.",
  },
  {
    name: "Ven-Top Calculator",
    path: "/ventop-calculator",
    description: "Estimate your climbing time on Zwift's version of Mont Ventoux.",
  },
];

const BlogPost = ({ title, date, content, relatedCalculators, relatedArticles }: BlogPostProps) => {
  const location = useLocation();
  const post = getPostBySlug(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const related = relatedArticles && relatedArticles.length > 0 ? relatedArticles : autoRelated(post);
  const calculators = relatedCalculators && relatedCalculators.length > 0 ? relatedCalculators : DEFAULT_CALCULATORS;
  const updated = post?.dateModified ? displayDate(post.dateModified) : null;
  const heading = title ?? post?.title ?? "";
  const published = date ?? (post ? displayDate(post.date) : "");

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-4 sm:mb-6" />

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight">
              {heading}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4 sm:mb-6">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1.5" />
                <span>Published {published}</span>
              </span>
              {updated && <span className="flex items-center">Updated {updated}</span>}
              {post?.readTime && (
                <span className="flex items-center">
                  <Clock size={14} className="mr-1.5" />
                  {post.readTime} read
                </span>
              )}
              {post?.category && (
                <Link
                  to="/blog"
                  className="flex items-center hover:text-zwift-orange transition-colors"
                >
                  <Tag size={14} className="mr-1.5" />
                  {post.category}
                </Link>
              )}
            </div>

            {/* Author Box */}
            <Author />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-6 sm:py-8 md:py-12 relative flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            {/* Main Content - 70% (7 columns) */}
            <article className="lg:col-span-7 order-1">
              <Card className="border-2">
                <CardContent className="p-4 sm:p-6 md:p-8 max-w-none">
                  <div className="space-y-6 text-base leading-relaxed">{content}</div>

                  {/* How this article is maintained */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <h2 className="text-lg font-bold mb-2 text-foreground">About this article</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Written by{" "}
                      <Link to={AUTHOR.path} className="text-zwift-orange hover:underline font-medium">
                        {AUTHOR.name}
                      </Link>
                      , who rides Zwift himself and builds every calculator on this site. Where an article makes a
                      numerical claim it links to the source it came from. Spotted something wrong?{" "}
                      <Link to="/contact" className="text-zwift-orange hover:underline font-medium">
                        Tell us
                      </Link>{" "}
                      and it gets corrected - our{" "}
                      <Link to="/editorial-policy" className="text-zwift-orange hover:underline font-medium">
                        editorial policy
                      </Link>{" "}
                      explains how.
                    </p>
                  </div>

                  {/* Related Articles Section */}
                  {related.length > 0 && <RelatedArticles articles={related} />}

                  {/* Related Calculators Section */}
                  {calculators.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-border">
                      <h2 className="text-xl font-bold mb-4 text-foreground flex items-center">
                        <Calculator size={20} className="mr-2 text-zwift-orange" />
                        Try Our Calculators
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        Use our data-driven calculators to predict your performance on these iconic Zwift climbs:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {calculators.map((calc) => (
                          <Link
                            key={calc.path}
                            to={calc.path}
                            className="group p-4 bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-lg border border-zwift-orange/30 hover:border-zwift-orange/50 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-foreground group-hover:text-zwift-orange transition-colors mb-1">
                                  {calc.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">{calc.description}</p>
                              </div>
                              <ArrowRight size={20} className="text-zwift-orange group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </article>

            {/* Sidebar - 30% (3 columns) - Below content on mobile */}
            <aside className="lg:col-span-3 order-2 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <FeaturedArticlesSidebar articles={related.slice(0, 4)} title="Related Articles" />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
