import { Link } from "react-router-dom";
import { Bike, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-zwift-dark/10 to-transparent pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link
              to="/"
              className="flex items-center space-x-2 text-zwift-orange hover:text-zwift-orange/80 transition-colors"
            >
              <Bike size={24} className="text-zwift-orange" />
              <span className="text-lg font-bold">
                ZwiftCalculator<span className="text-zwift-blue">.com</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Calculate your estimated Alpe du Zwift climbing time based on your weight and power.
              Fast, accurate, and built for Zwifters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alpeduzwiftcalculator"
                    className="text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    Alpe du Zwift Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ventop-calculator"
                    className="text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    Ven Top Zwift Time Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/author"
                    className="text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    Author
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="font-medium text-foreground">CLD Consulting</p>
                <p>CVR: 45654230</p>
                <p>Rendsburggade 28, 4, 9<br />9000 Aalborg<br />Denmark</p>
                <p>
                  <a
                    href="mailto:zwiftcalculator@gmail.com"
                    className="text-zwift-orange hover:text-zwift-orange/80 transition-colors"
                  >
                    Zwiftcalculator@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {currentYear} ZwiftCalculator.com. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center">
              Made with <Heart size={14} className="mx-1 text-zwift-orange" /> for Zwifters
            </p>
          </div>
          <div className="text-xs text-muted-foreground max-w-3xl">
            <p className="mb-2">
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
                className="text-zwift-orange hover:text-zwift-orange/80 underline"
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
