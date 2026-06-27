import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/rashifal")({
  head: () => ({
    meta: [
      { title: "Rashifal · Weekly Vedic Forecast · Shriji Palmistry" },
      { name: "description", content: "Weekly rashifal — a reflective Vedic forecast for each of the twelve moon signs. General guidance drawn from current planetary movements, written for the diaspora." },
      { property: "og:title", content: "Rashifal · Weekly Forecast · Shriji Palmistry" },
      { property: "og:description", content: "Weekly guidance for each of the twelve rashis." },
      { property: "og:url", content: "/rashifal" },
    ],
    links: [{ rel: "canonical", href: "/rashifal" }],
  }),
  component: RashifalPage,
});

const rashis = [
  { d: "मेष", n: "Mesh · Aries", lord: "Mangal", t: "A week of forward motion. Channel restlessness into one decisive act rather than many half-finished ones. Be patient with family on Wednesday." },
  { d: "वृष", n: "Vrish · Taurus", lord: "Shukra", t: "Money matters need careful review. A long-pending conversation about home or property is likely. Don't sign anything in haste." },
  { d: "मिथुन", n: "Mithun · Gemini", lord: "Budh", t: "Communication is your strength now. Reach out to someone you have lost touch with — there is karma to complete. Travel is favored mid-week." },
  { d: "कर्क", n: "Kark · Cancer", lord: "Chandra", t: "Emotions run deep. Protect your sleep and your meals. A parent or elder may need attention. Trust your intuition; it is unusually clear." },
  { d: "सिंह", n: "Singh · Leo", lord: "Surya", t: "Recognition is near, but so is the temptation to overplay your hand. Lead with generosity rather than pride and the week opens beautifully." },
  { d: "कन्या", n: "Kanya · Virgo", lord: "Budh", t: "A productive stretch for detailed work. Health asks for discipline — small daily routines matter more than dramatic changes." },
  { d: "तुला", n: "Tula · Libra", lord: "Shukra", t: "Relationships are highlighted. A partnership, personal or professional, asks for honest re-balancing. Beauty, art, and design carry extra power now." },
  { d: "वृश्चिक", n: "Vrishchik · Scorpio", lord: "Mangal", t: "A week of transformation. Something you have been holding on to is ready to be released. Avoid confrontation on Saturday." },
  { d: "धनु", n: "Dhanu · Sagittarius", lord: "Guru", t: "Higher learning, travel, and dharma are calling. A teacher or mentor reappears. Say yes to the opportunity that seems too large." },
  { d: "मकर", n: "Makar · Capricorn", lord: "Shani", t: "Slow, steady, and rewarded for it. Career conversations move quietly in your favor. Honor commitments — Shani is watching." },
  { d: "कुंभ", n: "Kumbh · Aquarius", lord: "Shani", t: "Friends, community, and long-held wishes come into focus. An unusual idea is worth pursuing. Save energy for the second half of the week." },
  { d: "मीन", n: "Meen · Pisces", lord: "Guru", t: "A reflective, almost spiritual week. Dreams may carry messages. Practice generosity — what you give now returns multiplied later." },
];

function RashifalPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Reflection · Weekly"
        title="Rashifal"
        sanskrit="राशिफलं चन्द्रराशिगतम्"
        intro="Vedic rashifal is read from the moon sign, not the sun sign. These weekly reflections are general guidance for each rashi — meaningful as a mirror, but never a substitute for a personal chart reading."
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-8">
        <Reveal>
          <div className="glass rounded-2xl p-6 text-sm text-muted-foreground">
            <p>
              <span className="text-accent font-medium">Don't know your rashi?</span> Your Vedic moon
              sign is based on the nakshatra of the moon at your birth — not your western sun sign.
              A short kundli consultation will tell you yours.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rashis.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.04}>
              <div className="glass rounded-2xl p-7 hover-lift h-full">
                <div className="flex items-baseline justify-between mb-3">
                  <p className="text-3xl text-primary" style={{ fontFamily: "var(--font-devanagari)" }}>{r.d}</p>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Lord · {r.lord}</span>
                </div>
                <p className="font-display text-xl mb-3">{r.n}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
