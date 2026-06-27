import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/ratna")({
  head: () => ({
    meta: [
      { title: "Ratna · Vedic Gemstones · Shriji Palmistry" },
      { name: "description", content: "The Vedic science of ratna — nine gemstones, nine grahas. Benefits, methods of wearing, and the cautions every wearer should know." },
      { property: "og:title", content: "Ratna · Vedic Gemstones · Shriji Palmistry" },
      { property: "og:description", content: "Choosing the right gemstone, the Vedic way." },
      { property: "og:url", content: "/ratna" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/ratna" }],
  }),
  component: RatnaPage,
});

const ratnas = [
  { n: "Manik · Ruby", g: "Surya · Sun", c: "Red", d: "Builds confidence, authority, and recognition. Worn on the ring finger." },
  { n: "Moti · Pearl", g: "Chandra · Moon", c: "White", d: "Calms the mind and steadies emotions. Worn on the little finger." },
  { n: "Moonga · Red Coral", g: "Mangal · Mars", c: "Red / Orange", d: "Lends courage and energy. Set in copper or gold, worn on the ring finger." },
  { n: "Panna · Emerald", g: "Budh · Mercury", c: "Green", d: "Sharpens intellect, speech, and business sense. Worn on the little finger in gold." },
  { n: "Pukhraj · Yellow Sapphire", g: "Guru · Jupiter", c: "Yellow", d: "Brings wisdom, dharma, and good fortune. Worn on the index finger in gold." },
  { n: "Heera · Diamond", g: "Shukra · Venus", c: "White", d: "Enhances beauty, love, and the artistic eye. Worn on the middle or ring finger." },
  { n: "Neelam · Blue Sapphire", g: "Shani · Saturn", c: "Blue", d: "Extremely powerful — only after a trial period. Worn on the middle finger in panchdhatu." },
  { n: "Gomed · Hessonite", g: "Rahu", c: "Honey brown", d: "Protects against confusion and intrigue. Worn on the middle finger in silver." },
  { n: "Lehsuniya · Cat's Eye", g: "Ketu", c: "Yellow-green", d: "Encourages insight and unexpected gain. Worn on the ring finger." },
];

function RatnaPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Practice · 04"
        title="Ratna"
        sanskrit="रत्नानि ग्रहाणां प्रतिनिधयः"
        intro="Nine gemstones for nine grahas. The right ratna amplifies a planet's strength; the wrong one creates imbalance. This is why a ratna is never chosen casually — it is prescribed."
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-8">
        <Reveal>
          <div className="glass rounded-2xl p-7 border-l-4 border-accent flex gap-4 items-start">
            <AlertTriangle className="h-6 w-6 text-accent shrink-0 mt-1" />
            <div>
              <p className="font-display text-xl text-accent mb-2">Caution</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Never wear a ratna on your own intuition alone. Consult a qualified jyotishi and
                have your kundli analyzed first. Powerful stones like neelam and gomed must be
                tested for three days before being worn permanently. Only a natural, untreated,
                certified stone carries the intended effect.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-12">Navaratna · The Nine Stones</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ratnas.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.04}>
              <div className="glass rounded-2xl p-7 hover-lift h-full">
                <div className="flex justify-between items-start mb-4">
                  <p className="font-display text-xl text-primary">{r.n}</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{r.g}</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Color: {r.c}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">How a ratna is worn</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>· Choose a shubh muhurat on the day of the corresponding graha.</li>
            <li>· Cleanse the stone with raw milk, Ganga jal, and tulsi leaves before wearing.</li>
            <li>· Chant the graha's mantra 108 times to activate it.</li>
            <li>· The stone must touch your skin — open settings, not closed.</li>
            <li>· Always insist on a natural, lab-certified stone from a trusted source.</li>
          </ul>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
