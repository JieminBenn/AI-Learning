import { CheckCircle2 } from "lucide-react";

type LearningModuleCardProps = {
  title: string;
  category: string;
  description: string;
  usedIn: string[];
  milestones: string[];
};

export function LearningModuleCard({
  title,
  category,
  description,
  usedIn,
  milestones,
}: LearningModuleCardProps) {
  return (
    <article className="learning-card">
      <div className="learning-card__header">
        <h3>{title}</h3>
        <span>{category}</span>
      </div>
      <p>{description}</p>
      <div className="learning-card__used-in" aria-label={`${title} is used in`}>
        {usedIn.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <ul>
        {milestones.map((milestone) => (
          <li key={milestone}>
            <CheckCircle2 aria-hidden="true" size={16} />
            {milestone}
          </li>
        ))}
      </ul>
    </article>
  );
}
