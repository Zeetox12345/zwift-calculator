import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Bike, Calculator, Timer, TrendingUp, Trophy, Zap, BookOpen, ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCard from "@/components/AnimatedCard";
import BikeAnimation from "@/components/BikeAnimation";
import { useToast } from "@/hooks/use-toast";

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
                Calculate Your <span className="zwift-gradient-text">Zwift</span> Times
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={500} className="mt-6 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Predict how fast you'll conquer the iconic climbs and routes in Zwift
                based on your weight and power. Fast, accurate, and built for Zwifters.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={700} className="mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <AnimatedButton
                to="/alpeduzwiftcalculator"
                variant="primary"
                size="lg"
                icon={<Calculator size={20} />}
              >
                Alpe du Zwift
              </AnimatedButton>
              
              <AnimatedButton
                to="/ventop-calculator"
                variant="primary"
                size="lg"
                icon={<Calculator size={20} />}
              >
                Ven Top
              </AnimatedButton>
              
              <AnimatedButton
                variant="outline"
                size="lg"
                onClick={() => window.scrollTo({
                  top: document.getElementById('how-it-works')?.offsetTop - 100,
                  behavior: 'smooth'
                })}
              >
                Learn More
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-orange/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-3xl overflow-hidden border border-white/20 shadow-glass">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <AnimatedText>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to predict your <span className="zwift-gradient-text">Zwift times</span>?
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Find out how long it will take you to conquer the famous Zwift climbs and routes. Our calculators provide accurate estimates based on your stats.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <AnimatedButton
                      to="/alpeduzwiftcalculator"
                      variant="primary"
                      size="lg"
                      icon={<Calculator size={20} />}
                    >
                      Alpe du Zwift
                    </AnimatedButton>
                    <AnimatedButton
                      to="/ventop-calculator"
                      variant="outline"
                      size="lg"
                      icon={<Calculator size={20} />}
                    >
                      Ven Top
                    </AnimatedButton>
                  </div>
                  <div className="mt-6">
                    <AnimatedButton
                      to="/alpe-vs-ventop"
                      variant="secondary"
                      size="lg"
                      icon={<TrendingUp size={20} />}
                      className="w-full sm:w-auto bg-gradient-to-r from-zwift-orange/20 to-zwift-blue/20 border-gradient"
                    >
                      Compare Alpe vs Ven-Top
                    </AnimatedButton>
                  </div>
                </AnimatedText>
              </div>
              
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-zwift-orange/30 to-transparent rounded-xl blur-xl"></div>
                  <img
                    src="/lovable-uploads/9742c196-2bd2-472b-a58d-e9bb34062de4.png"
                    alt="Zwift virtual cycling with bright neon effects"
                    className="rounded-xl shadow-lg border border-white/10 max-h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial/Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-zwift-dark/5">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by <span className="zwift-gradient-text">Zwifters</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Join thousands of cyclists who use our calculators to prepare for their virtual rides.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <AnimatedCard delay={200} className="flex flex-col items-center">
              <TrendingUp size={32} className="text-zwift-orange mb-4" />
              <div className="text-3xl font-bold">12,500+</div>
              <div className="text-muted-foreground">Rides Calculated</div>
            </AnimatedCard>
            
            <AnimatedCard delay={300} className="flex flex-col items-center">
              <Trophy size={32} className="text-zwift-orange mb-4" />
              <div className="text-3xl font-bold">98%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </AnimatedCard>
            
            <AnimatedCard delay={400} className="flex flex-col items-center">
              <Bike size={32} className="text-zwift-orange mb-4" />
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </AnimatedCard>
            
            <AnimatedCard delay={500} className="flex flex-col items-center">
              <Zap size={32} className="text-zwift-orange mb-4" />
              <div className="text-3xl font-bold">2</div>
              <div className="text-muted-foreground">segments</div>
            </AnimatedCard>
          </div>
          
          <AnimatedText delay={600} className="mt-20 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <AnimatedButton
                to="/alpeduzwiftcalculator"
                variant="primary"
                size="lg"
                icon={<Calculator size={20} />}
              >
                Alpe du Zwift Calculator
              </AnimatedButton>
              <AnimatedButton
                to="/ventop-calculator"
                variant="outline"
                size="lg"
                icon={<Calculator size={20} />}
              >
                Ven Top Zwift Time Calculator
              </AnimatedButton>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default Index;
