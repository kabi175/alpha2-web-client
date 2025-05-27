"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { XAxis, Bar, BarChart, LabelList, Legend } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

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
  { month: "", nifty: undefined, pms: undefined },
  { month: "Year 1", nifty: 20.9, pms: 27.8 },
  { month: "Year 3", nifty: 27.5, pms: 57.1 },
  { month: "Year 5", nifty: 56.5, pms: 128.6 },
  { month: "Year 7", nifty: 49.1, pms: 118.1 },
  { month: "Year 10", nifty: 61.0, pms: 162.1 },
];

export default function OutcomeSection() {
  const renderLegend = (props: { payload?: Array<Payload> }) => {
    const { payload } = props;
    return (
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          {payload?.map((entry, index) => (
            <div className="text-2xl flex gap-2" key={`item-${index}`}>
              <span
                className="block size-[35px]"
                style={{ backgroundColor: entry.color }}
              />
              <p>{entry.value}</p>
            </div>
          ))}
        </div>
        <p className="text-2xl">Value of Rs 20 lakhs invested</p>
      </div>
    );
  };

  return (
    <section className="p-20">
      <div className="flex flex-col justify-around gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-6xl">The Outcome</h1>
          <p className="text-2xl font-normal text-[#8E8E8E]">
            Strategy outcome is high CAGR for more than one decade
          </p>

          <div className="flex justify-end">
            <ChartContainer config={chartConfig} className="h-[500px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  allowDecimals
                />

                <Legend
                  verticalAlign="top"
                  align="left"
                  content={renderLegend}
                />

                <Bar
                  dataKey="nifty"
                  name="Nifty 50"
                  fill="#2A2A2A"
                  radius={[12, 12, 0, 0]}
                  barSize={66}
                  order={1}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>

                <Bar
                  dataKey="pms"
                  name="MF-PMS"
                  fill="#025AE3"
                  radius={[12, 12, 0, 0]}
                  barSize={66}
                  order={2}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
