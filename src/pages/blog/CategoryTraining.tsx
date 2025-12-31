import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight, TrendingUp, Target, Activity } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CategoryTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trainingPosts = [
    {
      id: "32",
      title: "Power-to-Weight Ratio Deep Dive: The Science Behind Climbing Performance",
      excerpt: "Comprehensive guide to power-to-weight ratio in cycling. Learn the physics, training implications, and practical applications of W/kg for improving your Zwift climbing performance.",
      date: "20-12-2025",
      readTime: "17 min",
      slug: "/blog/power-to-weight-ratio-science"
    },
    {
      id: "27",
      title: "How to Keep Your Streak in Zwift While Travelling",
      excerpt: "Complete guide to maintaining your Zwift streak while travelling. Learn equipment strategies, hotel gym tips, time zone handling, and how to keep your training consistent without stress.",
      date: "19-12-2025",
      readTime: "20 min",
      slug: "/blog/how-to-keep-your-streak-in-zwift-while-travelling"
    },
    {
      id: "26",
      title: "Having Time to Zwift During University",
      excerpt: "Practical guide for university students to fit Zwift training into busy schedules. Learn minimum effective dose, exam period strategies, and how to stay consistent without sacrificing grades or social life.",
      date: "19-12-2025",
      readTime: "18 min",
      slug: "/blog/having-time-to-zwift-during-university"
    },
    {
      id: "25",
      title: "What Terminology Do Zwifters Use?",
      excerpt: "Complete guide to Zwift terminology. Learn FTP, w/kg, ERG mode, drafting, power-ups, sandbagging, and all the key terms Zwifters use in training, racing, and chatting.",
      date: "19-12-2025",
      readTime: "20 min",
      slug: "/blog/what-terminology-do-zwifters-use"
    },
    {
      id: "23",
      title: "10 Day Zwift Training Week",
      excerpt: "Complete 10-day Zwift training week plan combining cycling and running. Learn how to structure your training with threshold, VO₂, endurance sessions, and proper recovery for triathlon and cycling fitness.",
      date: "19-12-2025",
      readTime: "22 min",
      slug: "/blog/10-day-zwift-training-week"
    },
    {
      id: "22",
      title: "What Zwift Can't Teach You (and What It Can)",
      excerpt: "Discover what Zwift can and can't teach you. Learn how to combine indoor training with outdoor skills, running, nature, travel, and adventure to become a complete athlete.",
      date: "19-12-2025",
      readTime: "18 min",
      slug: "/blog/what-zwift-cant-teach-you-and-what-it-can"
    },
    {
      id: "21",
      title: "Virtual Hills, Real Wind: What's Harder?",
      excerpt: "Compare virtual Zwift climbs vs real outdoor wind. Learn how each challenges you differently, which prepares you better for triathlon, and how to blend indoor and outdoor training effectively.",
      date: "19-12-2025",
      readTime: "20 min",
      slug: "/blog/virtual-hills-real-wind-whats-harder"
    },
    {
      id: "20",
      title: "Japan's Shimanami Kaido: The Most Beautiful \"One-Day Tour\" Ride (Then Do a Zwift Recovery Week Like a Pro)",
      excerpt: "Complete guide to cycling Japan's Shimanami Kaido route. Learn pacing strategies, what makes this ride special, and how to use Zwift for recovery weeks after travel. Cycling as travel, not performance.",
      date: "18-12-2025",
      readTime: "17 min",
      slug: "/blog/shimanami-kaido"
    },
    {
      id: "19",
      title: "Vermont / Upstate Gravel vs Road: Pick Your Adventure (and Match It to Zwift Worlds)",
      excerpt: "Complete guide to choosing between gravel and road cycling in Vermont and Upstate New York. Learn which adventure fits you, pacing strategies, Zwift training plans, and how to match Zwift worlds to your terrain choice.",
      date: "18-12-2025",
      readTime: "18 min",
      slug: "/blog/vermont-upstate-gravel-vs-road"
    },
    {
      id: "18",
      title: "Colorado Mountain Riding for Mortals: How Not to Blow Up at Altitude (Zwift Climb Prep Included)",
      excerpt: "Complete guide to cycling in Colorado mountains for normal riders. Learn altitude pacing strategies, fueling tips, Zwift training plans, and how to prepare for mountain climbs without blowing up.",
      date: "18-12-2025",
      readTime: "19 min",
      slug: "/blog/colorado-mountain-riding"
    },
    {
      id: "17",
      title: "New York City by Bike: A First-Timer's Ride Guide (Then Ride Future-New-York on Zwift)",
      excerpt: "Complete guide to cycling in New York City for first-timers. Learn where to ride, when to ride, pacing strategies, and how to use Zwift's New York world to prepare for urban cycling adventures.",
      date: "18-12-2025",
      readTime: "17 min",
      slug: "/blog/new-york-city-by-bike"
    },
    {
      id: "16",
      title: "Sydney to Wollongong: The Sea Cliff Bridge Ride That Feels Like a Movie (Plus a Zwift Substitute)",
      excerpt: "Complete guide to cycling from Sydney to Wollongong via the iconic Sea Cliff Bridge. Learn pacing strategies, stop recommendations, Zwift training plans, and how to prepare for this cinematic coastal ride.",
      date: "18-12-2025",
      readTime: "16 min",
      slug: "/blog/sydney-to-wollongong"
    },
    {
      id: "15",
      title: "Great Ocean Road by Bike: A 3–5 Day Coastal Ride (and the Zwift Sessions That Prepare You)",
      excerpt: "Complete guide to cycling the Great Ocean Road from Anglesea to Apollo Bay. Learn the best 3-5 day itinerary, packing tips, wind tactics, photo stops, and how to train for coastal rollers on Zwift.",
      date: "18-12-2025",
      readTime: "18 min",
      slug: "/blog/great-ocean-road-by-bike"
    },
    {
      id: "1",
      title: "Conquer the Alpe du Zwift: Tips for a Faster Climb",
      excerpt: "Master Alpe du Zwift with expert pacing strategies, training tips, and in-game tactics. Learn how to break the one-hour barrier and improve your climbing performance on Zwift's most iconic ascent.",
      date: "12-11-2025",
      readTime: "8 min",
      slug: "/blog/conquer-alpe-du-zwift"
    },
    {
      id: "2",
      title: "Mastering Ven-Top: Surviving Zwift's Toughest Ascent",
      excerpt: "Conquer Zwift's longest climb - Ven-Top (Mont Ventoux). Learn pacing strategies, fueling tips, and mental tactics to survive this 20.9km, 1,534m ascent. Complete guide for mastering Zwift's toughest climb.",
      date: "12-11-2025",
      readTime: "9 min",
      slug: "/blog/mastering-ven-top"
    },
    {
      id: "3",
      title: "Zwift Training Plans 101: How to Boost Your FTP and Fitness",
      excerpt: "Discover how Zwift's structured training plans can boost your FTP and cycling fitness. Learn about FTP Builder, Build Me Up, and other plans designed by professional coaches to help you get stronger and faster.",
      date: "12-11-2025",
      readTime: "10 min",
      slug: "/blog/zwift-training-plans-101"
    },
    {
      id: "9",
      title: "Zwift vs Outdoor Cycling: Key Differences and Real-World Benefits",
      excerpt: "Compare Zwift indoor cycling vs outdoor cycling. Learn about power differences, FTP variations, drafting dynamics, and how Zwift training translates to improved outdoor performance.",
      date: "12-11-2025",
      readTime: "11 min",
      slug: "/blog/zwift-vs-outdoor-cycling"
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
                <Activity size={16} className="text-zwift-orange" />
                <span>Training Category</span>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Zwift <span className="zwift-gradient-text">Training</span> Guides & Strategies
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={300} className="mt-6 max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comprehensive training guides to help you build fitness, improve performance, and achieve your Zwift goals. From FTP development to pacing strategies, from structured training plans to real-world application, our training content covers everything you need to become a stronger, faster Zwift athlete.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-orange/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Master the Art of Zwift Training
                </h2>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Effective Zwift training isn't just about riding hard—it's about understanding the principles of training, applying them systematically, and adapting them to your goals, schedule, and physiology. Whether you're aiming to break 60 minutes on Alpe du Zwift, complete your first Ven Top, or simply build consistent fitness, the right training approach makes all the difference.
                  </p>

                  <p>
                    Our training content covers the full spectrum of Zwift training, from basic concepts like FTP and power-to-weight ratio to advanced strategies like periodization and peaking. We draw on exercise science, data analysis, and real-world experience to provide training advice that's both evidence-based and practical. Whether you have 3 hours per week or 15 hours per week, whether you're training for Zwift races or outdoor events, you'll find training strategies that work for your situation.
                  </p>

                  <p>
                    What sets our training content apart is the combination of scientific rigor and practical application. We don't just tell you what to do—we explain why it works, how to adapt it to your situation, and how to track your progress. Every training recommendation is backed by exercise physiology principles, data analysis, or both. This approach helps you become a smarter trainer, not just a harder trainer.
                  </p>

                  <p>
                    Whether you're a beginner looking to build your first training plan or an experienced rider looking to optimize your approach, our training content provides the insights, strategies, and motivation you need to achieve your goals. Explore the articles below to find training guidance tailored to your needs and goals.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingPosts.map((post, index) => (
                <AnimatedCard key={post.id} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-orange/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-zwift-orange/10 text-zwift-orange rounded">
                            Training
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-zwift-orange transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
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

      {/* Back to Blog Link */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
            >
              <ArrowRight size={18} className="mr-2 rotate-180" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryTraining;

