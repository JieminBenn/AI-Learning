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
  buildPath: string[];
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
      label: "Anthropic prompt engineering overview",
      href: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
    },
    {
      label: "Hugging Face text generation documentation",
      href: "https://huggingface.co/docs/transformers/main_classes/text_generation",
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

export const ragSystemsLesson: LessonMeta = {
  slug: "rag-systems",
  title: "RAG Systems",
  level: "Builder",
  prerequisites: [
    "Complete LLM Foundations first, or know what tokens, context windows, embeddings, and hallucinations mean",
    "No search-engine background required",
    "Comfort with simple vectors and percentages helps, but every metric is explained",
  ],
  tags: ["RAG", "Retrieval", "Embeddings", "Evaluation", "Systems"],
  objectives: [
    "Define retrieval-augmented generation, parametric memory, non-parametric memory, embeddings, vector search, chunking, top-k retrieval, reranking, grounding, citations, recall, precision, mean reciprocal rank, and faithfulness from first principles.",
    "Trace a user question through ingestion, chunking, embedding, indexing, retrieval, reranking, prompt assembly, generation, citation, and evaluation.",
    "Explain the core retrieval score equation and what cosine similarity measures.",
    "Compare sparse retrieval, dense retrieval, hybrid retrieval, reranking, and long-context prompting at a practical level.",
    "Diagnose production failure modes such as missing chunks, stale indexes, retrieval mismatch, source confusion, prompt overflow, unsupported answers, and evaluation blind spots.",
  ],
  outcomes: [
    "You can design a RAG pipeline for a real document collection without treating vector search as magic.",
    "You can choose chunking, metadata, retrieval, reranking, prompting, and evaluation strategies based on tradeoffs.",
    "You can debug whether a bad answer came from retrieval, generation, source quality, prompt construction, or evaluation design.",
  ],
  sources: [
    {
      label: "Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
      href: "https://arxiv.org/abs/2005.11401",
    },
    {
      label: "Karpukhin et al., Dense Passage Retrieval for Open-Domain Question Answering",
      href: "https://arxiv.org/abs/2004.04906",
    },
    {
      label: "Thakur et al., BEIR benchmark",
      href: "https://arxiv.org/abs/2104.08663",
    },
    {
      label: "OpenAI embeddings guide",
      href: "https://platform.openai.com/docs/guides/embeddings",
    },
    {
      label: "OpenAI Cookbook RAG with Elasticsearch",
      href: "https://cookbook.openai.com/examples/vector_databases/elasticsearch/elasticsearch-retrieval-augmented-generation",
    },
    {
      label: "LlamaIndex introduction to RAG",
      href: "https://developers.llamaindex.ai/python/framework/understanding/rag/",
    },
    {
      label: "LangChain retrieval documentation",
      href: "https://docs.langchain.com/oss/python/langchain/retrieval",
    },
  ],
};

export const agentsAndToolUseLesson: LessonMeta = {
  slug: "agents-and-tool-use",
  title: "Agents and Tool Use",
  level: "Builder",
  prerequisites: [
    "Complete LLM Foundations and RAG Systems first, or know what prompts, context windows, tool results, and hallucinations mean",
    "No software automation background required",
    "Comfort with JSON objects helps, but schemas and arguments are explained from first principles",
  ],
  tags: ["Agents", "Tool Use", "Function Calling", "Automation", "Evaluation"],
  objectives: [
    "Define agent, tool, function calling, tool schema, argument validation, observation, state, plan, action, stop condition, handoff, memory, guardrail, trace, and human-in-the-loop review from first principles.",
    "Trace a user goal through an agent loop that observes state, chooses actions, validates tool calls, executes tools, records results, and stops safely.",
    "Explain why tool calling separates model decision-making from application-side execution.",
    "Read the core tool-selection equation and explain every symbol.",
    "Compare single-agent loops, ReAct-style reasoning/action workflows, learned tool-use behavior, handoffs, and multi-agent orchestration at a practical level.",
    "Diagnose production failure modes such as wrong tool choice, malformed arguments, looping, permission leaks, stale observations, unverified final answers, and tool overuse.",
  ],
  outcomes: [
    "You can design a tool-using agent without treating autonomy as magic.",
    "You can write narrow tool contracts and reason about validation, permissions, human approval, tracing, and stop conditions.",
    "You can evaluate whether an agent succeeded by inspecting the workflow, not just the final answer.",
  ],
  sources: [
    {
      label: "Yao et al., ReAct: Synergizing Reasoning and Acting in Language Models",
      href: "https://arxiv.org/abs/2210.03629",
    },
    {
      label: "Schick et al., Toolformer: Language Models Can Teach Themselves to Use Tools",
      href: "https://arxiv.org/abs/2302.04761",
    },
    {
      label: "Anthropic, Building Effective Agents",
      href: "https://www.anthropic.com/engineering/building-effective-agents",
    },
    {
      label: "OpenAI function calling guide",
      href: "https://platform.openai.com/docs/guides/function-calling",
    },
    {
      label: "OpenAI Agents guide",
      href: "https://platform.openai.com/docs/guides/agents",
    },
    {
      label: "OpenAI Agents SDK docs",
      href: "https://openai.github.io/openai-agents-js/guides/agents/",
    },
    {
      label: "LangGraph overview",
      href: "https://docs.langchain.com/oss/python/langgraph/overview",
    },
    {
      label: "Model Context Protocol introduction",
      href: "https://modelcontextprotocol.io/docs/getting-started/intro",
    },
  ],
};

export const dataPipelinesLesson: LessonMeta = {
  slug: "data-pipelines",
  title: "Data Pipelines",
  level: "Builder",
  prerequisites: [
    "Complete RAG Systems first, or know what documents, chunks, embeddings, evaluation sets, and model outputs are",
    "No database or distributed-systems background required",
    "Comfort with tables and JSON helps, but schemas and validation are explained from first principles",
  ],
  tags: ["Data", "Pipelines", "Validation", "Evaluation", "Production AI"],
  objectives: [
    "Define pipeline, raw data, dataset, artifact, schema, validation, transformation, batch pipeline, streaming pipeline, lineage, data versioning, label noise, data leakage, drift, and feedback loop from first principles.",
    "Trace how source data becomes a retrieval index, fine-tuning dataset, evaluation set, or monitoring signal.",
    "Explain why validation checks should run before data reaches model training or user-facing retrieval.",
    "Read simple data quality equations and explain every symbol.",
    "Design beginner-friendly schema checks for text, labels, metadata, and split membership.",
    "Diagnose common production failures such as stale indexes, schema drift, duplicate examples, label leakage, privacy leakage, and broken joins.",
  ],
  outcomes: [
    "You can explain why AI systems depend on repeatable, validated, versioned data paths.",
    "You can design a small data pipeline for retrieval, fine-tuning, evaluation, or monitoring.",
    "You can identify data failures that make otherwise strong models behave badly in production.",
  ],
  sources: [
    {
      label: "Baylor et al., TFX: A TensorFlow-Based Production-Scale Machine Learning Platform",
      href: "https://research.google/pubs/tfx-a-tensorflow-based-production-scale-machine-learning-platform/",
    },
    {
      label: "Gebru et al., Datasheets for Datasets",
      href: "https://arxiv.org/abs/1803.09010",
    },
    {
      label: "TensorFlow Data Validation documentation",
      href: "https://www.tensorflow.org/tfx/data_validation/install",
    },
    {
      label: "TensorFlow Extended GitHub repository",
      href: "https://github.com/tensorflow/tfx",
    },
    {
      label: "Great Expectations data validation documentation",
      href: "https://docs.greatexpectations.io/docs/guides/validation/validate_data_overview/",
    },
    {
      label: "Dagster documentation",
      href: "https://docs.dagster.io/",
    },
    {
      label: "Sambasivan et al., Data Cascades in High-Stakes AI",
      href: "https://research.google/pubs/everyone-wants-to-do-the-model-work-not-the-data-work-data-cascades-in-high-stakes-ai/",
    },
  ],
};

export const fineTuningLesson: LessonMeta = {
  slug: "fine-tuning",
  title: "Fine-Tuning",
  level: "Builder",
  prerequisites: [
    "Complete LLM Foundations and Data Pipelines first, or know what tokens, loss, datasets, validation splits, and evaluation sets are",
    "No GPU training experience required",
    "Comfort with simple probability and matrices helps, but every symbol is explained",
  ],
  tags: ["Fine-Tuning", "SFT", "LoRA", "Evaluation", "Model Adaptation"],
  objectives: [
    "Define fine-tuning, supervised fine-tuning, instruction tuning, full fine-tuning, parameter-efficient fine-tuning, LoRA, QLoRA, preference optimization, train split, validation split, test split, loss, epoch, overfitting, and catastrophic forgetting from first principles.",
    "Decide when fine-tuning is a better fit than prompting, RAG, tool use, or workflow changes.",
    "Trace how examples become training batches, loss values, parameter updates, checkpoints, and a deployable adapted model.",
    "Read the supervised fine-tuning objective and the LoRA update equation, then explain every symbol.",
    "Prepare a beginner-friendly dataset plan with formatting, quality checks, splits, privacy review, and evaluation cases.",
    "Diagnose production failures such as memorization, style overfitting, regression on general capability, benchmark leakage, safety drift, and weak baseline comparisons.",
  ],
  outcomes: [
    "You can explain what changes inside a model during fine-tuning without treating training as magic.",
    "You can choose between prompting, RAG, full fine-tuning, LoRA/QLoRA, and preference tuning based on the behavior you need.",
    "You can design the evaluation and release checks required before putting a fine-tuned model into a user-facing workflow.",
  ],
  sources: [
    {
      label: "Ouyang et al., Training language models to follow instructions with human feedback",
      href: "https://arxiv.org/abs/2203.02155",
    },
    {
      label: "Hu et al., LoRA: Low-Rank Adaptation of Large Language Models",
      href: "https://arxiv.org/abs/2106.09685",
    },
    {
      label: "Dettmers et al., QLoRA: Efficient Finetuning of Quantized LLMs",
      href: "https://arxiv.org/abs/2305.14314",
    },
    {
      label: "Rafailov et al., Direct Preference Optimization",
      href: "https://arxiv.org/abs/2305.18290",
    },
    {
      label: "OpenAI supervised fine-tuning guide",
      href: "https://platform.openai.com/docs/guides/supervised-fine-tuning",
    },
    {
      label: "OpenAI fine-tuning platform update",
      href: "https://openai.com/index/introducing-improvements-to-the-fine-tuning-api-and-expanding-our-custom-models-program/",
    },
    {
      label: "OpenAI fine-tuning API reference",
      href: "https://platform.openai.com/docs/api-reference/fine-tuning",
    },
    {
      label: "Hugging Face PEFT documentation",
      href: "https://huggingface.co/docs/peft/index",
    },
    {
      label: "Hugging Face TRL SFTTrainer documentation",
      href: "https://huggingface.co/docs/trl/sft_trainer",
    },
    {
      label: "Hugging Face TRL GitHub repository",
      href: "https://github.com/huggingface/trl",
    },
    {
      label: "Hugging Face PEFT GitHub repository",
      href: "https://github.com/huggingface/peft",
    },
    {
      label: "Axolotl GitHub repository",
      href: "https://github.com/axolotl-ai-cloud/axolotl",
    },
    {
      label: "LLaMA Factory GitHub repository",
      href: "https://github.com/hiyouga/LLaMA-Factory",
    },
  ],
};

export const aiSystemsLesson: LessonMeta = {
  slug: "ai-systems",
  title: "AI Systems",
  level: "Professional",
  prerequisites: [
    "Complete LLM Foundations, RAG Systems, Agents and Tool Use, Data Pipelines, and Fine-Tuning first, or know what model calls, retrieval, tools, datasets, and evaluations are",
    "No site reliability engineering background required",
    "Comfort with APIs, percentages, and simple arithmetic helps, but every operational metric is explained",
  ],
  tags: ["AI Systems", "Infrastructure", "Serving", "Observability", "Evaluation"],
  objectives: [
    "Define AI system, inference, serving path, orchestration, fallback, latency, throughput, cache, batch, trace, span, metric, log, service-level indicator, service-level objective, error budget, evaluation gate, cost model, and incident response from first principles.",
    "Trace a production AI request through policy checks, prompt assembly, retrieval, tool calls, model inference, validation, response delivery, logging, monitoring, and evaluation.",
    "Explain why production AI reliability depends on both model quality and ordinary distributed-systems reliability.",
    "Read latency, throughput, cache hit rate, and cost equations, then explain every symbol.",
    "Compare streaming, batching, caching, smaller models, retrieval shortcuts, fallbacks, and human review as practical system design tradeoffs.",
    "Diagnose production failures such as slow responses, runaway cost, stale prompts, retrieval outages, missing traces, evaluation regressions, privacy leaks, and weak incident rollback plans.",
  ],
  outcomes: [
    "You can explain the moving parts around a model that make an AI feature production-ready.",
    "You can design the first observability, evaluation, reliability, and cost controls for a real AI workflow.",
    "You can reason about whether a bad user experience came from model behavior, data, orchestration, infrastructure, permissions, or release process.",
  ],
  sources: [
    {
      label: "OpenAI production best practices",
      href: "https://platform.openai.com/docs/guides/production-best-practices",
    },
    {
      label: "OpenTelemetry GenAI semantic conventions",
      href: "https://opentelemetry.io/docs/specs/semconv/gen-ai/",
    },
    {
      label: "MLflow GenAI tracing documentation",
      href: "https://mlflow.org/docs/latest/genai/tracing/",
    },
    {
      label: "Google SRE Book: Monitoring Distributed Systems",
      href: "https://sre.google/sre-book/monitoring-distributed-systems/",
    },
    {
      label: "Google SRE Book: Service Level Objectives",
      href: "https://sre.google/sre-book/service-level-objectives/",
    },
    {
      label: "Anthropic evaluation tool documentation",
      href: "https://platform.claude.com/docs/en/test-and-evaluate/eval-tool",
    },
    {
      label: "OpenAI Cookbook GitHub repository",
      href: "https://github.com/openai/openai-cookbook",
    },
    {
      label: "Promptfoo GitHub repository",
      href: "https://github.com/promptfoo/promptfoo",
    },
    {
      label: "MLflow GitHub repository",
      href: "https://github.com/mlflow/mlflow",
    },
    {
      label: "OpenTelemetry GenAI semantic conventions GitHub repository",
      href: "https://github.com/open-telemetry/semantic-conventions-genai",
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
    buildPath: [
      "Create a small docs folder in VS Code and write an ingestion script that loads each file with its URL and title.",
      "Split the documents into chunks, attach metadata, and store embeddings in a local or managed vector index.",
      "Build a query route that retrieves evidence, assembles a citation prompt, and refuses when evidence is missing.",
      "Write retrieval and answer-evaluation cases before changing chunk size, embedding model, reranker, or prompt rules.",
    ],
    capstone: "Build a cited technical-support assistant over a document library.",
    sources: [
      {
        label: "Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        href: "https://arxiv.org/abs/2005.11401",
      },
      {
        label: "LlamaIndex introduction to RAG",
        href: "https://developers.llamaindex.ai/python/framework/understanding/rag/",
      },
      {
        label: "LangChain retrieval documentation",
        href: "https://docs.langchain.com/oss/python/langchain/retrieval",
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
    buildPath: [
      "Open VS Code and create a small TypeScript or Python project with one read-only tool, such as `search_docs` or `get_order_status`.",
      "Define a strict schema for that tool, validate model-requested arguments, and return structured observations.",
      "Wrap the model call in a step-limited loop that can call tools, record traces, handle tool errors, and stop with a final answer.",
      "Add human approval for any write action before you add more tools, memory, handoffs, or multi-agent orchestration.",
    ],
    capstone: "Create a research agent that gathers sources, drafts a plan, and records traceable decisions.",
    sources: [
      {
        label: "Anthropic, Building Effective Agents",
        href: "https://www.anthropic.com/engineering/building-effective-agents",
      },
      {
        label: "OpenAI Agents guide",
        href: "https://platform.openai.com/docs/guides/agents",
      },
      {
        label: "OpenAI Agents SDK docs",
        href: "https://openai.github.io/openai-agents-js/guides/agents/",
      },
      {
        label: "LangGraph overview",
        href: "https://docs.langchain.com/oss/python/langgraph/overview",
      },
      {
        label: "Model Context Protocol introduction",
        href: "https://modelcontextprotocol.io/docs/getting-started/intro",
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
    buildPath: [
      "Collect a small set of high-quality examples that represent the stable behavior you want.",
      "Create train, validation, and test splits, then check for duplicates and sensitive information.",
      "Run a baseline with prompting or RAG first so fine-tuning has a real comparison point.",
      "Fine-tune only after the evaluation set can catch regressions in correctness, style, safety, and cost.",
    ],
    capstone: "Prepare a fine-tuning dataset and evaluation plan for a domain-specific assistant.",
    sources: [
      {
        label: "OpenAI supervised fine-tuning guide",
        href: "https://platform.openai.com/docs/guides/supervised-fine-tuning",
      },
      {
        label: "OpenAI fine-tuning platform update",
        href: "https://openai.com/index/introducing-improvements-to-the-fine-tuning-api-and-expanding-our-custom-models-program/",
      },
      {
        label: "OpenAI fine-tuning API reference",
        href: "https://platform.openai.com/docs/api-reference/fine-tuning",
      },
      {
        label: "Hugging Face PEFT documentation",
        href: "https://huggingface.co/docs/peft/index",
      },
      {
        label: "Hugging Face TRL supervised fine-tuning documentation",
        href: "https://huggingface.co/docs/trl/en/sft_trainer",
      },
      {
        label: "Hugging Face TRL GitHub repository",
        href: "https://github.com/huggingface/trl",
      },
      {
        label: "Axolotl GitHub repository",
        href: "https://github.com/axolotl-ai-cloud/axolotl",
      },
      {
        label: "LLaMA Factory GitHub repository",
        href: "https://github.com/hiyouga/LLaMA-Factory",
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
    buildPath: [
      "Start with one narrow tool contract and document when it should and should not be called.",
      "Validate every argument in code before execution, including IDs, enum values, permissions, and tenant boundaries.",
      "Log tool calls, arguments, validation errors, observations, and final answers for review.",
      "Add reusable skill instructions only after the workflow is stable enough to test repeatedly.",
    ],
    capstone: "Define a tool-use workflow for editing documents without leaking private data.",
    sources: [
      {
        label: "OpenAI function calling guide",
        href: "https://platform.openai.com/docs/guides/function-calling",
      },
      {
        label: "Anthropic tool-use guidance in Building Effective Agents",
        href: "https://www.anthropic.com/engineering/building-effective-agents",
      },
      {
        label: "Model Context Protocol introduction",
        href: "https://modelcontextprotocol.io/docs/getting-started/intro",
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
    buildPath: [
      "Serve one AI workflow behind an API route with explicit model, prompt, and tool versions.",
      "Record latency, token usage, retrieval/tool calls, errors, and user-visible outcomes for every request.",
      "Add caching or batching only after measuring which stage dominates cost or latency.",
      "Create release checks that compare new model, prompt, data, or tool versions against a frozen evaluation set.",
    ],
    capstone: "Design an evaluation and monitoring plan for a production AI assistant.",
    sources: [
      {
        label: "OpenAI production best practices",
        href: "https://platform.openai.com/docs/guides/production-best-practices",
      },
      {
        label: "OpenTelemetry GenAI semantic conventions",
        href: "https://opentelemetry.io/docs/specs/semconv/gen-ai/",
      },
      {
        label: "MLflow GenAI tracing documentation",
        href: "https://www.mlflow.org/docs/latest/genai/tracing/",
      },
      {
        label: "Anthropic evaluation tool documentation",
        href: "https://platform.claude.com/docs/en/test-and-evaluate/eval-tool",
      },
      {
        label: "OpenAI Cookbook GitHub repository",
        href: "https://github.com/openai/openai-cookbook",
      },
      {
        label: "Promptfoo GitHub repository",
        href: "https://github.com/promptfoo/promptfoo",
      },
      {
        label: "MLflow GitHub repository",
        href: "https://github.com/mlflow/mlflow",
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
