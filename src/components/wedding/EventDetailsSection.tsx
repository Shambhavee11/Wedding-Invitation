import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, ExternalLink } from "lucide-react";

const events = [
  {
    title: "The Ceremony",
    date: "December 15, 2026",
    time: "11:00 AM onwards",
    venue: "The Imperial, Janpath",
    address: "New Delhi, India 110001",
  },
  {
    title: "The Reception",
    date: "December 15, 2026",
    time: "7:00 PM onwards",
    venue: "The Imperial Ballroom",
    address: "New Delhi, India 110001",
  },
];

const EventDetailsSection = () => {
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Aarav+%26+Meera%27s+Wedding&dates=20261215T053000Z/20261216T013000Z&location=The+Imperial,+Janpath,+New+Delhi&details=Join+us+for+our+special+day!`;

  return (
    <section id="event-details" className="section-padding bg-ivory-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-3">
            Join Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Event Details
          </h2>
          <div className="ornament-divider">
            <Calendar className="w-4 h-4 text-gold" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background border border-border p-8 md:p-10 rounded-lg text-center"
            >
              <h3 className="font-serif text-2xl text-foreground mb-6">
                {event.title}
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="font-body">{event.date}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="font-body">{event.time}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="font-body">{event.venue}</span>
                </div>
                <p className="text-muted-foreground/70 font-body text-xs">
                  {event.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden border border-border mb-8"
        >
          <iframe
            title="Wedding Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1!2d77.216!3d28.627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36e0e1e00d%3A0x2c0e0c0c0c0c0c0c!2sThe%20Imperial%20New%20Delhi!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="text-center">
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-500"
          >
            <Calendar className="w-4 h-4" />
            Add to Calendar
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
