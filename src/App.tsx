import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEOMetaTags from "./components/SEOMetaTags";
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

const queryClient = new QueryClient();

const App = () => {
  // Enable smooth scrolling for the entire app
  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOMetaTags />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
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
                <Route path="/blog/ghost-in-the-machine-why-your-brain-allows-you-to-suffer-more-in-watopia" element={<GhostInTheMachine />} />
                <Route path="/blog/the-architecture-of-sweat-a-field-guide-to-the-invisible-nation-of-watopia" element={<ArchitectureOfSweat />} />
                <Route path="/blog/the-glucose-alchemist-how-to-fuel-a-world-tour-effort-on-a-ramen-budget" element={<GlucoseAlchemist />} />
                <Route path="/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed" element={<CalculusOfPainCave />} />
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
                <Route path="/blog/how-to-keep-your-streak-in-zwift-while-travelling" element={<HowToKeepYourStreakInZwiftWhileTravelling />} />
                <Route path="/blog/how-i-started-zwifting-and-how-averagerob-arno-inspired-my-ironman-journey" element={<HowIStartedZwiftingAndHowAverageRobArnoInspiredMyIronmanJourney />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
