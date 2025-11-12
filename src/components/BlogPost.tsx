import { useEffect } from "react";
import { Calendar } from "lucide-react";
import Author from "./Author";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  date: string;
  content: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
}

const BlogPost = ({ title, date, content, metaTitle, metaDescription }: BlogPostProps) => {
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

