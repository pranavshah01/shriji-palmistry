import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/ank-jyotish")({
  head: () => ({
    meta: [
      { title: "Ank Jyotish · Vedic Numerology · Shriji Palmistry" },
      { name: "description", content: "Ank jyotish — your moolank, bhagyank, and naamank. Vedic numerology reveals the rhythm hidden inside your birth date and your name." },
      { property: "og:title", content: "Ank Jyotish · Vedic Numerology · Shriji Palmistry" },
      { property: "og:description", content: "The Vedic art of numbers — your moolank and bhagyank explained." },
      { property: "og:url", content: "/ank-jyotish" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/ank-jyotish" }],
  }),
  component: AnkPage,
});

const moolank = [
  { n: 1, g: "Surya · Sun", t: "Natural leader. Independent, original, ambitious." },
  { n: 2, g: "Chandra · Moon", t: "Sensitive, intuitive, cooperative, imaginative." },
  { n: 3, g: "Guru · Jupiter", t: "Wise, disciplined, principled, expressive." },
  { n: 4, g: "Rahu", t: "Unconventional, restless, inventive, unique." },
  { n: 5, g: "Budh · Mercury", t: "Quick, communicative, adaptable, commercial." },
  { n: 6, g: "Shukra · Venus", t: "Artistic, loving, drawn to beauty and harmony." },
  { n: 7, g: "Ketu", t: "Mystical, introspective, spiritual seeker." },
  { n: 8, g: "Shani · Saturn", t: "Hardworking, patient, grounded, slow-blooming." },
  { n: 9, g: "Mangal · Mars", t: "Courageous, energetic, fiery, transformative." },
];

function AnkPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Practice · 03"
        title="Ank Jyotish"
        sanskrit="अङ्केषु ब्रह्माण्डस्य लयः"
        intro="Ank jyotish — the Vedic science of numbers. Long before Pythagoras, Indian rishis recognized that every number carries the rhythm of a graha. Your birth date is a piece of music written for you."
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">How to find your moolank</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Add the digits of your day of birth until a single digit remains. Example: born on
            the 27th — 2 + 7 = 9. Your moolank is 9.
          </p>
          <div className="glass rounded-2xl p-8">
            <p className="text-sm text-muted-foreground mb-2">Example</p>
            <p className="font-display text-3xl text-primary">August 27, 1995</p>
            <p className="text-muted-foreground mt-3">Moolank: 2 + 7 = <span className="text-primary">9</span></p>
            <p className="text-muted-foreground">Bhagyank: 2 + 7 + 8 + 1 + 9 + 9 + 5 = 41 → 4 + 1 = <span className="text-primary">5</span></p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-12">The Nine Moolanks</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moolank.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.04}>
              <div className="glass rounded-2xl p-7 hover-lift h-full">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="font-display text-6xl text-gradient-gold">{m.n}</span>
                  <span className="text-sm text-primary">{m.g}</span>
                </div>
                <p className="text-sm text-muted-foreground">{m.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">Naamank · The power of a name</h2>
          <p className="text-muted-foreground leading-relaxed">
            The letters of your name also reduce to numbers (Chaldean and Vedic systems differ
            slightly). When moolank and naamank harmonize, energy flows easily. When they clash,
            life tends to feel like effort against the current. Many people in the Indian diaspora
            adjust the spelling of their name — even slightly — to restore that alignment.
          </p>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
