"use client";

import React from "react";
import { PMSLabel } from "./PMSLabel";
import { MutualFundLabel } from "./MutualFundLabel";
import Image from "next/image";

interface ComparisonCardProps {
  pmsDescription: string;
  mutualFundDescription: string;
  image: string;
  showLabel?: boolean;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  pmsDescription,
  mutualFundDescription,
  image,
  showLabel = false,
}) => {
  return (
    <article className="overflow-hidden w-full rounded-3xl max-md:mt-8 max-md:max-w-full">
      <div className="w-full  rounded-3xl max-md:pr-5 max-md:max-w-full">
        <div className="flex items-center justify-between max-md:flex-col">
          <div className="w-2/5 min-h-[185px] md:h-[185px] max-md:ml-0 max-md:w-full">
            <div className="flex grow h-full">
              <div className="flex flex-col grow items-center py-6 pr-16 pl-8 text-lg  basis-0 bg-gradient-to-r max-md:bg-gradient-to-b to-[rgba(30, 30, 30, 0.55)] from-[#4A9EFF4D]  max-md:px-5 rounded-3xl">
                {showLabel && <PMSLabel />}
                <p className="mt-5 text-zinc-300 text-base lg:text-lg">
                  {pmsDescription}
                </p>
              </div>
            </div>
          </div>
          <Image src={image} width={62} height={62} alt="VsCircle" />
          <div className="w-2/5 min-h-[185px] md:h-[185px] max-md:ml-0 max-md:w-full">
            <div className="flex grow h-full">
              <div className="flex flex-col grow items-center py-6 pr-16 pl-8 text-lg  basis-0 bg-gradient-to-r max-md:bg-gradient-to-b from-[rgba(30, 30, 30, 0.55)] to-[#4A9EFF4D]  max-md:px-5 rounded-3xl">
                {showLabel && <MutualFundLabel />}
                <p className="mt-5 text-zinc-300 text-base lg:text-lg">
                  {mutualFundDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

// VsCircle
