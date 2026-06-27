import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Hand, Sparkles, Gem, Hash, Compass, Briefcase } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { CelestialOrb } from "@/components/CelestialOrb";
import { Disclaimer } from "@/components/Disclaimer";
import { WordRotate } from "@/components/WordRotate";
import { Marquee } from "@/components/Marquee";
import { TextReveal } from "@/components/TextReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shriji Palmistry · Vedic Jyotish, Hastrekha & Life Guidance in Chicago" },
      {
        name: "description",
        content:
          "Ancient Vedic jyotish, hastrekha (palmistry), ank jyotish (numerology), and ratna (gemstone) guidance in Chicago and Illinois — translated for modern life. Rooted in tradition, made clear.",
      },
      { property: "og:title", content: "Shriji Palmistry · Ancient Wisdom, Modern Clarity" },
      { property: "og:description", content: "Jyotish, hastrekha, numerology, and ratna guidance in Chicago — all in one place." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Shriji Palmistry",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is jyotish?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Jyotish is the ancient Vedic science of light — the study of planets, nakshatras (lunar mansions), and time, used to understand a person's karma, tendencies, and life direction.",
              },
            },
            {
              "@type": "Question",
              name: "How does hastrekha (palmistry) work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Hastrekha, the Vedic art of palmistry, reads the lines, mounts, and shape of the hand to reveal a person's temperament, potential, and life patterns.",
              },
            },
            {
              "@type": "Question",
              name: "What is a moolank in ank jyotish?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The moolank is your root number, calculated by reducing your date of birth to a single digit. It reveals your core nature, strengths, and life purpose.",
              },
            },
            {
              "@type": "Question",
              name: "Do gemstones (ratna) actually help?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In Vedic tradition, the right ratna is said to amplify the energy of a planet in your chart. The wrong one can cause imbalance — always consult a qualified jyotishi before wearing one.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { to: "/jyotish", icon: Sparkles, title: "Jyotish", sub: "Astrology", sk: "ज्योतिष", desc: "Vedic chart, planets, and nakshatras — read with clarity." },
  { to: "/hastrekha", icon: Hand, title: "Hastrekha", sub: "Palmistry", sk: "हस्तरेखा", desc: "The lines of your hand, the shape of your story." },
  { to: "/ank-jyotish", icon: Hash, title: "Ank Jyotish", sub: "Numerology", sk: "अंक ज्योतिष", desc: "Your moolank and bhagyank from your birth date." },
  { to: "/ratna", icon: Gem, title: "Ratna", sub: "Gemstones", sk: "रत्न", desc: "Stones aligned to your chart — chosen with care." },
  { to: "/margdarshan", icon: Compass, title: "Life Guidance", sub: "Margdarshan", sk: "जीवन", desc: "Self-knowledge, relationships, and purpose." },
  { to: "/margdarshan/career", icon: Briefcase, title: "Career Guidance", sub: "Karma path", sk: "करियर", desc: "The work that aligns with your dharma." },
] as const;

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <PainPointBand />
      <ServicesSection />
      <MarqueeBand />
      <PhilosophySection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </SiteLayout>
  );
}

function TrustStrip() {
  const items = [
    { k: "15+", v: "Years of practice" },
    { k: "Plain", v: "English, no jargon" },
    { k: "No fear", v: "Never a sales tactic" },
    { k: "Classical", v: "Parashara · Phaldeepika" },
  ];
  return (
    <section className="border-y border-border/40 bg-background/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.k} delay={i * 0.05}>
            <div>
              <p className="font-display text-2xl md:text-3xl text-primary">{it.k}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{it.v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PainPointBand() {
  const points = [
    { t: "Career stuck?", d: "What your tenth house and current dasha actually say about the move you're weighing." },
    { t: "Relationship at a crossroads?", d: "Compatibility through ashtakuta, beyond points — where you genuinely meet and where you don't." },
    { t: "Considering a relocation?", d: "Astrocartography and dasha overlay: not every city is the right one for every chart." },
    { t: "Health on your mind?", d: "Sixth, eighth, and twelfth house signals — read for awareness, never as a diagnosis." },
    { t: "Searching for purpose?", d: "Atmakaraka and the ninth house — what your soul came here to learn this lifetime." },
    { t: "Question of timing?", d: "When to act, when to wait. Vimshottari mahadasha is built for exactly this question." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">If you're feeling stuck</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight">
            <TextReveal text="Bring the question you carry." highlight="question" italicHighlight />
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover-lift">
                <p className="font-display text-xl text-primary">{p.t}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeBand() {
  return (
    <section className="py-12 border-y border-border/40 bg-background/30">
      <Marquee
        items={["Jyotish", "हस्तरेखा", "Numerology", "ज्योतिष", "Ratna", "अंक", "Margdarshan", "रत्न"]}
      />
    </section>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20">
        <div className="order-1 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.35em] uppercase text-primary mb-6"
          >
            · Ancient Wisdom · Modern Clarity ·
          </motion.p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="block"
            >
              {["The", "cosmos"].map((w, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } },
                  }}
                  className="inline-block mr-3"
                >
                  {w}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="block mt-2"
            >
              <span>is </span>
              <WordRotate
                words={["speaking", "listening", "guiding", "watching"]}
                className="mr-3"
              />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="block mt-2"
            >
              are you ready?
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Jyotish, hastrekha, and ank vidya — the Vedic arts read clearly, with respect
            for both tradition and your own discernment. Who you are, where you're going, and why.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/jyotish"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Begin your reading
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/hastrekha"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition"
            >
              Read my palm
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-14 flex gap-10 text-sm text-muted-foreground"
          >
            <div>
              <p className="font-display text-3xl text-primary">5,000+</p>
              <p>years of tradition</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">27</p>
              <p>nakshatras studied</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">9</p>
              <p>grahas · 9 numbers</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ y, opacity }}
          className="order-2 lg:order-2 self-stretch flex items-center justify-center lg:justify-end pointer-events-none"
        >
          <CelestialOrb className="w-90 h-90 md:w-130 md:h-130 lg:h-full lg:max-h-[85vh] lg:w-auto lg:aspect-square opacity-90 lg:-mr-28" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-widest"
      >
        ↓ scroll
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our practices</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight">
            <TextReveal text="Six disciplines, one truth." highlight="truth." italicHighlight />
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.to} delay={i * 0.06}>
              <Link
                to={s.to}
                className="group block glass rounded-3xl p-8 hover-lift h-full"
              >
                <div className="flex justify-between items-start mb-10">
                  <s.icon className="h-7 w-7 text-primary" />
                  <span
                    className="text-3xl text-primary/40 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-devanagari)" }}
                  >
                    {s.sk}
                  </span>
                </div>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="text-xs uppercase tracking-wider text-primary/60 mb-3">{s.sub}</p>
                <p className="text-sm text-muted-foreground mb-6">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary">
                  Explore <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 lg:px-10 text-center">
        <Reveal>
          <p
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.3] italic"
            style={{ fontFamily: "var(--font-devanagari)" }}
          >
            <span className="text-gradient-gold">"यथा पिण्डे तथा ब्रह्माण्डे"</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground">
            "As in the body, so in the cosmos." — Upanishads
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
            Jyotish is not prophecy — it is a mirror. Hastrekha is not magic — it is a language.
            Numbers are not coincidence — they are rhythm. Shriji Palmistry offers these ancient arts the
            way they were always meant to be read: without fear, without superstition, without
            anyone selling you a fix.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: "01", t: "Share your details", d: "Date, time, and place of birth — or a clear photo of your hand." },
    { n: "02", t: "Vedic analysis", d: "Our jyotishi reads your chart using classical Parashara methodology." },
    { n: "03", t: "Your report", d: "A personal, plainly-written report. No jargon, no scare tactics." },
    { n: "04", t: "Guidance & upaay", d: "Practical steps, mantras, and ratna suggestions where helpful." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">How it works</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl"><TextReveal text="Four simple steps." /></h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="bg-card p-8 h-full">
                <p className="font-display text-5xl text-primary/60">{s.n}</p>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "Is jyotish scientific?", a: "Jyotish is an ancient philosophical and cultural system, not a modern science. It is best used as a tool for self-reflection and cultural connection — not as a fixed prediction of fate." },
    { q: "What do I need for a reading?", a: "For a jyotish reading: date, time, and place of birth. For hastrekha: clear photos of both palms. For ank jyotish: just your date of birth." },
    { q: "Are ratna (gemstones) safe for everyone?", a: "No. Each ratna carries the energy of a planet — the wrong one can create imbalance. Neelam and gomed especially require a trial period. Always consult a qualified jyotishi before wearing." },
    { q: "Is this medical, legal, or financial advice?", a: "Absolutely not. Shriji Palmistry offers cultural and educational guidance only. For any major decision, please consult a licensed physician, attorney, or financial advisor." },
  ];
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Frequently asked</p>
          <h2 className="font-display text-4xl md:text-6xl"><TextReveal text="Questions, answered." /></h2>
        </Reveal>
        <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group py-6">
                <summary className="cursor-pointer list-none flex justify-between items-start gap-4">
                  <h3 className="font-display text-xl md:text-2xl group-open:text-primary transition">{f.q}</h3>
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <Disclaimer />
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <Reveal>
          <div className="relative glass rounded-[2.5rem] p-10 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-60" />
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl leading-tight">
                <TextReveal text="Your question — our work." highlight="question" italicHighlight />
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Book a personal reading. Every session is private and confidential.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90"
              >
                Book a reading <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
