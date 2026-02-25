import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Volume2, VolumeX, Heart } from "lucide-react";

const FooterSection = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <footer className="section-padding bg-background border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-script text-4xl md:text-5xl text-gold mb-6">
            Aarav & Meera
          </p>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Thank you for being part of our love story. Your presence, blessings, and love mean
            the world to us as we begin this beautiful journey together.
          </p>

          <div className="ornament-divider mb-8">
            <Heart className="w-3 h-3 text-gold fill-gold" />
          </div>

          <button
            onClick={() => setMusicPlaying(!musicPlaying)}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-border text-muted-foreground font-body text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300 rounded-full"
          >
            <Music className="w-3.5 h-3.5" />
            {musicPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5" /> Pause Music
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" /> Play Music
              </>
            )}
          </button>

          <p className="text-muted-foreground/40 font-body text-xs mt-12 tracking-wide">
            Made with love • December 12–15, 2026 • New Delhi
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
