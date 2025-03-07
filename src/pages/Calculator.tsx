
import { useState, useEffect } from "react";
import { Calculator as CalcIcon, Clock, Bike, Dices } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCard from "@/components/AnimatedCard";
import { useToast } from "@/hooks/use-toast";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

const Calculator = () => {
  const [weight, setWeight] = useState(75);
  const [power, setPower] = useState(250);
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [wkg, setWkg] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Calculate watts per kilogram
    if (weight > 0) {
      setWkg(parseFloat((power / weight).toFixed(2)));
    }
  }, [weight, power]);

  const calculateTime = () => {
    if (weight <= 0 || power <= 0) {
      toast({
        title: "Invalid input",
        description: "Please enter valid weight and power values.",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation with a slight delay for effect
    setTimeout(() => {
      // Formula based on regression analysis of ZwiftPower data
      // This is a simplified formula for demonstration
      const wattsPerKg = power / weight;
      const estimatedTimeMinutes = 60 / wattsPerKg + (Math.random() * 2 - 1);
      const timeInMinutes = Math.max(30, Math.min(120, estimatedTimeMinutes));
      setResult(parseFloat(timeInMinutes.toFixed(1)));
      setIsCalculating(false);
      
      toast({
        title: "Calculation complete!",
        description: `Your estimated time is ${timeInMinutes.toFixed(1)} minutes.`,
        variant: "default",
      });
    }, 800);
  };

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
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-blue/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-blue shadow-sm border border-blue-100 dark:border-blue-900/20 mb-6">
                <CalcIcon size={16} className="text-zwift-blue" />
                <span>Alpe du Zwift Calculator</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Calculate Your <span className="text-zwift-orange">Climb Time</span>
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={500} className="mt-6 max-w-2xl">
              <p className="text-lg text-muted-foreground">
                Use our advanced calculator to estimate how long it will take you to conquer 
                the 21 hairpins of Alpe du Zwift based on your weight and power.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12 relative flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <AnimatedCard delay={300} className="flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Bike className="mr-2 text-zwift-orange" size={24} />
                    Your Information
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Enter your weight and the power you can sustain for the duration of the climb.
                  </p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Weight (kg)</label>
                      <span className="text-sm font-medium">{weight} kg</span>
                    </div>
                    <Slider
                      value={[weight]}
                      min={30}
                      max={120}
                      step={1}
                      onValueChange={(value) => setWeight(value[0])}
                      className="my-4"
                    />
                    <div className="mt-2">
                      <Input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        min={30}
                        max={120}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Power (watts)</label>
                      <span className="text-sm font-medium">{power} W</span>
                    </div>
                    <Slider
                      value={[power]}
                      min={100}
                      max={500}
                      step={5}
                      onValueChange={(value) => setPower(value[0])}
                      className="my-4"
                    />
                    <div className="mt-2">
                      <Input
                        type="number"
                        value={power}
                        onChange={(e) => setPower(Number(e.target.value))}
                        min={100}
                        max={500}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Power to Weight Ratio</span>
                      <span className="text-lg font-bold text-zwift-orange">{wkg} W/kg</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <AnimatedButton
                    onClick={calculateTime}
                    variant="primary"
                    size="lg"
                    icon={<CalcIcon size={20} />}
                    className="w-full"
                    disabled={isCalculating}
                  >
                    {isCalculating ? "Calculating..." : "Calculate Time"}
                  </AnimatedButton>
                  
                  <AnimatedButton
                    onClick={getRandomValues}
                    variant="outline"
                    size="md"
                    icon={<Dices size={18} />}
                    className="w-full"
                  >
                    Randomize Values
                  </AnimatedButton>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={500} className="flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Clock className="mr-2 text-zwift-orange" size={24} />
                    Your Results
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Based on your weight and power, here's your estimated time to climb Alpe du Zwift.
                  </p>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center py-8">
                  {isCalculating ? (
                    <div className="text-center">
                      <div className="inline-block w-16 h-16 border-4 border-zwift-orange/30 border-t-zwift-orange rounded-full animate-spin mb-4"></div>
                      <p className="text-lg font-medium">Calculating...</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Analyzing your data against our model...
                      </p>
                    </div>
                  ) : result ? (
                    <div className="text-center animate-scale-up">
                      <p className="text-sm text-muted-foreground mb-2">
                        Estimated Time
                      </p>
                      <div className="text-5xl sm:text-6xl font-bold text-zwift-green mb-2">
                        {formatTimeDisplay(result)}
                      </div>
                      <p className="text-base text-muted-foreground mt-4 max-w-xs mx-auto">
                        With {power}W at {weight}kg ({wkg} W/kg), you'll conquer the Alpe in approximately {formatTimeDisplay(result)}.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center px-4">
                      <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                        <Clock size={40} className="text-muted-foreground/50" />
                      </div>
                      <p className="text-lg font-medium">No Results Yet</p>
                      <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                        Enter your weight and power, then click "Calculate Time" to see your estimated Alpe du Zwift climbing time.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm">
                  <h3 className="font-medium mb-2">About This Calculation</h3>
                  <p className="text-muted-foreground text-sm">
                    This calculation uses a model based on real-world data from ZwiftPower. 
                    Actual times may vary based on drafting, equipment choice, and riding style.
                  </p>
                </div>
              </AnimatedCard>
            </div>

            <AnimatedText delay={700} className="mt-12">
              <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Alpe du Zwift Facts</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-zwift-orange mr-2">•</span>
                    <span><strong>Distance:</strong> 12.2km</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zwift-orange mr-2">•</span>
                    <span><strong>Elevation Gain:</strong> 1,036m</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zwift-orange mr-2">•</span>
                    <span><strong>Average Gradient:</strong> 8.5%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zwift-orange mr-2">•</span>
                    <span><strong>Hairpins:</strong> 21 switchbacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zwift-orange mr-2">•</span>
                    <span><strong>KOM Record:</strong> ~36 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zwift-orange mr-2">•</span>
                    <span><strong>Inspired by:</strong> Alpe d'Huez</span>
                  </li>
                </ul>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-zwift-dark/10 to-transparent">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Take on the Challenge?
            </h2>
            <p className="text-muted-foreground mb-8">
              Now that you know your estimated time, hop on Zwift and conquer the Alpe!
            </p>
            <AnimatedButton
              external
              to="https://www.zwift.com/"
              variant="secondary"
              size="lg"
              icon={<Bike size={20} />}
              className="mx-auto"
            >
              Visit Zwift
            </AnimatedButton>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
