import OceanZone from "./OceanZone";
import ParallaxImage from "./ParallaxImage";
import BioluminescentParticles from "./BioluminescentParticles";
import { motion } from "framer-motion";
import abyssImg from "@/assets/abyss-zone.jpg";

const AbyssSection = () => {
  return (
    <OceanZone bgClass="bg-gradient-to-b from-background to-ocean-abyss/30" id="abyss">
      <BioluminescentParticles count={10} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 relative z-10"
      >
        <p className="text-xs font-body uppercase tracking-[0.3em] text-destructive mb-3">4,000 – 11,000 meters</p>
        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4">
          The <span className="text-destructive">Abyss</span>
        </h2>
        <p className="text-base md:text-lg font-body text-muted-foreground max-w-2xl">
          The final frontier. Hydrothermal vents spew superheated water rich with minerals, 
          creating oases of life in the most extreme environment on Earth — a place more alien than outer space.
        </p>
      </motion.div>

      <ParallaxImage src={abyssImg} alt="Hydrothermal vents in the abyss" overlay="bg-gradient-to-t from-background/80 to-transparent" />

      {/* Facts grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          { title: "Hadal Zone", stat: "6,000–11,000m", desc: "Named after Hades, the Greek god of the underworld. Only reached by 3 manned expeditions in history." },
          { title: "Hydrothermal Vents", stat: "400°C", desc: "Superheated water erupts from the seafloor, supporting ecosystems that thrive on chemosynthesis instead of sunlight." },
          { title: "Challenger Deep", stat: "10,994m", desc: "The deepest known point in Earth's oceans. The pressure here is 1,086 bars — equivalent to 50 jumbo jets stacked on a person." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-xl border border-destructive/20 bg-card/40 backdrop-blur-sm p-6 hover:border-destructive/40 transition-colors duration-300"
          >
            <div className="text-2xl font-display font-black text-destructive mb-1">{item.stat}</div>
            <h4 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h4>
            <p className="text-sm font-body text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Conclusion */}
      <motion.div
        className="mt-24 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-6">
          We know more about the surface of Mars
          <br />
          <span className="text-primary text-glow-cyan">than our own ocean floor.</span>
        </h2>
        <p className="text-base font-body text-muted-foreground max-w-xl mx-auto mb-8">
          The deep ocean remains Earth's last great mystery. Every expedition reveals creatures 
          and ecosystems we never imagined possible. The abyss reminds us: we are still explorers.
        </p>
        <motion.button
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold ocean-glow hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Return to the Surface
        </motion.button>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-24 pt-8 border-t border-border/30 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-body text-muted-foreground">
          Into the Abyss — An Interactive Deep-Sea Exploration Experience
        </p>
        <p className="text-xs font-body text-muted-foreground/50 mt-1">
          Built with React, Framer Motion & Tailwind CSS
        </p>
      </motion.footer>
    </OceanZone>
  );
};

export default AbyssSection;
