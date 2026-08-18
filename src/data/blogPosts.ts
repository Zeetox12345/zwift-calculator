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
    title: "Time of Day and Your Zwift Power: Finding Your Own Peak",
    excerpt: "Your power is not the same at 6 AM as at 6 PM, but nobody can tell you how large your own swing is. What actually moves across the day, why it moves, and a six-session protocol that measures the effect on you rather than on a study population.",
    date: "2025-12-31",
    readTime: "22 min",
    category: "Training",
    metaTitle: "Best Time of Day to Zwift: Find Your Peak | ZwiftCalculator",
    metaDescription: "Morning or evening? Work out your chronotype, then match your hardest Zwift sessions to the hours when your power is naturally highest.",
  },
  {
    slug: "/blog/zwift-cognitive-load",
    title: "Why You Make Bad Decisions Late in a Zwift Race",
    excerpt: "The places you lose in the last ten minutes are rarely a fitness problem. Which parts of the screen are worth watching, why judgement degrades as the effort rises, and how to strip the load out of a race before it starts.",
    date: "2025-12-31",
    readTime: "12 min",
    category: "Psychology",
    metaTitle: "Mental Fatigue and Zwift Race Mistakes | ZwiftCalculator",
    metaDescription: "Late-race mistakes are usually a mental fatigue problem, not a fitness one. Here are the protocols that cut cognitive load during a Zwift race.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-subscription-economics",
    title: "Is Zwift Worth the Money? Run the Numbers on Your Own Hours",
    excerpt: "The subscription is rarely the expensive part. A break-even formula you can run on your own ride count, the full cost stack including the trainer, and an honest account of when Zwift is not worth paying for.",
    date: "2025-12-31",
    readTime: "12 min",
    category: "Data Analysis",
    metaTitle: "Is Zwift Worth It? The Cost Per Hour Math | ZwiftCalculator",
    metaDescription: "Zwift costs less per hour than most people assume. Run the break-even formula on your own ride count and see where the real value sits.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-biomechanics",
    title: "What a Fixed Bike Does to Your Body That the Road Does Not",
    excerpt: "Outdoors you shift position constantly without noticing. Indoors the bike cannot move, so you stop moving too. What that does to your hands, knees, neck and lower back over a winter, and the changes that actually help.",
    date: "2025-12-31",
    readTime: "13 min",
    category: "Training",
    metaTitle: "Zwift Injuries: Indoor vs Outdoor Cycling | ZwiftCalculator",
    metaDescription: "A fixed bike removes the micro-movements outdoor riding gives you. What that does to your hands, knees, neck and lower back, and how to fix it.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-network-performance",
    title: "Zwift Lag, Rubber-Banding and Dropouts: Finding the Real Cause",
    excerpt: "Zwift sends far less data than people assume, so raw latency is almost never the culprit. The failure modes in order of how often they actually happen, a diagnostic sequence you can run tonight, and what a bad connection cannot be blamed for.",
    date: "2025-12-31",
    readTime: "12 min",
    category: "Setup",
    metaTitle: "Zwift Lag and Dropouts: How to Fix Them | ZwiftCalculator",
    metaDescription: "Rubber-banding and dropouts are rarely raw latency. Run this diagnostic sequence to find the real cause and steady your Zwift connection.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-drafting-physics-aerodynamics",
    title: "What the Zwift Draft Is Worth, and Where It Stops Paying",
    excerpt: "Drafting saves air resistance, and air resistance depends on speed, so the draft is worth a great deal on the flat and close to nothing on the Alpe. Where the crossover sits, how to measure your own saving, and which numbers people invent because Zwift has never published them.",
    date: "2025-12-31",
    readTime: "20 min",
    category: "Physics",
    metaTitle: "How Zwift Drafting Works: Watts You Save | ZwiftCalculator",
    metaDescription: "Zwift drafting saves real watts, but only from certain positions. Where to sit in the pack, when to hold on, and when the draft stops paying.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-route-selection-psychology",
    title: "Picking Zwift Routes That Match the Session You Meant to Ride",
    excerpt: "A flat route and a climb turn identical watts into completely different sessions. Why gradient rather than scenery decides what a ride trains, the three ways route choice quietly wrecks a training block, and how I lay out a week.",
    date: "2025-12-31",
    readTime: "15 min",
    category: "Psychology",
    metaTitle: "Choosing Zwift Routes That Train You Best | ZwiftCalculator",
    metaDescription: "The route you pick shapes both motivation and adaptation. Use this framework to match Zwift routes to the session you actually need that day.",
  },
  {
    slug: "/blog/zwift-group-ride-dynamics",
    title: "What Zwift Group Rides Give You, and What They Cost",
    excerpt: "Company raises your output and also makes it easier to hide. Why large groups feel easy, what a ride leader actually controls, why group power averages mislead, and how to get a real session out of a social ride.",
    date: "2025-12-31",
    readTime: "21 min",
    category: "Psychology",
    metaTitle: "Zwift Group Rides: Why You Ride Harder | ZwiftCalculator",
    metaDescription: "Group rides change how hard you push and how often you show up. Which ride types suit you, and how to get more out of a Zwift group ride.",
  },
  {
    slug: "/blog/zwift-equipment-optimization-aerodynamics",
    title: "Zwift Bike and Wheel Choice: What Actually Changes Your Time",
    excerpt: "In Zwift a bike is three numbers rather than a machine, and the fastest one up the Alpe is not the fastest one on the flat. A decision table for choosing a setup, and the reason equipment is the least efficient place to look for speed.",
    date: "2025-12-31",
    readTime: "14 min",
    category: "Setup",
    metaTitle: "Fastest Zwift Bike and Wheel Setup | ZwiftCalculator",
    metaDescription: "In-game frames and wheels are three numbers, not a bike. Which Zwift setup is fastest on climbs, which wins on the flat, and why your watts matter more.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-training-periodization",
    title: "Periodisation for Indoor Riders: Planning a Season on Zwift",
    excerpt: "Riding hard every week stops working after about two months. The three time scales a plan has to handle, a worked sixteen-week structure, how to plan backwards from a climb attempt, and why a permanent sweet spot block is the most common way to stall.",
    date: "2025-12-31",
    readTime: "15 min",
    category: "Training",
    metaTitle: "Zwift Periodization: A 16-Week Structure | ZwiftCalculator",
    metaDescription: "Stop living in a permanent sweet spot block. A 16-week Zwift periodization structure with phases, deloads and a taper for a climb attempt.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/the-data-behind-zwift-climbing",
    title: "The Data Behind Zwift Climbing: What 800 Verified Finishing Times Show",
    excerpt: "About 800 verified ZwiftPower finishing times, fitted to two curves, and nothing else. What those equations really say about the value of a power gain, how to read a target time backwards into a wattage, and exactly where the model stops being trustworthy.",
    date: "2025-12-20",
    readTime: "19 min",
    category: "Data Analysis",
    metaTitle: "What 800 Zwift Climb Times Show | ZwiftCalculator",
    metaDescription: "Two curves fitted to about 800 verified Alpe du Zwift and Ven Top finishes: what a power gain is really worth, and where the model stops working.",
  },
  {
    slug: "/blog/the-mechanical-engineering-of-zwift-performance",
    title: "From Muscle to Movement: The Engineering Chain Behind Your Zwift Speed",
    excerpt: "Every watt you make crosses six or seven interfaces before it becomes speed on screen, and each one takes a cut. Torque and cadence, drivetrain losses, in-game mass, and why a quadratic curve fits climbing times better than a straight line.",
    date: "2025-12-20",
    readTime: "8 min",
    category: "Physics",
    metaTitle: "Why Your Trainer and Power Meter Disagree | ZwiftCalculator",
    metaDescription: "Power crosses six interfaces before it reaches Zwift. Where it gets measured, why two devices can differ by 5%, and what low cadence really costs you.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/regression-analysis-methodology",
    title: "How the Climb Time Models Were Built, Tested and Bounded",
    excerpt: "Where roughly 800 ZwiftPower records came from, which curve shapes were tried and rejected, how each fit was checked against data it had never seen, and the ranges outside which these models should not be trusted.",
    date: "2025-12-20",
    readTime: "8 min",
    category: "Data Analysis",
    metaTitle: "How the Zwift Climb Time Models Were Built | ZwiftCalculator",
    metaDescription: "The 800 records behind the calculators, why a straight line does not fit, how the curves were tested on unseen data, and where they stop being reliable.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/power-to-weight-ratio-science",
    title: "Power-to-Weight Ratio: Why It Decides Climbs and Little Else",
    excerpt: "Watts per kilogram predicts climbing speed because on a steep gradient nearly all your power goes into lifting your own mass. Where that stops being true, the two ways to move the ratio and why they are not equal, and the point at which chasing it backfires.",
    date: "2025-12-20",
    readTime: "9 min",
    category: "Training",
    metaTitle: "W/kg Explained: Why Weight Rules Climbs | ZwiftCalculator",
    metaDescription: "Power to weight ratio decides climbing speed. The physics, worked W/kg examples, and whether to add watts or lose kilos to get faster on Zwift.",
  },
  {
    slug: "/blog/how-i-started-zwifting-and-how-averagerob-arno-inspired-my-ironman-journey",
    title: "How I Started Zwifting, and How AverageRob and Arno Sent Me to an Ironman",
    excerpt: "How a gamer on a borrowed trainer ended up training for an Ironman, what a YouTube series had to do with it, what the numbers and the weight actually did over that first year, and the things I would do differently starting again.",
    date: "2025-12-19",
    readTime: "12 min",
    category: "Personal",
    metaTitle: "How AverageRob and Arno Got Me on Zwift | ZwiftCalculator",
    metaDescription: "A personal account of going from gamer to Zwifter: the AverageRob and Arno Ironman series, the weight that came off, and why I built this site.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/how-to-keep-your-streak-in-zwift-while-travelling",
    title: "Keeping a Zwift Streak Alive While Travelling",
    excerpt: "What ends streaks on the road is decision fatigue, not missing equipment. A minimum ride small enough to defend on any day, three travel scenarios from full kit to no bike at all, and the rules that stop the streak becoming a burden.",
    date: "2025-12-19",
    readTime: "13 min",
    category: "Training",
    metaTitle: "Keep Your Zwift Streak While Travelling | ZwiftCalculator",
    metaDescription: "Three travel scenarios, from packing a compact trainer to having no bike at all, plus the tiny backup ride that keeps your Zwift streak alive.",
  },
  {
    slug: "/blog/having-time-to-zwift-during-university",
    title: "Fitting Zwift Around a University Timetable",
    excerpt: "Written from the middle of an engineering degree. The minimum weekly dose that still builds fitness, where student time actually disappears, how to train through an exam period without sabotaging either one, and a three-ride template that survives a chaotic week.",
    date: "2025-12-19",
    readTime: "11 min",
    category: "Training",
    metaTitle: "How to Zwift as a Busy University Student | ZwiftCalculator",
    metaDescription: "Fit Zwift around lectures and deadlines with a minimum effective dose, a low-friction setup, and a weekly template that survives exam periods.",
  },
  {
    slug: "/blog/what-terminology-do-zwifters-use",
    title: "Zwift Terminology, Explained Properly",
    excerpt: "FTP, w/kg, ERG, the blob, sticky draft, sandbagging, the pen. What each term means, which ones a beginner needs first, and the handful that get used incorrectly in ride chat often enough to be worth correcting.",
    date: "2025-12-19",
    readTime: "14 min",
    category: "Training",
    metaTitle: "Zwift Terms Explained: FTP, W/kg and ERG | ZwiftCalculator",
    metaDescription: "A plain-English Zwift glossary covering FTP, W/kg, ERG mode, sandbagging, power-ups, race categories and the slang riders use in chat.",
  },
  {
    slug: "/blog/towels-during-zwifting-can-it-ruin-your-bike",
    title: "Sweat, Towels and Your Bike: What Actually Causes the Damage",
    excerpt: "Indoor sweat lands where rain never reaches and it is saltier than rain too. What corrodes first, why one towel is not enough, the three-minute routine after a ride that prevents nearly all of it, and the early warning signs.",
    date: "2025-12-19",
    readTime: "12 min",
    category: "Setup",
    metaTitle: "Zwift Sweat Damage: Do Towels Help? | ZwiftCalculator",
    metaDescription: "Sweat corrodes bolts, cables and headsets faster than rain does. Where to put towels during Zwift, which type works, and a 3-minute cleanup.",
  },
  {
    slug: "/blog/10-day-zwift-training-week",
    title: "The 10-Day Training Week: Fitting Zwift and Running Together",
    excerpt: "Seven days is an arbitrary container for training, and it forces hard sessions closer together than they need to be. A ten-day rotation that gives threshold, VO2, endurance and running room to breathe, with the intensity guide that keeps it honest.",
    date: "2025-12-19",
    readTime: "10 min",
    category: "Training",
    metaTitle: "The 10-Day Zwift and Run Training Week | ZwiftCalculator",
    metaDescription: "A 10-day Zwift training block mixing threshold, VO2 and endurance rides with running, plus recovery rules and how to progress it over time.",
  },
  {
    slug: "/blog/what-zwift-cant-teach-you-and-what-it-can",
    title: "What Zwift Builds Well, and What It Cannot Build at All",
    excerpt: "Zwift is very good at building an engine and completely unable to teach you to descend, corner or read traffic. An honest split of the two lists, and how to cover the gap without giving up what indoor training is genuinely good at.",
    date: "2025-12-19",
    readTime: "11 min",
    category: "Training",
    metaTitle: "What Zwift Can't Teach You About Cycling | ZwiftCalculator",
    metaDescription: "Indoor training builds the engine but skips bike handling, weather and terrain reading. How to fill those gaps without giving up your Zwift habit.",
  },
  {
    slug: "/blog/virtual-hills-real-wind-whats-harder",
    title: "Virtual Hills or Real Wind: Which Is Actually Harder?",
    excerpt: "A Zwift climb punishes a pacing error within a minute. A headwind punishes your mood for three hours. Why the two kinds of difficulty are not really comparable, which one prepares you better for a long day outdoors, and how to use both.",
    date: "2025-12-19",
    readTime: "15 min",
    category: "Training",
    metaTitle: "Zwift Climbs vs Real Wind: What's Harder | ZwiftCalculator",
    metaDescription: "Virtual gradients punish pacing errors and outdoor wind punishes patience. How the two compare, and how to blend them for triathlon training.",
  },
  {
    slug: "/blog/shimanami-kaido",
    title: "Training for an All-Day Touring Ride, and the Recovery Week After",
    excerpt: "A long, flat, stop-often day on the bike asks for durability and patience, not threshold power, and most riders train for the wrong one. Using Japan's Shimanami Kaido as the example: what the day demands, the Zwift block that builds it, and why the week afterwards matters more than the week before.",
    date: "2025-12-18",
    readTime: "8 min",
    category: "Training",
    metaTitle: "Training for an All-Day Ride on Zwift | ZwiftCalculator",
    metaDescription: "A long touring day needs duration, not intervals. A six-week Zwift build, how to actually ride easy indoors, and the recovery week that follows.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/vermont-upstate-gravel-vs-road",
    title: "Gravel or Road: How Surface Choice Changes What You Should Train",
    excerpt: "Gravel is not simply road riding that is harder. It changes the shape of the effort, and that changes the sessions that prepare you for it. What each surface asks of you, and how to reproduce both on Zwift when the roads outside are not available.",
    date: "2025-12-18",
    readTime: "8 min",
    category: "Training",
    metaTitle: "Gravel vs Road: What to Train for Each | ZwiftCalculator",
    metaDescription: "Loose gravel costs about 69 W where asphalt costs 23 W. What that does to your training, and the Zwift sessions that prepare you for each surface.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/colorado-mountain-riding",
    title: "Preparing on Zwift for a Climb at Altitude",
    excerpt: "Altitude takes power away before you turn a pedal, and no amount of indoor training gives it back. What thin air actually costs, why your heart rate stops meaning what it used to, and how to build the one thing that does transfer: the ability to ride steadily for a very long time.",
    date: "2025-12-18",
    readTime: "10 min",
    category: "Training",
    metaTitle: "Zwift Training for Riding at Altitude | ZwiftCalculator",
    metaDescription: "Thin air costs roughly 10% of your power at 3,000 m, worth over five minutes on an hour-long climb. What transfers from indoor training, and what cannot.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/new-york-city-by-bike",
    title: "Zwift's New York, and the City It Is Based On",
    excerpt: "Zwift's New York is a park loop with future architecture bolted on, and it rides nothing like the real thing. What the in-game routes actually train, how the real city differs, and how to use the world for the punchy, stop-start efforts urban riding demands.",
    date: "2025-12-18",
    readTime: "10 min",
    category: "Training",
    metaTitle: "Zwift's New York: What It Actually Trains | ZwiftCalculator",
    metaDescription: "City riding is an interval session in disguise: about 2,050 joules per acceleration, forty an hour. How the New York ramps reproduce that demand.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/sydney-to-wollongong",
    title: "Building Up to Your First Long Coastal Day",
    excerpt: "The jump from a two-hour ride to a five-hour one is a fuelling and pacing problem far more than a fitness one. What changes past the three-hour mark, the Zwift progression that gets you ready, and the mistakes that turn a good day into a long walk.",
    date: "2025-12-18",
    readTime: "9 min",
    category: "Training",
    metaTitle: "Building Up to Your First Five-Hour Ride | ZwiftCalculator",
    metaDescription: "The jump from two hours to five is a fuelling and pacing problem, not a fitness one. A six-week Zwift build, and what fails at each hour of the day.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/great-ocean-road-by-bike",
    title: "Training for Multi-Day Riding: Back-to-Back Days on Zwift",
    excerpt: "Riding well on day three is a different skill from riding well on day one, and single hard sessions do not build it. How consecutive-day fatigue actually accumulates, the Zwift block that prepares for it, and how to pace a tour so the last day is still enjoyable.",
    date: "2025-12-18",
    readTime: "10 min",
    category: "Training",
    metaTitle: "Training for Back-to-Back Riding Days | ZwiftCalculator",
    metaDescription: "One long day can burn your entire glycogen store. Why day three is a different skill, and an eight-week Zwift block of paired days that builds it.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed",
    title: "The Calculus of the Pain Cave: A Mechanical Autopsy of Speed",
    excerpt: "Drag rises with the cube of speed, most of what you produce leaves your body as heat rather than motion, and the flywheel is not storing what you think it is. An essay on the physics that decides how fast a given number of watts makes you go.",
    date: "2025-12-16",
    readTime: "11 min",
    category: "Physics",
    metaTitle: "Where Your Watts Go: Drag, Heat, Friction | ZwiftCalculator",
    metaDescription: "Drag rises with the cube of your speed and most of your effort leaves as heat. An engineering breakdown of where cycling watts actually go.",
  },
  {
    slug: "/blog/the-glucose-alchemist-how-to-fuel-a-world-tour-effort-on-a-ramen-budget",
    title: "The Glucose Alchemist: Fuelling a Long Ride on a Student Budget",
    excerpt: "Sports nutrition is mostly sugar sold at a considerable markup. What is actually inside a gel, how table sugar and maltodextrin reproduce it for a fraction of the price, why the wrapper does more work than the contents, and how much sodium you genuinely need.",
    date: "2025-12-16",
    readTime: "7 min",
    category: "Nutrition",
    metaTitle: "DIY Cycling Fuel: Sugar and Maltodextrin | ZwiftCalculator",
    metaDescription: "Make your own Zwift race fuel from table sugar, maltodextrin and salt for a fraction of gel prices. What to mix, and why the chemistry works.",
  },
  {
    slug: "/blog/the-architecture-of-sweat-a-field-guide-to-the-invisible-nation-of-watopia",
    title: "The Architecture of Sweat: A Field Guide to Watopia",
    excerpt: "An essay rather than a guide. Watopia as a place with its own physics, its own etiquette and its own quiet class system, written from several thousand kilometres spent inside it.",
    date: "2025-12-16",
    readTime: "8 min",
    category: "Philosophy",
    metaTitle: "Watopia as a Country: A Field Guide | ZwiftCalculator",
    metaDescription: "An essay on Watopia as a place with its own physics, etiquette and status rules, from avatar blobs to the ethics of the weight doper.",
  },
  {
    slug: "/blog/ghost-in-the-machine-why-your-brain-allows-you-to-suffer-more-in-watopia",
    title: "The Ghost in the Machine: Why You Suffer More Willingly in Watopia",
    excerpt: "The central governor, the Proteus effect, and the reason a progress bar changes what your legs will agree to. Why the same effort is easier to tolerate with a screen in front of it, and the point where that stops being useful to you.",
    date: "2025-12-16",
    readTime: "7 min",
    category: "Psychology",
    metaTitle: "Why You Suffer More on Zwift Than Outside | ZwiftCalculator",
    metaDescription: "The Central Governor, the Proteus Effect and gamification explain why Zwift pulls harder efforts out of riders than the open road does.",
  },
  {
    slug: "/blog/conquer-alpe-du-zwift",
    title: "Pacing the Alpe du Zwift: A Hairpin-by-Hairpin Plan",
    excerpt: "The Alpe is 21 hairpins and the gradient changes on every one of them. A pacing script built from this site's own fitted equation, the mistake that ends most sub-hour attempts before hairpin 15, and what is actually worth doing in the week beforehand.",
    date: "2025-11-12",
    readTime: "19 min",
    category: "Training",
    metaTitle: "Alpe du Zwift: How to Break One Hour | ZwiftCalculator",
    metaDescription: "Alpe du Zwift is 12.2 km and 1,036 m at roughly 8.5%. About 3.2 W/kg breaks the hour, and this hairpin-by-hairpin script shows how to hold it.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/mastering-ven-top",
    title: "Ven-Top: Why It Is Not Simply a Longer Alpe",
    excerpt: "20.9 km and 1,534 m, with a forest section, Chalet Reynard and a bare upper slope that each ask for something different. Why negative splitting pays more here than on the Alpe, and the fuelling arithmetic for ninety minutes of climbing.",
    date: "2025-11-12",
    readTime: "15 min",
    category: "Training",
    metaTitle: "Ven-Top: Pacing Zwift's Longest Climb | ZwiftCalculator",
    metaDescription: "Ven-Top runs 20.9 km and about 1,534 m of climbing. Negative-split pacing, the fuelling maths for a 90-minute effort, and how to pick a first target.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-training-plans-101",
    title: "Choosing a Zwift Training Plan That Fits the Week You Actually Have",
    excerpt: "Three questions decide which plan is right, and hours per week is the one riders get wrong most often. What a week looks like at 3, 5 and 8 hours, where the built-in plans stop working, and a worked route from 2.8 W/kg to under an hour on the Alpe.",
    date: "2025-11-12",
    readTime: "18 min",
    category: "Training",
    metaTitle: "Zwift Training Plans: Which One Lifts FTP | ZwiftCalculator",
    metaDescription: "Which built-in Zwift plan fits your hours, how to set your FTP before you start, and what a training week looks like at 3, 5 and 8 hours.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-racing-for-beginners",
    title: "Your First Zwift Race: What Nobody Warns You About",
    excerpt: "The start is harder than the rest of the race combined, and almost everyone goes too deep in the first three minutes. How the categories work, what to do in the opening kilometre, when holding a power-up beats spending it, and how the finish is really decided.",
    date: "2025-11-12",
    readTime: "12 min",
    category: "Racing",
    metaTitle: "Your First Zwift Race: What to Expect | ZwiftCalculator",
    metaDescription: "How Zwift race categories work, why the first two minutes hurt so much, and how to use drafting, power-ups and the finish in your first race.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-setup-guide",
    title: "Zwift Setup: What to Buy First, and What Can Wait",
    excerpt: "Ranked by how much difference each purchase actually makes, which puts the fan a long way above the bike. Trainers, screens, sensors and cooling, plus three complete builds at different budgets and what each one gives up.",
    date: "2025-11-12",
    readTime: "21 min",
    category: "Setup",
    metaTitle: "Zwift Setup: What Gear You Actually Need | ZwiftCalculator",
    metaDescription: "Trainer, bike, screen, fan and floor space, ranked by how much each one matters. A Zwift setup guide for a pain cave you will actually use.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/unlocking-zwift-achievements",
    title: "Zwift Badges, XP and the Tron Bike: What the Grind Really Takes",
    excerpt: "50,000 m of climbing is the headline number, and this is the honest version of how long that takes at a realistic weekly volume. Which unlocks make you faster, which are purely cosmetic, and the point where badge hunting starts costing you fitness.",
    date: "2025-11-12",
    readTime: "18 min",
    category: "Gaming",
    metaTitle: "Zwift Tron Bike: How to Earn It Faster | ZwiftCalculator",
    metaDescription: "The Tron bike takes 50,000 m of climbing. How long that really needs, which route badges pay out, and which Zwift rewards make you faster.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-powerups-guide",
    title: "Zwift PowerUps: When Each One Is Worth Spending",
    excerpt: "All eight power-ups, what each does to your numbers, how long it lasts, and the situations where holding one is worth more than using it. The feather is not automatically the right answer on a climb.",
    date: "2025-11-12",
    readTime: "11 min",
    category: "Racing",
    metaTitle: "Zwift PowerUps: When to Use Each One | ZwiftCalculator",
    metaDescription: "Feather, Aero, Draft Boost, Burrito, Ghost and Steamroller: what each Zwift power-up does, how long it lasts, and the moment to trigger it.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/level-up-fast-in-zwift",
    title: "How Zwift XP Actually Works, and How to Earn It Faster",
    excerpt: "XP tracks distance and time rather than effort, which quietly changes almost every decision about how to earn it. How route badges, workouts and long events compare per hour, and why levelling slows down exactly when you start to care.",
    date: "2025-11-12",
    readTime: "9 min",
    category: "Gaming",
    metaTitle: "Level Up Faster in Zwift: XP Explained | ZwiftCalculator",
    metaDescription: "How Zwift XP is earned, why higher levels take longer, and the ride choices that add the most XP per hour without wrecking your training.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/zwift-vs-outdoor-cycling",
    title: "Zwift and Outdoor Cycling: What Actually Transfers",
    excerpt: "Indoor FTP usually reads lower than outdoor, and the reasons are heat, continuity and measurement rather than fitness. What a winter of indoor riding does and does not do for your first real ride of the spring.",
    date: "2025-11-12",
    readTime: "11 min",
    category: "Training",
    metaTitle: "Zwift vs Outdoor Riding: Real Differences | ZwiftCalculator",
    metaDescription: "Why indoor FTP often reads lower, how coasting and drafting change, and what Zwift training does and does not carry over to outdoor riding.",
    dateModified: "2026-08-18",
  },
  {
    slug: "/blog/get-fit-and-lose-weight-with-zwift",
    title: "Using Zwift for Weight Loss Without Wrecking Your Training",
    excerpt: "Cycling burns less than the on-screen calorie figure suggests, and appetite quietly rises to meet most of it. What indoor riding genuinely contributes to fat loss, why cutting hard costs you watts, and the changes worth tracking instead of the scale.",
    date: "2025-11-12",
    readTime: "7 min",
    category: "Fitness",
    metaTitle: "Losing Weight with Zwift: What Works | ZwiftCalculator",
    metaDescription: "Calorie burn on Zwift, which workouts suit weight loss, and why diet and consistency matter more than the ride itself. Practical, not a crash plan.",
    dateModified: "2026-08-18",
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
