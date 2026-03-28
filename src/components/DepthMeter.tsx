import { motion, useScroll, useTransform } from "framer-motion";

const zones = [
  { label: "Surface", depth: "0m", color: "var(--ocean-surface)" },
  { label: "Sunlight", depth: "200m", color: "var(--ocean-sunlight)" },
  { label: "Twilight", depth: "1,000m", color: "var(--ocean-twilight)" },
  { label: "Midnight", depth: "4,000m", color: "var(--ocean-midnight)" },
  { label: "The Abyss", depth: "6,000m+", color: "var(--ocean-abyss)" },
];

const DepthMeter = () => {
  const { scrollYProgress } = useScroll();
  const depth = useTransform(scrollYProgress, [0, 1], [0, 11000]);

  return (
    <motion.div
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      {/* Depth line */}
      <div className="relative h-48 w-px bg-foreground/20 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full rounded-full"
          style={{
            height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            background: "linear-gradient(180deg, hsl(var(--ocean-surface)), hsl(var(--bio-cyan)), hsl(var(--ocean-abyss)))",
          }}
        />
      </div>

      {/* Current depth */}
      <motion.div className="text-xs font-body text-primary mt-2 tabular-nums text-glow-cyan">
        <motion.span>{depth}</motion.span>m
      </motion.div>

      {/* Zone indicators */}
      <div className="mt-2 flex flex-col gap-1">
        {zones.map((zone, i) => (
          <motion.div
            key={zone.label}
            className="text-[10px] font-body text-muted-foreground text-right"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [i / 5 - 0.05, i / 5, i / 5 + 0.15, (i + 1) / 5],
                [0.3, 1, 1, 0.3]
              ),
            }}
          >
            {zone.label}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DepthMeter;
