import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes = [
  { path: "", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/aftercare", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
