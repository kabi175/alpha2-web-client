"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { XAxis, Bar, BarChart, LabelList, Legend } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import Section from "./section";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";
import { useVisibilityAnimation } from "@/hooks/useVisibilityAnimation";

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
  { month: "1 Year", nifty: 20.9, pms: 27.8 },
  { month: "3 Year", nifty: 27.5, pms: 57.1 },
  { month: "5 Year", nifty: 56.5, pms: 128.6 },
  { month: "7 Year", nifty: 49.1, pms: 118.1 },
  { month: "10 Year", nifty: 61.0, pms: 162.1 },
];

export default function OutcomeSection() {
  const chatDisplayData = useIsSmallScreen() ? chartData.slice(5) : chartData;

  const { ref, visible } = useVisibilityAnimation(0.5);
  const animateKey = visible ? "animate" : "initial";

  const renderLegend = (props: { payload?: Array<Payload> }) => {
    const { payload } = props;
    return (
      <div className="flex flex-col gap-6">
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
        <p className="text-xl lg:text-2xl">Value of Rs 20 lakhs invested</p>
      </div>
    );
  };

  return (
    <Section>
      <div className="flex flex-col justify-around gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-4xl lg:text-6xl">The Outcome</h1>
          <p className="text-xl lg:text-2xl font-normal text-[#8E8E8E]">
            Strategy outcome is high CAGR for more than one decade
          </p>

          <div ref={ref} className="flex justify-end">
            <ChartContainer config={chartConfig} className="h-[500px] w-full">
              <BarChart accessibilityLayer data={chatDisplayData} barGap={16}>
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
                  key={"nifty" + animateKey} // This forces Bar to re-mount on focus
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
                    fontSize={12}
                  />
                </Bar>

                <Bar
                  key={"pms" + animateKey} // This forces Bar to re-mount on focus
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
                    fontSize={14}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}
