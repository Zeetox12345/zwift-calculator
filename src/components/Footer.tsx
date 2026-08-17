import { Link } from "react-router-dom";
import { Bike, Heart, Mail } from "lucide-react";

import { SITE, ORGANIZATION, AUTHOR } from "@/lib/siteConfig";

const calculatorLinks = [
  { name: "Alpe du Zwift Calculator", path: "/alpeduzwiftcalculator" },
  { name: "Ven-Top Calculator", path: "/ventop-calculator" },
  { name: "Climb Time Calculator", path: "/zwift-climb-time-calculator" },
  { name: "FTP & Zones Calculator", path: "/zwift-ftp-calculator" },
  { name: "Racing Category Calculator", path: "/zwift-racing-category-calculator" },
  { name: "Alpe vs Ven-Top", path: "/alpe-vs-ventop" },
];

const readLinks = [
  { name: "All Articles", path: "/blog" },
  { name: "Training", path: "/blog/category/training" },
  { name: "Racing", path: "/blog/category/racing" },
  { name: "Setup", path: "/blog/category/setup" },
  { name: "Data Analysis", path: "/blog/category/data-analysis" },
  { name: "Zwift Climb Data", path: "/zwift-climbs" },
];

const siteLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "The Author", path: "/author" },
  { name: "FAQ", path: "/faq" },
  { name: "Editorial Policy", path: "/editorial-policy" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-zwift-dark/10 to-transparent pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center space-x-2 text-zwift-orange hover:text-zwift-orange/80 transition-colors mb-4"
            >
              <Bike size={24} className="text-zwift-orange" />
              <span className="text-lg font-bold">
                ZwiftCalculator<span className="text-zwift-blue">.com</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-sm">
              Independent Zwift calculators and training analysis, built and maintained by one rider who shows his
              working. No sponsored posts, no affiliate links, no paywall.
            </p>
            <p className="text-sm text-muted-foreground">
              Written by{" "}
              <Link to={AUTHOR.path} className="text-zwift-orange hover:text-zwift-orange/80 transition-colors">
                {AUTHOR.name}
              </Link>
            </p>
          </div>

          {/* Calculators */}
          <nav aria-label="Calculators">
            <h2 className="font-semibold mb-4 text-foreground text-base">Calculators</h2>
            <ul className="space-y-2.5">
              {calculatorLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Read */}
          <nav aria-label="Articles">
            <h2 className="font-semibold mb-4 text-foreground text-base">Read</h2>
            <ul className="space-y-2.5">
              {readLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Site */}
          <nav aria-label="About this site">
            <h2 className="font-semibold mb-4 text-foreground text-base">This Site</h2>
            <ul className="space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Publisher details */}
        <div className="border-t border-border pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
          <div className="space-y-1">
            <p className="font-medium text-foreground">{ORGANIZATION.legalName}</p>
            <p>CVR / VAT: {ORGANIZATION.registrationNumber}</p>
            <p className="leading-relaxed">
              {ORGANIZATION.street}
              <br />
              {ORGANIZATION.postalCode} {ORGANIZATION.city}, {ORGANIZATION.countryName}
            </p>
            <p className="pt-1">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-1.5 text-zwift-orange hover:text-zwift-orange/80 transition-colors break-all"
              >
                <Mail size={14} aria-hidden="true" />
                {SITE.email}
              </a>
            </p>
          </div>

          <div className="md:text-right space-y-2">
            <p className="leading-relaxed md:ml-auto md:max-w-sm">
              ZwiftCalculator.com is not affiliated with, endorsed by or sponsored by Zwift Inc. "Zwift" and route
              names are trademarks of their respective owners and are used here descriptively.
            </p>
            <p className="leading-relaxed md:ml-auto md:max-w-sm">
              Estimates on this site are informational and are not medical, coaching or training advice.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} {SITE.name}. All rights reserved.
            </p>
            <p className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-zwift-orange" aria-hidden="true" /> for Zwifters
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
