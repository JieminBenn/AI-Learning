type ConceptDiagramProps = {
  type: "transformer" | "attention" | "qkv" | "positional" | "rag" | "agent";
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
