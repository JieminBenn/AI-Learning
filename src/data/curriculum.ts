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

export type ModelFamily = {
  name: string;
  family: string;
  summary: string;
  intuition: string;
  professionalUse: string;
  failureMode: string;
  evaluateWith: string;
  learnAfter: string;
  sources: {
    label: string;
    href: string;
  }[];
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
    {
      label: "HarvardNLP Annotated Transformer repository",
      href: "https://github.com/harvardnlp/annotated-transformer",
    },
  ],
};

export const llmFoundationsLesson: LessonMeta = {
  slug: "llm-foundations",
  title: "LLM Foundations",
  level: "Beginner",
  prerequisites: [
    "Complete the Transformer basics lesson first, or know what tokens, embeddings, attention, and softmax mean",
    "No production AI experience required",
    "Comfort with simple probability and algebra helps, but every symbol is explained",
  ],
  tags: ["LLMs", "Language Modeling", "Prompting", "Evaluation"],
  objectives: [
    "Define large language model, tokenization, context window, next-token prediction, pretraining, decoding, prompting, instruction tuning, and evaluation from first principles.",
    "Explain how an autoregressive model turns a prompt into one token at a time.",
    "Read the core next-token prediction objective and explain every symbol.",
    "Compare greedy decoding, sampling, temperature, top-k, top-p, and beam search at a practical level.",
    "Reason about professional failure modes such as hallucination, context overflow, prompt sensitivity, nondeterminism, and evaluation mismatch.",
  ],
  outcomes: [
    "You can explain what an LLM is doing when it answers a prompt without saying it is simply thinking or searching the web.",
    "You can choose basic prompt, decoding, and evaluation strategies for an AI application.",
    "You can identify when model behavior is caused by training objective, context limits, sampling settings, alignment training, or missing external evidence.",
  ],
  sources: [
    {
      label: "Language Models are Few-Shot Learners",
      href: "https://arxiv.org/abs/2005.14165",
    },
    {
      label: "Training language models to follow instructions with human feedback",
      href: "https://arxiv.org/abs/2203.02155",
    },
    {
      label: "OpenAI text generation guide",
      href: "https://developers.openai.com/api/docs/guides/text",
    },
    {
      label: "OpenAI prompt engineering guide",
      href: "https://developers.openai.com/api/docs/guides/prompt-engineering",
    },
    {
      label: "OpenAI Cookbook examples repository",
      href: "https://github.com/openai/openai-cookbook",
    },
    {
      label: "Hugging Face Transformers repository",
      href: "https://github.com/huggingface/transformers",
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

export const models: ModelFamily[] = [
  {
    name: "Transformer",
    family: "Architecture",
    summary:
      "A neural network architecture that lets every token compare itself with other tokens through attention.",
    intuition:
      "Think of a sentence as a table of word pieces. Attention lets each word piece ask which other pieces matter before the model updates its representation.",
    professionalUse:
      "Used as the backbone for many language, coding, vision-language, retrieval, and generative systems.",
    failureMode:
      "Attention can become expensive as context grows, and the model still needs training data, evaluation, and guardrails.",
    evaluateWith:
      "Task quality, latency, memory use, context-length behavior, and robustness on examples outside the training distribution.",
    learnAfter: "Attention Is All You Need",
    sources: [
      {
        label: "Vaswani et al., Attention Is All You Need",
        href: "https://arxiv.org/abs/1706.03762",
      },
      {
        label: "Hugging Face Transformers model family summary",
        href: "https://huggingface.co/docs/transformers/model_summary",
      },
    ],
  },
  {
    name: "BERT",
    family: "Encoder model",
    summary:
      "A bidirectional Transformer encoder trained to understand text by filling in masked words.",
    intuition:
      "BERT reads the whole input at once, so a missing word can use clues from both the left and right sides of the sentence.",
    professionalUse:
      "Useful for classification, question answering, reranking, entity extraction, and text representations where generation is not the main task.",
    failureMode:
      "It is not naturally built to generate long free-form answers, and fine-tuned classifiers can fail when the production text differs from training examples.",
    evaluateWith:
      "Held-out classification accuracy, calibration, retrieval quality, bias checks, and error slices by domain or text length.",
    learnAfter: "Transformers and embeddings",
    sources: [
      {
        label: "Devlin et al., BERT",
        href: "https://arxiv.org/abs/1810.04805",
      },
    ],
  },
  {
    name: "GPT-style decoder",
    family: "Decoder model",
    summary:
      "A Transformer decoder trained to predict the next token from the tokens that came before it.",
    intuition:
      "The model writes one token at a time. After each token, that new token becomes part of the context for the next prediction.",
    professionalUse:
      "Powers chat, drafting, coding, summarization, extraction, tool calling, and agent planning workflows.",
    failureMode:
      "A fluent answer can still be wrong, unsupported, nondeterministic, or overconfident when the prompt lacks evidence.",
    evaluateWith:
      "Human preference tests, factuality checks, exact-match task tests, tool-call accuracy, cost, latency, and regression evals.",
    learnAfter: "Masked attention",
    sources: [
      {
        label: "Radford et al., Improving Language Understanding by Generative Pre-Training",
        href: "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf",
      },
      {
        label: "Brown et al., Language Models are Few-Shot Learners",
        href: "https://arxiv.org/abs/2005.14165",
      },
    ],
  },
  {
    name: "CLIP",
    family: "Multimodal model",
    summary:
      "A vision-language model that learns to match images with natural-language descriptions.",
    intuition:
      "CLIP pulls matching image and text vectors closer together and pushes mismatched pairs farther apart.",
    professionalUse:
      "Used for image search, zero-shot classification, moderation support, dataset filtering, and multimodal retrieval.",
    failureMode:
      "It can inherit dataset bias, miss fine-grained visual details, and behave poorly on domains unlike its pretraining data.",
    evaluateWith:
      "Zero-shot accuracy, retrieval recall, bias and safety tests, domain-specific visual audits, and false-positive review.",
    learnAfter: "Contrastive learning",
    sources: [
      {
        label: "Radford et al., CLIP",
        href: "https://arxiv.org/abs/2103.00020",
      },
      {
        label: "OpenAI CLIP research post",
        href: "https://openai.com/research/clip",
      },
    ],
  },
  {
    name: "Diffusion model",
    family: "Generative model",
    summary:
      "A generative model that learns to create data by reversing a gradual noising process.",
    intuition:
      "Training teaches the model how to remove a little noise at each step. Sampling starts from noise and repeatedly denoises toward an image or other output.",
    professionalUse:
      "Common in image generation, editing, design prototyping, synthetic data, audio generation, and some scientific modeling.",
    failureMode:
      "Outputs may contain artifacts, unsafe content, memorized styles, prompt mismatch, or inconsistent details across generations.",
    evaluateWith:
      "Human review, prompt adherence, diversity, safety filters, artifact rates, and task-specific metrics such as FID when appropriate.",
    learnAfter: "Probability basics",
    sources: [
      {
        label: "Ho et al., Denoising Diffusion Probabilistic Models",
        href: "https://arxiv.org/abs/2006.11239",
      },
    ],
  },
  {
    name: "Embedding model",
    family: "Representation model",
    summary:
      "A model that turns input into vectors: lists of numbers that preserve useful similarity relationships.",
    intuition:
      "If two passages mean similar things, a good embedding model places their vectors near each other even when they use different words.",
    professionalUse:
      "Central to retrieval-augmented generation, semantic search, recommendation, clustering, deduplication, and memory systems.",
    failureMode:
      "Bad chunking, weak metadata, domain mismatch, or the wrong similarity threshold can retrieve plausible but irrelevant evidence.",
    evaluateWith:
      "Recall at k, mean reciprocal rank, grounded-answer quality, latency, storage cost, and query-specific failure analysis.",
    learnAfter: "Vector spaces",
    sources: [
      {
        label: "OpenAI embeddings guide",
        href: "https://platform.openai.com/docs/guides/embeddings",
      },
      {
        label: "OpenAI text and code embeddings paper",
        href: "https://cdn.openai.com/papers/Text_and_Code_Embeddings_by_Contrastive_Pre_Training.pdf",
      },
    ],
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
