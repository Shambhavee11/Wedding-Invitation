import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, CheckCircle } from "lucide-react";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-colors duration-300";

  return (
    <section id="rsvp" className="section-padding bg-background">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-3">
            Be Our Guest
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            RSVP
          </h2>
          <div className="ornament-divider">
            <Heart className="w-4 h-4 text-gold fill-gold" />
          </div>
          <p className="text-muted-foreground font-body text-sm max-w-md mx-auto">
            We would be honored to have you celebrate this special day with us.
            Please let us know if you can attend.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: true }}
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
              <div className="grid grid-cols-2 gap-4">
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
                <select
                  name="attending"
                  value={form.attending}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
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
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300"
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
              className="text-center py-12 bg-card border border-border rounded-lg"
            >
              <CheckCircle className="w-12 h-12 text-sage mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                We've received your RSVP and can't wait to celebrate with you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPSection;
