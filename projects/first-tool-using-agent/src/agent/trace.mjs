export function createTrace(goal) {
  return { goal, steps: [], stopReason: null };
}

export function record(trace, event) {
  trace.steps.push({ at: new Date().toISOString(), ...event });
}
