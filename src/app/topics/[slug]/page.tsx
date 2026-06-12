import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { ConceptDiagram } from "@/components/ConceptDiagram";
import { SourceCitation } from "@/components/SourceCitation";
import { topics } from "@/data/curriculum";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

const diagramBySlug = {
  rag: "rag",
  agents: "agent",
  "fine-tuning": "fineTuning",
  skills: "agent",
  "ai-infra": "aiSystem",
} as const;

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);

  if (!topic) {
    return {};
  }

  return {
    title: `${topic.title} for AI Engineers`,
    description: `${topic.summary} Learn the professional outcomes, essential concepts, capstone path, and primary sources for ${topic.title}.`,
    alternates: {
      canonical: `/topics/${topic.slug}`,
    },
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);

  if (!topic) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="topic-hero">
        <div>
          <span className="eyebrow">{topic.kicker}</span>
          <h1>{topic.title}</h1>
          <p>{topic.summary}</p>
        </div>
        <ConceptDiagram type={diagramBySlug[topic.slug as keyof typeof diagramBySlug]} />
      </section>

      <section className="section two-column">
        <article>
          <span className="eyebrow">Professional outcome</span>
          <h2>What you should be able to do</h2>
          <p>{topic.professionalOutcome}</p>
          <div className="capstone">
            <strong>Capstone</strong>
            <span>{topic.capstone}</span>
          </div>
        </article>
        <article>
          <span className="eyebrow">Essentials</span>
          <h2>Concepts to master</h2>
          <ul className="check-list">
            {topic.essentials.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" size={17} />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="eyebrow">Builder path</span>
          <h2>How to turn this topic into a working project.</h2>
          <p>
            Use this as the bridge from reading to implementation. The goal is to
            build a small, inspectable version before adding frameworks or production
            complexity.
          </p>
        </div>
        <ol className="check-list">
          {topic.buildPath.map((step) => (
            <li key={step}>
              <CheckCircle2 aria-hidden="true" size={17} />
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="section source-band">
        <div>
          <span className="eyebrow">Primary sources</span>
          <h2>Start from authoritative material.</h2>
        </div>
        <div className="source-list">
          {topic.sources.map((source) => (
            <SourceCitation key={source.href} {...source} />
          ))}
        </div>
        <Link className="button button--secondary" href="/#learning-roadmap">
          Back to roadmap <ArrowRight aria-hidden="true" size={18} />
        </Link>
        <a className="button button--secondary" href={topic.sources[0].href} target="_blank" rel="noreferrer">
          Open first source <ExternalLink aria-hidden="true" size={18} />
        </a>
      </section>
    </main>
  );
}
