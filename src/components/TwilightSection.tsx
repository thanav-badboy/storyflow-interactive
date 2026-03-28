import OceanZone from "./OceanZone";
import ParallaxImage from "./ParallaxImage";
import CreatureCard from "./CreatureCard";
import BioluminescentParticles from "./BioluminescentParticles";
import DepthSlider from "./DepthSlider";
import { motion } from "framer-motion";
import twilightImg from "@/assets/twilight-zone.jpg";

const creatures = [
  { name: "Moon Jellyfish", depth: "200–1,000m", description: "Pulsating through the twilight with ethereal grace. Their bioluminescent glow creates underwater constellations visible in total darkness.", emoji: "🪼", glowColor: "purple" as const },
  { name: "Swordfish", depth: "200–800m", description: "Vertical migrators that dive deep by day and rise by night, reaching speeds of 100 km/h — one of the fastest fish alive.", emoji: "⚔️", glowColor: "cyan" as const },
  { name: "Giant Squid", depth: "300–1,000m", description: "Eyes the size of dinner plates — the largest in the animal kingdom — evolved to detect the faintest bioluminescent flashes.", emoji: "🦑", glowColor: "green" as const },
];

const TwilightSection = () => {
  return (
    <OceanZone bgClass="bg-gradient-to-b from-background via-ocean-twilight/15 to-background" id="twilight">
      <BioluminescentParticles count={40} />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 relative z-10"
      >
        <p className="text-xs font-body uppercase tracking-[0.3em] text-bio-purple mb-3">200 – 1,000 meters</p>
        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4 text-glow-purple">
          The Twilight Zone
        </h2>
        <p className="text-base md:text-lg font-body text-muted-foreground max-w-2xl">
          Sunlight fades to nothing. In this realm of perpetual dusk, creatures have evolved 
          extraordinary adaptations — bioluminescence becomes the language of survival.
        </p>
      </motion.div>

      <ParallaxImage src={twilightImg} alt="Twilight zone bioluminescent jellyfish" overlay="bg-gradient-to-t from-background/70 to-transparent" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Twilight Inhabitants
          </h3>
          {creatures.map((c, i) => (
            <CreatureCard key={c.name} {...c} index={i} />
          ))}
        </div>
        <div>
          <DepthSlider />
        </div>
      </div>
    </OceanZone>
  );
};

export default TwilightSection;
