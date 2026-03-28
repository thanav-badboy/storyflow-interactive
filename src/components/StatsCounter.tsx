import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 71, suffix: "%", label: "of Earth covered by oceans" },
  { value: 95, suffix: "%", label: "of the ocean remains unexplored" },
  { value: 11034, suffix: "m", label: "deepest point (Mariana Trench)" },
  { value: 230000, suffix: "+", label: "known marine species" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="text-3xl md:text-4xl font-display font-black text-primary text-glow-cyan">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-xs md:text-sm font-body text-muted-foreground mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
