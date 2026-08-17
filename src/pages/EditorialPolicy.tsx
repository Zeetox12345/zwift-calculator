import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  UserCheck,
  Library,
  LineChart,
  Bot,
  RefreshCcw,
  Megaphone,
  ShieldCheck,
  AlertTriangle,
  CalendarClock,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import { AUTHOR, ORGANIZATION, SITE } from "@/lib/siteConfig";

interface PolicySectionProps {
  icon: React.ReactNode;
  title: string;
  delay?: number;
  children: React.ReactNode;
}

/** One numbered policy block: icon, h2, and body copy inside a bordered card. */
const PolicySection = ({ icon, title, delay = 100, children }: PolicySectionProps) => (
  <AnimatedCard
    delay={delay}
    hoverEffect={false}
    className="p-0 bg-transparent dark:bg-transparent border-0 shadow-none"
  >
    <Card className="border-2">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center space-x-3 mb-5">
          <div className="h-11 w-11 rounded-full bg-zwift-orange/10 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
      </CardContent>
    </Card>
  </AnimatedCard>
);

const linkClass = "text-zwift-orange hover:text-zwift-orange/80 underline underline-offset-2";

const EditorialPolicy = () => {
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
            <AnimatedText delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Editorial <span className="zwift-gradient-text">Policy</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={200} className="mt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This page describes how {SITE.name} is written, where its numbers come from, how the
                calculators are checked, and what happens when something turns out to be wrong. It is
                written so you can judge the site on its method rather than on its confidence.
              </p>
            </AnimatedText>
            <AnimatedText delay={300} className="mt-4">
              <p className="text-sm text-muted-foreground">Last reviewed: August 2026</p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Policy sections */}
      <section className="py-4 md:py-8 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <PolicySection
              icon={<UserCheck size={22} className="text-zwift-orange" />}
              title="Who publishes this site"
              delay={100}
            >
              <p>
                {AUTHOR.name} writes, builds and maintains everything here. I am 25, I live in Aalborg
                in Denmark, and I am an MSc student in Mechanical Engineering at Aalborg University. I
                have been riding Zwift for years, I own the Tron bike, and I am currently training for
                Ironman Copenhagen. That combination is the whole qualification: an engineer's habit of
                fitting curves to data, plus enough hours on the trainer to know when a model is giving
                an answer no real rider would recognise.
              </p>
              <p>
                There is no editorial team, no fact-checking department and no panel of outside
                reviewers. It is one person. Saying so is more useful to you than inventing a masthead,
                because it tells you exactly whose judgement you are trusting and where to send a
                complaint. You can read more about my background on the{" "}
                <Link to="/author" className={linkClass}>
                  author page
                </Link>{" "}
                and about why the site exists on{" "}
                <Link to="/about-us" className={linkClass}>
                  about us
                </Link>
                .
              </p>
              <p>
                The site is operated by my company, {ORGANIZATION.legalName}, CVR {ORGANIZATION.registrationNumber},{" "}
                {ORGANIZATION.street}, {ORGANIZATION.postalCode} {ORGANIZATION.city}, {ORGANIZATION.countryName}.
                That is the legal entity behind the domain, the advertising account and any contract the
                site enters into.
              </p>
            </PolicySection>

            <PolicySection
              icon={<Library size={22} className="text-zwift-orange" />}
              title="How we source facts"
              delay={150}
            >
              <p>
                Every factual claim on the site sits somewhere in a four-level hierarchy, and I try to
                work as high up that list as the question allows.
              </p>
              <ol className="list-decimal list-outside ml-6 space-y-3">
                <li>
                  <strong className="text-foreground">Primary sources and peer-reviewed work.</strong>{" "}
                  Physiology, aerodynamics and training-load claims are taken from published research or
                  from textbooks that summarise it. If a study is the basis for a statement, the study
                  is what gets described, not a second-hand blog summary of it.
                </li>
                <li>
                  <strong className="text-foreground">Zwift's own published material.</strong> Route
                  distances, elevation profiles, game mechanics, unlock rules and pricing come from
                  Zwift where Zwift has published them.
                </li>
                <li>
                  <strong className="text-foreground">Well-established community measurement.</strong>{" "}
                  Zwift does not publish everything, and for the gaps the community has done careful
                  work over many years. Route data and equipment testing from sites such as ZwiftInsider
                  fall here. This is good data, but it is measured by riders rather than by the
                  developer, so it is labelled as community measurement.
                </li>
                <li>
                  <strong className="text-foreground">Reasoned estimation.</strong> Sometimes there is no
                  measurement and the honest thing is to reason from physics and say so. Estimates are
                  always marked as estimates, in the sentence that contains them, not in a disclaimer at
                  the bottom of the page.
                </li>
              </ol>
              <p>
                Two rules follow from that hierarchy. In an article, any number presented as measured
                carries a link to the place it was measured, so you can check it yourself. Any number that came out of a model
                is described as modelled, with the model stated. If I cannot do either, the claim is
                either rewritten as reasoning or removed. The same rule applies to comparisons like{" "}
                <Link to="/alpe-vs-ventop" className={linkClass}>
                  Alpe du Zwift against Ven-Top
                </Link>
                , where the route facts are sourced and the time predictions are explicitly model
                output.
              </p>
            </PolicySection>

            <PolicySection
              icon={<LineChart size={22} className="text-zwift-orange" />}
              title="How the calculators are built and validated"
              delay={200}
            >
              <p>The pipeline behind a climb calculator is not complicated, and it is worth stating plainly.</p>
              <p>
                First, gather finishing times paired with the rider's power-to-weight ratio for that
                effort. Second, fit a curve through the pairs. Third, check the fit against landmarks I
                can reason about independently, such as what a rider at a known W/kg has to hold to go
                under an hour. Fourth, publish the equation itself rather than hiding it behind a
                button. Fifth, revise it when reader-reported results consistently disagree with what it
                predicts.
              </p>
              <p>
                For Alpe du Zwift, which is 12.2 km with 1,036 m of gain across 21 hairpins at roughly
                8.5% average gradient, the fitted relationship used by the{" "}
                <Link to="/alpeduzwiftcalculator" className={linkClass}>
                  Alpe du Zwift calculator
                </Link>{" "}
                is:
              </p>
              <p className="text-foreground font-mono text-sm bg-muted/60 border border-border rounded-lg px-4 py-3 overflow-x-auto">
                time_seconds = 148.60 * (W/kg)^2 - 1954.08 * (W/kg) + 8329.87
              </p>
              <p>
                The method behind that fit, including why a quadratic is a reasonable shape for this
                relationship and where it starts to misbehave, is written up in{" "}
                <Link to="/blog/regression-analysis-methodology" className={linkClass}>
                  the regression analysis methodology article
                </Link>
                . The same approach produces the estimate on the{" "}
                <Link to="/ventop-calculator" className={linkClass}>
                  Ven-Top calculator
                </Link>
                , for a climb of roughly 20.9 km and somewhere between 1,480 and 1,534 m of gain. That
                spread is a good example of the hierarchy in practice: the figure depends on where the
                measurement starts, so the{" "}
                <Link to="/blog/mastering-ven-top" className={linkClass}>
                  Ven-Top guide
                </Link>{" "}
                gives the range with its sources rather than picking one number and sounding certain.
              </p>
              <p>
                The limits are real and I would rather you hear them from me. The estimate assumes steady
                power for the whole climb. It assumes no in-game draft on the climb, which is usually
                true on the Alpe but not always. And it assumes a rider who does not blow up, which is
                the assumption most often broken in practice. Go out 0.3 W/kg above what you can hold
                and the model will be optimistic, sometimes by minutes. Treat the output as a target to
                pace against, not as a promise. The other tools carry the same caveat, including the{" "}
                <Link to="/zwift-ftp-calculator" className={linkClass}>
                  FTP calculator
                </Link>{" "}
                and the{" "}
                <Link to="/zwift-racing-category-calculator" className={linkClass}>
                  racing category calculator
                </Link>
                .
              </p>
            </PolicySection>

            <PolicySection
              icon={<Bot size={22} className="text-zwift-orange" />}
              title="Where AI is used and where it is not"
              delay={250}
            >
              <p>
                Large language models are used on this site, and pretending otherwise would be the
                opposite of an editorial policy. Here is the actual division of labour.
              </p>
              <p>
                A model helps with drafting and structuring: turning notes into paragraphs, proposing an
                outline, tightening sentences that ran long. That is where it stops. A human decides
                what the article argues. A human checks every number against its source. A human clicks
                every link before it ships. Nothing on this site is published unread, and nothing is
                published that I would not defend in a comment thread.
              </p>
              <p>
                What a model is never allowed to do is supply a fact. It does not get to produce a
                statistic, a study citation, a URL, or a quote that then goes on the page. Those are the
                exact failure modes that make AI-assisted writing untrustworthy, and every one of them
                is caught at the human step or the sentence does not survive.
              </p>
              <p>
                Google's own guidance judges content by whether it is helpful, original and reliable
                rather than by how it was produced. I think that is the right test, and it is the one I
                hold the site to. If a page would not be worth reading had it been typed by hand, the
                tool used to draft it does not save it.
              </p>
            </PolicySection>

            <PolicySection
              icon={<RefreshCcw size={22} className="text-zwift-orange" />}
              title="Corrections policy"
              delay={300}
            >
              <p>
                If something here is wrong, tell me. Use the{" "}
                <Link to="/contact" className={linkClass}>
                  contact page
                </Link>{" "}
                or email{" "}
                <a href={`mailto:${SITE.email}`} className={linkClass}>
                  {SITE.email}
                </a>
                . The most useful report names the page, quotes the sentence, and says what the right
                answer is and how you know. Calculator disagreements are especially welcome: your
                finishing time, your weight, and the average power you held tells me more than any
                amount of theorising.
              </p>
              <p>
                What happens next is straightforward. I acknowledge the report. I check the claim
                against its source. If it is wrong, the page is fixed. If it is right but badly phrased,
                the phrasing is fixed. If I disagree, I say why rather than quietly leaving it.
              </p>
              <p>
                A corrected page says that it was corrected. Substantive fixes, meaning anything that
                changes a number, a conclusion or a recommendation, get a dated correction note on the
                page itself. Typos and broken links are repaired silently, because nobody needs a
                changelog for a missing comma. What will not happen is a wrong figure being swapped for
                a right one with no trace that the wrong one was ever there.
              </p>
            </PolicySection>

            <PolicySection
              icon={<Megaphone size={22} className="text-zwift-orange" />}
              title="Advertising and independence"
              delay={350}
            >
              <p>
                Everything on this site is free to use, and display advertising is what pays for the
                domain, the hosting and the time. That is the entire business model.
              </p>
              <p>
                Advertisers have no say in what gets written. They do not see articles before
                publication, they cannot request coverage, and they cannot request that coverage be
                removed. There are no sponsored articles. There are no affiliate links, so no
                recommendation on this site earns me a commission if you act on it, and no product is
                praised because it happens to pay better.
              </p>
              <p>
                If any of that ever changes, the disclosure will appear on the page it applies to, at
                the top, in plain language, not buried in a site-wide footnote. The commercial terms of
                using the site are set out in the{" "}
                <Link to="/terms-of-service" className={linkClass}>
                  terms of service
                </Link>
                .
              </p>
            </PolicySection>

            <PolicySection
              icon={<ShieldCheck size={22} className="text-zwift-orange" />}
              title="Privacy and data"
              delay={400}
            >
              <p>
                The calculators run entirely in your browser. Your weight, your power numbers and your
                finishing times are used to render a result on your screen and are never sent to a
                server, never stored, and never associated with you. There is no account to create and
                nothing to log in to.
              </p>
              <p>
                The site does use analytics and third-party advertising, which involve cookies and
                similar technologies. What is collected, why, and how to exercise your rights under GDPR
                or CCPA is set out in full in the{" "}
                <Link to="/privacy-policy" className={linkClass}>
                  privacy policy
                </Link>
                .
              </p>
            </PolicySection>

            <PolicySection
              icon={<AlertTriangle size={22} className="text-zwift-orange" />}
              title="What this site is not"
              delay={450}
            >
              <p>
                It is not medical advice. Nothing here is written by a doctor or a physiotherapist, and
                nothing here accounts for your health history. If you have a heart condition, are coming
                back from injury or illness, or are new to hard exercise, talk to a medical professional
                before you follow any training suggestion you read on this site.
              </p>
              <p>
                It is not coaching. A coach watches your data over months, knows your calendar, and
                adjusts when life gets in the way. A calculator gives you a number. The articles in{" "}
                <Link to="/blog/category/training" className={linkClass}>
                  the training category
                </Link>{" "}
                explain principles, but they cannot see your last four weeks and they are no substitute
                for a real coaching relationship.
              </p>
              <p>
                It is not affiliated with Zwift Inc. This is an independent fan-built site. Zwift does
                not review, endorse, sponsor or check anything published here, and all Zwift trademarks
                belong to Zwift Inc.
              </p>
            </PolicySection>

            <PolicySection
              icon={<CalendarClock size={22} className="text-zwift-orange" />}
              title="Review schedule"
              delay={500}
            >
              <p>
                Zwift changes. Routes get adjusted, physics get tuned, categories get redefined, and a
                page that was accurate in March can be quietly wrong by September. So the site is
                re-checked on a schedule rather than only when someone complains.
              </p>
              <p>
                Calculator pages and the reference data behind them, meaning route distances, elevation
                figures and gradient averages, are reviewed at least twice a year, and again whenever
                Zwift ships an update that touches route geometry, drafting or climbing physics. The{" "}
                <Link to="/zwift-climbs" className={linkClass}>
                  climb reference pages
                </Link>{" "}
                and the{" "}
                <Link to="/faq" className={linkClass}>
                  FAQ
                </Link>{" "}
                are checked in the same pass. Fitted equations are re-examined when reader-reported
                times start to cluster on one side of the prediction.
              </p>
              <p>
                Articles carry publication dates on the{" "}
                <Link to="/blog" className={linkClass}>
                  blog index
                </Link>
                , so you can see how old a piece is before you rely on it. An old article is not
                automatically wrong, but with a game that ships updates this often, the date is
                information you should have.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditorialPolicy;
