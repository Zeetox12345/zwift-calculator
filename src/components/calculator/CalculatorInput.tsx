
import React from "react";
import { Bike, Dices } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCard from "@/components/AnimatedCard";

interface CalculatorInputProps {
  weight: number;
  power: number;
  wkg: number;
  setWeight: (weight: number) => void;
  setPower: (power: number) => void;
  getRandomValues: () => void;
}

const CalculatorInput: React.FC<CalculatorInputProps> = ({
  weight,
  power,
  wkg,
  setWeight,
  setPower,
  getRandomValues,
}) => {
  return (
    <AnimatedCard delay={200} className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Bike className="mr-2 text-zwift-orange" size={22} />
          Your Information
        </h2>
        <p className="text-muted-foreground text-sm">
          Enter your weight and the power you can sustain for the duration of the climb.
        </p>
      </div>

      <div className="space-y-4 flex-grow">
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm font-medium">Weight (kg)</label>
            <span className="text-sm font-medium">{weight} kg</span>
          </div>
          <Slider
            value={[weight]}
            min={30}
            max={120}
            step={1}
            onValueChange={(value) => setWeight(value[0])}
            className="my-3"
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
          <div className="flex justify-between mb-1">
            <label className="text-sm font-medium">Power (watts)</label>
            <span className="text-sm font-medium">{power} W</span>
          </div>
          <Slider
            value={[power]}
            min={100}
            max={500}
            step={5}
            onValueChange={(value) => setPower(value[0])}
            className="my-3"
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

        <div className="bg-muted/50 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Power to Weight Ratio</span>
            <span className="text-lg font-bold text-zwift-orange">{wkg} W/kg</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
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
  );
};

export default CalculatorInput;
