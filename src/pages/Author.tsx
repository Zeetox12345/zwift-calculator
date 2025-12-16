import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";

const Author = () => {
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
                About <span className="zwift-gradient-text">Christian L. Dam</span>
              </h1>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <img
                      src="/CLD_billede_4.jpg"
                      alt="Christian Lassen Dam"
                      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-zwift-orange/20"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Hi! My name is Christian Lassen Dam, and I'm the creator of ZwiftCalculator.com.
                    </p>

                    <p>
                      I build tools and write about everything related to indoor cycling, triathlon training, and performance analysis—especially for athletes who use Zwift or train for endurance events like Ironman Copenhagen. My goal is to make complex performance data simple, accurate, and useful for everyday athletes who want to train smarter.
                    </p>

                    <p>
                      To develop the calculators and content on this site, I use the latest version of ChatGPT (GPT-5) in Research Mode, combined with Anthropic's Claude Sonnet 4.5. This lets me combine deep technical accuracy with broad research across trusted sources such as scientific training studies, power data analyses, and official triathlon resources.
                    </p>

                    <p>
                      All estimates and tools on ZwiftCalculator.com are built on publicly available training and physiological data. They're designed to help you understand trends, effort levels, and potential outcomes—not to replace personalized coaching or medical advice. The goal is clarity and accessibility, not overcomplication.
                    </p>

                    <p>
                      I also use AI to help generate visuals, speed up analysis, and make the information easier to understand. If you ever find a mistake or have a suggestion, feel free to contact me at{" "}
                      <a 
                        href="mailto:zwiftcalculator@gmail.com" 
                        className="text-zwift-orange hover:text-zwift-orange/80 underline font-medium"
                      >
                        zwiftcalculator@gmail.com
                      </a>
                      , and I'll update it as soon as possible.
                    </p>

                    <p>
                      A bit about me: I'm 25 years old, live in Aalborg, Denmark, and I'm currently training for a full-distance Ironman, with Ironman Copenhagen as my main goal. I'm also doing my Master's degree in Mechanical Engineering at Aalborg University, and I've been combining my background in engineering, data, and endurance sports to build tools that help athletes make better training decisions.
                    </p>

                    <p>
                      As a dedicated Zwifter myself—I even own the coveted Tron bike!—I understand the passion and dedication that goes into virtual cycling. My love for data analysis and physics, combined with my mechanical engineering studies, makes it very natural for me to create physics calculators like the{" "}
                      <Link
                        to="/alpeduzwiftcalculator"
                        className="text-zwift-orange hover:text-zwift-orange/80 underline font-medium"
                      >
                        Alpe du Zwift calculator
                      </Link>
                      {" "}based on real data and scientific principles.
                    </p>

                    <p>
                      With a mix of technical expertise, endurance experience, and a deep interest in data-driven training, I aim to make ZwiftCalculator.com a practical, accurate, and motivating resource for athletes at all levels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Author;

