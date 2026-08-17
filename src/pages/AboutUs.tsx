import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Mail,
  MapPin,
  Bike,
  Target,
  Sigma,
  Lock,
  ShieldCheck,
  Mountain,
  BookOpen,
  LineChart,
  Ban,
  Coins,
  FlaskConical,
} from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
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

            <div className="flex flex-col items-center text-center">
              <AnimatedText delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  About <span className="zwift-gradient-text">ZwiftCalculator.com</span>
                </h1>
              </AnimatedText>
              <AnimatedText delay={200} className="mt-6 max-w-2xl">
                <p className="text-lg md:text-xl text-muted-foreground">
                  An independent, one-person site that tells you what a Zwift climb will cost you before you start
                  pedalling, and shows you the equation it used to work that out.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Target size={32} className="text-zwift-orange" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why this site exists</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Every rider who turns onto the bottom of Alpe du Zwift is asking the same question: how long is
                      this going to take me? The climb is 12.2 km long, it gains 1,036 m, it averages roughly 8.5%, and
                      it makes you sit through 21 hairpins to get to the top. That is a long time to spend finding out
                      the hard way that you set off two tenths of a watt per kilo too hot.
                    </p>
                    <p>
                      This site answers that one question before you start. You give the{" "}
                      <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
                        Alpe du Zwift calculator
                      </Link>{" "}
                      your weight and the power you think you can hold, and it gives you back a finishing time you can
                      plan a ride around: whether to chase the sub-60 badge today or wait another training block,
                      whether you have time for the descent before dinner, what pace to hold in the first three
                      hairpins so the last three do not end you.
                    </p>
                    <p>
                      That is the whole product. Everything else here grew out of the follow-up questions people asked
                      after they got their first number: what does Ven-Top cost by comparison, what is my FTP really,
                      which category does that put me in, and how much faster would I be if I lost three kilos.
                    </p>

                    <h3 className="text-xl font-bold text-foreground pt-2">How it started</h3>
                    <p>
                      I am Christian Lassen Dam. I am 25, I live in Aalborg in northern Denmark, I am studying for an
                      MSc in Mechanical Engineering at Aalborg University, and I have been riding on Zwift long enough
                      to have ground out the ascents that unlock the Tron bike. Right now most of my training is
                      pointed at Ironman Copenhagen.
                    </p>
                    <p>
                      The first version of this calculator was a spreadsheet, and it was entirely selfish. I wanted to
                      know what the Alpe would cost me at a power I could actually hold, and I did not trust my own
                      guesswork. So I did the obvious engineering-student thing: collected finishing times, plotted
                      them against watts per kilogram, fitted a curve, and typed my own numbers into the cell. Then a
                      couple of riding friends asked me to run their numbers too. Sending screenshots of a spreadsheet
                      gets old fast, so I put the formula on a web page. The web page turned into this site.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <FlaskConical size={32} className="text-zwift-blue" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">How the calculators are built</h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      There is no secret model here and nothing to buy. The procedure is the same for every climb
                      calculator on the site, even where the fitted shape is not, and it is deliberately boring:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <span className="text-foreground font-semibold">Collect finishing times.</span> Real ascents,
                        each one paired with the rider's weight and the average power they held, converted into watts
                        per kilogram.
                      </li>
                      <li>
                        <span className="text-foreground font-semibold">Fit a curve.</span> The simplest shape that
                        survives contact with the data, chosen per climb rather than imposed on all of them. Alpe du
                        Zwift takes a second-order polynomial. Ven-Top takes an inverse, where the predicted time falls
                        as one over watts per kilogram.
                      </li>
                      <li>
                        <span className="text-foreground font-semibold">Check it against landmarks.</span> The fit has
                        to reproduce times riders already recognise. If it puts a 4.0 W/kg rider well away from where
                        4.0 W/kg riders actually finish, the fit is wrong, not the riders.
                      </li>
                      <li>
                        <span className="text-foreground font-semibold">Publish the equation.</span> The coefficients
                        are printed on the calculator page, so anyone can rebuild the result in a spreadsheet and check
                        my work.
                      </li>
                    </ol>

                    <div className="rounded-lg border-2 border-zwift-orange/30 bg-muted/50 p-4 md:p-5 my-2">
                      <p className="font-mono text-sm md:text-base text-foreground break-words">
                        time_seconds = 148.60 × (W/kg)² - 1954.08 × (W/kg) + 8329.87
                      </p>
                      <p className="text-sm mt-3">
                        That is the Alpe du Zwift model this site runs on. Put in 3.5 W/kg and it returns about 3,311
                        seconds, which is 55:11. At 4.0 W/kg it returns 48:11.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-foreground pt-2">
                      Why watts per kilogram decides a steep climb
                    </h3>
                    <p>
                      On the flat, the thing fighting you is the air, and air resistance barely cares how much you
                      weigh. On a slope averaging 8.5%, nearly everything you produce goes into lifting you and your
                      bike against gravity instead. The power needed to gain height at a given rate scales with total
                      mass, so if you double a rider's mass and double their power, they climb at exactly the same
                      speed. What survives that cancellation is power divided by mass. A 60 kg rider at 240 W and an 85
                      kg rider at 340 W are both at 4.0 W/kg, so the calculator hands them the same finishing time
                      even though one is producing 100 W more, which is why raw watts are close to useless as a
                      predictor on a climb this steep. The same quantity is what sorts riders into{" "}
                      <Link to="/zwift-racing-category-calculator" className="text-zwift-orange hover:underline">
                        Zwift racing categories
                      </Link>
                      , and I have written the longer version of the physics in{" "}
                      <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">
                        the power-to-weight article
                      </Link>
                      .
                    </p>

                    <h3 className="text-xl font-bold text-foreground pt-2">Why the relationship bends</h3>
                    <p>
                      Time is not proportional to power. It behaves much more like one divided by power, and that
                      bends. Half a watt per kilo is worth a lot when you are slow and much less when you are already
                      fast. Run it through the equation: going from 2.5 to 3.0 W/kg takes about 9 minutes 28 seconds
                      off your Alpe time, while going from 4.5 to 5.0 W/kg takes off about 4 minutes 31 seconds. Same
                      half a watt per kilo, less than half the payoff.
                    </p>
                    <p>
                      A quadratic is not a law of nature. It is a shape that fits the range riders actually ride in,
                      roughly 2 to 6 W/kg, and it is honest about being a fit rather than a simulation. Push it far
                      outside that range and it stops behaving: the parabola turns around at 1,954.08 divided by twice
                      148.60, which is about 6.58 W/kg, and beyond that point it starts claiming that more power makes
                      you slower. That is exactly why the coefficients sit in the open instead of behind a button, so
                      you can see where the model stops being useful. Ven-Top gets its own fit for the same reason: at
                      about 20.9 km and 1,480 m of gain it is a different climb rather than a scaled Alpe, and it fits
                      an inverse instead of a parabola, time_minutes = 3.21 + 253.38 ÷ (W/kg). The{" "}
                      <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">
                        side-by-side comparison
                      </Link>{" "}
                      shows how differently the two punish the same rider. If you want the method written out properly,
                      it is in{" "}
                      <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">
                        the regression methodology article
                      </Link>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              How I <span className="zwift-gradient-text">work</span>
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2 h-full">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-zwift-orange/10 flex items-center justify-center mx-auto mb-4">
                    <Sigma size={28} className="text-zwift-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Show the working</h3>
                  <p className="text-muted-foreground">
                    Every model on the site is published as an equation with its coefficients. You can rebuild any
                    result in a spreadsheet in about a minute. A tool you cannot audit is a tool you should not trust.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <Card className="border-2 h-full">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-zwift-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Lock size={28} className="text-zwift-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Free, and no login</h3>
                  <p className="text-muted-foreground">
                    No account, no paywall, no trial, no email capture. Open a calculator, type two numbers, get an
                    answer. Nothing is held back for subscribers, because there are no subscribers.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={600}>
              <Card className="border-2 h-full">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-zwift-green/10 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={28} className="text-zwift-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Corrections beat ego</h3>
                  <p className="text-muted-foreground">
                    If a number here is wrong I want to know, and the fix goes on the page itself rather than into a
                    comment thread. The standards every article here is held to are written down in the{" "}
                    <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
                      editorial policy
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* What you will find here */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-orange/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What you will find <span className="zwift-gradient-text">here</span>
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Mountain size={24} className="text-zwift-orange" />
                    <h3 className="text-xl font-bold text-foreground">The calculators</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The{" "}
                    <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
                      Alpe du Zwift calculator
                    </Link>{" "}
                    and the{" "}
                    <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">
                      Ven-Top calculator
                    </Link>{" "}
                    are the two originals. Alongside them sit a general{" "}
                    <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">
                      climb time calculator
                    </Link>
                    , an{" "}
                    <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">
                      FTP calculator
                    </Link>{" "}
                    and a{" "}
                    <Link to="/zwift-racing-category-calculator" className="text-zwift-orange hover:underline">
                      racing category calculator
                    </Link>
                    . All of them run in your browser and none of them ask who you are.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <Card className="border-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <BookOpen size={24} className="text-zwift-blue" />
                    <h3 className="text-xl font-bold text-foreground">The article library</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The{" "}
                    <Link to="/blog" className="text-zwift-orange hover:underline">
                      blog
                    </Link>{" "}
                    is sorted into{" "}
                    <Link to="/blog/category/training" className="text-zwift-orange hover:underline">
                      training
                    </Link>
                    ,{" "}
                    <Link to="/blog/category/racing" className="text-zwift-orange hover:underline">
                      racing
                    </Link>
                    ,{" "}
                    <Link to="/blog/category/setup" className="text-zwift-orange hover:underline">
                      setup
                    </Link>{" "}
                    and{" "}
                    <Link to="/blog/category/data-analysis" className="text-zwift-orange hover:underline">
                      data analysis
                    </Link>
                    . Some of it is method, like{" "}
                    <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline">
                      the data behind Zwift climbing
                    </Link>
                    . Some of it is pacing, like{" "}
                    <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">
                      the Alpe guide
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={600}>
              <Card className="border-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <LineChart size={24} className="text-zwift-green" />
                    <h3 className="text-xl font-bold text-foreground">Climb reference data</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Length, elevation gain and average gradient for the climbs worth planning around live on the{" "}
                    <Link to="/zwift-climbs" className="text-zwift-orange hover:underline">
                      Zwift climbs
                    </Link>{" "}
                    page, and{" "}
                    <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">
                      Alpe vs Ven-Top
                    </Link>{" "}
                    puts the two big ones head to head. Short questions get short answers in the{" "}
                    <Link to="/faq" className="text-zwift-orange hover:underline">
                      FAQ
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* What this site does not do */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Ban size={32} className="text-zwift-orange" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">What this site does not do</h2>
                  </div>

                  <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
                    <li>
                      <span className="text-foreground font-semibold">No coaching.</span> I do not sell training plans,
                      consultations or one-to-one coaching, and I am not building towards it.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">No gates.</span> Nothing sits behind a login.
                      There is no account to create and no free tier to outgrow.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">No sponsored posts.</span> Nobody has paid to be
                      mentioned in an article here, and nobody can.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">No affiliate links.</span> When a trainer, a fan
                      or a piece of software gets named, there is no commission attached to the link.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">No pretending to be your coach.</span> A curve
                      fitted to finishing times can tell you what a given W/kg is worth on a given climb. It cannot see
                      your sleep, your fuelling, your last three weeks of training or the rest of your life.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">No medical advice.</span> If something hurts, or
                      you are starting hard training after a long layoff, talk to a doctor rather than a calculator.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-foreground mt-8 mb-3 flex items-center gap-3">
                    <Coins size={22} className="text-zwift-orange" />
                    How the site is funded
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The site is free to use, and the running costs of the domain, the hosting and the time are
                      covered by display advertising. That is the whole business model, and you should know it before
                      you weigh anything I write.
                    </p>
                    <p>
                      Advertising never influences the content. Advertisers get ad slots. They do not get advance sight
                      of articles, a say in what gets covered, or a way to buy a mention or a link. If an advertiser
                      objected to something published here, the article would stay and the ad would go. What
                      advertising does mean for you is that you will see ads and that your visit is measured in
                      aggregate. What gets collected and why is set out in the{" "}
                      <Link to="/privacy-policy" className="text-zwift-orange hover:underline">
                        privacy policy
                      </Link>
                      , and what you may do with the numbers you get here is covered by the{" "}
                      <Link to="/terms-of-service" className="text-zwift-orange hover:underline">
                        terms of service
                      </Link>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-orange/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                      <img
                        src="/CLD_billede_4.jpg"
                        alt="Christian Lassen Dam"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-zwift-orange/20"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <Bike size={24} className="text-zwift-orange" />
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Who is behind it</h2>
                      </div>

                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          <strong className="text-foreground">Christian Lassen Dam</strong>, 25, based in Aalborg in
                          northern Denmark. I am an MSc student in Mechanical Engineering at Aalborg University, which
                          is where the curve fitting and the fussiness about publishing coefficients come from. I
                          ride on Zwift, I own the Tron bike, and I am training for Ironman Copenhagen, so most of the
                          questions this site answers are questions I have had myself at six in the morning with a fan
                          pointed at my face.
                        </p>
                        <p>
                          I fit the models, write the articles, build the pages and answer the email. That is worth
                          knowing when you read something here: there is no editorial board and no anonymous content
                          team behind the byline, and there is nobody else to blame for a mistake either.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/author"
                            className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
                          >
                            Read the longer version on the author page
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Building2 size={32} className="text-zwift-orange" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Company information</h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    ZwiftCalculator.com is operated by my registered Danish company, CLD Consulting. It holds the
                    domain, the hosting and the advertising account. This site is not affiliated with, endorsed by or
                    connected to Zwift Inc.
                  </p>

                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground mb-2">CLD Consulting</p>
                      <p>CVR: 45654230</p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin size={20} className="text-zwift-orange flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Address</p>
                        <p className="leading-relaxed">
                          Rendsburggade 28, 4, 9<br />
                          9000 Aalborg<br />
                          Denmark
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail size={20} className="text-zwift-orange flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Email</p>
                        <a
                          href="mailto:zwiftcalculator@gmail.com"
                          className="text-zwift-orange hover:text-zwift-orange/80 transition-colors break-all"
                        >
                          zwiftcalculator@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2 bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10">
                <CardContent className="p-6 md:p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Found a mistake? Tell me</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                    If a calculator gives you a time you cannot reconcile with your own ride, that is worth an email.
                    Send the climb, your weight, your average power and what the clock actually said, and I will work
                    out whether the model or the page is at fault. Confirmed errors get fixed on the live page, and
                    where the change matters the page says what changed. There is no appeals process to sit through.
                    The same address takes feature requests and arguments about whether Ven-Top is harder than the
                    Alpe.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-zwift-orange text-white hover:bg-zwift-orange/90 transition-all shadow-lg hover:shadow-xl font-semibold"
                    >
                      Contact me
                    </Link>
                    <Link
                      to="/editorial-policy"
                      className="inline-flex items-center px-6 py-3 rounded-full border-2 border-zwift-orange/40 text-foreground hover:border-zwift-orange transition-all font-semibold"
                    >
                      Read the editorial policy
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
