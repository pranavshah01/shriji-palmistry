import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer · Shriji Palmistry" },
      { name: "description", content: "Important disclaimer and terms regarding Shriji Palmistry's jyotish, hastrekha, ank vidya, and ratna content." },
      { property: "og:title", content: "Disclaimer · Shriji Palmistry" },
      { property: "og:description", content: "Terms, limitations, and cautions." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Terms"
        title="Important Notice"
        intro="Please read the following carefully before using any of Shriji Palmistry's services or content."
      />

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-24 space-y-8 text-muted-foreground leading-relaxed">
        {[
          {
            t: "Educational purpose",
            d: "All content on Shriji Palmistry — jyotish, hastrekha, ank vidya, ratna recommendations, and life guidance — is provided for educational, cultural, and entertainment purposes only. It is not scientifically validated.",
          },
          {
            t: "Not medical advice",
            d: "Nothing on this site is a substitute for medical, psychological, or psychiatric care. For any health-related concern, consult a licensed physician or mental health professional.",
          },
          {
            t: "Not legal or financial advice",
            d: "For decisions involving career, business, investment, property, marriage, immigration, or any legal matter, please consult a qualified attorney, certified financial planner, or licensed advisor in your jurisdiction.",
          },
          {
            t: "Caution with ratna",
            d: "Gemstones are believed to carry the energy of the grahas. Wearing the wrong stone may produce unwanted effects. Powerful ratnas such as neelam and gomed must be worn only after a trial period and the guidance of a qualified jyotishi.",
          },
          {
            t: "No guarantees",
            d: "Results from jyotish, hastrekha, and ank vidya readings vary from person to person. Shriji Palmistry makes no guarantees and accepts no liability for outcomes, decisions, gains, or losses.",
          },
          {
            t: "Your discernment",
            d: "Above all — before any significant life decision, use your own discernment and consult those who know you. Shriji Palmistry offers guidance, never commands.",
          },
          {
            t: "Privacy",
            d: "Information you share (date, time, and place of birth, photographs, questions) is kept confidential and is never shared with third parties without your consent.",
          },
          {
            t: "Age requirement",
            d: "Services are intended for adults aged 18 and over. Minors may use the service only with parental or guardian consent.",
          },
        ].map((s, i) => (
          <Reveal key={s.t} delay={i * 0.04}>
            <h2 className="font-display text-2xl text-primary mb-3">{s.t}</h2>
            <p>{s.d}</p>
          </Reveal>
        ))}
      </section>
    </SiteLayout>
  );
}
