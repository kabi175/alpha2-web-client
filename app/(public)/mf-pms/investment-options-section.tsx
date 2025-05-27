import React from "react";

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
    ["Minimum Investment", "₹50 lakh", "₹20 lakh"],
  ];
  return (
    <section className="p-20">
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-6xl">Investment Options</h1>
          <p className="text-2xl font-normal text-[#8E8E8E] pt-4">
            Pick what suits you — we support both.
          </p>
        </div>

        <div className="grid grid-cols-3">
          {data.map((row, index) => (
            <React.Fragment key={index}>
              {row.map((cell, cellIndex) => (
                <span
                  key={cellIndex}
                  className={`border p-4 text-center font-semibold ${
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
      </div>
    </section>
  );
}
