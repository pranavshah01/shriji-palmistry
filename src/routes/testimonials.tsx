import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Quote, Star } from "lucide-react";

const stories = [
  {
    name: "Priya S.",
    location: "Sunnyvale, CA",
    service: "Career Reading",
    rating: 5,
    quote:
      "I was stuck between two job offers and second-guessing myself for months. Kanaiyalal ji didn't tell me what to pick — he walked me through what each path was likely to demand of me. Six months in, his read on the team dynamics was uncanny.",
  },
  {
    name: "Anand & Meera R.",
    location: "Edison, NJ",
    service: "Guna Milan",
    rating: 5,
    quote:
      "We were nervous about a low guna count from a family astrologer. Kanaiyalal ji walked us through what actually matched and what didn't, in plain language. We went into our marriage with eyes open instead of anxious.",
  },
  {
    name: "Rohit M.",
    location: "Austin, TX",
    service: "Janma Kundli",
    rating: 5,
    quote:
      "What I appreciated most was the lack of drama. No fear, no rush to buy a gemstone. Just a clear picture of my chart and what to watch for during my upcoming dasha. Honest work.",
  },
  {
    name: "Kavita D.",
    location: "Toronto, ON",
    service: "Life Reading",
    rating: 5,
    quote:
      "I came in skeptical — engineering background, not really a believer. The reading was less mystical and more structured than I expected. It gave me a vocabulary for patterns I'd been seeing but couldn't name.",
  },
  {
    name: "Sanjay P.",
    location: "Houston, TX",
    service: "Hastrekha",
    rating: 5,
    quote:
      "My grandmother used to read palms in our village. I did this reading partly to honor her. The way Kanaiyalal ji explained the major lines and mounts brought back so much — and added depth I hadn't heard before.",
  },
  {
    name: "Neha & Vikram T.",
    location: "Bellevue, WA",
    service: "Family Package",
    rating: 5,
    quote:
      "We did a reading for ourselves and our two kids together. Getting all four charts looked at side by side helped us understand why our household feels the way it does. Worth every minute.",
  },
  {
    name: "Deepak T.",
    location: "Chicago, IL",
    service: "Career Reading",
    rating: 5,
    quote:
      "Found Shriji Palmistry here in Chicago and it was exactly what I needed. The jyotish reading gave me clarity on my career path during a confusing time. Authentic and practical guidance without the usual superstition.",
  },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials · What seekers say · Shriji Palmistry" },
      { name: "description", content: "Real stories from people who've consulted Kanaiyalal Gandhi for Vedic jyotish, hastrekha, and life guidance readings." },
      { property: "og:title", content: "Testimonials · Shriji Palmistry" },
      { property: "og:description", content: "Honest reflections from clients across the Indian diaspora." },
      { property: "og:url", content: "/testimonials" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Voices from seekers"
        title="What people say"
        sanskrit="साक्ष्यम्"
        intro="Names are real (first names and last initial), with permission. Stories are lightly edited for length, not substance."
      />

      <section className="mx-auto max-w-6xl px-5 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={Math.min(i * 0.05, 0.3)}>
              <article className="glass rounded-3xl p-7 h-full flex flex-col">
                <Quote className="h-7 w-7 text-primary/60 mb-4" />
                <p className="text-muted-foreground leading-relaxed italic mb-6 flex-1">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: s.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="border-t border-border/60 pt-4">
                  <p className="font-display text-lg text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground/80">
                    {s.location} · {s.service}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-xs text-muted-foreground/70 text-center mt-12 max-w-2xl mx-auto">
            Testimonials reflect individual experiences. Results from jyotish, hastrekha, and ank vidya
            readings vary from person to person and are never guaranteed.
          </p>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
