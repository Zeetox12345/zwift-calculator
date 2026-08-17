import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bike,
  Calculator,
  Timer,
  Mountain,
  Gauge,
  Trophy,
  BookOpen,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Scale,
  LineChart,
} from "lucide-react";

import AnimatedText from "@/components/AnimatedText";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts, displayDate, postsByDateDesc } from "@/data/blogPosts";
import { AUTHOR } from "@/lib/siteConfig";

/**
 * The fitted relationship this site uses for Alpe du Zwift, published openly so
 * anyone can check a result by hand.
 */
const ALPE_FIT = { a: 148.6, b: -1954.08, c: 8329.87 };

function alpeSeconds(wkg: number): number {
  return ALPE_FIT.a * wkg * wkg + ALPE_FIT.b * wkg + ALPE_FIT.c;
}

function formatMinutes(seconds: number): string {
  const total = Math.round(seconds);
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

const REFERENCE_ROWS = [2.0, 2.5, 3.0, 3.2, 3.5, 4.0, 4.5, 5.0, 5.5].map((wkg) => ({
  wkg,
  time: formatMinutes(alpeSeconds(wkg)),
  wattsAt70: Math.round(wkg * 70),
  wattsAt85: Math.round(wkg * 85),
}));

const TOOLS = [
  {
    name: "Alpe du Zwift Calculator",
    path: "/alpeduzwiftcalculator",
    icon: Mountain,
    accent: "text-zwift-orange",
    background: "bg-zwift-orange/10",
    description:
      "The one most people come for. Enter your weight and the power you can hold, and get a finishing time for the 12.2 km, 1,036 m ascent.",
  },
  {
    name: "Ven-Top Calculator",
    path: "/ventop-calculator",
    icon: Mountain,
    accent: "text-zwift-blue",
    background: "bg-zwift-blue/10",
    description:
      "Zwift's version of Mont Ventoux: longer, more relentless, and far less forgiving of a fast start than the Alpe.",
  },
  {
    name: "Climb Time Calculator",
    path: "/zwift-climb-time-calculator",
    icon: Timer,
    accent: "text-zwift-green",
    background: "bg-zwift-green/10",
    description:
      "A physics model you can point at any climb in the game, with the profile of every major Zwift ascent already loaded.",
  },
  {
    name: "FTP & Training Zones",
    path: "/zwift-ftp-calculator",
    icon: Gauge,
    accent: "text-zwift-orange",
    background: "bg-zwift-orange/10",
    description:
      "Turn a 20-minute, 8-minute or ramp test into an FTP figure and a full set of training zones you can actually use.",
  },
  {
    name: "Racing Category Calculator",
    path: "/zwift-racing-category-calculator",
    icon: Trophy,
    accent: "text-zwift-blue",
    background: "bg-zwift-blue/10",
    description: "Work out which pen your numbers put you in, and what it would take to move up a category.",
  },
  {
    name: "Zwift Climb Data",
    path: "/zwift-climbs",
    icon: LineChart,
    accent: "text-purple-500",
    background: "bg-purple-500/10",
    description: "Length, elevation and average gradient for the game's major climbs, in one sortable reference table.",
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const latestPosts = postsByDateDesc().slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-orange shadow-sm border border-orange-100 dark:border-orange-900/20 mb-6">
                <Bike size={16} className="text-zwift-orange" />
                <span>Independent, free, and the maths is published</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200} className="mt-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
                How long will that <span className="zwift-gradient-text">Zwift climb</span> actually take you?
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-6 max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Put in your weight and the power you can hold, and get a realistic finishing time for Zwift's big
                climbs - then read why the number comes out where it does. Nothing here is behind a login, nothing is
                sponsored, and every equation the site uses is written out in the open so you can check it.
              </p>
            </AnimatedText>

            <AnimatedText delay={400} className="mt-9">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <AnimatedButton to="/alpeduzwiftcalculator" variant="primary" size="lg" icon={<Calculator size={20} />}>
                  Alpe du Zwift Calculator
                </AnimatedButton>
                <AnimatedButton to="/blog" variant="outline" size="lg" icon={<BookOpen size={20} />}>
                  Read the Library
                </AnimatedButton>
              </div>
            </AnimatedText>
          </div>

          {/* Hero image */}
          <AnimatedText delay={500} className="mt-12 mx-auto max-w-5xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-zwift-orange/20 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="/lovable-uploads/d4903085-9006-4d56-9c7a-27c2978bea52.webp"
                alt="Riders climbing a neon-lit virtual road in Zwift's Watopia"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/10 object-cover aspect-[16/9]"
                width={1600}
                height={900}
                loading="eager"
                {...{ fetchpriority: "high" }}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                <p className="text-xl md:text-2xl font-bold">Watopia, France, Makuri, London</p>
                <p className="text-sm md:text-base text-white/80">
                  The same physics applies everywhere. Only the gradient changes.
                </p>
              </div>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Tools */}
      <section className="py-14 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              The <span className="zwift-gradient-text">calculators</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Each one runs entirely in your browser. Nothing you type is sent anywhere, stored, or attached to an
              account, because there are no accounts.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <AnimatedCard key={tool.path} delay={index * 80}>
                  <Link to={tool.path} className="block h-full group">
                    <div className="h-full flex flex-col">
                      <div className={`h-12 w-12 rounded-full ${tool.background} flex items-center justify-center mb-4`}>
                        <Icon size={24} className={tool.accent} />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-zwift-orange transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{tool.description}</p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-zwift-orange group-hover:translate-x-1 transition-transform">
                        Open <ArrowRight size={14} className="ml-1.5" />
                      </span>
                    </div>
                  </Link>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reference table - original, computed from the site's own fit */}
      <section className="py-14 md:py-20 relative" id="alpe-reference">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Alpe du Zwift, at a glance</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every figure in this table comes straight out of the equation the{" "}
                <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
                  Alpe du Zwift calculator
                </Link>{" "}
                uses. It is here so you can sanity-check the tool against your own ride without opening it, and so you
                can see the shape of the curve rather than a single answer.
              </p>
            </AnimatedText>

            <AnimatedCard delay={200}>
              <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-sm border-collapse">
                  <caption className="sr-only">
                    Estimated Alpe du Zwift finishing times by power-to-weight ratio
                  </caption>
                  <thead>
                    <tr className="border-b-2 border-border text-left">
                      <th scope="col" className="py-3 pr-4 font-semibold text-foreground whitespace-nowrap">
                        W/kg
                      </th>
                      <th scope="col" className="py-3 pr-4 font-semibold text-foreground whitespace-nowrap">
                        Estimated time
                      </th>
                      <th scope="col" className="py-3 pr-4 font-semibold text-foreground whitespace-nowrap">
                        70 kg rider
                      </th>
                      <th scope="col" className="py-3 font-semibold text-foreground whitespace-nowrap">
                        85 kg rider
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {REFERENCE_ROWS.map((row) => (
                      <tr
                        key={row.wkg}
                        className={`border-b border-border ${row.wkg === 3.2 ? "bg-zwift-orange/5" : ""}`}
                      >
                        <td className="py-3 pr-4 font-mono font-semibold text-foreground">{row.wkg.toFixed(1)}</td>
                        <td className="py-3 pr-4 font-mono text-foreground">{row.time}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{row.wattsAt70} W</td>
                        <td className="py-3 text-muted-foreground">{row.wattsAt85} W</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                The highlighted row is the one most people are chasing: roughly 3.2 W/kg is what it takes to get under
                the hour. Notice how unevenly the time is spread. Going from 2.5 to 3.0 W/kg buys far more than going
                from 4.5 to 5.0 does, which is exactly why the first year of training feels so much more rewarding
                than the fifth.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-14 md:py-20 relative" id="how-it-works">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">How the estimate is made</h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    There are two honest ways to predict a climb time. You can model the physics from first principles
                    - add up the force of gravity, rolling resistance and air drag, divide the rider's power by the
                    total, and solve for speed. Or you can take a large set of real finishing times, pair each one
                    with the rider's power-to-weight ratio, and fit a curve through them.
                  </p>
                  <p>
                    The first method is transparent but needs values that Zwift has never published: the exact drag
                    area it assigns your avatar, the rolling resistance of each surface, how it handles rider height.
                    The second method sidesteps all of that, because whatever the game is doing internally is already
                    baked into the times people actually ride. The Alpe du Zwift calculator on this site takes the
                    second route.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">The equation, written out</h3>
                    <div className="bg-muted/60 rounded-lg p-4 font-mono text-sm text-foreground overflow-x-auto">
                      time_seconds = 148.60 &times; (W/kg)&sup2; &minus; 1954.08 &times; (W/kg) + 8329.87
                    </div>
                    <p className="mt-4">
                      That is the whole model. A 75 kg rider holding 250 W is at 3.33 W/kg. Put that in: 148.60 &times;
                      11.09 is about 1,648; 1954.08 &times; 3.33 is about 6,507; so the estimate is 1,648 &minus; 6,507
                      + 8,330, which is about 3,471 seconds, or {formatMinutes(alpeSeconds(250 / 75))}. You can do that
                      on a phone calculator, which is the point - a model you cannot check is a model you should not
                      trust.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Why the curve bends</h3>
                    <p>
                      On a gradient this steep, almost all of your power is going into lifting your own mass. Air drag
                      barely matters at 10 to 15 km/h. That makes vertical speed close to proportional to power per
                      kilogram, which is why W/kg, and not raw watts, is the number that decides the outcome. A 60 kg
                      rider at 240 W will beat an 85 kg rider at 300 W up the Alpe, despite producing a quarter less
                      power.
                    </p>
                    <p className="mt-3">
                      The relationship is not a straight line, though, because time is the inverse of speed. Doubling
                      your speed halves your time, so the same absolute gain in W/kg saves progressively less time the
                      faster you already are. The quadratic term is what captures that flattening across the range most
                      riders actually sit in. There is more on the fitting process in{" "}
                      <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">
                        the methodology write-up
                      </Link>{" "}
                      and on the physics in{" "}
                      <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">
                        the power-to-weight deep dive
                      </Link>
                      .
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">What it cannot know</h3>
                    <p>
                      The estimate assumes you hold that power steadily for the whole climb. It has no idea whether you
                      went out at 4 W/kg and cracked at hairpin fourteen, whether your trainer is reading 5% high,
                      whether you picked the heaviest bike in your garage, or whether the room is 28 degrees with no
                      fan. Those things are worth more minutes than most riders expect - the article on{" "}
                      <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">
                        pacing the Alpe
                      </Link>{" "}
                      goes through each of them.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-14 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-orange/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <img
                      src="/CLD_billede_4.jpg"
                      alt="Christian Lassen Dam, who builds and writes ZwiftCalculator.com"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-zwift-orange/20"
                      width={160}
                      height={160}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                      One person builds this, and he signs his name to it
                    </h2>
                    <p className="text-sm font-semibold text-zwift-orange mb-4">
                      {AUTHOR.name} - MSc student in Mechanical Engineering, Aalborg University
                    </p>

                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        I started this site because I wanted to know my own Alpe du Zwift time before I rode it, and
                        the answers I found online were either a shrug or a number with no working shown. So I built
                        the spreadsheet, and then the spreadsheet became a website.
                      </p>
                      <p>
                        Mechanical engineering is where the physics side comes from - forces, drag and rolling
                        resistance are coursework rather than a hobby. The rest comes from riding: enough hours in
                        Zwift to have earned the Tron bike, and a season of Ironman-distance training that has taught
                        me a lot about what structured work does and does not deliver.
                      </p>
                      <p>
                        I am not a certified coach and I am not a sports scientist, and I would rather say that plainly
                        than imply otherwise. What I can offer is a clearly explained model, honest limits on it, and a
                        correction the same week if you show me it is wrong.
                      </p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                        <Link
                          to="/author"
                          className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
                        >
                          More about me <ArrowRight size={16} className="ml-1.5" />
                        </Link>
                        <Link
                          to="/editorial-policy"
                          className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
                        >
                          How this site is run <ArrowRight size={16} className="ml-1.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="py-14 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest from the <span className="zwift-gradient-text">library</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              {blogPosts.length} articles on training, racing, equipment and the physics underneath all of it.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {latestPosts.map((post, index) => (
              <AnimatedCard key={post.slug} delay={index * 80}>
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
                        <span className="flex items-center text-xs text-zwift-orange group-hover:translate-x-1 transition-transform">
                          Read More
                          <ArrowRight size={14} className="ml-2" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center">
            <AnimatedButton to="/blog" variant="primary" size="lg" icon={<BookOpen size={20} />}>
              Browse all {blogPosts.length} articles
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">How this site works</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                No accounts, no paywall, no affiliate links. Here is the whole arrangement.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedCard delay={100}>
                <div className="h-full">
                  <ShieldCheck size={28} className="text-zwift-green mb-3" />
                  <h3 className="font-bold text-lg mb-2">Your numbers stay with you</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every calculator runs in your browser. Your weight and power are never transmitted, stored, or tied
                    to an identity. Details are in the{" "}
                    <Link to="/privacy-policy" className="text-zwift-orange hover:underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={200}>
                <div className="h-full">
                  <Scale size={28} className="text-zwift-blue mb-3" />
                  <h3 className="font-bold text-lg mb-2">Ads pay for it, and nothing else does</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hosting is covered by display advertising. There are no sponsored articles and no affiliate links,
                    so nothing you read here is written to sell you a trainer. The{" "}
                    <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
                      editorial policy
                    </Link>{" "}
                    spells out the boundaries.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={300}>
                <div className="h-full">
                  <Calculator size={28} className="text-zwift-orange mb-3" />
                  <h3 className="font-bold text-lg mb-2">Corrections get made</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If a result does not match what you actually rode, send the numbers over. Reader reports are the
                    main way the fits get better.{" "}
                    <Link to="/contact" className="text-zwift-orange hover:underline">
                      Get in touch
                    </Link>{" "}
                    or check the{" "}
                    <Link to="/faq" className="text-zwift-orange hover:underline">
                      FAQ
                    </Link>{" "}
                    first.
                  </p>
                </div>
              </AnimatedCard>
            </div>

            <div className="mt-10 text-center text-sm text-muted-foreground">
              <p>
                ZwiftCalculator.com is an independent project and is not affiliated with, endorsed by, or sponsored by
                Zwift Inc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
