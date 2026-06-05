type EquationBlockProps = {
  title: string;
  equation: string;
  children: React.ReactNode;
};

export function EquationBlock({ title, equation, children }: EquationBlockProps) {
  return (
    <section className="equation-block" aria-label={title}>
      <div className="equation-block__label">{title}</div>
      <pre className="equation-block__formula">
        <code>{equation}</code>
      </pre>
      <div className="equation-block__body">{children}</div>
    </section>
  );
}
