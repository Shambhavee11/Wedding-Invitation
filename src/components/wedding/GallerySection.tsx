import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";

const images = [
  { src: gallery1, alt: "Couple at sunset" },
  { src: gallery2, alt: "Reception table setting" },
  { src: gallery3, alt: "Engagement ring" },
  { src: gallery4, alt: "Bridal bouquet" },
  { src: gallery5, alt: "Ceremony arch" },
  { src: gallery6, alt: "Wedding cake" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-ivory-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-3">
            Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Gallery
          </h2>
          <div className="ornament-divider">
            <Camera className="w-4 h-4 text-gold" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
