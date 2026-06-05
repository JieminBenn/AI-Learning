import AgentsAndToolUseLesson from "@/content/lessons/agents-and-tool-use.mdx";
import { LessonShell } from "@/components/LessonShell";
import { agentsAndToolUseLesson } from "@/data/curriculum";

export const metadata = {
  title: "Agents and Tool Use Explained for AI Engineers",
  description:
    "A beginner-to-builder guide to AI agents and tool use, covering tool schemas, function calling, agent loops, ReAct, Toolformer, handoffs, memory, guardrails, tracing, evaluation, and production failure modes.",
};

export default function AgentsAndToolUseLessonPage() {
  return (
    <LessonShell meta={agentsAndToolUseLesson}>
      <AgentsAndToolUseLesson />
    </LessonShell>
  );
}

