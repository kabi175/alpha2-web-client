"use client";
import * as React from "react";

export const FooterLogo: React.FC = () => {
  return (
    <div className="flex flex-col gap-2.5 items-start w-[413px] max-md:w-full">
      <div className="flex gap-40 items-center">
        <div className="relative h-12 w-[102px]">
          <span className="absolute top-0.5 text-3xl font-bold tracking-tight text-blue-400 left-[69px]">
            α
          </span>
          <span className="absolute left-0 top-3 text-4xl font-bold tracking-tighter text-white">
            alph
          </span>
          <span className="absolute top-0 text-lg font-semibold text-blue-400 left-[89px]">
            2
          </span>
        </div>
      </div>
      <p className="text-lg tracking-tight leading-6 text-zinc-400 w-[303px] max-md:w-full">
        Driving your wealth creation with precision and purpose
      </p>
    </div>
  );
};
