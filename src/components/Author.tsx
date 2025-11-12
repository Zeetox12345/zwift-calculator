import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Author = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <div className="flex items-center gap-3 py-4 border-b border-border/50">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img
            src="/CLD_billede_4.jpg"
            alt="Christian Lassen Dam"
            className="w-12 h-12 rounded-full object-cover border-2 border-zwift-orange/20"
          />
          <span className="text-sm font-medium text-muted-foreground">
            Written by <span className="text-foreground">Christian L. Dam</span>
          </span>
        </button>
      </div>

      {/* Author Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">About the Author</DialogTitle>
            <DialogDescription>
              Learn more about Christian L. Dam, creator of ZwiftCalculator.com
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col md:flex-row gap-6 py-4">
            {/* Profile Image */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img
                src="/CLD_billede_4.jpg"
                alt="Christian Lassen Dam"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-zwift-orange/20"
              />
            </div>

            {/* Author Info */}
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
                A bit about me: I'm 25 years old, live in Aalborg, Denmark, and I'm currently training for a full-distance Ironman, with Ironman Copenhagen as my main goal. I'm also finishing my Master's degree in Mechanical Engineering at Aalborg University, and I've been combining my background in engineering, data, and endurance sports to build tools that help athletes make better training decisions.
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button asChild variant="default" className="bg-zwift-orange hover:bg-zwift-orange/90">
              <Link to="/author" onClick={() => setOpen(false)}>
                Read Full Author Page
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Author;

