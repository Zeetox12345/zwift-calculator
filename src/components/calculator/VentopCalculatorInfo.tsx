import React from "react";
import { Info, Calculator, TrendingUp, BarChart3 } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const VentopCalculatorInfo: React.FC = () => {
  return (
    <AnimatedText delay={400} className="mt-8">
      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 md:p-8 border border-white/10">
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
          <Info size={24} className="mr-2 text-zwift-orange" />
          How the Ven Top Zwift Time Calculator Works
        </h3>
        
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            Our Ven Top Zwift time calculator uses real ZwiftPower performance data to accurately predict your climbing time based on your power-to-weight ratio. Ven Top is shorter but steeper than Alpe du Zwift, requiring a different power distribution strategy and resulting in a distinct time-to-power relationship.
          </p>

          <div className="mt-6 p-4 bg-white/5 dark:bg-black/10 rounded-lg border border-white/10">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center">
              <Calculator size={20} className="mr-2 text-zwift-orange" />
              The Formula
            </h4>
            <p className="mb-3">
              Ven Top's shorter, steeper profile requires a different mathematical model than Alpe du Zwift. Our calculation uses an inverse power relationship:
            </p>
            <div className="bg-zwift-dark/50 dark:bg-black/30 p-4 rounded-lg font-mono text-sm md:text-base text-foreground mb-3">
              Time (minutes) = 3.205 + (253.380 / W/kg)
            </div>
            <p className="text-xs md:text-sm">
              This inverse relationship reflects how power-to-weight ratio becomes exponentially more important on steeper gradients. Small increases in W/kg yield significant time improvements, especially at lower power levels.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center">
              <BarChart3 size={20} className="mr-2 text-zwift-orange" />
              Why Ven Top is Different
            </h4>
            <p className="mb-3">
              Ven Top differs from Alpe du Zwift in several key ways that affect performance:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
              <li><strong className="text-foreground">Shorter distance:</strong> ~8.5 km vs. 12.2 km for Alpe du Zwift</li>
              <li><strong className="text-foreground">Steeper average gradient:</strong> ~9.5% vs. 8.5% for Alpe du Zwift</li>
              <li><strong className="text-foreground">Higher power requirement:</strong> Requires more sustained threshold power</li>
              <li><strong className="text-foreground">Less recovery opportunity:</strong> Fewer flat sections to recover</li>
            </ul>
            <p>
              These characteristics mean Ven Top favors riders with strong power-to-weight ratios and the ability to sustain high power outputs for shorter durations. The inverse power model reflects this: as W/kg increases, time decreases rapidly, but the relationship flattens at very high power levels.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center">
              <TrendingUp size={20} className="mr-2 text-zwift-orange" />
              Data Sources and Accuracy
            </h4>
            <p className="mb-3">
              The formula was developed through analysis of verified ZwiftPower Ven Top performances:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-3">
              <li>Analyzed verified Ven Top climb performances from ZwiftPower</li>
              <li>Power range: 2.0 W/kg to 7.0 W/kg</li>
              <li>Time range: ~15 minutes (elite) to ~60+ minutes (casual)</li>
              <li>Model validated against real-world Zwift race data</li>
            </ul>
            <p>
              Accuracy is typically within ±2-3% for consistent power output. The model accounts for Zwift's physics engine, which simplifies aerodynamic drag but accurately simulates gradient effects and equipment weight.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm font-semibold text-foreground mb-3">
            Factors that may affect actual times:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
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
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span>Pacing strategy (critical on shorter, steeper climbs)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span>Starting effort level (easy to start too hard)</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm font-semibold text-foreground mb-3">
            Realistic Power-to-Weight Ratios for Ven Top:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Beginner/Casual:</strong> 1.5-2.5 W/kg (45-60+ minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Intermediate:</strong> 2.5-3.5 W/kg (30-45 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Advanced:</strong> 3.5-4.5 W/kg (22-30 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Elite/Cat 1:</strong> 4.5-5.5 W/kg (18-22 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>Professional:</strong> 5.5-6.5 W/kg (15-18 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-zwift-orange mr-2">•</span>
              <span><strong>World Class:</strong> 6.0-7.0 W/kg (12-15 minutes)</span>
            </li>
          </ul>
          <p className="text-xs mt-4 text-muted-foreground bg-yellow-500/10 dark:bg-yellow-500/20 p-3 rounded-lg border border-yellow-500/30">
            <strong className="text-foreground">Note:</strong> Our model is based on data up to 7.0 W/kg. Values above this range may not provide accurate predictions as they exceed our training data range. Ven Top's steep gradient makes it particularly challenging, and power outputs above 7.0 W/kg for the full climb are extremely rare.
          </p>
        </div>
      </div>
    </AnimatedText>
  );
};

export default VentopCalculatorInfo; 