# Homepage Roadmap Format Design

## Approved Direction

Use a single ordered homepage as the main curriculum surface. Keep the top navigation to Home and Models only. Preserve existing lesson and topic content, but stop promoting redundant tabs in the primary navigation.

## Homepage Structure

The homepage will show the existing academy introduction, then an ordered learning roadmap based on the existing `learningModules` data. Each roadmap item gets an anchor so the page can be skimmed or jumped through quickly.

Add a sticky sidebar titled around topic navigation. The sidebar links to each ordered roadmap section on the homepage, letting readers skip directly to a topic without visiting a separate tab.

Where an existing destination already exists, show a clear click-through link:

- Basics of Transformers links to the Attention lesson.
- RAG Systems links to the RAG topic page.
- Agents and Tool Use links to the Agents and Skills topic pages.
- Fine-Tuning links to the Fine-Tuning topic page.
- AI Systems links to the AI Infrastructure topic page.

Modules without a dedicated page remain visible in order using existing module content.

## Navigation

The site header will contain:

- Brand link to `/`.
- Home link to `/`.
- Models link to `/models`.

The Curriculum, Attention, and Topics tabs will be removed from visible navigation.

## Constraints

This is a format-only change. Do not rewrite lessons, topic descriptions, source lists, model descriptions, or curriculum content.

## Verification

Run lint and typecheck. Preview the homepage and models page in a browser-sized viewport and check that the sidebar works on desktop and collapses cleanly on mobile.
