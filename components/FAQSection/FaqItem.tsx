"use client";

import React, { useState } from "react";
import { ChevronIcon } from "./ChevronIcon";

interface FaqItemProps {
  question: string;
  answer?: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="flex flex-col gap-2 items-start w-full rounded-2xl bg-zinc-900 bg-opacity-70">
      <button
        className="flex justify-between items-center w-full p-6"
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        aria-controls={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <h2 className="text-base font-bold leading-6 text-white text-left">
          {question.startsWith("Q.") ? question : `Q. ${question}`}
        </h2>
        <ChevronIcon direction={isExpanded ? "up" : "down"} />
      </button>
      {isExpanded && answer && (
        <div
          id={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
          className="px-6 pb-6 w-full text-base leading-6 text-white"
        >
          {answer.startsWith("A.") ? answer : `A. ${answer}`}
        </div>
      )}
    </article>
  );
};
