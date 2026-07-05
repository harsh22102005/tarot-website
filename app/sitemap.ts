import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mysticpath.com"; // Replace with your actual domain later

  const staticPages = [
    "",
    "/about",
    "/services",
    "/blog",
    "/faq",
    "/contact",
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));
}