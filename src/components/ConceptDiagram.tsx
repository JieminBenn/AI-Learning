type ConceptDiagramProps = {
  type:
    | "transformer"
    | "paperArgument"
    | "attention"
    | "qkv"
    | "residualNorm"
    | "masking"
    | "complexity"
    | "positional"
    | "rag"
    | "dataPipeline"
    | "fineTuning"
    | "aiSystem"
    | "agent";
};

export function ConceptDiagram({ type }: ConceptDiagramProps) {
  if (type === "transformer") {
    return (
      <figure className="concept-diagram transformer-diagram">
        <figcaption>Transformer data flow</figcaption>
        <ol className="transformer-flow">
          <li className="transformer-step input">
            <span className="step-number">1</span>
            <div>
              <strong>Input tokens</strong>
              <span>Text is split into model-readable pieces.</span>
            </div>
          </li>
          <li className="flow-arrow" aria-hidden="true">
            Then
          </li>
          <li className="transformer-step">
            <span className="step-number">2</span>
            <div>
              <strong>Token embeddings + positional signal</strong>
              <span>Each token becomes a vector, then position is added so order is visible.</span>
            </div>
          </li>
          <li className="flow-arrow" aria-hidden="true">
            Next
          </li>
          <li className="transformer-step accent">
            <span className="step-number">3</span>
            <div>
              <strong>Encoder stack</strong>
              <span>Self-attention and feed-forward layers build contextual input vectors.</span>
            </div>
          </li>
          <li className="flow-arrow" aria-hidden="true">
            Then
          </li>
          <li className="transformer-step">
            <span className="step-number">4</span>
            <div>
              <strong>Decoder stack</strong>
              <span>Masked self-attention looks left; encoder attention looks back at the input.</span>
            </div>
          </li>
          <li className="flow-arrow" aria-hidden="true">
            Finally
          </li>
          <li className="transformer-step output">
            <span className="step-number">5</span>
            <div>
              <strong>Next-token probabilities</strong>
              <span>The model scores possible next tokens and chooses or samples one.</span>
            </div>
          </li>
        </ol>
      </figure>
    );
  }

  if (type === "paperArgument") {
    return (
      <figure className="concept-diagram paper-argument-diagram">
        <figcaption>The paper&apos;s argument in one pass</figcaption>
        <div className="argument-flow">
          <div className="diagram-node input">
            <strong>Problem</strong>
            <span>Sequential models limit parallel training and lengthen dependency paths.</span>
          </div>
          <div className="diagram-node">
            <strong>Design move</strong>
            <span>Use attention as the main token-to-token communication operation.</span>
          </div>
          <div className="diagram-node accent">
            <strong>Mechanism</strong>
            <span>Queries compare with keys, then weights mix values.</span>
          </div>
          <div className="diagram-node">
            <strong>Architecture</strong>
            <span>Stack attention, feed-forward layers, residual paths, normalization, and positions.</span>
          </div>
          <div className="diagram-node output">
            <strong>Evidence</strong>
            <span>Translation quality improves while training cost drops versus strong baselines.</span>
          </div>
        </div>
      </figure>
    );
  }

  if (type === "attention") {
    return (
      <figure className="concept-diagram attention-diagram">
        <figcaption>Scaled dot-product attention</figcaption>
        <div className="attention-flow">
          <div>Query asks</div>
          <div>Keys match</div>
          <div>Scores scale</div>
          <div>Softmax weights</div>
          <div>Values mix</div>
        </div>
      </figure>
    );
  }

  if (type === "qkv") {
    return (
      <figure className="concept-diagram qkv-diagram">
        <figcaption>One token creates three views</figcaption>
        <div className="qkv-grid">
          <div>
            <strong>Query</strong>
            <span>What am I looking for?</span>
          </div>
          <div>
            <strong>Key</strong>
            <span>What information do I offer?</span>
          </div>
          <div>
            <strong>Value</strong>
            <span>What content should I pass along?</span>
          </div>
        </div>
      </figure>
    );
  }

  if (type === "residualNorm") {
    return (
      <figure className="concept-diagram residual-diagram">
        <figcaption>Every sub-layer keeps a stable main stream</figcaption>
        <div className="residual-flow">
          <div className="diagram-node input">
            <strong>x</strong>
            <span>Current token representation</span>
          </div>
          <div className="diagram-node">
            <strong>Sublayer(x)</strong>
            <span>Attention or feed-forward transform</span>
          </div>
          <div className="diagram-node accent">
            <strong>x + Sublayer(x)</strong>
            <span>Add the old path back in</span>
          </div>
          <div className="diagram-node output">
            <strong>LayerNorm</strong>
            <span>Rescale features before the next block</span>
          </div>
        </div>
      </figure>
    );
  }

  if (type === "masking") {
    return (
      <figure className="concept-diagram mask-diagram">
        <figcaption>Masked decoder self-attention</figcaption>
        <div className="mask-grid" aria-label="Allowed and blocked decoder attention positions">
          {[
            ["y1", "allow", "block", "block"],
            ["y2", "allow", "allow", "block"],
            ["y3", "allow", "allow", "allow"],
          ].map((row) => (
            <div className="mask-row" key={row[0]}>
              <strong>{row[0]}</strong>
              {row.slice(1).map((state, index) => (
                <span className={`mask-cell ${state}`} key={`${row[0]}-${index}`}>
                  {state === "allow" ? "can use" : "hidden"}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p>Each output position may look at earlier target tokens, but future target tokens are hidden.</p>
      </figure>
    );
  }

  if (type === "complexity") {
    return (
      <figure className="concept-diagram complexity-diagram">
        <figcaption>Why full attention gets expensive</figcaption>
        <div className="complexity-pair">
          <div>
            <strong>4 tokens</strong>
            <span>4 x 4 = 16 pairwise scores</span>
            <div className="score-grid small">
              {Array.from({ length: 16 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
          <div>
            <strong>8 tokens</strong>
            <span>8 x 8 = 64 pairwise scores</span>
            <div className="score-grid large">
              {Array.from({ length: 64 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
        </div>
      </figure>
    );
  }

  if (type === "positional") {
    return (
      <figure className="concept-diagram positional-diagram">
        <figcaption>Position is added to meaning</figcaption>
        <div className="position-row">
          {["the", "cat", "sat", "near", "me"].map((token, index) => (
            <div className="position-token" key={token}>
              <span>{token}</span>
              <small>pos {index + 1}</small>
            </div>
          ))}
        </div>
      </figure>
    );
  }

  if (type === "rag") {
    return (
      <figure className="concept-diagram rag-diagram">
        <figcaption>RAG system loop</figcaption>
        <div className="diagram-grid compact">
          <div className="diagram-node input">User question</div>
          <div className="diagram-node">Embed query</div>
          <div className="diagram-node accent">Retrieve documents</div>
          <div className="diagram-node">Rerank evidence</div>
          <div className="diagram-node output">Answer with citations</div>
        </div>
      </figure>
    );
  }

  if (type === "dataPipeline") {
    return (
      <figure className="concept-diagram data-pipeline-diagram">
        <figcaption>AI data pipeline loop</figcaption>
        <div className="diagram-grid compact">
          <div className="diagram-node input">Source data</div>
          <div className="diagram-node">Ingest and clean</div>
          <div className="diagram-node accent">Validate and version</div>
          <div className="diagram-node">Transform for AI use</div>
          <div className="diagram-node output">Retrieve, train, evaluate, monitor</div>
        </div>
      </figure>
    );
  }

  if (type === "fineTuning") {
    return (
      <figure className="concept-diagram fine-tuning-diagram">
        <figcaption>Fine-tuning workflow</figcaption>
        <div className="diagram-grid compact">
          <div className="diagram-node input">Base model</div>
          <div className="diagram-node">Curated examples</div>
          <div className="diagram-node accent">Training updates</div>
          <div className="diagram-node">Validation checks</div>
          <div className="diagram-node output">Adapted model</div>
        </div>
      </figure>
    );
  }

  if (type === "aiSystem") {
    return (
      <figure className="concept-diagram ai-system-diagram">
        <figcaption>Production AI system loop</figcaption>
        <div className="diagram-grid compact">
          <div className="diagram-node input">User request</div>
          <div className="diagram-node">Gateway and policy checks</div>
          <div className="diagram-node accent">Retrieve, call tools, or generate</div>
          <div className="diagram-node">Trace, score, and monitor</div>
          <div className="diagram-node output">Answer, fallback, or incident</div>
        </div>
      </figure>
    );
  }

  return (
    <figure className="concept-diagram agent-diagram">
      <figcaption>Agent execution loop</figcaption>
      <div className="attention-flow">
        <div>Observe</div>
        <div>Plan</div>
        <div>Call tool</div>
        <div>Check result</div>
        <div>Stop or continue</div>
      </div>
    </figure>
  );
}
