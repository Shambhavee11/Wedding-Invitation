import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.png";

const HeroSection = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floral background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src={heroFloral} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/90 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-gold font-body mb-8"
        >
          Together with their families invite you to celebrate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-4 leading-tight"
        >
          Aarav & Meera
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-px w-48 mx-auto bg-gold mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-serif text-lg md:text-xl text-muted-foreground tracking-wide mb-2"
        >
          December 12 – 15, 2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-body text-sm text-muted-foreground/70 tracking-wide mb-10"
        >
          New Delhi, India
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={scrollToEvents}
          className="px-10 py-3.5 border border-gold text-gold font-body text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500"
        >
          View Events
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-gold/40 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gold/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
