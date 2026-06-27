import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About us · Shriji Palmistry" },
      { name: "description", content: "Shriji Palmistry brings the Vedic traditions of jyotish, hastrekha, and ank vidya to the Indian diaspora — clearly, honestly, and without superstition." },
      { property: "og:title", content: "About us · Shriji Palmistry" },
      { property: "og:description", content: "Our story, our methods, and our promises." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our story"
        title="Shriji Palmistry"
        sanskrit="आकाशस्य वाणी"
        intro='"The voice of the sky" — the wisdom that has always been there. Shriji Palmistry is an effort to bring the Vedic arts of jyotish, hastrekha, and ank vidya to a modern audience clearly, honestly, and without fear.'
      />

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-16 space-y-12 text-muted-foreground leading-relaxed">
        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-4">The jyotishi</h2>
          <div className="glass rounded-2xl p-7">
            <p className="text-xs uppercase tracking-wider text-accent mb-2">Founder · Practitioner</p>
            <p className="font-display text-3xl text-primary">Kanaiyalal Gandhi</p>
            <p className="text-sm text-muted-foreground mt-1">Engineer by education · Jyotishi by lifelong practice</p>
            <p className="mt-5">
              Kanaiyalal trained first as an engineer — and that analytical habit never left.
              Alongside his profession, for over fifteen years, he has studied and practiced
              jyotish from the classical Sanskrit sources: Brihat Parashara Hora Shastra,
              Phaldeepika, Jataka Parijata, Samudrik Shastra, and the Vedic numerology
              traditions.
            </p>
            <p className="mt-3">
              His approach is practical, not theatrical. No fear, no fixed predictions,
              no jargon. The chart is treated as a map — useful, honest, sometimes
              uncomfortable — never as a sentence handed down. Every reading at Shriji Palmistry
              is prepared and delivered by him personally.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-4">What we believe</h2>
          <p>
            Jyotish and its sister arts are thousands of years old. Their original purpose was
            never to frighten people or to lock anyone into a fixed fate. They were tools for
            self-knowledge and orientation.
          </p>
          <p className="mt-4">
            For Indians living far from home — in the United States and beyond — these arts
            often get caricatured: either as superstition, or as a transaction with someone
            promising to fix your life for a price. Shriji Palmistry offers a third path: tradition,
            translated, with respect for both the lineage and your own judgment.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-4">Our method</h2>
          <p>
            We work from the classical sources — Brihat Parashara Hora Shastra, Phaldeepika,
            Samudrik Shastra, and the Vedic numerology traditions. Every reading is personal,
            written in plain English, and grounded in your specific chart. We do not prescribe;
            we illuminate.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-4">Our promises</h2>
          <ul className="space-y-2 list-none">
            <li>· We will never use fear as a sales tactic.</li>
            <li>· We will never push ratna or rituals you do not need.</li>
            <li>· Your information stays private — full stop.</li>
            <li>· For medical, legal, or financial questions, we will always send you to a qualified professional.</li>
          </ul>
        </Reveal>

        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
