import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Database,
  Gauge,
  GraduationCap,
  ListTree,
  Network,
  Route,
  Wrench,
} from "lucide-react";
import { ConceptDiagram } from "@/components/ConceptDiagram";
import { learningModules } from "@/data/curriculum";

export const metadata = {
  title: "AI Engineering Mastery: Learn AI Engineering From First Principles",
  description:
    "A practical AI engineering curriculum for beginners and builders: Transformers, LLMs, RAG, AI agents, fine-tuning, model literacy, and production AI infrastructure.",
};

const moduleIcons = [
  Network,
  BrainCircuit,
  Route,
  Wrench,
  Database,
  GraduationCap,
  BookOpenCheck,
  Gauge,
];

const roadmapDestinations: Record<string, { href: string; label: string }[]> = {
  "Basics of Transformers": [
    { href: "/lessons/attention-is-all-you-need", label: "Open Attention lesson" },
  ],
  "LLM Foundations": [{ href: "/models", label: "Explore model families" }],
  "RAG Systems": [{ href: "/topics/rag", label: "Open RAG topic" }],
  "Agents and Tool Use": [
    { href: "/topics/agents", label: "Open Agents topic" },
    { href: "/topics/skills", label: "Open Skills topic" },
  ],
  "Fine-Tuning": [{ href: "/topics/fine-tuning", label: "Open Fine-Tuning topic" }],
  "AI Systems": [{ href: "/topics/ai-infra", label: "Open AI Infrastructure topic" }],
};

function getModuleId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow">From zero foundation to professional AI work</span>
          <h1>AI Engineering Mastery</h1>
          <p>
            Learn artificial intelligence engineering from first principles: Transformers,
            large language models, retrieval-augmented generation, AI agents, fine-tuning,
            model literacy, and production infrastructure. Start with plain-language
            intuition, then climb toward papers, architectures, workflows, and professional
            reasoning.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="#learning-roadmap">
              Start roadmap <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button--secondary" href="/lessons/attention-is-all-you-need">
              Read Attention lesson <BookOpenCheck aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Transformer learning map">
          <div className="matrix-strip">
            {["token", "vector", "score", "softmax", "context"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <ConceptDiagram type="transformer" />
        </div>
      </section>

      <section className="section" id="learning-roadmap">
        <div className="section__header">
          <span className="eyebrow">Learning order</span>
          <h2>Follow the topics in the order you should learn them.</h2>
          <p>
            The curriculum starts with Transformer basics, then expands into LLMs,
            RAG, agents, data pipelines, training, fine-tuning, and production systems.
          </p>
        </div>

        <div className="roadmap-layout">
          <aside className="topic-sidebar" aria-label="Topic shortcuts">
            <div className="module-label">
              <ListTree aria-hidden="true" size={18} />
              Topics
            </div>
            <nav>
              {learningModules.map((module, index) => (
                <a href={`#${getModuleId(module.title)}`} key={module.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {module.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="roadmap-list">
            {learningModules.map((module, index) => {
              const Icon = moduleIcons[index % moduleIcons.length];
              const destinations = roadmapDestinations[module.title] ?? [];

              return (
                <article className="roadmap-card" id={getModuleId(module.title)} key={module.title}>
                  <div className="roadmap-card__number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="roadmap-card__body">
                    <div className="roadmap-card__header">
                      <Icon aria-hidden="true" size={24} />
                      <div>
                        <span>{module.category}</span>
                        <h3>{module.title}</h3>
                      </div>
                    </div>
                    <p>{module.description}</p>
                    <div className="learning-card__used-in" aria-label={`${module.title} is used in`}>
                      {module.usedIn.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <ul>
                      {module.milestones.map((milestone) => (
                        <li key={milestone}>
                          <BookOpenCheck aria-hidden="true" size={16} />
                          {milestone}
                        </li>
                      ))}
                    </ul>
                    {destinations.length > 0 && (
                      <div className="roadmap-card__actions">
                        {destinations.map((destination) => (
                          <Link className="button button--secondary" href={destination.href} key={destination.href}>
                            {destination.label}
                            <ArrowRight aria-hidden="true" size={18} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
