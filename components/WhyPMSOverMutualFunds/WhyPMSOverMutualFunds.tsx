"use client";

import React from "react";
import { ComparisonCard } from "./ComparisonCard";
import ConnectWithExpert from "@/components/elements/button/ConnectWithExpert";

const WhyPMSOverMutualFunds: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col px-20 pt-28 pb-14 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <h1 className=" text-6xl font-medium tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
          <span className="font-extralight">Why</span> PMS{" "}
          <span className="font-extralight">over</span> Mutual Funds
        </h1>

        <div className="mt-24 max-md:mt-10 max-md:max-w-full flex flex-col gap-5 items-center">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ComparisonCard
              showLabel
              image="/fund-money.svg"
              pmsDescription="Higher CAGR by 3-5% and lower drawdown"
              mutualFundDescription="More drawdown during downturns"
            />
          </div>
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ComparisonCard
              image="/med-box-money.svg"
              pmsDescription="PMS can swiftly adjust positions and take cash calls to safeguard alpha during market downturns"
              mutualFundDescription="MFs must maintain at least 65% in equities by regulation even during corrections & bear markets"
            />
          </div>
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ComparisonCard
              image="/fund-growth.svg"
              pmsDescription="PMS managers face no caps on stock or sector exposure"
              mutualFundDescription="MFs are bound by a 10% per-stock limit, often forcing exits from top-performing stocks"
            />
          </div>
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ComparisonCard
              image="/percent.svg"
              pmsDescription="PMS emphasizes deep research and strategic stock selection"
              mutualFundDescription="MFs prioritize mass distribution — HDFC AMC operates 84 funds with just 37 researchers among 2,000+ employees"
            />
          </div>
        </div>

        <div className="flex items-start self-center mt-12 text-xl font-semibold tracking-tighter text-center text-white max-md:mt-10">
          <ConnectWithExpert />
        </div>
      </div>
    </section>
  );
};

export default WhyPMSOverMutualFunds;
