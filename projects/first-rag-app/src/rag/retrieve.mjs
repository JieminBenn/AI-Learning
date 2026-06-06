import { loadChunks, tokenize } from "../../scripts/ingest.mjs";

export function retrieve(question, topK = 2) {
  const queryTokens = new Set(tokenize(question));
  const stopWords = new Set(["a", "an", "the", "is", "to", "do", "with", "what", "should", "can"]);
  const usefulQueryTokens = [...queryTokens].filter((token) => !stopWords.has(token));
  return loadChunks()
    .map((chunk) => {
      const overlap = usefulQueryTokens.filter((token) => chunk.tokens.has(token)).length;
      return { ...chunk, score: overlap / Math.max(usefulQueryTokens.length, 1) };
    })
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
