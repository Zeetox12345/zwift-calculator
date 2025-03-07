
import { useState, useEffect } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Import our newly created components
import CalculatorInput from "@/components/calculator/CalculatorInput";
import CalculatorResults from "@/components/calculator/CalculatorResults";
import DataVisualization from "@/components/calculator/DataVisualization";
import CalculatorInfo from "@/components/calculator/CalculatorInfo";
import AlpeFacts from "@/components/calculator/AlpeFacts";
import CallToAction from "@/components/calculator/CallToAction";

const Calculator = () => {
  const [weight, setWeight] = useState(75);
  const [power, setPower] = useState(250);
  const [resultMinutes, setResultMinutes] = useState<number | null>(null);
  const [wkg, setWkg] = useState(0);
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
      
      // Updated calculation formula: Time (seconds) = 148.60 * (W/KG)^2 - 1954.08 * (W/KG) + 8329.87
      const timeInSeconds = 148.60 * Math.pow(newWkg, 2) - 1954.08 * newWkg + 8329.87;
      
      // Convert to minutes and round to 1 decimal place
      const timeInMinutes = parseFloat((timeInSeconds / 60).toFixed(1));
      setResultMinutes(timeInMinutes);
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
                <span>Alpe du Zwift Calculator</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Calculate Your <span className="text-zwift-orange">Alpe du Zwift</span> Time
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-2 max-w-2xl mb-2">
              <p className="text-base text-muted-foreground">
                Using real Zwift data to predict your climb time for the iconic 21 hairpins of Alpe du Zwift.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Calculator Section - Reorganized for mobile */}
      <section className="py-2 md:py-4 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`grid grid-cols-1 ${isMobile ? 'flex flex-col-reverse' : 'md:grid-cols-2'} gap-4 md:gap-8`}>
              <CalculatorInput 
                weight={weight}
                power={power}
                wkg={wkg}
                setWeight={setWeight}
                setPower={setPower}
                getRandomValues={getRandomValues}
              />
              
              <CalculatorResults
                resultMinutes={resultMinutes}
                wkg={wkg}
                weight={weight}
                power={power}
                formatTimeDisplay={formatTimeDisplay}
              />
            </div>

            {/* Data Visualization Section */}
            <DataVisualization />

            {/* About the Calculation Section */}
            <CalculatorInfo />
          </div>
        </div>
      </section>

      {/* Alpe du Zwift Facts Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AlpeFacts />
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

export default Calculator;
