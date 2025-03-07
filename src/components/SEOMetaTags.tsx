import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaTagsProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  canonicalUrl?: string;
}

// Base URL for the site
const BASE_URL = 'https://zwiftcalculator.com';

// Define route-specific SEO metadata
const routeMetadata: Record<string, MetaTagsProps> = {
  "/": {
    title: "Zwift Calculator | Predict Your Times on Zwift Routes & Climbs",
    description: "Calculate your expected times for Zwift's most popular routes and climbs based on your weight and power. Powered by real rider data for accurate predictions.",
    ogTitle: "Zwift Calculator | Predict Your Times on Zwift Routes & Climbs",
    ogDescription: "Calculate your expected times for Zwift's most popular routes and climbs based on your weight and power. Powered by real rider data for accurate predictions.",
    keywords: "Zwift calculator, Zwift route times, Zwift climb predictor, cycling power calculator, Zwift segments, virtual cycling, Zwift watts per kilogram",
    canonicalUrl: `${BASE_URL}/`
  },
  "/alpeduzwiftcalculator": {
    title: "Alpe du Zwift Time Calculator | Predict Your Climbing Time Accurately",
    description: "Predict your Alpe du Zwift climbing time with our accurate calculator. Enter your weight and power to get precise estimates based on real Zwift rider data. Beat your PR!",
    ogTitle: "Alpe du Zwift Time Calculator | Predict Your Climbing Time Accurately",
    ogDescription: "Predict your Alpe du Zwift climbing time with our accurate calculator. Enter your weight and power to get precise estimates based on real Zwift rider data. Beat your PR!",
    keywords: "Alpe du Zwift, Zwift climbing calculator, Zwift time predictor, Alpe du Zwift time, Zwift w/kg calculator, cycling power calculator, virtual climbing",
    canonicalUrl: `${BASE_URL}/alpeduzwiftcalculator`
  }
};

const SEOMetaTags = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Get the metadata for current route or use default (homepage) metadata
    const metadata = routeMetadata[location.pathname] || routeMetadata["/"];
    
    // Update document title
    document.title = metadata.title || "Zwift Calculator";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description || "");
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', metadata.keywords || "");
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', metadata.ogTitle || metadata.title || "");
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metadata.ogDescription || metadata.description || "");
    }
    
    // Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', metadata.canonicalUrl || BASE_URL);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', metadata.canonicalUrl || BASE_URL);
      document.head.appendChild(canonicalLink);
    }
  }, [location.pathname]);
  
  return null; // This component doesn't render anything visible
};

export default SEOMetaTags; 