import React from "react";
import Section from "./section";

export default function SomeMissesSection() {
  const data = [
    ["12 Months Ended", "MF - PMS", "Nifty 50", "Under Performance"],
    ["Feb - 2010", "53.55%", "81.70%", "-28.15%"],
    ["Dec - 2015", "-17.94%", "-4.06%", "-13.88%"],
    ["Feb - 2017", "23.39%", "27.09%", "-3.70%"],
    ["Apr - 2019", "-13.70%", "9.61%", "-23.31%"],
  ];
  return (
    <Section>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-4xl lg:text-6xl">Some Misses</h1>
          <p className="text-xl lg:text-2xl font-normal text-[#8E8E8E] pt-4">
            Performance may lag intermittently due to subdued returns from
            sectors selected by the model
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {data.map((row, index) => (
            <React.Fragment key={index}>
              {row.map((cell, cellIndex) => (
                <span
                  key={cellIndex}
                  className={`border p-2 lg:p-4 text-center font-semibold
                    truncate
                    ${(cellIndex == 0 || cellIndex == 2) && "bg-[#151515]"}
                    ${cellIndex == 1 && "bg-[#025AE3]"}
                    ${cellIndex == 3 && "bg-[#262626]"}
                    `}
                >
                  {cell}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>

        <p className="text-[#C2C2C2] text-lg lg:text-xl">
          Intermittent periods of underperformance cannot be ruled out and are
          part of the investment process.
        </p>
      </div>
    </Section>
  );
}
