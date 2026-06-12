import TrainingRunsLesson from "@/content/lessons/training-runs.mdx";
import { LessonShell } from "@/components/LessonShell";
import { trainingRunsLesson } from "@/data/curriculum";

export const metadata = {
  title: "Training Runs Explained for AI Engineers",
  description:
    "A beginner-friendly guide to model training runs, covering loss, gradients, optimizers, learning rates, batches, checkpoints, validation curves, experiment tracking, compute budgets, and production failure modes.",
  alternates: {
    canonical: "/lessons/training-runs",
  },
};

export default function TrainingRunsLessonPage() {
  return (
    <LessonShell meta={trainingRunsLesson}>
      <TrainingRunsLesson />
    </LessonShell>
  );
}
