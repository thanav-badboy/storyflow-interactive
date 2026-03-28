import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const Bubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated: Bubble[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 12 + 4,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full border border-foreground/10 animate-bubble-rise"
          style={{
            left: `${b.left}%`,
            bottom: "-20px",
            width: `${b.size}px`,
            height: `${b.size}px`,
            opacity: b.opacity,
            "--duration": `${b.duration}s`,
            "--delay": `${b.delay}s`,
            background: `radial-gradient(circle at 30% 30%, hsl(var(--bio-cyan) / 0.3), transparent)`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Bubbles;
