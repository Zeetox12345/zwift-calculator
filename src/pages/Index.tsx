
import { useEffect } from "react";
import { Bike, Calculator, Timer, TrendingUp, Trophy, Zap } from "lucide-react";
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
                to="/calculator"
                variant="primary"
                size="lg"
                icon={<Calculator size={20} />}
              >
                Try The Calculator
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
          <AnimatedText delay={900} className="mt-12 mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-zwift-orange/20 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="/lovable-uploads/32504d7a-839e-48f6-8ba9-3540734cf037.png"
                alt="Zwift virtual cycling screenshot"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/10 object-cover aspect-[16/9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold">Iconic Zwift Routes</h3>
                <p className="text-sm md:text-base text-white/80">Epic climbs, challenging sprints, and beautiful scenery</p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      to="/calculator"
                      variant="primary"
                      size="lg"
                      icon={<Calculator size={20} />}
                    >
                      Try It Now
                    </AnimatedButton>
                  </div>
                </AnimatedText>
              </div>
              
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-zwift-orange/30 to-transparent rounded-xl blur-xl"></div>
                  <img
                    src="/lovable-uploads/32504d7a-839e-48f6-8ba9-3540734cf037.png"
                    alt="Zwift virtual cycling"
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
              <div className="text-3xl font-bold">20+</div>
              <div className="text-muted-foreground">Zwift Segments</div>
            </AnimatedCard>
          </div>
          
          <AnimatedText delay={600} className="mt-20 text-center">
            <AnimatedButton
              to="/calculator"
              variant="primary"
              size="lg"
              icon={<Calculator size={20} />}
              className="mx-auto"
            >
              Calculate Your Time Now
            </AnimatedButton>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default Index;
