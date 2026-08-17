import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Building2,
  Gauge,
  FileText,
  Lightbulb,
  Megaphone,
  ShieldCheck,
  Clock,
  BookOpen,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import { SITE, AUTHOR, ORGANIZATION } from "@/lib/siteConfig";

/** Builds a mailto link with a pre-filled subject line. */
const mailto = (subject: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;

const Contact = () => {
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
            <AnimatedText delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Contact <span className="zwift-gradient-text">ZwiftCalculator</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={200} className="mt-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Every message sent to {SITE.email} lands in one inbox and I read all of it. I am{" "}
                {AUTHOR.name}, and I built the calculators on this site. There is no support desk behind
                me, which cuts both ways: you get an answer from the person who made the thing, but only
                if you tell me enough to work with.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Primary contact + publisher details */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedCard delay={200}>
                <Card className="border-2 h-full bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-4">Email me</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      There is no contact form here. The site is static with no backend, so a form would
                      either be fake or hand your details to a third party. Plain email is the honest
                      option.
                    </p>
                    <a
                      href={mailto("ZwiftCalculator question")}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zwift-orange text-white hover:bg-zwift-orange/90 transition-all shadow-lg hover:shadow-xl font-semibold"
                    >
                      <Mail size={18} />
                      {SITE.email}
                    </a>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <Card className="border-2 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Publisher details</h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-11 w-11 rounded-full bg-zwift-green/10 flex items-center justify-center flex-shrink-0">
                          <Building2 size={20} className="text-zwift-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Company</h3>
                          <p className="text-muted-foreground">
                            {ORGANIZATION.legalName}
                            <br />
                            CVR: {ORGANIZATION.registrationNumber}
                            <br />
                            VAT: {ORGANIZATION.vatId}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="h-11 w-11 rounded-full bg-zwift-blue/10 flex items-center justify-center flex-shrink-0">
                          <MapPin size={20} className="text-zwift-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Postal address</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {ORGANIZATION.street}
                            <br />
                            {ORGANIZATION.postalCode} {ORGANIZATION.city}
                            <br />
                            {ORGANIZATION.countryName}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="h-11 w-11 rounded-full bg-zwift-orange/10 flex items-center justify-center flex-shrink-0">
                          <Mail size={20} className="text-zwift-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <a
                            href={`mailto:${SITE.email}`}
                            className="text-zwift-orange hover:text-zwift-orange/80 transition-colors break-all"
                          >
                            {SITE.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Before you write */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <BookOpen size={28} className="text-zwift-blue" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Before you write</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Two pages already answer most of what reaches my inbox. The{" "}
                      <Link to="/faq" className="text-zwift-orange hover:text-zwift-orange/80 underline">
                        FAQ
                      </Link>{" "}
                      covers how the calculators produce a number, what they assume about your setup, and
                      where the estimates stop being reliable. The{" "}
                      <Link
                        to="/editorial-policy"
                        className="text-zwift-orange hover:text-zwift-orange/80 underline"
                      >
                        editorial policy
                      </Link>{" "}
                      covers how articles get researched, how corrections are handled, and who is allowed
                      to influence what gets published.
                    </p>
                    <p>
                      If the answer is there, you save yourself a wait. If it is there but badly explained,
                      that is worth an email on its own - tell me which sentence lost you.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* What to include */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                What to include so I can <span className="zwift-gradient-text">actually help you</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Five kinds of message arrive here. Each one needs different information from you. Pick the
                closest match and use the link to open a pre-filled subject line.
              </p>
            </AnimatedText>

            <div className="space-y-8">
              {/* Wrong result */}
              <AnimatedCard delay={100}>
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Gauge size={26} className="text-zwift-orange flex-shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        A calculator result looks wrong
                      </h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        This is the most valuable email I get, and the one most often sent without enough
                        detail. Send all six of these:
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Your weight in kg, and whether that figure includes kit, shoes and bottles.</li>
                        <li>
                          The power you held, and whether it is average power or normalised power for the
                          climb itself rather than the whole ride.
                        </li>
                        <li>The time the calculator predicted.</li>
                        <li>
                          The time you actually rode, taken from Zwift, ZwiftPower or your head unit rather
                          than memory.
                        </li>
                        <li>
                          Which climb: the{" "}
                          <Link
                            to="/alpeduzwiftcalculator"
                            className="text-zwift-orange hover:text-zwift-orange/80 underline"
                          >
                            Alpe du Zwift
                          </Link>{" "}
                          calculator, the{" "}
                          <Link
                            to="/ventop-calculator"
                            className="text-zwift-orange hover:text-zwift-orange/80 underline"
                          >
                            Ven-Top
                          </Link>{" "}
                          calculator, or one of the others listed on the{" "}
                          <Link
                            to="/zwift-climbs"
                            className="text-zwift-orange hover:text-zwift-orange/80 underline"
                          >
                            Zwift climbs page
                          </Link>
                          .
                        </li>
                        <li>
                          Whether your trainer was in ERG mode or free resistance, and which trainer it is.
                          ERG mode holds a target through the hairpins instead of letting power sag on the
                          shallower ramps, and that alone can move a 12.2 km Alpe time by minutes.
                        </li>
                      </ul>
                      <p>
                        Bike and wheel choice helps too. The Alpe estimate comes from a fitted curve,{" "}
                        <span className="font-mono text-foreground break-words">
                          time_seconds = 148.60 &times; (W/kg)&sup2; - 1954.08 &times; (W/kg) + 8329.87
                        </span>
                        , not from a physics engine simulating your frame. A regression describes what
                        riders on the climb have actually done, so real rides that disagree with it are the
                        only thing that can improve it. One well-documented mismatch beats ten emails
                        saying it was way off. The{" "}
                        <Link
                          to="/blog/regression-analysis-methodology"
                          className="text-zwift-orange hover:text-zwift-orange/80 underline"
                        >
                          regression methodology article
                        </Link>{" "}
                        shows how the fitting works.
                      </p>
                      <a
                        href={mailto("Calculator result looks wrong")}
                        className="inline-flex items-center gap-2 font-semibold text-zwift-orange hover:text-zwift-orange/80 transition-colors"
                      >
                        <Mail size={16} />
                        Report a mismatch
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              {/* Article wrong */}
              <AnimatedCard delay={200}>
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <FileText size={26} className="text-zwift-blue flex-shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        I think an article is wrong
                      </h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Name the article, quote the sentence you are disputing, and say what you think the
                        correct version is. Then give me something I can check: a Zwift release note, a
                        ZwiftPower result, a course profile, a published study, or your own ride file.
                      </p>
                      <p>
                        Disagreement without anything checkable still gets read, but it usually ends in me
                        asking for exactly that, so send it first. Confirmed errors get a dated correction
                        note on the article rather than a silent edit, as set out in the{" "}
                        <Link
                          to="/editorial-policy"
                          className="text-zwift-orange hover:text-zwift-orange/80 underline"
                        >
                          editorial policy
                        </Link>
                        .
                      </p>
                      <a
                        href={mailto("Correction to an article")}
                        className="inline-flex items-center gap-2 font-semibold text-zwift-orange hover:text-zwift-orange/80 transition-colors"
                      >
                        <Mail size={16} />
                        Send a correction
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              {/* Feature request */}
              <AnimatedCard delay={300}>
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Lightbulb size={26} className="text-zwift-green flex-shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        Feature or calculator request
                      </h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Likely to happen: another climb added to the{" "}
                        <Link
                          to="/zwift-climb-time-calculator"
                          className="text-zwift-orange hover:text-zwift-orange/80 underline"
                        >
                          climb time calculator
                        </Link>
                        , an extra output on a tool that already exists such as pacing splits or a target
                        W/kg, a clearer explanation of an existing number, or a comparison like{" "}
                        <Link
                          to="/alpe-vs-ventop"
                          className="text-zwift-orange hover:text-zwift-orange/80 underline"
                        >
                          Alpe against Ven-Top
                        </Link>{" "}
                        extended to another pair of climbs.
                      </p>
                      <p>
                        Unlikely: anything needing accounts, logins, saved ride history, a live Zwift
                        connection, or a mobile app. The site is static by design. Tell me what decision
                        the number would help you make, not just the feature name. A request framed as
                        &ldquo;I want to know whether to attack the Alpe at 3.2 or 3.5 W/kg&rdquo; is
                        something I can build for.
                      </p>
                      <a
                        href={mailto("Feature or calculator request")}
                        className="inline-flex items-center gap-2 font-semibold text-zwift-orange hover:text-zwift-orange/80 transition-colors"
                      >
                        <Mail size={16} />
                        Suggest something
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              {/* Press */}
              <AnimatedCard delay={400}>
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Megaphone size={26} className="text-zwift-orange flex-shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        Press, partnership or advertising
                      </h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Questions about the method, the data behind a calculator, or who runs the site are
                        welcome, and I am happy to be quoted or interviewed.
                      </p>
                      <p>
                        To be direct about the rest: no sponsored posts, no paid links, no paid reviews,
                        no link insertions into existing articles. That is the policy, not a starting
                        price, so guest post pitches chasing a followed link get no reply. The site
                        carries display advertising, kept entirely separate from what the articles say -
                        no advertiser sees a post before it publishes or changes one after.
                      </p>
                      <a
                        href={mailto("Press or partnership enquiry")}
                        className="inline-flex items-center gap-2 font-semibold text-zwift-orange hover:text-zwift-orange/80 transition-colors"
                      >
                        <Mail size={16} />
                        Press enquiry
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              {/* Privacy */}
              <AnimatedCard delay={500}>
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <ShieldCheck size={26} className="text-zwift-blue flex-shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        Privacy request (GDPR / CCPA)
                      </h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Use &ldquo;Privacy request&rdquo; as the subject line so it does not sit behind
                        the calculator mail; the link below fills that in for you. In the body, name the
                        right you are exercising - access, correction, deletion, objection to processing,
                        or opt-out of sale and sharing - and give me the identifier to search on. The
                        address you write from is normally enough.
                      </p>
                      <p>
                        What happens next: I confirm receipt, tell you what data actually exists, and act
                        within the one month the GDPR allows. In most cases the honest answer is that
                        nothing is tied to your name, because the site has no accounts, no logins and no
                        stored calculator inputs. Where third-party analytics or advertising cookies are
                        involved, I will name the provider and how to reach them. The{" "}
                        <Link
                          to="/privacy-policy"
                          className="text-zwift-orange hover:text-zwift-orange/80 underline"
                        >
                          privacy policy
                        </Link>{" "}
                        lists all of that in full.
                      </p>
                      <a
                        href={mailto("Privacy request")}
                        className="inline-flex items-center gap-2 font-semibold text-zwift-orange hover:text-zwift-orange/80 transition-colors"
                      >
                        <Mail size={16} />
                        Make a privacy request
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Response time */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-orange/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock size={28} className="text-zwift-orange" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      How long a reply takes
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      This is a one-person site run alongside a mechanical engineering MSc and Ironman
                      training, so expect a few days rather than a few hours. During exam periods or a heavy
                      training block it can stretch to a week or more. Every message that needs a reply gets
                      one. Some do not need one - if you send a clean mismatch report, the useful outcome is
                      a better fitted curve, not an email back.
                    </p>
                    <p>
                      Please skip URGENT in the subject line. Nothing here is an emergency; it is a
                      calculator. The one thing worth flagging fast is the site being broken or a
                      calculator returning obvious nonsense - put &ldquo;site down&rdquo; in the subject
                      and I will look as soon as I see it.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Who you are writing to */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Who you are writing to
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      {AUTHOR.name}, 25, based in {ORGANIZATION.city}, {ORGANIZATION.countryName}. I am an
                      MSc student in Mechanical Engineering at Aalborg University, training for Ironman
                      Copenhagen, and a long-time Zwift rider who has ground out enough laps in Watopia to
                      own the Tron bike. The site is published through my company,{" "}
                      {ORGANIZATION.legalName}, at the address above.
                    </p>
                    <p>
                      If you want the longer version of the background and how the tools get built, the{" "}
                      <Link
                        to="/author"
                        className="text-zwift-orange hover:text-zwift-orange/80 underline"
                      >
                        author page
                      </Link>{" "}
                      covers me and the{" "}
                      <Link
                        to="/about-us"
                        className="text-zwift-orange hover:text-zwift-orange/80 underline"
                      >
                        about page
                      </Link>{" "}
                      covers the site. If you just want to talk about a ride you are proud of, that is fine
                      too. Those are the easiest emails to answer.
                    </p>
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

export default Contact;
