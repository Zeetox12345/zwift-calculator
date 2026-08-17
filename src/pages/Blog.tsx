import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Activity, Trophy, Settings, BarChart3, ArrowRight, Calculator } from "lucide-react";

import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import ArticleListItem from "@/components/ArticleListItem";
import FeaturedArticlesSidebar from "@/components/FeaturedArticlesSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts, displayDate, postsByDateDesc, type BlogCategory } from "@/data/blogPosts";
import { AUTHOR } from "@/lib/siteConfig";

const CATEGORY_HUBS = [
  {
    id: "Training" as BlogCategory,
    name: "Training",
    path: "/blog/category/training",
    icon: Activity,
    accent: "text-zwift-orange",
    gradient: "from-zwift-orange/10 to-zwift-orange/5",
    hover: "hover:border-zwift-orange/50",
    blurb: "Plans, zones, progression and how to make indoor hours count.",
  },
  {
    id: "Racing" as BlogCategory,
    name: "Racing",
    path: "/blog/category/racing",
    icon: Trophy,
    accent: "text-zwift-blue",
    gradient: "from-zwift-blue/10 to-zwift-blue/5",
    hover: "hover:border-zwift-blue/50",
    blurb: "Start pens, drafting, PowerUps and the mistakes that cost places.",
  },
  {
    id: "Setup" as BlogCategory,
    name: "Setup",
    path: "/blog/category/setup",
    icon: Settings,
    accent: "text-zwift-green",
    gradient: "from-zwift-green/10 to-zwift-green/5",
    hover: "hover:border-zwift-green/50",
    blurb: "Trainers, cooling, sweat protection and power accuracy.",
  },
  {
    id: "Data Analysis" as BlogCategory,
    name: "Data Analysis",
    path: "/blog/category/data-analysis",
    icon: BarChart3,
    accent: "text-purple-500",
    gradient: "from-purple-500/10 to-purple-500/5",
    hover: "hover:border-purple-500/50",
    blurb: "Where the numbers come from, and what they do not say.",
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = useMemo(() => postsByDateDesc(), []);

  // Every category that actually has articles, ordered by article count.
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of blogPosts) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);

    return [
      { id: "all", name: "All", count: blogPosts.length },
      ...[...counts.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([id, count]) => ({ id, name: id, count })),
    ];
  }, []);

  const filteredPosts = selectedCategory === "all" ? posts : posts.filter((p) => p.category === selectedCategory);

  const oldest = posts[posts.length - 1];
  const newest = posts[0];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-4 sm:mb-6" />

            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zwift-orange shadow-sm border border-orange-100 dark:border-orange-900/20 mb-4 sm:mb-6">
                <BookOpen size={14} className="text-zwift-orange" />
                <span>
                  {blogPosts.length} articles, {displayDate(oldest.date)} to {displayDate(newest.date)}
                </span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                The ZwiftCalculator <span className="zwift-gradient-text">Library</span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-4 sm:mt-6">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Long-form writing about training, racing, equipment and the physics of virtual cycling. Every article
                is written and maintained by{" "}
                <Link to={AUTHOR.path} className="text-zwift-orange hover:underline">
                  {AUTHOR.name}
                </Link>
                , carries a publication date, and links to the sources behind any number it quotes.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* What is here and how to use it */}
      <section className="py-6 sm:py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-5 sm:p-8 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">Where to start</h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    This library grew out of a single question: how long will this climb take me? Answering it
                    properly meant working out what actually governs speed on a gradient, and that pulled in
                    everything else - how power is measured, why indoor numbers differ from outdoor ones, how
                    drafting works when there is no air, and why the same rider can produce two very different
                    times on the same climb a week apart.
                  </p>
                  <p>
                    If you are new here, the fastest route into the site is to run a number through the{" "}
                    <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
                      Alpe du Zwift calculator
                    </Link>{" "}
                    and then read{" "}
                    <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">
                      the pacing guide for that climb
                    </Link>
                    . If you would rather understand the machinery first, start with{" "}
                    <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">
                      power-to-weight ratio
                    </Link>{" "}
                    and then{" "}
                    <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">
                      how the calculators were fitted
                    </Link>
                    .
                  </p>
                  <p>
                    Articles are grouped into four hubs. Each hub page is a guide in its own right, not just a list
                    of links - it explains how to think about that part of the sport before pointing you at the
                    detail.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {CATEGORY_HUBS.map((hub) => {
                    const Icon = hub.icon;
                    const count = blogPosts.filter((p) => p.category === hub.id).length;

                    return (
                      <Link
                        key={hub.path}
                        to={hub.path}
                        className={`group p-4 sm:p-5 bg-gradient-to-br ${hub.gradient} rounded-lg border-2 border-transparent ${hub.hover} transition-all`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={20} className={hub.accent} />
                          <span className="font-semibold group-hover:text-zwift-orange transition-colors">
                            {hub.name}
                          </span>
                          <span className="ml-auto text-xs text-muted-foreground">{count}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{hub.blurb}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-2xl p-5 sm:p-8 border-2 border-zwift-orange/20">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground flex items-center">
                  <Calculator size={22} className="mr-2 text-zwift-orange" />
                  Read alongside the tools
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The articles and the calculators are meant to be used together. An estimate without context is a
                  number you cannot act on, and a training article without a number to aim at is hard to apply.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/alpeduzwiftcalculator"
                    className="inline-flex items-center text-sm font-semibold text-zwift-orange hover:underline"
                  >
                    Alpe du Zwift <ArrowRight size={14} className="ml-1" />
                  </Link>
                  <Link
                    to="/ventop-calculator"
                    className="inline-flex items-center text-sm font-semibold text-zwift-orange hover:underline"
                  >
                    Ven-Top <ArrowRight size={14} className="ml-1" />
                  </Link>
                  <Link
                    to="/zwift-climb-time-calculator"
                    className="inline-flex items-center text-sm font-semibold text-zwift-orange hover:underline"
                  >
                    Any climb <ArrowRight size={14} className="ml-1" />
                  </Link>
                  <Link
                    to="/zwift-ftp-calculator"
                    className="inline-flex items-center text-sm font-semibold text-zwift-orange hover:underline"
                  >
                    FTP and zones <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="py-6 sm:py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-7 order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                All articles
                <span className="ml-3 text-base font-normal text-muted-foreground">
                  {filteredPosts.length} of {blogPosts.length}
                </span>
              </h2>

              {/* Category Filter Tabs */}
              <div className="mb-6 sm:mb-8">
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                  <div className="overflow-x-auto -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <TabsList className="inline-flex w-auto h-auto p-1 gap-1.5 flex-wrap">
                      {categories.map((cat) => (
                        <TabsTrigger
                          key={cat.id}
                          value={cat.id}
                          className="text-xs sm:text-sm whitespace-nowrap px-3 py-2 flex-shrink-0"
                        >
                          {cat.name}
                          <span className="ml-1.5 opacity-60">{cat.count}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </Tabs>
              </div>

              <div className="space-y-0">
                {filteredPosts.map((post) => (
                  <ArticleListItem
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={displayDate(post.date)}
                    readTime={post.readTime}
                    category={post.category}
                    slug={post.slug}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-3 order-2 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <FeaturedArticlesSidebar
                  articles={posts.slice(0, 4).map((post) => ({
                    title: post.title,
                    excerpt: post.excerpt,
                    date: displayDate(post.date),
                    readTime: post.readTime,
                    slug: post.slug,
                    category: post.category,
                  }))}
                  title="Latest Articles"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
