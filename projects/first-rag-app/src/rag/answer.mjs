import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { retrieve } from "./retrieve.mjs";

const root = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const cases = readFileSync(join(root, "evals", "rag_cases.jsonl"), "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));

function answer(question) {
  const evidence = retrieve(question, 1)[0];
  if (!evidence || evidence.score < 0.2) {
    return { answer: "I do not have enough source evidence to answer.", source: null };
  }
  return {
    answer: `Based on ${evidence.title}: ${evidence.text.replace(/^#.+\n\n/s, "").trim()}`,
    source: evidence.title,
  };
}

let failures = 0;

for (const testCase of cases) {
  const result = answer(testCase.question);
  const pass = result.source === testCase.expectedSource;
  failures += pass ? 0 : 1;
  console.log(`${pass ? "PASS" : "FAIL"} ${testCase.question}`);
  console.log(`  source: ${result.source ?? "none"}`);
  console.log(`  answer: ${result.answer}`);
}

if (failures > 0) process.exitCode = 1;
