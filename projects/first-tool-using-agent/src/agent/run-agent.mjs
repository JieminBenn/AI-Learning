import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createTrace, record } from "./trace.mjs";
import { searchDocs } from "./tools.mjs";

const root = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const tasks = readFileSync(join(root, "evals", "agent_tasks.jsonl"), "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));

function modelDecision(goal) {
  if (/refund|legal|policy/i.test(goal)) {
    return { type: "tool", name: "search_docs", arguments: { query: goal } };
  }
  return { type: "final", answer: "Hello. I can help with support policy questions." };
}

function runAgent(goal) {
  const trace = createTrace(goal);
  const decision = modelDecision(goal);
  record(trace, { type: "model_decision", decision });

  if (decision.type === "tool") {
    const observation = searchDocs(decision.arguments);
    record(trace, { type: "tool_result", tool: decision.name, observation });
    trace.stopReason = "answered_after_tool";
    return { answer: observation ? `${observation.title}: ${observation.text}` : "No matching source.", trace };
  }

  trace.stopReason = "answered_directly";
  return { answer: decision.answer, trace };
}

let failures = 0;

for (const task of tasks) {
  const result = runAgent(task.goal);
  const calledTool = result.trace.steps.some((step) => step.type === "tool_result");
  const pass = calledTool === task.shouldCallTool;
  failures += pass ? 0 : 1;
  console.log(`${pass ? "PASS" : "FAIL"} ${task.goal}`);
  console.log(JSON.stringify(result.trace, null, 2));
}

if (failures > 0) process.exitCode = 1;
