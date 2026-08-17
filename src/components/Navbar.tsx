import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bike, Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  path: string;
  description?: string;
}

const calculatorLinks: NavLink[] = [
  {
    name: "Alpe du Zwift",
    path: "/alpeduzwiftcalculator",
    description: "Time up the 21 hairpins",
  },
  {
    name: "Ven-Top",
    path: "/ventop-calculator",
    description: "Zwift's Mont Ventoux",
  },
  {
    name: "Climb Time (any climb)",
    path: "/zwift-climb-time-calculator",
    description: "Physics model for 20+ climbs",
  },
  {
    name: "FTP & Training Zones",
    path: "/zwift-ftp-calculator",
    description: "Turn a test into zones",
  },
  {
    name: "Racing Category",
    path: "/zwift-racing-category-calculator",
    description: "Which pen you belong in",
  },
  {
    name: "Alpe vs Ven-Top",
    path: "/alpe-vs-ventop",
    description: "Side-by-side comparison",
  },
];

const mainLinks: NavLink[] = [
  { name: "Blog", path: "/blog" },
  { name: "Climb Data", path: "/zwift-climbs" },
  { name: "FAQ", path: "/faq" },
  { name: "About", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close everything when the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
    setCalculatorsOpen(false);
  }, [location.pathname]);

  // Close the desktop dropdown on an outside click or Escape.
  useEffect(() => {
    if (!calculatorsOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCalculatorsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCalculatorsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [calculatorsOpen]);

  const isActive = (path: string) => location.pathname === path;
  const calculatorSectionActive = calculatorLinks.some((link) => isActive(link.path));

  const linkClass = (active: boolean) =>
    `font-medium whitespace-nowrap hover:text-zwift-orange transition-colors ${
      active ? "text-zwift-orange" : "text-foreground"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // The open mobile panel is opaque, so the bar above it has to be too -
        // otherwise the logo row floats over the page while the menu is down.
        scrolled || mobileMenuOpen
          ? "bg-white/95 dark:bg-zwift-dark/95 backdrop-blur-md shadow-md"
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
        {/* The full bar needs ~810px of room, so it only switches on at lg - at md it
            collided with the logo and wrapped "Climb Data" onto two lines. */}
        <nav aria-label="Main" className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={linkClass(isActive("/"))} aria-current={isActive("/") ? "page" : undefined}>
            Home
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={`flex items-center gap-1 ${linkClass(calculatorSectionActive)}`}
              onClick={() => setCalculatorsOpen((open) => !open)}
              aria-expanded={calculatorsOpen}
              aria-haspopup="true"
            >
              Calculators
              <ChevronDown
                size={16}
                className={`transition-transform ${calculatorsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {calculatorsOpen && (
              <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border-2 border-border bg-background shadow-xl p-2">
                <ul>
                  {calculatorLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`block rounded-lg px-3 py-2 hover:bg-muted transition-colors ${
                          isActive(link.path) ? "bg-muted" : ""
                        }`}
                      >
                        <span className="block text-sm font-semibold text-foreground">{link.name}</span>
                        {link.description && (
                          <span className="block text-xs text-muted-foreground">{link.description}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={linkClass(isActive(link.path))}
              aria-current={isActive(link.path) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-foreground hover:text-zwift-orange transition-colors"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto bg-background dark:bg-zwift-dark shadow-lg animate-fade-in">
          <nav aria-label="Main" className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            <Link
              to="/"
              className={`${linkClass(isActive("/"))} py-2`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Home
            </Link>

            <p className="pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Calculators
            </p>
            {calculatorLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${linkClass(isActive(link.path))} py-2 pl-3`}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}

            <p className="pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Read
            </p>
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${linkClass(isActive(link.path))} py-2 pl-3`}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
