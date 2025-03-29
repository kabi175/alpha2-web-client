"use client";

import React from "react";
import { PMSLabel } from "./PMSLabel";
import { MutualFundLabel } from "./MutualFundLabel";
import { VsCircle } from "./VsCircle";

interface ComparisonCardProps {
  pmsDescription: string;
  mutualFundDescription: string;
  showLabel?: boolean;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  pmsDescription,
  mutualFundDescription,
  showLabel = false,
}) => {
  return (
    <article className="overflow-hidden w-full rounded-3xl max-md:mt-8 max-md:max-w-full">
      <div className="pr-14 w-full  rounded-3xl max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-1/2 h-[185px] max-md:ml-0 max-md:w-full">
            <div className="flex grow max-md:mt-7">
              <div className="flex flex-col grow shrink-0 items-start py-6 pr-16 pl-8 text-lg  basis-0 bg-stone-900 w-fit max-md:px-5">
                {showLabel && <PMSLabel />}
                <p className="mt-5 text-zinc-300 w-[271px]">{pmsDescription}</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[185px] max-md:ml-0 max-md:w-full">
            <div className="flex grow max-md:mt-7">
              <div className="flex flex-col grow shrink-0 items-start py-6 pr-16 pl-8 text-lg  basis-0 bg-stone-900 w-fit max-md:px-5">
                {showLabel && <MutualFundLabel />}
                <p className="mt-5 text-zinc-300 w-[271px]">
                  {mutualFundDescription}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="ml-5 w-[363px] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-lg max-md:mt-10 pl-8">
              {showLabel && <MutualFundLabel />}
              <p className="mt-4 text-neutral-300">{mutualFundDescription}</p>
            </div>
          </div> */}
        </div>
      </div>
    </article>
  );
};

// VsCircle
