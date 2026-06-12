export const siteConfig = {
  name: "AI Engineering Mastery",
  url: "https://www.ailearning-engineering.com",
  description:
    "A job-focused AI engineering curriculum for learning the practical skills needed to build real AI systems without unnecessary detours.",
  author: "Jiemin Benn",
  keywords: [
    "AI engineering",
    "AI engineering curriculum",
    "learn AI engineering",
    "job-focused AI learning",
    "AI skills for jobs",
    "practical AI engineering",
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
