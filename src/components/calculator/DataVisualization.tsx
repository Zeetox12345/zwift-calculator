
import React from "react";
import { Info, LineChart } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const DataVisualization: React.FC = () => {
  return (
    <AnimatedText delay={400} className="mt-8">
      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <LineChart size={20} className="mr-2 text-zwift-orange" />
          Data Behind the Calculator
        </h3>
        <p className="mb-4 text-sm">
          Our calculator is based on real data from ZwiftPower.com, with information averaged across male/female riders, different age groups, and weight ranges to represent the whole Zwift population.
        </p>
        <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/87248bcf-9a85-4c2e-98bf-ddaaf10f1ee4.png" 
            alt="Power vs Time Analysis data graph" 
            className="w-full h-auto"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Note:</strong> The calculator is based on data up to 7.5 W/kg, so estimates beyond that may not be realistic based on real-life data.
        </p>
      </div>
    </AnimatedText>
  );
};

export default DataVisualization;
