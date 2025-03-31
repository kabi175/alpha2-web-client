"use client";
import AlphaSection from "./AlphaSection";
import BarChart from "./elements/chart/BarChart";

export default function SmallAlphaBigImpact() {
  return (
    <AlphaSection>
      <h1 className="text-5xl font-medium tracking-tighter text-center max-md:max-w-full max-md:text-4xl pb-5">
        <span className="font-light">Small</span>{" "}
        <span className="font-semibold italic">Alpha,</span>{" "}
        <span className="font-light">Big</span>{" "}
        <span className="font-semibold italic">Impact</span>{" "}
      </h1>
      <br />
      <h3 className="text-2xl pb-20">
        <span className="font-light">3% alpha over 10 years can </span> <br />
        <span className="font-semibold italic">
          grow your corpus by 30%+
        </span>{" "}
      </h3>
      <BarChart />
    </AlphaSection>
  );
}
