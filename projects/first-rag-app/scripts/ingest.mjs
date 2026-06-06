import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

export function tokenize(text) {
  return text.toLowerCase().match(/[a-z0-9]+/g) ?? [];
}

export function loadChunks() {
  return readdirSync(join(root, "docs"))
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const text = readFileSync(join(root, "docs", file), "utf8");
      const title = text.match(/^#\s+(.+)$/m)?.[1] ?? file;
      return {
        id: file.replace(".md", ""),
        title,
        text,
        tokens: new Set(tokenize(text)),
      };
    });
}
