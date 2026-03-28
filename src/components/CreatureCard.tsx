import { motion } from "framer-motion";
import { useState } from "react";

interface CreatureCardProps {
  name: string;
  depth: string;
  description: string;
  emoji: string;
  glowColor: "cyan" | "green" | "purple";
  index: number;
}

const glowClasses = {
  cyan: "ocean-glow text-glow-cyan border-bio-cyan/30",
  green: "ocean-glow-green text-glow-green border-bio-green/30",
  purple: "text-glow-purple border-bio-purple/30",
};

const CreatureCard = ({ name, depth, description, emoji, glowColor, index }: CreatureCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={`rounded-xl border bg-card/80 backdrop-blur-sm p-6 ${glowClasses[glowColor]} hover:scale-105 transition-transform duration-300`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-4xl mb-3">{emoji}</div>
          <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
          <p className="text-xs font-body text-muted-foreground mt-1">{depth}</p>
          <p className="text-xs font-body text-muted-foreground/60 mt-2">Click to learn more</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-xl border bg-card/90 backdrop-blur-sm p-6 ${glowClasses[glowColor]}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="font-display text-lg font-bold text-foreground mb-2">{name}</h3>
          <p className="text-sm font-body text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreatureCard;
