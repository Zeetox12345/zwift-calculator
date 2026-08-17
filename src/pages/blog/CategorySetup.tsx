import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Droplets,
  Gauge,
  ListOrdered,
  Monitor,
  Mountain,
  Settings,
  Wifi,
  Wind,
} from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostsByCategory, displayDate } from "@/data/blogPosts";

/** Setup articles, newest first. */
const setupPosts = [...getPostsByCategory("Setup")].sort((a, b) => b.date.localeCompare(a.date));

const CategorySetup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-green/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-6" />
          </div>

          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-green shadow-sm border border-green-100 dark:border-green-900/20 mb-6">
                <Settings size={16} className="text-zwift-green" />
                <span>Setup Category</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Zwift <span className="zwift-gradient-text">Setup</span> & Equipment Guides
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-6 max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Cooling, power measurement, trainer modes and the connection stack, in the order they actually affect
                your riding. Most of what gets sold as an indoor upgrade changes nothing. A few cheap things change a
                lot.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-8 md:py-14 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-green/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <div className="flex items-center gap-3 mb-6">
                  <ListOrdered className="text-zwift-green flex-shrink-0" size={26} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">What actually matters, in order</h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The bike in your room does almost nothing for your Zwift speed. Zwift models the frame and wheels
                    you picked in the in-game garage, not the ones bolted to your trainer, so a lighter wheelset on the
                    indoor bike buys nothing. The ranking is short:
                  </p>

                  <ol className="space-y-3 list-decimal pl-5 marker:font-semibold marker:text-zwift-green">
                    <li>
                      <span className="font-semibold text-foreground">Airflow.</span> A fan you would describe as too
                      big is the correct size.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">A power number that is consistent.</span>{" "}
                      Consistent beats accurate.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">A connection that does not drop.</span>
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Sweat management</span>, which costs two minutes a
                      session.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">A screen and sound you can actually use.</span>
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">A position that matches your outdoor fit.</span>
                    </li>
                  </ol>

                  <p>
                    Everything below that line, the aero cockpit and the ceramic bearings and the expensive tape, is
                    comfort rather than speed. The shopping list version is in the{" "}
                    <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline font-medium">
                      Zwift setup guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Wind className="text-zwift-green flex-shrink-0" size={26} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Cooling is a power item, not a comfort item
                  </h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Cycling is an inefficient engine. Roughly a fifth to a quarter of the energy you burn comes out of
                    the pedals as power; the rest leaves as heat. A rider holding 250 W sheds close to a kilowatt of it
                    for as long as the effort lasts.
                  </p>
                  <p>
                    Outdoors that is solved for you: at 30 km/h you sit in a 30 km/h wind that strips sweat off your
                    skin as fast as you make it. Indoors your road speed is zero, the air does not move, it warms, and
                    it fills with the moisture you just produced. Sweat that runs off you instead of evaporating has
                    cooled you almost not at all, because the phase change removes the heat, not the wetness.
                  </p>
                  <p>
                    So core temperature climbs. Your body sends blood to the skin to dump it, leaving less volume for
                    the working muscles. Heart rate drifts up at the same power and the power you can hold falls. That
                    is why a workout that felt fine at 18&deg;C (64&deg;F) turns into a suffer-fest at 24&deg;C (75&deg;F). A
                    big fan is the only
                    upgrade that reliably moves your sustainable power. Buy the fan first, then buy the second fan.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Droplets className="text-zwift-green flex-shrink-0" size={26} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Sweat is corrosive and it lands in the worst place
                  </h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Sweat is salt water with a little acid in it. On the road it blows backwards off you. On a trainer
                    you are stationary and bent forward, so it lands on the stem, the top cap, the headset bearings
                    underneath, the bar tape and the top tube.
                  </p>
                  <p>
                    Those spots have everything corrosion needs: steel bolts threaded into aluminium, a bearing race in
                    a dark sealed space that never dries out, and salt, which keeps pulling moisture from the room long
                    after you stop. Left alone over a winter of four sessions a week, that means crusty bar tape, seized
                    stem bolts, a notchy headset and bubbling paint.
                  </p>

                  <div className="rounded-xl border-2 border-zwift-green/30 bg-zwift-green/5 p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">The two-minute routine</h3>
                    <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                      <li>
                        Before the ride, drape a thin towel over the bars, stem and top tube, and keep a second one for
                        your face.
                      </li>
                      <li>
                        After it, wipe those parts with a damp cloth and dry them. Salt dissolves in plain water, and a
                        solvent only strips the finish.
                      </li>
                      <li>
                        Once a season, undo the top cap and stem bolts, grease the threads and reinstall to torque. Wipe
                        the trainer and the mat too.
                      </li>
                    </ul>
                  </div>

                  <p>
                    The long version is in{" "}
                    <Link
                      to="/blog/towels-during-zwifting-can-it-ruin-your-bike"
                      className="text-zwift-orange hover:underline font-medium"
                    >
                      towels during Zwifting
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Gauge className="text-zwift-green flex-shrink-0" size={26} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Where the power number comes from</h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>Zwift does not know what you are doing. It knows what one device told it.</p>
                  <p>
                    <span className="font-semibold text-foreground">A wheel-on trainer</span> usually has no strain
                    gauge. It reads power off a modelled resistance curve driven by roller speed, so everything in the
                    tyre-to-roller contact becomes a variable in your power: pressure, compound, clamp tension, rubber
                    temperature. Skip the spindown calibration and the same workout reads differently on Tuesday and
                    Thursday.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">A direct-drive trainer</span> removes the tyre: your
                    chain drives its cassette straight onto its own measurement. That sits downstream of your
                    drivetrain, so chain friction is already subtracted and a crank meter on the same bike reads a
                    little higher. Both can be right.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">A power meter</span> in the pedals, crank or spider
                    measures closest to where your legs make force. Left-only units double one leg, so an imbalance
                    becomes a permanent offset. Different measuring points and different smoothing are
                    why two devices can both sit inside their quoted accuracy and still be fifteen watts apart at
                    threshold.
                  </p>
                  <p>
                    That gap matters the moment you compare yourself to anyone else: a race result, a category boundary,
                    a friend's climb time. A source reading three percent high is free watts you never made. Feed it
                    into the{" "}
                    <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline font-medium">
                      Alpe du Zwift calculator
                    </Link>{" "}
                    and you get a time you cannot ride, or into the{" "}
                    <Link
                      to="/zwift-racing-category-calculator"
                      className="text-zwift-orange hover:underline font-medium"
                    >
                      racing category calculator
                    </Link>{" "}
                    and you land in the wrong bracket.
                  </p>
                  <p>
                    It matters much less if you only compare yourself to yourself. A consistently wrong number is still
                    useful: intervals, an{" "}
                    <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline font-medium">
                      FTP test
                    </Link>{" "}
                    and week-to-week progress all work as long as the bias holds still. Pick one source, set it in
                    Zwift, and stop switching mid-block.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Mountain className="text-zwift-green flex-shrink-0" size={26} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">ERG mode or simulation mode</h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    In ERG mode you name a power and the trainer holds it, adjusting resistance so gear and cadence barely
                    matter. For structured intervals that is excellent: no pacing decisions to get wrong, no drift below
                    target.
                  </p>
                  <p>
                    On a climb it is the wrong tool. A climb is a gradient problem: speed comes from power against your
                    weight on a slope, and the skill is picking a gear and cadence you can hold for fifty minutes. ERG
                    deletes that. Hairpins feel like straights, and if your cadence sags the trainer adds resistance to
                    defend the target, which sags it further. That is the spiral of death.
                  </p>
                  <p>
                    In simulation mode the game sends the gradient, the trainer turns it into resistance, and you shift
                    like a cyclist. Alpe du Zwift, 12.2 km and 1,036 m of gain at roughly 8.5% across 21 hairpins,
                    should be ridden that way, and so should Ven-Top at about 20.9 km and 1,480 m. There is a pacing
                    walkthrough in{" "}
                    <Link to="/blog/mastering-ven-top" className="text-zwift-orange hover:underline font-medium">
                      mastering Ven-Top
                    </Link>
                    .
                  </p>
                  <p>
                    One setting to know: Trainer Difficulty scales how much of the modelled gradient the trainer
                    applies, and it defaults to 50%. It changes how the climb feels, not your speed in the game.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Wifi className="text-zwift-green flex-shrink-0" size={26} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    The connection stack and how it fails
                  </h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Three ways your trainer talks to Zwift. ANT+ broadcasts through a USB dongle and any number of
                    receivers can listen at once. Bluetooth connects directly to the device running Zwift, and plenty of
                    hardware holds only one link at a time. Zwift Companion bridges Bluetooth sensors from your phone to
                    the machine running the game.
                  </p>
                  <p>The failure modes are boring, repeatable, and they cost people races:</p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>
                      Something else grabbed the Bluetooth channel first: the manufacturer's app in the background, a
                      bike computer set to auto-connect, a second phone on the shelf.
                    </li>
                    <li>
                      The Companion bridge dies mid-effort. The screen locks, battery saver kills the background link,
                      or phone and computer sit on different Wi-Fi bands. Your power reads zero and you drift backwards.
                    </li>
                    <li>
                      The ANT+ dongle sits in a USB 3.0 port behind a metal tower. USB 3.0 radiates noise in the 2.4 GHz
                      band ANT+ uses, so use USB 2.0 and an extension cable.
                    </li>
                    <li>A firmware update prompt three minutes before the pen closes.</li>
                  </ul>
                  <p>
                    So pair straight to the device running Zwift and keep Companion for the controls, not the data.
                    Close the manufacturer app, turn off auto-connect on your head unit, and pair well before the start,
                    not in the pen. Latency is a separate problem, covered in{" "}
                    <Link to="/blog/zwift-network-performance" className="text-zwift-orange hover:underline font-medium">
                      Zwift network performance
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Monitor className="text-zwift-green flex-shrink-0" size={26} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Screen, sound, and where the fan actually points
                  </h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Put the screen at eye level or slightly below, close enough to read your power without leaning
                    forward; if you have to squint at the number you will ride the scenery instead of the target. Sound
                    has to beat the trainer and the fan, and a cheap speaker usually wins, because headphones and a face
                    full of sweat are a short-lived combination.
                  </p>
                  <p>
                    The fan needs to hit your face and chest, not your shins. Blood runs close to the surface at the
                    face, neck and chest, and that is where the sweat film is thickest, so that is where moving air
                    removes the most heat. Mount it at bar height or above and angle it down. A second fan low and
                    behind, aimed at your back, is the best cheap follow-up there is. Open a door or a window too, or
                    the fan just recirculates warm, saturated air.
                  </p>
                  <p>
                    The articles below go deeper. The{" "}
                    <Link to="/faq" className="text-zwift-orange hover:underline font-medium">
                      FAQ
                    </Link>{" "}
                    answers common trainer and calculator questions, and the rest sits on the{" "}
                    <Link to="/blog" className="text-zwift-orange hover:underline font-medium">
                      blog
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Setup articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {setupPosts.map((post, index) => (
                <AnimatedCard key={post.slug} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-green/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-zwift-green/10 text-zwift-green rounded">
                            Setup
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {displayDate(post.date)}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-zwift-green transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <div className="flex items-center text-xs text-zwift-green group-hover:translate-x-1 transition-transform">
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

export default CategorySetup;
