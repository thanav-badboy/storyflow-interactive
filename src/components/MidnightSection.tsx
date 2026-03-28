import OceanZone from "./OceanZone";
import ParallaxImage from "./ParallaxImage";
import BioluminescentParticles from "./BioluminescentParticles";
import { motion } from "framer-motion";
import { useState } from "react";
import midnightImg from "@/assets/midnight-zone.jpg";

const adaptations = [
  { title: "Bioluminescence", icon: "💡", description: "90% of deep-sea creatures produce their own light through chemical reactions, used for hunting, mating, and defense." },
  { title: "Gigantism", icon: "📏", description: "Deep-sea creatures grow to enormous sizes — giant isopods, colossal squid, and spider crabs dwarf their shallow-water relatives." },
  { title: "Extreme Pressure", icon: "⬇️", description: "At 4,000m, pressure reaches 400 atmospheres. Fish here have no swim bladders and gelatinous bodies to withstand the force." },
  { title: "No Eyes Needed", icon: "👁️", description: "Many abyssal creatures have lost their eyes entirely, relying instead on sensing vibrations and chemical signals." },
];

const MidnightSection = () => {
  const [activeAdaptation, setActiveAdaptation] = useState(0);

  return (
    <OceanZone bgClass="bg-gradient-to-b from-background via-ocean-midnight/20 to-background" id="midnight">
      <BioluminescentParticles count={20} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 relative z-10"
      >
        <p className="text-xs font-body uppercase tracking-[0.3em] text-bio-green mb-3">1,000 – 4,000 meters</p>
        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4 text-glow-green">
          The Midnight Zone
        </h2>
        <p className="text-base md:text-lg font-body text-muted-foreground max-w-2xl">
          Absolute darkness. Crushing pressure. Near-freezing temperatures. 
          And yet — life persists, adapting in ways that challenge our understanding of biology.
        </p>
      </motion.div>

      <ParallaxImage src={midnightImg} alt="Midnight zone anglerfish" overlay="bg-gradient-to-t from-background/80 to-transparent" />

      {/* Interactive adaptation tabs */}
      <div className="mt-16 relative z-10">
        <h3 className="text-2xl font-display font-bold text-foreground mb-6">Deep-Sea Adaptations</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {adaptations.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setActiveAdaptation(i)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                i === activeAdaptation
                  ? "bg-primary text-primary-foreground ocean-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {a.icon} {a.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeAdaptation}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="text-4xl mb-3">{adaptations[activeAdaptation].icon}</div>
          <h4 className="text-xl font-display font-bold text-foreground mb-2">
            {adaptations[activeAdaptation].title}
          </h4>
          <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
            {adaptations[activeAdaptation].description}
          </p>
        </motion.div>
      </div>
    </OceanZone>
  );
};

export default MidnightSection;
