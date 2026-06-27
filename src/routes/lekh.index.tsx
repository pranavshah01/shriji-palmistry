import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/lib/lekh-data";
import { ArrowUpRight } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";

export const Route = createFileRoute("/lekh/")({
  head: () => ({
    meta: [
      { title: "Lekh · Articles on Jyotish & Vedic Wisdom · Shriji Palmistry" },
      {
        name: "description",
        content:
          "Lekh — essays and articles on Vedic astrology, nakshatras, dasha, ratna, and the practical philosophy of jyotish for the Indian diaspora.",
      },
      { property: "og:title", content: "Lekh · Articles · Shriji Palmistry" },
      { property: "og:description", content: "Essays on jyotish, written for the curious and the skeptical alike." },
      { property: "og:url", content: "/lekh" },
    ],
    links: [{ rel: "canonical", href: "/lekh" }],
  }),
  component: LekhIndex,
});

function LekhIndex() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Read · 07"
        title="Lekh"
        sanskrit="लेख · the written word"
        intro="Essays on jyotish, nakshatras, ratna, and the practical philosophy of Vedic timing — written for the curious and the skeptical alike."
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-24">
        <div className="space-y-4">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}>
              <Link
                to="/lekh/$slug"
                params={{ slug: a.slug }}
                className="group block glass rounded-2xl p-7 hover-lift"
              >
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-accent">
                      {new Date(a.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })} · {a.readMins} min read
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl text-primary mt-2 group-hover:text-gradient-gold">{a.title}</h2>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{a.dek}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0 mt-2" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-16">
        <Disclaimer short />
      </section>
    </SiteLayout>
  );
}
