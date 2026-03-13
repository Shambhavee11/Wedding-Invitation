import { motion } from "framer-motion";
import { useMemo } from "react";

/* Golden floating particles */
const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 5,
        drift: (Math.random() - 0.5) * 40,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 3}px hsl(var(--gold) / 0.6)`,
          }}
          animate={{
            y: [0, -80 - Math.random() * 60, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videoo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/65 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.28)_100%)] z-[1]" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-gold-light font-body mb-8"
        >
          The Shukla family warmly invites you to celebrate the wedding ceremony of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 leading-tight drop-shadow-[0_2px_20px_rgba(198,167,94,0.4)]"
        >
          Shreya & Vivek
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="h-px w-48 mx-auto mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)",
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-serif text-lg md:text-xl text-white/80 tracking-wide mb-2"
        >
          April 26-30, 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="font-body text-sm text-white/50 tracking-wide mb-10"
        >
          Gorakhpur, Uttar Pradesh
        </motion.p>

        <p className="text-white/70 text-xs md:text-sm mb-4 tracking-widest uppercase font-light italic font-cursive">
          Tap anywhere to begin the celebration 🎶
        </p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          onClick={scrollToEvents}
          className="shimmer-btn px-10 py-3.5 border border-gold text-gold font-body text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500 backdrop-blur-sm bg-black/20"
        >
          View Events
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
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