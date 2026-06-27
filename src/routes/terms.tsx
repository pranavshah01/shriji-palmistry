import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service · Shriji Palmistry" },
      { name: "description", content: "The terms that govern your use of Shriji Palmistry's website, consultations, and content." },
      { property: "og:title", content: "Terms of Service · Shriji Palmistry" },
      { property: "og:description", content: "Please read these terms before booking a reading or using our content." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "Not professional advice — please read",
    p: "Shriji Palmistry does NOT provide medical, psychological, psychiatric, legal, financial, investment, tax, insurance, or any other licensed professional advice. Nothing said in a reading, article, email, or call should be treated as such. Jyotish, hastrekha, ank vidya, and ratna guidance are offered solely for educational, cultural, spiritual, and entertainment purposes. For any health, mental health, legal, or financial matter you must consult a qualified, licensed professional in your jurisdiction. If you are in crisis, in the US dial or text 988 (Suicide & Crisis Lifeline) or call 911.",
  },
  {
    h: "No professional relationship created",
    p: "Using this site or booking a reading does not create a doctor–patient, therapist–client, attorney–client, fiduciary, or any other professional or licensed relationship between you and Shriji Palmistry or Kanaiyalal Gandhi.",
  },
  {
    h: "Educational & entertainment purpose",
    p: "All content — readings, articles, charts, gemstone suggestions, remedies, and forecasts — is provided 'as is' for self-reflection and cultural learning. Vedic jyotish, hastrekha, and ank vidya are traditional disciplines and are not scientifically validated. Use your own discernment.",
  },
  {
    h: "No guarantees of outcome",
    p: "Results vary from person to person. We make no guarantee, promise, or warranty — express or implied — about any prediction, timing, remedy, gemstone effect, or life outcome. Past readings are not indicative of future accuracy.",
  },
  { h: "Eligibility", p: "You must be 18 or older to book a consultation in your own name. By using this site you confirm that you are. Readings for minors require explicit consent from a parent or legal guardian." },
  { h: "Accuracy of information you provide", p: "Readings depend on the birth details you provide. Inaccurate date, time, or place of birth will materially affect the reading. We are not liable for outcomes traceable to incorrect or incomplete inputs." },
  { h: "Payments & refunds", p: "Consultation fees are quoted in advance. Once a reading has been prepared and delivered, fees are non-refundable. If we are unable to deliver, a full refund is issued within 7 business days. Gemstone or product purchases (if any) are subject to their own return terms communicated at the time of order." },
  { h: "Intellectual property", p: "All articles, charts, images, audio, and content on this site are the property of Shriji Palmistry. You may share links and brief quotes with attribution; you may not republish, resell, or train machine-learning models on full content without prior written permission." },
  { h: "User conduct", p: "Please do not use this site to harass, defame, scrape at scale, infringe rights, transmit malware, or attempt to disrupt service. We reserve the right to decline or terminate service to anyone for any lawful reason." },
  { h: "Third-party links & services", p: "Articles may reference third-party books, sellers, or sites. We do not endorse, control, or assume responsibility for any third-party content, products, or services." },
  { h: "Disclaimer of warranties", p: "The site and all services are provided on an 'AS IS' and 'AS AVAILABLE' basis, without warranties of any kind, whether express, implied, statutory, or otherwise — including merchantability, fitness for a particular purpose, accuracy, or non-infringement — to the fullest extent permitted by law." },
  { h: "Limitation of liability", p: "To the maximum extent permitted by law, Shriji Palmistry, Kanaiyalal Gandhi, and any affiliates are not liable for any direct, indirect, incidental, special, consequential, exemplary, or punitive damages — including loss of profits, data, goodwill, health, relationships, or other intangible losses — arising from your use of the site, readings, or reliance on any content. Total aggregate liability shall not exceed the amount you paid for the specific service giving rise to the claim." },
  { h: "Indemnification", p: "You agree to indemnify and hold harmless Shriji Palmistry and its practitioners from any claim, loss, or expense arising from your misuse of the site, violation of these terms, or violation of any third-party right." },
  { h: "Modifications", p: "We may update these terms at any time. Material changes will be reflected by the 'last updated' date below. Continued use of the site after changes constitutes acceptance." },
  { h: "Severability", p: "If any provision of these terms is held unenforceable, the remaining provisions remain in full force and effect." },
  { h: "Governing law", p: "These terms are governed by the laws of the State of California, USA, without regard to conflict-of-laws principles. Disputes will be resolved in the state or federal courts located in California." },
  { h: "Contact", p: "Questions about these terms? Email kanaiyalalgandhi301@gmail.com." },
];

function TermsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The fine print"
        title="Terms of Service"
        sanskrit="नियमाः"
        intro="By using this site or booking a reading, you agree to the terms below."
      />

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-12 space-y-6">
        {sections.map((s, i) => (
          <Reveal key={s.h} delay={i * 0.04}>
            <article className="glass rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-xl md:text-2xl text-primary mb-3">{s.h}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.p}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-24">
        <Disclaimer short />
      </section>
    </SiteLayout>
  );
}
