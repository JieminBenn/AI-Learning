import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { addSpan, finishTrace, startTrace } from "../src/observability/trace.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const cases = readFileSync(join(root, "evals", "release_gate.jsonl"), "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));

function mockWorkflow(input) {
  if (/45 days/i.test(input)) return "Refunds after 30 days require finance approval.";
  if (/cafeteria/i.test(input)) return "I do not have enough source evidence to answer.";
  if (/subpoena/i.test(input)) return "Subpoena requests must be escalated to legal.";
  return "I do not have enough source evidence to answer.";
}

let failures = 0;
for (const testCase of cases) {
  const trace = startTrace(testCase.input);
  addSpan(trace, "prompt", { promptVersion: trace.promptVersion });
  const output = mockWorkflow(testCase.input);
  const completed = finishTrace(trace, output, 0.001);
  const qualityPass = testCase.mustInclude.every((term) => output.toLowerCase().includes(term.toLowerCase()));
  const latencyPass = completed.latencyMs <= testCase.maxLatencyMs;
  const costPass = completed.costUsd <= testCase.maxCostUsd;
  const pass = qualityPass && latencyPass && costPass;
  failures += pass ? 0 : 1;
  console.log(`${pass ? "PASS" : "FAIL"} ${testCase.id}`);
  console.log(JSON.stringify(completed, null, 2));
}

console.log(`\nRelease gate: ${failures === 0 ? "PASS" : "FAIL"}`);
if (failures > 0) process.exitCode = 1;
