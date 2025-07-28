import React, { useState } from "react";
import { LineChart, X } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const VentopDataVisualization: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedText delay={400} className="mt-8">
      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
            <LineChart size={20} className="mr-2 text-zwift-orange" />
            Data Behind the Ven Top Zwift Time Calculator
          </h3>
          <p className="mb-4 text-sm">
            Our Ven top Zwift time calculator is based on real Zwift performance data, analyzed using multiple regression models to find the most accurate prediction method for this challenging Watopia route.
          </p>
        <div className="bg-muted/30 rounded-lg p-4 border border-muted/50">
          <h4 className="font-semibold mb-2 text-sm">Model Performance Analysis</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex justify-between">
              <span>Inverse Power Model:</span>
              <span className="font-semibold text-zwift-green">R² = 0.984</span>
            </div>
            <div className="flex justify-between">
              <span>Quadratic Model:</span>
              <span className="font-semibold">R² = 0.978</span>
            </div>
            <div className="flex justify-between">
              <span>Cubic Model:</span>
              <span className="font-semibold">R² = 0.979</span>
            </div>
            <div className="flex justify-between">
              <span>Linear Model:</span>
              <span className="font-semibold">R² = 0.962</span>
            </div>
          </div>
          <p className="text-xs mt-3 text-muted-foreground">
            The inverse power model (Time = a + b/W_kg) provides the best fit for Ven Top data, explaining 98.4% of the variance in completion times.
          </p>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Training Data Range:</strong> The calculator is based on data from 1.75-7.0 W/kg, covering a comprehensive range of rider abilities from recreational to elite level.
        </p>
      </div>
    </AnimatedText>
  );
};

export default VentopDataVisualization; 