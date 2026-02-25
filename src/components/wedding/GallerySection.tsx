import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import haldi1 from "@/assets/haldi-1.png";
import haldi2 from "@/assets/haldi-2.png";
import mehendi1 from "@/assets/mehendi-1.png";
import mehendi2 from "@/assets/mehendi-2.png";
import sangeet1 from "@/assets/sangeet-1.png";
import sangeet2 from "@/assets/sangeet-2.png";
import wedding1 from "@/assets/wedding-1.png";
import wedding2 from "@/assets/wedding-2.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

interface GalleryEvent {
  label: string;
  images: { src: string; alt: string }[];
}

const galleryEvents: GalleryEvent[] = [
  {
    label: "Haldi",
    images: [
      { src: haldi1, alt: "Haldi ceremony" },
      { src: haldi2, alt: "Haldi decorations" },
      { src: gallery1, alt: "Couple moment" },
    ],
  },
  {
    label: "Mehendi",
    images: [
      { src: mehendi1, alt: "Mehendi art" },
      { src: mehendi2, alt: "Mehendi ceremony setup" },
      { src: gallery3, alt: "Ring detail" },
    ],
  },
  {
    label: "Sangeet",
    images: [
      { src: sangeet1, alt: "Sangeet dance" },
      { src: sangeet2, alt: "Sangeet stage" },
      { src: gallery2, alt: "Reception table" },
    ],
  },
  {
    label: "Wedding",
    images: [
      { src: wedding1, alt: "Wedding mandap" },
      { src: wedding2, alt: "Wedding ceremony" },
      { src: gallery4, alt: "Bridal bouquet" },
    ],
  },
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">
            Captured Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Gallery
          </h2>
          <div className="ornament-divider">
            <Camera className="w-4 h-4 text-gold" />
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-10 flex-wrap">
          {galleryEvents.map((event, i) => (
            <button
              key={event.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 border rounded-full ${
                activeTab === i
                  ? "bg-gold text-primary-foreground border-gold"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {event.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryEvents[activeTab].images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-primary-foreground font-body text-xs tracking-wider">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
