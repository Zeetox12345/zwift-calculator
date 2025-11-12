import { Link } from "react-router-dom";
import { Bike, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-zwift-dark/10 to-transparent pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center space-x-2 text-zwift-orange hover:text-zwift-orange/80 transition-colors mb-4"
            >
              <Bike size={24} className="text-zwift-orange" />
              <span className="text-lg font-bold">
                ZwiftCalculator<span className="text-zwift-blue">.com</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Calculate your estimated Alpe du Zwift climbing time based on your weight and power.
              Fast, accurate, and built for Zwifters.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-base">Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/alpeduzwiftcalculator"
                  className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                >
                  Alpe du Zwift Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/ventop-calculator"
                  className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                >
                  Ven Top Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/alpe-vs-ventop"
                  className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                >
                  Alpe vs Ven-Top
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/author"
                  className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                >
                  Author
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-base">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-zwift-orange transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-base">Contact</h3>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">CLD Consulting</p>
              <p>CVR: 45654230</p>
              <p className="leading-relaxed">
                Rendsburggade 28, 4, 9<br />
                9000 Aalborg<br />
                Denmark
              </p>
              <p className="pt-1">
                <a
                  href="mailto:zwiftcalculator@gmail.com"
                  className="text-zwift-orange hover:text-zwift-orange/80 transition-colors break-all"
                >
                  Zwiftcalculator@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 space-y-4">
          {/* Copyright and Motto */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} ZwiftCalculator.com. All rights reserved.</p>
            <p className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-zwift-orange" /> for Zwifters
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="text-xs text-muted-foreground pt-2">
            <p>
              <strong className="text-foreground">Privacy Notice:</strong> At ZwiftCalculator.com, we respect your privacy. We use cookies and similar technologies to operate and improve our site, analyze traffic, and serve personalized ads via Ezoic and other partners. By using our website, you agree to our use of cookies. You can manage cookie preferences in your browser settings. For more details about how we collect, use, and protect your information, please see our{" "}
              <Link
                to="/privacy-policy"
                className="text-zwift-orange hover:text-zwift-orange/80 underline"
              >
                Privacy Policy
              </Link>
              . If you have questions or wish to exercise your privacy rights (including GDPR/EEA or CCPA/CPRA rights), contact us at{" "}
              <a
                href="mailto:zwiftcalculator@gmail.com"
                className="text-zwift-orange hover:text-zwift-orange/80 underline break-all"
              >
                zwiftcalculator@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
