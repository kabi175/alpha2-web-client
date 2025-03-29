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
              pmsDescription="Actively managed, aiming for market-beating returns. (Historical CAGR: 15-25%*)"
              mutualFundDescription="Returns diluted due to diversification. (Historical CAGR: 10-15%*)"
            />
          </div>
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ComparisonCard
              pmsDescription="Actively managed, aiming for market-beating returns. (Historical CAGR: 15-25%*)"
              mutualFundDescription="Returns diluted due to diversification. (Historical CAGR: 10-15%*)"
            />
          </div>
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ComparisonCard
              pmsDescription="Actively managed, aiming for market-beating returns. (Historical CAGR: 15-25%*)"
              mutualFundDescription="Returns diluted due to diversification. (Historical CAGR: 10-15%*)"
            />
          </div>
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ComparisonCard
              pmsDescription="Actively managed, aiming for market-beating returns. (Historical CAGR: 15-25%*)"
              mutualFundDescription="Returns diluted due to diversification. (Historical CAGR: 10-15%*)"
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
