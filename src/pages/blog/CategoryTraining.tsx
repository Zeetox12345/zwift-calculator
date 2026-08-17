import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Gauge,
  LineChart,
  ListChecks,
  Target,
  TrendingUp,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostsByCategory, displayDate } from "@/data/blogPosts";

/** Training articles, newest first. */
const trainingPosts = [...getPostsByCategory("Training")].sort((a, b) =>
  b.date.localeCompare(a.date)
);

/** A reading order for someone landing on this category with no plan yet. */
const startHere = [
  {
    slug: "/blog/zwift-training-plans-101",
    title: "Zwift Training Plans 101",
    note: "How the built-in plans are structured, and which one suits which rider.",
  },
  {
    slug: "/blog/10-day-zwift-training-week",
    title: "10 Day Zwift Training Week",
    note: "A full micro-cycle written out session by session.",
  },
  {
    slug: "/blog/zwift-training-periodization",
    title: "Zwift Training Periodization",
    note: "Stacking blocks across months instead of improvising a week at a time.",
  },
  {
    slug: "/blog/power-to-weight-ratio-science",
    title: "Power-to-Weight Ratio Deep Dive",
    note: "Why W/kg, not raw watts, decides a climb.",
  },
  {
    slug: "/blog/conquer-alpe-du-zwift",
    title: "Conquer the Alpe du Zwift",
    note: "The execution side: pacing the 21 hairpins and where riders lose time.",
  },
  {
    slug: "/blog/having-time-to-zwift-during-university",
    title: "Having Time to Zwift During University",
    note: "What to do when hours, not fitness, are the constraint.",
  },
];

const CategoryTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-6" />
          </div>

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
                Indoor training is dense, and dense training rewards structure. Here is how I build
                a Zwift week, the questions to answer before picking a plan, and two worked example
                weeks - followed by the full training archive.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* What drives improvement */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-orange/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="text-zwift-orange flex-shrink-0" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    What actually makes you faster indoors
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Three things drive improvement, in this order: consistency, intensity
                    distribution, specificity. Most riders get the order backwards, hunting for the
                    perfect interval session and doing it four times in six weeks. Three ordinary
                    sessions every week for three months beats four brilliant ones in a good week
                    and nothing in a bad one. Adaptation follows a repeated stimulus.
                  </p>

                  <p>
                    Second is intensity distribution: how the week splits between easy, moderate and
                    hard. The indoor failure mode is the grey zone, where every ride sits at a pace
                    too hard to recover from and too easy to force an adaptation. Easy rides should
                    allow conversation. Hard intervals should make the last one a fight. The middle
                    is where fitness stalls.
                  </p>

                  <p>
                    Specificity comes third because it only pays once the first two are handled. A
                    faster Alpe du Zwift needs long sustained efforts on a gradient. Surviving Zwift
                    races needs repeated 30-second surges from a high baseline. On a grey-zone week,
                    specificity is polish on a car with no engine.
                  </p>

                  <p>
                    An hour on Zwift is also not an hour outdoors. Outdoors you coast down descents,
                    soft-pedal into junctions and freewheel in the group. Indoors, stop pedalling
                    and the ride stops, so nearly every second is loaded. It runs both ways: less
                    clock time indoors still buys a real training effect, and fatigue arrives sooner
                    than the duration suggests.
                  </p>

                  <p>
                    Heat is the other difference. No headwind means no cooling, so core temperature
                    limits you before your legs do. If your power collapses 25 minutes into a long
                    effort, buy a bigger fan before rewriting the plan. The{" "}
                    <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline">
                      setup guide
                    </Link>{" "}
                    covers the rest of the pain cave, and{" "}
                    <Link
                      to="/blog/zwift-vs-outdoor-cycling"
                      className="text-zwift-orange hover:underline"
                    >
                      Zwift vs outdoor cycling
                    </Link>{" "}
                    explains the indoor-outdoor gap.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Three questions */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-zwift-orange flex-shrink-0" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Three questions to answer before you pick a plan
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every good plan answers these three, and most plans that collapse in week three
                  got one of them wrong.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                      1. How many hours can you genuinely commit?
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Not your best week. The number you can still hit in a bad week, with a
                        deadline, a head cold and something on Saturday you cannot move. Build for
                        that and treat extra hours as a bonus: an eight-hour plan you complete four
                        times in twelve weeks loses to a four-hour plan you complete eleven times.
                      </p>
                      <p>
                        The answer also sets the shape. Under about five hours, all of your quality
                        lives in two sessions. Above about eight, the extra time should be easy
                        volume: your capacity to absorb hard work does not scale as fast as your
                        calendar. If hours are the constraint, the{" "}
                        <Link
                          to="/blog/having-time-to-zwift-during-university"
                          className="text-zwift-orange hover:underline"
                        >
                          student schedule article
                        </Link>{" "}
                        is written for that problem.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                      2. What are you training for?
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        "Getting fitter" is not something you can plan against. "Break 60 minutes on
                        Alpe du Zwift by March" is, because the target sets the duration you have to
                        defend, and duration decides the sessions.
                      </p>
                      <p>
                        Alpe du Zwift is 12.2 km and 1,036 m at roughly 8.5%, a 50 to 70 minute
                        effort for most riders, so you train to hold high steady power for the
                        better part of an hour. Ven-Top is about 20.9 km and 1,480 m, long enough to
                        push the emphasis toward endurance and fueling. Racing is different again:
                        average power rarely breaks you, the surges do. The{" "}
                        <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">
                          Alpe versus Ven-Top comparison
                        </Link>{" "}
                        lays out both, and the{" "}
                        <Link
                          to="/blog/category/racing"
                          className="text-zwift-orange hover:underline"
                        >
                          racing articles
                        </Link>{" "}
                        handle the surges.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                      3. Where are you starting from?
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        A rider at 2.5 W/kg and a rider at 4.0 W/kg with the same eight hours should
                        not run the same plan. The first improves from riding more, more often, with
                        two structured sessions a week. The second has taken the easy gains already
                        and needs targeted work, better pacing and patience with smaller increments.
                      </p>
                      <p>
                        So measure before you plan: a current number from the{" "}
                        <Link
                          to="/zwift-ftp-calculator"
                          className="text-zwift-orange hover:underline"
                        >
                          FTP calculator
                        </Link>
                        , your bracket from the{" "}
                        <Link
                          to="/zwift-racing-category-calculator"
                          className="text-zwift-orange hover:underline"
                        >
                          racing category calculator
                        </Link>
                        , and a time to chase from the{" "}
                        <Link
                          to="/alpeduzwiftcalculator"
                          className="text-zwift-orange hover:underline"
                        >
                          Alpe du Zwift calculator
                        </Link>
                        . A goal in minutes beats a goal of "stronger".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-zwift-orange flex-shrink-0" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    What 4 hours and 8 hours actually look like
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Take a concrete rider: 75 kg, FTP 225 W, so 3.0 W/kg. The fitted curve behind the
                  Alpe calculator puts that rider at roughly 63 minutes. At 240 W, or 3.2 W/kg, they
                  land right around the hour. That gap is 15 watts, a reasonable 10 to 12 week
                  target for someone not already highly trained. Two budgets aimed at it:
                </p>
              </div>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard delay={200}>
                <Card className="h-full border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">The 4-hour week</CardTitle>
                    <CardDescription>Three sessions, no filler, four rest days.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Tuesday, 60 min.</span>{" "}
                      Threshold: 2 x 15 min at 95 to 100% of FTP, so 215 to 225 W, with 6 min easy
                      between. Build toward 2 x 20.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Thursday, 60 min.</span>{" "}
                      Sub-threshold on a gradient: 2 x 20 min at 85 to 90%, so 190 to 200 W, seated,
                      on a real climb. This is the climb-specific work.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Sunday, 90 to 120 min.</span>{" "}
                      Endurance at 65 to 75%, so 145 to 170 W. Every third week, swap it for an Alpe
                      ascent paced at goal power.
                    </p>
                    <p className="pt-2 border-t">
                      The other four days are rest, not recovery spins. A fourth ride is the
                      quickest way into the grey zone.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={300}>
                <Card className="h-full border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">The 8-hour week</CardTitle>
                    <CardDescription>
                      The same three sessions, plus four mostly easy hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Keep all three</span>, and
                      grow the long ride to 2.5 or 3 hours. Durability comes from time in the
                      saddle, not intensity.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Add VO2, 60 min.</span> 5 x 3
                      min at 115 to 120%, so 260 to 270 W, with 3 min easy. This lifts the ceiling
                      your threshold sits under.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Add recovery, 45 to 60 min.</span>{" "}
                      55 to 60%, around 125 to 135 W. Boring on purpose: if it feels like training,
                      it is too hard.
                    </p>
                    <p className="pt-2 border-t">
                      About three quarters of the week is easy. The common failure is turning four
                      extra hours into four extra hard sessions, which buys a fast three weeks and a
                      flat sixth.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>

            <AnimatedCard delay={400}>
              <p className="max-w-4xl mx-auto mt-8 text-muted-foreground leading-relaxed">
                Both weeks rest on the same three sessions. Doubling your hours changes how much
                easy volume you can carry, not what makes you faster. Run your numbers through the{" "}
                <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
                  Alpe calculator
                </Link>{" "}
                and the{" "}
                <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">
                  climb time calculator
                </Link>{" "}
                before committing.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* FTP anchor and trap */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <div className="flex items-center gap-3 mb-6">
                  <Gauge className="text-zwift-orange flex-shrink-0" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    FTP is an anchor, not a scoreboard
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    FTP earns its place because it gives you one number to build zones from. Without
                    an anchor, "ride at 90 percent" means nothing. With one, every session has a
                    target and a way to tell whether you hit it.
                  </p>

                  <p>
                    The trap is treating it as the score. It is one number describing roughly one
                    duration. It says nothing about five minutes, nothing about 30 seconds after two
                    hours of racing, and nothing about what is left in the last four kilometres of a
                    climb. Train only at threshold and you get narrow: strong at exactly one
                    intensity, fragile either side of it. That rider gets dropped by the first real
                    surge and cracks near the top of the Alpe, where the fresh-legs number stops
                    applying.
                  </p>

                  <p>
                    Two consequences. Your Alpe pacing power is not your FTP, because the climb is a
                    50 to 70 minute effort, so plan around what you hold for that long - usually
                    somewhat below a fresh 20-minute-derived FTP. And keep something short and
                    something long in the week all year: a VO2 session to protect the ceiling, a
                    long ride to build durability. The{" "}
                    <Link
                      to="/blog/power-to-weight-ratio-science"
                      className="text-zwift-orange hover:underline"
                    >
                      power-to-weight deep dive
                    </Link>{" "}
                    covers why the ratio, not the raw watts, is what the mountain responds to.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Is the block working */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="text-zwift-orange flex-shrink-0" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    How to know a block is working
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  You do not need a lab, or a test every fortnight. Frequent testing costs training
                  days and mostly measures how fresh you were that morning. Watch the ordinary
                  sessions instead.
                </p>
              </div>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard delay={200}>
                <Card className="h-full border-2">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-zwift-green flex-shrink-0" size={22} />
                      <CardTitle className="text-xl">Signs it is working</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                      <li>
                        The same session at the same power feels easier, often at a lower heart rate.
                      </li>
                      <li>
                        You finish the last interval at the top of the range, not clinging to the
                        bottom.
                      </li>
                      <li>Heart rate drifts less across a 90-minute ride held at fixed power.</li>
                      <li>A repeated benchmark, same route and conditions, comes in faster.</li>
                      <li>You want to do tomorrow's session.</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={300}>
                <Card className="h-full border-2">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="text-zwift-orange flex-shrink-0" size={22} />
                      <CardTitle className="text-xl">Signs it is not</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                      <li>Power falls on the final interval every week, not just on a bad Tuesday.</li>
                      <li>You keep abandoning workouts partway through.</li>
                      <li>
                        Resting heart rate creeps up, sleep gets worse, motivation quietly
                        disappears.
                      </li>
                      <li>
                        Every ride has converged on the same moderately hard feeling: the easy rides
                        got harder and the hard rides got softer.
                      </li>
                      <li>
                        Weight is dropping fast and power with it, which usually means underfueling
                        rather than progress.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>

            <AnimatedCard delay={400}>
              <p className="max-w-4xl mx-auto mt-8 text-muted-foreground leading-relaxed">
                One bad session is noise. Three in a row is a signal. The fix is rarely more
                discipline: take a week at half volume with the intensity kept short, then reassess
                honestly. Fitness is built while you recover from the work.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Start here */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <div className="flex items-center gap-3 mb-6">
                  <ListChecks className="text-zwift-orange flex-shrink-0" size={28} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Start here</h2>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you read nothing else in this category, read these in roughly this order.
                </p>

                <ul className="space-y-4">
                  {startHere.map((item) => (
                    <li key={item.slug} className="flex items-start gap-3">
                      <BookOpen size={18} className="text-zwift-orange mt-1 flex-shrink-0" />
                      <div>
                        <Link
                          to={item.slug}
                          className="font-semibold text-foreground hover:text-zwift-orange transition-colors"
                        >
                          {item.title}
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground leading-relaxed mt-6">
                  The archive sits below, newest first. If you are chasing one specific climb, the{" "}
                  <Link to="/zwift-climbs" className="text-zwift-orange hover:underline">
                    climb index
                  </Link>{" "}
                  lists what each one demands, and every article on the site is on the{" "}
                  <Link to="/blog" className="text-zwift-orange hover:underline">
                    blog page
                  </Link>
                  .
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              All training articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingPosts.map((post, index) => (
                <AnimatedCard key={post.slug} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-orange/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-zwift-orange/10 text-zwift-orange rounded">
                            {post.category}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {displayDate(post.date)}
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
