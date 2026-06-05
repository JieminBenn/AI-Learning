# AI Professional Learning Website Guidance

This project teaches AI engineering, machine learning engineering, AI infrastructure, agents, RAG, fine-tuning, and model literacy to readers who may have no prior foundation.

## Teaching Standard

- Assume the reader starts from zero. Define each technical term before relying on it.
- Move from intuition to formalism: plain-language explanation, concrete example, diagram, then equations or implementation details.
- Include professional context: why the topic matters in real AI engineering work, what can go wrong, and how practitioners evaluate tradeoffs.
- Use primary sources whenever possible: original papers, official docs, API references, and model/system documentation.
- Teach with enough detail that a motivated beginner can reconstruct the topic, not just recognize the vocabulary.
- When a lesson is based on a paper, guide the student through the paper's argument, architecture, equations, experiments, and conclusions section by section.
- For future topics without an uploaded source, search for strong online sources before writing: original papers, official documentation, benchmark reports, implementation references, and respected technical explainers. Prefer primary sources over summaries.
- Do not leave important claims as unsupported assertions. Explain the reasoning, give a concrete example, and cite the source that justifies the claim.
- Prefer clear diagrams, tables, math blocks, and short checks for understanding over dense prose.
- Explain every equation symbol directly near the equation.
- Include code examples when they help the learner reconstruct the idea in practice. Keep beginner-facing code small, annotated, and tied directly to the concept being taught; avoid code when it would distract from a paper-reading or conceptual lesson.
- Add additional resources for implementation whenever plausible: GitHub repositories, official example notebooks, API examples, reference implementations, or runnable demos. Prefer maintained primary or official examples over random snippets.
- Avoid unexplained acronyms. Write the full phrase first, then introduce the acronym.
- Do not present a topic as complete unless the learner can explain it, reason about failure modes, and identify where it appears in production systems.

## Content Shape

Every major lesson should include:

- Learning objectives.
- Prerequisites written for beginners.
- A glossary of essential terms.
- Step-by-step intuition.
- Diagrams or structured visual explanations.
- Equations where the topic requires math.
- Implementation or systems context.
- Code examples where the topic benefits from seeing the idea executed.
- Common misconceptions.
- Practice checks.
- Primary-source citations.
- Additional implementation resources, especially official docs, GitHub repositories, notebooks, or examples.

## Code Change Verification

- Whenever a user request or command results in code, content, data, styling, configuration, or behavior changes, verify the change before calling it complete.
- The verification must be appropriate to the change: run type checks, lint, tests, builds, local render checks, browser checks, or targeted content checks when they apply.
- After verification, review the changed work against the user's goal and this project's zero-to-professional teaching standard: it should be correct, bug-resistant, beginner-accessible, professionally useful, and aligned with the intended learning outcome.
- Do not present a code-changing task as finished until you have checked that it achieves the requested goal, looked for likely bugs or regressions, and reported any verification that could not be completed.

## Scope Discipline

The first milestone is an MVP curriculum, not a finished encyclopedia. The "Attention Is All You Need" lesson is the depth benchmark. Other topic hubs may be scaffolded, but they should clearly state the intended professional outcomes and future lesson path.
