import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";
import { Compass, Heart, Sprout, Star, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/margdarshan/")({
  head: () => ({
    meta: [
      { title: "Life Guidance · Margdarshan · Shriji Palmistry" },
      { name: "description", content: "Vedic guidance for self-knowledge, relationships, well-being, and life purpose — drawn from jyotish and ank vidya." },
      { property: "og:title", content: "Life Guidance · Margdarshan · Shriji Palmistry" },
      { property: "og:description", content: "Clarity for the questions that matter most." },
      { property: "og:url", content: "/margdarshan" },
    ],
    links: [{ rel: "canonical", href: "/margdarshan" }],
  }),
  component: MargdarshanIndex,
});

const areas = [
  { icon: Heart, t: "Relationships & love", d: "Kundli milan for marriage, dosha analysis, and a deeper read of your patterns in love." },
  { icon: Sprout, t: "Well-being", d: "How the grahas shape body and mind — and the lifestyle that keeps you balanced." },
  { icon: Compass, t: "Life purpose", d: "Why you are here — through the lens of dharma, karma, artha, and moksha." },
  { icon: Star, t: "Inner growth", d: "Dhyana, mantra, and sadhana to awaken the energy your chart points toward." },
];

function MargdarshanIndex() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Practice · 05"
        title="Margdarshan"
        sanskrit="आत्मानं विद्धि"
        intro='"Know thyself" — the first instruction of the Upanishads. Jyotish and ank vidya are mirrors in which you can see your truer shape. Guidance is not a command; it is a lamp.'
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-12">Four areas of focus</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {areas.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.05}>
              <div className="glass rounded-2xl p-8 hover-lift h-full">
                <a.icon className="h-7 w-7 text-primary mb-5" />
                <h3 className="font-display text-2xl mb-3">{a.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Reveal>
          <div className="glass rounded-3xl p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Looking for career guidance?</h2>
            <p className="text-muted-foreground mb-8">
              See the work that aligns with your grahas and moolank.
            </p>
            <Link
              to="/margdarshan/career"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90"
            >
              Career Guidance <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
