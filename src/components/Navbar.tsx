import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bike, Calculator, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Alpe du Zwift", path: "/alpeduzwiftcalculator" },
    { name: "Ven Top Calculator", path: "/ventop-calculator" },
    { name: "Alpe vs Ven-Top", path: "/alpe-vs-ventop" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-zwift-dark/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-zwift-orange hover:text-zwift-orange/80 transition-colors"
        >
          <Bike size={28} className="text-zwift-orange" />
          <span className="text-lg md:text-xl font-bold">
            ZwiftCalculator<span className="text-zwift-blue">.com</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium hover:text-zwift-orange transition-colors ${
                location.pathname === link.path
                  ? "text-zwift-orange"
                  : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/alpeduzwiftcalculator"
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-zwift-orange text-white hover:bg-zwift-orange/90 transition-all shadow-neon-orange hover-scale"
          >
            <Calculator size={18} />
            <span>Try Calculator</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground hover:text-zwift-orange transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background dark:bg-zwift-dark shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium py-2 hover:text-zwift-orange transition-colors ${
                  location.pathname === link.path
                    ? "text-zwift-orange"
                    : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/alpeduzwiftcalculator"
              className="flex items-center justify-center space-x-2 py-3 rounded-full bg-zwift-orange text-white hover:bg-zwift-orange/90 transition-all shadow-neon-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calculator size={18} />
              <span>Try Calculator</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
