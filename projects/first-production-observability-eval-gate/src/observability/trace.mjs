export function startTrace(input) {
  return {
    requestId: `req_${Math.random().toString(36).slice(2, 8)}`,
    input,
    modelVersion: "mock-model-v1",
    promptVersion: "support-policy-v1",
    startedAt: Date.now(),
    spans: [],
  };
}

export function addSpan(trace, name, fields) {
  trace.spans.push({ name, ...fields });
}

export function finishTrace(trace, output, costUsd) {
  return {
    ...trace,
    output,
    costUsd,
    latencyMs: Date.now() - trace.startedAt,
    status: "completed",
  };
}
