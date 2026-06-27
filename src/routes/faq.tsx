import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";

const faqs = [
  { q: "What is jyotish, exactly?", a: "Jyotish is the Vedic science of light — the study of how planetary positions at the time of your birth correlate with patterns in your life. It is a contemplative tool, not a fortune-telling machine." },
  { q: "Do I need to believe in this for it to work?", a: "No. A good reading should give you insight regardless of belief. Think of it as a structured conversation about your patterns, strengths, and timing." },
  { q: "What information do I need to provide?", a: "Full name, exact date of birth, time of birth (as precise as possible), and city of birth. Time matters — even a few minutes can shift the ascendant." },
  { q: "I don't know my exact birth time. Can I still get a reading?", a: "Yes, with caveats. We can work with a window (morning / afternoon / evening) or perform a birth-time rectification — an extra step that uses life events to estimate the true time." },
  { q: "How is a reading delivered?", a: "By video call (Zoom or Google Meet) or as a written PDF. You choose. Video calls are recorded and the recording is sent to you afterward." },
  { q: "How long does a session last?", a: "A standard consultation runs 60 minutes. Life Reading and Family Package sessions are longer — see the Seva page for details." },
  { q: "Will you tell me when I'll get married, have a child, or die?", a: "No. Honest jyotish identifies favorable windows and themes, not fixed events. Anyone who claims certainty about life-or-death timing is selling, not reading." },
  { q: "Do you recommend gemstones?", a: "Only when a clear planetary need exists, and never as a first step. Mantras, charity (dana), and behavioral remedies come first. See the Ratna page." },
  { q: "Is this compatible with my religion?", a: "Jyotish predates and crosses religious lines. People of every faith and none come for readings. We don't ask you to change anything you believe." },
  { q: "How is Vedic astrology different from Western astrology?", a: "Vedic (sidereal) astrology uses the actual fixed-star positions; Western (tropical) uses the seasons. Your Vedic moon sign is typically more revealing than your Western sun sign — see our article on this." },
  { q: "Do you offer matchmaking / Guna Milan?", a: "Yes, as part of the Seva offerings. We provide an honest reading of compatibility — not a yes/no verdict." },
  { q: "Is everything confidential?", a: "Completely. Your birth chart and conversation are never shared. See our Privacy Policy." },
  { q: "What if I'm in a mental health crisis?", a: "Please reach out to a licensed therapist or call a crisis line first. Jyotish is reflective and educational; it is not a substitute for clinical care. In the US, dial or text 988." },
  { q: "How do I book?", a: "Visit the Contact page and send a request. We respond within 48 hours with available slots and pricing." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ · Common questions about Vedic Jyotish · Shriji Palmistry" },
      { name: "description", content: "Honest answers about Vedic astrology, palmistry, gemstones, and consultations. What we do, what we don't, and how readings work." },
      { property: "og:title", content: "Frequently Asked Questions · Shriji Palmistry" },
      { property: "og:description", content: "Clear answers about jyotish, hastrekha, gemstones, and booking a reading." },
      { property: "og:url", content: "/faq" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Honest answers"
        title="Frequently asked"
        sanskrit="प्रश्नोत्तरम्"
        intro="The questions seekers ask most often — answered without hedging."
      />

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-24 space-y-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={Math.min(i * 0.03, 0.3)}>
            <details className="group glass rounded-2xl p-6 open:bg-card/60 transition-colors">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <h2 className="font-display text-lg md:text-xl text-foreground group-open:text-primary transition-colors">
                  {f.q}
                </h2>
                <span className="text-primary text-2xl leading-none mt-0.5 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-16">
        <Disclaimer short />
      </section>
    </SiteLayout>
  );
}
