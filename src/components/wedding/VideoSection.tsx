import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="section-padding bg-background text-center">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl mb-6"
        >
          Our Engagement Film
        </motion.h2>

        <p className="text-muted-foreground mb-8">
          Tap below to watch our beautiful journey together 🎬
        </p>

        <a
          href="https://youtu.be/2V-TL2cOPzk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
        >
          Watch Our Story
        </a>

      </div>
    </section>
  );
};

export default VideoSection;