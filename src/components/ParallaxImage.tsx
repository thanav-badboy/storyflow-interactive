import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  overlay?: string;
}

const ParallaxImage = ({ src, alt, speed = 0.3, overlay }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-xl">
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover scale-125"
        style={{ y }}
        loading="lazy"
        width={1920}
        height={1080}
      />
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
    </div>
  );
};

export default ParallaxImage;
