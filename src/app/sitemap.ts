import type { MetadataRoute } from "next";
import {
  agentsAndToolUseLesson,
  aiSystemsLesson,
  attentionLesson,
  dataPipelinesLesson,
  fineTuningLesson,
  llmFoundationsLesson,
  ragSystemsLesson,
  trainingRunsLesson,
  topics,
} from "@/data/curriculum";
import { getSiteUrl } from "@/lib/site";

const lastModified = new Date("2026-06-12");

const lessonSlugs = [
  attentionLesson.slug,
  llmFoundationsLesson.slug,
  ragSystemsLesson.slug,
  agentsAndToolUseLesson.slug,
  dataPipelinesLesson.slug,
  trainingRunsLesson.slug,
  fineTuningLesson.slug,
  aiSystemsLesson.slug,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getSiteUrl("/curriculum"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: getSiteUrl("/projects"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: getSiteUrl("/models"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...lessonSlugs.map((slug) => ({
      url: getSiteUrl(`/lessons/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...topics.map((topic) => ({
      url: getSiteUrl(`/topics/${topic.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
