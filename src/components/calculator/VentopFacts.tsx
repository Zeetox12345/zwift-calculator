import React from "react";
import AnimatedText from "@/components/AnimatedText";

const VentopFacts: React.FC = () => {
  return (
    <AnimatedText delay={500} className="mt-4">
      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold mb-3">Ven Top Route Facts</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>World:</strong> Watopia</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Distance:</strong> Varies by route selection</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Elevation Gain:</strong> Significant climb</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Difficulty:</strong> Challenging gradient</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Typical Time Range:</strong> 42-150+ minutes</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Power Range:</strong> 1.75-7.0 W/kg</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Route Type:</strong> Mountain climb</span>
          </li>
          <li className="flex items-start">
            <span className="text-zwift-orange mr-2">•</span>
            <span><strong>Popular Training:</strong> Endurance building</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">What Is Ven Top?</h3>
        <p className="text-sm">
          Ven Top is one of Zwift's challenging mountain routes that tests riders' climbing abilities and endurance. Located in Watopia, this route provides a demanding workout that attracts cyclists looking to improve their climbing performance. The route offers sustained climbing that requires strategic pacing and mental toughness. Whether you're preparing for real-world mountain cycling or building your power-to-weight ratio, Ven Top provides an excellent training ground for developing climbing strength and endurance.
        </p>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">How This Ven Top Zwift Time Calculator Works</h3>
        <p className="text-sm">
          Our Ven top Zwift time calculator uses an advanced inverse power regression model based on real Zwift performance data. By inputting your weight (in kilograms) and average power (in watts), the calculator determines your approximate time to complete Ven Top. The formula uses an inverse relationship between power-to-weight ratio and completion time: Time = 3.21 + (253.38 / W/kg). This model achieved an R² of 0.984, meaning it explains 98.4% of the variance in completion times, providing highly accurate predictions for your Ven Top performance.
        </p>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">Why Power-to-Weight Ratio Matters</h3>
        <p className="text-sm">
          On climbing routes like Ven Top, your power-to-weight ratio (W/kg) is the primary determinant of your performance. Unlike flat routes where absolute power and aerodynamics play larger roles, climbing is predominantly about how much power you can produce relative to your body weight. Every extra kilogram you carry requires additional power to maintain the same climbing speed. This is why professional climbers are typically lean and why improving your W/kg through both power gains and weight optimization can dramatically improve your Ven Top times.
        </p>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">Use Our Ven Top Zwift Time Calculator</h3>
        <p className="text-sm">
          Ready to see how quickly you can conquer Ven Top? Our Ven top Zwift time calculator gives you instant predictions. Simply enter your weight and sustainable power above to get accurate time estimates. This tool helps you:
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          <li>Set realistic training goals based on your current fitness level.</li>
          <li>Track your progress by comparing predicted times as you improve.</li>
          <li>Plan your pacing strategy for optimal performance.</li>
          <li>Understand what power improvements would mean for your completion time.</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">Training Tips for Ven Top</h3>
        <ul className="list-disc pl-5 text-sm">
          <li><strong>Build Your Base:</strong> Develop aerobic endurance with longer, moderate-intensity rides.</li>
          <li><strong>Threshold Training:</strong> Improve your FTP through structured interval training at lactate threshold.</li>
          <li><strong>Climbing Repeats:</strong> Practice sustained efforts at your target Ven Top power.</li>
          <li><strong>Pacing Practice:</strong> Learn to distribute your effort evenly throughout the climb.</li>
          <li><strong>Recovery:</strong> Allow adequate recovery between hard training sessions to promote adaptation.</li>
          <li><strong>Nutrition:</strong> Practice fueling strategies for longer climbs during training.</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">Ven Top Performance Benchmarks</h3>
        <p className="text-sm">
          Understanding where you stand compared to other riders can help set realistic goals. Here are typical Ven Top completion times by rider category:
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          <li><strong>Recreational (2.0 W/kg):</strong> ~130 minutes (2h 10m)</li>
          <li><strong>Fitness Enthusiast (3.0 W/kg):</strong> ~88 minutes (1h 28m)</li>
          <li><strong>Competitive (4.0 W/kg):</strong> ~67 minutes (1h 7m)</li>
          <li><strong>Advanced (5.0 W/kg):</strong> ~54 minutes (54m)</li>
          <li><strong>Elite (6.0 W/kg):</strong> ~46 minutes (46m)</li>
          <li><strong>World Class (7.0 W/kg):</strong> ~39 minutes (39m)</li>
        </ul>
        <p className="text-sm mt-2">
          Remember, these are estimates based on sustained power. Your actual performance may vary based on pacing, equipment, and other factors. Use our calculator above for personalized predictions based on your specific power and weight.
        </p>
      </div>
    </AnimatedText>
  );
};

export default VentopFacts; 