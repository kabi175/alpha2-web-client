"use client";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  LabelList,
  Legend,
  ReferenceLine,
  XAxis,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import Section from "./section";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";

const chartConfig = {
  nifty: {
    label: "Nifty 50",
    color: "#2A2A2A",
  },
  pms: {
    label: "MF-PMS",
    color: "#025AE3",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "", nifty: undefined, pms: undefined },
  { month: "", nifty: undefined, pms: undefined },
  { month: "", nifty: undefined, pms: undefined },
  { month: "", nifty: undefined, pms: undefined },
  { month: "Average", nifty: 12.7, pms: 23.7 },
  { month: "Median", nifty: 11.4, pms: 22 },
  { month: "Maximum", nifty: 85, pms: 98.7 },
  { month: "Minimum", nifty: -54, pms: -24 },
];

export default function TrailingPerformanceSection() {
  const renderLegend = (props: { payload?: Array<Payload> }) => {
    const { payload } = props;
    return (
      <div className="flex flex-col gap-6 pb-4">
        <div className="flex gap-4">
          {payload?.map((entry, index) => (
            <div
              className="text-xl lg:text-2xl flex gap-2"
              key={`item-${index}`}
            >
              <span
                className="block size-[35px]"
                style={{ backgroundColor: entry.color }}
              />
              <p>{entry.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const isSmall = useIsSmallScreen(1000);
  const chatDisplayData = isSmall ? chartData.slice(4) : chartData;

  return (
    <Section>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-4xl lg:text-6xl">
            Trailing 12 M Performance
          </h1>
          <p className="text-xl lg:text-2xl font-normal text-[#8E8E8E] pt-4">
            Outperforms in bull-phase as well as protects drawdowns during
            corrections
          </p>
        </div>

        <div className="flex justify-end">
          <ChartContainer config={chartConfig} className="h-[500px] w-full">
            <BarChart accessibilityLayer data={chatDisplayData}>
              <XAxis dataKey="month" hide />
              <Legend verticalAlign="top" align="left" content={renderLegend} />

              <Bar
                dataKey="nifty"
                name="Nifty 50"
                fill="#2A2A2A"
                radius={[12, 12, 0, 0]}
                barSize={66}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={isSmall ? 10 : 12}
                  formatter={(value: string) => `${value}%`}
                />
              </Bar>

              <Bar
                dataKey="pms"
                name="MF-PMS"
                fill="#025AE3"
                radius={[12, 12, 0, 0]}
                barSize={66}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={isSmall ? 10 : 12}
                  formatter={(value: string) => `${value}%`}
                />
                <LabelList
                  dataKey="month"
                  position="bottom"
                  fontSize={isSmall ? 14 : 24}
                />
              </Bar>

              <ReferenceLine y={0} stroke="#252525" strokeWidth={2} />
            </BarChart>
          </ChartContainer>
        </div>

        <p className="text-lg lg:text-xl  text-[#C2C2C2]">
          Trailing 12 Months (T12M) returns show how an asset has performed over
          the last 12 months from a specific date (not a calendar year).
        </p>
        <div className="bg-[#151515] p-8 w-full text-sm flex flex-col rounded-md">
          <h3>For Example.,</h3>
          <p className="text-[#C2C2C2]">
            If you&apos;re looking at TTM returns as of Dec 2024, you&apos;re
            measuring performance from Jan 1, 2024 to Dec 31, 2024. If
            you&apos;re checking TTM returns as of March 2020 (during the COVID
            crash), you&apos;re measuring from April 1, 2019 to March 31, 2020.
            This helps you assess the most likely scenario of a portfolio
            gain/loss in a twelve month period.
          </p>
        </div>
      </div>
    </Section>
  );
}
