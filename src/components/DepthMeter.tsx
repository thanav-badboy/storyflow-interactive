import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const zones = [
  { label: "Surface", depth: "0m" },
  { label: "Sunlight", depth: "200m" },
  { label: "Twilight", depth: "1,000m" },
  { label: "Midnight", depth: "4,000m" },
  { label: "The Abyss", depth: "6,000m+" },
];

const DepthMeter = () => {
  const { scrollYProgress } = useScroll();
  const [depth, setDepth] = useState(0);
  const [activeZone, setActiveZone] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setDepth(Math.round(v * 11000));
    setActiveZone(Math.min(4, Math.floor(v * 5)));
  });

  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="relative h-48 w-px bg-foreground/20 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full rounded-full"
          style={{
            height: barHeight,
            background: "linear-gradient(180deg, hsl(var(--ocean-surface)), hsl(var(--bio-cyan)), hsl(var(--ocean-abyss)))",
          }}
        />
      </div>

      <div className="text-xs font-body text-primary mt-2 tabular-nums text-glow-cyan">
        {depth.toLocaleString()}m
      </div>

      <div className="mt-2 flex flex-col gap-1">
        {zones.map((zone, i) => (
          <div
            key={zone.label}
            className="text-[10px] font-body text-right transition-opacity duration-300"
            style={{ opacity: i === activeZone ? 1 : 0.3 }}
          >
            {zone.label}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DepthMeter;
