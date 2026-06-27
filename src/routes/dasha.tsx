import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/dasha")({
  head: () => ({
    meta: [
      { title: "Dasha & Gochar · Vedic Timing & Transits · Shriji Palmistry" },
      {
        name: "description",
        content:
          "Vimshottari mahadasha, antardasha, and gochar transits — how Vedic astrology answers when, not just what. A practical guide to timing in jyotish.",
      },
      { property: "og:title", content: "Dasha & Gochar · Vedic Timing · Shriji Palmistry" },
      { property: "og:description", content: "The 120-year planetary cycle that gives jyotish its analytical edge." },
      { property: "og:url", content: "/dasha" },
    ],
    links: [{ rel: "canonical", href: "/dasha" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Dasha and Gochar — Vedic Timing and Transits",
        author: { "@type": "Person", name: "Kanaiyalal Gandhi" },
        publisher: { "@type": "Organization", name: "Shriji Palmistry" },
        inLanguage: "en-US",
      }),
    }],
  }),
  component: DashaPage,
});

const dashaCycle = [
  { p: "Ketu", y: 7 }, { p: "Venus", y: 20 }, { p: "Sun", y: 6 },
  { p: "Moon", y: 10 }, { p: "Mars", y: 7 }, { p: "Rahu", y: 18 },
  { p: "Jupiter", y: 16 }, { p: "Saturn", y: 19 }, { p: "Mercury", y: 17 },
];

function DashaPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Vidya · 06"
        title="Dasha & Gochar"
        sanskrit="दशा · गोचर"
        intro="Western astrology tells you what is in your chart. Vedic astrology, through the dasha system, tells you when it activates. This is the analytical edge that separates a jyotish reading from a horoscope."
      />

      <section className="mx-auto max-w-3xl px-5 lg:px-10 py-8 text-muted-foreground leading-relaxed space-y-12">
        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-3">Vimshottari Mahadasha</h2>
          <p>
            The most widely used dasha system is Vimshottari — a 120-year cycle of planetary
            periods, calculated from your janma nakshatra. Each graha rules for a fixed span:
            seven years for Ketu, twenty for Venus, six for the Sun, and so on. At any moment in
            your life, one graha is the chief executive of your story.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {dashaCycle.map((d) => (
              <div key={d.p} className="glass rounded-xl p-4 text-center">
                <p className="font-display text-2xl text-primary">{d.y}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{d.p} · yrs</p>
              </div>
            ))}
          </div>
          <p className="mt-6">
            A well-placed graha during its mahadasha can elevate an entire decade. A debilitated
            one can demand the toughest lessons of your life. Knowing which mahadasha you are in,
            and which one is next, is the first practical question a jyotishi asks.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-3">Antardasha & Pratyantardasha</h2>
          <p>
            Inside every mahadasha there are nine antardashas — sub-periods, ruled by each of the
            nine grahas in turn, proportional to their own length. The combination of mahadasha
            lord and antardasha lord is where most short-term timing lives. A Jupiter mahadasha
            with a Saturn antardasha asks different things of you than the same Jupiter with a
            Venus antardasha.
          </p>
          <p className="mt-4">
            For the most precise work — choosing a wedding date, signing a contract, scheduling
            surgery — jyotishis go one level deeper into pratyantardasha, the sub-sub-period.
            Resolution down to weeks, not years.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl text-primary mb-3">Gochar · the transits</h2>
          <p>
            Layered on top of dasha is gochar — where the planets are actually moving in the sky
            right now, relative to your natal chart. Three transits get the most attention:
          </p>
          <ul className="mt-4 space-y-3">
            <li>· <span className="text-primary">Sade Sati</span> — Saturn's seven-and-a-half-year passage over the houses around your natal moon. Less feared, more respected.</li>
            <li>· <span className="text-primary">Jupiter return</span> — every twelve years, Jupiter comes back to where he was at your birth. A natural cycle of expansion and review.</li>
            <li>· <span className="text-primary">Rahu-Ketu axis shift</span> — every eighteen months the nodes change signs. Subtle, but every major life pivot can usually be located against this shift.</li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-16">
        <Reveal>
          <div className="glass rounded-2xl p-8 text-center">
            <p className="font-display text-2xl md:text-3xl mb-3">What dasha am I in right now?</p>
            <p className="text-muted-foreground mb-6">
              Send your birth details and we will map your current mahadasha and antardasha, plus
              the gochar shifts to watch in the next twelve months.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Map my timing <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
