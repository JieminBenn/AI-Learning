import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, FolderKanban, Map } from "lucide-react";
import { LearningModuleCard } from "@/components/LearningModuleCard";
import {
  agentsAndToolUseLesson,
  aiSystemsLesson,
  attentionLesson,
  dataPipelinesLesson,
  fineTuningLesson,
  learningModules,
  llmFoundationsLesson,
  ragSystemsLesson,
  runnableProjects,
  trainingRunsLesson,
  topics,
} from "@/data/curriculum";

export const metadata = {
  title: "AI Engineering Curriculum Overview",
  description:
    "A beginner-to-professional AI engineering curriculum covering Transformers, LLM foundations, RAG, agents, data pipelines, training, fine-tuning, and infrastructure.",
};

export default function CurriculumPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Curriculum overview</span>
        <h1>Learn AI the way professionals actually use it.</h1>
        <p>
          This roadmap starts with basic vocabulary and grows into paper reading,
          Transformer basics, LLM behavior, retrieval systems, agents, data pipelines,
          training, fine-tuning, and infrastructure.
        </p>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="eyebrow">Topic modules</span>
          <h2>Start with foundations, then move across the AI system stack.</h2>
        </div>
        <div className="path-grid">
          {learningModules.map((module) => (
            <LearningModuleCard key={module.title} {...module} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="eyebrow">Project track</span>
          <h2>Small runnable projects that prove the concepts.</h2>
          <p>
            Use these as the bridge between reading lessons and building professional
            AI systems. Each project includes starter files, a run command, eval checks,
            failure modes, and primary sources.
          </p>
        </div>
        <div className="path-grid project-summary-grid">
          {runnableProjects.map((project) => (
            <Link className="learning-card" href={`/projects#${project.slug}`} key={project.slug}>
              <div className="learning-card__header">
                <h3>{project.title}</h3>
                <span>{project.level}</span>
              </div>
              <p>{project.summary}</p>
              <div className="module-label">
                <FolderKanban aria-hidden="true" size={18} />
                {project.runCommand}
              </div>
              <ul>
                {project.evalChecks.slice(0, 2).map((check) => (
                  <li key={check}>
                    <CheckCircle2 aria-hidden="true" size={16} />
                    {check}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="curriculum-board">
          <article className="curriculum-main">
            <div className="module-label">
              <BookOpen aria-hidden="true" size={18} />
              First deep module
            </div>
            <h2>{attentionLesson.title}</h2>
            <p>
              The Transformer lesson teaches tokens, embeddings, self-attention,
              multi-head attention, positional encoding, encoder-decoder flow, and why
              the architecture became central to modern AI.
            </p>
            <ul className="check-list">
              {attentionLesson.objectives.slice(0, 4).map((objective) => (
                <li key={objective}>
                  <CheckCircle2 aria-hidden="true" size={17} />
                  {objective}
                </li>
              ))}
            </ul>
            <Link className="button button--primary" href="/lessons/attention-is-all-you-need">
              Open lesson <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button--secondary" href="/lessons/llm-foundations">
              Continue to {llmFoundationsLesson.title} <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button--secondary" href="/lessons/rag-systems">
              Continue to {ragSystemsLesson.title} <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button--secondary" href="/lessons/agents-and-tool-use">
              Continue to {agentsAndToolUseLesson.title} <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button--secondary" href="/lessons/data-pipelines">
              Continue to {dataPipelinesLesson.title} <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button--secondary" href="/lessons/training-runs">
              Continue to {trainingRunsLesson.title} <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button--secondary" href="/lessons/fine-tuning">
              Continue to {fineTuningLesson.title} <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button--secondary" href="/lessons/ai-systems">
              Continue to {aiSystemsLesson.title} <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </article>
          <aside className="curriculum-side">
            <div className="module-label">
              <Map aria-hidden="true" size={18} />
              Next topic hubs
            </div>
            {topics.map((topic) => (
              <Link href={`/topics/${topic.slug}`} key={topic.slug}>
                <strong>{topic.title}</strong>
                <span>{topic.professionalOutcome}</span>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </main>
  );
}
