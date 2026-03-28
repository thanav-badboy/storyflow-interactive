import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import oceanSurface from "@/assets/ocean-surface.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" id="hero">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={oceanSurface}
          alt="Ocean surface with sunlight rays"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </motion.div>

      {/* Wave overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 120" className="w-[200%] animate-wave opacity-20">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,90 1440,40 1440,40 L1440,0 L0,0 Z"
            fill="hsl(var(--ocean-surface))"
          />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
        style={{ opacity, y: titleY }}
      >
        <motion.p
          className="text-sm md:text-base font-body uppercase tracking-[0.3em] text-primary mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          An Interactive Deep-Sea Expedition
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-display font-black leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="text-foreground drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Into the</span>
          <br />
          <span
            className="bg-gradient-to-r from-primary via-accent to-bio-cyan bg-clip-text text-transparent drop-shadow-lg"
            style={{
              textShadow: "0 0 40px hsl(185 100% 65% / 0.6), 0 0 80px hsl(165 90% 45% / 0.3), 0 0 120px hsl(185 100% 65% / 0.15)",
              WebkitTextStroke: "1px hsl(185 100% 65% / 0.1)",
            }}
          >
            Abyss
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 md:mt-8 text-base md:text-lg font-body text-muted-foreground max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Scroll to descend through the ocean's mysterious layers — from sunlit shallows to the deepest trenches where no light has ever reached.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="text-xs font-body text-muted-foreground uppercase tracking-widest">
            Begin your descent
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
