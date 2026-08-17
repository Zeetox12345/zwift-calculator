import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Calculator from "./pages/Calculator";
import VentopCalculator from "./pages/VentopCalculator";
import AlpeVsVentop from "./pages/AlpeVsVentop";
import Author from "./pages/Author";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import EditorialPolicy from "./pages/EditorialPolicy";
import ZwiftClimbs from "./pages/ZwiftClimbs";
import ZwiftClimbTimeCalculator from "./pages/ZwiftClimbTimeCalculator";
import ZwiftFtpCalculator from "./pages/ZwiftFtpCalculator";
import ZwiftRacingCategoryCalculator from "./pages/ZwiftRacingCategoryCalculator";
import NotFound from "./pages/NotFound";
import ConquerAlpeDuZwift from "./pages/blog/ConquerAlpeDuZwift";
import MasteringVenTop from "./pages/blog/MasteringVenTop";
import ZwiftTrainingPlans101 from "./pages/blog/ZwiftTrainingPlans101";
import ZwiftRacingForBeginners from "./pages/blog/ZwiftRacingForBeginners";
import ZwiftSetupGuide from "./pages/blog/ZwiftSetupGuide";
import UnlockingZwiftAchievements from "./pages/blog/UnlockingZwiftAchievements";
import ZwiftPowerUpsGuide from "./pages/blog/ZwiftPowerUpsGuide";
import LevelUpFastInZwift from "./pages/blog/LevelUpFastInZwift";
import ZwiftVsOutdoorCycling from "./pages/blog/ZwiftVsOutdoorCycling";
import GetFitAndLoseWeightWithZwift from "./pages/blog/GetFitAndLoseWeightWithZwift";
import GhostInTheMachine from "./pages/blog/GhostInTheMachine";
import ArchitectureOfSweat from "./pages/blog/ArchitectureOfSweat";
import GlucoseAlchemist from "./pages/blog/GlucoseAlchemist";
import CalculusOfPainCave from "./pages/blog/CalculusOfPainCave";
import GreatOceanRoad from "./pages/blog/GreatOceanRoad";
import SydneyToWollongong from "./pages/blog/SydneyToWollongong";
import NewYorkCity from "./pages/blog/NewYorkCity";
import ColoradoMountainRiding from "./pages/blog/ColoradoMountainRiding";
import VermontUpstateGravelVsRoad from "./pages/blog/VermontUpstateGravelVsRoad";
import ShimanamiKaido from "./pages/blog/ShimanamiKaido";
import VirtualHillsRealWind from "./pages/blog/VirtualHillsRealWind";
import WhatZwiftCantTeachYou from "./pages/blog/WhatZwiftCantTeachYou";
import TenDayZwiftTrainingWeek from "./pages/blog/TenDayZwiftTrainingWeek";
import TowelsDuringZwifting from "./pages/blog/TowelsDuringZwifting";
import WhatTerminologyDoZwiftersUse from "./pages/blog/WhatTerminologyDoZwiftersUse";
import HavingTimeToZwiftDuringUniversity from "./pages/blog/HavingTimeToZwiftDuringUniversity";
import HowToKeepYourStreakInZwiftWhileTravelling from "./pages/blog/HowToKeepYourStreakInZwiftWhileTravelling";
import HowIStartedZwiftingAndHowAverageRobArnoInspiredMyIronmanJourney from "./pages/blog/HowIStartedZwiftingAndHowAverageRobArnoInspiredMyIronmanJourney";
import ZwiftClimbingDataAnalysis from "./pages/blog/ZwiftClimbingDataAnalysis";
import MechanicalEngineeringZwift from "./pages/blog/MechanicalEngineeringZwift";
import RegressionAnalysisMethodology from "./pages/blog/RegressionAnalysisMethodology";
import PowerToWeightScience from "./pages/blog/PowerToWeightScience";
import CategoryTraining from "./pages/blog/CategoryTraining";
import CategoryRacing from "./pages/blog/CategoryRacing";
import CategorySetup from "./pages/blog/CategorySetup";
import CategoryDataAnalysis from "./pages/blog/CategoryDataAnalysis";
import ZwiftDraftingPhysicsAerodynamics from "./pages/blog/ZwiftDraftingPhysicsAerodynamics";
import ZwiftRouteSelectionPsychology from "./pages/blog/ZwiftRouteSelectionPsychology";
import ZwiftGroupRideDynamics from "./pages/blog/ZwiftGroupRideDynamics";
import ZwiftEquipmentOptimizationAerodynamics from "./pages/blog/ZwiftEquipmentOptimizationAerodynamics";
import ZwiftTrainingPeriodization from "./pages/blog/ZwiftTrainingPeriodization";
import ZwiftChronobiology from "./pages/blog/ZwiftChronobiology";
import ZwiftCognitiveLoad from "./pages/blog/ZwiftCognitiveLoad";
import ZwiftSubscriptionEconomics from "./pages/blog/ZwiftSubscriptionEconomics";
import ZwiftBiomechanics from "./pages/blog/ZwiftBiomechanics";
import ZwiftNetworkPerformance from "./pages/blog/ZwiftNetworkPerformance";

/**
 * Every route the site serves. Each path here must have a matching entry in
 * `src/lib/seo.ts` so it gets pre-rendered, gets its own <head> tags and lands
 * in the sitemap.
 */
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/alpeduzwiftcalculator" element={<Calculator />} />
    <Route path="/ventop-calculator" element={<VentopCalculator />} />
    <Route path="/alpe-vs-ventop" element={<AlpeVsVentop />} />
    <Route path="/author" element={<Author />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/editorial-policy" element={<EditorialPolicy />} />
    <Route path="/zwift-climbs" element={<ZwiftClimbs />} />
    <Route path="/zwift-climb-time-calculator" element={<ZwiftClimbTimeCalculator />} />
    <Route path="/zwift-ftp-calculator" element={<ZwiftFtpCalculator />} />
    <Route path="/zwift-racing-category-calculator" element={<ZwiftRacingCategoryCalculator />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/conquer-alpe-du-zwift" element={<ConquerAlpeDuZwift />} />
    <Route path="/blog/mastering-ven-top" element={<MasteringVenTop />} />
    <Route path="/blog/zwift-training-plans-101" element={<ZwiftTrainingPlans101 />} />
    <Route path="/blog/zwift-racing-for-beginners" element={<ZwiftRacingForBeginners />} />
    <Route path="/blog/zwift-setup-guide" element={<ZwiftSetupGuide />} />
    <Route path="/blog/unlocking-zwift-achievements" element={<UnlockingZwiftAchievements />} />
    <Route path="/blog/zwift-powerups-guide" element={<ZwiftPowerUpsGuide />} />
    <Route path="/blog/level-up-fast-in-zwift" element={<LevelUpFastInZwift />} />
    <Route path="/blog/zwift-vs-outdoor-cycling" element={<ZwiftVsOutdoorCycling />} />
    <Route path="/blog/get-fit-and-lose-weight-with-zwift" element={<GetFitAndLoseWeightWithZwift />} />
    <Route
      path="/blog/ghost-in-the-machine-why-your-brain-allows-you-to-suffer-more-in-watopia"
      element={<GhostInTheMachine />}
    />
    <Route
      path="/blog/the-architecture-of-sweat-a-field-guide-to-the-invisible-nation-of-watopia"
      element={<ArchitectureOfSweat />}
    />
    <Route
      path="/blog/the-glucose-alchemist-how-to-fuel-a-world-tour-effort-on-a-ramen-budget"
      element={<GlucoseAlchemist />}
    />
    <Route
      path="/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed"
      element={<CalculusOfPainCave />}
    />
    <Route path="/blog/great-ocean-road-by-bike" element={<GreatOceanRoad />} />
    <Route path="/blog/sydney-to-wollongong" element={<SydneyToWollongong />} />
    <Route path="/blog/new-york-city-by-bike" element={<NewYorkCity />} />
    <Route path="/blog/colorado-mountain-riding" element={<ColoradoMountainRiding />} />
    <Route path="/blog/vermont-upstate-gravel-vs-road" element={<VermontUpstateGravelVsRoad />} />
    <Route path="/blog/shimanami-kaido" element={<ShimanamiKaido />} />
    <Route path="/blog/virtual-hills-real-wind-whats-harder" element={<VirtualHillsRealWind />} />
    <Route path="/blog/what-zwift-cant-teach-you-and-what-it-can" element={<WhatZwiftCantTeachYou />} />
    <Route path="/blog/10-day-zwift-training-week" element={<TenDayZwiftTrainingWeek />} />
    <Route path="/blog/towels-during-zwifting-can-it-ruin-your-bike" element={<TowelsDuringZwifting />} />
    <Route path="/blog/what-terminology-do-zwifters-use" element={<WhatTerminologyDoZwiftersUse />} />
    <Route path="/blog/having-time-to-zwift-during-university" element={<HavingTimeToZwiftDuringUniversity />} />
    <Route
      path="/blog/how-to-keep-your-streak-in-zwift-while-travelling"
      element={<HowToKeepYourStreakInZwiftWhileTravelling />}
    />
    <Route
      path="/blog/how-i-started-zwifting-and-how-averagerob-arno-inspired-my-ironman-journey"
      element={<HowIStartedZwiftingAndHowAverageRobArnoInspiredMyIronmanJourney />}
    />
    <Route path="/blog/the-data-behind-zwift-climbing" element={<ZwiftClimbingDataAnalysis />} />
    <Route path="/blog/the-mechanical-engineering-of-zwift-performance" element={<MechanicalEngineeringZwift />} />
    <Route path="/blog/regression-analysis-methodology" element={<RegressionAnalysisMethodology />} />
    <Route path="/blog/power-to-weight-ratio-science" element={<PowerToWeightScience />} />
    <Route path="/blog/category/training" element={<CategoryTraining />} />
    <Route path="/blog/category/racing" element={<CategoryRacing />} />
    <Route path="/blog/category/setup" element={<CategorySetup />} />
    <Route path="/blog/category/data-analysis" element={<CategoryDataAnalysis />} />
    <Route path="/blog/zwift-drafting-physics-aerodynamics" element={<ZwiftDraftingPhysicsAerodynamics />} />
    <Route path="/blog/zwift-route-selection-psychology" element={<ZwiftRouteSelectionPsychology />} />
    <Route path="/blog/zwift-group-ride-dynamics" element={<ZwiftGroupRideDynamics />} />
    <Route
      path="/blog/zwift-equipment-optimization-aerodynamics"
      element={<ZwiftEquipmentOptimizationAerodynamics />}
    />
    <Route path="/blog/zwift-training-periodization" element={<ZwiftTrainingPeriodization />} />
    <Route path="/blog/zwift-chronobiology" element={<ZwiftChronobiology />} />
    <Route path="/blog/zwift-cognitive-load" element={<ZwiftCognitiveLoad />} />
    <Route path="/blog/zwift-subscription-economics" element={<ZwiftSubscriptionEconomics />} />
    <Route path="/blog/zwift-biomechanics" element={<ZwiftBiomechanics />} />
    <Route path="/blog/zwift-network-performance" element={<ZwiftNetworkPerformance />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
