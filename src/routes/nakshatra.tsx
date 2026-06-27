import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/nakshatra")({
  head: () => ({
    meta: [
      { title: "Nakshatra · The 27 Lunar Mansions of Vedic Astrology · Shriji Palmistry" },
      {
        name: "description",
        content:
          "A guide to the 27 nakshatras — the lunar mansions of Vedic astrology. Your janma nakshatra, its ruling graha and deity, and why it matters more than your sun sign.",
      },
      { property: "og:title", content: "The 27 Nakshatras · Shriji Palmistry" },
      { property: "og:description", content: "Janma nakshatra — the moon's daily station and the truer compass of Vedic astrology." },
      { property: "og:url", content: "/nakshatra" },
    ],
    links: [{ rel: "canonical", href: "/nakshatra" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "The 27 Nakshatras of Vedic Astrology",
        author: { "@type": "Person", name: "Kanaiyalal Gandhi" },
        publisher: { "@type": "Organization", name: "Shriji Palmistry" },
        inLanguage: "en-US",
        about: "Vedic astrology, nakshatras, janma nakshatra",
      }),
    }],
  }),
  component: NakshatraPage,
});

const nakshatras = [
  { n: 1, name: "Ashwini", dev: "अश्विनी", lord: "Ketu", deity: "Ashwini Kumaras", symbol: "Horse's head", essence: "Swift beginnings, healing, initiative." },
  { n: 2, name: "Bharani", dev: "भरणी", lord: "Venus", deity: "Yama", symbol: "Yoni", essence: "Transformation, restraint, fierce creativity." },
  { n: 3, name: "Krittika", dev: "कृत्तिका", lord: "Sun", deity: "Agni", symbol: "Razor / flame", essence: "Cutting clarity, purification, courage." },
  { n: 4, name: "Rohini", dev: "रोहिणी", lord: "Moon", deity: "Brahma", symbol: "Ox cart", essence: "Beauty, fertility, sensual abundance." },
  { n: 5, name: "Mrigashira", dev: "मृगशिरा", lord: "Mars", deity: "Soma", symbol: "Deer's head", essence: "Seeking, curiosity, gentle restlessness." },
  { n: 6, name: "Ardra", dev: "आर्द्रा", lord: "Rahu", deity: "Rudra", symbol: "Teardrop", essence: "Storm before clarity, breakthrough." },
  { n: 7, name: "Punarvasu", dev: "पुनर्वसु", lord: "Jupiter", deity: "Aditi", symbol: "Quiver of arrows", essence: "Return, renewal, faith." },
  { n: 8, name: "Pushya", dev: "पुष्य", lord: "Saturn", deity: "Brihaspati", symbol: "Cow's udder", essence: "Nourishment, the most auspicious nakshatra." },
  { n: 9, name: "Ashlesha", dev: "आश्लेषा", lord: "Mercury", deity: "Nagas", symbol: "Coiled serpent", essence: "Hypnotic depth, hidden knowledge." },
  { n: 10, name: "Magha", dev: "मघा", lord: "Ketu", deity: "Pitris", symbol: "Royal throne", essence: "Ancestral power, lineage, dignity." },
  { n: 11, name: "Purva Phalguni", dev: "पूर्व फाल्गुनी", lord: "Venus", deity: "Bhaga", symbol: "Front of a bed", essence: "Pleasure, rest, creative ease." },
  { n: 12, name: "Uttara Phalguni", dev: "उत्तर फाल्गुनी", lord: "Sun", deity: "Aryaman", symbol: "Back of a bed", essence: "Reliable partnership, public service." },
  { n: 13, name: "Hasta", dev: "हस्त", lord: "Moon", deity: "Savitar", symbol: "Open hand", essence: "Skill, craft, manifestation." },
  { n: 14, name: "Chitra", dev: "चित्रा", lord: "Mars", deity: "Tvashtar", symbol: "Bright jewel", essence: "Design, beauty, distinct identity." },
  { n: 15, name: "Swati", dev: "स्वाती", lord: "Rahu", deity: "Vayu", symbol: "Young shoot in wind", essence: "Independence, movement, trade." },
  { n: 16, name: "Vishakha", dev: "विशाखा", lord: "Jupiter", deity: "Indra-Agni", symbol: "Triumphal arch", essence: "Goal-orientation, fierce ambition." },
  { n: 17, name: "Anuradha", dev: "अनुराधा", lord: "Saturn", deity: "Mitra", symbol: "Lotus", essence: "Friendship, devotion, loyal love." },
  { n: 18, name: "Jyeshtha", dev: "ज्येष्ठा", lord: "Mercury", deity: "Indra", symbol: "Earring / umbrella", essence: "Seniority, hidden authority, mastery." },
  { n: 19, name: "Mula", dev: "मूल", lord: "Ketu", deity: "Nirriti", symbol: "Bundle of roots", essence: "Going to the root, dissolution and truth." },
  { n: 20, name: "Purva Ashadha", dev: "पूर्वाषाढा", lord: "Venus", deity: "Apas", symbol: "Fan / winnowing basket", essence: "Invigoration, undefeated will." },
  { n: 21, name: "Uttara Ashadha", dev: "उत्तराषाढा", lord: "Sun", deity: "Vishvadevas", symbol: "Elephant tusk", essence: "Lasting victory, integrity." },
  { n: 22, name: "Shravana", dev: "श्रवण", lord: "Moon", deity: "Vishnu", symbol: "Ear / three footprints", essence: "Listening, learning, lineage." },
  { n: 23, name: "Dhanishta", dev: "धनिष्ठा", lord: "Mars", deity: "Eight Vasus", symbol: "Drum", essence: "Rhythm, wealth, abundance." },
  { n: 24, name: "Shatabhisha", dev: "शतभिषा", lord: "Rahu", deity: "Varuna", symbol: "Empty circle", essence: "Healing, mystery, solitude." },
  { n: 25, name: "Purva Bhadrapada", dev: "पूर्व भाद्रपदा", lord: "Jupiter", deity: "Aja Ekapada", symbol: "Front of a funeral cot", essence: "Intensity, otherworldly drive." },
  { n: 26, name: "Uttara Bhadrapada", dev: "उत्तर भाद्रपदा", lord: "Saturn", deity: "Ahir Budhnya", symbol: "Back of a funeral cot", essence: "Depth, patience, oceanic wisdom." },
  { n: 27, name: "Revati", dev: "रेवती", lord: "Mercury", deity: "Pushan", symbol: "Fish", essence: "Safe passage, completion, compassion." },
];

function NakshatraPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Vidya · 05"
        title="Nakshatra"
        sanskrit="नक्षत्र · twenty-seven lunar mansions"
        intro="The moon moves through the zodiac roughly every 27 days, halting one night in each nakshatra. The one she occupied at your birth — your janma nakshatra — is the truer compass of who you are than any sun sign."
      />

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-12 text-muted-foreground leading-relaxed space-y-6">
        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-3">What is a nakshatra?</h2>
          <p>
            The Sanskrit word translates loosely to "that which does not decay" — the fixed stars
            against which the moon's journey is measured. The zodiac is divided into twenty-seven
            equal segments of 13°20′ each, and each segment carries the name, deity, and ruling
            graha of its presiding star or constellation.
          </p>
          <p className="mt-4">
            Each nakshatra is further divided into four padas (quarters), giving 108 padas in
            total — the same 108 that appears on the japa mala. This is the resolution at which
            classical jyotish reads the moon. A western sun-sign reading sees twelve of you;
            jyotish sees one hundred and eight.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-3">Why your janma nakshatra matters</h2>
          <p>
            It rules your dasha sequence — the great planetary periods that shape your life. It
            governs the first syllable of your name in the classical naamakaran ceremony. It
            shapes your instincts, your wounds, and the people you are drawn to. If you remember
            only one detail from your chart, this is the one.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nakshatras.map((nx, i) => (
            <Reveal key={nx.n} delay={(i % 9) * 0.04}>
              <div className="glass rounded-2xl p-6 h-full hover-lift">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs uppercase tracking-wider text-accent">{String(nx.n).padStart(2, "0")} · {nx.lord}</span>
                  <span className="text-lg text-primary/70" style={{ fontFamily: "var(--font-devanagari)" }}>{nx.dev}</span>
                </div>
                <p className="font-display text-2xl text-primary">{nx.name}</p>
                <p className="text-xs text-muted-foreground mt-1">Deity · {nx.deity} · Symbol · {nx.symbol}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{nx.essence}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-16">
        <Reveal>
          <div className="glass rounded-2xl p-8 text-center">
            <p className="font-display text-2xl md:text-3xl mb-3">Don't know your janma nakshatra?</p>
            <p className="text-muted-foreground mb-6">
              We will calculate it from your exact birth time and place, and explain what it means
              for your dasha cycle, your work, and your closest relationships.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Find my nakshatra <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
