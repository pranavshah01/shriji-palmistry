import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/jyotish")({
  head: () => ({
    meta: [
      { title: "Jyotish · Vedic Astrology · Shriji Palmistry" },
      { name: "description", content: "Vedic jyotish — the 12 rashis, 27 nakshatras, 9 grahas, and the art of reading a kundli. Ancient Indian astrology, clearly explained." },
      { property: "og:title", content: "Jyotish · Vedic Astrology · Shriji Palmistry" },
      { property: "og:description", content: "An introduction to Vedic astrology and the kundli." },
      { property: "og:url", content: "/jyotish" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/jyotish" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Jyotish · Vedic Astrology",
        about: "Vedic astrology, rashi, nakshatra, graha, kundli",
        inLanguage: "en-US",
      }),
    }],
  }),
  component: JyotishPage,
});

const grah = [
  { n: "Surya · Sun", d: "The soul, the father, leadership, and inner authority." },
  { n: "Chandra · Moon", d: "The mind, the mother, emotion, and memory." },
  { n: "Mangal · Mars", d: "Courage, energy, siblings, and the will to act." },
  { n: "Budh · Mercury", d: "Intellect, speech, commerce, and communication." },
  { n: "Guru · Jupiter", d: "Wisdom, dharma, children, and good fortune." },
  { n: "Shukra · Venus", d: "Love, art, marriage, and the sense of beauty." },
  { n: "Shani · Saturn", d: "Karma, discipline, delay, and hard-earned lessons." },
  { n: "Rahu", d: "Desire, illusion, foreign lands, and ambition." },
  { n: "Ketu", d: "Liberation, detachment, and spiritual insight." },
];

const rashi = [
  ["मेष", "Mesh", "Aries", "Fire"], ["वृष", "Vrish", "Taurus", "Earth"], ["मिथुन", "Mithun", "Gemini", "Air"],
  ["कर्क", "Kark", "Cancer", "Water"], ["सिंह", "Singh", "Leo", "Fire"], ["कन्या", "Kanya", "Virgo", "Earth"],
  ["तुला", "Tula", "Libra", "Air"], ["वृश्चिक", "Vrishchik", "Scorpio", "Water"], ["धनु", "Dhanu", "Sagittarius", "Fire"],
  ["मकर", "Makar", "Capricorn", "Earth"], ["कुंभ", "Kumbh", "Aquarius", "Air"], ["मीन", "Meen", "Pisces", "Water"],
];

function JyotishPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Practice · 01"
        title="Jyotish"
        sanskrit="ज्योतिषं ब्रह्माण्डस्य नेत्रम्"
        intro="Jyotish — from jyoti, meaning light — is the Vedic science of celestial light. For over five millennia, Indian rishis have studied the planets, nakshatras, and the rhythms of time to help a person understand their karma and direction."
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">What is jyotish?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Vedic jyotish, sometimes called <em>Hora Shastra</em>, is one of the six vedangas —
              the limbs of the Vedas. It is the study of planetary motion and its reflection in
              human life. Its purpose is not to predict a fixed future; it is to offer a mirror
              for self-understanding.
            </p>
            <p>
              Classical texts like the <em>Brihat Parashara Hora Shastra</em>,
              <em> Phaldeepika</em>, and the <em>Jaimini Sutras</em> shaped this tradition.
              Today, hundreds of millions of people still turn to jyotish for clarity at
              life's turning points.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-12">The Nine Grahas · <span className="text-gradient-gold">Navagraha</span></h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {grah.map((g, i) => (
            <Reveal key={g.n} delay={i * 0.04}>
              <div className="glass rounded-2xl p-6 hover-lift h-full">
                <p className="font-display text-2xl text-primary mb-2">{g.n}</p>
                <p className="text-sm text-muted-foreground">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-12">The Twelve Rashis</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {rashi.map((r, i) => (
            <Reveal key={r[1]} delay={i * 0.03}>
              <div className="glass rounded-xl p-5 text-center hover-lift">
                <p className="text-3xl text-primary mb-1" style={{ fontFamily: "var(--font-devanagari)" }}>{r[0]}</p>
                <p className="font-display text-lg">{r[1]}</p>
                <p className="text-xs text-muted-foreground">{r[2]} · {r[3]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">Why the kundli matters</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your janma kundli is a snapshot of the sky at the moment of your birth. Its twelve
            bhavas (houses) map the twelve domains of life — body, wealth, family, comfort,
            children, health, partnership, longevity, dharma, career, gains, and release. The
            grahas and rashis sitting in each bhava together compose the story of your life.
          </p>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
