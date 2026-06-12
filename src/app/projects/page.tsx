import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  ExternalLink,
  FileCode2,
  ShieldCheck,
  Terminal,
  TriangleAlert,
} from "lucide-react";
import { SourceCitation } from "@/components/SourceCitation";
import { runnableProjects } from "@/data/curriculum";

export const metadata = {
  title: "Runnable AI Engineering Projects",
  description:
    "Small runnable AI engineering projects for LLM evaluation, RAG, tool-using agents, fine-tuning dataset planning, and production AI observability gates.",
  alternates: {
    canonical: "/projects",
  },
};

const projectIcons = [ClipboardCheck, BookOpenCheck, Code2, FileCode2, ShieldCheck];

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero project-hero">
        <div>
          <span className="eyebrow">Runnable projects</span>
          <h1>Build the first working version before adding complexity.</h1>
          <p>
            These projects turn the curriculum into small, inspectable systems.
            Each one has a beginner starting point, concrete files, a run command,
            evaluation checks, and production failure modes to watch for.
          </p>
        </div>
        <aside className="project-hero__panel" aria-label="Project track summary">
          <strong>Build order</strong>
          <ol>
            {runnableProjects.map((project) => (
              <li key={project.slug}>
                <a href={`#${project.slug}`}>{project.title}</a>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="section">
        <div className="project-track">
          {runnableProjects.map((project, index) => {
            const Icon = projectIcons[index % projectIcons.length];

            return (
              <article className="project-card" id={project.slug} key={project.slug}>
                <div className="project-card__number">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-card__main">
                  <div className="project-card__header">
                    <Icon aria-hidden="true" size={24} />
                    <div>
                      <span>{project.level}</span>
                      <h2>{project.title}</h2>
                    </div>
                  </div>
                  <p>{project.summary}</p>
                  <div className="capstone">
                    <strong>Professional outcome</strong>
                    <span>{project.professionalOutcome}</span>
                  </div>

                  <div className="project-grid">
                    <section>
                      <h3>Prerequisites from zero</h3>
                      <ul className="check-list">
                        {project.prerequisites.map((item) => (
                          <li key={item}>
                            <CheckCircle2 aria-hidden="true" size={17} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h3>What to build</h3>
                      <ol className="check-list">
                        {project.build.map((item) => (
                          <li key={item}>
                            <CheckCircle2 aria-hidden="true" size={17} />
                            {item}
                          </li>
                        ))}
                      </ol>
                    </section>
                  </div>

                  <div className="project-grid project-grid--compact">
                    <section>
                      <h3>Starter files</h3>
                      <div className="file-list">
                        {project.starterFiles.map((file) => (
                          <code key={file}>{file}</code>
                        ))}
                      </div>
                    </section>
                    <section>
                      <h3>Run command</h3>
                      <div className="command-chip">
                        <Terminal aria-hidden="true" size={17} />
                        <code>{project.runCommand}</code>
                      </div>
                    </section>
                  </div>

                  <div className="project-grid">
                    <section>
                      <h3>Eval checks</h3>
                      <ul className="check-list">
                        {project.evalChecks.map((item) => (
                          <li key={item}>
                            <CheckCircle2 aria-hidden="true" size={17} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h3>Failure modes</h3>
                      <ul className="check-list warning-list">
                        {project.failureModes.map((item) => (
                          <li key={item}>
                            <TriangleAlert aria-hidden="true" size={17} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="project-card__footer">
                    <Link className="button button--primary" href={project.lessonHref}>
                      Read related lesson <ArrowRight aria-hidden="true" size={18} />
                    </Link>
                    <a className="button button--secondary" href={project.sources[0].href} target="_blank" rel="noreferrer">
                      Open first source <ExternalLink aria-hidden="true" size={18} />
                    </a>
                  </div>
                </div>
                <aside className="project-card__sources">
                  <span className="eyebrow">Primary sources</span>
                  <div className="source-list">
                    {project.sources.map((source) => (
                      <SourceCitation key={source.href} {...source} />
                    ))}
                  </div>
                </aside>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
