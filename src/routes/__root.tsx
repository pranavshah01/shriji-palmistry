import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Lost · 404</p>
        <h1 className="font-display text-6xl text-gradient-gold">Path not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This path has not yet appeared in the cosmos. Return to the home page.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-gradient-gold">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shriji Palmistry · Vedic Jyotish, Hastrekha & Life Guidance" },
      {
        name: "description",
        content:
          "Shriji Palmistry — Vedic jyotish (astrology), hastrekha (palmistry), ank jyotish (numerology), and ratna (gemstone) guidance for the Indian diaspora. Tradition, translated clearly.",
      },
      { name: "keywords", content: "jyotish, vedic astrology, hastrekha, palmistry, ank jyotish, numerology, ratna, gemstones, kundli, life guidance, career guidance, Indian astrology, Indian American astrology, Chicago astrology, Chicago palmistry, Illinois jyotish, Midwest astrology, Chicago Indian community" },
      { name: "author", content: "Shriji Palmistry" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Shriji Palmistry" },
      { property: "og:title", content: "Shriji Palmistry · Ancient Wisdom, Modern Clarity" },
      { property: "og:description", content: "Vedic jyotish, hastrekha, numerology, and ratna guidance — for the Indian diaspora and the curious." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Shriji Palmistry" },
      { name: "theme-color", content: "#1a1530" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=Tiro+Devanagari+Sanskrit:ital@0;1&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Shriji Palmistry",
          description:
            "Vedic jyotish, hastrekha, ank jyotish, and ratna guidance for life and career — for the Indian diaspora and curious seekers in Chicago and beyond.",
          url: "/",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chicago",
            addressRegion: "IL",
            addressCountry: "US",
          },
          areaServed: ["Chicago", "Illinois", "Midwest", "United States"],
          contactPoint: {
            "@type": "ContactPoint",
            email: "kanaiyalalgandhi301@gmail.com",
            telephone: "+1-224-617-4051",
            contactType: "customer service",
            areaServed: ["Chicago", "Illinois", "Midwest", "United States"],
            availableLanguage: ["en", "hi"],
          },
          founder: {
            "@type": "Person",
            name: "Kanaiyalal Gandhi",
            jobTitle: "Jyotishi",
            description: "Engineer by education and jyotishi by lifelong practice — over 15 years of personal study and consultations rooted in classical Vedic texts.",
          },
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Shriji Palmistry",
          description: "Vedic astrology, palmistry, and numerology consultations in Chicago, Illinois",
          url: "/",
          telephone: "+1-224-617-4051",
          email: "kanaiyalalgandhi301@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chicago",
            addressRegion: "IL",
            addressCountry: "US",
          },
          areaServed: ["Chicago", "Illinois", "Midwest"],
          priceRange: "$$",
          openingHours: "Mo-Sa 09:00-19:00",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kanaiyalal Gandhi",
          jobTitle: "Jyotishi · Vedic Astrologer",
          description: "Engineer by education, jyotishi by lifelong practice. 15+ years of personal study and consultations rooted in classical Vedic texts including Brihat Parashara Hora Shastra and Phaldeepika.",
          knowsAbout: ["Vedic Astrology", "Jyotish", "Hastrekha", "Numerology", "Ratna", "Nakshatra", "Vimshottari Dasha"],
          worksFor: { "@type": "Organization", name: "Shriji Palmistry" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
