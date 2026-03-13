import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

type GalleryImage = {
  id: number;
  path: string;
  src: string;
  isPortrait?: boolean;
};

/* Import all gallery images */
const imageModules = import.meta.glob<{ default: string }>(
  "/src/assets/image*.jpg",
  { eager: true }
);

/* Base image list */
const baseImages: GalleryImage[] = Object.entries(imageModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || "0");
    const numB = parseInt(b.match(/\d+/)?.[0] || "0");
    return numA - numB;
  })
  .map(([path, mod], index) => ({
    id: index,
    path,
    src: mod.default,
  }));

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 5;

const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [imagesWithOrientation, setImagesWithOrientation] =
    useState<GalleryImage[]>(baseImages);

  useEffect(() => {
    const detectOrientations = async () => {
      const updatedImages: GalleryImage[] = await Promise.all(
        baseImages.map(
          (image) =>
            new Promise<GalleryImage>((resolve) => {
              const img = new Image();
              img.src = image.src;

              img.onload = () => {
                resolve({
                  ...image,
                  isPortrait: img.naturalHeight > img.naturalWidth,
                });
              };

              img.onerror = () => {
                resolve({
                  ...image,
                  isPortrait: false,
                });
              };
            })
        )
      );

      const sortedImages = updatedImages.sort((a, b) => {
        if (a.isPortrait === b.isPortrait) return a.id - b.id;
        return Number(a.isPortrait) - Number(b.isPortrait);
      });

      setImagesWithOrientation(sortedImages);
    };

    detectOrientations();
  }, []);

  const displayedImages = useMemo(
    () => imagesWithOrientation.slice(0, visibleCount),
    [imagesWithOrientation, visibleCount]
  );

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {displayedImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="group relative overflow-hidden rounded-2xl bg-white/20 shadow-md hover:shadow-xl transition-all duration-300 min-h-[260px] flex items-center justify-center p-3"
            >
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="max-w-full max-h-[400px] object-contain transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                data-pin-nopin="true"
                draggable={false}
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        {imagesWithOrientation.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {visibleCount < imagesWithOrientation.length && (
              <button
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + LOAD_MORE_COUNT, imagesWithOrientation.length)
                  )
                }
                className="px-8 py-3 border border-gold text-gold font-body text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-300 rounded-full"
              >
                See More
              </button>
            )}

            {visibleCount > INITIAL_COUNT && (
              <button
                onClick={() => setVisibleCount(INITIAL_COUNT)}
                className="px-8 py-3 border border-gold text-gold font-body text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-300 rounded-full"
              >
                See Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;