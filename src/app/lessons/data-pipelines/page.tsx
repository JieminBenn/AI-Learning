import DataPipelinesLesson from "@/content/lessons/data-pipelines.mdx";
import { LessonShell } from "@/components/LessonShell";
import { dataPipelinesLesson } from "@/data/curriculum";

export const metadata = {
  title: "Data Pipelines for AI Engineers",
  description:
    "A beginner-friendly guide to AI data pipelines, covering ingestion, cleaning, validation, schemas, lineage, versioning, RAG indexes, fine-tuning datasets, evaluation data, monitoring, drift, leakage, and production tradeoffs.",
  alternates: {
    canonical: "/lessons/data-pipelines",
  },
};

export default function DataPipelinesLessonPage() {
  return (
    <LessonShell meta={dataPipelinesLesson}>
      <DataPipelinesLesson />
    </LessonShell>
  );
}
