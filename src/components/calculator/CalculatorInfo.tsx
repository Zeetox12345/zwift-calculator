import React from "react";
import { Info } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const CalculatorInfo: React.FC = () => {
  return (
    <AnimatedText delay={400} className="mt-8">
      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <Info size={20} className="mr-2 text-zwift-orange" />
          About the Alpe du Zwift Calculation
        </h3>
        <p className="mb-4 text-sm">
          Our calculator uses real ZwiftPower data to accurately predict your climbing time based on your power-to-weight ratio.
        </p>
        <p className="mb-4 text-sm">
          This calculation provides an accurate estimate for most riders. The calculation accounts for the relationship between power-to-weight ratio and climbing speed, which follows a non-linear pattern due to factors like air resistance and gradient changes.
        </p>
        <p className="text-sm">
          <strong>Factors that may affect actual times:</strong>
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-2">
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span>Equipment choice and virtual weight</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span>Drafting effects if riding in a group</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span>Variable power output vs. steady power</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span>PowerUps used during the climb</span>
          </li>
        </ul>

        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-sm">
            <strong>Realistic Power-to-Weight Ratios:</strong>
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-2">
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Beginner/Casual:</strong> 1.5-2.5 W/kg</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Intermediate:</strong> 2.5-3.5 W/kg</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Advanced:</strong> 3.5-4.5 W/kg</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Elite/Cat 1:</strong> 4.5-5.5 W/kg</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Professional:</strong> 5.5-6.8 W/kg</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>World Tour/Record:</strong> 6.8-7.5 W/kg</span>
            </li>
          </ul>
          <p className="text-xs mt-3 text-muted-foreground">
            Values above 7.5 W/kg for a sustained climb like Alpe du Zwift exceed human physiological limits and have never been achieved in verified competition.
          </p>
        </div>
      </div>
    </AnimatedText>
  );
};

export default CalculatorInfo;
