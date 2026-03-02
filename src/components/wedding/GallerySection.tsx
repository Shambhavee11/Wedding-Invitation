import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import gallery1 from "@/assets/en1.jpeg";
import gallery2 from "@/assets/en2.jpeg";
import gallery3 from "@/assets/en3.jpeg";
import gallery4 from "@/assets/en4.jpeg";
import gallery5 from "@/assets/en5.jpeg";
import gallery6 from "@/assets/en6.jpeg";
import gallery7 from "@/assets/en7.jpeg";
import gallery8 from "@/assets/en8.jpeg";
import gallery9 from "@/assets/en9.jpeg";
import gallery10 from "@/assets/en10.jpeg";
import gallery11 from "@/assets/en11.jpeg";
import gallery12 from "@/assets/en12.jpeg";
import gallery13 from "@/assets/en13.jpeg";
import gallery14 from "@/assets/en14.jpeg";

const images = [
  { src: gallery1, alt: "Engagement moment" },
  { src: gallery2, alt: "Ring ceremony" },
  { src: gallery3, alt: "Couple smile" },
  { src: gallery4, alt: "Celebration vibes" },
  { src: gallery5, alt: "Family blessings" },
  { src: gallery6, alt: "Happy moments" },
  { src: gallery7, alt: "Engagement decor" },
  { src: gallery8, alt: "Together forever" },
  { src: gallery9, alt: "Candid shot" },
  { src: gallery10, alt: "Romantic pose" },
  { src: gallery11, alt: "Ring close-up" },
  { src: gallery12, alt: "Joyful celebration" },
  { src: gallery13, alt: "Beautiful smiles" },
  { src: gallery14, alt: "Special memories" },
];

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? images : images.slice(0, 3);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">
            Captured Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Engagement Moments
          </h2>
          <div className="ornament-divider">
            <Camera className="w-4 h-4 text-gold" />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-body text-xs tracking-wider">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {images.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-gold text-gold font-body text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-300 rounded-full"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default GallerySection;