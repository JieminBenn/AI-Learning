export type LessonMeta = {
  slug: string;
  title: string;
  level: "Beginner" | "Builder" | "Professional";
  prerequisites: string[];
  tags: string[];
  objectives: string[];
  outcomes: string[];
  sources: {
    label: string;
    href: string;
  }[];
};

export type Topic = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  professionalOutcome: string;
  essentials: string[];
  capstone: string;
  sources: {
    label: string;
    href: string;
  }[];
};

export type LearningModule = {
  title: string;
  category: string;
  description: string;
  usedIn: string[];
  milestones: string[];
};

export const attentionLesson: LessonMeta = {
  slug: "attention-is-all-you-need",
  title: "Attention Is All You Need",
  level: "Beginner",
  prerequisites: [
    "No machine learning background required",
    "Comfort with high-school algebra helps but is not required",
    "A willingness to pause at each diagram and trace the data flow",
  ],
  tags: ["Transformers", "Attention", "Sequence Modeling", "Papers"],
  objectives: [
    "Read the Transformer paper section by section and explain the authors' argument.",
    "Define tokens, embeddings, hidden states, attention scores, softmax, residual connections, masking, dropout, and label smoothing from first principles.",
    "Derive the scaled dot-product attention equation and explain every symbol.",
    "Trace how the encoder, decoder, multi-head attention, feed-forward layers, positional encodings, and output softmax move information through the architecture.",
    "Interpret the training recipe, BLEU results, ablations, complexity table, and production tradeoffs.",
  ],
  outcomes: [
    "You can explain the Transformer architecture in an interview without hand-waving.",
    "You can read the original paper with enough context to follow the equations, tables, and design logic.",
    "You can reason about where attention is expensive, where it is powerful, why it parallelizes well, and which failure modes matter in production.",
  ],
  sources: [
    {
      label: "Attention Is All You Need paper",
      href: "/papers/attention-is-all-you-need.pdf",
    },
  ],
};

export const topics: Topic[] = [
  {
    slug: "rag",
    title: "Retrieval-Augmented Generation",
    kicker: "Ground models in external knowledge",
    summary:
      "RAG combines a generator with a retriever so an AI system can look up relevant information instead of relying only on weights learned during training.",
    professionalOutcome:
      "Design a production retrieval pipeline, choose chunking and ranking strategies, cite sources, and debug hallucinations caused by poor retrieval.",
    essentials: [
      "Embeddings and vector search",
      "Chunking and metadata",
      "Hybrid retrieval and reranking",
      "Grounded generation and citation",
      "Evaluation for answer faithfulness",
    ],
    capstone: "Build a cited technical-support assistant over a document library.",
    sources: [
      {
        label: "Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        href: "https://arxiv.org/abs/2005.11401",
      },
    ],
  },
  {
    slug: "agents",
    title: "Agents",
    kicker: "Models that plan, use tools, and recover",
    summary:
      "An agent is an AI system that can inspect state, decide what to do next, call tools, and continue until a goal or stop condition is reached.",
    professionalOutcome:
      "Build agent loops with tool schemas, guardrails, tracing, handoffs, memory, and clear failure boundaries.",
    essentials: [
      "Tool calling and schemas",
      "Planning loops and stop conditions",
      "Handoffs between specialized agents",
      "Tracing and observability",
      "Safety boundaries for autonomous actions",
    ],
    capstone: "Create a research agent that gathers sources, drafts a plan, and records traceable decisions.",
    sources: [
      {
        label: "OpenAI Agents guide",
        href: "https://platform.openai.com/docs/guides/agents",
      },
      {
        label: "OpenAI Agents SDK docs",
        href: "https://openai.github.io/openai-agents-js/guides/agents/",
      },
    ],
  },
  {
    slug: "fine-tuning",
    title: "Fine-Tuning",
    kicker: "Adapt behavior with training data",
    summary:
      "Fine-tuning changes a model with task-specific examples. It is useful when prompting is not enough and the target behavior is stable and measurable.",
    professionalOutcome:
      "Know when to fine-tune, how to prepare data, how to evaluate results, and when RAG or prompting is the better tool.",
    essentials: [
      "Supervised fine-tuning",
      "Preference and reinforcement fine-tuning",
      "Dataset formatting",
      "Evaluation sets",
      "Regression risk and model drift",
    ],
    capstone: "Prepare a fine-tuning dataset and evaluation plan for a domain-specific assistant.",
    sources: [
      {
        label: "OpenAI supervised fine-tuning guide",
        href: "https://platform.openai.com/docs/guides/supervised-fine-tuning",
      },
      {
        label: "OpenAI fine-tuning API reference",
        href: "https://platform.openai.com/docs/api-reference/fine-tuning",
      },
    ],
  },
  {
    slug: "skills",
    title: "Skills and Tool Use",
    kicker: "Turn model output into reliable action",
    summary:
      "Skills are reusable instructions, code paths, or tools that let an AI system perform work with more consistency than free-form prompting.",
    professionalOutcome:
      "Design tools and skill instructions that are narrow, testable, observable, and safe to call from an AI workflow.",
    essentials: [
      "Tool contracts",
      "Input validation",
      "Prompt and instruction hierarchy",
      "Permission boundaries",
      "Human review points",
    ],
    capstone: "Define a tool-use workflow for editing documents without leaking private data.",
    sources: [
      {
        label: "OpenAI function calling guide",
        href: "https://platform.openai.com/docs/guides/function-calling",
      },
    ],
  },
  {
    slug: "ai-infra",
    title: "AI Infrastructure",
    kicker: "Serve, observe, and scale AI systems",
    summary:
      "AI infrastructure covers the systems work around models: serving, latency, caching, evals, data pipelines, cost control, and incident response.",
    professionalOutcome:
      "Understand the operational pieces needed to ship AI features that are fast, affordable, measurable, and debuggable.",
    essentials: [
      "Inference serving",
      "Batching and caching",
      "Evaluation pipelines",
      "Prompt and dataset versioning",
      "Monitoring, traces, and cost controls",
    ],
    capstone: "Design an evaluation and monitoring plan for a production AI assistant.",
    sources: [
      {
        label: "OpenAI production best practices",
        href: "https://platform.openai.com/docs/guides/production-best-practices",
      },
    ],
  },
];

export const models = [
  {
    name: "Transformer",
    family: "Architecture",
    whyItMatters:
      "The base architecture behind most modern large language models, vision-language models, and many generative systems.",
    learnAfter: "Attention Is All You Need",
  },
  {
    name: "BERT",
    family: "Encoder model",
    whyItMatters:
      "A landmark bidirectional encoder used for classification, retrieval, and representation learning.",
    learnAfter: "Transformers and embeddings",
  },
  {
    name: "GPT-style decoder",
    family: "Decoder model",
    whyItMatters:
      "The autoregressive pattern that predicts the next token and powers many conversational and coding systems.",
    learnAfter: "Masked attention",
  },
  {
    name: "CLIP",
    family: "Multimodal model",
    whyItMatters:
      "Connects images and text in a shared representation space, making it foundational for search and multimodal workflows.",
    learnAfter: "Contrastive learning",
  },
  {
    name: "Diffusion model",
    family: "Generative model",
    whyItMatters:
      "Generates images and other media by learning to reverse a gradual noising process.",
    learnAfter: "Probability basics",
  },
  {
    name: "Embedding model",
    family: "Representation model",
    whyItMatters:
      "Turns text, images, or other inputs into vectors that can be searched, clustered, compared, and retrieved.",
    learnAfter: "Vector spaces",
  },
];

export const learningModules: LearningModule[] = [
  {
    title: "Basics of Transformers",
    category: "Foundation",
    description:
      "Learn tokens, vectors, embeddings, attention, positional information, and why Transformer architecture changed sequence modeling.",
    usedIn: ["LLM engineering", "ML research", "AI product work"],
    milestones: ["Vocabulary", "Transformer intuition", "Attention math", "Paper reading"],
  },
  {
    title: "LLM Foundations",
    category: "Models",
    description:
      "Understand next-token prediction, context windows, decoding, prompting, instruction tuning, model limits, and evaluation basics.",
    usedIn: ["AI applications", "Model evaluation", "Prompt systems"],
    milestones: ["Token prediction", "Prompt behavior", "Context limits", "Evaluation basics"],
  },
  {
    title: "RAG Systems",
    category: "Applications",
    description:
      "Build systems that retrieve outside knowledge, rank evidence, cite sources, and reduce hallucinations with measurable grounding.",
    usedIn: ["Search", "Support assistants", "Enterprise knowledge"],
    milestones: ["Embeddings", "Chunking", "Retrieval", "Grounded answers"],
  },
  {
    title: "Agents and Tool Use",
    category: "Workflows",
    description:
      "Design model workflows that plan, call tools, inspect results, recover from errors, and stop safely.",
    usedIn: ["Automation", "Research workflows", "Operations tools"],
    milestones: ["Tool schemas", "Agent loops", "Tracing", "Safety boundaries"],
  },
  {
    title: "Data Pipelines",
    category: "Data",
    description:
      "Prepare, clean, version, and evaluate the data that powers retrieval, training, fine-tuning, and production feedback loops.",
    usedIn: ["RAG", "Fine-tuning", "Evaluation"],
    milestones: ["Data cleaning", "Versioning", "Labeling", "Quality checks"],
  },
  {
    title: "Training Runs",
    category: "Training",
    description:
      "Understand datasets, loss, optimization, checkpoints, validation, regression tests, and how model behavior changes during training.",
    usedIn: ["ML engineering", "Fine-tuning", "Model research"],
    milestones: ["Loss curves", "Checkpoints", "Validation", "Regression tests"],
  },
  {
    title: "Fine-Tuning",
    category: "Adaptation",
    description:
      "Learn when to adapt a model with examples, how to format training data, and how to compare the result against prompting or RAG.",
    usedIn: ["Domain assistants", "Style control", "Task specialization"],
    milestones: ["Training data", "Eval sets", "Regression risk", "Deployment checks"],
  },
  {
    title: "AI Systems",
    category: "Infrastructure",
    description:
      "Operate AI features with serving, latency, caching, monitoring, tracing, cost controls, and incident response.",
    usedIn: ["Production apps", "Platform teams", "Reliability work"],
    milestones: ["Serving design", "Caching", "Monitoring", "Cost model"],
  },
];
