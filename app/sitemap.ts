import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://www.vilbert-recyclage.fr";

const geoPages = [
  "location-benne-amiens",
  "location-benne-abbeville",
  "location-benne-albert",
  "location-benne-doullens",
  "location-benne-peronne",
  "location-benne-arras",
  "location-benne-saint-quentin",
  "location-benne-cambrai",
  "location-benne-lens",
  "location-benne-compiegne",
];

const LAST_MODIFIED = "2026-06-11";
// Note: blog posts are dynamically added from lib/blog-posts.ts

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/a-propos`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tarifs`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/realisations`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/faq`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/conditions-generales`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const geoSitemap: MetadataRoute.Sitemap = geoPages.map((page) => ({
    url: `${BASE_URL}/${page}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const servicePages = [
    "location-benne", "broyage-chantier", "valobat-pmcb",
    "dementelement-menuiseries", "compostage", "especes-invasives",
    "vente-materiaux", "traitement-valorisation", "destruction-archives"
  ].map(slug => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...geoSitemap, ...servicePages, ...blogPages];
}
