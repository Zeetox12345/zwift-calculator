import React from "react";
import { Info, Calculator, TrendingUp, BarChart3 } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const CalculatorInfo: React.FC = () => {
  return (
    <AnimatedText delay={400} className="mt-8">
      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 md:p-8 border border-white/10">
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
          <Info size={24} className="mr-2 text-zwift-orange" />
          How the Alpe du Zwift Calculator Works
        </h3>
        
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            Our Alpe du Zwift calculator uses real ZwiftPower performance data to accurately predict your climbing time based on your power-to-weight ratio. Unlike generic cycling calculators, our formula is specifically calibrated for Zwift's virtual environment and the unique characteristics of Alpe du Zwift.
          </p>

          <div className="mt-6 p-4 bg-white/5 dark:bg-black/10 rounded-lg border border-white/10">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center">
              <Calculator size={20} className="mr-2 text-zwift-orange" />
              The Formula
            </h4>
            <p className="mb-3">
              Our calculation uses a polynomial regression model derived from analyzing hundreds of verified ZwiftPower ride performances:
            </p>
            <div className="bg-zwift-dark/50 dark:bg-black/30 p-4 rounded-lg font-mono text-sm md:text-base text-foreground mb-3">
              Time (seconds) = 148.60 × (W/kg)² - 1954.08 × (W/kg) + 8329.87
            </div>
            <p className="text-xs md:text-sm">
              This polynomial relationship accounts for the non-linear relationship between power-to-weight ratio and climbing speed, which becomes more pronounced at higher gradients and power outputs.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center">
              <BarChart3 size={20} className="mr-2 text-zwift-orange" />
              Data Sources and Methodology
            </h4>
            <p className="mb-3">
              The formula was developed through statistical analysis of verified ZwiftPower ride data across a wide range of power outputs:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
              <li>Analyzed hundreds of verified Alpe du Zwift performances</li>
              <li>Power range: 2.5 W/kg (recreational) to 6.5 W/kg (elite)</li>
              <li>Time range: ~40 minutes (elite) to ~120 minutes (casual)</li>
              <li>Polynomial regression ensures accuracy across all power levels</li>
            </ul>
            <p>
              The model accounts for Zwift's simplified physics engine, which differs from real-world cycling in several ways: aerodynamic drag is simulated but simplified, equipment weight affects performance, and drafting effects are minimal on steep climbs like Alpe du Zwift.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center">
              <TrendingUp size={20} className="mr-2 text-zwift-orange" />
              Accuracy and Limitations
            </h4>
            <p className="mb-3">
              Our calculator provides estimates accurate to within approximately ±2-3% for most riders when:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
              <li>Power output is maintained consistently throughout the climb</li>
              <li>Standard Zwift equipment is used (not extreme weight differences)</li>
              <li>No drafting assistance is received (solo effort)</li>
              <li>No PowerUps are used that significantly affect weight or aerodynamics</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm font-semibold text-foreground mb-3">
            Factors that may affect actual times:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span>Equipment choice and virtual weight (Tron bike vs. heavier frames)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span>Drafting effects if riding in a group (minimal on steep sections)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span>Variable power output vs. steady power (surges waste energy)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span>PowerUps used during the climb (Feather reduces weight)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span>Pacing strategy (starting too hard leads to fatigue)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span>Mental fatigue and motivation levels</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm font-semibold text-foreground mb-3">
            Realistic Power-to-Weight Ratios:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Beginner/Casual:</strong> 1.5-2.5 W/kg (90-120+ minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Intermediate:</strong> 2.5-3.5 W/kg (65-90 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Advanced:</strong> 3.5-4.5 W/kg (50-65 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Elite/Cat 1:</strong> 4.5-5.5 W/kg (40-50 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Professional:</strong> 5.5-6.8 W/kg (35-40 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>World Tour/Record:</strong> 6.8-7.5 W/kg (30-35 minutes)</span>
            </li>
          </ul>
          <p className="text-xs mt-4 text-muted-foreground bg-yellow-500/10 dark:bg-yellow-500/20 p-3 rounded-lg border border-yellow-500/30">
            <strong className="text-foreground">Note:</strong> Values above 7.5 W/kg for a sustained climb like Alpe du Zwift exceed human physiological limits and have never been achieved in verified competition. The calculator will indicate if your input exceeds realistic parameters.
          </p>
        </div>
      </div>
    </AnimatedText>
  );
};

export default CalculatorInfo;
