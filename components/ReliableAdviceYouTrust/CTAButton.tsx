import * as React from "react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="overflow-hidden gap-2 self-stretch px-9 py-4 bg-blue-600 rounded-2xl min-w-60 text-xl font-semibold tracking-tighter text-white max-md:px-5 hover:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
};
