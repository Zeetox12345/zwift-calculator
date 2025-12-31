import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight, Trophy, Zap } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CategoryRacing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const racingPosts = [
    {
      id: "4",
      title: "Zwift Racing for Beginners: Tips to Ride and Win Your First Virtual Race",
      excerpt: "Complete beginner's guide to Zwift racing. Learn race categories, drafting tactics, powerup strategies, and finishing techniques. Master your first virtual race with expert tips and tactics.",
      date: "12-11-2025",
      readTime: "12 min",
      slug: "/blog/zwift-racing-for-beginners"
    },
    {
      id: "7",
      title: "Zwift PowerUps Guide: How to Use In-Game Boosts Like a Pro",
      excerpt: "Master Zwift PowerUps: Learn how to use Feather, Aero, Draft Boost, Burrito, Ghost, Steamroller, and Anvil powerups strategically in races and rides. Complete guide to Zwift's in-game boosts.",
      date: "12-11-2025",
      readTime: "9 min",
      slug: "/blog/zwift-powerups-guide"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-blue/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-blue shadow-sm border border-blue-100 dark:border-blue-900/20 mb-6">
                <Trophy size={16} className="text-zwift-blue" />
                <span>Racing Category</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Zwift <span className="zwift-gradient-text">Racing</span> Strategies & Tactics
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-6 max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Master the tactics, strategies, and skills needed to compete and win in Zwift racing. From drafting techniques to powerup usage, from race categories to finishing kicks, learn how to race smarter and finish stronger in virtual cycling's competitive arena.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  The Art and Science of Zwift Racing
                </h2>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Zwift racing is a unique blend of physical fitness, tactical intelligence, and strategic execution. Unlike outdoor racing where tactics are limited by road conditions and pack dynamics, Zwift racing happens in a controlled environment where small advantages can be amplified through smart tactics and perfect execution. Understanding these dynamics is what separates pack finishers from race winners.
                  </p>

                  <p>
                    Success in Zwift racing requires more than just fitness—it requires understanding drafting dynamics, powerup timing, attack timing, and pack positioning. A rider with 3.5 W/kg and excellent tactics can often outperform a rider with 4.0 W/kg and poor tactics. This is why racing skill matters as much as raw fitness in Zwift's competitive environment.
                  </p>

                  <p>
                    Our racing content covers everything from basic concepts like race categories and drafting to advanced tactics like breakaway timing and powerup strategy. We draw on race analysis, power data, and tactical principles to provide racing advice that's both strategic and practical. Whether you're racing in Category D or Category A, whether you're aiming for pack finishes or race wins, you'll find tactics that work for your fitness level and racing style.
                  </p>

                  <p>
                    What makes Zwift racing unique is the combination of real-world cycling tactics and video game mechanics. Powerups add a strategic layer that doesn't exist in outdoor racing. Drafting works similarly but can be more powerful due to Zwift's simplified aerodynamics. Understanding these mechanics and how to use them strategically is key to racing success.
                  </p>

                  <p>
                    Whether you're preparing for your first Zwift race or looking to move up categories and compete for wins, our racing content provides the tactics, strategies, and insights you need to race smarter and finish stronger. Explore the articles below to elevate your Zwift racing performance.
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
              {racingPosts.map((post, index) => (
                <AnimatedCard key={post.id} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-blue/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-zwift-blue/10 text-zwift-blue rounded">
                            Racing
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-zwift-blue transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <div className="flex items-center text-xs text-zwift-blue group-hover:translate-x-1 transition-transform">
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

export default CategoryRacing;

