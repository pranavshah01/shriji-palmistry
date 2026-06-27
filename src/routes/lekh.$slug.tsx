import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";
import { articles, getArticle } from "@/lib/lekh-data";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/lekh/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Article · Shriji Palmistry" }] };
    return {
      meta: [
        { title: `${a.title} · Lekh · Shriji Palmistry` },
        { name: "description", content: a.dek },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.dek },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/lekh/${a.slug}` },
        { property: "article:published_time", content: a.date },
        { property: "article:author", content: "Kanaiyalal Gandhi" },
      ],
      links: [{ rel: "canonical", href: `/lekh/${a.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.dek,
          datePublished: a.date,
          author: { "@type": "Person", name: "Kanaiyalal Gandhi" },
          publisher: { "@type": "Organization", name: "Shriji Palmistry" },
          inLanguage: "en-US",
        }),
      }, {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Lekh", item: "/lekh" },
            { "@type": "ListItem", position: 3, name: a.title, item: `/lekh/${a.slug}` },
          ],
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 lg:px-10 py-32 text-center">
        <h1 className="font-display text-4xl text-primary">Article not found</h1>
        <Link to="/lekh" className="mt-8 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 lg:px-10 py-32 text-center">
        <h1 className="font-display text-3xl text-primary">Could not load this article</h1>
        <Link to="/lekh" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>
      </div>
    </SiteLayout>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 lg:px-10 pt-20 lg:pt-32 pb-12">
        <Reveal>
          <Link to="/lekh" className="inline-flex items-center gap-2 text-sm text-primary/80 hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {article.readMins} min read
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-gradient-gold">
            {article.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">{article.dek}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            By <span className="text-primary">Kanaiyalal Gandhi</span> · Engineer-turned-jyotishi · 15+ years
          </p>
        </Reveal>
      </article>

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-16 space-y-6 text-lg text-muted-foreground leading-relaxed">
        {article.body.map((para: string, i: number) => (
          <Reveal key={i} delay={i * 0.03}>
            <p>{para}</p>
          </Reveal>
        ))}
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-4xl px-5 lg:px-10 pb-24">
          <Reveal>
            <h2 className="font-display text-2xl text-primary mb-6">Continue reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to="/lekh/$slug"
                  params={{ slug: a.slug }}
                  className="glass rounded-2xl p-6 hover-lift block"
                >
                  <p className="text-xs uppercase tracking-wider text-accent mb-2">{a.readMins} min read</p>
                  <p className="font-display text-xl text-primary">{a.title}</p>
                  <p className="text-sm text-muted-foreground mt-2">{a.dek}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      <div className="mx-auto max-w-3xl px-5 lg:px-10 pb-16">
        <Disclaimer />
      </div>
    </SiteLayout>
  );
}
