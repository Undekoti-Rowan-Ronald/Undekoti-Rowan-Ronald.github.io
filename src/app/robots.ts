import type { MetadataRoute } from "next";

const siteUrl = "https://undekoti-rowan-ronald.github.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
