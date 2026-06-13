import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import aboutImg from "@/assets/about-workshop.png";
import { CheckCircle2, ShieldCheck, Target, Users, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Shaheen Locksmith"
        description="Learn about Islamabad's most trusted automotive locksmith. Years of experience in smart key programming and auto lock repair."
      />
      
      <section className="pt-32 pb-24 border-b border-border bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Mastering Automotive Security.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a team of dedicated automotive security specialists based in Islamabad. We don't just cut keys — we master the complex electronic systems that keep modern vehicles secure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <OptimizedImage
                src={aboutImg}
                alt="Our Workshop"
                wrapperClassName="w-full h-[600px] rounded-2xl border border-border shadow-2xl"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Shaheen Locksmith began with a simple mission: to provide dealership-quality auto locksmith services without the exorbitant wait times and costs. Over the years, vehicles have evolved from simple mechanical locks to sophisticated electronic security systems. We evolved right alongside them. Today, we are proud to be the go-to experts for automotive lock and key solutions in the Twin Cities.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">Advanced Technology</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Modern cars require modern solutions. We invest heavily in dealer-level diagnostic and programming equipment. This allows us to offer services that were traditionally only available at expensive dealerships.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Laser Key Cutting Machines",
                    "Advanced EEPROM & MCU Programmers",
                    "Dealer-Level Diagnostic Scanners",
                    "Immobilizer Code Extractors"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-card border border-border p-8 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">To deliver rapid, reliable, and technologically advanced automotive locksmith solutions that exceed client expectations.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Integrity, continuous learning, and an unwavering commitment to quality craftsmanship and customer security.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Why Clients Trust Us</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We treat every vehicle as if it were our own. No hidden fees, no damage, just professional results every time.</p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border text-center">
         <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Experience the Difference</h2>
            <p className="text-muted-foreground text-lg mb-10">Whether it's an emergency or routine spare key cutting, Shaheen Locksmith is ready to assist you.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/services" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                Explore Our Services
              </Link>
              <Link href="/contact" className="bg-secondary text-secondary-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/80 transition-colors">
                Contact Us
              </Link>
            </div>
         </div>
      </section>
    </>
  );
}
