import { useState, useEffect } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Import our Ventop-specific components
import VentopCalculatorInput from "@/components/calculator/VentopCalculatorInput";
import VentopCalculatorResults from "@/components/calculator/VentopCalculatorResults";
import VentopDataVisualization from "@/components/calculator/VentopDataVisualization";
import VentopCalculatorInfo from "@/components/calculator/VentopCalculatorInfo";
import VentopFacts from "@/components/calculator/VentopFacts";
import CallToAction from "@/components/calculator/CallToAction";
import Author from "@/components/Author";

const VentopCalculator = () => {
  const [weight, setWeight] = useState(75);
  const [power, setPower] = useState(250);
  const [resultMinutes, setResultMinutes] = useState<number | null>(null);
  const [wkg, setWkg] = useState(0);
  const [isExtremePower, setIsExtremePower] = useState(false);
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
      
      // Check if W/kg is over 7.0, which is beyond our training data
      if (newWkg > 7.0) {
        setIsExtremePower(true);
        setResultMinutes(null); // We won't calculate a time for this
      } else {
        setIsExtremePower(false);
        
        // Ventop calculation formula from Python model
        // def ventop_time(power_w_kg): return 3.205227111977379 + 253.3798838729759 / power_w_kg
        const timeInMinutes = 3.205227111977379 + (253.3798838729759 / newWkg);
        
        // Round to 1 decimal place
        const finalTime = parseFloat(timeInMinutes.toFixed(1));
        setResultMinutes(finalTime);
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
      <section className="relative pt-16 md:pt-20 pb-4 md:pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-blue/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-blue shadow-sm border border-blue-100 dark:border-blue-900/20 mb-4">
                <CalcIcon size={16} className="text-zwift-blue" />
                <span>Ven Top Zwift Time Calculator</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="text-zwift-orange">Ven Top Zwift Time Calculator</span> - Predict Your Climb
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-2 max-w-2xl mb-2">
              <p className="text-base text-muted-foreground">
                Our Ven top Zwift time calculator uses real performance data to accurately predict your completion time for this challenging Watopia climb.
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
      <section className="py-2 md:py-4 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {isMobile && (
                <VentopCalculatorResults
                  resultMinutes={resultMinutes}
                  wkg={wkg}
                  weight={weight}
                  power={power}
                  formatTimeDisplay={formatTimeDisplay}
                  isExtremePower={isExtremePower}
                />
              )}
              
              <VentopCalculatorInput 
                weight={weight}
                power={power}
                wkg={wkg}
                setWeight={setWeight}
                setPower={setPower}
                getRandomValues={getRandomValues}
              />
              
              {!isMobile && (
                <VentopCalculatorResults
                  resultMinutes={resultMinutes}
                  wkg={wkg}
                  weight={weight}
                  power={power}
                  formatTimeDisplay={formatTimeDisplay}
                  isExtremePower={isExtremePower}
                />
              )}
            </div>

            {/* Data Visualization Section */}
            <VentopDataVisualization />

            {/* About the Calculation Section */}
            <VentopCalculatorInfo />
          </div>
        </div>
      </section>

      {/* Ven Top Facts Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <VentopFacts />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-t from-zwift-dark/10 to-transparent">
        <div className="container mx-auto px-4">
          <CallToAction />
        </div>
      </section>
    </div>
  );
};

export default VentopCalculator; 