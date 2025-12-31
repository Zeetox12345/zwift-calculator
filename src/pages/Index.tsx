import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Bike, Calculator, Timer, TrendingUp, Trophy, Zap, BookOpen, ArrowRight, Calendar } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCard from "@/components/AnimatedCard";
import BikeAnimation from "@/components/BikeAnimation";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulating a visitor for the first time
  useEffect(() => {
    const hasVisited = localStorage.getItem("has_visited");
    if (!hasVisited) {
      setTimeout(() => {
        toast({
          title: "Welcome to ZwiftCalculator.com!",
          description: "Calculate your Zwift climbing times with our calculators.",
          variant: "default",
          duration: 5000,
        });
        localStorage.setItem("has_visited", "true");
      }, 1500);
    }
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>
        
        {/* Animated bike icons */}
        <BikeAnimation delay={1000} size={24} color="#f68b1f" />
        <BikeAnimation delay={5000} size={20} color="#0EA5E9" />
        <BikeAnimation delay={10000} size={28} color="#8B5CF6" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-orange shadow-sm border border-orange-100 dark:border-orange-900/20 mb-6">
                <Bike size={16} className="text-zwift-orange" />
                <span>Powered by ZwiftPower data</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Expert Zwift Training <span className="zwift-gradient-text">Insights</span> & Performance Analysis
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={500} className="mt-6 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Data-driven guides, training strategies, and performance insights for Zwift athletes. 
                Learn from our analysis of thousands of ZwiftPower rides and expert mechanical engineering insights.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={700} className="mt-10">
              <AnimatedButton
                to="/blog"
                variant="primary"
                size="lg"
                icon={<BookOpen size={20} />}
              >
                Explore Articles
              </AnimatedButton>
            </AnimatedText>
          </div>

          {/* Hero Image */}
          <AnimatedText delay={900} className="mt-12 mx-auto max-w-5xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-zwift-orange/20 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="/lovable-uploads/d4903085-9006-4d56-9c7a-27c2978bea52.png"
                alt="Zwift virtual cycling with neon bikes"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/10 object-cover aspect-[16/9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold">Race Through Watopia</h3>
                <p className="text-sm md:text-base text-white/80">Epic climbs, challenging routes, and futuristic landscapes</p>
              </div>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Latest Blog Articles Section - PRIMARY FOCUS */}
      <section className="py-16 md:py-24 relative bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="zwift-gradient-text">Training Insights</span> & Guides
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert advice, data-driven analysis, and practical strategies to improve your Zwift performance
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "How I Started Zwifting – And How AverageRob & Arno Inspired My Ironman Journey",
                excerpt: "Personal story of how Zwift changed my life, inspired by AverageRob and Arno's Ironman journey. From gamer to Zwifter, losing weight, and finding motivation through their YouTube series.",
                date: "19-12-2025",
                readTime: "12 min",
                category: "Personal",
                slug: "/blog/how-i-started-zwifting-and-how-averagerob-arno-inspired-my-ironman-journey"
              },
              {
                title: "How to Keep Your Streak in Zwift While Travelling",
                excerpt: "Complete guide to maintaining your Zwift streak while travelling. Learn equipment strategies, hotel gym tips, time zone handling, and how to keep your training consistent without stress.",
                date: "19-12-2025",
                readTime: "20 min",
                category: "Training",
                slug: "/blog/how-to-keep-your-streak-in-zwift-while-travelling"
              },
              {
                title: "Having Time to Zwift During University",
                excerpt: "Practical guide for university students to fit Zwift training into busy schedules. Learn minimum effective dose, exam period strategies, and how to stay consistent without sacrificing grades or social life.",
                date: "19-12-2025",
                readTime: "18 min",
                category: "Training",
                slug: "/blog/having-time-to-zwift-during-university"
              },
              {
                title: "What Terminology Do Zwifters Use?",
                excerpt: "Complete guide to Zwift terminology. Learn FTP, w/kg, ERG mode, drafting, power-ups, sandbagging, and all the key terms Zwifters use in training, racing, and chatting.",
                date: "19-12-2025",
                readTime: "20 min",
                category: "Training",
                slug: "/blog/what-terminology-do-zwifters-use"
              },
              {
                title: "Towels During Zwifting? Can It Ruin Your Bike?",
                excerpt: "Complete guide to using towels during Zwift training. Learn how to protect your bike from sweat damage, proper towel placement, and a 3-minute cleaning routine that prevents corrosion.",
                date: "19-12-2025",
                readTime: "16 min",
                category: "Setup",
                slug: "/blog/towels-during-zwifting-can-it-ruin-your-bike"
              },
              {
                title: "10 Day Zwift Training Week",
                excerpt: "Complete 10-day Zwift training week plan combining cycling and running. Learn how to structure your training with threshold, VO₂, endurance sessions, and proper recovery for triathlon and cycling fitness.",
                date: "19-12-2025",
                readTime: "22 min",
                category: "Training",
                slug: "/blog/10-day-zwift-training-week"
              }
            ].map((post, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <Link to={post.slug} className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-orange/50 cursor-pointer group">
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
                      <CardTitle className="text-xl group-hover:text-zwift-orange transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                        <div className="flex items-center text-xs text-zwift-orange group-hover:translate-x-1 transition-transform">
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

          <div className="text-center mt-8">
            <AnimatedButton
              to="/blog"
              variant="primary"
              size="lg"
              icon={<BookOpen size={20} />}
            >
              View All Articles
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative" id="how-it-works">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              How <span className="zwift-gradient-text">ZwiftCalculator</span> Works
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Using real-world data from thousands of Zwift rides to predict your climbing and route times with precision.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedCard delay={200}>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-zwift-orange/10 flex items-center justify-center mb-4">
                  <Zap size={28} className="text-zwift-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Input Your Stats</h3>
                <p className="text-muted-foreground">
                  Enter your weight and the power you can sustain for a climb or route.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-zwift-blue/10 flex items-center justify-center mb-4">
                  <Calculator size={28} className="text-zwift-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Algorithm</h3>
                <p className="text-muted-foreground">
                  Our formulas use regression analysis on ZwiftPower data for various segments.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={600}>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-zwift-green/10 flex items-center justify-center mb-4">
                  <Timer size={28} className="text-zwift-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Get Your Time</h3>
                <p className="text-muted-foreground">
                  Receive accurate estimates for your Zwift segment completion times.
                </p>
              </div>
            </AnimatedCard>
          </div>

          {/* Detailed Methodology Section */}
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  The Science Behind Our Calculations
                </h3>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Our Zwift time prediction calculators are built on a foundation of real-world performance data and statistical analysis. Unlike generic cycling calculators that rely on simplified physics models, we've analyzed thousands of actual Zwift ride performances from ZwiftPower to create accurate, data-driven predictions.
                  </p>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3 mt-6">Understanding Power-to-Weight Ratio</h4>
                    <p>
                      In cycling, especially on climbs, your power-to-weight ratio (watts per kilogram, or W/kg) is the single most important predictor of performance. This is because gravity is the primary force you're fighting against. The steeper the climb, the more your weight matters relative to your power output.
                    </p>
                    <p className="mt-3">
                      For example, a 70kg rider producing 280 watts generates 4.0 W/kg—enough to climb Alpe du Zwift in approximately 49 minutes. However, a 60kg rider producing the same 280 watts achieves 4.67 W/kg, potentially completing the climb in around 42 minutes. This 7-minute difference illustrates why weight management is crucial for climbing performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3 mt-6">Our Data-Driven Approach</h4>
                    <p>
                      Our algorithms use polynomial regression analysis on real ZwiftPower performance data. For Alpe du Zwift, we analyzed hundreds of verified ride times across a wide range of power outputs, from recreational riders (2.5-3.0 W/kg) to elite Zwift racers (5.0+ W/kg). The resulting formula accounts for the non-linear relationship between power and climbing speed, which becomes more pronounced at higher gradients.
                    </p>
                    <p className="mt-3">
                      The Ven Top calculator uses a similar methodology, analyzing performance data specific to that climb's unique profile. Ven Top is shorter but steeper than Alpe du Zwift, requiring a different power distribution strategy and resulting in a distinct time-to-power relationship.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3 mt-6">Why Zwift Differs from Real-World Cycling</h4>
                    <p>
                      Zwift's virtual environment introduces unique factors that our calculators account for. Unlike outdoor cycling, Zwift eliminates variables like wind resistance (which is simulated but simplified), road surface conditions, and drafting effects on steep climbs. However, Zwift does simulate equipment weight differences, aerodynamic drag (though simplified), and the physics of climbing gradients.
                    </p>
                    <p className="mt-3">
                      Our calculations are calibrated specifically for Zwift's physics engine, ensuring accuracy within the virtual environment. This means our predictions may differ from outdoor climbing calculators, but they're precisely tuned for Watopia's virtual climbs.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3 mt-6">Accuracy and Limitations</h4>
                    <p>
                      Our calculators provide estimates accurate to within approximately ±2-3% for most riders. However, several factors can affect actual performance:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
                      <li><strong className="text-foreground">Pacing strategy:</strong> Starting too hard can lead to fatigue and slower overall times</li>
                      <li><strong className="text-foreground">Equipment selection:</strong> Lighter bikes and wheelsets can save 30-60 seconds on long climbs</li>
                      <li><strong className="text-foreground">Power consistency:</strong> Maintaining steady power is more efficient than variable output</li>
                      <li><strong className="text-foreground">Mental fatigue:</strong> Long climbs require mental fortitude that can't be calculated</li>
                      <li><strong className="text-foreground">Training adaptations:</strong> Recent training load affects sustainable power output</li>
                    </ul>
                  </div>

                  <div className="mt-8 p-4 bg-zwift-orange/10 dark:bg-zwift-orange/20 rounded-lg border border-zwift-orange/30">
                    <p className="text-foreground font-semibold mb-2">💡 Pro Tip:</p>
                    <p>
                      Use these calculators to set realistic goals and pace yourself during climbs. If you're aiming for a sub-60-minute Alpe du Zwift, you'll need to sustain approximately 3.2 W/kg. Use our calculator to determine your target power, then practice maintaining that output during training rides.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* About the Creator Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-orange/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <img
                      src="/CLD_billede_4.jpg"
                      alt="Christian Lassen Dam - Creator of ZwiftCalculator.com"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-zwift-orange/20"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Created by Christian Lassen Dam
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong className="text-foreground">Mechanical Engineering Student & Zwift Enthusiast</strong>
                    </p>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        I'm a Master's student in Mechanical Engineering at Aalborg University, currently training for Ironman Copenhagen. As a dedicated Zwifter who owns the coveted Tron bike, I understand the passion and dedication that goes into virtual cycling.
                      </p>
                      <p>
                        My background in mechanical engineering, combined with my love for data analysis and endurance sports, led me to create these calculators. I've analyzed thousands of ZwiftPower ride performances to develop accurate, data-driven time predictions that help athletes train smarter and set realistic goals.
                      </p>
                      <p>
                        All calculations are based on publicly available training data and verified performance metrics. The goal is to make complex performance analysis accessible to everyday athletes—helping you understand trends, effort levels, and potential outcomes without overcomplication.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/author"
                          className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
                        >
                          Learn more about my background and methodology
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Featured Blog Post Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <AnimatedCard delay={200}>
            <Link 
              to="/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed"
              className="block group"
            >
              <div className="bg-white dark:bg-zwift-dark rounded-2xl overflow-hidden border-2 border-zwift-orange/30 hover:border-zwift-orange/50 transition-all shadow-lg hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 bg-zwift-orange/10 dark:bg-zwift-orange/20 text-zwift-orange border border-zwift-orange/30 px-3 py-1.5 rounded-full text-sm font-medium mb-4 w-fit">
                      <BookOpen size={14} />
                      <span>Featured Article</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-zwift-orange transition-colors">
                      The Calculus of the Pain Cave: A Mechanical Autopsy of Speed
                    </h2>
                    <p className="text-foreground/80 dark:text-foreground/70 mb-6 text-base leading-relaxed">
                      Explore the physics and mechanics behind cycling performance in Zwift. Understand aerodynamic drag, drivetrain efficiency, flywheel inertia, and the thermodynamics of the human engine from an engineering perspective.
                    </p>
                    <div className="flex items-center text-zwift-orange font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Read the full article</span>
                      <ArrowRight size={18} className="ml-2" />
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="relative w-full">
                      <div className="absolute inset-0 bg-gradient-radial from-zwift-orange/20 to-transparent rounded-xl blur-xl"></div>
                      <div className="relative bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 dark:from-zwift-orange/20 dark:to-zwift-blue/20 rounded-xl p-8 border border-zwift-orange/20 dark:border-white/10">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2 text-foreground/90 dark:text-white/90">
                            <Calculator size={20} />
                            <span className="font-semibold">Physics & Engineering</span>
                          </div>
                          <div className="text-4xl font-bold text-foreground dark:text-white mb-2 font-mono">τ = F × r × sin(θ)</div>
                          <p className="text-foreground/70 dark:text-white/80 text-sm">
                            Discover how mechanical engineering principles govern every pedal stroke in Watopia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedCard>
        </div>
      </section>

      
      {/* Testimonial/Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-zwift-dark/5">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted <span className="zwift-gradient-text">Content</span> for Zwift Athletes
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Join thousands of cyclists who rely on our expert insights, data-driven analysis, and training strategies to improve their Zwift performance.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <AnimatedCard delay={200} className="flex flex-col items-center">
              <BookOpen size={32} className="text-zwift-orange mb-4" />
              <div className="text-3xl font-bold">28+</div>
              <div className="text-muted-foreground">Expert Articles</div>
            </AnimatedCard>
            
            <AnimatedCard delay={300} className="flex flex-col items-center">
              <TrendingUp size={32} className="text-zwift-orange mb-4" />
              <div className="text-3xl font-bold">1,000+</div>
              <div className="text-muted-foreground">Rides Analyzed</div>
            </AnimatedCard>
            
            <AnimatedCard delay={400} className="flex flex-col items-center">
              <Bike size={32} className="text-zwift-orange mb-4" />
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-muted-foreground">Active Readers</div>
            </AnimatedCard>
            
            <AnimatedCard delay={500} className="flex flex-col items-center">
              <Zap size={32} className="text-zwift-orange mb-4" />
              <div className="text-3xl font-bold">Data-Driven</div>
              <div className="text-muted-foreground">Insights</div>
            </AnimatedCard>
          </div>
          
          <AnimatedText delay={600} className="mt-20 text-center">
            <AnimatedButton
              to="/blog"
              variant="primary"
              size="lg"
              icon={<BookOpen size={20} />}
            >
              Explore All Articles
            </AnimatedButton>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default Index;
