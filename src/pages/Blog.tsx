import { useEffect } from "react";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder for future blog posts
  const blogPosts: Array<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  }> = [
    // Add blog posts here in the future
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-orange shadow-sm border border-orange-100 dark:border-orange-900/20 mb-6">
                <BookOpen size={16} className="text-zwift-orange" />
                <span>Zwift Training Blog</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Training <span className="zwift-gradient-text">Insights</span> & Tips
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-6 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert advice, training strategies, and performance analysis for Zwift athletes and triathlon enthusiasts.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {blogPosts.length === 0 ? (
              <AnimatedCard delay={200}>
                <Card className="border-2">
                  <CardHeader className="text-center">
                    <BookOpen size={48} className="mx-auto mb-4 text-zwift-orange opacity-50" />
                    <CardTitle className="text-2xl">Coming Soon</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Blog posts are coming soon! Check back for training tips, performance analysis, and Zwift insights.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      We're preparing valuable content about Zwift training, triathlon preparation, power analysis, and more.
                    </p>
                    <Button
                      onClick={() => window.history.back()}
                      variant="outline"
                      className="mx-auto"
                    >
                      <ArrowRight size={16} className="mr-2 rotate-180" />
                      Go Back
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <AnimatedCard key={post.id} delay={index * 100}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-zwift-orange/10 text-zwift-orange rounded">
                            {post.category}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <Button variant="ghost" size="sm">
                            Read More
                            <ArrowRight size={14} className="ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

