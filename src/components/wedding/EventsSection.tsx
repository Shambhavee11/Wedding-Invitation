import { motion } from "framer-motion";
import { Sun, Leaf, Music, Heart, MapPin, Clock, Calendar, ExternalLink } from "lucide-react";
import sangeetBg from "@/assets/sangeet.jpg";
import mehendiBg from "@/assets/mehendi.jpg";
import haldiBg from "@/assets/haldi.jpg";
import weddingBg from "@/assets/wedding1.png";

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

  // wedding specific
  couple?: string;
  groom?: string;
  bride?: string;
  groomParents?: string;
  brideParents?: string;
}

const events: EventData[] = [
  {
    id: "haldi",
    emoji: "💛",
    icon: Sun,
    title: "Haldi Ceremony",
    tagline: "A splash of sunshine & blessings",
    date: "April 27, 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "Sarla Bhawan",
    address: "Sarla Bhawan, Turkmanpur, Gorakhpur, Uttar Pradesh",
    description:
      "Haldi ka rang, khushiyon ka sang, mehfil mein bajti pyaar ki dhang. Duaon se saje ye naya safar, har pal ho khushiyon ka nagar.",
    bgClass: "bg-haldi-bg",
    accentClass: "text-white",
    textClass: "text-white",
    borderClass: "border-white/30",
    btnClass: "relative overflow-hidden border-yellow-400 text-yellow-400 hover:text-black hover:bg-yellow-400 transition-all duration-500 group",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haldi+Ceremony&dates=20261212T043000Z/20261212T073000Z",
  },
  {
    id: "mehendi",
    emoji: "💚",
    icon: Leaf,
    title: "Mehendi Ceremony",
    tagline: "Where art meets celebration",
    date: "April 27, 2026",
    time: "6:00 PM Onwards",
    venue: "Sarla Bhawan",
    address: "Sarla Bhawan, Turkmanpur, Gorakhpur, Uttar Pradesh",
    description: "Haathon pe mehndi, dil mein khushi ka rang, aaj se shuru ho ek khoobsurat sa sang",
    bgClass: "bg-mehendi-bg",
    accentClass: "text-green-400",
    textClass: "text-green-100",
    borderClass: "border-green-400/30",
    btnClass: "relative overflow-hidden border-yellow-400 text-yellow-400 hover:text-black hover:bg-yellow-400 transition-all duration-500 group",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehendi+Ceremony&dates=20261213T093000Z/20261213T143000Z",
  },
  {
    id: "sangeet",
    emoji: "🌟",
    icon: Music,
    title: "Sangeet Night",
    tagline: "Dance like nobody's watching",
    date: "April 27, 2026",
    time: "7:00 PM onwards",
    venue: "Sarla Bhawan",
    address: "Sarla Bhawan, Turkmanpur, Gorakhpur, Uttar Pradesh",
    description: "Suron ki mehfil, khushiyon ka samaa, sangeet ki raat hai sabse haseen yeh jahaan.",
    bgClass: "bg-yellow-100",
    accentClass: "text-yellow-400",
    textClass: "text-yellow-100",
    borderClass: "border-yellow-400/30",
    btnClass: "relative overflow-hidden border-yellow-400 text-yellow-400 hover:text-black hover:bg-yellow-400 transition-all duration-500 group",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sangeet+Night&dates=20261214T133000Z/20261215T003000Z",
  },
  {
    id: "wedding",
    emoji: "🤍",
    icon: Heart,
    title: "Wedding Ceremony",
    tagline: "Two souls, one forever",
    date: "April 28, 2026",
    time: "6:00 PM Onwards",
    venue: "Hotel Grand Swayamvar",
    address: "Hotel Grand Swayamvar, Bank Road, Gorakhpur, Uttar Pradesh",
    description:
      "Wo pal jiska intezaar tha barson se, saakshi bane is milan ke sapnon se. Pavitra agni ke sang vachan nibhaayenge, parivaar-duaaon mein naye safar sajaayenge.",
    bgClass: "bg-white",
    accentClass: "text-white",
    textClass: "text-white",
    borderClass: "border-white/30",
    couple: "Shreya & Vivek",
    groom: "Vivek Ram Tripathi",
    bride: "Shreya Shukla",
    groomParents: "Mr. Devi Sharan Tripathi",
    brideParents: "Mr. Prafulla Shukla & Mrs. Mamta Shukla",
    btnClass: "relative overflow-hidden border-yellow-400 text-yellow-400 hover:text-black hover:bg-yellow-400 transition-all duration-500 group",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony&dates=20261215T053000Z/20261215T103000Z",
  },
];

/* Event Card */
const EventCard = ({ event, index }: { event: EventData; index: number }) => {
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative ${event.borderClass} border rounded-2xl p-8 md:p-12 overflow-hidden ${event.id === "sangeet" || event.id === "mehendi" || event.id === "haldi" || event.id === "wedding"
        ? "bg-cover bg-center"
        : event.bgClass
        }`}
      style={
        event.id === "sangeet"
          ? { backgroundImage: `url(${sangeetBg})` }
          : event.id === "mehendi"
            ? { backgroundImage: `url(${mehendiBg})` }
            : event.id === "haldi"
              ? { backgroundImage: `url(${haldiBg})` }
              : event.id === "wedding"
                ? { backgroundImage: `url(${weddingBg})` }
                : undefined
      }
    >
      {(event.id === "sangeet" || event.id === "mehendi" || event.id === "haldi" || event.id === "wedding") && (
        <div className="absolute inset-0 bg-black/50"></div>
      )}

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${event.borderClass} border-2 mb-4`}>
            <Icon className={`w-6 h-6 ${event.accentClass}`} />
          </div>
          <p className={`text-xs tracking-[0.3em] uppercase font-body mb-2 ${event.accentClass} opacity-80`}>
            {event.emoji} {event.tagline}
          </p>
          <h3 className={`font-serif text-3xl md:text-4xl ${event.textClass}`}>{event.title}</h3>
        </div>

        <p className={`font-body text-sm leading-relaxed text-center mb-8 max-w-lg mx-auto ${event.textClass} opacity-70`}>
          {event.description}
        </p>

        {/* Wedding details (clean & simple) */}
        {event.id === "wedding" && (
          <div className="mb-6 flex justify-center">
            <div className="bg-black/50 backdrop-blur-md rounded-lg p-3 text-center text-white max-w-xs">
              <p className="font-serif text-base mb-2">{event.couple}</p>

              <p className="text-xs mb-2">

                <span className="font-medium text-yellow-400">Bride:</span> {event.bride}
                <br />
                <span className="font-medium text-yellow-400">Groom:</span> {event.groom}

              </p>

              <div className="text-[15px] opacity-80 border-t border-white/20 pt-2">

                <p className="mt-2">
                  <span className="font-medium text-yellow-400">Bride’s Parents:</span>
                  <br />
                  {event.brideParents}
                </p>

                <p className="mt-3">
                  <span className="font-medium text-yellow-400">Groom’s Parents:</span>
                  <br />
                  {event.groomParents}
                </p>

              </div>
            </div>
          </div>
        )}

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

        <div className={`rounded-xl overflow-hidden ${event.borderClass} border mb-6`}>
          <iframe
            title={`${event.title} Location`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(event.address)}&output=embed`}
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

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

/* Events Section */
const EventsSection = () => (
  <section id="events" className="section-padding bg-background">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
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
          Each event is a chapter in our journey. We'd love for you to be part of every celebration.
        </p>
      </div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;