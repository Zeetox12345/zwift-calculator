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
            <span><strong>KOM Record:</strong> 31 minutes</span>
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

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">What Is Alpe du Zwift?</h3>
        <p className="text-sm">
          Alpe du Zwift is a virtual recreation of the legendary Alpe d'Huez, one of the most iconic climbs in professional cycling. Found in Zwift's "Road to Sky" route, Alpe du Zwift offers 21 hairpin bends—just like its real-world counterpart. Riders face a challenging ascent that truly tests their climbing ability, stamina, and mental toughness. Whether you're training for real-life mountains or just looking to push your limits in an engaging digital world, Alpe du Zwift provides an authentic climb experience with all the excitement of gamified cycling.
        </p>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">How This Calculator Works</h3>
        <p className="text-sm">
          Our Alpe du Zwift calculator uses a specially developed formula based on regression data from sites like ZwiftPower. By inputting your weight (in kilograms) and average power (in watts), the calculator determines your approximate time to conquer Alpe du Zwift. Essentially, the formula factors in how many watts per kilogram (W/kg) you're able to sustain, alongside typical in-game physics. This allows us to predict your Alpe du Zwift time with impressive accuracy, giving you valuable insights into your training progress and pacing strategies.
        </p>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">Why Weight & Power Matter</h3>
        <p className="text-sm">
          In Zwift, just like in the real world, weight and power output directly influence your climb time. This is often expressed as W/kg (watts per kilogram)—the higher your W/kg, the faster you ascend. Carrying extra weight means you'll need more power to maintain the same speed. Conversely, riders producing higher power relative to their weight will scale the mountain more quickly. Keeping an eye on W/kg is key to improving your Alpe du Zwift time and becoming a stronger cyclist overall.
        </p>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">Calculate Your Alpe du Zwift Time</h3>
        <p className="text-sm">
          Ready to see how quickly you can conquer Alpe du Zwift? Simply enter your weight and average power in the calculator, and you'll get an instant result in minutes. This fast, user-friendly tool helps you:
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          <li>Track your progress by comparing climb times across different training blocks.</li>
          <li>Set realistic goals for personal records (PRs) and major time milestones, like breaking the one-hour mark.</li>
          <li>Motivate yourself with achievable benchmarks, taking small steps toward faster climbs.</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">Tips for Faster Climbs</h3>
        <ul className="list-disc pl-5 text-sm">
          <li><strong>Pacing Strategy:</strong> Start at a sustainable power output. Going too hard too early often leads to burnout before reaching the summit.</li>
          <li><strong>Gear Selection:</strong> Use a comfortable gear ratio to maintain cadence without spiking your power unnecessarily.</li>
          <li><strong>Steady Effort:</strong> Aim for an even distribution of effort throughout the climb, avoiding big power surges on each hairpin.</li>
          <li><strong>Trainer Calibration:</strong> Make sure your smart trainer is properly calibrated so you're getting accurate power data.</li>
          <li><strong>Consistency & Recovery:</strong> Consistent training with adequate recovery days helps build the endurance and strength required for a solid Alpe du Zwift time.</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-white/10 mt-4">
        <h3 className="text-xl font-bold mb-3">Alpe du Zwift in Under 60 Minutes</h3>
        <p className="text-sm">
          Breaking the 60-minute barrier on Alpe du Zwift is a coveted achievement for many cyclists. Hitting this milestone requires dedicated training, smart pacing, and effective weight management—every extra kilogram and lost watt matters. To achieve a sub-60 minute time, riders need to maintain a minimum of 3.2 W/kg throughout the climb. Here are a few additional pointers to help you go sub-60:
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          <li><strong>Boost Your Threshold:</strong> Focus on improving your Functional Threshold Power (FTP) with structured interval sessions.</li>
          <li><strong>Optimize Body Composition:</strong> Lower body weight (without compromising health) to maximize W/kg.</li>
          <li><strong>Mental Preparation:</strong> Enter the climb with confidence, visualizing success to help push through tough sections.</li>
          <li><strong>Use Real-Time Data:</strong> Monitor your power and heart rate closely to stay on target during the climb.</li>
        </ul>
        <p className="text-sm mt-2">
          Whether you're aiming for your first full ascent or chasing that elusive one-hour finish, our Alpe du Zwift calculator provides the insights you need to reach the summit faster—and with a clear plan in place. Ride on!
        </p>
      </div>
    </AnimatedText>
  );
};

export default AlpeFacts;
