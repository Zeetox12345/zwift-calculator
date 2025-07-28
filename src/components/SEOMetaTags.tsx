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
    title: "Alpe du Zwift Calculator | Predict Your Climbing TIme",
    description: "Predict your Alpe du Zwift climbing time with our accurate calculator. Enter your weight and power to get precise estimates based on real Zwift rider data. Beat your PR!",
    ogTitle: "Alpe du Zwift Calculator | Predict Your Climbing TIme",
    ogDescription: "Predict your Alpe du Zwift climbing time with our accurate calculator. Enter your weight and power to get precise estimates based on real Zwift rider data. Beat your PR!",
    keywords: "Alpe du Zwift, Zwift climbing calculator, Zwift time predictor, Alpe du Zwift time, Zwift w/kg calculator, cycling power calculator, virtual climbing",
    canonicalUrl: `${BASE_URL}/alpeduzwiftcalculator`
  },
  "/ventop-calculator": {
    title: "Ven Top Zwift Time Calculator | Predict Your Climbing Time Accurately",
    description: "Use our Ven top Zwift time calculator to predict your completion time. Enter your weight and power for precise estimates based on real Zwift performance data. Plan your climb today!",
    ogTitle: "Ven Top Zwift Time Calculator | Predict Your Climbing Time Accurately",
    ogDescription: "Use our Ven top Zwift time calculator to predict your completion time. Enter your weight and power for precise estimates based on real Zwift performance data. Plan your climb today!",
    keywords: "Ven top Zwift time calculator, Ven Top calculator, Zwift Ven Top time, Ven Top climbing calculator, Zwift time predictor, Ven Top route calculator, Zwift w/kg calculator, Watopia climbing time",
    canonicalUrl: `${BASE_URL}/ventop-calculator`
  },
  "/alpe-vs-ventop": {
    title: "Alpe du Zwift vs Ven-Top: Complete Comparison Guide & Calculators",
    description: "Compare Alpe du Zwift vs Ven-Top with detailed route analysis, interactive time calculators, and expert insights. Discover which Zwift climb suits your training goals best.",
    ogTitle: "Alpe du Zwift vs Ven-Top: Complete Comparison Guide & Calculators",
    ogDescription: "Compare Alpe du Zwift vs Ven-Top with detailed route analysis, interactive time calculators, and expert insights. Discover which Zwift climb suits your training goals best.",
    keywords: "alpe du zwift vs ven top, zwift climbing comparison, alpe du zwift calculator, ven top calculator, zwift routes comparison, zwift climbing times, zwift climb analysis, watopia climbs",
    canonicalUrl: `${BASE_URL}/alpe-vs-ventop`
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