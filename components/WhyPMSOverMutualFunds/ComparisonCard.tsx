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
      <div className="pr-14 w-full  rounded-3xl max-md:pr-5 max-md:max-w-full">
        <div className="flex items-center gap-5 max-md:flex-col">
          <div className="w-1/2 h-[185px] max-md:ml-0 max-md:w-full">
            <div className="flex grow h-full">
              <div className="flex flex-col grow shrink-0 items-start py-6 pr-16 pl-8 text-lg  basis-0 bg-gradient-to-r to-[##000000] from-[#4A9EFF4D] w-fit max-md:px-5">
                {showLabel && <PMSLabel />}
                <p className="mt-5 text-zinc-300 w-[271px]">{pmsDescription}</p>
              </div>
            </div>
          </div>
          <Image src={image} width={62} height={62} alt="VsCircle" />
          <div className="w-1/2 h-[185px] max-md:ml-0 max-md:w-full">
            <div className="flex grow max-md:mt-7 h-full">
              <div className="flex flex-col grow shrink-0 items-start py-6 pr-16 pl-8 text-lg  basis-0 bg-gradient-to-r from-[##000000] to-[#4A9EFF4D] w-fit max-md:px-5">
                {showLabel && <MutualFundLabel />}
                <p className="mt-5 text-zinc-300 w-[271px]">
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
