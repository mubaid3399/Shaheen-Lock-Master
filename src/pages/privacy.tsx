import { SEO } from "@/components/SEO";
import { Shield, Eye, Lock, FileText, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy | Shaheen Locksmith"
        description="Read the Privacy Policy of Shaheen Locksmith to understand how we collect, use, and protect your personal information."
        keywords="Shaheen Locksmith privacy policy, auto locksmith data policy, locksmith terms Pakistan"
      />
      
      <section className="pt-32 pb-20 border-b border-border bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: June 17, 2026. Your privacy and security are our highest priorities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none space-y-12">
            
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">1</span>
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Shaheen Locksmith ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs the privacy practices of our website (shaheenlocksmith.com) and the automotive locksmith services we provide across Islamabad and Rawalpindi. Please read this policy carefully to understand what information we collect and how we use it.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">2</span>
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To provide our specialized automotive locksmith services, we may collect the following information:
              </p>
              <ul className="space-y-3 text-muted-foreground pl-6 list-disc">
                <li><strong>Contact Information:</strong> Name, phone number, and email address when you call or fill out a form.</li>
                <li><strong>Location Data:</strong> Your precise location, to dispatch our mobile emergency locksmiths to your vehicle.</li>
                <li><strong>Vehicle Information:</strong> Make, model, year, and vehicle identification number (VIN) to cut keys, program immobilizers, or verify ownership.</li>
                <li><strong>Verification Data:</strong> Proof of vehicle ownership (e.g., registration documents, ID card) to prevent unauthorized key duplication or lockout access.</li>
              </ul>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">3</span>
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for various business and service purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background border border-border">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" /> Service Delivery
                  </h4>
                  <p className="text-xs text-muted-foreground">To program smart keys, cut spare keys, repair ignitions, and verify legal ownership before working on a vehicle.</p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Emergency Dispatch
                  </h4>
                  <p className="text-xs text-muted-foreground">To coordinate real-time dispatch of our mobile vans to roadside lockouts in Islamabad and Rawalpindi.</p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" /> Communication
                  </h4>
                  <p className="text-xs text-muted-foreground">To contact you regarding service status updates, quote approvals, and reply to your messages or inquiries.</p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" /> Improvement & Safety
                  </h4>
                  <p className="text-xs text-muted-foreground">To monitor website traffic, secure our digital platform, and comply with security requirements.</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">4</span>
                Information Security & Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take security seriously. We implement robust technical and organizational measures to safeguard your data. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Importantly, we do not retain vehicle diagnostic codes, transponder programming keys, or security pins after the job is completed. Your digital security profile is cleared immediately once key programming is successful to prevent any subsequent breach risk. We also do not sell, rent, or trade your personal details to third parties for marketing purposes.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">5</span>
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have questions or concerns about this Privacy Policy, please reach out to us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="tel:03085556779" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">Call Us</span>
                    <span className="text-sm font-semibold text-white">0308-5556779</span>
                  </div>
                </a>
                <a href="https://wa.me/923457507053" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">WhatsApp</span>
                    <span className="text-sm font-semibold text-white">0345-7507053</span>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">Workshop Location</span>
                    <span className="text-sm font-semibold text-white">F-10 Markaz, Islamabad</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Read Our Terms of Service</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Make sure to read and agree to our terms and conditions before scheduling lock repair or key cutting.
          </p>
          <Link href="/terms" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform">
            Terms of Service
          </Link>
        </div>
      </section>
    </>
  );
}
