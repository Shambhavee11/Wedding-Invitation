import { motion } from "framer-motion";
import { Heart, Coffee, Gem } from "lucide-react";

const stories = [
  {
    icon: Coffee,
    title: "How We Met",
    date: "March 2021",
    description:
      "A chance encounter at a friend's dinner party turned into a conversation that lasted well past midnight. We both knew something magical had begun.",
  },
  {
    icon: Heart,
    title: "First Date",
    date: "April 2021",
    description:
      "A long walk through Lodhi Gardens followed by chai at a quaint café. We talked about everything — dreams, fears, and favorite childhood memories.",
  },
  {
    icon: Gem,
    title: "The Proposal",
    date: "June 2026",
    description:
      "Under a sky full of stars in Udaipur, Aarav got down on one knee. Through happy tears, Meera said yes — and the rest is history.",
  },
];

const OurStorySection = () => {
  return (
    <section id="our-story" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold font-body mb-3">
            Our Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Story
          </h2>
          <div className="ornament-divider">
            <Heart className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="flex-1 w-full">
                <div
                  className={`bg-card border border-border p-8 rounded-lg shadow-sm ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-gold font-body mb-2">
                    {story.date}
                  </p>
                  <h3 className="font-serif text-2xl text-foreground mb-3">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">
                    {story.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div className="hidden md:flex w-10 h-10 rounded-full bg-blush-light border-2 border-gold items-center justify-center z-10 shrink-0">
                <story.icon className="w-4 h-4 text-gold" />
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
