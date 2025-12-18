import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-orange shadow-sm border border-orange-100 dark:border-orange-900/20 mb-6">
                <BookOpen size={16} className="text-zwift-orange" />
                <span>Zwift Training Blog</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Training <span className="zwift-gradient-text">Insights</span> & Tips
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-6 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert advice, training strategies, and performance analysis for Zwift athletes and triathlon enthusiasts.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <AnimatedCard key={post.id} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-orange/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-zwift-orange/10 text-zwift-orange rounded">
                            {post.category}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-zwift-orange transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <div className="flex items-center text-xs text-zwift-orange group-hover:translate-x-1 transition-transform">
                            Read More
                            <ArrowRight size={14} className="ml-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

