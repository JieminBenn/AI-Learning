const docs = [
  { title: "Refund Policy", text: "Enterprise renewals are refundable for 30 days." },
  { title: "Security Policy", text: "Legal threats must be escalated to legal." },
];

export function validateSearchArgs(args) {
  if (!args || typeof args.query !== "string" || args.query.trim().length < 3) {
    throw new Error("search_docs requires a query string with at least 3 characters.");
  }
  return { query: args.query.trim() };
}

export function searchDocs(args) {
  const { query } = validateSearchArgs(args);
  const tokens = query.toLowerCase().split(/\W+/).filter(Boolean);
  const match = docs.find((doc) => tokens.some((token) => doc.text.toLowerCase().includes(token)));
  return match ?? null;
}
