import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PhoneCall } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923457507053"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:scale-110 transition-transform duration-300 md:bottom-8 md:right-8"
        aria-label="Contact on WhatsApp"
      >
        <SiWhatsapp className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-pulse" />
      </a>

      {/* Mobile Sticky Call Button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/80 backdrop-blur-lg border-t border-border md:hidden">
        <a
          href="tel:03457507053"
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-[15px] shadow-lg shadow-primary/20"
        >
          <PhoneCall className="w-5 h-5" />
          EMERGENCY CALL: 0345-7507053
        </a>
      </div>
      
      {/* Spacer for mobile sticky button */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
