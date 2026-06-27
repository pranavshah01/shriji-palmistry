import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/margdarshan/career")({
  head: () => ({
    meta: [
      { title: "Career Guidance · Shriji Palmistry" },
      { name: "description", content: "Vedic career guidance — find the work aligned with your grahas, moolank, and the karma bhava of your kundli." },
      { property: "og:title", content: "Career Guidance · Shriji Palmistry" },
      { property: "og:description", content: "The dharma of work, the jyotish way." },
      { property: "og:url", content: "/margdarshan/career" },
    ],
    links: [{ rel: "canonical", href: "/margdarshan/career" }],
  }),
  component: CareerPage,
});

const careerByGrah = [
  { g: "Surya · Sun", c: "Government, administration, politics, medicine, fine jewelry." },
  { g: "Chandra · Moon", c: "Psychology, writing, hospitality, food, dairy, maritime trade." },
  { g: "Mangal · Mars", c: "Engineering, military, surgery, real estate, sports, defense." },
  { g: "Budh · Mercury", c: "Writing, commerce, accounting, IT, communications, teaching." },
  { g: "Guru · Jupiter", c: "Education, law, counseling, banking, jyotish, advisory work." },
  { g: "Shukra · Venus", c: "Art, design, fashion, film, media, hospitality, beauty." },
  { g: "Shani · Saturn", c: "Engineering, science, public service, mining, judiciary, labor." },
  { g: "Rahu", c: "International business, tech, photography, cinema, marketing." },
  { g: "Ketu", c: "Research, healing, philosophy, spiritual work, tantra, occult." },
];

function CareerPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Practice · 06"
        title="Career Guidance"
        sanskrit="स्वधर्मे निधनं श्रेयः"
        intro='"Better to die in one\u2019s own dharma than to thrive in another\u2019s." Choosing work aligned with your nature is the root of meaningful success. Jyotish and ank vidya help you see where that nature points.'
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">The jyotish of work</h2>
          <p className="text-muted-foreground leading-relaxed">
            The tenth bhava of your kundli — the karma bhava — and its ruling graha define the
            shape of your career. The second bhava governs wealth; the sixth, service and struggle;
            the eleventh, gains. Read together with your dasha periods, these reveal both the path
            and its timing.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-12">Grahas and the work they favor</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {careerByGrah.map((c, i) => (
            <Reveal key={c.g} delay={i * 0.04}>
              <div className="glass rounded-2xl p-6 hover-lift h-full">
                <p className="font-display text-2xl text-primary mb-3">{c.g}</p>
                <p className="text-sm text-muted-foreground">{c.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 py-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">Practical next steps</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>· Have your D-10 (Dashamansha) chart analyzed — it is the subtle map of career.</li>
            <li>· Time major career moves with your current mahadasha and antardasha.</li>
            <li>· Align your moolank and naamank — even a small spelling change can shift the field.</li>
            <li>· Chant the mantra of the ruler of your karma bhava as a daily anchor.</li>
          </ul>
        </Reveal>
        <Disclaimer />
      </section>
    </SiteLayout>
  );
}
