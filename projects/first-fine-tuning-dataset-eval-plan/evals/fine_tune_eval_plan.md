# Fine-Tuning Eval Plan

Baseline: current prompt-only support assistant.

Candidate: fine-tuned support assistant trained on approved examples.

No-ship threshold: do not ship if test accuracy falls below the baseline, if escalation examples fail, or if any answer invents unsupported policy details.

Rollback: return traffic to the baseline prompt and keep the failed candidate for error review.
