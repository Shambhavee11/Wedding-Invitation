import { useState } from "react";
import { motion } from "framer-motion";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwpd0gyAp-4EL5gC_iVmIYKNRqWHFHfOBgyw_aexA-HwwyhljhYXVW0T9AdYSzEXYg0/exec";

export default function AttendanceSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("honeypot") as HTMLInputElement)?.value;

    if (honeypot) return;

    if (!name.trim() || !attending) {
      setMessage("Please enter your name and choose your response.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name,
          attending,
        }),
      });

      setMessage("Thank you for your response. We look forward to celebrating with you ✨");
      setName("");
      setAttending("");
    } catch (error) {
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="attendance"
      className="relative py-24 px-6 bg-gradient-to-b from-background via-background to-muted/20"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-gold font-body mb-4">
            Kindly Respond
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-5 leading-tight">
            Will You Be Joining Us?
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-8 text-sm md:text-base">
            Your presence would mean the world to us. Please share your name and
            let us know whether you’ll be joining us on this joyous occasion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-gold/20 bg-white/80 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm tracking-wide text-foreground/80 mb-3">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your good name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-gold/20 bg-white px-5 py-4 text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>

            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
            />

            <div>
              <p className="block text-sm tracking-wide text-foreground/80 mb-4">
                Will you be attending?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAttending("Yes")}
                  className={`rounded-2xl border px-5 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
                    attending === "Yes"
                      ? "border-gold bg-gold text-primary-foreground shadow-md"
                      : "border-gold/20 bg-white text-foreground hover:border-gold hover:bg-gold/10"
                  }`}
                >
                  Yes, with joy
                </button>

                <button
                  type="button"
                  onClick={() => setAttending("No")}
                  className={`rounded-2xl border px-5 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
                    attending === "No"
                      ? "border-gold bg-gold text-primary-foreground shadow-md"
                      : "border-gold/20 bg-white text-foreground hover:border-gold hover:bg-gold/10"
                  }`}
                >
                  Regretfully, no
                </button>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full border border-gold px-10 py-4 text-xs md:text-sm tracking-[0.3em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Send Response"}
              </button>
            </div>

            {message && (
              <div
                className={`text-center rounded-2xl px-4 py-4 text-sm leading-7 ${
                  message.toLowerCase().includes("failed")
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : "bg-gold/10 text-foreground border border-gold/20"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}