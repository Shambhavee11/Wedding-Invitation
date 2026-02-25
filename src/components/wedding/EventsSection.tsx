import { motion } from "framer-motion";
import { Sun, Leaf, Music, Heart, MapPin, Clock, Calendar, ExternalLink } from "lucide-react";

interface EventData {
  id: string;
  emoji: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  bgClass: string;
  accentClass: string;
  textClass: string;
  borderClass: string;
  btnClass: string;
  calendarUrl: string;
}

const events: EventData[] = [
  {
    id: "haldi",
    emoji: "💛",
    icon: Sun,
    title: "Haldi Ceremony",
    tagline: "A splash of sunshine & blessings",
    date: "December 12, 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "The Oberoi, Poolside Lawns",
    address: "Dr. Zakir Hussain Marg, New Delhi",
    description: "Join us for the most joyful pre-wedding ritual as we shower the couple with turmeric, love, and laughter under the warm winter sun.",
    bgClass: "bg-haldi-bg",
    accentClass: "text-haldi-accent",
    textClass: "text-haldi-text",
    borderClass: "border-haldi-accent/30",
    btnClass: "border-haldi-accent text-haldi-accent hover:bg-haldi-accent hover:text-haldi-bg",
    calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haldi+Ceremony+-+Aarav+%26+Meera&dates=20261212T043000Z/20261212T073000Z&location=The+Oberoi,+New+Delhi",
  },
  {
    id: "mehendi",
    emoji: "💚",
    icon: Leaf,
    title: "Mehendi Ceremony",
    tagline: "Where art meets celebration",
    date: "December 13, 2026",
    time: "3:00 PM – 8:00 PM",
    venue: "The Leela Palace, Garden Terrace",
    address: "Chanakyapuri, New Delhi",
    description: "An afternoon of intricate henna artistry, aromatic flowers, and soulful music. Let the beautiful patterns tell our love story on every hand.",
    bgClass: "bg-mehendi-bg",
    accentClass: "text-mehendi-accent",
    textClass: "text-mehendi-text",
    borderClass: "border-mehendi-accent/30",
    btnClass: "border-mehendi-accent text-mehendi-accent hover:bg-mehendi-accent hover:text-mehendi-bg",
    calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehendi+Ceremony+-+Aarav+%26+Meera&dates=20261213T093000Z/20261213T143000Z&location=The+Leela+Palace,+New+Delhi",
  },
  {
    id: "sangeet",
    emoji: "💙",
    icon: Music,
    title: "Sangeet Night",
    tagline: "Dance like nobody's watching",
    date: "December 14, 2026",
    time: "7:00 PM onwards",
    venue: "ITC Maurya, Grand Ballroom",
    address: "Sardar Patel Marg, New Delhi",
    description: "An enchanting evening of music, dance, and celebration under sparkling lights. Get ready for performances, beats, and unforgettable memories.",
    bgClass: "bg-sangeet-bg",
    accentClass: "text-sangeet-accent",
    textClass: "text-sangeet-text",
    borderClass: "border-sangeet-accent/20",
    btnClass: "border-sangeet-accent text-sangeet-accent hover:bg-sangeet-accent hover:text-sangeet-bg",
    calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sangeet+Night+-+Aarav+%26+Meera&dates=20261214T133000Z/20261215T003000Z&location=ITC+Maurya,+New+Delhi",
  },
  {
    id: "wedding",
    emoji: "🤍",
    icon: Heart,
    title: "Wedding Ceremony",
    tagline: "Two souls, one forever",
    date: "December 15, 2026",
    time: "11:00 AM – 4:00 PM",
    venue: "The Imperial, Grand Pavilion",
    address: "Janpath, New Delhi 110001",
    description: "The moment we've been waiting for. Witness Aarav and Meera take their sacred vows around the holy fire, surrounded by the blessings of family and friends.",
    bgClass: "bg-wedding-bg",
    accentClass: "text-wedding-accent",
    textClass: "text-wedding-text",
    borderClass: "border-wedding-accent/30",
    btnClass: "border-wedding-accent text-wedding-accent hover:bg-wedding-accent hover:text-primary-foreground",
    calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+-+Aarav+%26+Meera&dates=20261215T053000Z/20261215T103000Z&location=The+Imperial,+New+Delhi",
  },
];

/* Floating petals for Haldi */
const FloatingPetals = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-2xl"
        style={{ left: `${15 + i * 14}%`, top: `${10 + (i % 3) * 25}%` }}
        animate={{
          y: [-10, -50, -10],
          rotate: [0, 30, 0],
          opacity: [0.7, 0.3, 0.7],
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.6,
        }}
      >
        🌼
      </motion.div>
    ))}
  </div>
);

/* Sparkle effects for Sangeet */
const SparkleEffects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-sangeet-accent"
        style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 20}%` }}
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2 + i * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,
        }}
      />
    ))}
  </div>
);

/* Henna corner borders for Mehendi */
const HennaBorder = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Top-left corner ornament */}
    <svg className="absolute top-4 left-4 w-16 h-16 text-mehendi-accent opacity-30" viewBox="0 0 64 64" fill="none">
      <path d="M4 60 Q4 4 60 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 52 Q12 12 52 12" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.5" />
    </svg>
    {/* Bottom-right corner ornament */}
    <svg className="absolute bottom-4 right-4 w-16 h-16 text-mehendi-accent opacity-30 rotate-180" viewBox="0 0 64 64" fill="none">
      <path d="M4 60 Q4 4 60 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 52 Q12 12 52 12" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  </div>
);

const EventCard = ({ event, index }: { event: EventData; index: number }) => {
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative ${event.bgClass} ${event.borderClass} border rounded-2xl p-8 md:p-12 overflow-hidden ${
        event.id === "sangeet" ? "animate-glow" : ""
      }`}
    >
      {/* Event-specific decorative effects */}
      {event.id === "haldi" && <FloatingPetals />}
      {event.id === "mehendi" && <HennaBorder />}
      {event.id === "sangeet" && <SparkleEffects />}

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${event.borderClass} border-2 mb-4`}>
            <Icon className={`w-6 h-6 ${event.accentClass}`} />
          </div>
          <p className={`text-xs tracking-[0.3em] uppercase font-body mb-2 ${event.accentClass} opacity-80`}>
            {event.emoji} {event.tagline}
          </p>
          <h3 className={`font-serif text-3xl md:text-4xl ${event.textClass}`}>
            {event.title}
          </h3>
        </div>

        {/* Description */}
        <p className={`font-body text-sm leading-relaxed text-center mb-8 max-w-lg mx-auto ${event.textClass} opacity-70`}>
          {event.description}
        </p>

        {/* Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 text-sm">
          <div className={`flex items-center gap-2 ${event.textClass} opacity-80`}>
            <Calendar className={`w-4 h-4 ${event.accentClass}`} />
            <span className="font-body">{event.date}</span>
          </div>
          <div className={`flex items-center gap-2 ${event.textClass} opacity-80`}>
            <Clock className={`w-4 h-4 ${event.accentClass}`} />
            <span className="font-body">{event.time}</span>
          </div>
        </div>
        <div className="text-center mb-8">
          <div className={`flex items-center justify-center gap-2 ${event.textClass} opacity-80 text-sm`}>
            <MapPin className={`w-4 h-4 ${event.accentClass}`} />
            <span className="font-body font-medium">{event.venue}</span>
          </div>
          <p className={`font-body text-xs mt-1 ${event.textClass} opacity-50`}>{event.address}</p>
        </div>

        {/* Map */}
        <div className={`rounded-xl overflow-hidden ${event.borderClass} border mb-6`}>
          <iframe
            title={`${event.title} Location`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1!2d77.216!3d28.627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36e0e1e00d%3A0x2c0e0c0c0c0c0c0c!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={event.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3 border font-body text-xs tracking-[0.2em] uppercase transition-all duration-500 ${event.btnClass}`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Add to Calendar
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  return (
    <section id="events" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">
            Four Days of Celebration
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Festivities
          </h2>
          <div className="ornament-divider">
            <Heart className="w-4 h-4 text-gold fill-gold" />
          </div>
          <p className="text-muted-foreground font-body text-sm max-w-md mx-auto">
            Each event is a chapter in our love story. We'd love for you to be part of every celebration.
          </p>
        </motion.div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
