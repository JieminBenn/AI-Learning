import AttentionLesson from "@/content/lessons/attention-is-all-you-need.mdx";
import { LessonShell } from "@/components/LessonShell";
import { attentionLesson } from "@/data/curriculum";

export const metadata = {
  title: "Attention Is All You Need | Astra AI Academy",
  description:
    "A beginner-friendly professional lesson on the Transformer paper, with diagrams, equations, and practice checks.",
};

export default function AttentionLessonPage() {
  return (
    <LessonShell meta={attentionLesson}>
      <AttentionLesson />
    </LessonShell>
  );
}
