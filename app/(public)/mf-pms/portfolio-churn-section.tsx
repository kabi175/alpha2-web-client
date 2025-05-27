"use client";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "2007", reblance: 1 },
  { month: "2008", reblance: 1 },
  { month: "2009", reblance: 1 },
  { month: "2010", reblance: 0 },
  { month: "2011", reblance: 0 },
  { month: "2012", reblance: 0 },
  { month: "2013", reblance: 0 },
  { month: "2014", reblance: 0 },
  { month: "2015", reblance: 3 },
  { month: "2016", reblance: 1 },
  { month: "2017", reblance: 0 },
  { month: "2018", reblance: 3 },
  { month: "2019", reblance: 3 },
  { month: "2020", reblance: 2 },
  { month: "2021", reblance: 1 },
  { month: "2022", reblance: 1 },
  { month: "2023", reblance: 2 },
  { month: "2024", reblance: 1 },
];

const chartConfig = {
  reblance: {
    label: "Count of Rebalance",
    color: "#025AE3",
  },
} satisfies ChartConfig;

export default function PortfolioChurnSection() {
  return (
    <section className="p-20">
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-6xl">Portfolio Churn</h1>
          <p className="text-2xl font-normal text-[#8E8E8E] pt-4">
            Usual rebalance is every twelve to eighteen months to optimize exit
            loads and capital gains tax
          </p>
        </div>

        <ChartContainer config={chartConfig} className="h-[500px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{ left: 40 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              allowDecimals={false}
              domain={["min", "max"]}
              padding={{ bottom: 40, top: 40 }}
            />

            <Legend
              formatter={() => (
                <span className="text-2xl text-white text-center p-2">
                  Count of Rebalance
                </span>
              )}
              alignmentBaseline="auto"
              verticalAlign="top"
              align="left"
              iconType="circle"
              iconSize={20}
            />

            <Line
              dataKey="reblance"
              type="linear"
              stroke="#025AE3"
              strokeWidth={2}
              dot={{
                fill: "#025AE3",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </section>
  );
}
