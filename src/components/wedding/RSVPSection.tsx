import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, CheckCircle } from "lucide-react";

const eventOptions = ["Haldi", "Mehendi", "Sangeet", "Wedding"];

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    events: [] as string[],
    guests: "1",
    attending: "yes",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          events: [],
          guests: "1",
          attending: "yes",
          message: "",
        });
      } else {
        alert(data.message || "Failed to submit RSVP.");
      }
    } catch (error) {
      console.error("RSVP submit failed:", error);
      alert("Failed to send RSVP. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "attending" && value === "no") {
      setForm({ ...form, attending: value, guests: "0" });
    } else if (name === "attending" && value === "yes" && form.guests === "0") {
      setForm({ ...form, attending: value, guests: "1" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const toggleEvent = (event: string) => {
    setForm((prev) => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter((e) => e !== event)
        : [...prev.events, event],
    }));
  };

  const inputClasses =
    "w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300";

  return (
    <section id="rsvp" className="section-padding bg-ivory-dark">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">
            Be Our Guest
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            RSVP
          </h2>

          <div className="ornament-divider">
            <Heart className="w-4 h-4 text-gold fill-gold" />
          </div>

          <p className="text-muted-foreground font-body text-sm max-w-md mx-auto">
            We would be honored to have you celebrate with us. Please select the
            events you'd like to attend.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
              />

              <div>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Select Events
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {eventOptions.map((event) => (
                    <button
                      key={event}
                      type="button"
                      onClick={() => toggleEvent(event)}
                      className={`px-4 py-2.5 border rounded-lg font-body text-sm transition-all duration-300 ${
                        form.events.includes(event)
                          ? "bg-gold text-primary-foreground border-gold"
                          : "border-border text-muted-foreground hover:border-gold"
                      }`}
                    >
                      {event}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select
                  name="attending"
                  value={form.attending}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>

                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="0">None</option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                name="message"
                placeholder="A message for the couple (optional)"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={inputClasses + " resize-none"}
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-primary-foreground font-body text-xs tracking-[0.25em] uppercase hover:opacity-90 transition-opacity duration-300 rounded-lg"
              >
                <Send className="w-4 h-4" />
                Send RSVP
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16 bg-background border border-border rounded-2xl"
            >
              <CheckCircle className="w-14 h-14 text-accent mx-auto mb-5" />

              <h3 className="font-serif text-2xl text-foreground mb-3">
                Thank You!
              </h3>

              <p className="text-muted-foreground font-body text-sm max-w-sm mx-auto">
                We've received your RSVP. We can't wait to celebrate with you!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPSection;