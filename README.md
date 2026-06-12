# AI Engineering Mastery

**AI Engineering Mastery** is a beginner-friendly, professional-depth curriculum for learning the AI engineering skills that matter for real jobs without unnecessary detours.

Live site: [https://www.ailearning-engineering.com](https://www.ailearning-engineering.com)

## What This Teaches

This website helps learners build real understanding of modern AI systems, including:

- Transformer architecture and the paper **Attention Is All You Need**
- Large language model foundations
- Retrieval-augmented generation (RAG)
- AI agents and tool use
- Fine-tuning and model adaptation
- Embeddings, model families, and model literacy
- AI infrastructure, evaluation, monitoring, latency, and cost tradeoffs

The goal is not shallow vocabulary recognition or encyclopedia-style coverage. The lessons are designed so a motivated beginner can explain the ideas, trace the systems, reason about failure modes, and understand where each concept appears in production AI engineering work.

## Why It Exists

Most AI learning resources are either too shallow for professional work or too dense for beginners. AI Engineering Mastery is built to bridge that gap.

Each major topic moves from:

1. Plain-language intuition
2. Concrete examples
3. Diagrams and structured explanations
4. Equations or implementation details when needed
5. Production context and tradeoffs
6. Practice checks and primary sources

## Current MVP

The first MVP includes:

- A single homepage roadmap with topics in the recommended learning order
- A deep beginner-friendly lesson on **Attention Is All You Need**
- Topic hubs for RAG, agents, fine-tuning, skills and tool use, and AI infrastructure
- A model-family reference page covering Transformers, BERT, GPT-style decoders, CLIP, diffusion models, and embedding models
- Primary-source citations and professional outcomes for each topic

## Featured Lesson

The benchmark lesson is:

**Attention Is All You Need Explained for AI Engineers**

It covers tokens, embeddings, positional encodings, scaled dot-product attention, multi-head attention, encoder-decoder flow, residual connections, layer normalization, training setup, BLEU results, ablations, computational complexity, and production tradeoffs.

The target is that a beginner can read the lesson and understand the original paper's main argument and technical depth without needing to separately read the paper first.

## Tech Stack

- Next.js
- React
- MDX
- TypeScript
- Vercel

## Local Development

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

## Repository Topics

Recommended GitHub topics:

```text
ai-engineering
machine-learning-engineering
llm
transformers
attention-is-all-you-need
rag
ai-agents
fine-tuning
ai-infrastructure
model-literacy
nextjs
mdx
typescript
```

## License

No license has been selected yet.
