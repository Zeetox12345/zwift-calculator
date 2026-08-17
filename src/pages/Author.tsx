import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Bike,
  BookOpen,
  Bot,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Mountain,
  Wrench,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import { AUTHOR, ORGANIZATION, SITE } from "@/lib/siteConfig";

const linkClass =
  "text-zwift-orange hover:text-zwift-orange/80 underline underline-offset-2 font-medium";

const atAGlance = [
  {
    icon: Bike,
    title: "Who",
    body: "Christian Lassen Dam, 25. I build, write and maintain every page on ZwiftCalculator.com. There is no editorial team behind me.",
  },
  {
    icon: MapPin,
    title: "Where",
    body: `Aalborg, Denmark. The site is published through my company ${ORGANIZATION.legalName}, CVR ${ORGANIZATION.registrationNumber}, ${ORGANIZATION.street}, ${ORGANIZATION.postalCode} ${ORGANIZATION.city}.`,
  },
  {
    icon: GraduationCap,
    title: "Studying",
    body: "MSc in Mechanical Engineering at Aalborg University. Statics, dynamics, fluid mechanics and numerical methods are the day job, not a weekend interest.",
  },
  {
    icon: Mountain,
    title: "Riding",
    body: "Zwift year round, currently training for a full-distance Ironman with Ironman Copenhagen as the target race. I ride the Tron bike.",
  },
];

const Author = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-6" />

            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <img
                  src="/CLD_billede_4.jpg"
                  alt="Christian Lassen Dam, author of ZwiftCalculator.com"
                  width={224}
                  height={224}
                  className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-zwift-orange/20"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <AnimatedText delay={100}>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    <span className="zwift-gradient-text">{AUTHOR.name}</span>
                  </h1>
                </AnimatedText>
                <AnimatedText delay={200}>
                  <p className="mt-3 text-lg font-medium text-foreground">
                    Mechanical engineering MSc student, training for a full-distance Ironman, and
                    the single author behind every calculator and article on this site.
                  </p>
                </AnimatedText>
                <AnimatedText delay={300}>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    I started this site because I wanted a straight answer to a simple question:
                    if I hold 4.0 W/kg up Alpe du Zwift, how long will it take me? The answers I
                    found online were guesses. So I built the tool, and then I wrote down how it
                    works so you can decide whether to trust it.
                  </p>
                </AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">At a glance</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {atAGlance.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedCard key={item.title} delay={100 * index} className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 flex-shrink-0 rounded-full bg-zwift-orange/10 flex items-center justify-center">
                        <Icon size={22} className="text-zwift-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText delay={100}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap size={30} className="text-zwift-orange flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Why I am qualified to write about this
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Three things overlap here, and none of them on its own would be enough.
                    </p>

                    <p>
                      <strong className="text-foreground">The engineering.</strong> I am doing an
                      MSc in Mechanical Engineering at Aalborg University. Everything a cycling
                      calculator does is a force balance: gravity pulling a rider and bike down a
                      slope, rolling resistance at the contact patch, aerodynamic drag rising with
                      the square of speed, and the drivetrain losing a few percent on the way
                      through. Resolving forces, fitting a curve to noisy measurements, checking
                      whether a model still behaves at the edges of its input range - that is
                      coursework I get graded on, not something I picked up from a forum thread. It
                      is also why I am comfortable saying when a model breaks, which is the part
                      most calculators skip. I wrote the long version of this in{" "}
                      <Link to="/blog/the-mechanical-engineering-of-zwift-performance" className={linkClass}>
                        the mechanical engineering of Zwift performance
                      </Link>
                      .
                    </p>

                    <p>
                      <strong className="text-foreground">The riding volume.</strong> I have been
                      on Zwift for years and I ride the Tron bike. You cannot buy that bike. You
                      unlock it by finishing Zwift's Everest challenge, which means climbing 50,000
                      vertical metres in game. Alpe du Zwift gains 1,036 m per ascent, so that is
                      the equivalent of a little over 48 laps of the Alpe. I mention it because it
                      is the only honest proof of volume I have: it does not make me fast, it means
                      I have spent a very large number of hours inside the thing I am writing
                      about. I know what a Zwift race actually feels like in the first two minutes,
                      how the draft behaves in a big group, and why your in-game weight matters more
                      than almost anything else you fiddle with.
                    </p>

                    <p>
                      <strong className="text-foreground">The structured training.</strong> I am
                      training for a full-distance Ironman, with Ironman Copenhagen as the goal
                      race. That is where the training side of the site comes from: building a
                      week around two hard sessions instead of seven medium ones, protecting the
                      long ride, fuelling a four-hour indoor block, and fitting all of it around a
                      degree. Fitting it around a degree is its own problem, and I wrote about that
                      in{" "}
                      <Link to="/blog/having-time-to-zwift-during-university" className={linkClass}>
                        having time to Zwift during university
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="mt-8 rounded-xl border-2 border-zwift-orange/30 bg-zwift-orange/5 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle size={22} className="text-zwift-orange flex-shrink-0" />
                      <h3 className="text-xl font-bold text-foreground">
                        What I am not qualified to advise on
                      </h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        I am a student and an enthusiast. I am not a certified coach, a physiologist,
                        a physiotherapist or a dietitian, and I have no sports science degree. I say
                        that here rather than burying it, because the difference matters when you
                        decide how much weight to give something you read on this site.
                      </p>
                      <p>
                        So: nothing here is medical advice. If you have chest pain, unexplained
                        breathlessness, dizziness on the bike or a heart rate that behaves strangely,
                        stop reading calculators and see a doctor. I cannot diagnose knee pain,
                        saddle sores, tendon problems or an injury that is not getting better - that
                        is a physiotherapist or a sports doctor, and a proper bike fit in person.
                        I cannot write your individual training plan or your race-day nutrition, and
                        I would not trust anyone who offered to do that from a web form without
                        knowing your history. What I can do is explain the physics, show you the
                        data the numbers came from, and be clear about the range where a model is
                        useful.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText delay={100}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <LineChart size={30} className="text-zwift-orange flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      How I research and build
                    </h2>
                  </div>

                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Where the numbers come from
                      </h3>
                      <p>
                        Three kinds of source, in this order of trust. First, physics I can derive
                        or check myself, because a force balance does not care who published it.
                        Second, in-game measurements: route length, elevation gain and gradient
                        profiles, cross-checked between what the game reports, what community
                        route databases such as ZwiftInsider list, and what my own rides record.
                        Third, public performance data, mainly finishing times from ZwiftPower,
                        which is where the fitted curves come from. When a source disagrees with
                        another source, I say so on the page instead of quietly picking the number
                        I like.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        From raw finishing times to a published equation
                      </h3>
                      <p>
                        The Alpe du Zwift calculator is the clearest example. Start with a set of
                        real ascents, each one a pair: the rider's power-to-weight ratio, and the
                        time they took over the 12.2 km and 1,036 m of the climb. Clean that set
                        first, because raw results are full of noise - runs that started partway up
                        the climb, obviously wrong in-game weights, times that would imply a speed
                        the physics cannot produce on an 8.5% average gradient. Then plot time
                        against W/kg and look at the shape. It is not a straight line. Going from
                        2.0 to 3.0 W/kg buys you far more time than going from 5.0 to 6.0, because
                        you are fighting gravity and gravity does not get cheaper.
                      </p>
                      <p className="mt-4">
                        A second-degree polynomial fitted by least squares captures that curve
                        without pretending to more precision than the data supports. The result is
                        the equation the{" "}
                        <Link to="/alpeduzwiftcalculator" className={linkClass}>
                          Alpe du Zwift calculator
                        </Link>{" "}
                        actually runs:
                      </p>
                      <div className="my-4 rounded-lg bg-muted/60 border border-border p-4 font-mono text-sm md:text-base text-foreground overflow-x-auto">
                        time (seconds) = 148.60 × (W/kg)² - 1954.08 × (W/kg) + 8329.87
                      </div>
                      <p>
                        Put 3.0 W/kg in and you get 3,805 seconds, or 1:03:25. At 4.0 W/kg it is
                        48:11, and at 5.0 W/kg it is 37:54. That first extra watt per kilo is worth
                        15 minutes and 14 seconds. The next one is worth 10 minutes and 17 seconds.
                        For a 75 kg rider both steps cost the same 75 watts, and that gap between
                        them is the whole point of showing the curve rather than a rule of thumb. I
                        walked through the fitting process in detail in{" "}
                        <Link to="/blog/regression-analysis-methodology" className={linkClass}>
                          the regression analysis methodology article
                        </Link>
                        , and the underlying data in{" "}
                        <Link to="/blog/the-data-behind-zwift-climbing" className={linkClass}>
                          the data behind Zwift climbing
                        </Link>
                        .
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        How I check a result before it goes live
                      </h3>
                      <p>
                        Four checks, every time. Does it match reality at the anchor points - if I
                        put my own W/kg in, does it return roughly the time I actually ride? Does it
                        stay sane across the whole input range a real person might type? Does it
                        agree with a rough physics estimate from gravity alone, which for a long
                        steady climb should land in the same neighbourhood? And does the trend
                        behave: more power always has to mean less time.
                      </p>
                      <p className="mt-4">
                        That last check is the one that finds problems, and it found one here. A
                        quadratic curve has a turning point, and this one sits at about 6.6 W/kg.
                        Above that the equation starts predicting slower times for more power,
                        which is nonsense. So the model is honest only below roughly 6.5 W/kg. At
                        that ceiling the equation returns about 31 minutes 47 seconds, so the
                        caveat only bites on efforts nobody sustains: it is not a practical problem
                        - but you should know it is there, and now you do. That is the standard I
                        try to hold: tell you where the tool stops working, not just what number it
                        prints.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        What I do when I get something wrong
                      </h3>
                      <p>
                        I fix it, and I do not pretend it was never there. If a number is wrong, I
                        correct the page. If the correction changes a conclusion rather than a
                        typo, I note what changed. If a reader emails me a better figure or points
                        out that Zwift has changed a route, that goes on the list and gets checked
                        against a source before anything moves. The full version of these rules,
                        including how corrections and any commercial relationships are handled,
                        lives in the{" "}
                        <Link to="/editorial-policy" className={linkClass}>
                          editorial policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* AI disclosure */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-green/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText delay={100}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Bot size={30} className="text-zwift-orange flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      How I use AI, and where I do not
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I use language models when I write. It would be dishonest to run a site like
                      this today and pretend otherwise, so here is exactly what that means.
                    </p>
                    <p>
                      <strong className="text-foreground">Where I use them.</strong> Drafting and
                      structuring long articles, turning a messy set of notes into an outline,
                      tightening a paragraph that has gone baggy, catching the third time I have
                      made the same point, and doing the boring parts of building pages. On a
                      2,000-word article that is genuinely useful, and it is why this site has more
                      written explanation behind its numbers than it otherwise would.
                    </p>
                    <p>
                      <strong className="text-foreground">Where I do not.</strong> Not for the
                      numbers. The equations, the regression fits, the climb data, the worked
                      examples and every conclusion drawn from them are mine, and each one is
                      checked by a human - me - before it is published. A model does not decide
                      that a quadratic is the right shape for the Alpe data, does not get to state
                      that the climb gains 1,036 m, and does not get to tell you what a result
                      means for your training. I also will not let a model hand me a citation. If I
                      cannot find the source myself and confirm it is real and live, the claim
                      either comes out or gets rewritten as my own reasoning, clearly labelled as
                      such.
                    </p>
                    <p>
                      <strong className="text-foreground">Where the judgement sits.</strong> With
                      me, at four specific points: what gets published at all, which numbers go in,
                      which caveats travel with them, and when something already published turns
                      out to be wrong. Nothing goes live that I could not defend if a reader
                      emailed me and asked where it came from. Google's guidance on this is
                      reasonable and I agree with it - the problem was never that a tool helped
                      with the writing, it is unchecked, unedited output shipped at volume with
                      nobody accountable for it. My name and my email are on every page precisely
                      so that there is somebody accountable.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Current work */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText delay={100}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Wrench size={30} className="text-zwift-orange flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      What I am working on
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The two climb calculators are the core of the site. The{" "}
                      <Link to="/alpeduzwiftcalculator" className={linkClass}>
                        Alpe du Zwift calculator
                      </Link>{" "}
                      covers the 12.2 km, 1,036 m, 21-hairpin climb that most riders use as their
                      benchmark. The{" "}
                      <Link to="/ventop-calculator" className={linkClass}>
                        Ven-Top calculator
                      </Link>{" "}
                      covers Zwift's version of Mont Ventoux in the France world, roughly 20.9 km
                      and about 1,534 m of gain, which is a different problem entirely. At the same
                      W/kg the two models here put Ven-Top roughly 35 to 40% slower than the Alpe,
                      and once you are over the hour mark pacing and fuelling start to matter more
                      than raw W/kg. If you are choosing between them, the{" "}
                      <Link to="/alpe-vs-ventop" className={linkClass}>
                        Alpe versus Ven-Top comparison
                      </Link>{" "}
                      puts them side by side.
                    </p>
                    <p>
                      Around those sit the supporting tools -{" "}
                      <Link to="/zwift-ftp-calculator" className={linkClass}>
                        FTP estimation
                      </Link>{" "}
                      and{" "}
                      <Link to="/zwift-racing-category-calculator" className={linkClass}>
                        racing category
                      </Link>{" "}
                      - plus the{" "}
                      <Link to="/zwift-climbs" className={linkClass}>
                        Zwift climbs reference
                      </Link>
                      , which is exactly what it sounds like: length, elevation and average
                      gradient for the climbs people actually ride, in one table, so you do not
                      have to go looking. I would rather that page be short and correct than long
                      and half-verified, so it grows slowly.
                    </p>
                    <p>
                      The rest of my time goes into the{" "}
                      <Link to="/blog" className={linkClass}>
                        articles
                      </Link>
                      , which fall into four buckets:{" "}
                      <Link to="/blog/category/training" className={linkClass}>
                        training
                      </Link>
                      ,{" "}
                      <Link to="/blog/category/racing" className={linkClass}>
                        racing
                      </Link>
                      ,{" "}
                      <Link to="/blog/category/setup" className={linkClass}>
                        setup
                      </Link>{" "}
                      and{" "}
                      <Link to="/blog/category/data-analysis" className={linkClass}>
                        data analysis
                      </Link>
                      . The data analysis pieces are the ones I most want people to read, because
                      they show the working behind the calculators rather than just the output.
                      More on why the site exists at all is on the{" "}
                      <Link to="/about-us" className={linkClass}>
                        about page
                      </Link>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-8 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText delay={100}>
              <Card className="border-2 bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail size={30} className="text-zwift-orange flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Get in touch</h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      If a number looks wrong, tell me. Corrections are the most useful email I
                      get, and they are the reason the calculators have improved. Questions about
                      the method, requests for a climb I have not covered yet, or a note that Zwift
                      has changed something are all welcome too.
                    </p>
                    <p>
                      Write to{" "}
                      <a href={`mailto:${SITE.email}`} className={linkClass}>
                        {SITE.email}
                      </a>{" "}
                      or use the{" "}
                      <Link to="/contact" className={linkClass}>
                        contact page
                      </Link>
                      . I read everything myself. I answer most messages, though a training week
                      plus a degree means it is not always quick.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zwift-orange text-white hover:bg-zwift-orange/90 transition-all shadow-lg hover:shadow-xl font-semibold"
                    >
                      <Mail size={18} />
                      Contact me
                    </Link>
                    <Link
                      to="/editorial-policy"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-zwift-orange/40 text-foreground hover:border-zwift-orange transition-all font-semibold"
                    >
                      <BookOpen size={18} />
                      Editorial policy
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Author;
