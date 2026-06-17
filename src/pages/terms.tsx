import { SEO } from "@/components/SEO";
import { FileText, ShieldAlert, Key, ClipboardList, Ban, Scale, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service | Shaheen Locksmith"
        description="Read the Terms of Service of Shaheen Locksmith to understand our rules, guidelines, and terms regarding locksmith work and vehicle verification."
      />
      
      <section className="pt-32 pb-20 border-b border-border bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: June 17, 2026. Please read our service terms carefully before booking.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none space-y-12">
            
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">1</span>
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing our website (shaheenlocksmith.com) or booking our mobile/in-shop automotive locksmith services, you agree to be bound by these Terms of Service. If you do not agree, please do not request or utilize our locksmith services.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">2</span>
                Ownership Verification (Mandatory)
              </h2>
              <div className="flex gap-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20 mb-4">
                <ShieldAlert className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Security & Legal Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    To prevent vehicle theft and comply with local laws in Islamabad and Rawalpindi, we reserve the right to verify vehicle ownership before performing any work.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before unlocking a vehicle, programming a smart key, or replacing an immobilizer module, the client must present:
              </p>
              <ul className="space-y-3 text-muted-foreground pl-6 list-disc">
                <li>Valid government-issued identification (CNIC or Passport).</li>
                <li>Proof of ownership (e.g., registration book, file, card, or lease agreement).</li>
                <li>Written or verbal authorization from the owner if the client is not the registered owner.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to refuse service if ownership cannot be verified or if we suspect fraudulent intent.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">3</span>
                Pricing and Service Quotes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Locksmith service pricing depends on the vehicle make, model, year, and lock complexity:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-background border border-border">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-primary" /> Estimated Quotes
                  </h4>
                  <p className="text-xs text-muted-foreground">All quotes given over the phone, chat, or email are initial estimates based on customer descriptions. The final price may change upon onsite inspection.</p>
                </div>
                <div className="p-4 rounded-xl bg-background border border-border">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Key className="w-4 h-4 text-primary" /> Premium Brands
                  </h4>
                  <p className="text-xs text-muted-foreground">Smart key programming or lock replacement for high-security, European, and luxury vehicles (BMW, Mercedes, Audi, etc.) may require specialized software and parts that affect final pricing.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Payment is due immediately upon completion of services. We accept cash, mobile bank transfers, and other pre-arranged payment methods.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">4</span>
                Emergency Roadside Dispatch & Cancellations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For emergency mobile locksmith services:
              </p>
              <ul className="space-y-3 text-muted-foreground pl-6 list-disc">
                <li>We dispatch our vans promptly. Dispatch times provided are estimates and can vary due to traffic, weather, or other unforeseen circumstances.</li>
                <li><strong>Cancellation Policy:</strong> If you cancel the service after our technician has already been dispatched and is en route, a dispatch/cancellation fee may apply to cover travel costs.</li>
              </ul>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">5</span>
                Limitations of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vehicles with aftermarket modifications, previous faulty lock repairs, or corrupted immobilizer systems (EEPROM/BCM) can pose diagnostic risks:
              </p>
              <ul className="space-y-3 text-muted-foreground pl-6 list-disc">
                <li>We are not responsible for pre-existing vehicle electrical issues, corrupted ECU/immobilizer data from previous locksmith attempts, or physical wear on locking mechanisms.</li>
                <li>While we use high-grade diagnostics and key programmers, the customer understands that accessing vehicle computers involves risks. We carry out procedures using industry standards and hold no liability for pre-existing electronic faults.</li>
              </ul>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">6</span>
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service and any agreement for locksmith services are governed by and construed in accordance with the laws of Pakistan. Any dispute arising out of or related to our services shall be subject to the exclusive jurisdiction of the competent courts of Islamabad.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Questions About Our Terms?</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Get in touch with us if you want clarification on any part of our service conditions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform">
              Contact Us
            </Link>
            <Link href="/privacy" className="bg-secondary text-secondary-foreground border border-border px-6 py-3 rounded-xl font-bold text-sm hover:bg-secondary/80 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
