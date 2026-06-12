import FineTuningLesson from "@/content/lessons/fine-tuning.mdx";
import { LessonShell } from "@/components/LessonShell";
import { fineTuningLesson } from "@/data/curriculum";

export const metadata = {
  title: "Fine-Tuning Explained for AI Engineers",
  description:
    "A beginner-to-builder guide to fine-tuning language models, covering supervised fine-tuning, LoRA, QLoRA, preference optimization, dataset quality, evaluation, and production failure modes.",
  alternates: {
    canonical: "/lessons/fine-tuning",
  },
};

export default function FineTuningLessonPage() {
  return (
    <LessonShell meta={fineTuningLesson}>
      <FineTuningLesson />
    </LessonShell>
  );
}
