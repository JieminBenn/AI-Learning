import { GraduationCap, Target } from "lucide-react";
import type { LessonMeta } from "@/data/curriculum";

type LessonShellProps = {
  meta: LessonMeta;
  children: React.ReactNode;
};

export function LessonShell({ meta, children }: LessonShellProps) {
  return (
    <main className="lesson-shell">
      <aside className="lesson-sidebar" aria-label="Lesson overview">
        <div>
          <span className="eyebrow">Deep lesson</span>
          <h1>{meta.title}</h1>
        </div>
        <div className="lesson-facts">
          <span>
            <GraduationCap aria-hidden="true" size={16} />
            {meta.level}
          </span>
        </div>
        <section>
          <h2>Learning objectives</h2>
          <ul>
            {meta.objectives.map((objective) => (
              <li key={objective}>
                <Target aria-hidden="true" size={15} />
                {objective}
              </li>
            ))}
          </ul>
        </section>
      </aside>
      <article className="lesson-content">{children}</article>
    </main>
  );
}
