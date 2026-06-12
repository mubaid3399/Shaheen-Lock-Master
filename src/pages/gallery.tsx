import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";

import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery8 from "@/assets/gallery-8.png";
import heroBg from "@/assets/hero-bg.png";
import workshop from "@/assets/about-workshop.png";

export default function Gallery() {
  // Use available images to create a rich masonry-like grid
  const images = [
    { src: gallery1, alt: "Smart key programming", span: "md:col-span-2 md:row-span-2" },
    { src: gallery2, alt: "Key cutting machine", span: "col-span-1 row-span-1" },
    { src: gallery3, alt: "Mechanic holding key", span: "col-span-1 row-span-1" },
    { src: gallery4, alt: "Door lock repair", span: "col-span-1 row-span-1" },
    { src: heroBg, alt: "Hero automotive scene", span: "md:col-span-2 row-span-1" },
    { src: gallery5, alt: "Diagnostic tool", span: "col-span-1 row-span-1" },
    { src: workshop, alt: "Professional workshop", span: "md:col-span-2 md:row-span-2" },
    { src: gallery6, alt: "Ignition repair", span: "col-span-1 row-span-1" },
    { src: gallery8, alt: "Soldering circuit board", span: "col-span-1 row-span-1" },
  ];

  return (
    <>
      <SEO 
        title="Gallery | Shaheen Lock Master"
        description="View our gallery of professional automotive locksmith equipment, smart keys, and repair work in Islamabad."
      />
      
      <section className="pt-32 pb-24 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Work</h1>
          <p className="text-xl text-muted-foreground">Precision, technology, and craftsmanship. Take a look inside our operations.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6">
            {images.map((img, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl bg-card border border-border ${img.span}`}>
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-display font-bold text-white text-lg">{img.alt}</span>
                  <span className="text-primary text-sm font-medium tracking-widest uppercase mt-1">Shaheen Lock Master</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-card border-t border-border text-center">
         <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-6">Quality You Can See</h2>
            <p className="text-muted-foreground mb-8">We use only premium tools and parts to ensure every job meets the highest standards.</p>
            <a href="tel:03457507053" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Book a Service
            </a>
         </div>
      </section>
    </>
  );
}
