import { SEO } from "@/components/SEO";
import { useParams } from "wouter";
import { CheckCircle2, PhoneCall, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SiWhatsapp } from "react-icons/si";

// Gallery Category Images for Background
import gallery2 from "@/assets/gallery-2.png"; // Key Creation / Duplication
import gallery3 from "@/assets/gallery-3.png"; // Key Programming
import gallery4 from "@/assets/gallery-4.png"; // Locks & Ignition
import gallery5 from "@/assets/gallery-5.png"; // Security & Electronics
import gallery8 from "@/assets/gallery-8.png"; // Emergency & Maintenance

const bgImages: Record<string, string> = {
  // Key Programming
  "smart-key-programming": gallery3,
  "push-start-programming": gallery3,
  "remote-key-programming": gallery3,
  "hybrid-vehicle-smart-keys": gallery3,
  
  // Key Creation & Duplication
  "car-key-duplication": gallery2,
  "lost-key-service": gallery2,
  "ybr-yamaha-key-making": gallery2,
  "digital-locker-key-creation": gallery2,
  
  // Locks & Ignition
  "door-lock-repair": gallery4,
  "door-lock-replacement": gallery4,
  "ignition-repair": gallery4,
  "ignition-replacement": gallery4,
  
  // Security & Electronics
  "immobilizer-keys": gallery5,
  "power-window-repair": gallery5,
  "power-window-replacement": gallery5,
  "sunroof-repair": gallery5,
  
  // Emergency & Maintenance
  "vehicle-lockout-service": gallery8,
  "emergency-locksmith-service": gallery8,
  "remote-battery-replacement": gallery8,
  "digital-locker-unlocking": gallery8,
};

export default function ServiceDetail() {
  const { id } = useParams();
  const title = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Service Details";
  const bgImage = id ? bgImages[id] : null;
  
  return (
    <>
      <SEO 
        title={`${title} | Shaheen Lock Master`}
        description={`Professional ${title.toLowerCase()} services in Islamabad and Rawalpindi. Rapid response, dealer-level equipment, expert technicians.`}
      />
      
      <section className="pt-32 pb-24 border-b border-border bg-card/10 relative overflow-hidden">
        {/* Dynamic Background Image based on Service Category */}
        {bgImage && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img 
              src={bgImage} 
              alt={title} 
              className="w-full h-full object-cover opacity-20 select-none pointer-events-none" 
            />
            {/* Dark gradient mask for premium blending and text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
          </div>
        )}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We provide professional, reliable, and swift {title.toLowerCase()} services using state-of-the-art diagnostic and programming equipment in Islamabad and Rawalpindi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-16">
              
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">Service Overview</h2>
                <p>
                  Modern vehicles utilize complex electronic security systems. Our {title.toLowerCase()} service ensures that your vehicle's security is perfectly maintained or restored. We don't just provide a quick fix; we ensure the solution is permanent and matches factory specifications.
                </p>
                <p>
                  Whether you've lost all your keys, need a spare, or are dealing with a malfunction, our expert technicians have the tools and the know-how to resolve the issue promptly, getting you back on the road safely.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Dealer-Level Equipment", desc: "We use the exact same technology as main dealerships for perfect integration." },
                    { title: "Rapid Response", desc: "We understand urgency and offer fast turnaround times, often same-day." },
                    { title: "Mobile Service", desc: "We can come to your location anywhere in Islamabad or Rawalpindi." },
                    { title: "Cost-Effective", desc: "Premium, guaranteed service without the inflated dealership price tag." }
                  ].map((benefit, i) => (
                    <div key={i} className="bg-card border border-border p-6 rounded-xl">
                      <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">The Process</h2>
                <div className="space-y-6">
                   {[
                     { step: "01", title: "Assessment", desc: "We quickly evaluate the issue and provide a transparent quote." },
                     { step: "02", title: "Execution", desc: `Our technicians perform the ${title.toLowerCase()} using precision tools.` },
                     { step: "03", title: "Verification", desc: "We rigorously test all components to ensure everything functions perfectly." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6">
                       <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 font-display">
                         {item.step}
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                         <p className="text-muted-foreground">{item.desc}</p>
                       </div>
                     </div>
                   ))}
                </div>
              </div>

            </div>

            <div className="space-y-6">
              <div className="sticky top-24 bg-card border border-border p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-display font-bold mb-4">Need This Service?</h3>
                <p className="text-muted-foreground mb-8">Contact us now for an immediate quote or to dispatch a technician to your location.</p>
                <div className="space-y-4">
                  <a href="tel:03457507053" className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform">
                    <PhoneCall className="w-5 h-5" />
                    Call 0345-7507053
                  </a>
                  <a href="https://wa.me/923457507053" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform">
                    <SiWhatsapp className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
                
                <hr className="my-8 border-border" />
                
                <div className="text-sm text-muted-foreground space-y-3">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> Available 24/7
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> Servicing all car brands
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> Mobile service available
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
