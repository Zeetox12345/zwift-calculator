import { useState, useEffect } from "react";
import { Calculator as CalcIcon, Mountain, Trophy, Clock, Activity, ArrowRight, TrendingUp } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedCard from "@/components/AnimatedCard";
import FeaturedArticlesSidebar from "@/components/FeaturedArticlesSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";
import Author from "@/components/Author";

// Import calculator components
import CalculatorInput from "@/components/calculator/CalculatorInput";
import CalculatorResults from "@/components/calculator/CalculatorResults";
import VentopCalculatorInput from "@/components/calculator/VentopCalculatorInput";
import VentopCalculatorResults from "@/components/calculator/VentopCalculatorResults";

const AlpeVsVentop = () => {
  // Alpe du Zwift calculator state
  const [alpeWeight, setAlpeWeight] = useState(75);
  const [alpePower, setAlpePower] = useState(250);
  const [alpeResultMinutes, setAlpeResultMinutes] = useState<number | null>(null);
  const [alpeWkg, setAlpeWkg] = useState(0);
  const [alpeIsWorldRecord, setAlpeIsWorldRecord] = useState(false);

  // Ven-Top calculator state
  const [ventopWeight, setVentopWeight] = useState(75);
  const [ventopPower, setVentopPower] = useState(250);
  const [ventopResultMinutes, setVentopResultMinutes] = useState<number | null>(null);
  const [ventopWkg, setVentopWkg] = useState(0);
  const [ventopIsExtremePower, setVentopIsExtremePower] = useState(false);

  const [activeTab, setActiveTab] = useState("overview");
  const isMobile = useIsMobile();

  // Calculate Alpe du Zwift times
  useEffect(() => {
    if (alpeWeight > 0) {
      const newWkg = parseFloat((alpePower / alpeWeight).toFixed(2));
      setAlpeWkg(newWkg);
      
      if (newWkg > 7.5) {
        setAlpeIsWorldRecord(true);
        setAlpeResultMinutes(null);
      } else {
        setAlpeIsWorldRecord(false);
        const timeInSeconds = 148.60 * Math.pow(newWkg, 2) - 1954.08 * newWkg + 8329.87;
        const timeInMinutes = parseFloat((timeInSeconds / 60).toFixed(1));
        setAlpeResultMinutes(timeInMinutes);
      }
    }
  }, [alpeWeight, alpePower]);

  // Calculate Ven-Top times
  useEffect(() => {
    if (ventopWeight > 0) {
      const newWkg = parseFloat((ventopPower / ventopWeight).toFixed(2));
      setVentopWkg(newWkg);
      
      if (newWkg > 7.0) {
        setVentopIsExtremePower(true);
        setVentopResultMinutes(null);
      } else {
        setVentopIsExtremePower(false);
        const timeInMinutes = 3.205227111977379 + (253.3798838729759 / newWkg);
        const finalTime = parseFloat(timeInMinutes.toFixed(1));
        setVentopResultMinutes(finalTime);
      }
    }
  }, [ventopWeight, ventopPower]);

  const formatTimeDisplay = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    const secs = Math.floor((minutes * 60) % 60);
    
    if (hours > 0) {
      return `${hours}h ${mins}m ${secs}s`;
    }
    return `${mins}m ${secs}s`;
  };

  const getRandomValues = (setWeight: (w: number) => void, setPower: (p: number) => void) => {
    const randomWeight = Math.floor(Math.random() * (95 - 55)) + 55;
    const randomPower = Math.floor(Math.random() * (350 - 150)) + 150;
    setWeight(randomWeight);
    setPower(randomPower);
  };

  const syncCalculators = () => {
    setVentopWeight(alpeWeight);
    setVentopPower(alpePower);
  };

  const routeComparison = [
    {
      aspect: "Distance",
      alpe: "12.2 km",
      ventop: "Variable (route dependent)",
      winner: "alpe",
      description: "Fixed vs variable distance"
    },
    {
      aspect: "Elevation Gain",
      alpe: "1,036m",
      ventop: "Significant (varies)",
      winner: "alpe",
      description: "Specific vs variable elevation"
    },
    {
      aspect: "Average Gradient",
      alpe: "8.5% consistent",
      ventop: "Variable gradient",
      winner: "alpe",
      description: "Predictable vs varied"
    },
    {
      aspect: "Route Structure",
      alpe: "21 numbered hairpins",
      ventop: "Mountain climbing segments",
      winner: "alpe",
      description: "Structured vs flowing"
    },
    {
      aspect: "Training Focus",
      alpe: "FTP & Threshold Power",
      ventop: "Endurance & Base Building",
      winner: "tie",
      description: "Both excel in different areas"
    },
    {
      aspect: "Mental Challenge",
      alpe: "Hairpin countdown",
      ventop: "Sustained effort",
      winner: "tie",
      description: "Different psychological aspects"
    },
    {
      aspect: "Time Range",
      alpe: "30-90 minutes",
      ventop: "42-150+ minutes",
      winner: "alpe",
      description: "Shorter vs longer duration"
    },
    {
      aspect: "Repeatability",
      alpe: "Highly consistent",
      ventop: "Variable experience",
      winner: "alpe",
      description: "Consistent vs dynamic"
    }
  ];

  return (
    <>
      
      <div className="min-h-screen flex flex-col overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-14 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zwift-blue/20 via-zwift-orange/10 to-transparent -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Breadcrumbs className="mb-4" />
            </div>
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <AnimatedText delay={100}>
                <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-zwift-blue shadow-sm border border-blue-100 dark:border-blue-900/20 mb-4 sm:mb-6">
                  <Mountain size={14} className="sm:w-4 sm:h-4 text-zwift-blue" />
                  <span>Ultimate Climbing Comparison</span>
                </div>
              </AnimatedText>
              
              <AnimatedText delay={200} className="mt-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight px-2">
                  <span className="text-zwift-orange">Alpe du Zwift</span> vs{" "}
                  <span className="text-zwift-blue">Ven-Top</span>
                </h1>
              </AnimatedText>
              
              <AnimatedText delay={300} className="mt-4 sm:mt-6 max-w-3xl px-2">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  The ultimate guide comparing Zwift's two most iconic climbing challenges. 
                  Discover detailed route analysis, interactive time calculators, and expert insights 
                  to help you conquer both legendary ascents.
                </p>
              </AnimatedText>

              <AnimatedText delay={400} className="mt-6 sm:mt-8">
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                  <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Interactive Calculators
                  </Badge>
                  <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Real Performance Data
                  </Badge>
                  <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Training Insights
                  </Badge>
                </div>
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <Author />
            </div>
          </div>
        </section>

        {/* Comprehensive Editorial Content Section */}
        <section className="py-8 sm:py-12 md:py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
              {/* Main Content - 70% (7 columns) */}
              <div className="lg:col-span-7 order-1">
                <AnimatedCard delay={200}>
                  <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Alpe du Zwift vs Ven Top: Choosing Your Ultimate Challenge
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      In the world of Zwift climbing, two names stand above all others: Alpe du Zwift and Ven Top. These iconic ascents represent different philosophies of suffering, different tests of fitness, and different paths to cycling achievement. Understanding their differences isn't just about choosing which climb to attempt - it's about understanding your own fitness profile, training goals, and what kind of challenge will make you stronger.
                    </p>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">The Fundamental Difference: Power vs Endurance</h3>
                      <p>
                        At their core, Alpe du Zwift and Ven Top test different energy systems and fitness attributes. Alpe du Zwift, at 12.2 kilometers with an average gradient of 8.5%, is a threshold power test. It rewards riders who can sustain high power-to-weight ratios for 50-70 minutes. Ven Top, at 20.9 kilometers with a gentler average gradient of 7-8%, is an aerobic endurance test. It rewards riders who can maintain sub-threshold power for 90-120 minutes.
                      </p>
                      <p className="mt-3">
                        Our analysis of ZwiftPower data reveals this distinction clearly. Riders who excel on Alpe du Zwift typically show power profiles that hover at 95-100% of their Functional Threshold Power (FTP), with some variation as they attack steeper sections and recover on brief shallower sections. Ven Top performances, by contrast, show power profiles consistently at 85-90% of FTP, with less variation. This isn't because Ven Top riders are weaker - it's because Ven Top requires a different kind of fitness.
                      </p>
                      <p className="mt-3">
                        Think of it this way: Alpe du Zwift is like a 60-minute time trial effort, while Ven Top is like a 90-minute tempo ride that gradually increases in difficulty. Both are brutally hard, but they're hard in different ways. Alpe du Zwift will leave your legs screaming from threshold efforts. Ven Top will leave you mentally drained from the unrelenting duration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">Training Implications: What Each Climb Builds</h3>
                      <p>
                        The training required to excel on each climb differs significantly. To improve on Alpe du Zwift, you need to focus on threshold power development. This means workouts like 2x20-minute intervals at FTP, 3x10-minute intervals slightly above FTP, and shorter VO2 max intervals to improve your ability to surge on steep sections. The goal is to raise your FTP and improve your power-to-weight ratio.
                      </p>
                      <p className="mt-3">
                        To improve on Ven Top, you need to focus on aerobic endurance and efficiency. This means long tempo rides (60-90 minutes at 75-85% FTP), sweet spot training (2x20 minutes at 88-93% FTP), and extended endurance rides (2-3 hours at 65-75% FTP). The goal is to improve your body's ability to utilize fat as fuel and maintain steady power for extended periods.
                      </p>
                      <p className="mt-3">
                        Interestingly, improving on one climb can help with the other, but not equally. Improving your FTP will help on both climbs, but it will help more on Alpe du Zwift. Improving your aerobic endurance will help on both climbs, but it will help more on Ven Top. The most well-rounded Zwift athletes can perform well on both climbs, but most riders naturally gravitate toward one based on their physiology and training background.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">Psychological Differences: The Mental Game</h3>
                      <p>
                        The psychological challenges of each climb are as different as the physical challenges. Alpe du Zwift's 21 numbered hairpins provide natural mental markers. You can count down from 21, celebrate each hairpin conquered, and use the numbered signs as intermediate goals. This structure helps many riders manage the mental challenge - you're never more than a few minutes from the next milestone.
                      </p>
                      <p className="mt-3">
                        Ven Top, by contrast, offers fewer obvious mental markers. The climb is longer and more consistent, which can make it feel endless. Many riders report that Ven Top's psychological challenge is harder than its physical challenge - the knowledge that you're only halfway done when you've been climbing for 45 minutes can be mentally crushing. This is why many riders who can break 60 minutes on Alpe du Zwift struggle to break 90 minutes on Ven Top, even though the power requirements are similar.
                      </p>
                      <p className="mt-3">
                        Our data analysis supports this. Successful Alpe du Zwift attempts often show power variations that correspond with the hairpin sections - riders push harder on steep sections and ease slightly on transitions. Successful Ven Top attempts show more consistent power output, suggesting that mental discipline and the ability to avoid surges is more critical on Ven Top.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">Which Climb Should You Choose?</h3>
                      <p>
                        The answer depends on your goals, fitness profile, and what you want to achieve. Choose Alpe du Zwift if you want to test your threshold power, improve your power-to-weight ratio, and challenge yourself with a shorter but more intense effort. Alpe du Zwift is ideal if you're training for shorter events, want to improve your sprint climbing ability, or enjoy the mental structure of numbered hairpins.
                      </p>
                      <p className="mt-3">
                        Choose Ven Top if you want to test your aerobic endurance, improve your ability to sustain sub-threshold efforts, and challenge yourself with a longer but slightly less intense effort. Ven Top is ideal if you're training for longer events, want to improve your endurance base, or want to challenge your mental fortitude over extended periods.
                      </p>
                      <p className="mt-3">
                        Many Zwift athletes use both climbs strategically. Alpe du Zwift becomes a regular threshold test and power-building tool. Ven Top becomes a monthly or quarterly endurance test and aerobic base builder. This approach provides comprehensive fitness development - the power from Alpe du Zwift training helps on Ven Top, and the endurance from Ven Top training helps on Alpe du Zwift.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">Data-Driven Insights: What the Numbers Tell Us</h3>
                      <p>
                        Our analysis of hundreds of ZwiftPower performances reveals several interesting patterns. First, riders who can break 60 minutes on Alpe du Zwift typically need 3.2-3.5 W/kg, while riders who can break 90 minutes on Ven Top typically need 3.0-3.2 W/kg. This suggests that Ven Top is slightly "easier" from a power perspective, but the longer duration makes it more challenging overall.
                      </p>
                      <p className="mt-3">
                        Second, we've found that power consistency matters more on Ven Top than on Alpe du Zwift. Riders with power variations of 30+ watts perform relatively worse on Ven Top than on Alpe du Zwift. This suggests that pacing discipline is more critical on Ven Top - the length of the climb punishes those who can't maintain steady effort.
                      </p>
                      <p className="mt-3">
                        Third, we've observed that many riders show improvement on Ven Top after focusing on Alpe du Zwift training, but the reverse is less common. This suggests that threshold power improvements transfer well to endurance efforts, but endurance improvements don't transfer as well to threshold efforts. This has important implications for training periodization - build your FTP first, then work on endurance.
                      </p>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-zwift-orange/10 to-zwift-blue/10 dark:from-zwift-orange/20 dark:to-zwift-blue/20 rounded-lg border border-zwift-orange/30">
                      <p className="text-foreground font-semibold mb-2">💡 Key Insight:</p>
                      <p>
                        Alpe du Zwift and Ven Top aren't competitors - they're complementary challenges that test different aspects of your fitness. Use Alpe du Zwift to build power and test your threshold. Use Ven Top to build endurance and test your mental fortitude. Master both, and you'll have the fitness and mental strength to conquer any challenge Zwift throws at you. Use the comparison tools below to see how your power-to-weight ratio translates to each climb, then choose the challenge that matches your current fitness and goals.
                      </p>
                    </div>
                  </div>
                  </div>
                </AnimatedCard>
              </div>

              {/* Sidebar - 30% (3 columns) - Below content on mobile */}
              <aside className="lg:col-span-3 order-2 lg:order-2">
                <div className="lg:sticky lg:top-24">
                  <FeaturedArticlesSidebar
                    articles={[
                      {
                        title: "Alpe du Zwift vs Ven Top: Complete Comparison",
                        excerpt: "Detailed comparison of Zwift's two iconic climbs. Learn which climb matches your fitness profile.",
                        date: "Recent",
                        readTime: "15 min",
                        slug: "/alpe-vs-ventop",
                        category: "Training"
                      },
                      {
                        title: "Conquer the Alpe du Zwift: Tips for a Faster Climb",
                        excerpt: "Master Alpe du Zwift with expert pacing strategies, training tips, and in-game tactics.",
                        date: "12-11-2025",
                        readTime: "8 min",
                        slug: "/blog/conquer-alpe-du-zwift",
                        category: "Training"
                      },
                      {
                        title: "Mastering Ven-Top: Surviving Zwift's Toughest Ascent",
                        excerpt: "Conquer Zwift's longest climb - Ven-Top (Mont Ventoux). Learn pacing strategies and mental tactics.",
                        date: "12-11-2025",
                        readTime: "9 min",
                        slug: "/blog/mastering-ven-top",
                        category: "Training"
                      },
                      {
                        title: "Power-to-Weight Ratio Deep Dive: The Science Behind Climbing Performance",
                        excerpt: "Comprehensive guide to power-to-weight ratio in cycling. Learn the physics and training implications.",
                        date: "20-12-2025",
                        readTime: "17 min",
                        slug: "/blog/power-to-weight-ratio-science",
                        category: "Training"
                      }
                    ]}
                    title="Related Articles"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
              {/* Main Content - 70% (7 columns) */}
              <div className="lg:col-span-7 order-1">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="calculators">Calculators</TabsTrigger>
                  <TabsTrigger value="comparison">Route Details</TabsTrigger>
                  <TabsTrigger value="training">Training</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatedCard delay={100}>
                      <Card className="h-full border-2 border-zwift-orange/20 hover:border-zwift-orange/40 transition-all">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 mx-auto bg-zwift-orange/10 rounded-full flex items-center justify-center mb-4">
                            <Mountain className="w-8 h-8 text-zwift-orange" />
                          </div>
                          <CardTitle className="text-2xl text-zwift-orange">Alpe du Zwift</CardTitle>
                          <CardDescription>The Legendary 21 Hairpins</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Distance:</span>
                                <span className="font-medium">12.2 km</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Elevation:</span>
                                <span className="font-medium">1,036m</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Gradient:</span>
                                <span className="font-medium">8.5%</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Hairpins:</span>
                                <span className="font-medium">21</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Record:</span>
                                <span className="font-medium">31 min</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">World:</span>
                                <span className="font-medium">Watopia</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-4">
                            The virtual recreation of Alpe d'Huez, featuring 21 iconic hairpin bends 
                            that test climbing ability and mental toughness.
                          </p>
                        </CardContent>
                      </Card>
                    </AnimatedCard>

                    <AnimatedCard delay={200}>
                      <Card className="h-full border-2 border-zwift-blue/20 hover:border-zwift-blue/40 transition-all">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 mx-auto bg-zwift-blue/10 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="w-8 h-8 text-zwift-blue" />
                          </div>
                          <CardTitle className="text-2xl text-zwift-blue">Ven-Top</CardTitle>
                          <CardDescription>The Endurance Challenge</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Distance:</span>
                                <span className="font-medium">Varies</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Type:</span>
                                <span className="font-medium">Mountain</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Difficulty:</span>
                                <span className="font-medium">High</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Range:</span>
                                <span className="font-medium">42-150+ min</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Power:</span>
                                <span className="font-medium">1.75-7.0 W/kg</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">World:</span>
                                <span className="font-medium">Watopia</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-4">
                            A demanding Watopia climb that builds endurance and climbing strength 
                            through sustained power efforts.
                          </p>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  </div>

                  {/* Comprehensive Comparison Chart */}
                  <AnimatedCard delay={300}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-center">Comprehensive Route Comparison</CardTitle>
                        <CardDescription className="text-center">
                          Detailed analysis of key differences between these legendary climbs
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {/* Desktop/Tablet View */}
                        <div className="hidden md:block">
                          <div className="overflow-x-auto">
                            <div className="min-w-full space-y-3">
                              <div className="grid grid-cols-5 gap-4 pb-3 border-b-2 border-border font-semibold text-sm">
                                <div>Aspect</div>
                                <div className="text-center text-zwift-orange">Alpe du Zwift</div>
                                <div className="text-center text-zwift-blue">Ven-Top</div>
                                <div className="text-center">Advantage</div>
                                <div className="text-center">Notes</div>
                              </div>
                              {routeComparison.map((item, index) => (
                                <div key={index} className="grid grid-cols-5 gap-4 py-3 border-b border-border/30 last:border-b-0 hover:bg-muted/30 transition-colors rounded-lg">
                                  <div className="font-medium text-sm">{item.aspect}</div>
                                  <div className={`text-center text-sm p-2 rounded ${item.winner === 'alpe' ? 'bg-zwift-orange/10 text-zwift-orange font-medium border border-zwift-orange/20' : 'text-muted-foreground'}`}>
                                    {item.alpe}
                                  </div>
                                  <div className={`text-center text-sm p-2 rounded ${item.winner === 'ventop' ? 'bg-zwift-blue/10 text-zwift-blue font-medium border border-zwift-blue/20' : 'text-muted-foreground'}`}>
                                    {item.ventop}
                                  </div>
                                  <div className="text-center">
                                    {item.winner === 'tie' ? (
                                      <span className="text-lg">🤝</span>
                                    ) : item.winner === 'alpe' ? (
                                      <span className="text-zwift-orange text-lg font-bold">🟠</span>
                                    ) : (
                                      <span className="text-zwift-blue text-lg font-bold">🔵</span>
                                    )}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Mobile View - Card Layout */}
                        <div className="md:hidden space-y-4">
                          {routeComparison.map((item, index) => (
                            <div key={index} className="border border-border/50 rounded-lg p-4 space-y-3">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-base">{item.aspect}</h4>
                                <div className="text-xl">
                                  {item.winner === 'tie' ? '🤝' : item.winner === 'alpe' ? '🟠' : '🔵'}
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <div className={`p-3 rounded-lg ${item.winner === 'alpe' ? 'bg-zwift-orange/10 border border-zwift-orange/20' : 'bg-muted/30'}`}>
                                  <div className="text-xs font-medium text-zwift-orange mb-1">ALPE DU ZWIFT</div>
                                  <div className={`text-sm ${item.winner === 'alpe' ? 'text-zwift-orange font-medium' : 'text-muted-foreground'}`}>
                                    {item.alpe}
                                  </div>
                                </div>
                                
                                <div className={`p-3 rounded-lg ${item.winner === 'ventop' ? 'bg-zwift-blue/10 border border-zwift-blue/20' : 'bg-muted/30'}`}>
                                  <div className="text-xs font-medium text-zwift-blue mb-1">VEN-TOP</div>
                                  <div className={`text-sm ${item.winner === 'ventop' ? 'text-zwift-blue font-medium' : 'text-muted-foreground'}`}>
                                    {item.ventop}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="text-xs text-muted-foreground pt-2 border-t border-border/30">
                                {item.description}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 text-center">
                          <p className="text-sm text-muted-foreground">
                            🟠 = Alpe du Zwift advantage • 🔵 = Ven-Top advantage • 🤝 = Both routes excel
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </TabsContent>

                {/* Interactive Calculators Tab */}
                <TabsContent value="calculators" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Interactive Time Calculators</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Compare your predicted times on both routes with our advanced calculators. 
                      Based on real Zwift performance data for accurate predictions.
                    </p>
                    <Button 
                      onClick={syncCalculators}
                      className="mt-4 bg-gradient-to-r from-zwift-orange to-zwift-blue text-white"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Sync Calculator Values
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Alpe du Zwift Calculator */}
                    <AnimatedCard delay={100}>
                      <Card className="border-2 border-zwift-orange/20">
                        <CardHeader className="text-center bg-gradient-to-r from-zwift-orange/10 to-zwift-orange/5">
                          <CardTitle className="text-zwift-orange flex items-center justify-center gap-2">
                            <Mountain className="w-5 h-5" />
                            Alpe du Zwift Calculator
                          </CardTitle>
                          <CardDescription>Predict your time for the 21 hairpins</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            <CalculatorInput 
                              weight={alpeWeight}
                              power={alpePower}
                              wkg={alpeWkg}
                              setWeight={setAlpeWeight}
                              setPower={setAlpePower}
                              getRandomValues={() => getRandomValues(setAlpeWeight, setAlpePower)}
                            />
                            <CalculatorResults
                              resultMinutes={alpeResultMinutes}
                              wkg={alpeWkg}
                              weight={alpeWeight}
                              power={alpePower}
                              formatTimeDisplay={formatTimeDisplay}
                              isWorldRecord={alpeIsWorldRecord}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>

                    {/* Ven-Top Calculator */}
                    <AnimatedCard delay={200}>
                      <Card className="border-2 border-zwift-blue/20">
                        <CardHeader className="text-center bg-gradient-to-r from-zwift-blue/10 to-zwift-blue/5">
                          <CardTitle className="text-zwift-blue flex items-center justify-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Ven-Top Calculator
                          </CardTitle>
                          <CardDescription>Predict your mountain climb time</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            <VentopCalculatorInput 
                              weight={ventopWeight}
                              power={ventopPower}
                              wkg={ventopWkg}
                              setWeight={setVentopWeight}
                              setPower={setVentopPower}
                              getRandomValues={() => getRandomValues(setVentopWeight, setVentopPower)}
                            />
                            <VentopCalculatorResults
                              resultMinutes={ventopResultMinutes}
                              wkg={ventopWkg}
                              weight={ventopWeight}
                              power={ventopPower}
                              formatTimeDisplay={formatTimeDisplay}
                              isExtremePower={ventopIsExtremePower}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  </div>

                  {/* Time Comparison */}
                  {alpeResultMinutes && ventopResultMinutes && (
                    <AnimatedCard delay={300}>
                      <Card className="bg-gradient-to-r from-zwift-orange/5 to-zwift-blue/5">
                        <CardHeader className="text-center">
                          <CardTitle>Your Predicted Times Comparison</CardTitle>
                          <CardDescription>
                            Based on {alpeWkg} W/kg power-to-weight ratio
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-zwift-orange mb-2">
                                {formatTimeDisplay(alpeResultMinutes)}
                              </div>
                              <div className="text-sm text-muted-foreground">Alpe du Zwift</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-medium mb-2">
                                {alpeResultMinutes < ventopResultMinutes ? 'Alpe is faster!' : 'Ven-Top is faster!'}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Difference: {Math.abs(alpeResultMinutes - ventopResultMinutes).toFixed(1)} minutes
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-zwift-blue mb-2">
                                {formatTimeDisplay(ventopResultMinutes)}
                              </div>
                              <div className="text-sm text-muted-foreground">Ven-Top</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  )}
                </TabsContent>

                {/* Detailed Comparison Tab */}
                <TabsContent value="comparison" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Detailed Route Analysis</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      In-depth comparison of route characteristics, difficulty factors, and what makes each climb unique.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatedCard delay={100}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle className="text-zwift-orange">Alpe du Zwift: The Technical Climber</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold mb-2">Route Characteristics</h4>
                              <ul className="text-sm space-y-1 text-muted-foreground">
                                <li>• 12.2km distance with 1,036m elevation gain</li>
                                <li>• Consistent 8.5% average gradient</li>
                                <li>• 21 numbered hairpin switchbacks</li>
                                <li>• Based on the legendary Alpe d'Huez</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Mental Challenge</h4>
                              <p className="text-sm text-muted-foreground">
                                The psychological aspect is huge - counting down from 21 to 1 hairpin markers 
                                creates natural segments and helps with pacing strategy.
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Best For</h4>
                              <ul className="text-sm space-y-1 text-muted-foreground">
                                <li>• FTP and threshold training</li>
                                <li>• Goal-oriented workouts</li>
                                <li>• Structured interval sessions</li>
                                <li>• Testing sustained power</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>

                    <AnimatedCard delay={200}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle className="text-zwift-blue">Ven-Top: The Endurance Builder</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold mb-2">Route Characteristics</h4>
                              <ul className="text-sm space-y-1 text-muted-foreground">
                                <li>• Variable distance depending on route selection</li>
                                <li>• Sustained climbing with challenging gradients</li>
                                <li>• Mountain climb format in Watopia</li>
                                <li>• Endurance-focused challenge</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Training Focus</h4>
                              <p className="text-sm text-muted-foreground">
                                Emphasizes steady-state power and endurance building. Perfect for 
                                developing the aerobic base needed for long climbs.
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Best For</h4>
                              <ul className="text-sm space-y-1 text-muted-foreground">
                                <li>• Endurance base building</li>
                                <li>• Steady-state power development</li>
                                <li>• Long-form training sessions</li>
                                <li>• Aerobic capacity improvement</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  </div>

                  {/* When to Choose Which */}
                  <AnimatedCard delay={300}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-center">Which Route Should You Choose?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-3 text-zwift-orange">Choose Alpe du Zwift When:</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-orange mt-1">•</span>
                                <span>You want a structured, goal-oriented workout</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-orange mt-1">•</span>
                                <span>Testing your FTP or threshold power</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-orange mt-1">•</span>
                                <span>You have limited time (30-90 minutes)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-orange mt-1">•</span>
                                <span>You enjoy the psychological challenge of counting hairpins</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-orange mt-1">•</span>
                                <span>Training for similar gradient climbs in real life</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 text-zwift-blue">Choose Ven-Top When:</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-blue mt-1">•</span>
                                <span>Building your endurance base</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-blue mt-1">•</span>
                                <span>Working on steady-state power</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-blue mt-1">•</span>
                                <span>You have time for longer training sessions</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-blue mt-1">•</span>
                                <span>Preparing for long mountain events</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-zwift-blue mt-1">•</span>
                                <span>Developing aerobic capacity</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </TabsContent>

                {/* Training Tab */}
                <TabsContent value="training" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Training Strategies & Tips</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Expert training advice for conquering both climbs and improving your times.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <AnimatedCard delay={100}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle className="text-center">
                            <Activity className="w-8 h-8 mx-auto mb-2 text-zwift-orange" />
                            Power Training
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">FTP Development</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Focus on threshold intervals to build sustainable power:
                            </p>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• 2x20min at FTP</li>
                              <li>• 3x15min slightly above FTP</li>
                              <li>• 4x10min sweet spot intervals</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">W/kg Optimization</h4>
                            <p className="text-sm text-muted-foreground">
                              Improve power-to-weight ratio through both power gains and body composition optimization.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>

                    <AnimatedCard delay={200}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle className="text-center">
                            <Clock className="w-8 h-8 mx-auto mb-2 text-zwift-blue" />
                            Pacing Strategy
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Alpe du Zwift Pacing</h4>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Start conservatively below threshold</li>
                              <li>• Use hairpins as natural break points</li>
                              <li>• Save energy for final 5 hairpins</li>
                              <li>• Maintain steady cadence throughout</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Ven-Top Pacing</h4>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Focus on negative split strategy</li>
                              <li>• Build intensity gradually</li>
                              <li>• Monitor power zones carefully</li>
                              <li>• Stay relaxed in opening sections</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>

                    <AnimatedCard delay={300}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle className="text-center">
                            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
                            Mental Training
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Psychological Strategies</h4>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Break climbs into smaller segments</li>
                              <li>• Set intermediate time goals</li>
                              <li>• Use positive self-talk</li>
                              <li>• Visualize successful completion</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Focus Techniques</h4>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Count pedal strokes</li>
                              <li>• Monitor breathing rhythm</li>
                              <li>• Use music for motivation</li>
                              <li>• Practice mindfulness</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  </div>

                  <AnimatedCard delay={400}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-center">Training Progression Plan</CardTitle>
                        <CardDescription className="text-center">
                          A structured approach to improve your times on both routes
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 border rounded-lg">
                              <div className="font-semibold mb-2">Week 1-2</div>
                              <div className="text-sm text-muted-foreground">Baseline Testing</div>
                              <div className="text-xs mt-2">Complete both routes at comfortable pace</div>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="font-semibold mb-2">Week 3-6</div>
                              <div className="text-sm text-muted-foreground">Base Building</div>
                              <div className="text-xs mt-2">Focus on Ven-Top for endurance</div>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="font-semibold mb-2">Week 7-10</div>
                              <div className="text-sm text-muted-foreground">Threshold Focus</div>
                              <div className="text-xs mt-2">Alpe du Zwift intervals and FTP work</div>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="font-semibold mb-2">Week 11-12</div>
                              <div className="text-sm text-muted-foreground">Time Trials</div>
                              <div className="text-xs mt-2">Peak attempts on both routes</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </TabsContent>
              </Tabs>
              </div>

              {/* Sidebar - 30% (3 columns) - Below content on mobile */}
              <aside className="lg:col-span-3 order-2 lg:order-2">
                <div className="lg:sticky lg:top-24">
                  <FeaturedArticlesSidebar
                    articles={[
                      {
                        title: "Alpe du Zwift Calculator",
                        excerpt: "Calculate your Alpe du Zwift climbing time based on your weight and power.",
                        date: "Tool",
                        slug: "/alpeduzwiftcalculator",
                        category: "Calculator"
                      },
                      {
                        title: "Ven Top Calculator",
                        excerpt: "Calculate your Ven Top climb time and compare with Alpe du Zwift.",
                        date: "Tool",
                        slug: "/ventop-calculator",
                        category: "Calculator"
                      },
                      {
                        title: "The Data Behind Zwift Climbing",
                        excerpt: "Discover data-driven insights from analyzing 1,000+ ZwiftPower performances.",
                        date: "20-12-2025",
                        readTime: "18 min",
                        slug: "/blog/the-data-behind-zwift-climbing",
                        category: "Data Analysis"
                      },
                      {
                        title: "ZwiftPower Regression Analysis",
                        excerpt: "Behind-the-scenes look at how we built accurate Zwift climbing time predictors.",
                        date: "20-12-2025",
                        readTime: "15 min",
                        slug: "/blog/regression-analysis-methodology",
                        category: "Data Analysis"
                      }
                    ]}
                    title="Related Tools & Articles"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Final Recommendations Section */}
        <section className="py-16 bg-gradient-to-b from-zwift-orange/5 via-zwift-blue/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedCard delay={100}>
                <Card className="border-2 border-gradient-to-r from-zwift-orange/30 to-zwift-blue/30">
                  <CardHeader>
                    <CardTitle className="text-3xl mb-4">Which Route Should You Choose?</CardTitle>
                    <CardDescription className="text-lg">
                      Your choice depends on your current training goals and fitness level
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="p-4 sm:p-6 bg-zwift-orange/10 rounded-xl border border-zwift-orange/20">
                        <h4 className="text-lg sm:text-xl font-bold text-zwift-orange mb-4">Choose Alpe du Zwift If You Want:</h4>
                        <ul className="space-y-3 text-left">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-zwift-orange rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">Structured, time-efficient workouts (30-90 min)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-zwift-orange rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">FTP testing and threshold power development</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-zwift-orange rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">Predictable, repeatable training sessions</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-zwift-orange rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">Mental challenge with clear progress markers</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 sm:p-6 bg-zwift-blue/10 rounded-xl border border-zwift-blue/20">
                        <h4 className="text-lg sm:text-xl font-bold text-zwift-blue mb-4">Choose Ven-Top If You Want:</h4>
                        <ul className="space-y-3 text-left">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-zwift-blue rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">Endurance base building (42-150+ min)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-zwift-blue rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">Aerobic capacity and steady-state power</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-zwift-blue rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">Variable, dynamic climbing experience</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-zwift-blue rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">Long-distance event preparation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-border/50">
                      <p className="text-lg text-muted-foreground">
                        <strong>Pro Tip:</strong> Use both routes in your training plan. Start with Ven-Top for base building, 
                        then progress to Alpe du Zwift for intensity work. Use our calculators above to track your improvement 
                        and set realistic goals for both climbs.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-gradient-to-t from-muted/30 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Alpe du Zwift vs Ven-Top: The Ultimate Comparison Guide</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  The definitive resource for understanding these two legendary Zwift climbs
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AnimatedCard delay={100}>
                  <Card className="h-full border-l-4 border-l-zwift-orange">
                    <CardHeader>
                      <CardTitle className="text-zwift-orange text-xl">Why Choose Alpe du Zwift?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Alpe du Zwift stands as the gold standard for structured climbing in Zwift. With its 21 numbered 
                        hairpins and consistent 8.5% gradient across 12.2km, it provides the perfect testing ground for 
                        FTP and threshold power.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Perfect for:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Structured workouts and performance benchmarking</li>
                          <li>• FTP testing and threshold power development</li>
                          <li>• Goal-oriented training sessions</li>
                          <li>• Preparing for competitive cycling events</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>

                <AnimatedCard delay={200}>
                  <Card className="h-full border-l-4 border-l-zwift-blue">
                    <CardHeader>
                      <CardTitle className="text-zwift-blue text-xl">Why Choose Ven-Top?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Ven-Top excels in endurance building and aerobic base development. This Watopia mountain climb 
                        offers variable route options and sustained climbing that builds the foundation for long-distance 
                        performance.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Perfect for:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Endurance events and base fitness building</li>
                          <li>• Aerobic capacity improvement</li>
                          <li>• Long-distance performance development</li>
                          <li>• Building sustained power capabilities</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </div>

              <AnimatedCard delay={300}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-2xl">Performance & Time Comparison</CardTitle>
                    <CardDescription className="text-center text-lg">
                      Understanding the time differences between these iconic climbs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-zwift-orange text-lg">Alpe du Zwift Times</h4>
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-zwift-orange/5 rounded-lg gap-1 sm:gap-0">
                            <span className="font-medium text-sm">Recreational (2.5 W/kg):</span>
                            <span className="text-zwift-orange font-bold text-sm">75-90 minutes</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-zwift-orange/5 rounded-lg gap-1 sm:gap-0">
                            <span className="font-medium text-sm">Enthusiast (3.5 W/kg):</span>
                            <span className="text-zwift-orange font-bold text-sm">55-65 minutes</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-zwift-orange/5 rounded-lg gap-1 sm:gap-0">
                            <span className="font-medium text-sm">Competitive (4.5 W/kg):</span>
                            <span className="text-zwift-orange font-bold text-sm">45-50 minutes</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-zwift-orange/5 rounded-lg gap-1 sm:gap-0">
                            <span className="font-medium text-sm">Elite (6.0 W/kg):</span>
                            <span className="text-zwift-orange font-bold text-sm">35-40 minutes</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-zwift-blue text-lg">Ven-Top Times</h4>
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-zwift-blue/5 rounded-lg gap-1 sm:gap-0">
                            <span className="font-medium text-sm">Recreational (2.5 W/kg):</span>
                            <span className="text-zwift-blue font-bold text-sm">100-120 minutes</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-zwift-blue/5 rounded-lg gap-1 sm:gap-0">
                            <span className="font-medium text-sm">Enthusiast (3.5 W/kg):</span>
                            <span className="text-zwift-blue font-bold text-sm">75-85 minutes</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-zwift-blue/5 rounded-lg gap-1 sm:gap-0">
                            <span className="font-medium text-sm">Competitive (4.5 W/kg):</span>
                            <span className="text-zwift-blue font-bold text-sm">60-65 minutes</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-zwift-blue/5 rounded-lg gap-1 sm:gap-0">
                            <span className="font-medium text-sm">Elite (6.0 W/kg):</span>
                            <span className="text-zwift-blue font-bold text-sm">45-50 minutes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-2xl">Training Applications & Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg flex items-center gap-2">
                          <span className="w-4 h-4 bg-zwift-orange rounded-full"></span>
                          Alpe du Zwift Training Strategy
                        </h4>
                        <div className="space-y-3 text-muted-foreground">
                          <p className="leading-relaxed">
                            Use Alpe du Zwift for high-intensity threshold work and time trials. The route's predictable 
                            nature and segmented structure make it perfect for structured training sessions.
                          </p>
                          <div className="pl-4 border-l-2 border-zwift-orange/30">
                            <p className="font-medium text-foreground mb-2">Best Training Methods:</p>
                            <ul className="space-y-1 text-sm">
                              <li>• FTP intervals using hairpins as markers</li>
                              <li>• Progressive overload workouts</li>
                              <li>• Time trial preparation</li>
                              <li>• VO2 max development sessions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg flex items-center gap-2">
                          <span className="w-4 h-4 bg-zwift-blue rounded-full"></span>
                          Ven-Top Training Strategy
                        </h4>
                        <div className="space-y-3 text-muted-foreground">
                          <p className="leading-relaxed">
                            Choose Ven-Top for base building, endurance development, and aerobic capacity improvement. 
                            The sustained climbing builds the foundation for long-distance performance.
                          </p>
                          <div className="pl-4 border-l-2 border-zwift-blue/30">
                            <p className="font-medium text-foreground mb-2">Best Training Methods:</p>
                            <ul className="space-y-1 text-sm">
                              <li>• Aerobic base building sessions</li>
                              <li>• Endurance ride preparation</li>
                              <li>• Steady-state power development</li>
                              <li>• Mental endurance training</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AlpeVsVentop; 