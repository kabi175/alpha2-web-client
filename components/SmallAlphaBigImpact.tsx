"use client";
import { useEffect, useState } from "react";
import AlphaSection from "./AlphaSection";
import BarChart from "./elements/chart/BarChart";
import { fetchFundsForImpact } from "@/api";
import { FundData } from "@/api/data";

export default function SmallAlphaBigImpact() {
  const [funds, setFunds] = useState<FundData[]>([]);
  useEffect(() => {
    (async () => {
      const funds = await fetchFundsForImpact();
      setFunds(funds);
    })();
  }, []);

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

      <BarChart chartData={funds} />
    </AlphaSection>
  );
}
