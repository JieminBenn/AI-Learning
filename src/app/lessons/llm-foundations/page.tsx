import LlmFoundationsLesson from "@/content/lessons/llm-foundations.mdx";
import { LessonShell } from "@/components/LessonShell";
import { llmFoundationsLesson } from "@/data/curriculum";

export const metadata = {
  title: "LLM Foundations Explained for AI Engineers",
  description:
    "A beginner-friendly guide to large language models, covering next-token prediction, tokenization, context windows, decoding, prompting, instruction tuning, evaluation, and production tradeoffs.",
  alternates: {
    canonical: "/lessons/llm-foundations",
  },
};

export default function LlmFoundationsLessonPage() {
  return (
    <LessonShell meta={llmFoundationsLesson}>
      <LlmFoundationsLesson />
    </LessonShell>
  );
}
