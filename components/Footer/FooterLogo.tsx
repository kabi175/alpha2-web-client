"use client";
import Image from "next/image";
import * as React from "react";

export const FooterLogo: React.FC = () => {
  return (
    <div className="flex flex-col gap-2.5 items-start w-[413px] max-md:w-full">
      <div className="flex gap-40 items-center">
        <Image src="/logo.svg" alt="Alpha2 Logo" width={102} height={48} />
      </div>
      <p className="text-lg tracking-tight leading-6 text-zinc-400 w-[303px] max-md:w-full">
        We specialize in identifying the right PMS for you—driven by data, defined by your persona
      </p>
    </div>
  );
};
