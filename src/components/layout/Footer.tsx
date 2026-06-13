import { Link } from "wouter";
import { Key, MapPin, Phone, Clock, Mail } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";
import { OptimizedImage } from "@/components/OptimizedImage";
import logoImg from "@/assets/logo & favicon.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <OptimizedImage
                src={logoImg}
                alt="Shaheen Locksmith"
                priority
                wrapperClassName="shrink-0"
                showSkeleton={false}
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight block leading-none text-white">
                  Shaheen
                </span>
                <span className="font-display font-medium text-xs text-accent tracking-widest uppercase block mt-0.5">
                  Locksmith
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Islamabad & Rawalpindi's most trusted automotive locksmith. Expert programming, rapid emergency response, and precision key cutting for all premium vehicle brands.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/923457507053" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#25D366] hover:text-white transition-colors" aria-label="WhatsApp">
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/reel/DZIOYCCzx8K/?igsh=MWxjZDUyb2k0c3lm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#E1306C] hover:text-white transition-colors" aria-label="Instagram">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@locksmith7053?_r=1&_t=ZS-971CVdEVvku" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-black hover:text-white border border-transparent hover:border-white/10 transition-colors" aria-label="TikTok">
                <SiTiktok className="w-4.5 h-4.5" />
              </a>
              <a href="https://www.facebook.com/share/18TWLxTgK3/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#1877F2] hover:text-white transition-colors" aria-label="Facebook">
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services/car-key-duplication" className="hover:text-primary transition-colors">Smart Key Programming</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Immobilizer Solutions</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Emergency Unlocking</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Ignition Repair</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Lost Key Replacement</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Shop #1-2 Auto Market F-10/4 Markaz, Islamabad, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:03085556779" className="hover:text-white transition-colors">0308-5556779 (Call)</a>
                  <a href="tel:03457507053" className="hover:text-white transition-colors">0345-7507053 (WhatsApp)</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>Mon-Sat: 9:00 AM - 9:00 PM</span>
                  <span>Sun: 10:00 AM - 7:00 PM</span>
                  <span className="text-primary font-medium mt-1">24/7 Emergency Service</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Shaheen Locksmith. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
