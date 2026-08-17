import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, BarChart3, Sigma, AlertTriangle, Search, Send } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostsByCategory, displayDate } from "@/data/blogPosts";

const marginalGains = [
  { power: "200 W", wkg: "2.67", time: "69:32", saved: "-" },
  { power: "225 W", wkg: "3.00", time: "63:25", saved: "6:07" },
  { power: "250 W", wkg: "3.33", time: "57:51", saved: "5:34" },
  { power: "275 W", wkg: "3.67", time: "52:40", saved: "5:11" },
  { power: "300 W", wkg: "4.00", time: "48:11", saved: "4:29" },
  { power: "325 W", wkg: "4.33", time: "44:15", saved: "3:56" },
  { power: "350 W", wkg: "4.67", time: "40:45", saved: "3:30" },
  { power: "375 W", wkg: "5.00", time: "37:54", saved: "2:51" },
  { power: "400 W", wkg: "5.33", time: "35:36", saved: "2:18" },
];

const workedExample = [
  { step: "1. Power to weight", detail: "250 ÷ 75 = 3.33 W/kg" },
  { step: "2. Square it", detail: "3.33² = 11.0889" },
  { step: "3. Quadratic term", detail: "148.60 × 11.0889 = 1,647.81" },
  { step: "4. Linear term", detail: "1,954.08 × 3.33 = 6,507.09" },
  { step: "5. Add the three terms", detail: "1,647.81 - 6,507.09 + 8,329.87 = 3,470.59 seconds" },
  { step: "6. Convert to minutes", detail: "3,470.59 ÷ 60 = 57.84 minutes, or 57 minutes and 51 seconds" },
];

const CategoryDataAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [...getPostsByCategory("Data Analysis")].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-6" />
          </div>

          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-purple-500 shadow-sm border border-purple-100 dark:border-purple-900/20 mb-6">
                <BarChart3 size={16} className="text-purple-500" />
                <span>Data Analysis Category</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Data Analysis: <span className="zwift-gradient-text">Showing The Working</span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-6 max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Every number this site prints comes out of an equation, and every equation comes out of
                data with limits. This page is where I show that equation, work one prediction through by
                hand, and say plainly where the model stops being trustworthy.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* What a model is + the equation */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  What a model of a climb actually is
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    When this site predicts your Alpe du Zwift time, it is not simulating your ride. There
                    is no virtual rider inside the code with a frontal area, a rolling resistance
                    coefficient and a gravity term. That kind of first-principles physics model is a
                    perfectly reasonable way to attack the problem, but it needs inputs almost nobody
                    measures: your CdA sitting up at 11 km/h, the drivetrain loss in your specific trainer,
                    the exact gradient your avatar saw through each of the 21 hairpins.
                  </p>

                  <p>
                    What this site uses instead is a fitted model. Take a set of climbs where both the
                    finishing time and the power-to-weight ratio are known, plot time against W/kg, and
                    find the curve that runs closest to those points. The curve is descriptive, not
                    explanatory. It does not know why a rider at 4 W/kg finishes when they do. It knows
                    that riders around 4 W/kg have historically finished around a certain time, and it
                    interpolates between the points it was given.
                  </p>

                  <p>
                    That distinction matters more than it sounds. A physics model goes wrong when one of
                    its coefficients is wrong. A fitted model goes wrong when the ride you are asking
                    about is nothing like the rides it was fitted to. The long version of how the fitting
                    was done is in{" "}
                    <Link to="/blog/regression-analysis-methodology" className="text-purple-500 hover:underline font-medium">
                      the regression methodology article
                    </Link>
                    , and the ride-level patterns behind it are in{" "}
                    <Link to="/blog/the-data-behind-zwift-climbing" className="text-purple-500 hover:underline font-medium">
                      the data behind Zwift climbing
                    </Link>
                    .
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 text-foreground flex items-center gap-2">
                  <Sigma size={22} className="text-purple-500" />
                  The equation this site uses
                </h3>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Here it is in full. This is the same expression that drives the{" "}
                    <Link to="/alpeduzwiftcalculator" className="text-purple-500 hover:underline font-medium">
                      Alpe du Zwift calculator
                    </Link>
                    , not a simplified version of it:
                  </p>

                  <div className="rounded-xl border-2 border-purple-500/30 bg-purple-500/5 p-5 md:p-6 text-center">
                    <code className="text-sm md:text-base font-mono text-foreground break-words">
                      time_seconds = 148.60 × (W/kg)² - 1954.08 × (W/kg) + 8329.87
                    </code>
                  </div>

                  <p>
                    Three constants, one input. Take a 75 kg rider holding 250 W for the whole climb and
                    work it through step by step, so you can check the calculator by hand rather than
                    trusting it.
                  </p>

                  <ol className="space-y-3">
                    {workedExample.map((row) => (
                      <li key={row.step} className="rounded-lg border bg-muted/40 px-4 py-3">
                        <span className="block font-semibold text-foreground">{row.step}</span>
                        <span className="block font-mono text-sm mt-1">{row.detail}</span>
                      </li>
                    ))}
                  </ol>

                  <p>
                    Type 75 kg and 250 W into the calculator and it returns 57.8 minutes. Nothing happens
                    between the input box and the answer except that arithmetic. If you want the same
                    treatment for the longer climb, the{" "}
                    <Link to="/ventop-calculator" className="text-purple-500 hover:underline font-medium">
                      Ven-Top calculator
                    </Link>{" "}
                    uses its own fit, and{" "}
                    <Link to="/alpe-vs-ventop" className="text-purple-500 hover:underline font-medium">
                      the side-by-side comparison
                    </Link>{" "}
                    runs both at once.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Why the curve bends */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Why the curve bends instead of running straight
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The fair question is why the equation carries a squared term at all, when a straight
                    line is simpler and easier to fit. The reason is exposure time. Alpe du
                    Zwift is 12.2 km with 1,036 m of elevation gain, averaging roughly 8.5% across 21
                    hairpins. At 2.7 W/kg you are on that mountain for well over an hour, so 25 extra watts
                    get applied for seventy-odd minutes and buy a lot of elapsed time. At 5.3 W/kg the same
                    25 W are applied for about half as long, and there is correspondingly less clock left
                    for them to take away.
                  </p>

                  <p>
                    Run the same 75 kg rider up the climb in 25 W steps and the pattern is obvious. The
                    right-hand column is the time saved by that step compared with the row above it.
                  </p>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 text-left text-foreground">
                        <th className="py-2 pr-4 font-semibold">Power</th>
                        <th className="py-2 pr-4 font-semibold">W/kg</th>
                        <th className="py-2 pr-4 font-semibold">Predicted time</th>
                        <th className="py-2 font-semibold">Saved by this step</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      {marginalGains.map((row) => (
                        <tr key={row.power} className="border-b last:border-0">
                          <td className="py-2 pr-4 font-mono">{row.power}</td>
                          <td className="py-2 pr-4 font-mono">{row.wkg}</td>
                          <td className="py-2 pr-4 font-mono">{row.time}</td>
                          <td className="py-2 font-mono text-purple-500">{row.saved}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed mt-6">
                  <p>
                    If you want the exact rate at any point, differentiate the equation: the slope is
                    297.2 × (W/kg) - 1954.08 seconds per W/kg. At 3.33 W/kg that comes to about 964
                    seconds saved per extra W/kg, which for a 75 kg rider is 12.9 seconds per watt. At
                    5.00 W/kg the same calculation gives 6.2 seconds per watt.
                  </p>

                  <p>
                    The first 25 W buys six minutes. The last 25 W buys two minutes and eighteen seconds,
                    for exactly the same training effort. A straight-line fit would have promised the same
                    saving at every step, which would overstate the payoff for strong riders, understate it
                    for everyone starting out, and eventually predict a negative finishing time. The
                    quadratic term is doing real work here, and it is also the number that should shape
                    your expectations: the closer you already are to your ceiling, the more power a given
                    time saving costs.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <AlertTriangle size={28} className="text-purple-500 flex-shrink-0" />
                  Where the model stops being trustworthy
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    A fitted curve is only as honest as the boundaries you put around it. Four limits are
                    worth stating out loud.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      It only interpolates inside the range it was fitted to
                    </h3>
                    <p>
                      The equation was fitted to observed climbs in the normal amateur band, and it gets
                      shakier the further you move outside that band. There is even a hard mathematical
                      edge: the parabola turns around at 1,954.08 ÷ (2 × 148.60) = 6.57 W/kg, where it
                      predicts about 31:46. Push past that point and the equation claims more power makes
                      you slower, which is nonsense. That is not a claim about cycling, it is what
                      extrapolation does to any curve fit. The calculator refuses to print a time at all
                      above 7.5 W/kg, which is past anything anyone has recorded.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">It assumes steady power</h3>
                    <p>
                      The input is a single average. A rider who opens at 320 W, blows up on the middle
                      hairpins and crawls home at 210 W can average the same 250 W as someone who sat
                      locked on 250 W the whole way, and they will not finish together. The one who paced
                      it evenly is usually faster, and the equation cannot see the difference: both rides
                      get the same prediction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      It cannot see anything about you
                    </h3>
                    <p>
                      Pacing discipline, whether you had somebody to chase, how well your trainer is
                      calibrated, whether you started the climb fresh or 90 minutes into a group ride.
                      None of it enters the equation. Those factors are real and they are worth minutes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">It prints a point, not a range</h3>
                    <p>
                      The output looks precise because it is a single number with a decimal on it. Treat
                      it as the middle of a spread rather than a promise. If it says 57.8 minutes and you
                      ride 59:40, the model was not badly wrong and neither were you. The same caveat
                      applies to every other climb estimate on{" "}
                      <Link to="/zwift-climbs" className="text-purple-500 hover:underline font-medium">
                        the Zwift climbs pages
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Reading numbers critically */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Search size={28} className="text-purple-500 flex-shrink-0" />
                  How to read any performance number critically
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    This applies to my numbers as much as to anyone else's. Three questions do most of the
                    work.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">How many rides is it built on?</h3>
                    <p>
                      A relationship drawn from twenty rides and one drawn from two thousand look identical
                      once somebody plots them as a smooth line. The line hides the sample. If a claim does
                      not come with a count, treat the shape of the curve as a rough guide rather than a
                      measurement, and be especially wary at the ends where data is always thinnest.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Who decided which rides you see?</h3>
                    <p>
                      Public climb times are the times riders chose to publish, and people publish their
                      good days. Nobody uploads the attempt where they cracked at hairpin 14 and soft
                      pedalled the last 3 km. Any model fitted to public results is therefore fitted to a
                      sample of successful attempts, which nudges its predictions optimistic. That is a
                      structural bias, not a rounding error, and no amount of extra data fixes it if the
                      data keeps arriving through the same filter.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Is there a mechanism, or just a correlation?</h3>
                    <p>
                      W/kg predicts climbing time well because there is a mechanism underneath it: on an
                      8.5% average gradient almost all your power goes into lifting mass against gravity,
                      so watts per kilogram is close to the whole story. Compare that with a claim like
                      "riders using a particular frame climb faster". Maybe the frame helps, or maybe
                      faster riders are the ones who bother unlocking that frame. When you cannot name the
                      mechanism, you are looking at a pattern, not a cause. The standard I try to hold
                      myself to is written down in{" "}
                      <Link to="/editorial-policy" className="text-purple-500 hover:underline font-medium">
                        the editorial policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Contribute a data point */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2 border-purple-500/40">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Send size={28} className="text-purple-500 flex-shrink-0" />
                  Send me a data point
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    A fitted curve improves in exactly one way: more observations, especially from the
                    parts of the range where observations are scarce. If you ride Alpe du Zwift, three
                    numbers are enough to be useful. Your finishing time from the banner at the bottom to
                    the arch at the top, your average power for that segment, and your in-game weight.
                    Send them through{" "}
                    <Link to="/contact" className="text-purple-500 hover:underline font-medium">
                      the contact page
                    </Link>
                    .
                  </p>

                  <p>
                    The most valuable submissions are the awkward ones. Climbs under 45 minutes and climbs
                    over 75 minutes sit at the ends of the curve where it is weakest. Rides where you
                    deliberately went out too hard are useful too, because they show how much the steady
                    power assumption costs in practice.
                  </p>

                  <p>
                    I am not going to dress this up as a laboratory study. It is a curve fitted to rides
                    that riders chose to share, published with its equation visible so you can disagree
                    with it. If your times land consistently on one side of the prediction, tell me. If
                    enough of them do, the constants change. The rest of the archive is at{" "}
                    <Link to="/blog" className="text-purple-500 hover:underline font-medium">
                      the blog index
                    </Link>
                    .
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">
              Data Analysis Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <AnimatedCard key={post.slug} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-purple-500/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-purple-500/10 text-purple-500 rounded">
                            {post.category}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {displayDate(post.date)}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-purple-500 transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <div className="flex items-center text-xs text-purple-500 group-hover:translate-x-1 transition-transform">
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

export default CategoryDataAnalysis;
