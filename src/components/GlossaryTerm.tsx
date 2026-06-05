type GlossaryTermProps = {
  term: string;
  children: React.ReactNode;
};

export function GlossaryTerm({ term, children }: GlossaryTermProps) {
  return (
    <span className="glossary-term">
      <strong>{term}</strong>
      <span aria-hidden="true">: </span>
      <span className="glossary-term__definition">{children}</span>
    </span>
  );
}
