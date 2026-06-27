import { motion } from "motion/react";

/** Concentric rotating zodiac / yantra ring used as ambient hero art */
export function CelestialOrb({ className = "" }: { className?: string }) {
  const rashi = ["मेष", "वृष", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"];
  return (
    <div className={`relative ${className}`} aria-hidden>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0.25" />
              <stop offset="70%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="190" fill="url(#orbGlow)" />
          <circle cx="200" cy="200" r="170" fill="none" stroke="oklch(0.82 0.14 85 / 0.4)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="oklch(0.82 0.14 85 / 0.3)" strokeWidth="0.5" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="oklch(0.82 0.14 85 / 0.5)" strokeWidth="0.5" />
          {rashi.map((_, i) => {
            const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
            return (
              <line
                key={i}
                x1={200 + Math.cos(a) * 110}
                y1={200 + Math.sin(a) * 110}
                x2={200 + Math.cos(a) * 170}
                y2={200 + Math.sin(a) * 170}
                stroke="oklch(0.82 0.14 85 / 0.35)"
                strokeWidth="0.5"
              />
            );
          })}
          {rashi.map((r, i) => {
            const a = ((i + 0.5) / 12) * Math.PI * 2 - Math.PI / 2;
            const x = 200 + Math.cos(a) * 140;
            const y = 200 + Math.sin(a) * 140;
            return (
              <text
                key={r}
                x={x}
                y={y}
                fill="oklch(0.92 0.10 90)"
                fontSize="10"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: "var(--font-devanagari)" }}
              >
                {r}
              </text>
            );
          })}
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return (
              <circle
                key={i}
                cx={200 + Math.cos(a) * 180}
                cy={200 + Math.sin(a) * 180}
                r={i % 4 === 0 ? 2 : 0.8}
                fill="oklch(0.92 0.10 90)"
              />
            );
          })}
        </svg>
      </motion.div>

      <div className="absolute inset-1/3 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
    </div>
  );
}
