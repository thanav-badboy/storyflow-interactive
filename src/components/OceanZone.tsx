import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface OceanZoneProps {
  children: ReactNode;
  bgClass: string;
  id: string;
}

const OceanZone = ({ children, bgClass, id }: OceanZoneProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative min-h-screen py-20 md:py-32 px-4 md:px-8 ${bgClass}`}
      style={{ opacity }}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
};

export default OceanZone;
