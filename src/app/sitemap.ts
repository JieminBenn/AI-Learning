import type { MetadataRoute } from "next";
import { attentionLesson, topics } from "@/data/curriculum";

const baseUrl = "https://ai-learning-tau-steel.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/models`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lessons/${attentionLesson.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...topics.map((topic) => ({
      url: `${baseUrl}/topics/${topic.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
