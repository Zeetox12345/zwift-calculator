
import React, { useState } from "react";
import { LineChart, X } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const DataVisualization: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div 
          className="mt-4 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setIsOpen(true)}
        >
          <img 
            src="/lovable-uploads/ffc0d2be-bc63-46ad-b584-9a7134349063.png" 
            alt="Power vs Time Analysis data graph" 
            className="w-full h-auto"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Note:</strong> The calculator is based on data up to 7.5 W/kg, so estimates beyond that may not be realistic based on real-life data.
        </p>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] w-auto p-1 sm:p-2">
          <DialogClose className="absolute right-2 top-2 z-10 bg-background/80 p-1 rounded-full">
            <X className="h-5 w-5" />
          </DialogClose>
          <div className="overflow-auto max-h-[85vh]">
            <img 
              src="/lovable-uploads/ffc0d2be-bc63-46ad-b584-9a7134349063.png" 
              alt="Power vs Time Analysis data graph" 
              className="w-full h-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </AnimatedText>
  );
};

export default DataVisualization;
