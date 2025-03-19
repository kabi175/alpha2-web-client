"use client";

import React from "react";
import { FaqItem } from "./FaqItem";

const faqData = [
  {
    question: "Are the returns post fees?",
    answer:
      "All returns mentioned on our website are pre-tax i.e., post all fees, commissions, charges etc.",
  },
  {
    question: "What is your fee structure?",
    answer: "",
  },
  {
    question: "How are PMS taxed?",
    answer: "",
  },
  {
    question: "What is the minimum ticket size of PMS?",
    answer: "",
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start pt-24 pr-60 pb-36 pl-60 w-full bg-neutral-950 min-h-[screen] max-md:px-32 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="flex flex-col gap-12 items-start w-full max-w-[1036px]">
        <h1 className="text-5xl font-medium tracking-tighter leading-normal text-white max-md:text-4xl max-sm:text-3xl">
          FAQs
        </h1>
        <div className="flex flex-col gap-4 justify-center items-start w-full">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
