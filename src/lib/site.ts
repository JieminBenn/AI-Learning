export const siteConfig = {
  name: "AI Engineering Mastery",
  url: "https://www.ailearning-engineering.com",
  description:
    "A beginner-friendly AI engineering curriculum for learning Transformers, large language models, RAG, AI agents, fine-tuning, model literacy, and production AI infrastructure from first principles.",
  author: "Jiemin Benn",
  keywords: [
    "AI engineering",
    "AI engineering curriculum",
    "learn AI engineering",
    "learn artificial intelligence",
    "machine learning engineering",
    "large language models",
    "LLM engineering",
    "Transformers",
    "Attention Is All You Need",
    "retrieval augmented generation",
    "RAG",
    "AI agents",
    "fine-tuning",
    "AI infrastructure",
    "model literacy",
    "prompt engineering",
  ],
} as const;

export function getSiteUrl(path = "") {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
