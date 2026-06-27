import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = process.env.SITE_URL || "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/jyotish", changefreq: "monthly", priority: "0.9" },
          { path: "/hastrekha", changefreq: "monthly", priority: "0.9" },
          { path: "/ank-jyotish", changefreq: "monthly", priority: "0.9" },
          { path: "/ratna", changefreq: "monthly", priority: "0.9" },
          { path: "/nakshatra", changefreq: "monthly", priority: "0.9" },
          { path: "/dasha", changefreq: "monthly", priority: "0.9" },
          { path: "/seva", changefreq: "monthly", priority: "0.9" },
          { path: "/rashifal", changefreq: "weekly", priority: "0.8" },
          { path: "/margdarshan", changefreq: "monthly", priority: "0.8" },
          { path: "/margdarshan/career", changefreq: "monthly", priority: "0.8" },
          { path: "/lekh", changefreq: "weekly", priority: "0.7" },
          { path: "/lekh/moon-sign-not-sun-sign", changefreq: "monthly", priority: "0.6" },
          { path: "/lekh/sade-sati-explained", changefreq: "monthly", priority: "0.6" },
          { path: "/lekh/gemstone-buying-mistakes", changefreq: "monthly", priority: "0.6" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.6" },
          { path: "/privacy", changefreq: "monthly", priority: "0.3" },
          { path: "/terms", changefreq: "monthly", priority: "0.3" },
          { path: "/disclaimer", changefreq: "monthly", priority: "0.3" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
