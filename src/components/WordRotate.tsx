import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function WordRotate({
  words,
  className = "",
  interval = 2400,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block align-bottom [clip-path:inset(-0.1em_-0.15em_-0.35em_-0.15em)] ${className}`}>
      <span className="invisible whitespace-nowrap">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 text-gradient-gold italic"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
