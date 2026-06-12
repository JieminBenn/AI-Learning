import AiSystemsLesson from "@/content/lessons/ai-systems.mdx";
import { LessonShell } from "@/components/LessonShell";
import { aiSystemsLesson } from "@/data/curriculum";

export const metadata = {
  title: "AI Systems Explained for AI Engineers",
  description:
    "A beginner-to-professional guide to production AI systems, covering serving, latency, caching, observability, evaluation gates, reliability, cost, and incident response.",
  alternates: {
    canonical: "/lessons/ai-systems",
  },
};

export default function AiSystemsLessonPage() {
  return (
    <LessonShell meta={aiSystemsLesson}>
      <AiSystemsLesson />
    </LessonShell>
  );
}
