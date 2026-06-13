import { useState } from "react";
import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Phone, MapPin, Clock, Send, ShieldAlert, Copy, Check, ExternalLink, MessageSquare, Sparkles } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo & favicon.png";

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form Field States
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct pre-filled lead message for WhatsApp
    const formattedMessage = `*Shaheen Locksmith - New Inquiry*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Vehicle:* ${model}\n` +
      `*Service:* ${service}\n` +
      `*Details:* ${details}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/923457507053?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setFormSubmitted(true);
    setIsSubmitting(false);
    setName("");
    setEmail("");
    setPhone("");
    setModel("");
    setService("");
    setDetails("");
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 120, 
        damping: 18 
      } 
    }
  } as const;

  return (
    <>
      <SEO 
        title="Contact Us | Shaheen Locksmith"
        description="Contact Islamabad's premier auto locksmith. 24/7 emergency lockouts and smart key programming. Call 0308-5556779 for immediate dispatch."
      />

      {/* HIDDEN SVG GRADIENTS FOR PREMIUM DUAL-TONE ICONS */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient id="whatsappGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="clockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* HEADER SECTION */}
      <section className="pt-36 pb-16 border-b border-border bg-card/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/25 text-primary rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Rapid Mobile Response</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white via-foreground/95 to-primary bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto"
          >
            Stuck in an emergency or need a dealer-grade spare key? Call us directly or send a request below for a rapid response.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          {/* Emergency Alert Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-red-500/10 border border-red-500/25 rounded-2xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30">
                <ShieldAlert className="w-6 h-6 text-red-500 animate-pulse" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold text-red-500 font-display">Locked Out or Lost All Keys?</h2>
                <p className="text-red-400/80 text-sm mt-0.5">We dispatch mobile lock technicians immediately across Islamabad & Rawalpindi.</p>
              </div>
            </div>
            <a 
              href="tel:03085556779" 
              className="w-full md:w-auto text-center bg-red-500 hover:bg-red-600 active:scale-95 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(239,68,68,0.3)] whitespace-nowrap"
            >
              Call Emergency Line
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* CONTACT CARDS GRID (Left Side) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              
              {/* Card 1: Phone */}
              <motion.div 
                variants={itemVariants}
                className="bg-card/45 border border-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between group hover:border-primary/20 transition-all duration-300 min-h-[200px] relative overflow-hidden"
              >
                {/* Background Watermark */}
                <Phone className="w-32 h-32 absolute -bottom-8 -right-8 text-primary/5 select-none pointer-events-none group-hover:scale-110 group-hover:text-primary/10 transition-all duration-500" style={{ stroke: "url(#phoneGrad)", strokeWidth: 0.4, opacity: 0.08 }} />
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center shadow-[0_8px_20px_rgba(249,115,22,0.15)] shrink-0 group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(249,115,22,0.3)] group-hover:border-primary/50 transition-all duration-300">
                    <Phone className="w-6 h-6" style={{ stroke: "url(#phoneGrad)" }} />
                  </div>
                  <button 
                    onClick={() => handleCopy("0308-5556779", "phone")}
                    className="p-2 rounded-lg bg-secondary/80 border border-border text-muted-foreground hover:text-white transition-colors cursor-pointer"
                    title="Copy to Clipboard"
                  >
                    {copiedText === "phone" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="mt-6 relative z-10">
                  <h3 className="font-display font-bold text-white text-base mb-1">Call Support</h3>
                  <div className="flex flex-col text-sm text-muted-foreground font-semibold">
                    <a href="tel:03085556779" className="hover:text-primary transition-colors py-0.5">0308-5556779 (Primary)</a>
                    <a href="tel:03457507053" className="hover:text-primary transition-colors py-0.5">0345-7507053 (Secondary)</a>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: WhatsApp */}
              <motion.div 
                variants={itemVariants}
                className="bg-card/45 border border-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between group hover:border-[#25D366]/20 transition-all duration-300 min-h-[200px] relative overflow-hidden"
              >
                {/* Background Watermark */}
                <SiWhatsapp className="w-32 h-32 absolute -bottom-8 -right-8 text-[#25D366]/5 select-none pointer-events-none group-hover:scale-110 group-hover:text-[#25D366]/10 transition-all duration-500" style={{ fill: "url(#whatsappGrad)", opacity: 0.06 }} />
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 border border-[#25D366]/30 flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.15)] shrink-0 group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(37,211,102,0.3)] group-hover:border-[#25D366]/50 transition-all duration-300">
                    <SiWhatsapp className="w-6 h-6" style={{ fill: "url(#whatsappGrad)" }} />
                  </div>
                  <button 
                    onClick={() => handleCopy("0345-7507053", "whatsapp")}
                    className="p-2 rounded-lg bg-secondary/80 border border-border text-muted-foreground hover:text-white transition-colors cursor-pointer"
                    title="Copy to Clipboard"
                  >
                    {copiedText === "whatsapp" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="mt-6 relative z-10">
                  <h3 className="font-display font-bold text-white text-base mb-1">WhatsApp Chat</h3>
                  <div className="flex flex-col text-sm text-muted-foreground font-semibold">
                    <a 
                      href="https://wa.me/923457507053" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#25D366] transition-colors py-0.5 flex items-center gap-1"
                    >
                      <span>0345-7507053</span>
                      <ExternalLink className="w-3 h-3 text-primary" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Location */}
              <motion.div 
                variants={itemVariants}
                className="bg-card/45 border border-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between group hover:border-accent/20 transition-all duration-300 min-h-[200px] relative overflow-hidden"
              >
                {/* Background Watermark */}
                <MapPin className="w-32 h-32 absolute -bottom-8 -right-8 text-accent/5 select-none pointer-events-none group-hover:scale-110 group-hover:text-accent/10 transition-all duration-500" style={{ stroke: "url(#mapGrad)", strokeWidth: 0.4, opacity: 0.08 }} />
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center shadow-[0_8px_20px_rgba(234,179,8,0.15)] shrink-0 group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(234,179,8,0.3)] group-hover:border-accent/50 transition-all duration-300">
                    <MapPin className="w-6 h-6" style={{ stroke: "url(#mapGrad)" }} />
                  </div>
                  <button 
                    onClick={() => handleCopy("Shop #1-2 Auto Market F-10/4 Markaz, Islamabad, Pakistan", "location")}
                    className="p-2 rounded-lg bg-secondary/80 border border-border text-muted-foreground hover:text-white transition-colors cursor-pointer"
                    title="Copy Address"
                  >
                    {copiedText === "location" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="mt-6 relative z-10">
                  <h3 className="font-display font-bold text-white text-base mb-1">Our Workshop</h3>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                    Shop #1-2 Auto Market F-10/4 Markaz, Islamabad, Pakistan
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Hours */}
              <motion.div 
                variants={itemVariants}
                className="bg-card/45 border border-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between group hover:border-white/20 transition-all duration-300 min-h-[200px] relative overflow-hidden"
              >
                {/* Background Watermark */}
                <Clock className="w-32 h-32 absolute -bottom-8 -right-8 text-white/5 select-none pointer-events-none group-hover:scale-110 group-hover:text-white/10 transition-all duration-500" style={{ stroke: "url(#clockGrad)", strokeWidth: 0.4, opacity: 0.08 }} />
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/20 flex items-center justify-center shadow-[0_8px_20px_rgba(255,255,255,0.05)] shrink-0 group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] group-hover:border-white/30 transition-all duration-300">
                    <Clock className="w-6 h-6" style={{ stroke: "url(#clockGrad)" }} />
                  </div>
                </div>
                <div className="mt-6 relative z-10">
                  <h3 className="font-display font-bold text-white text-base mb-1">Business Hours</h3>
                  <div className="text-xs text-muted-foreground font-semibold space-y-0.5">
                    <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                    <p>Sunday: 10:00 AM - 7:00 PM</p>
                    <p className="text-primary font-bold uppercase tracking-wider text-[10px] mt-1">24/7 Mobile Emergencies</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* INQUIRY FORM (Right Side) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.15 }}
              className="lg:col-span-6 bg-card/40 border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden hover:border-primary/10 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-display font-extrabold text-white mb-2">Send an Inquiry</h2>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  Fill out the form details below and we will get back to you with a free custom quote as soon as possible.
                </p>

                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-2xl text-center space-y-3"
                  >
                    <Check className="w-8 h-8 mx-auto bg-green-500/20 rounded-full p-1.5 border border-green-500/30" />
                    <h3 className="font-display font-bold text-white text-lg">Inquiry Sent Successfully!</h3>
                    <p className="text-xs text-green-400/80 leading-relaxed">
                      Thank you for contacting Shaheen Locksmith. One of our lock specialists will review your vehicle details and call/message you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Name</label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-background/50 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-white placeholder-muted-foreground/60" 
                          placeholder="Your name" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-background/50 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-white placeholder-muted-foreground/60" 
                          placeholder="Your email address" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-background/50 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-white placeholder-muted-foreground/60" 
                          placeholder="Your phone number" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Vehicle Make & Model</label>
                        <input 
                          type="text" 
                          required
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                          className="w-full bg-background/50 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-white placeholder-muted-foreground/60" 
                          placeholder="e.g. Toyota Civic 2018" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Service Needed</label>
                      <div className="relative">
                        <select 
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-background/50 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-card text-muted-foreground">Select a service...</option>
                          <option value="smart-key" className="bg-card text-white">Smart Key Programming</option>
                          <option value="lost-key" className="bg-card text-white">Lost All Keys Situation</option>
                          <option value="lockout" className="bg-card text-white">Emergency Car Unlocking</option>
                          <option value="ignition" className="bg-card text-white">Ignition cylinder Repair</option>
                          <option value="other" className="bg-card text-white">Other Service</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg className="w-4 h-4 fill-none stroke-muted-foreground" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Message / Details</label>
                      <textarea 
                        rows={4} 
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="w-full bg-background/50 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none text-white placeholder-muted-foreground/60" 
                        placeholder="Please describe your key or lock issue in detail..."
                      ></textarea>
                    </div>
                    
                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base transition-all shadow-[0_8px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.45)] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner className="size-4" />
                          <span>Opening WhatsApp...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* MAP SECTION */}
      <section className="relative h-[480px] w-full border-t border-border/40 overflow-hidden z-10 group">
        
        {/* Floating Address Card on Desktop */}
        <div className="absolute top-8 left-8 z-20 bg-card/90 border border-white/10 p-5 rounded-2xl shadow-2xl max-w-sm backdrop-blur-md pointer-events-auto hidden md:block group-hover:border-primary/20 transition-all duration-300">
          <div className="flex gap-4">
            <OptimizedImage
              src={logoImg}
              alt="Shaheen Locksmith"
              wrapperClassName="shrink-0 border border-primary/20 rounded-lg p-1 bg-background"
              showSkeleton={false}
              className="w-11 h-11 object-contain"
            />
            <div>
              <h3 className="font-display font-extrabold text-white text-base leading-tight">Shaheen Locksmith</h3>
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider mt-0.5">Automotive Lock Specialist</p>
              <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
                Shop #1-2 Auto Market F-10/4 Markaz, Islamabad, Pakistan
              </p>
              <div className="flex gap-3 mt-4">
                <a 
                  href="https://www.google.com/maps/place/Shaheen+lock+master+%D8%B4%D8%A7%D9%87%D9%8A%D9%86+%D9%84%D8%A7%D9%83+%D9%85%D8%A7%D8%B3%D8%B7%D8%B1%E2%80%AD/@33.6954317,73.0104445,15.41z/data=!4m6!3m5!1s0x38dfbf26bf03ea81:0x830b825c940b4edc!8m2!3d33.6926851!4d73.0139767!16s%2Fg%2F11npx6x665?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold bg-primary text-primary-foreground px-3 py-1.5 rounded-lg shadow-md hover:scale-105 active:scale-95 transition-transform"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Maps</span>
                </a>
                <a 
                  href="tel:03085556779"
                  className="inline-flex items-center gap-1 text-[11px] font-bold bg-secondary border border-border text-white px-3 py-1.5 rounded-lg hover:bg-secondary/80 active:scale-95 transition-transform"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Iframe inverted/styled to fit dark theme */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.628225836148!2d73.0114018!3d33.6926895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf26bf03ea81%3A0x830b825c940b4edc!2zU2hhaGVlbiBsb2NrIG1hc3RlciDYtNin24HbjNmGINmE2KfaqSDZhdin2LPZudix4oCt!5e0!3m2!1sen!2sus!4v1780985979589!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) grayscale(100%) brightness(0.85) contrast(1.1)" }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Shaheen Locksmith Location"
        ></iframe>
      </section>
    </>
  );
}
