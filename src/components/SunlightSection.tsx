import OceanZone from "./OceanZone";
import ParallaxImage from "./ParallaxImage";
import CreatureCard from "./CreatureCard";
import StatsCounter from "./StatsCounter";
import { motion } from "framer-motion";
import sunlightImg from "@/assets/sunlight-zone.jpg";

const creatures = [
  { name: "Sea Turtle", depth: "0–200m", description: "Ancient mariners that have navigated the oceans for over 100 million years. They can hold their breath for up to 7 hours while sleeping.", emoji: "🐢", glowColor: "cyan" as const },
  { name: "Clownfish", depth: "0–50m", description: "Living in symbiosis with anemones, they're immune to the stinging tentacles that protect them from predators.", emoji: "🐠", glowColor: "green" as const },
  { name: "Coral Reef", depth: "0–150m", description: "Despite covering less than 1% of the ocean floor, coral reefs support 25% of all marine species.", emoji: "🪸", glowColor: "cyan" as const },
  { name: "Manta Ray", depth: "0–200m", description: "With wingspans up to 7 meters, these gentle giants have the largest brain-to-body ratio of any fish.", emoji: "🦈", glowColor: "green" as const },
];

const SunlightSection = () => {
  return (
    <OceanZone bgClass="bg-gradient-to-b from-background via-ocean-sunlight/10 to-background" id="sunlight">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs font-body uppercase tracking-[0.3em] text-primary mb-3">0 – 200 meters</p>
        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4">
          The Sunlight Zone
        </h2>
        <p className="text-base md:text-lg font-body text-muted-foreground max-w-2xl">
          Where light penetrates and life flourishes. This narrow band hosts the majority of ocean life, 
          from vibrant coral reefs to migrating whales.
        </p>
      </motion.div>

      <ParallaxImage src={sunlightImg} alt="Sunlight zone coral reef" overlay="bg-gradient-to-t from-background/60 to-transparent" />

      <div className="mt-16 mb-16">
        <StatsCounter />
      </div>

      <motion.h3
        className="text-2xl font-display font-bold text-foreground mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Creatures of the Light
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {creatures.map((c, i) => (
          <CreatureCard key={c.name} {...c} index={i} />
        ))}
      </div>
    </OceanZone>
  );
};

export default SunlightSection;
