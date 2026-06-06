import { SEO } from "@/components/SEO";
import { Phone, MapPin, Clock, Send, ShieldAlert } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | Shameen Lock Master"
        description="Contact Islamabad's premier auto locksmith. 24/7 emergency service available. Call 0345-7507053 for rapid response."
      />
      
      <section className="pt-32 pb-24 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">Emergency? Call us immediately. Need a quote? Send a message.</p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Emergency Banner */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                 <ShieldAlert className="w-6 h-6 text-red-500" />
               </div>
               <div>
                 <h2 className="text-lg font-bold text-red-500 mb-1">Locked Out or Lost Keys?</h2>
                 <p className="text-red-500/80 text-sm">We provide rapid 24/7 emergency response across Islamabad & Rawalpindi.</p>
               </div>
            </div>
            <a href="tel:03457507053" className="w-full sm:w-auto text-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold transition-colors whitespace-nowrap">
              Call Emergency Line
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Phone</h3>
                      <div className="flex flex-col gap-1 text-muted-foreground text-lg">
                        <a href="tel:03457507053" className="hover:text-primary transition-colors">0345-7507053</a>
                        <a href="tel:03085556179" className="hover:text-primary transition-colors">0308-5556179</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/20">
                      <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
                      <div className="flex flex-col gap-1 text-muted-foreground text-lg">
                        <a href="https://wa.me/923457507053" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">0345-7507053</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Location</h3>
                      <p className="text-muted-foreground text-lg">Shop #1-2 Auto Market F-10/4 Markaz,<br/>Islamabad, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                      <Clock className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Business Hours</h3>
                      <div className="text-muted-foreground text-lg space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                        <p>Sunday: 10:00 AM - 7:00 PM</p>
                        <p className="text-primary font-medium mt-2">Emergency Service Available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-display font-bold mb-6">Send an Inquiry</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you with a quote as soon as possible.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Your phone number" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Vehicle Make & Model</label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="e.g. Toyota Civic 2018" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service Needed</label>
                  <select className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-foreground">
                    <option value="">Select a service...</option>
                    <option value="smart-key">Smart Key Programming</option>
                    <option value="lost-key">Lost All Keys</option>
                    <option value="lockout">Emergency Lockout</option>
                    <option value="ignition">Ignition Repair</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message / Details</label>
                  <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Please describe your issue in detail..."></textarea>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[500px] w-full bg-muted border-t border-border">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4678125438833!2d73.01358987627443!3d33.696841236402224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe6b7fa1f275%3A0xc48c081e7d0ceb6b!2sAuto%20Market%20F-10%2F4!5e0!3m2!1sen!2s!4v1709664532159!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(100%)" }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Shameen Lock Master Location"
        ></iframe>
      </section>
    </>
  );
}
