import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className="lesson-heading">{children}</h2>,
    h3: ({ children }) => <h3 className="lesson-subheading">{children}</h3>,
    p: ({ children }) => <p className="lesson-paragraph">{children}</p>,
    ul: ({ children }) => <ul className="lesson-list">{children}</ul>,
    ol: ({ children }) => <ol className="lesson-list ordered">{children}</ol>,
    ...components,
  };
}
