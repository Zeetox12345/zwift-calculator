import { useState, useEffect } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import FeaturedArticlesSidebar from "@/components/FeaturedArticlesSidebar";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Import our newly created components
import CalculatorInput from "@/components/calculator/CalculatorInput";
import CalculatorResults from "@/components/calculator/CalculatorResults";
import DataVisualization from "@/components/calculator/DataVisualization";
import CalculatorInfo from "@/components/calculator/CalculatorInfo";
import AlpeFacts from "@/components/calculator/AlpeFacts";
import CallToAction from "@/components/calculator/CallToAction";
import Author from "@/components/Author";

const Calculator = () => {
  const [weight, setWeight] = useState(75);
  const [power, setPower] = useState(250);
  const [resultMinutes, setResultMinutes] = useState<number | null>(null);
  const [wkg, setWkg] = useState(0);
  const [isWorldRecord, setIsWorldRecord] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Calculate watts per kilogram and result immediately
    if (weight > 0) {
      const newWkg = parseFloat((power / weight).toFixed(2));
      setWkg(newWkg);
      
      // Check if W/kg is over 7.5, which has never been done before
      if (newWkg > 7.5) {
        setIsWorldRecord(true);
        setResultMinutes(null); // We won't calculate a time for this
      } else {
        setIsWorldRecord(false);
        // Updated calculation formula: Time (seconds) = 148.60 * (W/KG)^2 - 1954.08 * (W/KG) + 8329.87
        const timeInSeconds = 148.60 * Math.pow(newWkg, 2) - 1954.08 * newWkg + 8329.87;
        
        // Convert to minutes and round to 1 decimal place
        const timeInMinutes = parseFloat((timeInSeconds / 60).toFixed(1));
        setResultMinutes(timeInMinutes);
      }
    }
  }, [weight, power]);

  const getRandomValues = () => {
    const randomWeight = Math.floor(Math.random() * (95 - 55)) + 55;
    const randomPower = Math.floor(Math.random() * (350 - 150)) + 150;
    
    setWeight(randomWeight);
    setPower(randomPower);
  };

  const formatTimeDisplay = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    const secs = Math.floor((minutes * 60) % 60);
    
    if (hours > 0) {
      return `${hours}h ${mins}m ${secs}s`;
    }
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-14 sm:pt-16 md:pt-20 pb-3 sm:pb-4 md:pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-blue/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-zwift-blue shadow-sm border border-blue-100 dark:border-blue-900/20 mb-3 sm:mb-4">
                <CalcIcon size={14} className="sm:w-4 sm:h-4 text-zwift-blue" />
                <span>Alpe du Zwift Calculator</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight px-2 leading-tight">
                Calculate Your <span className="text-zwift-orange">Alpe du Zwift</span> Time
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-2 max-w-2xl mb-2 px-2">
              <p className="text-sm sm:text-base text-muted-foreground">
                Using real Zwift data to predict your climb time for the iconic 21 hairpins of Alpe du Zwift.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Author />
          </div>
        </div>
      </section>

      {/* Calculator Section - Always show results first on mobile */}
      <section className="py-2 sm:py-4 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            {/* Main Content - 70% (7 columns) */}
            <main className="lg:col-span-7 order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {isMobile && (
                  <CalculatorResults
                    resultMinutes={resultMinutes}
                    wkg={wkg}
                    weight={weight}
                    power={power}
                    formatTimeDisplay={formatTimeDisplay}
                    isWorldRecord={isWorldRecord}
                  />
                )}
                
                <CalculatorInput 
                  weight={weight}
                  power={power}
                  wkg={wkg}
                  setWeight={setWeight}
                  setPower={setPower}
                  getRandomValues={getRandomValues}
                />
                
                {!isMobile && (
                  <CalculatorResults
                    resultMinutes={resultMinutes}
                    wkg={wkg}
                    weight={weight}
                    power={power}
                    formatTimeDisplay={formatTimeDisplay}
                    isWorldRecord={isWorldRecord}
                  />
                )}
              </div>

              {/* Data Visualization Section */}
              <DataVisualization />

              {/* About the Calculation Section */}
              <CalculatorInfo />

              {/* Alpe du Zwift Facts Section */}
              <div className="mt-8">
                <AlpeFacts />
              </div>
            </main>

            {/* Sidebar - 30% (3 columns) - Below content on mobile */}
            <aside className="lg:col-span-3 order-2 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <FeaturedArticlesSidebar
                  articles={[
                    {
                      title: "Conquer the Alpe du Zwift: Tips for a Faster Climb",
                      excerpt: "Master Alpe du Zwift with expert pacing strategies, training tips, and in-game tactics.",
                      date: "12-11-2025",
                      readTime: "8 min",
                      slug: "/blog/conquer-alpe-du-zwift",
                      category: "Training"
                    },
                    {
                      title: "Power-to-Weight Ratio Deep Dive: The Science Behind Climbing Performance",
                      excerpt: "Comprehensive guide to power-to-weight ratio in cycling. Learn the physics, training implications, and practical applications.",
                      date: "20-12-2025",
                      readTime: "17 min",
                      slug: "/blog/power-to-weight-ratio-science",
                      category: "Training"
                    },
                    {
                      title: "The Data Behind Zwift Climbing: What 1,000+ Rides Tell Us About Performance",
                      excerpt: "Discover data-driven insights from analyzing 1,000+ ZwiftPower performances.",
                      date: "20-12-2025",
                      readTime: "18 min",
                      slug: "/blog/the-data-behind-zwift-climbing",
                      category: "Data Analysis"
                    },
                    {
                      title: "Alpe du Zwift vs Ven Top: Complete Comparison",
                      excerpt: "Detailed comparison of Zwift's two iconic climbs. Learn which climb matches your fitness profile.",
                      date: "Recent",
                      readTime: "15 min",
                      slug: "/alpe-vs-ventop",
                      category: "Training"
                    }
                  ]}
                  title="Related Articles"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-t from-zwift-dark/10 to-transparent">
        <div className="container mx-auto px-4">
          <CallToAction 
            climbName="Alpe du Zwift"
            blogPostPath="/blog/conquer-alpe-du-zwift"
            blogPostTitle="Conquer the Alpe du Zwift: Tips for a Faster Climb"
          />
        </div>
      </section>
    </div>
  );
};

export default Calculator;
