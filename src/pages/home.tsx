import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { ShieldCheck, Zap, Wrench, Clock, Star, MapPin, CheckCircle, ArrowRight, ChevronDown, PhoneCall } from "lucide-react";

import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { LazyBackground } from "@/components/LazyBackground";

import expertiseBg from "@/assets/expertise-bg.png";
import heroVideo from "@/assets/Locksmith_repairing_car_key_202606121638.mp4";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import serviceSmartKey from "@/assets/service_smart_key.png";
import serviceImmobilizer from "@/assets/service_immobilizer.png";
import serviceUnlocking from "@/assets/service_unlocking.png";
import serviceIgnition from "@/assets/service_ignition.png";
import serviceDuplication from "@/assets/service_duplication.png";
import serviceBattery from "@/assets/service_battery.png";

// Brand Logos
import logoToyota from "@/assets/brands/toyota.png";
import logoHonda from "@/assets/brands/honda.png";
import logoSuzuki from "@/assets/brands/suzuki.png";
import logoKia from "@/assets/brands/kia.png";
import logoHyundai from "@/assets/brands/hyundai.png";
import logoBmw from "@/assets/brands/bmw.png";
import logoAudi from "@/assets/brands/audi.png";
import logoMercedes from "@/assets/brands/mercedes.png";
import logoNissan from "@/assets/brands/nissan.png";
import logoLexus from "@/assets/brands/lexus.png";
import logoMitsubishi from "@/assets/brands/mitsubishi.png";
import logoMg from "@/assets/brands/mg.png";
import logoChangan from "@/assets/brands/changan.png";
import logoProton from "@/assets/brands/proton.png";
import logoHaval from "@/assets/brands/haval.png";

// Customer Avatars
import customer1 from "@/assets/customer-1.png";
import customer2 from "@/assets/customer-2.png";
import customer3 from "@/assets/customer-3.png";


function Counter({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    let timer: any;
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const brandLogos = [
  { name: "Toyota", img: logoToyota },
  { name: "Honda", img: logoHonda },
  { name: "Suzuki", img: logoSuzuki },
  { name: "KIA", img: logoKia },
  { name: "Hyundai", img: logoHyundai },
  { name: "BMW", img: logoBmw },
  { name: "Audi", img: logoAudi },
  { name: "Mercedes", img: logoMercedes },
  { name: "Nissan", img: logoNissan },
  { name: "Lexus", img: logoLexus },
  { name: "Mitsubishi", img: logoMitsubishi },
  { name: "MG", img: logoMg },
  { name: "Changan", img: logoChangan },
  { name: "Proton", img: logoProton },
  { name: "Haval", img: logoHaval }
];

const reviews = [
  {
    name: "Faisal Rehman",
    role: "BMW 5-Series Owner",
    img: customer1,
    text: "Lost my only smart key for my BMW and was panicking. Shaheen Locksmith came to my location in Bahria Town, diagnosed the vehicle, and programmed a brand new key in less than an hour. Half the price of what the dealership quoted. Extremely professional!",
    stars: 5
  },
  {
    name: "Ayesha Malik",
    role: "Honda Civic Owner",
    img: customer2,
    text: "Locked my keys inside the car late at night. Shaheen Locksmith arrived within 25 minutes of calling. They opened the car in just a few minutes without causing a single scratch. Highly recommend their emergency 24/7 service!",
    stars: 5
  },
  {
    name: "Kamran Khan",
    role: "Toyota Fortuner Owner",
    img: customer3,
    text: "Wanted a spare key fob for my Fortuner. Shaheen Locksmith cut the blade and programmed the remote perfectly. Everything works flawlessly, buttons respond fast. Friendly staff and fast turnaround.",
    stars: 5
  }
];

export default function Home() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  
  useEffect(() => {
    if (!headlineRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    
    const text = headlineRef.current.innerText;
    headlineRef.current.innerText = "";
    
    const words = text.split(" ");
    words.forEach((word, wordIndex) => {
      // Create a span to contain the word and prevent line breaks in the middle of it
      const wordSpan = document.createElement("span");
      wordSpan.className = "inline-block whitespace-nowrap";
      
      // Split word into characters
      const chars = word.split("");
      chars.forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        charSpan.className = "char-span";
        charSpan.style.opacity = "0";
        charSpan.style.filter = "blur(10px)";
        charSpan.style.display = "inline-block";
        wordSpan.appendChild(charSpan);
      });
      
      headlineRef.current?.appendChild(wordSpan);
      
      // Append space between words
      if (wordIndex < words.length - 1) {
        const spaceNode = document.createTextNode(" ");
        headlineRef.current?.appendChild(spaceNode);
      }
    });

    const targets = headlineRef.current.querySelectorAll(".char-span");
    gsap.to(targets, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.02,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2
    });



  }, []);

  const services = [
    { 
      title: "Smart Key Programming", 
      desc: "Advanced programming for modern push-start vehicles. Lost all keys? We can generate new ones.", 
      icon: <Zap className="w-6 h-6 text-primary" />,
      image: serviceSmartKey,
      link: "/services/smart-key-programming"
    },
    { 
      title: "Immobilizer Solutions", 
      desc: "Expert diagnostics and repair for immobilizer systems. We resolve 'car won't start' security issues.", 
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      image: serviceImmobilizer,
      link: "/services/immobilizer-keys"
    },
    { 
      title: "Emergency Unlocking", 
      desc: "Locked out? 24/7 rapid response damage-free vehicle unlocking for all makes and models.", 
      icon: <Clock className="w-6 h-6 text-primary" />,
      image: serviceUnlocking,
      link: "/services/vehicle-lockout-service"
    },
    { 
      title: "Ignition Repair", 
      desc: "Key stuck or turning hard? We repair and replace ignition cylinders to factory standards.", 
      icon: <Wrench className="w-6 h-6 text-primary" />,
      image: serviceIgnition,
      link: "/services/ignition-repair"
    },
    { 
      title: "Key Duplication", 
      desc: "Fast, precise key cutting for spares. Don't wait until you lose your only key.", 
      icon: <Star className="w-6 h-6 text-primary" />,
      image: serviceDuplication,
      link: "/services/car-key-duplication"
    },
    { 
      title: "Remote Battery Service", 
      desc: "Quick replacement and reprogramming of remote batteries and worn-out key shells.", 
      icon: <Zap className="w-6 h-6 text-primary" />,
      image: serviceBattery,
      link: "/services/remote-battery-replacement"
    },
  ];

  const faqs = [
    { q: "I lost my only car key. Can you make a new one?", a: "Yes, we can generate and program a new key for your vehicle even if all original keys are lost, saving you the hassle of towing to a dealership." },
    { q: "Do you provide emergency lockout services?", a: "Absolutely. We offer 24/7 emergency vehicle unlocking services across Islamabad and Rawalpindi. We use damage-free techniques." },
    { q: "How long does it take to program a smart key?", a: "For most modern vehicles, programming a new smart key or push-start fob takes between 20 to 45 minutes on-site." },
    { q: "Are your keys as good as the dealership?", a: "We use high-quality OEM and premium aftermarket keys, programmed with dealer-level equipment to ensure perfect functionality and reliability." },
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <>
      <SEO 
        title="Shaheen Locksmith | Auto Key Programming Islamabad"
        description="Professional auto key programming, smart keys, and emergency locksmith services in Islamabad and Rawalpindi. All vehicle brands supported."
      />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        
        {/* Background Video Player */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            onPlay={(e) => { e.currentTarget.playbackRate = 0.5; }}
            className="w-full h-full object-cover opacity-30 object-center"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-background/70 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-4xl">

            
            <h1 
              ref={headlineRef}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6 text-foreground"
            >
              Professional Auto Key Programming & Locksmith Services
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              Lost your car key? Need smart key programming, immobilizer solutions, or emergency unlocking? We serve all vehicle brands across Islamabad & Rawalpindi with precision tools.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="tel:03085556779"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/923457507053"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground border border-border px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/80 transition-all"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-y border-border bg-card/50 py-8 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> All Vehicle Brands</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Same Day Service</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Advanced Tools</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> Emergency 24/7</div>
            <div className="flex items-center gap-2 hidden md:flex"><CheckCircle className="w-5 h-5 text-accent" /> Experienced Technicians</div>
            <div className="flex items-center gap-2 hidden lg:flex"><CheckCircle className="w-5 h-5 text-accent" /> Local Business</div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ clipPath: "inset(0)" }} ref={cardsRef}>
        {/* Stuck Background Image */}
        <LazyBackground
          src={expertiseBg}
          alt=""
          fixed
          imageClassName="opacity-45"
          overlayClassName="bg-gradient-to-b from-background via-transparent to-background"
        />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-75" />
          <div className="absolute inset-0 bg-background/25" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Expertise</h2>
              <p className="text-muted-foreground text-lg max-w-xl">Comprehensive automotive security solutions. We use dealer-level equipment for flawless results.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group">
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {services.map((service, i) => (
               <div key={i} className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5">
                 <div>
                   {/* Card Image Wrapper */}
                   <div className="relative aspect-[16/10] overflow-hidden w-full bg-secondary">
                     <OptimizedImage
                       src={service.image}
                       alt={service.title}
                       wrapperClassName="absolute inset-0"
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-85" />
                     
                     {/* Floating Icon Badge */}
                     <div className="absolute top-4 right-4 z-20 w-11 h-11 bg-card/85 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center shadow-lg group-hover:border-primary/30 group-hover:scale-105 transition-all duration-300">
                       {service.icon}
                     </div>
                   </div>

                   {/* Card Content */}
                   <div className="p-8">
                     <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                       {service.title}
                     </h3>
                     <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                       {service.desc}
                     </p>
                     <Link href={service.link} className="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn">
                       <span>Learn More</span>
                       <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                     </Link>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & STATS */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Precision. Speed. Reliability.</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                When you're locked out or your car won't start due to key issues, you need a specialist who can resolve the problem quickly without causing damage. We bring the dealership to your doorstep.
              </p>
              <ul className="space-y-4">
                {["Dealer-level diagnostic equipment", "Upfront transparent pricing", "Mobile service across twin cities", "Damage-free entry techniques"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border p-8 rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2"><Counter end={500} suffix="+" /></div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Keys Programmed</div>
              </div>
              <div className="bg-background border border-border p-8 rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2"><Counter end={15} suffix="+" /></div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Brands Supported</div>
              </div>
              <div className="bg-background border border-border p-8 rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2"><Counter end={5} suffix="+" /></div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="bg-background border border-border p-8 rounded-2xl text-center flex flex-col justify-center">
                <div className="text-3xl font-display font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Emergency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <section className="py-16 overflow-hidden bg-background/50 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">Supporting Premium Brands</p>
        </div>
        <div className="flex whitespace-nowrap opacity-75 hover:opacity-100 transition-opacity duration-300">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex items-center gap-16 px-8"
          >
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <div key={i} className="inline-flex items-center gap-3 shrink-0 px-4 md:px-6 transition-transform hover:scale-105 duration-300 group cursor-pointer">
                <OptimizedImage
                  src={brand.img}
                  alt={`${brand.name} logo`}
                  wrapperClassName="shrink-0"
                  className="h-7 md:h-9 w-auto object-contain grayscale brightness-200 contrast-75 opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300 select-none pointer-events-none"
                />
                <span className="text-sm md:text-base font-display font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 uppercase tracking-wider">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-32 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">A streamlined process to get you back on the road safely.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { num: "01", title: "Contact Us", desc: "Call or WhatsApp us with your vehicle details and issue." },
              { num: "02", title: "Diagnose", desc: "We arrive on-site and run professional diagnostics." },
              { num: "03", title: "Program", desc: "We cut and program the new key or repair the lock." },
              { num: "04", title: "Drive Safely", desc: "Test everything and you're ready to hit the road." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center text-xl font-display font-bold mb-6 relative">
                  {step.num}
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: `${i * 0.2}s` }} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Precision in Action</h2>
            <p className="text-muted-foreground text-lg">A glimpse into our professional workshop and field operations.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group">
                <OptimizedImage
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/gallery" className="inline-flex items-center justify-center gap-2 bg-secondary border border-border px-8 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-all">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section className="py-24 lg:py-32 bg-background border-t border-border relative overflow-hidden">
        {/* Soft glowing backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">Real reviews from car owners in Islamabad & Rawalpindi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="group bg-card border border-border rounded-2xl p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.stars)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-8 italic">"{review.text}"</p>
                </div>
                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                    <OptimizedImage
                      src={review.img}
                      alt={review.name}
                      wrapperClassName="w-full h-full"
                      className="w-full h-full object-cover animate-fade-in"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & COVERAGE */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-xl bg-background overflow-hidden">
                    <button 
                      className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:text-primary transition-colors"
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <div 
                      className={`px-6 text-muted-foreground text-sm leading-relaxed overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Areas */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">Coverage Areas</h2>
              <div className="bg-background border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Serving Twin Cities</h3>
                </div>
                <p className="text-muted-foreground mb-6">We provide rapid response mobile locksmith services across all major sectors and societies in Islamabad and Rawalpindi.</p>
                <div className="grid grid-cols-2 gap-4">
                  {["Islamabad City", "Rawalpindi City", "Bahria Town", "DHA Islamabad", "Gulberg Green", "Taxila", "Wah Cantt", "G-Sectors & F-Sectors"].map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-card relative overflow-hidden border-t border-border">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-muted-foreground mb-10">Our emergency team is ready to help you get back on the road safely and quickly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:03085556779" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              <PhoneCall className="w-5 h-5" />
              Call 0308-5556779
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
