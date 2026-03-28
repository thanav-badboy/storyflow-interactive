import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const depthFacts = [
  { depth: 0, fact: "The surface — where 71% of Earth's surface meets the sky.", zone: "Surface", temp: "20°C", pressure: "1 atm" },
  { depth: 200, fact: "Sunlight fades. The photic zone ends here.", zone: "Sunlight Zone", temp: "15°C", pressure: "20 atm" },
  { depth: 1000, fact: "Perpetual twilight. Bioluminescence becomes the only light source.", zone: "Twilight Zone", temp: "4°C", pressure: "100 atm" },
  { depth: 4000, fact: "Total darkness. Crushing pressure. Yet life thrives.", zone: "Midnight Zone", temp: "2°C", pressure: "400 atm" },
  { depth: 11000, fact: "The Mariana Trench — the deepest known point on Earth.", zone: "The Abyss", temp: "1°C", pressure: "1,100 atm" },
];

const DepthSlider = () => {
  const [index, setIndex] = useState(0);
  const current = depthFacts[index];

  return (
    <motion.div
      className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-display text-xl font-bold text-foreground mb-4">Explore the Depths</h3>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={4}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, hsl(var(--ocean-surface)), hsl(var(--bio-cyan)), hsl(var(--ocean-twilight)), hsl(var(--ocean-midnight)), hsl(var(--ocean-abyss)))`,
        }}
      />

      <div className="flex justify-between text-xs font-body text-muted-foreground mt-1 mb-6">
        <span>0m</span>
        <span>11,000m</span>
      </div>

      {/* Info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.depth}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-display font-black text-primary text-glow-cyan">
              {current.depth.toLocaleString()}m
            </span>
            <span className="text-sm font-body text-muted-foreground">— {current.zone}</span>
          </div>
          <p className="text-sm font-body text-foreground/80 mb-4">{current.fact}</p>
          <div className="flex gap-6 text-xs font-body text-muted-foreground">
            <span>🌡️ {current.temp}</span>
            <span>⬇️ {current.pressure}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default DepthSlider;
