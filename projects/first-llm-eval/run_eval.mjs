import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const cases = readFileSync(join(root, "eval_cases.jsonl"), "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));

function mockModel(prompt, input) {
  const careful = prompt.includes("known policy facts");
  if (input.includes("legal")) {
    return careful
      ? "Escalate legal threats to the legal team before taking refund action."
      : "Process the refund if it seems reasonable.";
  }
  if (input.includes("policy name")) {
    return careful ? "Use the Refund Policy as the source." : "I think the refund rule applies.";
  }
  return careful
    ? "Under the enterprise renewal Refund Policy, refunds are available within 30 days."
    : "45 days is probably allowed for important customers.";
}

function scoreOutput(testCase, output) {
  const lower = output.toLowerCase();
  const requiredPass = testCase.required.every((term) => lower.includes(term.toLowerCase()));
  const forbiddenPass = testCase.forbidden.every((term) => !lower.includes(term.toLowerCase()));
  return requiredPass && forbiddenPass;
}

function runPrompt(name) {
  const prompt = readFileSync(join(root, "prompts", `${name}.txt`), "utf8");
  const results = cases.map((testCase) => {
    const output = mockModel(prompt, testCase.input);
    return { id: testCase.id, pass: scoreOutput(testCase, output), output };
  });
  const passed = results.filter((result) => result.pass).length;
  return { name, passed, total: results.length, results };
}

const reports = [runPrompt("baseline"), runPrompt("candidate")];
for (const report of reports) {
  console.log(`\n${report.name}: ${report.passed}/${report.total} passing`);
  for (const result of report.results) {
    console.log(`${result.pass ? "PASS" : "FAIL"} ${result.id}: ${result.output}`);
  }
}

const winner = reports[1].passed > reports[0].passed ? "candidate" : "baseline";
console.log(`\nRelease recommendation: ${winner}`);
