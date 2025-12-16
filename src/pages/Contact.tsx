import { useEffect } from "react";
import { Mail, MapPin, Building2, Phone } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";

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
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Contact <span className="zwift-gradient-text">Us</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={200} className="mt-6 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Have questions, suggestions, or feedback? We'd love to hear from you.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Information Card */}
              <AnimatedCard delay={200}>
                <Card className="border-2 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-zwift-orange/10 flex items-center justify-center flex-shrink-0">
                          <Mail size={20} className="text-zwift-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <a
                            href="mailto:zwiftcalculator@gmail.com"
                            className="text-zwift-orange hover:text-zwift-orange/80 transition-colors break-all"
                          >
                            zwiftcalculator@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-zwift-blue/10 flex items-center justify-center flex-shrink-0">
                          <MapPin size={20} className="text-zwift-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Address</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Rendsburggade 28, 4, 9<br />
                            9000 Aalborg<br />
                            Denmark
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-zwift-green/10 flex items-center justify-center flex-shrink-0">
                          <Building2 size={20} className="text-zwift-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Company</h3>
                          <p className="text-muted-foreground">
                            CLD Consulting<br />
                            CVR: 45654230
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              {/* Information Card */}
              <AnimatedCard delay={400}>
                <Card className="border-2 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Information</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        We're always happy to help with questions about our calculators, suggestions for improvements, or feedback on the site.
                      </p>
                      <p>
                        Whether you've found a bug, have a feature request, or just want to share your Zwift achievements, feel free to reach out!
                      </p>
                      <p>
                        For privacy-related inquiries or to exercise your privacy rights (including GDPR/EEA or CCPA/CPRA rights), please email us at{" "}
                        <a
                          href="mailto:zwiftcalculator@gmail.com"
                          className="text-zwift-orange hover:text-zwift-orange/80 transition-colors underline"
                        >
                          zwiftcalculator@gmail.com
                        </a>
                        .
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>

            {/* Additional Info Section */}
            <AnimatedCard delay={600}>
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-4">Response Time</h2>
                  <p className="text-muted-foreground">
                    We typically respond to emails within 24-48 hours during business days. For urgent matters, please include "URGENT" in your subject line.
                  </p>
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

