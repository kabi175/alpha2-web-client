import React from "react";
import Section from "./section";
import { Button } from "@/components/ui/button";

export default function InvestmentOptionsSection() {
  const data = [
    ["Parameters", "PMS", "MF - PMS"],
    [
      "Stock Selection",
      "Precise, by fund manager",
      "Regular funds resembling PMS",
    ],
    ["Returns (CAGR)", "Higher", "Similar to PMS"],
    [
      "Rebalancing",
      "Done by fund manager",
      "Done by investor based on recommendations",
    ],
    [
      "Fees",
      "Only on outperformance over Nifty50",
      "~0.5% higher expense ratio (indirect fee)",
    ],
    [
      "Account Setup",
      "PMS agreement + Demat account",
      "New MF account under new ARN code",
    ],
    ["SIP Amount", "Multiples of ₹1 lakh", "Starts from ₹500"],
    ["Minimum Investment", "₹50 lakh", "₹5 lakh"],
  ];
  return (
    <Section>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-4xl lg:text-6xl">
            Investment Options
          </h1>
          <p className="text-xl lg:text-2xl font-normal text-[#8E8E8E] pt-4">
            Pick what suits you — we support both.
          </p>
        </div>

        <div className="grid grid-cols-3">
          {data.map((row, index) => (
            <React.Fragment key={index}>
              {row.map((cell, cellIndex) => (
                <span
                  key={cellIndex}
                  className={`border p-2 lg:p-4 text-sm lg:text-base text-center font-semibold ${
                    index == 0 && cellIndex == 0 && "text-[#848484]"
                  }
                    ${index % 2 == 0 && "bg-[#151515]"}`}
                >
                  {cell}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <div className="relative bg-[#151515] rounded-2xl w-full lg:w-2/3 px-8 py-12 flex items-center justify-center overflow-hidden">
            <div className="absolute right-0 top-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,123,255,0.6)_0%,_transparent_80%)] z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-0">
                <span className="block">
                  Start your <span className="text-gray-300">MF - PMS</span>
                </span>
                <span className="block text-gray-300">Journey Today</span>
              </h1>
              <Button
                variant="default"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-6 py-7 rounded-lg transition"
              >
                Schedule a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
