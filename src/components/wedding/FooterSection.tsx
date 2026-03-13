import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Volume2, VolumeX, Heart } from "lucide-react";

const FooterSection = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Try autoplay, fallback to user gesture
  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setMusicPlaying(true))
          .catch(() => setMusicPlaying(false));
      }
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setMusicPlaying(true);
    }
  };

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
            Shreya & Vivek
          </p>

          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 max-w-md mx-auto">
            We are truly grateful for your presence and blessings. Your love makes our journey even more special as we step into this new chapter.
          </p>

          <div className="ornament-divider mb-8">
            <Heart className="w-3 h-3 text-gold fill-gold" />
          </div>

          <button
            onClick={toggleMusic}
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

          <audio ref={audioRef} loop>
            <source src="/music.mp3" type="audio/mpeg" />
            Your browser does not support audio.
          </audio>

          <p className="text-muted-foreground/40 font-body text-xs mt-12 tracking-wide">
            Made with love • April 26-29, 2026 • Gorakhpur
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;