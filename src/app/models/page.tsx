import { AlertTriangle, Brain, CheckCircle2, Layers3, Route, SearchCheck } from "lucide-react";
import { SourceCitation } from "@/components/SourceCitation";
import { models } from "@/data/curriculum";

export const metadata = {
  title: "Must-Know AI Models and Model Families",
  description:
    "A curated guide to the model families AI engineers should know, including Transformers, BERT, GPT-style decoders, CLIP, diffusion models, and embedding models.",
  alternates: {
    canonical: "/models",
  },
};

export default function ModelsPage() {
  const sourceCount = models.reduce((total, model) => total + model.sources.length, 0);

  return (
    <main className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">AI Agents and models explorer</span>
        <h1>Know the model families behind the tools.</h1>
        <p>
          Model literacy means knowing what kind of model you are using, what it was
          trained to do, where it tends to fail, and how to evaluate whether it is the
          right component for an AI system.
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
          <strong>6</strong>
          <span>professional contexts</span>
        </div>
        <div className="model-stat">
          <SearchCheck aria-hidden="true" size={24} />
          <strong>{sourceCount}</strong>
          <span>primary or official sources</span>
        </div>
      </section>

      <section className="section models-intro">
        <div className="section__header">
          <span className="eyebrow">Beginner map</span>
          <h2>Start with the job the model is trained to do.</h2>
          <p>
            A model is a learned function: it receives input, runs mathematical
            transformations learned from data, and returns output. The model family tells
            you the shape of that function. Encoders are usually strongest at
            understanding, decoders at generating, embedding models at comparison,
            multimodal models at connecting media types, and diffusion models at creating
            media through denoising.
          </p>
        </div>
        <div className="model-flow" aria-label="How to reason about model families">
          {[
            ["Input", "Text, image, audio, code, or a tool result"],
            ["Representation", "The model turns input into internal vectors"],
            ["Objective", "Training rewards prediction, matching, denoising, or classification"],
            ["Output", "Tokens, vectors, labels, ranked results, or generated media"],
          ].map(([title, body]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{body}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="model-grid" aria-label="Model family guide">
        {models.map((model) => (
          <article className="model-card" key={model.name}>
            <span>{model.family}</span>
            <h2>{model.name}</h2>
            <p>{model.summary}</p>
            <dl>
              <div>
                <dt>Intuition</dt>
                <dd>{model.intuition}</dd>
              </div>
              <div>
                <dt>Used for</dt>
                <dd>{model.professionalUse}</dd>
              </div>
              <div>
                <dt>Watch for</dt>
                <dd>{model.failureMode}</dd>
              </div>
              <div>
                <dt>Evaluate with</dt>
                <dd>{model.evaluateWith}</dd>
              </div>
            </dl>
            <small>Learn after: {model.learnAfter}</small>
          </article>
        ))}
      </section>

      <section className="section model-comparison">
        <div>
          <span className="eyebrow">Choosing in practice</span>
          <h2>Match the model family to the engineering problem.</h2>
          <p>
            In production, the question is rarely “Which model is best?” The better
            question is “Which model family gives the needed behavior with acceptable
            quality, latency, cost, and risk?”
          </p>
        </div>
        <div className="model-decision-list">
          <article>
            <Route aria-hidden="true" size={22} />
            <h3>For agents</h3>
            <p>
              Use a strong decoder model for planning and tool calls, then pair it with
              guardrails, traces, and task-specific evaluations. The agent is the workflow;
              the model is one decision-making component inside it.
            </p>
          </article>
          <article>
            <SearchCheck aria-hidden="true" size={22} />
            <h3>For retrieval</h3>
            <p>
              Use embedding models to find candidate evidence, then use reranking or a
              generation model to produce an answer grounded in retrieved sources.
            </p>
          </article>
          <article>
            <AlertTriangle aria-hidden="true" size={22} />
            <h3>For evaluation</h3>
            <p>
              Measure the failure that matters. A chat model needs factuality and tool-call
              checks; an embedding model needs retrieval recall; a diffusion model needs
              visual, safety, and prompt-adherence review.
            </p>
          </article>
        </div>
      </section>

      <section className="section model-equation">
        <div>
          <span className="eyebrow">One useful equation</span>
          <h2>Embeddings are compared with vector similarity.</h2>
          <p>
            A vector is a list of numbers. A common comparison is cosine similarity, which
            asks whether two vectors point in a similar direction.
          </p>
        </div>
        <div className="equation-block">
          <div className="equation-block__label">Cosine similarity</div>
          <pre className="equation-block__formula">similarity(a, b) = (a . b) / (||a|| ||b||)</pre>
          <div className="equation-block__body">
            <strong>a</strong> and <strong>b</strong> are embedding vectors. <strong>a . b</strong> is
            the dot product, which multiplies matching positions and adds them. <strong>||a||</strong>{" "}
            and <strong>||b||</strong> are vector lengths. Higher similarity usually means the
            inputs are more semantically related.
          </div>
        </div>
      </section>

      <section className="section model-checks">
        <div className="section__header">
          <span className="eyebrow">Practice checks</span>
          <h2>Can you reason about the family?</h2>
        </div>
        <ul className="check-list">
          {[
            "If the task is semantic search over documents, which model family creates the searchable vectors?",
            "If the task is drafting a tool call one token at a time, why is a decoder model a natural fit?",
            "If an image model returns polished but inaccurate details, what evaluation would catch that failure?",
            "Why is an agent not the same thing as a model, even though it may depend on a model?",
          ].map((item) => (
            <li key={item}>
              <CheckCircle2 aria-hidden="true" size={17} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section model-sources">
        <div>
          <span className="eyebrow">Primary sources</span>
          <h2>Read the source material behind the map.</h2>
        </div>
        <div className="source-list">
          {models.flatMap((model) =>
            model.sources.map((source) => (
              <SourceCitation key={`${model.name}-${source.href}`} {...source} />
            )),
          )}
        </div>
      </section>
    </main>
  );
}
