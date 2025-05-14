import React from "react";
import { Clock, AlertTriangle } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

interface CalculatorResultsProps {
  resultMinutes: number | null;
  wkg: number;
  weight: number;
  power: number;
  formatTimeDisplay: (minutes: number) => string;
  isWorldRecord: boolean;
}

const CalculatorResults: React.FC<CalculatorResultsProps> = ({
  resultMinutes,
  wkg,
  weight,
  power,
  formatTimeDisplay,
  isWorldRecord,
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
        {isWorldRecord ? (
          <div className="text-center animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={32} className="text-amber-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">
              World Record Territory!
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm mx-auto">
              {power}W at {weight}kg ({wkg.toFixed(2)} W/kg) has never been achieved on Alpe du Zwift. This power-to-weight ratio exceeds human capabilities for a sustained climb.
            </p>
          </div>
        ) : resultMinutes ? (
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
