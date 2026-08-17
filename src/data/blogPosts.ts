/**
 * Single source of truth for the ZwiftCalculator.com article index.
 *
 * Everything that needs to know about an article - the /blog listing, the
 * category pages, the sitemap, the pre-render step and the runtime <head>
 * tags - reads from this file. Adding an article means adding one entry here
 * plus a route in App.tsx.
 */

export type BlogCategory =
  | "Training"
  | "Racing"
  | "Setup"
  | "Data Analysis"
  | "Physics"
  | "Psychology"
  | "Personal"
  | "Gaming"
  | "Fitness"
  | "Nutrition"
  | "Philosophy";

export interface BlogPostMeta {
  /** Route path, always starting with /blog/ */
  slug: string;
  /** Display title used for the H1 and listing cards */
  title: string;
  /** Short summary used on listing cards */
  excerpt: string;
  /** ISO date (yyyy-mm-dd) the article was published */
  date: string;
  /** Estimated reading time, e.g. "12 min" */
  readTime: string;
  category: BlogCategory;
  /** <title> for the page - keep under ~60 characters where possible */
  metaTitle: string;
  /** Meta description - keep under ~155 characters where possible */
  metaDescription: string;
  /** ISO date of the last substantive revision, when it differs from `date` */
  dateModified?: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "/blog/zwift-chronobiology",
    title: "Zwift Chronobiology: How Time-of-Day Affects Virtual Cycling Performance",
    excerpt: "Discover how circadian rhythms and chronotype affect Zwift performance. Learn optimal training timing, chronotype analysis, and evidence-based strategies for maximizing performance based on your body's natural rhythms.",
    date: "2025-12-31",
    readTime: "21 min",
    category: "Training",
    metaTitle: "Best Time of Day to Zwift: Find Your Peak | ZwiftCalculator",
    metaDescription: "Morning or evening? Work out your chronotype, then match your hardest Zwift sessions to the hours when your power is naturally highest.",
  },
  {
    slug: "/blog/zwift-cognitive-load",
    title: "Zwift Cognitive Load: Mental Fatigue and Decision-Making in Virtual Racing",
    excerpt: "Explore how cognitive load and mental fatigue affect Zwift performance. Learn about decision-making in racing, attention requirements, and evidence-based strategies for managing cognitive demands in virtual cycling.",
    date: "2025-12-31",
    readTime: "22 min",
    category: "Psychology",
    metaTitle: "Mental Fatigue and Zwift Race Mistakes | ZwiftCalculator",
    metaDescription: "Late-race mistakes are usually a mental fatigue problem, not a fitness one. Here are the protocols that cut cognitive load during a Zwift race.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-subscription-economics",
    title: "Zwift Subscription Economics: The Psychology and ROI of Virtual Cycling",
    excerpt: "Comprehensive economic analysis of Zwift subscription value. Learn cost-benefit analysis, ROI calculations, behavioral economics of subscriptions, and whether Zwift is worth the investment for different user types.",
    date: "2025-12-31",
    readTime: "20 min",
    category: "Data Analysis",
    metaTitle: "Is Zwift Worth It? The Cost Per Hour Math | ZwiftCalculator",
    metaDescription: "Zwift costs less per hour than most people assume. Run the break-even formula on your own ride count and see where the real value sits.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-biomechanics",
    title: "Zwift Biomechanics: Indoor vs Outdoor Cycling Injury Patterns",
    excerpt: "Comprehensive biomechanical analysis comparing indoor and outdoor cycling. Learn about Zwift-specific injuries, biomechanical differences, overuse patterns, and evidence-based prevention strategies.",
    date: "2025-12-31",
    readTime: "20 min",
    category: "Training",
    metaTitle: "Zwift Injuries: Indoor vs Outdoor Cycling | ZwiftCalculator",
    metaDescription: "A fixed bike removes the micro-movements outdoor riding gives you. What that does to your hands, knees, neck and lower back, and how to fix it.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-network-performance",
    title: "Zwift Network Performance: How Internet Latency Affects Race Outcomes",
    excerpt: "Technical analysis of how network latency and internet performance affect Zwift racing. Learn about latency impact, optimization strategies, and how to minimize network-related performance issues.",
    date: "2025-12-31",
    readTime: "19 min",
    category: "Setup",
    metaTitle: "Zwift Lag and Dropouts: How to Fix Them | ZwiftCalculator",
    metaDescription: "Rubber-banding and dropouts are rarely raw latency. Run this diagnostic sequence to find the real cause and steady your Zwift connection.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-drafting-physics-aerodynamics",
    title: "Zwift Drafting Physics & Aerodynamics: The Science Behind Virtual Pelotons",
    excerpt: "Deep dive into Zwift's drafting mechanics. Learn how aerodynamics work in virtual cycling, optimal drafting strategies, power savings calculations, and how to maximize efficiency in group rides and races.",
    date: "2025-12-31",
    readTime: "22 min",
    category: "Physics",
    metaTitle: "How Zwift Drafting Works: Watts You Save | ZwiftCalculator",
    metaDescription: "Zwift drafting saves real watts, but only from certain positions. Where to sit in the pack, when to hold on, and when the draft stops paying.",
  },
  {
    slug: "/blog/zwift-route-selection-psychology",
    title: "Zwift Route Selection Psychology: How Your Choices Affect Training Outcomes",
    excerpt: "Explore the psychology behind Zwift route selection. Learn how route choice affects motivation, training adaptation, performance outcomes, and discover evidence-based strategies for optimal route selection.",
    date: "2025-12-31",
    readTime: "19 min",
    category: "Psychology",
    metaTitle: "Choosing Zwift Routes That Train You Best | ZwiftCalculator",
    metaDescription: "The route you pick shapes both motivation and adaptation. Use this framework to match Zwift routes to the session you actually need that day.",
  },
  {
    slug: "/blog/zwift-group-ride-dynamics",
    title: "Zwift Group Ride Dynamics: Social Psychology Meets Performance",
    excerpt: "Explore the social psychology behind Zwift group rides. Learn how group dynamics affect motivation, performance, adherence, and discover evidence-based strategies for maximizing group ride benefits.",
    date: "2025-12-31",
    readTime: "21 min",
    category: "Psychology",
    metaTitle: "Zwift Group Rides: Why You Ride Harder | ZwiftCalculator",
    metaDescription: "Group rides change how hard you push and how often you show up. Which ride types suit you, and how to get more out of a Zwift group ride.",
  },
  {
    slug: "/blog/zwift-equipment-optimization-aerodynamics",
    title: "Zwift Equipment Optimization: Beyond Weight to Aerodynamics",
    excerpt: "Comprehensive guide to optimizing your Zwift setup beyond weight. Learn about aerodynamics, rolling resistance, power meter accuracy, trainer responsiveness, and equipment choices that maximize virtual cycling performance.",
    date: "2025-12-31",
    readTime: "20 min",
    category: "Setup",
    metaTitle: "Fastest Zwift Bike and Wheel Setup | ZwiftCalculator",
    metaDescription: "In-game frames and wheels are three numbers, not a bike. Which Zwift setup is fastest on climbs, which wins on the flat, and why your watts matter more.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-training-periodization",
    title: "Zwift Training Periodization: Long-Term Performance Planning",
    excerpt: "Master Zwift training periodization for long-term performance gains. Learn how to structure training phases, plan peak performance, manage recovery, and optimize adaptation through evidence-based periodization strategies.",
    date: "2025-12-31",
    readTime: "23 min",
    category: "Training",
    metaTitle: "Zwift Periodization: A 16-Week Structure | ZwiftCalculator",
    metaDescription: "Stop living in a permanent sweet spot block. A 16-week Zwift periodization structure with phases, deloads and a taper for a climb attempt.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/the-data-behind-zwift-climbing",
    title: "The Data Behind Zwift Climbing: What 1,000+ Rides Tell Us About Performance",
    excerpt: "Discover data-driven insights from analyzing 1,000+ ZwiftPower performances. Learn about pacing patterns, power distribution, common mistakes, and training implications for Zwift climbing performance.",
    date: "2025-12-20",
    readTime: "18 min",
    category: "Data Analysis",
    metaTitle: "What 1,000 Zwift Climbs Say About Pacing | ZwiftCalculator",
    metaDescription: "Pacing data from 1,000+ ZwiftPower climbs: what fast ascents have in common, where riders blow up, and what it all means for your training.",
  },
  {
    slug: "/blog/the-mechanical-engineering-of-zwift-performance",
    title: "The Mechanical Engineering of Zwift Performance: Why Physics Matters in Virtual Cycling",
    excerpt: "Explore Zwift performance through mechanical engineering principles. Learn about power production, polynomial regression, equipment weight physics, and the thermodynamics of virtual cycling performance.",
    date: "2025-12-20",
    readTime: "20 min",
    category: "Physics",
    metaTitle: "How Your Watts Become Speed on Zwift | ZwiftCalculator",
    metaDescription: "An engineer's look at Zwift speed: how muscle force turns into watts, why virtual weight matters less than you think, and where energy is lost.",
  },
  {
    slug: "/blog/regression-analysis-methodology",
    title: "ZwiftPower Regression Analysis: How We Built Accurate Time Predictors",
    excerpt: "Behind-the-scenes look at how we built accurate Zwift climbing time predictors using regression analysis, data validation, and statistical modeling. Learn the methodology behind our calculators.",
    date: "2025-12-20",
    readTime: "15 min",
    category: "Data Analysis",
    metaTitle: "How Our Zwift Climb Time Predictions Work | ZwiftCalculator",
    metaDescription: "The data, the polynomial regression model and the validation behind our Zwift climb time calculators, including where the predictions get shaky.",
  },
  {
    slug: "/blog/power-to-weight-ratio-science",
    title: "Power-to-Weight Ratio Deep Dive: The Science Behind Climbing Performance",
    excerpt: "Comprehensive guide to power-to-weight ratio in cycling. Learn the physics, training implications, and practical applications of W/kg for improving your Zwift climbing performance.",
    date: "2025-12-20",
    readTime: "17 min",
    category: "Training",
    metaTitle: "W/kg Explained: Why Weight Rules Climbs | ZwiftCalculator",
    metaDescription: "Power to weight ratio decides climbing speed. The physics, worked W/kg examples, and whether to add watts or lose kilos to get faster on Zwift.",
  },
  {
    slug: "/blog/how-i-started-zwifting-and-how-averagerob-arno-inspired-my-ironman-journey",
    title: "How I Started Zwifting - And How AverageRob & Arno Inspired My Ironman Journey",
    excerpt: "Personal story of how Zwift changed my life, inspired by AverageRob and Arno's Ironman journey. From gamer to Zwifter, losing weight, and finding motivation through their YouTube series.",
    date: "2025-12-19",
    readTime: "12 min",
    category: "Personal",
    metaTitle: "How AverageRob and Arno Got Me on Zwift | ZwiftCalculator",
    metaDescription: "A personal account of going from gamer to Zwifter: the AverageRob and Arno Ironman series, the weight that came off, and why I built this site.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/how-to-keep-your-streak-in-zwift-while-travelling",
    title: "How to Keep Your Streak in Zwift While Travelling",
    excerpt: "Complete guide to maintaining your Zwift streak while travelling. Learn equipment strategies, hotel gym tips, time zone handling, and how to keep your training consistent without stress.",
    date: "2025-12-19",
    readTime: "20 min",
    category: "Training",
    metaTitle: "Keep Your Zwift Streak While Travelling | ZwiftCalculator",
    metaDescription: "Three travel scenarios, from packing a compact trainer to having no bike at all, plus the tiny backup ride that keeps your Zwift streak alive.",
  },
  {
    slug: "/blog/having-time-to-zwift-during-university",
    title: "Having Time to Zwift During University",
    excerpt: "Practical guide for university students to fit Zwift training into busy schedules. Learn minimum effective dose, exam period strategies, and how to stay consistent without sacrificing grades or social life.",
    date: "2025-12-19",
    readTime: "18 min",
    category: "Training",
    metaTitle: "How to Zwift as a Busy University Student | ZwiftCalculator",
    metaDescription: "Fit Zwift around lectures and deadlines with a minimum effective dose, a low-friction setup, and a weekly template that survives exam periods.",
  },
  {
    slug: "/blog/what-terminology-do-zwifters-use",
    title: "What Terminology Do Zwifters Use?",
    excerpt: "Complete guide to Zwift terminology. Learn FTP, w/kg, ERG mode, drafting, power-ups, sandbagging, and all the key terms Zwifters use in training, racing, and chatting.",
    date: "2025-12-19",
    readTime: "20 min",
    category: "Training",
    metaTitle: "Zwift Terms Explained: FTP, W/kg and ERG | ZwiftCalculator",
    metaDescription: "A plain-English Zwift glossary covering FTP, W/kg, ERG mode, sandbagging, power-ups, race categories and the slang riders use in chat.",
  },
  {
    slug: "/blog/towels-during-zwifting-can-it-ruin-your-bike",
    title: "Towels During Zwifting? Can It Ruin Your Bike?",
    excerpt: "Complete guide to using towels during Zwift training. Learn how to protect your bike from sweat damage, proper towel placement, and a 3-minute cleaning routine that prevents corrosion.",
    date: "2025-12-19",
    readTime: "16 min",
    category: "Setup",
    metaTitle: "Zwift Sweat Damage: Do Towels Help? | ZwiftCalculator",
    metaDescription: "Sweat corrodes bolts, cables and headsets faster than rain does. Where to put towels during Zwift, which type works, and a 3-minute cleanup.",
  },
  {
    slug: "/blog/10-day-zwift-training-week",
    title: "10 Day Zwift Training Week",
    excerpt: "Complete 10-day Zwift training week plan combining cycling and running. Learn how to structure your training with threshold, VO₂, endurance sessions, and proper recovery for triathlon and cycling fitness.",
    date: "2025-12-19",
    readTime: "22 min",
    category: "Training",
    metaTitle: "The 10-Day Zwift and Run Training Week | ZwiftCalculator",
    metaDescription: "A 10-day Zwift training block mixing threshold, VO2 and endurance rides with running, plus recovery rules and how to progress it over time.",
  },
  {
    slug: "/blog/what-zwift-cant-teach-you-and-what-it-can",
    title: "What Zwift Can't Teach You (and What It Can)",
    excerpt: "Discover what Zwift can and can't teach you. Learn how to combine indoor training with outdoor skills, running, nature, travel, and adventure to become a complete athlete.",
    date: "2025-12-19",
    readTime: "18 min",
    category: "Training",
    metaTitle: "What Zwift Can't Teach You About Cycling | ZwiftCalculator",
    metaDescription: "Indoor training builds the engine but skips bike handling, weather and terrain reading. How to fill those gaps without giving up your Zwift habit.",
  },
  {
    slug: "/blog/virtual-hills-real-wind-whats-harder",
    title: "Virtual Hills, Real Wind: What's Harder?",
    excerpt: "Compare virtual Zwift climbs vs real outdoor wind. Learn how each challenges you differently, which prepares you better for triathlon, and how to blend indoor and outdoor training effectively.",
    date: "2025-12-19",
    readTime: "20 min",
    category: "Training",
    metaTitle: "Zwift Climbs vs Real Wind: What's Harder | ZwiftCalculator",
    metaDescription: "Virtual gradients punish pacing errors and outdoor wind punishes patience. How the two compare, and how to blend them for triathlon training.",
  },
  {
    slug: "/blog/shimanami-kaido",
    title: "Japan's Shimanami Kaido: The Most Beautiful \"One-Day Tour\" Ride (Then Do a Zwift Recovery Week Like a Pro)",
    excerpt: "Complete guide to cycling Japan's Shimanami Kaido route. Learn pacing strategies, what makes this ride special, and how to use Zwift for recovery weeks after travel. Cycling as travel, not performance.",
    date: "2025-12-18",
    readTime: "17 min",
    category: "Training",
    metaTitle: "Riding Japan's Shimanami Kaido in a Day | ZwiftCalculator",
    metaDescription: "What the Shimanami Kaido island route is really like to ride, how to pace a one-day crossing, and a Zwift recovery week for when you get home.",
  },
  {
    slug: "/blog/vermont-upstate-gravel-vs-road",
    title: "Vermont / Upstate Gravel vs Road: Pick Your Adventure (and Match It to Zwift Worlds)",
    excerpt: "Complete guide to choosing between gravel and road cycling in Vermont and Upstate New York. Learn which adventure fits you, pacing strategies, Zwift training plans, and how to match Zwift worlds to your terrain choice.",
    date: "2025-12-18",
    readTime: "18 min",
    category: "Training",
    metaTitle: "Vermont Gravel vs Road: Which to Ride | ZwiftCalculator",
    metaDescription: "Gravel or pavement in Vermont and Upstate New York? How each one rides, how far to plan per day, and which Zwift world matches the feel.",
  },
  {
    slug: "/blog/colorado-mountain-riding",
    title: "Colorado Mountain Riding for Mortals: How Not to Blow Up at Altitude (Zwift Climb Prep Included)",
    excerpt: "Complete guide to cycling in Colorado mountains for normal riders. Learn altitude pacing strategies, fueling tips, Zwift training plans, and how to prepare for mountain climbs without blowing up.",
    date: "2025-12-18",
    readTime: "19 min",
    category: "Training",
    metaTitle: "Colorado Climbs: How to Ride at Altitude | ZwiftCalculator",
    metaDescription: "Altitude flattens your power and hides dehydration. Pacing, gearing and fuelling rules for Colorado mountain rides, plus Zwift sessions to prep.",
  },
  {
    slug: "/blog/new-york-city-by-bike",
    title: "New York City by Bike: A First-Timer's Ride Guide (Then Ride Future-New-York on Zwift)",
    excerpt: "Complete guide to cycling in New York City for first-timers. Learn where to ride, when to ride, pacing strategies, and how to use Zwift's New York world to prepare for urban cycling adventures.",
    date: "2025-12-18",
    readTime: "17 min",
    category: "Training",
    metaTitle: "Cycling New York City for the First Time | ZwiftCalculator",
    metaDescription: "Where NYC riding is genuinely fun, where it gets stressful, and when to go. Plus how Zwift's New York world compares to the real streets.",
  },
  {
    slug: "/blog/sydney-to-wollongong",
    title: "Sydney to Wollongong: The Sea Cliff Bridge Ride That Feels Like a Movie (Plus a Zwift Substitute)",
    excerpt: "Complete guide to cycling from Sydney to Wollongong via the iconic Sea Cliff Bridge. Learn pacing strategies, stop recommendations, Zwift training plans, and how to prepare for this cinematic coastal ride.",
    date: "2025-12-18",
    readTime: "16 min",
    category: "Training",
    metaTitle: "Sydney to Wollongong: The Sea Cliff Ride | ZwiftCalculator",
    metaDescription: "Distance, elevation, start times and the stops worth making on the Sydney to Wollongong coast ride, plus a Zwift route that mimics the terrain.",
  },
  {
    slug: "/blog/great-ocean-road-by-bike",
    title: "Great Ocean Road by Bike: A 3-5 Day Coastal Ride (and the Zwift Sessions That Prepare You)",
    excerpt: "Complete guide to cycling the Great Ocean Road from Anglesea to Apollo Bay. Learn the best 3-5 day itinerary, packing tips, wind tactics, photo stops, and how to train for coastal rollers on Zwift.",
    date: "2025-12-18",
    readTime: "18 min",
    category: "Training",
    metaTitle: "Great Ocean Road by Bike: 3 to 5 Day Plan | ZwiftCalculator",
    metaDescription: "A 3 to 5 day itinerary from Anglesea to Apollo Bay, with wind tactics, packing and food stops, plus the Zwift sessions that build coastal legs.",
  },
  {
    slug: "/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed",
    title: "The Calculus of the Pain Cave: A Mechanical Autopsy of Speed",
    excerpt: "Explore the physics and mechanics behind cycling performance in Zwift. Understand aerodynamic drag, drivetrain efficiency, flywheel inertia, and the thermodynamics of the human engine from an engineering perspective.",
    date: "2025-12-16",
    readTime: "15 min",
    category: "Physics",
    metaTitle: "Where Your Watts Go: Drag, Heat, Friction | ZwiftCalculator",
    metaDescription: "Drag rises with the cube of your speed and most of your effort leaves as heat. An engineering breakdown of where cycling watts actually go.",
  },
  {
    slug: "/blog/the-glucose-alchemist-how-to-fuel-a-world-tour-effort-on-a-ramen-budget",
    title: "The Glucose Alchemist: How to Fuel a World Tour Effort on a Ramen Budget",
    excerpt: "Learn how to fuel your Zwift rides and races for pennies using table sugar, maltodextrin, and kitchen ingredients. Stop paying premium prices for sports nutrition and start thinking like a chemist.",
    date: "2025-12-16",
    readTime: "11 min",
    category: "Nutrition",
    metaTitle: "DIY Cycling Fuel: Sugar and Maltodextrin | ZwiftCalculator",
    metaDescription: "Make your own Zwift race fuel from table sugar, maltodextrin and salt for a fraction of gel prices. What to mix, and why the chemistry works.",
  },
  {
    slug: "/blog/the-architecture-of-sweat-a-field-guide-to-the-invisible-nation-of-watopia",
    title: "The Architecture of Sweat: A Field Guide to the Invisible Nation of Watopia",
    excerpt: "Explore Watopia as a parallel geography where physics are negotiated, gravity is variable, and the social contract is written in watts per kilogram. A philosophical journey through virtual cycling's digital nation.",
    date: "2025-12-16",
    readTime: "14 min",
    category: "Philosophy",
    metaTitle: "Watopia as a Country: A Field Guide | ZwiftCalculator",
    metaDescription: "An essay on Watopia as a place with its own physics, etiquette and status rules, from avatar blobs to the ethics of the weight doper.",
  },
  {
    slug: "/blog/ghost-in-the-machine-why-your-brain-allows-you-to-suffer-more-in-watopia",
    title: "The Ghost in the Machine: Why Your Brain Allows You to Suffer More in Watopia",
    excerpt: "Discover how Zwift hacks your brain's Central Governor, uses the Proteus Effect, and leverages gamification to help you push harder than ever. Understand the psychology behind virtual cycling performance.",
    date: "2025-12-16",
    readTime: "12 min",
    category: "Psychology",
    metaTitle: "Why You Suffer More on Zwift Than Outside | ZwiftCalculator",
    metaDescription: "The Central Governor, the Proteus Effect and gamification explain why Zwift pulls harder efforts out of riders than the open road does.",
  },
  {
    slug: "/blog/conquer-alpe-du-zwift",
    title: "Conquer the Alpe du Zwift: Tips for a Faster Climb",
    excerpt: "Master Alpe du Zwift with expert pacing strategies, training tips, and in-game tactics. Learn how to break the one-hour barrier and improve your climbing performance on Zwift's most iconic ascent.",
    date: "2025-11-12",
    readTime: "8 min",
    category: "Training",
    metaTitle: "Alpe du Zwift: How to Break One Hour | ZwiftCalculator",
    metaDescription: "Alpe du Zwift is 12.2 km and 1,036 m at roughly 8.5%. About 3.2 W/kg breaks the hour, and this hairpin-by-hairpin script shows how to hold it.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/mastering-ven-top",
    title: "Mastering Ven-Top: Surviving Zwift's Toughest Ascent",
    excerpt: "Conquer Zwift's longest climb - Ven-Top (Mont Ventoux). Learn pacing strategies, fueling tips, and mental tactics to survive this 20.9km, 1,534m ascent. Complete guide for mastering Zwift's toughest climb.",
    date: "2025-11-12",
    readTime: "9 min",
    category: "Training",
    metaTitle: "Ven-Top: Pacing Zwift's Longest Climb | ZwiftCalculator",
    metaDescription: "Ven-Top runs 20.9 km and about 1,480 m of climbing. Negative-split pacing, the fuelling maths for a 90-minute effort, and how to pick a first target.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-training-plans-101",
    title: "Zwift Training Plans 101: How to Boost Your FTP and Fitness",
    excerpt: "Discover how Zwift's structured training plans can boost your FTP and cycling fitness. Learn about FTP Builder, Build Me Up, and other plans designed by professional coaches to help you get stronger and faster.",
    date: "2025-11-12",
    readTime: "10 min",
    category: "Training",
    metaTitle: "Zwift Training Plans: Which One Lifts FTP | ZwiftCalculator",
    metaDescription: "Which built-in Zwift plan fits your hours, how to set your FTP before you start, and what a training week looks like at 3, 5 and 8 hours.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-racing-for-beginners",
    title: "Zwift Racing for Beginners: Tips to Ride and Win Your First Virtual Race",
    excerpt: "Complete beginner's guide to Zwift racing. Learn race categories, drafting tactics, powerup strategies, and finishing techniques. Master your first virtual race with expert tips and tactics.",
    date: "2025-11-12",
    readTime: "12 min",
    category: "Racing",
    metaTitle: "Your First Zwift Race: What to Expect | ZwiftCalculator",
    metaDescription: "How Zwift race categories work, why the first two minutes hurt so much, and how to use drafting, power-ups and the finish in your first race.",
  },
  {
    slug: "/blog/zwift-setup-guide",
    title: "Zwift Setup Guide: Essential Gear for Your Ultimate Indoor Pain Cave",
    excerpt: "Complete Zwift setup guide: essential gear for your indoor training pain cave. Learn about smart trainers, bikes, devices, cooling, and accessories needed to start Zwifting effectively.",
    date: "2025-11-12",
    readTime: "11 min",
    category: "Setup",
    metaTitle: "Zwift Setup: What Gear You Actually Need | ZwiftCalculator",
    metaDescription: "Trainer, bike, screen, fan and floor space, ranked by how much each one matters. A Zwift setup guide for a pain cave you will actually use.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/unlocking-zwift-achievements",
    title: "Unlocking Zwift Achievements: From Route Badges to the Coveted Tron Bike",
    excerpt: "Complete guide to Zwift achievements and badges. Learn how to unlock the legendary Tron bike by climbing 50,000m, earn route badges, and level up faster with XP bonuses.",
    date: "2025-11-12",
    readTime: "10 min",
    category: "Gaming",
    metaTitle: "Zwift Tron Bike: How to Earn It Faster | ZwiftCalculator",
    metaDescription: "The Tron bike takes 50,000 m of climbing. How long that really needs, which route badges pay out, and which Zwift rewards make you faster.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-powerups-guide",
    title: "Zwift PowerUps Guide: How to Use In-Game Boosts Like a Pro",
    excerpt: "Master Zwift PowerUps: Learn how to use Feather, Aero, Draft Boost, Burrito, Ghost, Steamroller, and Anvil powerups strategically in races and rides. Complete guide to Zwift's in-game boosts.",
    date: "2025-11-12",
    readTime: "9 min",
    category: "Racing",
    metaTitle: "Zwift PowerUps: When to Use Each One | ZwiftCalculator",
    metaDescription: "Feather, Aero, Draft Boost, Burrito, Ghost and Steamroller: what each Zwift power-up does, how long it lasts, and the moment to trigger it.",
  },
  {
    slug: "/blog/level-up-fast-in-zwift",
    title: "Level Up Fast in Zwift: Earning XP and Unlocking New Gear Quickly",
    excerpt: "Learn how to level up fast in Zwift and unlock new gear quickly. Discover XP farming strategies, route badges, workout tips, and accelerated leveling techniques to reach higher levels faster.",
    date: "2025-11-12",
    readTime: "8 min",
    category: "Gaming",
    metaTitle: "Level Up Faster in Zwift: XP Explained | ZwiftCalculator",
    metaDescription: "How Zwift XP is earned, why higher levels take longer, and the ride choices that add the most XP per hour without wrecking your training.",
  },
  {
    slug: "/blog/zwift-vs-outdoor-cycling",
    title: "Zwift vs Outdoor Cycling: Key Differences and Real-World Benefits",
    excerpt: "Compare Zwift indoor cycling vs outdoor cycling. Learn about power differences, FTP variations, drafting dynamics, and how Zwift training translates to improved outdoor performance.",
    date: "2025-11-12",
    readTime: "11 min",
    category: "Training",
    metaTitle: "Zwift vs Outdoor Riding: Real Differences | ZwiftCalculator",
    metaDescription: "Why indoor FTP often reads lower, how coasting and drafting change, and what Zwift training does and does not carry over to outdoor riding.",
  },
  {
    slug: "/blog/get-fit-and-lose-weight-with-zwift",
    title: "Get Fit and Lose Weight with Zwift: Indoor Cycling for Weight Loss",
    excerpt: "Discover how Zwift can help you lose weight and get fit. Learn about calorie burn, best workouts for weight loss, diet integration, and how to stay motivated with Zwift's engaging platform.",
    date: "2025-11-12",
    readTime: "9 min",
    category: "Fitness",
    metaTitle: "Losing Weight with Zwift: What Works | ZwiftCalculator",
    metaDescription: "Calorie burn on Zwift, which workouts suit weight loss, and why diet and consistency matter more than the ride itself. Practical, not a crash plan.",
  },
];

/** Categories that have a dedicated landing page under /blog/category/... */
export const categoryPages = [
  { id: "Training", slug: "/blog/category/training", name: "Training" },
  { id: "Racing", slug: "/blog/category/racing", name: "Racing" },
  { id: "Setup", slug: "/blog/category/setup", name: "Setup" },
  { id: "Data Analysis", slug: "/blog/category/data-analysis", name: "Data Analysis" },
] as const;

/** Convert an ISO date (yyyy-mm-dd) into the dd-mm-yyyy form shown on the site. */
export function displayDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}-${m}-${y}`;
}

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return blogPosts.filter((p) => p.category === category);
}

/** Newest-first copy of the index. */
export function postsByDateDesc(): BlogPostMeta[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}
