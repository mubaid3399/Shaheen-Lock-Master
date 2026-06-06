import { SEO } from "@/components/SEO";
import { Star, Quote, CheckCircle } from "lucide-react";

export default function Reviews() {
  const reviews = [
    { name: "Ali Raza", date: "2 weeks ago", model: "Honda Civic 2020", text: "Lost my Honda Civic key at Centaurus. They arrived within 30 minutes and programmed a new smart key on the spot. Highly professional and saved me a trip to the dealership." },
    { name: "Usman Ahmed", date: "1 month ago", model: "Audi A4", text: "Best locksmith in Islamabad. They fixed my Audi's immobilizer issue which another shop couldn't figure out. They had the right diagnostic tools and knew exactly what to do. Highly recommended." },
    { name: "Sara Khan", date: "2 months ago", model: "Toyota Aqua", text: "Very polite and efficient. Made a duplicate key for my Toyota Aqua in 15 minutes. Great pricing compared to the dealership and the key works perfectly." },
    { name: "Bilal Tariq", date: "3 months ago", model: "Suzuki Cultus", text: "Got stuck in F-11 at midnight. Called Shameen Lock Master and they were quick to respond. Unlocked my car without a single scratch. Lifesavers!" },
    { name: "Kamran Hassan", date: "4 months ago", model: "Toyota Corolla", text: "Excellent service! The ignition on my Corolla got jammed and the key wouldn't turn. They replaced the cylinder perfectly. Works like new." },
    { name: "Fatima Noor", date: "5 months ago", model: "Kia Sportage", text: "Professional setup. Got my remote battery replaced and a spare key made. Very satisfied with the quality of the key and the courteous service." },
    { name: "Rizwan Shah", date: "6 months ago", model: "Hyundai Tucson", text: "Called them for a push-start fob replacement. They arrived at my office in Blue Area, programmed the new fob, and deleted the old one from the system for security. Fast and secure." },
    { name: "Zainab Ali", date: "8 months ago", model: "Honda City", text: "My car remote stopped working suddenly. The technician quickly diagnosed that it wasn't just the battery but a circuit issue. Repaired it within 20 minutes. Very knowledgeable." }
  ];

  return (
    <>
      <SEO 
        title="Customer Reviews | Shameen Lock Master"
        description="Read reviews from our satisfied customers in Islamabad and Rawalpindi. 5-star rated automotive locksmith service."
      />
      
      <section className="pt-32 pb-24 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="flex justify-center mb-6">
            <div className="bg-background border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
               <div className="flex gap-1">
                 {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-accent text-accent" />)}
               </div>
               <span className="font-bold text-sm">5.0 Average Rating</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground">Don't just take our word for it. Here is what our clients have to say about our service.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-2xl relative flex flex-col h-full hover:border-primary/30 transition-colors">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">"{review.text}"</p>
                
                <div className="mt-auto border-t border-border pt-4">
                  <div className="font-display font-bold text-lg text-foreground">{review.name}</div>
                  <div className="flex items-center justify-between mt-1">
                     <span className="text-sm text-primary font-medium">{review.model}</span>
                     <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-card border border-border p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-4">Had a Great Experience?</h2>
            <p className="text-muted-foreground mb-8">We value your feedback. It helps us maintain our high standards of service.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.2)]">
              Leave a Review on Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
