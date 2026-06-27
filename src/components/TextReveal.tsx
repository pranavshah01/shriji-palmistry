import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ElementType } from "react";

interface TextRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  by?: "word" | "char";
  /** Apply gradient gold class to words matching this string */
  highlight?: string;
  italicHighlight?: boolean;
}

const variants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export function TextReveal({
  text,
  as,
  className = "",
  delay = 0,
  stagger = 0.05,
  by = "word",
  highlight,
  italicHighlight,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Tag = (as ?? "span") as ElementType;
  const parts = by === "word" ? text.split(" ") : text.split("");

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {parts.map((p, i) => {
          const isHighlight = highlight && p.toLowerCase().replace(/[.,!?]/g, "") === highlight.toLowerCase();
          return (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom"
              style={{ paddingBottom: "0.05em" }}
            >
              <motion.span
                className={`inline-block ${
                  isHighlight ? `text-gradient-gold ${italicHighlight ? "italic" : ""}` : ""
                }`}
                custom={delay + i * stagger}
                variants={variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {p}
                {by === "word" && i < parts.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
