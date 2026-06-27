import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  sanskrit?: string;
  intro: string;
}

export function PageHeader({ eyebrow, title, sanskrit, intro }: PageHeaderProps) {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />
      <div className="mx-auto max-w-4xl px-5 lg:px-10 text-center relative">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.9 }}
            className="text-xs uppercase text-primary mb-6"
          >
            {eyebrow}
          </motion.p>
        )}

        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
          <TextReveal text={title} className="text-gradient-gold" stagger={0.08} />
        </h1>

        {sanskrit && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-4 text-xl text-primary/80 italic"
            style={{ fontFamily: "var(--font-devanagari)" }}
          >
            {sanskrit}
          </motion.p>
        )}

        <Reveal delay={0.6}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
