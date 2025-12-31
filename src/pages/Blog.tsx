import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight, Activity, Trophy, Settings, BarChart3 } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import ArticleListItem from "@/components/ArticleListItem";
import FeaturedArticlesSidebar from "@/components/FeaturedArticlesSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", name: "All Articles", icon: BookOpen },
    { id: "Training", name: "Training", icon: Activity },
    { id: "Racing", name: "Racing", icon: Trophy },
    { id: "Setup", name: "Setup", icon: Settings },
    { id: "Data Analysis", name: "Data Analysis", icon: BarChart3 },
    { id: "Physics", name: "Physics", icon: BookOpen },
    { id: "Psychology", name: "Psychology", icon: BookOpen },
    { id: "Personal", name: "Personal", icon: BookOpen },
  ];

  const blogPosts: Array<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
  }> = [
    {
      id: "38",
      title: "Zwift Chronobiology: How Time-of-Day Affects Virtual Cycling Performance",
      excerpt: "Discover how circadian rhythms and chronotype affect Zwift performance. Learn optimal training timing, chronotype analysis, and evidence-based strategies for maximizing performance based on your body's natural rhythms.",
      date: "31-12-2025",
      readTime: "21 min",
      category: "Training",
      slug: "/blog/zwift-chronobiology"
    },
    {
      id: "39",
      title: "Zwift Cognitive Load: Mental Fatigue and Decision-Making in Virtual Racing",
      excerpt: "Explore how cognitive load and mental fatigue affect Zwift performance. Learn about decision-making in racing, attention requirements, and evidence-based strategies for managing cognitive demands in virtual cycling.",
      date: "31-12-2025",
      readTime: "22 min",
      category: "Psychology",
      slug: "/blog/zwift-cognitive-load"
    },
    {
      id: "40",
      title: "Zwift Subscription Economics: The Psychology and ROI of Virtual Cycling",
      excerpt: "Comprehensive economic analysis of Zwift subscription value. Learn cost-benefit analysis, ROI calculations, behavioral economics of subscriptions, and whether Zwift is worth the investment for different user types.",
      date: "31-12-2025",
      readTime: "20 min",
      category: "Data Analysis",
      slug: "/blog/zwift-subscription-economics"
    },
    {
      id: "41",
      title: "Zwift Biomechanics: Indoor vs Outdoor Cycling Injury Patterns",
      excerpt: "Comprehensive biomechanical analysis comparing indoor and outdoor cycling. Learn about Zwift-specific injuries, biomechanical differences, overuse patterns, and evidence-based prevention strategies.",
      date: "31-12-2025",
      readTime: "20 min",
      category: "Training",
      slug: "/blog/zwift-biomechanics"
    },
    {
      id: "42",
      title: "Zwift Network Performance: How Internet Latency Affects Race Outcomes",
      excerpt: "Technical analysis of how network latency and internet performance affect Zwift racing. Learn about latency impact, optimization strategies, and how to minimize network-related performance issues.",
      date: "31-12-2025",
      readTime: "19 min",
      category: "Setup",
      slug: "/blog/zwift-network-performance"
    },
    {
      id: "33",
      title: "Zwift Drafting Physics & Aerodynamics: The Science Behind Virtual Pelotons",
      excerpt: "Deep dive into Zwift's drafting mechanics. Learn how aerodynamics work in virtual cycling, optimal drafting strategies, power savings calculations, and how to maximize efficiency in group rides and races.",
      date: "31-12-2025",
      readTime: "22 min",
      category: "Physics",
      slug: "/blog/zwift-drafting-physics-aerodynamics"
    },
    {
      id: "34",
      title: "Zwift Route Selection Psychology: How Your Choices Affect Training Outcomes",
      excerpt: "Explore the psychology behind Zwift route selection. Learn how route choice affects motivation, training adaptation, performance outcomes, and discover evidence-based strategies for optimal route selection.",
      date: "31-12-2025",
      readTime: "19 min",
      category: "Psychology",
      slug: "/blog/zwift-route-selection-psychology"
    },
    {
      id: "35",
      title: "Zwift Group Ride Dynamics: Social Psychology Meets Performance",
      excerpt: "Explore the social psychology behind Zwift group rides. Learn how group dynamics affect motivation, performance, adherence, and discover evidence-based strategies for maximizing group ride benefits.",
      date: "31-12-2025",
      readTime: "21 min",
      category: "Psychology",
      slug: "/blog/zwift-group-ride-dynamics"
    },
    {
      id: "36",
      title: "Zwift Equipment Optimization: Beyond Weight to Aerodynamics",
      excerpt: "Comprehensive guide to optimizing your Zwift setup beyond weight. Learn about aerodynamics, rolling resistance, power meter accuracy, trainer responsiveness, and equipment choices that maximize virtual cycling performance.",
      date: "31-12-2025",
      readTime: "20 min",
      category: "Setup",
      slug: "/blog/zwift-equipment-optimization-aerodynamics"
    },
    {
      id: "37",
      title: "Zwift Training Periodization: Long-Term Performance Planning",
      excerpt: "Master Zwift training periodization for long-term performance gains. Learn how to structure training phases, plan peak performance, manage recovery, and optimize adaptation through evidence-based periodization strategies.",
      date: "31-12-2025",
      readTime: "23 min",
      category: "Training",
      slug: "/blog/zwift-training-periodization"
    },
    {
      id: "29",
      title: "The Data Behind Zwift Climbing: What 1,000+ Rides Tell Us About Performance",
      excerpt: "Discover data-driven insights from analyzing 1,000+ ZwiftPower performances. Learn about pacing patterns, power distribution, common mistakes, and training implications for Zwift climbing performance.",
      date: "20-12-2025",
      readTime: "18 min",
      category: "Data Analysis",
      slug: "/blog/the-data-behind-zwift-climbing"
    },
    {
      id: "30",
      title: "The Mechanical Engineering of Zwift Performance: Why Physics Matters in Virtual Cycling",
      excerpt: "Explore Zwift performance through mechanical engineering principles. Learn about power production, polynomial regression, equipment weight physics, and the thermodynamics of virtual cycling performance.",
      date: "20-12-2025",
      readTime: "20 min",
      category: "Physics",
      slug: "/blog/the-mechanical-engineering-of-zwift-performance"
    },
    {
      id: "31",
      title: "ZwiftPower Regression Analysis: How We Built Accurate Time Predictors",
      excerpt: "Behind-the-scenes look at how we built accurate Zwift climbing time predictors using regression analysis, data validation, and statistical modeling. Learn the methodology behind our calculators.",
      date: "20-12-2025",
      readTime: "15 min",
      category: "Data Analysis",
      slug: "/blog/regression-analysis-methodology"
    },
    {
      id: "32",
      title: "Power-to-Weight Ratio Deep Dive: The Science Behind Climbing Performance",
      excerpt: "Comprehensive guide to power-to-weight ratio in cycling. Learn the physics, training implications, and practical applications of W/kg for improving your Zwift climbing performance.",
      date: "20-12-2025",
      readTime: "17 min",
      category: "Training",
      slug: "/blog/power-to-weight-ratio-science"
    },
    {
      id: "28",
      title: "How I Started Zwifting – And How AverageRob & Arno Inspired My Ironman Journey",
      excerpt: "Personal story of how Zwift changed my life, inspired by AverageRob and Arno's Ironman journey. From gamer to Zwifter, losing weight, and finding motivation through their YouTube series.",
      date: "19-12-2025",
      readTime: "12 min",
      category: "Personal",
      slug: "/blog/how-i-started-zwifting-and-how-averagerob-arno-inspired-my-ironman-journey"
    },
    {
      id: "27",
      title: "How to Keep Your Streak in Zwift While Travelling",
      excerpt: "Complete guide to maintaining your Zwift streak while travelling. Learn equipment strategies, hotel gym tips, time zone handling, and how to keep your training consistent without stress.",
      date: "19-12-2025",
      readTime: "20 min",
      category: "Training",
      slug: "/blog/how-to-keep-your-streak-in-zwift-while-travelling"
    },
    {
      id: "26",
      title: "Having Time to Zwift During University",
      excerpt: "Practical guide for university students to fit Zwift training into busy schedules. Learn minimum effective dose, exam period strategies, and how to stay consistent without sacrificing grades or social life.",
      date: "19-12-2025",
      readTime: "18 min",
      category: "Training",
      slug: "/blog/having-time-to-zwift-during-university"
    },
    {
      id: "25",
      title: "What Terminology Do Zwifters Use?",
      excerpt: "Complete guide to Zwift terminology. Learn FTP, w/kg, ERG mode, drafting, power-ups, sandbagging, and all the key terms Zwifters use in training, racing, and chatting.",
      date: "19-12-2025",
      readTime: "20 min",
      category: "Training",
      slug: "/blog/what-terminology-do-zwifters-use"
    },
    {
      id: "24",
      title: "Towels During Zwifting? Can It Ruin Your Bike?",
      excerpt: "Complete guide to using towels during Zwift training. Learn how to protect your bike from sweat damage, proper towel placement, and a 3-minute cleaning routine that prevents corrosion.",
      date: "19-12-2025",
      readTime: "16 min",
      category: "Setup",
      slug: "/blog/towels-during-zwifting-can-it-ruin-your-bike"
    },
    {
      id: "23",
      title: "10 Day Zwift Training Week",
      excerpt: "Complete 10-day Zwift training week plan combining cycling and running. Learn how to structure your training with threshold, VO₂, endurance sessions, and proper recovery for triathlon and cycling fitness.",
      date: "19-12-2025",
      readTime: "22 min",
      category: "Training",
      slug: "/blog/10-day-zwift-training-week"
    },
    {
      id: "22",
      title: "What Zwift Can't Teach You (and What It Can)",
      excerpt: "Discover what Zwift can and can't teach you. Learn how to combine indoor training with outdoor skills, running, nature, travel, and adventure to become a complete athlete.",
      date: "19-12-2025",
      readTime: "18 min",
      category: "Training",
      slug: "/blog/what-zwift-cant-teach-you-and-what-it-can"
    },
    {
      id: "21",
      title: "Virtual Hills, Real Wind: What's Harder?",
      excerpt: "Compare virtual Zwift climbs vs real outdoor wind. Learn how each challenges you differently, which prepares you better for triathlon, and how to blend indoor and outdoor training effectively.",
      date: "19-12-2025",
      readTime: "20 min",
      category: "Training",
      slug: "/blog/virtual-hills-real-wind-whats-harder"
    },
    {
      id: "20",
      title: "Japan's Shimanami Kaido: The Most Beautiful \"One-Day Tour\" Ride (Then Do a Zwift Recovery Week Like a Pro)",
      excerpt: "Complete guide to cycling Japan's Shimanami Kaido route. Learn pacing strategies, what makes this ride special, and how to use Zwift for recovery weeks after travel. Cycling as travel, not performance.",
      date: "18-12-2025",
      readTime: "17 min",
      category: "Training",
      slug: "/blog/shimanami-kaido"
    },
    {
      id: "19",
      title: "Vermont / Upstate Gravel vs Road: Pick Your Adventure (and Match It to Zwift Worlds)",
      excerpt: "Complete guide to choosing between gravel and road cycling in Vermont and Upstate New York. Learn which adventure fits you, pacing strategies, Zwift training plans, and how to match Zwift worlds to your terrain choice.",
      date: "18-12-2025",
      readTime: "18 min",
      category: "Training",
      slug: "/blog/vermont-upstate-gravel-vs-road"
    },
    {
      id: "18",
      title: "Colorado Mountain Riding for Mortals: How Not to Blow Up at Altitude (Zwift Climb Prep Included)",
      excerpt: "Complete guide to cycling in Colorado mountains for normal riders. Learn altitude pacing strategies, fueling tips, Zwift training plans, and how to prepare for mountain climbs without blowing up.",
      date: "18-12-2025",
      readTime: "19 min",
      category: "Training",
      slug: "/blog/colorado-mountain-riding"
    },
    {
      id: "17",
      title: "New York City by Bike: A First-Timer's Ride Guide (Then Ride Future-New-York on Zwift)",
      excerpt: "Complete guide to cycling in New York City for first-timers. Learn where to ride, when to ride, pacing strategies, and how to use Zwift's New York world to prepare for urban cycling adventures.",
      date: "18-12-2025",
      readTime: "17 min",
      category: "Training",
      slug: "/blog/new-york-city-by-bike"
    },
    {
      id: "16",
      title: "Sydney to Wollongong: The Sea Cliff Bridge Ride That Feels Like a Movie (Plus a Zwift Substitute)",
      excerpt: "Complete guide to cycling from Sydney to Wollongong via the iconic Sea Cliff Bridge. Learn pacing strategies, stop recommendations, Zwift training plans, and how to prepare for this cinematic coastal ride.",
      date: "18-12-2025",
      readTime: "16 min",
      category: "Training",
      slug: "/blog/sydney-to-wollongong"
    },
    {
      id: "15",
      title: "Great Ocean Road by Bike: A 3–5 Day Coastal Ride (and the Zwift Sessions That Prepare You)",
      excerpt: "Complete guide to cycling the Great Ocean Road from Anglesea to Apollo Bay. Learn the best 3-5 day itinerary, packing tips, wind tactics, photo stops, and how to train for coastal rollers on Zwift.",
      date: "18-12-2025",
      readTime: "18 min",
      category: "Training",
      slug: "/blog/great-ocean-road-by-bike"
    },
    {
      id: "14",
      title: "The Calculus of the Pain Cave: A Mechanical Autopsy of Speed",
      excerpt: "Explore the physics and mechanics behind cycling performance in Zwift. Understand aerodynamic drag, drivetrain efficiency, flywheel inertia, and the thermodynamics of the human engine from an engineering perspective.",
      date: "16-12-2025",
      readTime: "15 min",
      category: "Physics",
      slug: "/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed"
    },
    {
      id: "13",
      title: "The Glucose Alchemist: How to Fuel a World Tour Effort on a Ramen Budget",
      excerpt: "Learn how to fuel your Zwift rides and races for pennies using table sugar, maltodextrin, and kitchen ingredients. Stop paying premium prices for sports nutrition and start thinking like a chemist.",
      date: "16-12-2025",
      readTime: "11 min",
      category: "Nutrition",
      slug: "/blog/the-glucose-alchemist-how-to-fuel-a-world-tour-effort-on-a-ramen-budget"
    },
    {
      id: "12",
      title: "The Architecture of Sweat: A Field Guide to the Invisible Nation of Watopia",
      excerpt: "Explore Watopia as a parallel geography where physics are negotiated, gravity is variable, and the social contract is written in watts per kilogram. A philosophical journey through virtual cycling's digital nation.",
      date: "16-12-2025",
      readTime: "14 min",
      category: "Philosophy",
      slug: "/blog/the-architecture-of-sweat-a-field-guide-to-the-invisible-nation-of-watopia"
    },
    {
      id: "11",
      title: "The Ghost in the Machine: Why Your Brain Allows You to Suffer More in Watopia",
      excerpt: "Discover how Zwift hacks your brain's Central Governor, uses the Proteus Effect, and leverages gamification to help you push harder than ever. Understand the psychology behind virtual cycling performance.",
      date: "16-12-2025",
      readTime: "12 min",
      category: "Psychology",
      slug: "/blog/ghost-in-the-machine-why-your-brain-allows-you-to-suffer-more-in-watopia"
    },
    {
      id: "1",
      title: "Conquer the Alpe du Zwift: Tips for a Faster Climb",
      excerpt: "Master Alpe du Zwift with expert pacing strategies, training tips, and in-game tactics. Learn how to break the one-hour barrier and improve your climbing performance on Zwift's most iconic ascent.",
      date: "12-11-2025",
      readTime: "8 min",
      category: "Training",
      slug: "/blog/conquer-alpe-du-zwift"
    },
    {
      id: "2",
      title: "Mastering Ven-Top: Surviving Zwift's Toughest Ascent",
      excerpt: "Conquer Zwift's longest climb - Ven-Top (Mont Ventoux). Learn pacing strategies, fueling tips, and mental tactics to survive this 20.9km, 1,534m ascent. Complete guide for mastering Zwift's toughest climb.",
      date: "12-11-2025",
      readTime: "9 min",
      category: "Training",
      slug: "/blog/mastering-ven-top"
    },
    {
      id: "3",
      title: "Zwift Training Plans 101: How to Boost Your FTP and Fitness",
      excerpt: "Discover how Zwift's structured training plans can boost your FTP and cycling fitness. Learn about FTP Builder, Build Me Up, and other plans designed by professional coaches to help you get stronger and faster.",
      date: "12-11-2025",
      readTime: "10 min",
      category: "Training",
      slug: "/blog/zwift-training-plans-101"
    },
    {
      id: "4",
      title: "Zwift Racing for Beginners: Tips to Ride and Win Your First Virtual Race",
      excerpt: "Complete beginner's guide to Zwift racing. Learn race categories, drafting tactics, powerup strategies, and finishing techniques. Master your first virtual race with expert tips and tactics.",
      date: "12-11-2025",
      readTime: "12 min",
      category: "Racing",
      slug: "/blog/zwift-racing-for-beginners"
    },
    {
      id: "5",
      title: "Zwift Setup Guide: Essential Gear for Your Ultimate Indoor Pain Cave",
      excerpt: "Complete Zwift setup guide: essential gear for your indoor training pain cave. Learn about smart trainers, bikes, devices, cooling, and accessories needed to start Zwifting effectively.",
      date: "12-11-2025",
      readTime: "11 min",
      category: "Setup",
      slug: "/blog/zwift-setup-guide"
    },
    {
      id: "6",
      title: "Unlocking Zwift Achievements: From Route Badges to the Coveted Tron Bike",
      excerpt: "Complete guide to Zwift achievements and badges. Learn how to unlock the legendary Tron bike by climbing 50,000m, earn route badges, and level up faster with XP bonuses.",
      date: "12-11-2025",
      readTime: "10 min",
      category: "Gaming",
      slug: "/blog/unlocking-zwift-achievements"
    },
    {
      id: "7",
      title: "Zwift PowerUps Guide: How to Use In-Game Boosts Like a Pro",
      excerpt: "Master Zwift PowerUps: Learn how to use Feather, Aero, Draft Boost, Burrito, Ghost, Steamroller, and Anvil powerups strategically in races and rides. Complete guide to Zwift's in-game boosts.",
      date: "12-11-2025",
      readTime: "9 min",
      category: "Racing",
      slug: "/blog/zwift-powerups-guide"
    },
    {
      id: "8",
      title: "Level Up Fast in Zwift: Earning XP and Unlocking New Gear Quickly",
      excerpt: "Learn how to level up fast in Zwift and unlock new gear quickly. Discover XP farming strategies, route badges, workout tips, and accelerated leveling techniques to reach higher levels faster.",
      date: "12-11-2025",
      readTime: "8 min",
      category: "Gaming",
      slug: "/blog/level-up-fast-in-zwift"
    },
    {
      id: "9",
      title: "Zwift vs Outdoor Cycling: Key Differences and Real-World Benefits",
      excerpt: "Compare Zwift indoor cycling vs outdoor cycling. Learn about power differences, FTP variations, drafting dynamics, and how Zwift training translates to improved outdoor performance.",
      date: "12-11-2025",
      readTime: "11 min",
      category: "Training",
      slug: "/blog/zwift-vs-outdoor-cycling"
    },
    {
      id: "10",
      title: "Get Fit and Lose Weight with Zwift: Indoor Cycling for Weight Loss",
      excerpt: "Discover how Zwift can help you lose weight and get fit. Learn about calorie burn, best workouts for weight loss, diet integration, and how to stay motivated with Zwift's engaging platform.",
      date: "12-11-2025",
      readTime: "9 min",
      category: "Fitness",
      slug: "/blog/get-fit-and-lose-weight-with-zwift"
    }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-zwift-orange shadow-sm border border-orange-100 dark:border-orange-900/20 mb-4 sm:mb-6">
                <BookOpen size={14} className="sm:w-4 sm:h-4 text-zwift-orange" />
                <span>Zwift Training Blog</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-2 sm:mt-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-2">
                Training <span className="zwift-gradient-text">Insights</span> & Tips
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-4 sm:mt-6 max-w-2xl px-2">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                Expert advice, training strategies, and performance analysis for Zwift athletes and triathlon enthusiasts.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-6 sm:py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
                  Browse by Category
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Explore our content organized by topic. Each category contains comprehensive guides and insights tailored to specific aspects of Zwift training and performance.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <Link
                    to="/blog/category/training"
                    className="group p-3 sm:p-4 bg-gradient-to-br from-zwift-orange/10 to-zwift-orange/5 rounded-lg border-2 border-transparent hover:border-zwift-orange/50 transition-all text-center"
                  >
                    <Activity size={20} className="sm:w-6 sm:h-6 mx-auto mb-2 text-zwift-orange" />
                    <div className="font-semibold text-xs sm:text-sm group-hover:text-zwift-orange transition-colors">Training</div>
                  </Link>
                  <Link
                    to="/blog/category/racing"
                    className="group p-3 sm:p-4 bg-gradient-to-br from-zwift-blue/10 to-zwift-blue/5 rounded-lg border-2 border-transparent hover:border-zwift-blue/50 transition-all text-center"
                  >
                    <Trophy size={20} className="sm:w-6 sm:h-6 mx-auto mb-2 text-zwift-blue" />
                    <div className="font-semibold text-xs sm:text-sm group-hover:text-zwift-blue transition-colors">Racing</div>
                  </Link>
                  <Link
                    to="/blog/category/setup"
                    className="group p-3 sm:p-4 bg-gradient-to-br from-zwift-green/10 to-zwift-green/5 rounded-lg border-2 border-transparent hover:border-zwift-green/50 transition-all text-center"
                  >
                    <Settings size={20} className="sm:w-6 sm:h-6 mx-auto mb-2 text-zwift-green" />
                    <div className="font-semibold text-xs sm:text-sm group-hover:text-zwift-green transition-colors">Setup</div>
                  </Link>
                  <Link
                    to="/blog/category/data-analysis"
                    className="group p-3 sm:p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg border-2 border-transparent hover:border-purple-500/50 transition-all text-center"
                  >
                    <BarChart3 size={20} className="sm:w-6 sm:h-6 mx-auto mb-2 text-purple-500" />
                    <div className="font-semibold text-xs sm:text-sm group-hover:text-purple-500 transition-colors">Data Analysis</div>
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-6 sm:py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            {/* Main Content - 70% (7 columns) */}
            <div className="lg:col-span-7 order-1">
              {/* Category Filter Tabs */}
              <div className="mb-6 sm:mb-8">
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                  {/* Mobile: Horizontal scrollable tabs with hidden scrollbar */}
                  <div className="sm:hidden overflow-x-auto -mx-4 px-4 mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <TabsList className="inline-flex w-auto h-auto p-1 gap-1.5">
                      {categories.map((cat) => (
                        <TabsTrigger 
                          key={cat.id} 
                          value={cat.id} 
                          className="text-xs whitespace-nowrap px-4 py-2.5 flex-shrink-0"
                        >
                          {cat.id === "all" ? "All" : cat.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  
                  {/* Desktop: Grid layout */}
                  <div className="hidden sm:block">
                    <TabsList className="grid w-full grid-cols-4 md:grid-cols-7 mb-6">
                      {categories.map((cat) => (
                        <TabsTrigger 
                          key={cat.id} 
                          value={cat.id} 
                          className="text-sm px-3"
                        >
                          {cat.id === "all" ? "All" : cat.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </Tabs>
              </div>

              {/* Traditional Article List */}
              <div className="space-y-0">
                {filteredPosts.map((post, index) => (
                  <ArticleListItem
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    readTime={post.readTime}
                    category={post.category}
                    slug={post.slug}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar - 30% (3 columns) - Below content on mobile */}
            <aside className="lg:col-span-3 order-2 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <FeaturedArticlesSidebar
                  articles={blogPosts.slice(0, 4).map(post => ({
                    title: post.title,
                    excerpt: post.excerpt,
                    date: post.date,
                    readTime: post.readTime,
                    slug: post.slug,
                    category: post.category
                  }))}
                  title="Featured Articles"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

