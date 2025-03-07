
import React from "react";
import AnimatedText from "@/components/AnimatedText";

const AlpeFacts: React.FC = () => {
  return (
    <AnimatedText delay={500} className="mt-4">
      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold mb-3">Alpe du Zwift Facts</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Distance:</strong> 12.2km</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Elevation Gain:</strong> 1,036m</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Average Gradient:</strong> 8.5%</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Hairpins:</strong> 21 switchbacks</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>KOM Record:</strong> ~36 minutes</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Inspired by:</strong> Alpe d'Huez</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Unlockable Item:</strong> Lightweight Meilensteins</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Badge:</strong> "Masochist" for 25 completions</span>
          </li>
        </ul>
      </div>
    </AnimatedText>
  );
};

export default AlpeFacts;
