"use client";

import React from "react";

export const PMSLabel: React.FC = () => {
  return (
    <div className="flex gap-1.5 px-5 py-2 font-medium bg-gray-200 rounded-3xl text-neutral-900">
      <div className="grow">PMS with</div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9755d0c2ccae20908e5c3a0f3f240c5a2019b2f9?placeholderIfAbsent=true&apiKey=3367d7b69182472e81ac3d76b6b41515"
        className="object-contain shrink-0 rounded-3xl aspect-[2.48] w-[57px]"
        alt="PMS Logo"
      />
    </div>
  );
};
