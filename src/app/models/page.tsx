import { Brain, Layers3, SearchCheck } from "lucide-react";
import { models } from "@/data/curriculum";

export const metadata = {
  title: "Must-Know AI Models and Model Families",
  description:
    "A curated guide to the model families AI engineers should know, including Transformers, BERT, GPT-style decoders, CLIP, diffusion models, and embedding models.",
};

export default function ModelsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">AI Agents and models explorer</span>
        <h1>Know the model families behind the tools.</h1>
        <p>
          The first version is a curated model map. Future lessons can expand each
          entry into architecture notes, training objectives, strengths, risks, and
          production use cases.
        </p>
      </section>

      <section className="model-dashboard">
        <div className="model-stat">
          <Brain aria-hidden="true" size={24} />
          <strong>{models.length}</strong>
          <span>model families</span>
        </div>
        <div className="model-stat">
          <Layers3 aria-hidden="true" size={24} />
          <strong>4</strong>
          <span>topic contexts</span>
        </div>
        <div className="model-stat">
          <SearchCheck aria-hidden="true" size={24} />
          <strong>Data-driven</strong>
          <span>easy to update</span>
        </div>
      </section>

      <section className="model-grid">
        {models.map((model) => (
          <article className="model-card" key={model.name}>
            <span>{model.family}</span>
            <h2>{model.name}</h2>
            <p>{model.whyItMatters}</p>
            <small>Learn after: {model.learnAfter}</small>
          </article>
        ))}
      </section>
    </main>
  );
}
