import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import React from "react";

export default function ProblemSection() {
  const problems = [
    {
      title: "Largecap Underperformance",
      description:
        "Less than 30% of top 5 large-cap funds retain their rank year-over-year",
    },
    {
      title: "Survivorship Bias",
      description:
        "Most MF investments are done basis recent performance/ themes which produces mediocre portfolio level returns",
    },
    {
      title: "Midcap Volatility",
      description:
        "Midcap mutual funds deliver strong alpha in bull-runs but fall significantly during downturns",
    },
  ];
  return (
    <section className="p-20">
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-6xl">The Problem</h1>
          <p className="text-2xl font-normal text-[#8E8E8E] pt-4">
            Too many MFs dilute portfolio performance. Poor rebalancing worsens
            downside.
          </p>
        </div>

        <div className="flex gap-4 justify-between">
          {problems.map((problem, index) => (
            <React.Fragment key={index}>
              {index != 0 && <span className="w-1 bg-[#393939]" />}
              <Problems
                title={problem.title}
                description={problem.description}
              />
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-center">
          <Card className="relative bg-[#151515] border-none w-[1300px]">
            <div className="absolute top-[-10] right-[-10] bg-[#111] p-2 rounded-full flex justify-center items-center">
              <div className="bg-[#025AE3] rounded-full p-1 size-[52px] flex justify-center items-center">
                <Check size={20} color="#f5f5f5" />
              </div>
            </div>
            <CardContent className="flex gap-4">
              <span className="font-semibold text-6xl bg-[#166EF5] rounded-xl p-8 w-[360px]">
                The Solution
              </span>
              <div className="flex flex-col justify-around text-2xl font-normal mx-8">
                <p>
                  Invest in curated basket of Mutual Funds that closely resemble
                  investment strategy of PMS.
                </p>
                <p>
                  Reduce drawdown and amplify returns with smart allocation and
                  timely rebalancing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const Problems = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="w-[320px]">
    <h3 className="font-medium text-3xl">{title}</h3>
    <p className="text-xl text-[#8E8E8E] pt-4">{description}</p>
  </div>
);
