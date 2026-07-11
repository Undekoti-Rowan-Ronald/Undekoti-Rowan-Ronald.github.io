import type { MetadataRoute } from "next";

const siteUrl = "https://undekoti-rowan-ronald.github.io";

const routes = [
  "",
  "about",
  "skills",
  "projects",
  "research",
  "experience",
  "certifications",
  "github",
  "blog",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
