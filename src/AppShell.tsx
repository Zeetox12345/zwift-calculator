import { useEffect, useState } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEOMetaTags from "./components/SEOMetaTags";

const queryClient = new QueryClient();

/**
 * Everything inside the router: providers, chrome and the route outlet.
 *
 * The router itself is supplied by the caller - `BrowserRouter` in the browser,
 * `StaticRouter` during pre-rendering - so exactly the same tree is rendered in
 * both places.
 */
const AppShell = () => {
  // Toasts are purely interactive, so they are mounted after hydration. Keeping
  // them out of the server render also keeps the static HTML free of empty
  // notification containers.
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    setInteractive(true);
  }, []);

  // Smooth-scroll in-page anchor links.
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName !== "A") return;

      const href = (target as HTMLAnchorElement).getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const element = document.getElementById(href.substring(1));
      if (!element) return;

      event.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {interactive && (
          <>
            <Toaster />
            <Sonner />
          </>
        )}
        <SEOMetaTags />
        <div className="flex flex-col min-h-screen">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-zwift-orange focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppShell;
