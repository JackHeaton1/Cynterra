import type { MetadataRoute } from "next";
import { insights } from "@/content/insights";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/platform",
    "/ai-defence",
    "/copilot",
    "/intelligence",
    "/assurance",
    "/sectors",
    "/insights",
    "/about",
    "/briefing",
    "/privacy",
    "/security",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/platform/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const insightRoutes = insights.map((i) => ({
    url: `${site.url}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes];
}
