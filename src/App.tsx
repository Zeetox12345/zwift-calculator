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
import PrivacyPolicy from "./pages/PrivacyPolicy";
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
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
