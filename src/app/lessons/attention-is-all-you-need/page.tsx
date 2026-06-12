import AttentionLesson from "@/content/lessons/attention-is-all-you-need.mdx";
import { LessonShell } from "@/components/LessonShell";
import { attentionLesson } from "@/data/curriculum";

export const metadata = {
  title: "Attention Is All You Need Explained for AI Engineers",
  description:
    "A beginner-friendly but deep guide to the Transformer paper, covering attention, embeddings, positional encodings, encoder-decoder flow, equations, experiments, and production tradeoffs.",
  alternates: {
    canonical: "/lessons/attention-is-all-you-need",
  },
};

export default function AttentionLessonPage() {
  return (
    <LessonShell meta={attentionLesson}>
      <AttentionLesson />
    </LessonShell>
  );
}
