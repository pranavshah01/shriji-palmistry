import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · Shriji Palmistry" },
      { name: "description", content: "How Shriji Palmistry collects, uses, and safeguards the personal and birth-chart information you share with us." },
      { property: "og:title", content: "Privacy Policy · Shriji Palmistry" },
      { property: "og:description", content: "Your birth details and conversations are private. Read our full privacy practices." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Important: we are not licensed professionals",
    p: "Shriji Palmistry does NOT provide medical, psychological, psychiatric, legal, financial, or any other licensed professional advice. Any personal information you share with us is used only to prepare your jyotish, hastrekha, or ank vidya reading — never to diagnose, treat, or counsel you in any clinical, legal, or financial capacity. For those needs please consult a qualified, licensed professional.",
  },
  {
    h: "What we collect",
    p: "Name, email, phone (optional), date / time / place of birth, and the questions you choose to share. We do not collect data you have not given us.",
  },
  {
    h: "Why we collect it",
    p: "Birth details are required to cast an accurate kundli. Contact details let us deliver your reading. Your question gives the consultation focus. That is the entire purpose.",
  },
  {
    h: "Sensitive information",
    p: "Please do not send us government IDs, financial account numbers, medical records, or other sensitive documents — we do not need them and will ask you to delete and resend if you do. If you mention a health, legal, or financial concern in your question, we will respond only with cultural and reflective guidance, not professional advice.",
  },
  {
    h: "How it is stored",
    p: "Submissions are stored in encrypted form. Access is restricted to Kanaiyalal Gandhi and the small support team responding to your request. We retain records for as long as needed to provide service and meet legal or tax obligations, after which they are deleted on a routine schedule.",
  },
  {
    h: "What we never do",
    p: "We never sell, rent, or trade your information. We do not share birth charts with third parties. We do not use your data to train AI or machine-learning models. We do not run advertising trackers.",
  },
  {
    h: "Cookies & analytics",
    p: "We use only essential cookies for site function and privacy-respecting analytics (aggregate page views, no personal identifiers). No advertising or cross-site tracking cookies.",
  },
  {
    h: "Service providers (subprocessors)",
    p: "We use a small number of vendors — email delivery, video calls, hosting, and payment processing — strictly to operate the service. They are contractually bound to confidentiality and may not use your data for their own purposes.",
  },
  {
    h: "Your rights",
    p: "You may request a copy of your data, ask us to correct it, or have it deleted entirely. Residents of California (CCPA/CPRA), the EU/UK (GDPR), and similar jurisdictions have additional rights including data portability and the right to object. Email kanaiyalalgandhi301@gmail.com and we will respond within 30 days.",
  },
  {
    h: "Children",
    p: "Our services are intended for adults (18+). We do not knowingly collect information from minors. For a child's reading, a parent or legal guardian must submit on their behalf and provide consent.",
  },
  {
    h: "Security",
    p: "We take reasonable technical and organizational measures to protect your information. However, no online service can guarantee absolute security. You share data with us at your own discretion.",
  },
  {
    h: "Changes",
    p: "If this policy changes materially, we will note the update date below and, where appropriate, notify you by email.",
  },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Your trust matters"
        title="Privacy Policy"
        sanskrit="गोपनीयता"
        intro="Birth details are intimate. Here is exactly what we collect, why, and how we protect it."
      />

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-24 space-y-8">
        {sections.map((s, i) => (
          <Reveal key={s.h} delay={i * 0.04}>
            <article className="glass rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-xl md:text-2xl text-primary mb-3">{s.h}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.p}</p>
            </article>
          </Reveal>
        ))}
        <p className="text-xs text-muted-foreground/70 text-center pt-4">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
      </section>
    </SiteLayout>
  );
}
