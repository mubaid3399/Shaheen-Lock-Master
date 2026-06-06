import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Key, Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hidden on scroll down, visible on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          backgroundColor: isScrolled ? "rgba(11, 11, 11, 0.9)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent"
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 w-full transition-colors"
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Key className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight block leading-none">
                Shameen
              </span>
              <span className="font-display font-medium text-xs text-accent tracking-widest uppercase block mt-0.5">
                Lock Master
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-white/10" />
            <a 
              href="tel:03457507053"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>0345-7507053</span>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col lg:hidden"
          >
            <ul className="flex flex-col gap-6 text-center mt-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-display font-medium ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4">
              <a 
                href="tel:03457507053"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-lg"
              >
                <PhoneCall className="w-5 h-5" />
                Call 0345-7507053
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
