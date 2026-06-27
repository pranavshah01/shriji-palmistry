import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/seva")({
  head: () => ({
    meta: [
      { title: "Seva · Consultations & Reports · Shriji Palmistry" },
      { name: "description", content: "Personal Vedic consultations — janma kundli analysis, guna milan, varsh phal, career and business guidance, ratna recommendation, and baby naming by jyotish and ank vidya." },
      { property: "og:title", content: "Seva · Vedic Consultations · Shriji Palmistry" },
      { property: "og:description", content: "Personal jyotish readings and reports rooted in classical Indian tradition." },
      { property: "og:url", content: "/seva" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/seva" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Vedic Astrology Consultation",
        provider: { "@type": "Organization", name: "Shriji Palmistry" },
        areaServed: ["Chicago", "Illinois", "Midwest", "United States"],
        inLanguage: "en-US",
      }),
    }],
  }),
  component: SevaPage,
});

const services = [
  {
    n: "Janma Kundli Analysis",
    sub: "Vedic Birth Chart",
    d: "A complete reading of your birth chart — the twelve bhavas, planetary placements, yogas, and the karmic story they reveal about your life path.",
  },
  {
    n: "Guna Milan",
    sub: "Compatibility · Ashtakuta",
    d: "Traditional eight-fold matching between two charts for marriage. We assess mental, emotional, dharmic, and prarabdha compatibility, not just point scores.",
  },
  {
    n: "Varsh Phal",
    sub: "Year Ahead Forecast",
    d: "A solar-return analysis of the year ahead. Themes, timing, opportunities and the months that ask for caution — drawn from your annual chart.",
  },
  {
    n: "Career Analysis",
    sub: "Professional Margdarshan",
    d: "Identify the karmas your tenth house calls you toward, the best windows for change, and the planetary periods supporting growth or testing patience.",
  },
  {
    n: "Business Analysis",
    sub: "Vyapar Jyotish",
    d: "Choose auspicious muhurat for launches, partnerships, and signings. Understand which planetary cycles favor expansion and which counsel consolidation.",
  },
  {
    n: "Ratna Recommendation",
    sub: "Gemstone Prescription",
    d: "Based on your kundli, we recommend the right gemstone, metal, finger, and muhurat — with full instructions on testing, energizing, and wearing.",
  },
  {
    n: "Baby Kundli & Naming",
    sub: "Nakshatra-based Naam Karan",
    d: "A complete birth chart for your child along with name suggestions chosen by birth nakshatra, pada, and the sound that best resonates with their chart.",
  },
  {
    n: "Business Name Guidance",
    sub: "Numerology + Jyotish",
    d: "Names carry numeric vibration. We test proposed names through ank vidya and chart compatibility so your venture starts on the right frequency.",
  },
  {
    n: "Relationship Reading",
    sub: "Sambandh Vichaar",
    d: "Beyond marriage — for parents, siblings, business partners, and close friends. Where the energies align, where friction is natural, how to relate skillfully.",
  },
  {
    n: "Numerology Profile",
    sub: "Ank Jyotish Report",
    d: "Your moolank, bhagyank, and naam ank — what each says about temperament, timing, and the years that shape destiny.",
  },
];

const tiers = [
  {
    name: "Comprehensive Life Reading",
    sub: "One hour · one-on-one · video",
    d: "A 360° reading of your janma kundli on the question you bring — career, relationship, relocation, family, health, or purpose. Includes dasha and gochar mapping for the next twelve months, and a written summary afterward.",
  },
  {
    name: "Family Reading Package",
    sub: "Multi-session · up to 4 charts",
    d: "For parents, siblings, and children together. Each chart is read on its own and then in relation to the others — how the energies interact at home, where the natural friction lies, and how to support each other through current dashas.",
  },
];

const faqs = [
  {
    q: "What do I need to bring to a reading?",
    a: "Your full date, exact time, and city of birth — and the question on your mind. A few minutes of quiet before the call helps more than anything else.",
  },
  {
    q: "What if I don't know my exact birth time?",
    a: "We can work with an approximate time, or rectify it through a process called birth-time rectification — matching known life events back to your chart. Mention this when you book and we will guide you.",
  },
  {
    q: "How is this different from western astrology?",
    a: "Vedic astrology uses the sidereal zodiac fixed against the actual stars, and reads from your moon sign rather than your sun sign. The dasha system gives it a uniquely strong handle on timing. Most people are a different sign in jyotish than they are in their western horoscope.",
  },
  {
    q: "Do you give remedies?",
    a: "Where genuinely helpful — yes. Always the gentlest first: a simple mantra, a charitable practice, a change in routine. Ratna and rituals are suggested only when the chart genuinely calls for them, never as a sales tactic.",
  },
  {
    q: "Is this a religious service?",
    a: "No. Jyotish is a cultural and philosophical tradition, not a religion. Readings are open to people of every background and faith. We do not ask you to believe anything you do not already believe.",
  },
  {
    q: "Will you predict my future?",
    a: "No one can — and anyone who claims to should be approached with caution. We will tell you what your chart shows about your tendencies, your current dasha, and the windows ahead. What you do with that information is yours.",
  },
];

const testimonials = [
  {
    q: "I had been spiralling about a career move for months. One hour with Kanaiyalal and I had a clear answer — not because he told me what to do, but because the chart made my own thinking visible.",
    by: "Software engineer · Bay Area",
  },
  {
    q: "We came with our daughter's chart and a long list of worries. He read it without drama, told us what he saw, and quietly removed three things from our list. Worth every minute.",
    by: "Parents · New Jersey",
  },
  {
    q: "I was sceptical going in — engineer myself. What I got was a structured, evidence-based reading with zero pressure. The Sade Sati framing alone reshaped how I thought about my forties.",
    by: "Product lead · Seattle",
  },
];

function SevaPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Practice · 06"
        title="Seva"
        sanskrit="सेवा परमो धर्मः"
        intro="Consultations are an act of seva — service offered with care. Each reading is prepared and delivered personally by Kanaiyalal Gandhi. No templates, no generated text, no fixed predictions sold as fate."
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Consultation tiers</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-3xl text-primary mb-10">Two ways to begin</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="glass rounded-3xl p-8 h-full">
                <p className="text-xs uppercase tracking-wider text-accent mb-2">{t.sub}</p>
                <p className="font-display text-3xl text-primary mb-4">{t.name}</p>
                <p className="text-muted-foreground leading-relaxed">{t.d}</p>
                <p className="mt-6 text-sm text-primary/80">Investment · on request</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">All services</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-3xl text-primary mb-10">Specific reports & sessions</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="glass rounded-2xl p-7 hover-lift h-full flex flex-col">
                <p className="text-xs uppercase tracking-wider text-accent mb-2">{s.sub}</p>
                <p className="font-display text-2xl text-primary mb-3">{s.n}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8 text-primary">How a reading works</h2>
          <ol className="space-y-5 text-muted-foreground">
            <li className="flex gap-4">
              <span className="font-display text-2xl text-accent">01</span>
              <p>Share your full birth details — date, exact time, and city. Accuracy here matters more than anything else.</p>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-2xl text-accent">02</span>
              <p>Your chart is cast and studied across rashi, navamsha, and the dasha periods relevant to your question.</p>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-2xl text-accent">03</span>
              <p>We meet for a live conversation — over video or phone — where the chart is explained and your questions are answered.</p>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-2xl text-accent">04</span>
              <p>A written summary follows, along with any upaya (remedies) or muhurat suggested for the months ahead.</p>
            </li>
          </ol>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">In their words</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-3xl text-primary mb-3">What people take away</h2>
          <p className="text-xs text-muted-foreground/70 mb-10">Illustrative reflections from past consultations — names withheld for privacy.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="glass rounded-2xl p-7 h-full flex flex-col">
                <blockquote className="text-muted-foreground leading-relaxed flex-1 italic">"{t.q}"</blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-wider text-accent">{t.by}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Before you book</p>
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-10">Frequently asked</h2>
        </Reveal>
        <div className="divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
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
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-16">
        <Reveal>
          <div className="glass rounded-2xl p-8 text-center">
            <p className="font-display text-2xl md:text-3xl mb-4">Ready to begin?</p>
            <p className="text-muted-foreground mb-6">Share your birth details and the question on your mind. We'll respond within two business days.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Book a consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
