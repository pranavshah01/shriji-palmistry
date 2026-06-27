import { motion } from "motion/react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function Marquee({ items, speed = 40, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
      />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap py-6"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-4xl md:text-6xl text-primary/70">{item}</span>
            <span className="text-primary/40 text-3xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
