// app/sitemap.ts
import { MetadataRoute } from "next";
import { articles } from "@/data/articles";

// ⚠ 部署後記得改成你真實 domain，例如：https://3kingdoms.alexchiu.com
const BASE_URL = "https://three-kingdoms-seo-site-jdbl.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.createdAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
