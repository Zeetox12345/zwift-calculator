import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calculator, ChevronDown, Gauge, HelpCircle, Info, Mountain, Zap, type LucideIcon } from "lucide-react";


import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { faqSections, type FaqIconKey } from "@/data/faq";

const FAQ_ICONS: Record<FaqIconKey, LucideIcon> = { Calculator, Mountain, Gauge, Zap, Info, HelpCircle };

const Faq = () => {
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
                Frequently asked <span className="zwift-gradient-text">questions</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={200} className="mt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The questions I get most often about the calculators, about climbing on Zwift, and about
                the site itself. Where a number is an estimate, I say so.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Question sections */}
      {faqSections.map((section, sectionIndex) => {
        const SectionIcon = FAQ_ICONS[section.iconKey];

        return (
          <section key={section.id} className="py-6 md:py-8 relative">
            {sectionIndex % 2 === 1 && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
            )}

            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <AnimatedText delay={100}>
                  <div className="flex items-center space-x-3 mb-2">
                    <SectionIcon size={26} className="text-zwift-orange flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{section.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{section.intro}</p>
                </AnimatedText>

                <AnimatedCard delay={200} hoverEffect={false} className="p-4 md:p-6">
                  <div className="w-full">
                    {section.items.map((item) => (
                      // A native <details> keeps every answer in the DOM whether it
                      // is open or not, so the text is readable to a crawler and
                      // still works with JavaScript disabled. A JS accordion would
                      // unmount the closed answers and hide the whole page.
                      <details
                        key={item.id}
                        className="group border-b border-border last:border-b-0 py-3"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base md:text-lg font-semibold text-foreground marker:content-none hover:text-zwift-orange transition-colors">
                          <h3 className="text-base md:text-lg font-semibold">{item.question}</h3>
                          <ChevronDown
                            size={18}
                            className="flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <div className="pt-3 pb-2">
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                          {item.links && (
                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                              {item.links.map((link) => (
                                <Link
                                  key={link.to}
                                  to={link.to}
                                  className="text-sm font-semibold text-zwift-orange hover:text-zwift-orange/80 transition-colors"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </section>
        );
      })}

      {/* Still stuck */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2 bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <HelpCircle size={28} className="text-zwift-orange flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Still not answered?</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    For a specific climb, start with the{" "}
                    <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">
                      climb time calculator
                    </Link>{" "}
                    or the{" "}
                    <Link to="/blog" className="text-zwift-orange hover:underline">
                      articles
                    </Link>
                    , where the longer explanations live. For how something here was worked out, the{" "}
                    <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
                      editorial policy
                    </Link>{" "}
                    covers sourcing and corrections. Anything else, write to me.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-zwift-orange text-white hover:bg-zwift-orange/90 transition-all shadow-lg hover:shadow-xl font-semibold"
                  >
                    Ask a question
                  </Link>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
