import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CategoryDataAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dataAnalysisPosts = [
    {
      id: "29",
      title: "The Data Behind Zwift Climbing: What 1,000+ Rides Tell Us About Performance",
      excerpt: "Discover data-driven insights from analyzing 1,000+ ZwiftPower performances. Learn about pacing patterns, power distribution, common mistakes, and training implications for Zwift climbing performance.",
      date: "20-12-2025",
      readTime: "18 min",
      slug: "/blog/the-data-behind-zwift-climbing"
    },
    {
      id: "31",
      title: "ZwiftPower Regression Analysis: How We Built Accurate Time Predictors",
      excerpt: "Behind-the-scenes look at how we built accurate Zwift climbing time predictors using regression analysis, data validation, and statistical modeling. Learn the methodology behind our calculators.",
      date: "20-12-2025",
      readTime: "15 min",
      slug: "/blog/regression-analysis-methodology"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-purple-500 shadow-sm border border-purple-100 dark:border-purple-900/20 mb-6">
                <BarChart3 size={16} className="text-purple-500" />
                <span>Data Analysis Category</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Data-Driven <span className="zwift-gradient-text">Insights</span> & Analysis
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-6 max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Original research and data analysis from analyzing thousands of ZwiftPower performances. Discover unique insights about pacing patterns, power distribution, training effectiveness, and performance optimization based on real data from real Zwift rides.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Data-Driven Performance Insights
                </h2>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    What makes our content unique is the foundation of original data analysis. We've analyzed over 1,000 verified ZwiftPower performances to understand what separates successful climbs from failed attempts, what pacing strategies work best, and how different factors affect performance. This isn't speculation—it's data-driven insight based on real performances from real riders.
                  </p>

                  <p>
                    Our data analysis reveals patterns that aren't obvious from individual rides. Why do some riders with lower power-to-weight ratios outperform riders with higher ratios? How much does pacing matter compared to raw fitness? What are the most common mistakes that prevent riders from achieving their potential? These questions can only be answered through systematic data analysis, and that's what we provide.
                  </p>

                  <p>
                    What sets our data analysis apart is the combination of statistical rigor and practical application. We don't just present numbers—we explain what they mean, why they matter, and how to use them to improve your performance. Every insight is backed by data, but every insight is also translated into actionable advice that you can apply to your training and racing.
                  </p>

                  <p>
                    Our data analysis covers everything from pacing patterns to equipment impact, from power distribution to training effectiveness. We use statistical methods like polynomial regression to build accurate models, then validate those models on data we didn't use for training. This rigorous approach ensures that our insights are reliable and our predictions are accurate.
                  </p>

                  <p>
                    Whether you're interested in the science behind performance prediction or the practical insights that can improve your training, our data analysis content provides unique value you won't find elsewhere. Explore the articles below to discover what the data reveals about Zwift performance.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataAnalysisPosts.map((post, index) => (
                <AnimatedCard key={post.id} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-purple-500/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-purple-500/10 text-purple-500 rounded">
                            Data Analysis
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-purple-500 transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <div className="flex items-center text-xs text-purple-500 group-hover:translate-x-1 transition-transform">
                            Read More
                            <ArrowRight size={14} className="ml-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog Link */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
            >
              <ArrowRight size={18} className="mr-2 rotate-180" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDataAnalysis;

