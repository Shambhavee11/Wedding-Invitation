import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.png";

const HeroSection = () => {
  const scrollToInvitation = () => {
    document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floral overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <img src={heroFloral} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-gold font-body mb-6"
        >
          We're Getting Married
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-tight"
        >
          Aarav & Meera
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-px w-40 mx-auto bg-gold mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-serif text-lg md:text-xl text-muted-foreground tracking-wide mb-10"
        >
          December 15, 2026 • New Delhi
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          onClick={scrollToInvitation}
          className="px-8 py-3 border border-gold text-gold font-body text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500 rounded-none"
        >
          Open Invitation
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
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
