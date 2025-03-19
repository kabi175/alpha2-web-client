import React from "react";

interface ChevronIconProps {
  direction: "up" | "down";
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({ direction }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[20px] h-[20px]"
    >
      <path
        d={
          direction === "up"
            ? "M15 12.5L10 7.5L5 12.5"
            : "M5 7.5L10 12.5L15 7.5"
        }
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
