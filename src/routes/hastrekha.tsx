import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/hastrekha")({
  head: () => ({
    meta: [
      { title: "Hastrekha · Vedic Palmistry · Shriji Palmistry" },
      { name: "description", content: "Hastrekha — the Vedic art of palmistry. The lines, mounts, and shape of your hand, read with the wisdom of Samudrik Shastra." },
      { property: "og:title", content: "Hastrekha · Vedic Palmistry · Shriji Palmistry" },
      { property: "og:description", content: "Read the lines of your hand the Vedic way." },
      { property: "og:url", content: "/hastrekha" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/hastrekha" }],
  }),
  component: HastrekhaPage,
});

const lines = [
  { n: "Jeevan Rekha · Life Line", d: "Curves between thumb and index finger down to the wrist. Reflects vitality and life energy — its length describes quality, not duration." },
  { n: "Hriday Rekha · Heart Line", d: "Runs across the top of the palm. Speaks to emotion, love, and capacity for connection." },
  { n: "Mastishk Rekha · Head Line", d: "Crosses the center of the palm. Reflects intellect, thinking style, and decision-making." },
  { n: "Bhagya Rekha · Fate Line", d: "Rises from the wrist toward the fingers. Reflects karma, career, and the pull of circumstance." },
  { n: "Surya Rekha · Sun Line", d: "Reaches toward the ring finger. Speaks of recognition, artistry, and the possibility of fame." },
  { n: "Vivah Rekha · Marriage Lines", d: "Sit below the little finger. Indicate significant partnerships and the shape of relationships." },
];

const mounts = [
  "Guru · Jupiter", "Shani · Saturn", "Surya · Sun", "Budh · Mercury",
  "Mangal · Mars", "Chandra · Moon", "Shukra · Venus", "Rahu",
];

function HastrekhaPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Practice · 02"
        title="Hastrekha"
        sanskrit="हस्ते रेखा भविष्यस्य दर्पणम्"
        intro="Hastrekha — the Vedic art of reading the hand. In Indian tradition this falls under Samudrik Shastra, the science of bodily marks. Your palm is not a fortune card; it is a map of your karma and temperament."
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">What does the hand reveal?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              In Indian tradition, <em>Samudrik Shastra</em> studies the body's signatures — its
              shape, marks, and movements. Hastrekha is its most refined branch: the reading of
              lines, mounts (parvats), finger structure, and nail formation in the palm.
            </p>
            <p>
              The right hand is said to reflect the present life and your conscious choices; the
              left, the imprint of past karma and inherited potential. Together they tell the
              whole story.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-12">The Main Lines</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {lines.map((l, i) => (
            <Reveal key={l.n} delay={i * 0.05}>
              <div className="glass rounded-2xl p-7 hover-lift h-full">
                <p className="font-display text-2xl text-primary mb-3">{l.n}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-4">The Eight Mounts · Parvat</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            The raised regions of the palm — each linked to a graha. Their prominence or
            flatness suggests how strongly that planetary energy works in your life.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {mounts.map((m, i) => (
            <Reveal key={m} delay={i * 0.04}>
              <div className="glass rounded-xl p-5 text-center hover-lift">
                <p className="font-display text-lg text-primary">{m}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">The art of reading</h2>
          <p className="text-muted-foreground leading-relaxed">
            A skilled hastrekha reader weighs the shape of the hand, the length of the fingers,
            the depth and angle of every line, and the relative rise of each mount — all at once.
            A single line in isolation tells you nothing. Like a raga, each note matters only
            because of the notes around it.
          </p>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
