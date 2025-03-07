
import React from "react";
import { Bike } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedButton from "@/components/AnimatedButton";

const CallToAction: React.FC = () => {
  return (
    <AnimatedText className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Ready to Take on the Challenge?
      </h2>
      <p className="text-muted-foreground mb-6">
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
  );
};

export default CallToAction;
