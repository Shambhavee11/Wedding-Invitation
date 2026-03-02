import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-04-28T11:00:00+05:30").getTime();

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
  const diff = WEDDING_DATE - Date.now();

  if (diff <= 0) {
    clearInterval(id);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    return;
  }

  setTimeLeft({
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  });
};
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="section-padding bg-ivory-dark">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">
            Counting Down To
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Big Day
          </h2>
          <div className="ornament-divider mb-12">
            <span className="text-gold font-script text-2xl">&</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background border border-border p-6 md:p-8 rounded-xl"
            >
              <span className="block font-serif text-4xl md:text-5xl text-gold mb-2">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
