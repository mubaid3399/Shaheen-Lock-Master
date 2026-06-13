import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, KeyRound, ShieldCheck, Wrench, Battery, Unlock, Zap, Car, Settings } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Key Programming",
      icon: <KeyRound className="w-8 h-8 text-primary" />,
      items: [
        { name: "Smart Key Programming", desc: "For modern push-to-start vehicles." },
        { name: "Push Start Programming", desc: "Replacing lost or damaged fobs." },
        { name: "Remote Key Programming", desc: "Syncing standard remote entry keys." },
        { name: "Hybrid Vehicle Smart Keys", desc: "Specialized programming for hybrids." }
      ]
    },
    {
      title: "Key Creation & Duplication",
      icon: <Settings className="w-8 h-8 text-primary" />,
      items: [
        { name: "Car Key Duplication", desc: "Laser cutting spare keys." },
        { name: "Lost Key Service", desc: "Generating keys from scratch." },
        { name: "YBR Yamaha Key Making", desc: "Motorcycle key services." },
        { name: "Digital Locker Key Creation", desc: "Keys for electronic safes." }
      ]
    },
    {
      title: "Locks & Ignition",
      icon: <Wrench className="w-8 h-8 text-primary" />,
      items: [
        { name: "Door Lock Repair", desc: "Fixing jammed or broken locks." },
        { name: "Door Lock Replacement", desc: "Installing new lock cylinders." },
        { name: "Ignition Repair", desc: "Extracting broken keys, fixing turning issues." },
        { name: "Ignition Replacement", desc: "Complete ignition cylinder swaps." }
      ]
    },
    {
      title: "Security & Electronics",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      items: [
        { name: "Immobilizer Keys", desc: "Transponder chip programming." },
        { name: "Power Window Repair", desc: "Fixing window motor/regulator issues." },
        { name: "Power Window Replacement", desc: "Installing new window mechanisms." },
        { name: "Sunroof Repair", desc: "Electronic and mechanical sunroof fixes." }
      ]
    },
    {
      title: "Emergency & Maintenance",
      icon: <Zap className="w-8 h-8 text-primary" />,
      items: [
        { name: "Vehicle Lockout Service", desc: "Damage-free door unlocking." },
        { name: "Emergency Locksmith Service", desc: "24/7 rapid response." },
        { name: "Remote Battery Replacement", desc: "Quick battery swaps for remotes." },
        { name: "Digital Locker Unlocking", desc: "Safe and locker entry." }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services | Auto Key Programming & Repair"
        description="Comprehensive automotive locksmith services including smart key programming, immobilizer solutions, and door lock repair."
      />
      
      <section className="pt-32 pb-24 border-b border-border bg-card/30 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Comprehensive Auto Security Services</h1>
          <p className="text-xl text-muted-foreground">From emergency lockouts to complex smart key programming, we handle all your vehicle security needs with precision and care.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-2xl flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-background rounded-xl border border-border">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-display font-bold">{category.title}</h2>
                </div>
                
                <ul className="space-y-4 flex-1">
                  {category.items.map((item, j) => {
                    const slug = item.name.toLowerCase().replace(/ /g, '-');
                    return (
                      <li key={j}>
                        <Link href={`/services/${slug}`} className="block p-4 rounded-xl hover:bg-secondary border border-transparent hover:border-border transition-all group">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                          </div>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Not Sure What You Need?</h2>
           <p className="text-primary-foreground/80 text-lg mb-10">Describe your issue to our experts, and we'll provide a rapid diagnosis and quote.</p>
           <a href="tel:03085556779" className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Talk to an Expert
           </a>
         </div>
      </section>
    </>
  );
}
