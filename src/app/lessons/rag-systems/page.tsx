import RagSystemsLesson from "@/content/lessons/rag-systems.mdx";
import { LessonShell } from "@/components/LessonShell";
import { ragSystemsLesson } from "@/data/curriculum";

export const metadata = {
  title: "RAG Systems Explained for AI Engineers",
  description:
    "A beginner-to-builder guide to retrieval-augmented generation, covering chunking, embeddings, vector search, reranking, grounded generation, citations, evaluation, and production failure modes.",
  alternates: {
    canonical: "/lessons/rag-systems",
  },
};

export default function RagSystemsLessonPage() {
  return (
    <LessonShell meta={ragSystemsLesson}>
      <RagSystemsLesson />
    </LessonShell>
  );
}
