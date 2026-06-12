import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "@/components/OptimizedImage";
import logoImg from "@/assets/logo & favicon.png";

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
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <OptimizedImage
              src={logoImg}
              alt="Shaheen Lock Master"
              priority
              wrapperClassName="shrink-0"
              showSkeleton={false}
              className="h-8 md:h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl tracking-tight block leading-none text-white group-hover:text-primary transition-colors duration-300">
                Shaheen
              </span>
              <span className="font-display font-medium text-[10px] md:text-xs text-accent tracking-widest uppercase block mt-0.5">
                Lock Master
              </span>
            </div>
          </Link>

          {/* Desktop Nav — centered absolutely */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-40">
            <ul className="flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 block
                      ${location === link.href
                        ? "bg-primary text-white shadow-[0_0_16px_rgba(249,115,22,0.5)]"
                        : "text-muted-foreground hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center z-50">
            <a
              href="tel:03457507053"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>0345-7507053</span>
            </a>
          </div>

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

      {/* Mobile Nav — Left Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-72 z-50 bg-background/95 backdrop-blur-xl border-r border-white/10 flex flex-col lg:hidden shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                  <OptimizedImage
                    src={logoImg}
                    alt="Shaheen Lock Master"
                    wrapperClassName="shrink-0"
                    showSkeleton={false}
                    className="h-7 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-base tracking-tight block leading-none text-white">
                      Shaheen
                    </span>
                    <span className="font-display font-medium text-[9px] text-accent tracking-widest uppercase block mt-0.5">
                      Lock Master
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        location === link.href
                          ? "bg-primary text-white shadow-[0_0_14px_rgba(249,115,22,0.4)]"
                          : "text-muted-foreground hover:text-white hover:bg-white/8"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA at bottom */}
              <div className="px-4 pb-8">
                <a
                  href="tel:03457507053"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] w-full"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call 0345-7507053
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
