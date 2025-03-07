
import React from "react";
import { Clock } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

interface CalculatorResultsProps {
  resultMinutes: number | null;
  wkg: number;
  weight: number;
  power: number;
  formatTimeDisplay: (minutes: number) => string;
}

const CalculatorResults: React.FC<CalculatorResultsProps> = ({
  resultMinutes,
  wkg,
  weight,
  power,
  formatTimeDisplay,
}) => {
  return (
    <AnimatedCard delay={300} className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Clock className="mr-2 text-zwift-orange" size={22} />
          Your Results
        </h2>
        <p className="text-muted-foreground text-sm">
          Based on your weight and power, here's your estimated time to climb Alpe du Zwift.
        </p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center py-6">
        {resultMinutes ? (
          <div className="text-center animate-scale-up">
            <p className="text-sm text-muted-foreground mb-1">
              Estimated Time
            </p>
            <div className="text-4xl sm:text-5xl font-bold text-zwift-green mb-2">
              {formatTimeDisplay(resultMinutes)}
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto">
              With {power}W at {weight}kg ({wkg} W/kg), you'll conquer the Alpe in approximately {formatTimeDisplay(resultMinutes)}.
            </p>
          </div>
        ) : (
          <div className="text-center px-4">
            <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
              <Clock size={40} className="text-muted-foreground/50" />
            </div>
            <p className="text-lg font-medium">Calculating...</p>
          </div>
        )}
      </div>
    </AnimatedCard>
  );
};

export default CalculatorResults;
