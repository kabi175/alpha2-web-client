"use client";
import AlphaSection from "./AlphaSection";
import BarChart from "./elements/chart/BarChart";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
      <h3 className="text-2xl pb-10">
        <span className="font-light">3% alpha over 10 years can </span> <br />
        <span className="font-semibold italic">
          grow your corpus by 30%+
        </span>{" "}
      </h3>
      <BarChart />
    </AlphaSection>
  );
}
