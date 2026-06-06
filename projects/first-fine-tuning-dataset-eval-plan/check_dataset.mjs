import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const rows = readFileSync(join(root, "data", "examples.jsonl"), "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));
const splits = JSON.parse(readFileSync(join(root, "data", "splits.json"), "utf8"));

const required = ["id", "split", "category", "input", "ideal_output", "review_status"];
const ids = new Set();
let failures = 0;

for (const row of rows) {
  const missing = required.filter((field) => !row[field]);
  if (missing.length > 0) {
    console.log(`FAIL ${row.id ?? "unknown"} missing ${missing.join(", ")}`);
    failures += 1;
  }
  if (ids.has(row.id)) {
    console.log(`FAIL duplicate id ${row.id}`);
    failures += 1;
  }
  ids.add(row.id);
}

for (const [split, splitIds] of Object.entries(splits)) {
  for (const id of splitIds) {
    const row = rows.find((candidate) => candidate.id === id);
    if (!row || row.split !== split) {
      console.log(`FAIL split mismatch for ${id}`);
      failures += 1;
    }
  }
}

console.log(`${failures === 0 ? "PASS" : "FAIL"} dataset check with ${rows.length} examples`);
if (failures > 0) process.exitCode = 1;
