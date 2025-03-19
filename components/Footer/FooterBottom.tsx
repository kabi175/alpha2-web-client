"use client";
import * as React from "react";

export const FooterBottom: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-28 max-md:px-16 max-sm:flex-col max-sm:gap-2.5 max-sm:items-start max-sm:px-5">
      <p className="text-sm text-zinc-400">
        copyright 2025 Alpha2 All Rights Reserved
      </p>
      <div className="flex gap-2 items-center">
        <p className="text-sm text-zinc-400">
          This page uses cookies. See cookies details here
        </p>
        <div className="h-px bg-zinc-400 w-[30px]" />
      </div>
    </div>
  );
};
