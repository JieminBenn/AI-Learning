"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type CheckUnderstandingProps = {
  prompt: string;
  children: React.ReactNode;
};

export function CheckUnderstanding({ prompt, children }: CheckUnderstandingProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="check">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{prompt}</span>
        <ChevronDown aria-hidden="true" size={18} />
      </button>
      {open ? <div className="check__body">{children}</div> : null}
    </section>
  );
}
