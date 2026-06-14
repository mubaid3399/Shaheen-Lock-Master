import { useEffect, useRef, useState } from "react";
import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Star, Quote, MessageSquare, MapPin, CheckCircle2, ShieldCheck, HelpCircle, Wrench, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import logoImg from "@/assets/logo & favicon.png";

// Customer Avatars
import customer1 from "@/assets/customer-1.png";
import customer2 from "@/assets/customer-2.png";
import customer3 from "@/assets/customer-3.png";
import customer4 from "@/assets/customer-4.png";
import customer5 from "@/assets/customer-5.png";
import customer6 from "@/assets/customer-6.png";

interface Review {
  id: number;
  name: string;
  date: string;
  model: string;
  location: string;
  service: string;
  category: "Key Programming" | "Key Duplication" | "Lockouts & Ignition";
  stars: number;
  img: string;
  text: string;
  verified: boolean;
}

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Ali Raza",
      date: "2 weeks ago",
      model: "Honda Civic 2020",
      location: "Centaurus Mall, Islamabad",
      service: "Smart Key Programming",
      category: "Key Programming",
      stars: 5,
      img: customer5,
      text: "Lost my Honda Civic key at Centaurus. They arrived within 30 minutes and programmed a new smart key on the spot. Highly professional and saved me a trip to the dealership.",
      verified: true
    },
    {
      id: 2,
      name: "Usman Ahmed",
      date: "1 month ago",
      model: "Audi A4",
      location: "DHA Phase 2, Rawalpindi",
      service: "Immobilizer & ECU Coding",
      category: "Key Programming",
      stars: 5,
      img: customer1,
      text: "Best locksmith in Islamabad. They fixed my Audi's immobilizer issue which another shop couldn't figure out. They had the right diagnostic tools and knew exactly what to do. Highly recommended.",
      verified: true
    },
    {
      id: 3,
      name: "Sara Khan",
      date: "2 months ago",
      model: "Toyota Aqua",
      location: "G-9 Markaz, Islamabad",
      service: "Smart Key Duplication",
      category: "Key Duplication",
      stars: 5,
      img: customer2,
      text: "Very polite and efficient. Made a duplicate key for my Toyota Aqua in 15 minutes. Great pricing compared to the dealership and the key works perfectly.",
      verified: true
    },
    {
      id: 4,
      name: "Bilal Tariq",
      date: "3 months ago",
      model: "Suzuki Cultus",
      location: "F-11 Markaz, Islamabad",
      service: "Emergency Car Lockout",
      category: "Lockouts & Ignition",
      stars: 5,
      img: customer4,
      text: "Got stuck in F-11 at midnight. Called Shaheen Lock Master and they were quick to respond. Unlocked my car without a single scratch. Lifesavers!",
      verified: true
    },
    {
      id: 5,
      name: "Kamran Hassan",
      date: "4 months ago",
      model: "Toyota Corolla",
      location: "Saddar, Rawalpindi",
      service: "Ignition Barrel Replacement",
      category: "Lockouts & Ignition",
      stars: 5,
      img: customer4,
      text: "Excellent service! The ignition on my Corolla got jammed and the key wouldn't turn. They replaced the cylinder perfectly. Works like new.",
      verified: true
    },
    {
      id: 6,
      name: "Fatima Noor",
      date: "5 months ago",
      model: "Kia Sportage",
      location: "Bahria Town Phase 4, Rawalpindi",
      service: "Remote Key Replacement",
      category: "Key Programming",
      stars: 5,
      img: customer6,
      text: "Professional setup. Got my remote battery replaced and a spare key made. Very satisfied with the quality of the key and the courteous service.",
      verified: true
    },
    {
      id: 7,
      name: "Rizwan Shah",
      date: "6 months ago",
      model: "Hyundai Tucson",
      location: "Blue Area, Islamabad",
      service: "Push-Start Fob Programming",
      category: "Key Programming",
      stars: 5,
      img: customer3,
      text: "Called them for a push-start fob replacement. They arrived at my office in Blue Area, programmed the new fob, and deleted the old one from the system for security. Fast and secure.",
      verified: true
    },
    {
      id: 8,
      name: "Zainab Ali",
      date: "8 months ago",
      model: "Honda City",
      location: "I-8 Markaz, Islamabad",
      service: "Remote Key Repair",
      category: "Lockouts & Ignition",
      stars: 4,
      img: customer2,
      text: "My car remote stopped working suddenly. The technician quickly diagnosed that it wasn't just the battery but a circuit issue. Repaired it within 20 minutes. Very knowledgeable.",
      verified: true
    }
  ];

  // Filtering Logic
  const filteredReviews = activeFilter === "All"
    ? reviews
    : reviews.filter(r => r.category === activeFilter);

  // Monitor screen size for responsive 3D spacing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clamp the activeIndex when the filters change
  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  // 3D Carousel Spacing & Rotations based on distance from active card
  const calculateX = (offset: number) => {
    const spacing = isMobile ? 80 : 190;
    return offset * spacing;
  };

  const calculateRotateY = (offset: number) => {
    return offset * -22; // cinema curve tilt
  };

  const calculateScale = (offset: number) => {
    return 1 - Math.min(Math.abs(offset) * 0.12, 0.3);
  };

  const calculateOpacity = (offset: number) => {
    return 1 - Math.min(Math.abs(offset) * 0.35, 0.85);
  };

  // SEO FAQs Dataset
  const faqs = [
    {
      q: "Where is Shaheen Lock Master located and what areas do you cover?",
      a: "Shaheen Lock Master is headquartered in Islamabad and provides 24/7 mobile automotive locksmith services across all major sectors of Islamabad (including F-11, G-9, I-8, E-11, Blue Area, Centaurus Mall) and Rawalpindi (including Saddar, DHA, Bahria Town, and main Murree Road)."
    },
    {
      q: "Can Shaheen Lock Master make keys for luxury cars like Audi, BMW, and Mercedes?",
      a: "Yes, we are fully equipped with advanced dealer-level key programming diagnostics to cut and program transponder keys, smart remotes, and key fobs for luxury brands like Audi, BMW, Mercedes, and Land Rover, as well as popular manufacturers including Toyota, Honda, Suzuki, Hyundai, and Kia, on-site."
    },
    {
      q: "What is the typical response time for an emergency lockout in Islamabad/Rawalpindi?",
      a: "Our mobile emergency locksmith team is dispatched immediately upon receiving your call. We typically arrive within 20 to 30 minutes anywhere in Islamabad or Rawalpindi to help you unlock your car, extract a broken key, or repair jammed ignitions."
    },
    {
      q: "Is key programming from Shaheen Lock Master cheaper than dealership options?",
      a: "Yes, our key duplication and smart key programming services are significantly more cost-effective than car dealerships. Additionally, we come directly to your location, saving you high towing fees and the days of waiting typically required by main dealerships."
    },
    {
      q: "Are your locksmith technicians certified and verified?",
      a: "Absolutely. All our locksmiths are highly trained, verified professionals. We use safe, non-destructive car unlocking techniques that leave no scratches on your vehicle, ensuring high-quality, trusted locksmith services in the Twin Cities."
    }
  ];

  // Dynamic JSON-LD Structured Schema for local business and FAQ SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shaheen Lock Master",
    "image": "https://www.shaheenlocksmith.com/android-chrome-512x512.png",
    "telephone": "0345-7507053",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressRegion": "Federal",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6844",
      "longitude": "73.0479"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "350",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SEO 
        title="Customer Reviews & Ratings | Shaheen Lock Master"
        description="Read reviews from verified car owners in Islamabad and Rawalpindi. 5-star rated automotive locksmith service specializing in smart key programming and lockouts."
      />

      {/* JSON-LD SEO Structured Data Injection */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} 
      />


      {/* HEADER SECTION with Rating Metrics Dashboard */}
      <section className="pt-32 pb-16 border-b border-border bg-card/10 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-secondary/80 border border-border/80 rounded-full px-4 py-2 shadow-lg backdrop-blur-md">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-primary text-primary animate-pulse" />)}
                </div>
                <span className="font-display font-semibold text-xs text-foreground tracking-wider">5.0 GOOGLE RATED LOCKSMITH</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-foreground/90 to-primary bg-clip-text text-transparent">
                Client Testimonials
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                See what car owners across Islamabad and Rawalpindi write about our premium smart key programming, vehicle lockout rescues, and automotive security solutions.
              </p>
            </div>

            {/* Premium Rating summary dashboard */}
            <div className="lg:col-span-6 bg-card/40 border border-white/5 p-6 rounded-2xl shadow-2xl backdrop-blur-xl max-w-md mx-auto w-full relative overflow-hidden group hover:border-primary/25 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Google Business Rating</h3>
                  <p className="text-xs text-muted-foreground">Based on 350+ certified client visits</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold font-display text-primary">4.9</div>
                  <div className="flex gap-0.5 justify-end">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3 h-3 fill-primary text-primary" />)}
                  </div>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { stars: 5, pct: "98%", count: 342 },
                  { stars: 4, pct: "2%", count: 8 },
                  { stars: 3, pct: "0%", count: 0 },
                  { stars: 2, pct: "0%", count: 0 },
                  { stars: 1, pct: "0%", count: 0 }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-3 text-right font-semibold text-muted-foreground">{item.stars}</span>
                    <Star className="w-3.5 h-3.5 text-primary fill-primary shrink-0" />
                    <div className="flex-1 h-1.5 bg-background border border-border/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: item.pct }} />
                    </div>
                    <span className="w-8 text-right text-muted-foreground text-xs">{item.pct}</span>
                    <span className="w-8 text-right text-muted-foreground/40 text-xs">({item.count})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE HORIZONTAL 3D CAROUSEL SECTION */}
      <section className="py-20 bg-background/5 relative overflow-hidden z-10">
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
            
            {/* CONTROL PANEL (Left Side on Desktop) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>3D Slider Deck</span>
                </div>
                <h2 className="text-3xl font-display font-extrabold text-white leading-tight">Verified Reviews</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Swipe, drag, or click background cards to flip through reviews. Use category tags to filter by locksmith service.
                </p>
              </div>

              {/* SERVICE CATEGORY FILTERS */}
              <div className="bg-card/30 border border-white/5 p-4 rounded-2xl backdrop-blur-md space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Filter by Lock Service</span>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-2">
                  {[
                    { label: "All Services", filter: "All" },
                    { label: "Smart Key Programming", filter: "Key Programming" },
                    { label: "Duplicate Keys", filter: "Key Duplication" },
                    { label: "Lockouts & Ignition", filter: "Lockouts & Ignition" }
                  ].map((btn) => (
                    <button
                      key={btn.filter}
                      onClick={() => setActiveFilter(btn.filter)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between border ${
                        activeFilter === btn.filter
                          ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_12px_rgba(249,115,22,0.3)]"
                          : "bg-background/40 hover:bg-background/80 text-muted-foreground border-border/40 hover:border-primary/20 hover:text-white"
                      }`}
                    >
                      <span>{btn.label}</span>
                      {activeFilter === btn.filter && <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground ml-2 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* TRUST BADGE CARDS */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/20 border border-border/40 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">Verified Client</h4>
                    <p className="text-[10px] text-muted-foreground">Genuine reviews</p>
                  </div>
                </div>

                <div className="bg-card/20 border border-border/40 p-4 rounded-xl flex items-center gap-3">
                  <OptimizedImage
                    src={logoImg}
                    alt="Shaheen Lock Master"
                    wrapperClassName="shrink-0"
                    showSkeleton={false}
                    className="w-9 h-9 object-contain"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">Shaheen Quality</h4>
                    <p className="text-[10px] text-muted-foreground">Dealer-Grade keys</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HORIZONTAL 3D CAROUSEL CONTAINER (Right Side) */}
            <div className="lg:col-span-8 flex flex-col items-center">
              
              {filteredReviews.length === 0 ? (
                <div className="bg-card/30 border border-border/40 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[350px] w-full max-w-[500px]">
                  <MessageSquare className="w-12 h-12 text-muted-foreground/30 mb-4" />
                  <h3 className="text-lg font-bold font-display text-white mb-2">No Reviews Found</h3>
                  <p className="text-sm text-muted-foreground">No customer feedback matches the selected service category.</p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center">
                  
                  {/* Slider Perspective Viewport */}
                  <div 
                    className="relative w-full h-[400px] md:h-[430px] flex items-center justify-center overflow-hidden" 
                    style={{ perspective: 1200, transformStyle: "preserve-3d" }}
                  >
                    <AnimatePresence initial={false}>
                      {filteredReviews.map((review, idx) => {
                        const offset = idx - activeIndex;
                        const isMain = offset === 0;
                        
                        // Render adjacent cards and hide far away cards for cleaner performance
                        if (Math.abs(offset) > 2) return null;

                        return (
                          <motion.div
                            key={review.id}
                            style={{
                              position: "absolute",
                              transformStyle: "preserve-3d",
                              width: "calc(100vw - 40px)",
                              maxWidth: "460px",
                              height: "370px",
                              cursor: isMain ? "grab" : "pointer",
                            }}
                            animate={{
                              x: calculateX(offset),
                              scale: calculateScale(offset),
                              rotateY: calculateRotateY(offset),
                              zIndex: 10 - Math.abs(offset),
                              opacity: calculateOpacity(offset),
                              filter: `blur(${Math.abs(offset) * 1.5}px)`,
                            }}
                            whileDrag={{ cursor: "grabbing" }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 26,
                            }}
                            // Drag support on the main card for easy swiping
                            drag={isMain ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, info) => {
                              const threshold = 55;
                              if (info.offset.x < -threshold) {
                                handleNext();
                              } else if (info.offset.x > threshold) {
                                handlePrev();
                              }
                            }}
                            onClick={() => {
                              if (!isMain) {
                                setActiveIndex(idx);
                              }
                            }}
                            className="bg-card/75 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.5)] flex flex-col justify-between backdrop-blur-xl group hover:border-primary/20 transition-colors duration-300"
                          >
                            {/* Quote icon watermark */}
                            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-300" />
                            
                            <div>
                              {/* Top row: Rating stars & verified badge */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex gap-0.5">
                                  {Array.from({ length: 5 }).map((_, starIdx) => (
                                    <Star 
                                      key={starIdx} 
                                      className={`w-4 h-4 ${starIdx < review.stars ? "fill-primary text-primary" : "text-muted-foreground/30"}`} 
                                    />
                                  ))}
                                </div>
                                <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-wider">
                                  <ShieldCheck className="w-2.5 h-2.5" />
                                  <span>VERIFIED</span>
                                </div>
                              </div>
                              
                              {/* Review Text */}
                              <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-4 italic font-medium">
                                "{review.text}"
                              </p>
                            </div>
                            
                            <div className="space-y-4">
                              {/* Tags row */}
                              <div className="flex flex-wrap gap-1.5 text-[11px] border-t border-border/50 pt-3">
                                <div className="flex items-center bg-secondary/80 text-foreground border border-border/50 px-2 py-0.5 rounded-lg">
                                  <Wrench className="w-3 h-3 mr-1 text-primary" />
                                  <span>{review.service}</span>
                                </div>
                                <div className="flex items-center bg-secondary/80 text-foreground border border-border/50 px-2 py-0.5 rounded-lg">
                                  <MapPin className="w-3 h-3 mr-1 text-primary" />
                                  <span>{review.location}</span>
                                </div>
                              </div>

                              {/* Reviewer Details row */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 shrink-0">
                                    <OptimizedImage
                                      src={review.img}
                                      alt={review.name}
                                      wrapperClassName="w-full h-full"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-display font-bold text-white text-xs md:text-sm tracking-wide">{review.name}</h4>
                                    <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{review.model}</p>
                                  </div>
                                </div>
                                <span className="text-[9px] text-muted-foreground font-semibold bg-background border border-border/50 px-2 py-0.5 rounded-full">
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>

                  {/* CAROUSEL DOTS & NAV CONTROLS */}
                  <div className="flex justify-center items-center gap-6 mt-4 w-full">
                    <button 
                      onClick={handlePrev} 
                      className="w-11 h-11 rounded-full border border-border bg-card/40 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all active:scale-90 shadow-lg"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {/* Expandable dot pill indicator */}
                    <div className="flex gap-2">
                      {filteredReviews.map((_, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => setActiveIndex(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                          aria-label={`Go to review ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={handleNext} 
                      className="w-11 h-11 rounded-full border border-border bg-card/40 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all active:scale-90 shadow-lg"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* SEO ACCORDION FAQ SECTION */}
      <section className="py-24 border-t border-border/40 bg-card/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-secondary border border-border px-3 py-1 rounded-full text-xs font-semibold text-muted-foreground">
                <HelpCircle className="w-3.5 h-3.5 text-primary" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white">Locksmith FAQs & Insights</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Read helpful questions and answers regarding our auto locksmith expertise, response times, and car brand support across Islamabad and Rawalpindi.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="bg-card/20 border border-border/40 hover:border-primary/20 transition-all rounded-xl px-5 py-1.5"
                >
                  <AccordionTrigger className="text-white hover:text-primary font-display font-semibold text-sm md:text-base hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 border-t border-border/10 pt-3 mt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEW CALLOUT */}
      <section className="pb-24 pt-10 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center bg-card/30 border border-white/5 p-8 md:p-12 rounded-3xl max-w-3xl mx-auto relative overflow-hidden shadow-2xl z-20 backdrop-blur-md hover:border-primary/25 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 animate-pulse" />
              </div>
              <h2 className="text-3xl font-display font-extrabold text-white mb-4">Had a Great Experience?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Your feedback helps car owners across Islamabad and Rawalpindi find reliable, dealer-grade locksmith solutions in times of need. Share your experience on Google!
              </p>
              <a 
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:scale-105 active:scale-95 transition-transform shadow-[0_8px_30px_rgba(249,115,22,0.35)]"
              >
                Leave a Review on Google
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
