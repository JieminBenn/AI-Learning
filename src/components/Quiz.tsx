"use client";

import { useState } from "react";
import { CheckCircle2, Circle, RotateCcw } from "lucide-react";

type QuizProps = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export function Quiz({ question, options, correctIndex, explanation }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  return (
    <section className="quiz" aria-label="Practice question">
      <h3>{question}</h3>
      <div className="quiz__options">
        {options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrect = answered && index === correctIndex;
          return (
            <button
              className="quiz__option"
              data-selected={isSelected}
              data-correct={isCorrect}
              key={option}
              onClick={() => setSelected(index)}
              type="button"
            >
              {isCorrect ? (
                <CheckCircle2 aria-hidden="true" size={18} />
              ) : (
                <Circle aria-hidden="true" size={18} />
              )}
              <span>{option}</span>
            </button>
          );
        })}
      </div>
      {answered ? (
        <div className="quiz__feedback">
          <strong>{selected === correctIndex ? "Correct." : "Not quite."}</strong> {explanation}
          <button type="button" onClick={() => setSelected(null)}>
            <RotateCcw aria-hidden="true" size={16} />
            Reset
          </button>
        </div>
      ) : null}
    </section>
  );
}
