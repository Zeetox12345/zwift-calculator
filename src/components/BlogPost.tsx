import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Calculator, ArrowRight } from "lucide-react";
import Author from "./Author";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  date: string;
  content: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  relatedCalculators?: Array<{ name: string; path: string; description: string }>;
}

const BlogPost = ({ title, date, content, metaTitle, metaDescription, relatedCalculators }: BlogPostProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update meta tags
    if (metaTitle) {
      document.title = metaTitle;
    }
    
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag && metaDescription) {
      metaDescriptionTag.setAttribute('content', metaDescription);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && metaTitle) {
      ogTitle.setAttribute('content', metaTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && metaDescription) {
      ogDescription.setAttribute('content', metaDescription);
    }
  }, [metaTitle, metaDescription]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar size={16} className="mr-2" />
              <span>{date}</span>
            </div>
            
            {/* Author Box */}
            <Author />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-12 relative flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 md:p-8 max-w-none">
                <div className="space-y-6 text-base leading-relaxed">
                  {content}
                </div>
                
                {/* Related Calculators Section */}
                {relatedCalculators && relatedCalculators.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Calculator size={20} className="mr-2 text-zwift-orange" />
                      Try Our Calculators
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Use our data-driven calculators to predict your performance on these iconic Zwift climbs:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {relatedCalculators.map((calc) => (
                        <Link
                          key={calc.path}
                          to={calc.path}
                          className="group p-4 bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-lg border border-zwift-orange/30 hover:border-zwift-orange/50 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-zwift-orange transition-colors mb-1">
                                {calc.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {calc.description}
                              </p>
                            </div>
                            <ArrowRight size={20} className="text-zwift-orange group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

