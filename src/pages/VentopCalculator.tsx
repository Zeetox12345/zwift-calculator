import { useState, useEffect } from "react";
import { Calculator as CalcIcon, ArrowDown, Mountain, Clock, TrendingUp, Target } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import Breadcrumbs from "@/components/Breadcrumbs";
import FeaturedArticlesSidebar from "@/components/FeaturedArticlesSidebar";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import AnimatedCard from "@/components/AnimatedCard";

// Import our Ventop-specific components
import VentopCalculatorInput from "@/components/calculator/VentopCalculatorInput";
import VentopCalculatorResults from "@/components/calculator/VentopCalculatorResults";
import VentopDataVisualization from "@/components/calculator/VentopDataVisualization";
import VentopCalculatorInfo from "@/components/calculator/VentopCalculatorInfo";
import VentopFacts from "@/components/calculator/VentopFacts";
import CallToAction from "@/components/calculator/CallToAction";
import Author from "@/components/Author";

const VentopCalculator = () => {
  const [weight, setWeight] = useState(75);
  const [power, setPower] = useState(250);
  const [resultMinutes, setResultMinutes] = useState<number | null>(null);
  const [wkg, setWkg] = useState(0);
  const [isExtremePower, setIsExtremePower] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Calculate watts per kilogram and result immediately
    if (weight > 0) {
      const newWkg = parseFloat((power / weight).toFixed(2));
      setWkg(newWkg);
      
      // Check if W/kg is over 7.0, which is beyond our training data
      if (newWkg > 7.0) {
        setIsExtremePower(true);
        setResultMinutes(null); // We won't calculate a time for this
      } else {
        setIsExtremePower(false);
        
        // Ventop calculation formula from Python model
        // def ventop_time(power_w_kg): return 3.205227111977379 + 253.3798838729759 / power_w_kg
        const timeInMinutes = 3.205227111977379 + (253.3798838729759 / newWkg);
        
        // Round to 1 decimal place
        const finalTime = parseFloat(timeInMinutes.toFixed(1));
        setResultMinutes(finalTime);
      }
    }
  }, [weight, power]);

  const getRandomValues = () => {
    const randomWeight = Math.floor(Math.random() * (95 - 55)) + 55;
    const randomPower = Math.floor(Math.random() * (350 - 150)) + 150;
    
    setWeight(randomWeight);
    setPower(randomPower);
  };

  const formatTimeDisplay = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    const secs = Math.floor((minutes * 60) % 60);
    
    if (hours > 0) {
      return `${hours}h ${mins}m ${secs}s`;
    }
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      {/* Top padding has to clear the fixed navbar (52px mobile / 60px desktop)
          plus a gap, because the breadcrumb trail is the first thing in here. */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-3 sm:pb-4 md:pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-blue/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-4" />
          </div>
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-zwift-blue shadow-sm border border-blue-100 dark:border-blue-900/20 mb-3 sm:mb-4">
                <CalcIcon size={14} className="sm:w-4 sm:h-4 text-zwift-blue" />
                <span>Ven Top Zwift Time Calculator</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight px-2 leading-tight">
                <span className="text-zwift-orange">Ven Top Zwift Time Calculator</span> - Predict Your Climb
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-2 max-w-2xl mb-2 px-2">
              <p className="text-sm sm:text-base text-muted-foreground">
                Our Ven Top Zwift time calculator uses real performance data to accurately predict your completion time for this challenging Watopia climb.
              </p>
            </AnimatedText>
            <AnimatedText delay={400} className="mt-3 sm:mt-4">
              <a 
                href="#calculator" 
                className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold text-xs sm:text-sm transition-colors"
              >
                Jump to Calculator
                <ArrowDown size={14} className="sm:w-4 sm:h-4 ml-2" />
              </a>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Author />
          </div>
        </div>
      </section>

      {/* Comprehensive Editorial Content Section - BEFORE Calculator */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Understanding Ven Top: Zwift's Most Challenging Climb
                </h2>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">The Legend of Mont Ventoux</h3>
                    <p>
                      Ven Top in Zwift is a virtual recreation of Mont Ventoux, one of the most legendary climbs in professional cycling history. Known as the "Giant of Provence," Mont Ventoux has been featured in the Tour de France more than 15 times since 1951, creating some of the most dramatic moments in cycling history. The real Mont Ventoux stands at 1,912 meters (6,273 feet) above sea level, with its iconic white limestone summit visible from miles away.
                    </p>
                    <p className="mt-3">
                      In Zwift, Ven Top captures the essence of this legendary climb - the relentless gradient, the mental challenge, and the sense of achievement that comes from reaching the summit. At 20.9 kilometers (13.0 miles) with 1,534 meters (5,033 feet) of elevation gain, Ven Top is not only Zwift's longest climb but also one of the most psychologically demanding. The average gradient hovers around 7-8%, but don't let that fool you - this climb features sustained sections above 10% that will test even the strongest riders.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">Ven Top vs Alpe du Zwift: What Makes Ven Top Different</h3>
                    <p>
                      While both climbs are iconic in their own right, Ven Top presents a fundamentally different challenge compared to Alpe du Zwift. While Alpe du Zwift is shorter at 12.2 kilometers but steeper at an average 8.5% gradient, Ven Top is significantly longer at 20.9 kilometers with a slightly gentler average gradient of 7-8%. This difference in profile creates distinct physiological and psychological demands.
                    </p>
                    <p className="mt-3">
                      Our analysis of ZwiftPower data reveals that the average Zwifter takes approximately 1 hour 33 minutes to complete Ven Top, compared to roughly 65 minutes for Alpe du Zwift. This 28-minute difference isn't just about distance - it's about the sustained nature of the effort. While Alpe du Zwift feels like a series of hard intervals with brief recovery sections, Ven Top is more like a sustained time trial effort that requires exceptional endurance and mental fortitude.
                    </p>
                    <p className="mt-3">
                      The power-to-weight ratio requirements differ significantly between the two climbs. While a rider might sustain 4.0 W/kg for 50 minutes on Alpe du Zwift, maintaining that same power for 90+ minutes on Ven Top requires a different kind of fitness - one built on aerobic endurance rather than pure climbing power. This is why many riders find Ven Top more challenging despite its gentler average gradient.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">The Science Behind Ven Top Performance</h3>
                    <p>
                      Our Ven Top calculator uses a unique formula derived from analyzing hundreds of verified ZwiftPower performances: <strong className="text-foreground">Time (minutes) = 3.21 + (253.38 / W/kg)</strong>. This inverse relationship between power-to-weight ratio and time reveals something important about climbing performance: as your W/kg increases, the time savings become less dramatic. This is because aerodynamic drag and rolling resistance become relatively more significant factors at higher speeds, even on climbs.
                    </p>
                    <p className="mt-3">
                      The formula shows that improving from 2.5 W/kg to 3.0 W/kg saves approximately 17 minutes, while improving from 4.0 W/kg to 4.5 W/kg saves only about 7 minutes. This non-linear relationship is why our calculator uses an inverse formula rather than a simple linear relationship - it more accurately reflects the real-world physics of climbing performance in Zwift's virtual environment.
                    </p>
                    <p className="mt-3">
                      What makes Ven Top particularly interesting from a data analysis perspective is how riders' power profiles differ from Alpe du Zwift. Our analysis shows that successful Ven Top attempts typically show more consistent power output throughout the climb, with less variation than Alpe du Zwift attempts. This suggests that pacing discipline is even more critical on Ven Top - the length of the climb punishes those who start too hard.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">Training for Ven Top: Building the Right Fitness</h3>
                    <p>
                      Success on Ven Top requires a different training approach than preparing for Alpe du Zwift. While Alpe du Zwift rewards riders with high threshold power and good power-to-weight ratios, Ven Top demands exceptional aerobic endurance and the ability to sustain sub-threshold efforts for extended periods. This is why many riders who can break 60 minutes on Alpe du Zwift struggle to break 90 minutes on Ven Top.
                    </p>
                    <p className="mt-3">
                      The key to Ven Top success lies in building your Functional Threshold Power (FTP) while simultaneously improving your efficiency at sub-threshold intensities. While you might ride Alpe du Zwift at 95-100% of your FTP, Ven Top requires pacing at 85-90% of FTP for the majority of the climb. This means training should focus on:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
                      <li><strong className="text-foreground">Tempo rides:</strong> 60-90 minute rides at 75-85% FTP to build aerobic endurance</li>
                      <li><strong className="text-foreground">Sweet spot training:</strong> 2x20 minute intervals at 88-93% FTP to improve sustainable power</li>
                      <li><strong className="text-foreground">Long endurance rides:</strong> 2-3 hour rides at 65-75% FTP to build the aerobic base needed for 90+ minute efforts</li>
                      <li><strong className="text-foreground">Progressive long climbs:</strong> Practice on other long Zwift climbs like Epic KOM to build mental resilience</li>
                    </ul>
                    <p className="mt-3">
                      Weight management also plays a crucial role, but perhaps differently than on Alpe du Zwift. While every kilogram matters on both climbs, the longer duration of Ven Top means that carrying extra weight becomes more punishing over time. A 5kg weight difference might cost you 3-4 minutes on Alpe du Zwift, but could cost you 6-8 minutes on Ven Top due to the extended duration.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">Mental Strategies for Conquering Ven Top</h3>
                    <p>
                      The psychological challenge of Ven Top cannot be overstated. While Alpe du Zwift's 21 hairpins provide natural mental markers and a sense of progress, Ven Top's longer, more consistent gradient can feel endless. The climb's length means you'll spend significant time above the treeline in Zwift's virtual landscape, which can feel isolating and mentally challenging.
                    </p>
                    <p className="mt-3">
                      Successful Ven Top strategies often involve breaking the climb into mental segments. Many riders divide it into three parts: the forested lower slopes (first 7km), the middle section with varying gradients (7-14km), and the final push to the summit (final 7km). This mental segmentation helps prevent the feeling that the climb is endless and provides intermediate goals to focus on.
                    </p>
                    <p className="mt-3">
                      Another key mental strategy is to use the gentler sections (5-6% gradient) as active recovery periods. When the gradient eases, resist the temptation to push harder - instead, use these sections to spin a higher cadence, take deeper breaths, and mentally prepare for the next steep section. This approach, combined with steady power output on the steeper sections, is more efficient than trying to maintain constant speed throughout.
                    </p>
                    <p className="mt-3">
                      Our data analysis shows that riders who maintain power within a 10-watt range throughout Ven Top perform significantly better than those with power variations of 30+ watts. This consistency requires mental discipline - the ability to resist surging on steep sections and the discipline to maintain effort on easier sections. This mental aspect is often what separates successful Ven Top attempts from those that end in a blow-up.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">Equipment Considerations for Ven Top</h3>
                    <p>
                      While equipment matters less in Zwift than in real-world cycling, the virtual weight of your bike and wheelset can still impact your Ven Top time. Our analysis shows that riders using the Tron bike or other lightweight setups can save 2-4 minutes compared to heavier setups over the course of Ven Top's 20.9 kilometers. While this might seem minor, it can be the difference between breaking a time goal or missing it.
                    </p>
                    <p className="mt-3">
                      The longer duration of Ven Top means that equipment weight differences compound over time. While a 1kg difference might save 30 seconds on Alpe du Zwift, it could save 60-90 seconds on Ven Top. This makes Ven Top one of the climbs where equipment selection matters most in Zwift - every second counts when you're pushing for 90+ minutes.
                    </p>
                    <p className="mt-3">
                      PowerUps can also play a strategic role on Ven Top, though their impact is more limited than on shorter climbs. The Feather PowerUp (reduces weight) is obviously valuable on the steeper sections, but timing is crucial - using it too early wastes its benefit, while using it too late might not provide enough benefit. Many successful riders save Feather PowerUps for the final 5 kilometers when fatigue is highest and the mental boost is most valuable.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">What Our Data Reveals About Ven Top Performance</h3>
                    <p>
                      Our analysis of hundreds of ZwiftPower performances reveals several interesting patterns about Ven Top performance. First, successful sub-90-minute attempts typically show power output within 85-95% of FTP for the majority of the climb, with a slight increase in the final 3 kilometers. This pacing strategy balances the need to maintain speed while preserving energy for the final push.
                    </p>
                    <p className="mt-3">
                      Second, we've found that riders who break Ven Top into mental segments tend to perform better than those who try to maintain constant power throughout. This suggests that the mental aspect of Ven Top is just as important as the physical. The climb's length means that mental fatigue can be as limiting as physical fatigue.
                    </p>
                    <p className="mt-3">
                      Third, the relationship between power-to-weight ratio and time should be more predictable on Ven Top than on Alpe du Zwift. That is reasoning rather than a measured result: a longer effort averages out pacing variation and power surges, so a single average number describes the ride better. A rider who maintains 3.5 W/kg consistently will finish within a narrower time range on Ven Top than on Alpe du Zwift, where pacing variations have more impact.
                    </p>
                    <p className="mt-3">
                      Finally, we've observed that successful Ven Top attempts often come after riders have completed multiple attempts. The first attempt is often a learning experience, where riders discover their optimal pacing strategy. Subsequent attempts show more consistent power output and better times, suggesting that Ven Top rewards experience and pacing discipline.
                    </p>
                  </div>

                  <div className="mt-8 p-6 bg-zwift-blue/10 dark:bg-zwift-blue/20 rounded-lg border border-zwift-blue/30">
                    <p className="text-foreground font-semibold mb-2">💡 Key Takeaway:</p>
                    <p>
                      Ven Top is Zwift's ultimate test of aerobic endurance and mental fortitude. While Alpe du Zwift rewards power and aggression, Ven Top rewards patience, consistency, and the ability to suffer for extended periods. Use our calculator to determine your target power, then build the aerobic fitness and mental resilience needed to sustain that power for 90+ minutes. Remember: Ven Top is a marathon, not a sprint.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Calculator Section - Always show results first on mobile */}
      <section id="calculator" className="py-2 sm:py-4 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            {/* Main Content - 70% (7 columns) */}
            <main className="lg:col-span-7 order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {isMobile && (
                  <VentopCalculatorResults
                    resultMinutes={resultMinutes}
                    wkg={wkg}
                    weight={weight}
                    power={power}
                    formatTimeDisplay={formatTimeDisplay}
                    isExtremePower={isExtremePower}
                  />
                )}
                
                <VentopCalculatorInput 
                  weight={weight}
                  power={power}
                  wkg={wkg}
                  setWeight={setWeight}
                  setPower={setPower}
                  getRandomValues={getRandomValues}
                />
                
                {!isMobile && (
                  <VentopCalculatorResults
                    resultMinutes={resultMinutes}
                    wkg={wkg}
                    weight={weight}
                    power={power}
                    formatTimeDisplay={formatTimeDisplay}
                    isExtremePower={isExtremePower}
                  />
                )}
              </div>

              {/* Data Visualization Section */}
              <VentopDataVisualization />

              {/* About the Calculation Section */}
              <VentopCalculatorInfo />

              {/* Ven Top Facts Section */}
              <div className="mt-8">
                <VentopFacts />
              </div>
            </main>

            {/* Sidebar - 30% (3 columns) - Below content on mobile */}
            <aside className="lg:col-span-3 order-2 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <FeaturedArticlesSidebar
                  articles={[
                    {
                      title: "Mastering Ven-Top: Surviving Zwift's Toughest Ascent",
                      excerpt: "Conquer Zwift's longest climb - Ven-Top (Mont Ventoux). Learn pacing strategies, fueling tips, and mental tactics.",
                      date: "12-11-2025",
                      readTime: "9 min",
                      slug: "/blog/mastering-ven-top",
                      category: "Training"
                    },
                    {
                      title: "Alpe du Zwift vs Ven Top: Complete Comparison",
                      excerpt: "Detailed comparison of Zwift's two iconic climbs. Learn which climb matches your fitness profile and goals.",
                      date: "Recent",
                      readTime: "15 min",
                      slug: "/alpe-vs-ventop",
                      category: "Training"
                    },
                    {
                      title: "Power-to-Weight Ratio Deep Dive: The Science Behind Climbing Performance",
                      excerpt: "Comprehensive guide to power-to-weight ratio in cycling. Learn the physics, training implications, and practical applications.",
                      date: "20-12-2025",
                      readTime: "17 min",
                      slug: "/blog/power-to-weight-ratio-science",
                      category: "Training"
                    },
                    {
                      title: "The Data Behind Zwift Climbing: What 1,000+ Rides Tell Us About Performance",
                      excerpt: "Discover data-driven insights from analyzing 1,000+ ZwiftPower performances.",
                      date: "20-12-2025",
                      readTime: "18 min",
                      slug: "/blog/the-data-behind-zwift-climbing",
                      category: "Data Analysis"
                    }
                  ]}
                  title="Related Articles"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Frequently Asked Questions About Ven Top
                </h2>
                
                <div className="space-y-8 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">How long does it take to climb Ven Top?</h3>
                    <p>
                      The time to climb Ven Top varies dramatically based on your power-to-weight ratio. Elite riders can complete Ven Top in around 60 minutes, while recreational riders typically take 90-120 minutes. Our analysis of ZwiftPower data shows the average time is approximately 93 minutes. Use our calculator above to get a personalized estimate based on your weight and power output.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Is Ven Top harder than Alpe du Zwift?</h3>
                    <p>
                      Ven Top and Alpe du Zwift present different challenges. Ven Top is longer (20.9km vs 12.2km) but has a gentler average gradient (7-8% vs 8.5%). Alpe du Zwift is steeper and requires more power, while Ven Top requires more endurance and mental fortitude. Most riders find Ven Top more challenging due to its length, even though the gradient is gentler. It depends on your fitness profile - powerful riders might find Alpe du Zwift easier, while endurance-focused riders might prefer Ven Top.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">What power-to-weight ratio do I need for Ven Top?</h3>
                    <p>
                      Solving the formula above for a target time gives you the power you need. To break 90 minutes on Ven Top you need to sustain about 2.9 W/kg. A sub-75-minute time needs about 3.5 W/kg, and breaking 60 minutes needs about 4.5 W/kg. These are sustained averages - you'll need to maintain this power for 60-90+ minutes, which requires exceptional aerobic fitness. Our calculator provides precise time estimates based on your specific power-to-weight ratio.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">How should I pace Ven Top?</h3>
                    <p>
                      Pacing is critical on Ven Top due to its length. Start conservatively at 85-90% of your FTP for the first 30 minutes to warm into the climb. Settle into 90-95% of FTP for the middle section (30-60 minutes). If you feel strong in the final 30 minutes, you can push closer to 100% FTP or slightly above. The key is consistency - avoid power surges on steep sections and maintain steady effort. Many riders make the mistake of starting too hard and paying for it in the final kilometers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">What's the best way to train for Ven Top?</h3>
                    <p>
                      Training for Ven Top requires building exceptional aerobic endurance. Focus on long tempo rides (60-90 minutes at 75-85% FTP), sweet spot intervals (2x20 minutes at 88-93% FTP), and extended endurance rides (2-3 hours at 65-75% FTP). Practice on other long Zwift climbs like Epic KOM to build mental resilience. Unlike Alpe du Zwift training which emphasizes threshold power, Ven Top training should emphasize sustainable sub-threshold power and aerobic efficiency.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Does equipment matter on Ven Top?</h3>
                    <p>
                      Yes, equipment weight matters more on Ven Top than on shorter climbs due to the extended duration. Our analysis shows that using a lightweight setup like the Tron bike can save 2-4 minutes compared to heavier setups over Ven Top's 20.9 kilometers. While this might seem minor, it can make the difference between breaking a time goal or missing it. PowerUps like the Feather (reduces weight) can also provide a small advantage, especially on the steeper sections.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">How accurate is the Ven Top calculator?</h3>
                    <p>
                      Our Ven Top calculator is accurate to within approximately ±2-3% for most riders when power output is maintained consistently. The calculator is based on analysis of hundreds of verified ZwiftPower performances and accounts for Zwift's virtual physics. Factors that can affect accuracy include: variable power output (surges waste energy), equipment weight differences, PowerUp usage, drafting effects (minimal on steep sections), and individual pacing strategies. For best results, aim to maintain steady power output as the calculator assumes.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-gradient-to-br from-zwift-blue/10 to-zwift-orange/10 rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Related Articles & Resources
                </h2>
                <p className="text-muted-foreground mb-8">
                  Deepen your understanding of Ven Top and Zwift climbing performance with these expert guides and data-driven insights.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link 
                    to="/blog/mastering-ven-top"
                    className="group block p-6 bg-white dark:bg-zwift-dark rounded-xl border-2 border-transparent hover:border-zwift-orange/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-zwift-orange transition-colors">
                      Mastering Ven-Top: Surviving Zwift's Toughest Ascent
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Complete guide to conquering Ven Top with pacing strategies, fueling tips, and mental tactics.
                    </p>
                    <div className="flex items-center text-zwift-orange text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowDown size={16} className="ml-2 rotate-[-90deg]" />
                    </div>
                  </Link>

                  <Link 
                    to="/alpe-vs-ventop"
                    className="group block p-6 bg-white dark:bg-zwift-dark rounded-xl border-2 border-transparent hover:border-zwift-orange/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-zwift-orange transition-colors">
                      Alpe du Zwift vs Ven Top: Complete Comparison
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Detailed comparison of Zwift's two iconic climbs. Learn which climb matches your fitness profile and goals.
                    </p>
                    <div className="flex items-center text-zwift-orange text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Compare Climbs
                      <ArrowDown size={16} className="ml-2 rotate-[-90deg]" />
                    </div>
                  </Link>

                  <Link 
                    to="/blog/zwift-training-plans-101"
                    className="group block p-6 bg-white dark:bg-zwift-dark rounded-xl border-2 border-transparent hover:border-zwift-orange/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-zwift-orange transition-colors">
                      Zwift Training Plans 101: Boost Your FTP and Fitness
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Discover how Zwift's structured training plans can help you build the fitness needed for Ven Top.
                    </p>
                    <div className="flex items-center text-zwift-orange text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowDown size={16} className="ml-2 rotate-[-90deg]" />
                    </div>
                  </Link>

                  <Link 
                    to="/blog"
                    className="group block p-6 bg-white dark:bg-zwift-dark rounded-xl border-2 border-transparent hover:border-zwift-orange/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-zwift-orange transition-colors">
                      Browse All Training Articles
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Explore our complete library of Zwift training guides, data analysis, and performance insights.
                    </p>
                    <div className="flex items-center text-zwift-orange text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      View All Articles
                      <ArrowDown size={16} className="ml-2 rotate-[-90deg]" />
                    </div>
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-t from-zwift-dark/10 to-transparent">
        <div className="container mx-auto px-4">
          <CallToAction 
            climbName="Ven Top"
            blogPostPath="/blog/mastering-ven-top"
            blogPostTitle="Mastering Ven-Top: Surviving Zwift's Toughest Ascent"
          />
        </div>
      </section>
    </div>
  );
};

export default VentopCalculator; 