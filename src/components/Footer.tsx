
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

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
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
                    to="/calculator"
                    className="text-muted-foreground hover:text-zwift-orange transition-colors"
                  >
                    Alpe du Zwift Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-zwift-orange transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-zwift-orange transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} ZwiftCalculator.com. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-zwift-orange" /> for Zwifters
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
