import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight, Settings, Wrench } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CategorySetup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setupPosts = [
    {
      id: "24",
      title: "Towels During Zwifting? Can It Ruin Your Bike?",
      excerpt: "Complete guide to using towels during Zwift training. Learn how to protect your bike from sweat damage, proper towel placement, and a 3-minute cleaning routine that prevents corrosion.",
      date: "19-12-2025",
      readTime: "16 min",
      slug: "/blog/towels-during-zwifting-can-it-ruin-your-bike"
    },
    {
      id: "5",
      title: "Zwift Setup Guide: Essential Gear for Your Ultimate Indoor Pain Cave",
      excerpt: "Complete Zwift setup guide: essential gear for your indoor training pain cave. Learn about smart trainers, bikes, devices, cooling, and accessories needed to start Zwifting effectively.",
      date: "12-11-2025",
      readTime: "11 min",
      slug: "/blog/zwift-setup-guide"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-green/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-green shadow-sm border border-green-100 dark:border-green-900/20 mb-6">
                <Settings size={16} className="text-zwift-green" />
                <span>Setup Category</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Zwift <span className="zwift-gradient-text">Setup</span> & Equipment Guides
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-6 max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Essential guides to setting up your Zwift training space, selecting the right equipment, and maintaining your gear for optimal performance. From smart trainers to cooling solutions, from bike protection to pain cave optimization, learn how to create the perfect indoor training environment.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-green/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Building Your Perfect Zwift Training Environment
                </h2>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    A well-set-up Zwift training space can make the difference between consistent, enjoyable training and inconsistent, miserable sessions. The right equipment, proper setup, and attention to details like cooling and bike protection can transform your indoor training from a chore into something you look forward to.
                  </p>

                  <p>
                    Setting up for Zwift isn't just about buying a smart trainer and connecting it to your computer—it's about creating an environment that supports consistent training. This means proper cooling to prevent overheating, proper bike protection to prevent sweat damage, and proper ergonomics to prevent injury. Each of these elements matters, and getting them right from the start prevents problems down the road.
                  </p>

                  <p>
                    Our setup content covers everything from choosing your first smart trainer to optimizing an existing pain cave. We cover equipment selection, setup procedures, maintenance routines, and troubleshooting tips. Whether you're setting up your first Zwift space or upgrading an existing one, you'll find practical advice to create a space that supports your training goals.
                  </p>

                  <p>
                    What sets our setup content apart is the focus on practical, budget-conscious solutions. You don't need the most expensive equipment to train effectively on Zwift. We focus on what matters most: a reliable smart trainer, proper cooling, and basic bike protection. Everything else is nice-to-have, not need-to-have. This approach helps you get started without breaking the bank, then upgrade strategically as your training evolves.
                  </p>

                  <p>
                    Whether you're setting up your first Zwift space or looking to optimize your existing setup, our guides provide the practical advice you need to create a training environment that supports consistent, effective training. Explore the articles below to build your perfect Zwift training space.
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
              {setupPosts.map((post, index) => (
                <AnimatedCard key={post.id} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-green/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-zwift-green/10 text-zwift-green rounded">
                            Setup
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-zwift-green transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <div className="flex items-center text-xs text-zwift-green group-hover:translate-x-1 transition-transform">
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

export default CategorySetup;

