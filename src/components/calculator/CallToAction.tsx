
import React from "react";
import { Link } from "react-router-dom";
import { Bike, BookOpen, ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedButton from "@/components/AnimatedButton";

interface CallToActionProps {
  climbName?: string;
  blogPostPath?: string;
  blogPostTitle?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  climbName = "the climb",
  blogPostPath,
  blogPostTitle
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedText className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Take on the Challenge?
        </h2>
        <p className="text-muted-foreground mb-6">
          Now that you know your estimated time, hop on Zwift and conquer {climbName}!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimatedButton
            external
            to="https://www.zwift.com/"
            variant="secondary"
            size="lg"
            icon={<Bike size={20} />}
          >
            Visit Zwift
          </AnimatedButton>
          {blogPostPath && blogPostTitle && (
            <Link
              to={blogPostPath}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-zwift-orange/20 to-zwift-blue/20 border border-zwift-orange/30 text-foreground hover:from-zwift-orange/30 hover:to-zwift-blue/30 transition-all font-semibold"
            >
              <BookOpen size={18} className="mr-2" />
              Read Strategy Guide
              <ArrowRight size={18} className="ml-2" />
            </Link>
          )}
        </div>
      </AnimatedText>
      
      {blogPostPath && blogPostTitle && (
        <AnimatedText delay={200} className="mt-8">
          <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-xl p-6 border border-zwift-orange/30">
            <div className="flex items-start space-x-4">
              <BookOpen size={24} className="text-zwift-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Want to Improve Your Time?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Check out our comprehensive guide with pacing strategies, training tips, and in-game tactics to help you conquer {climbName} faster.
                </p>
                <Link
                  to={blogPostPath}
                  className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
                >
                  Read: {blogPostTitle}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedText>
      )}
    </div>
  );
};

export default CallToAction;
