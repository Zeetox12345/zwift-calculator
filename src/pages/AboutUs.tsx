import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Mail, MapPin, GraduationCap, Bike, Target, Users, Award } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
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
          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                About <span className="zwift-gradient-text">Us</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={200} className="mt-6 max-w-2xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Making Zwift performance analysis accessible, accurate, and actionable for athletes at all levels.
              </p>
            </AnimatedText>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ZwiftCalculator.com was created to bridge the gap between complex performance data and practical, actionable insights for Zwift athletes. We believe that understanding your potential performance shouldn't require a degree in sports science or expensive coaching software.
                    </p>
                    <p>
                      Our mission is to provide accurate, data-driven tools that help cyclists of all levels set realistic goals, understand their performance metrics, and train more effectively. Whether you're aiming for your first sub-60-minute Alpe du Zwift or chasing a personal best on Ven Top, we provide the insights you need to succeed.
                    </p>
                    <p>
                      We're committed to transparency in our methodology, accuracy in our calculations, and accessibility in our approach. Every calculator and article on this site is built on verified data and real-world performance metrics, not assumptions or simplified models.
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="zwift-gradient-text">Values</span>
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2 h-full">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-zwift-orange/10 flex items-center justify-center mx-auto mb-4">
                    <Award size={28} className="text-zwift-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Accuracy First</h3>
                  <p className="text-muted-foreground">
                    Every calculation is based on verified ZwiftPower data and statistical analysis, not guesswork or simplified models.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <Card className="border-2 h-full">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-zwift-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-zwift-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Complex performance analysis made simple. Our tools are designed for athletes at every level, from beginners to elite racers.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={600}>
              <Card className="border-2 h-full">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-zwift-green/10 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap size={28} className="text-zwift-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Education</h3>
                  <p className="text-muted-foreground">
                    We don't just provide answers—we explain the science behind performance, helping you become a smarter athlete.
                  </p>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Company Information</h2>
                  </div>
                  
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
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <Bike size={24} className="text-zwift-orange" />
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">About the Creator</h2>
                      </div>
                      
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          <strong className="text-foreground">Christian Lassen Dam</strong> is a Master's student in Mechanical Engineering at Aalborg University and the creator of ZwiftCalculator.com. Currently training for Ironman Copenhagen, Christian combines his engineering background with his passion for endurance sports and data analysis.
                        </p>
                        <p>
                          As a dedicated Zwifter who owns the coveted Tron bike, Christian understands the dedication and strategy required for virtual cycling success. His mechanical engineering studies provide the analytical foundation for developing accurate performance calculators, while his personal experience as an endurance athlete ensures the tools are practical and relevant.
                        </p>
                        <p>
                          Christian's approach to performance analysis emphasizes transparency, accuracy, and accessibility. All calculators are built on verified ZwiftPower data and statistical analysis, ensuring athletes receive reliable predictions they can trust.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/author"
                            className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
                          >
                            Read more about Christian's background and methodology
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

      {/* Contact CTA */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <Card className="border-2 bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10">
                <CardContent className="p-6 md:p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Have Questions or Feedback?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We're always looking to improve our tools and content. Whether you've found a bug, have a feature request, or want to share your Zwift achievements, we'd love to hear from you.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-zwift-orange text-white hover:bg-zwift-orange/90 transition-all shadow-lg hover:shadow-xl font-semibold"
                  >
                    Contact Us
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

export default AboutUs;

