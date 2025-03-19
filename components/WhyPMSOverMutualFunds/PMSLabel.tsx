"use client";

import Image from "next/image";
import React from "react";

export const PMSLabel: React.FC = () => {
  return (
    <div className="flex gap-1.5 px-5 py-2 font-medium bg-gray-200 rounded-3xl text-neutral-900">
      <div className="grow">PMS with</div>
      <Image src="/logo-black.svg" width={57} height={57} alt="alpha2 logo" />
    </div>
  );
};
