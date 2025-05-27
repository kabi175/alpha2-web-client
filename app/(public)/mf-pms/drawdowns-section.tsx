"use client";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", pms: -18, nifty: -77 },
  { month: "February", pms: -25, nifty: -50 },
  { month: "March", pms: -15, nifty: -25 },
  { month: "April", pms: -30, nifty: -32 },
  { month: "May", pms: -13, nifty: -45 },
  { month: "June", pms: -5, nifty: -18 },
  { month: "June", pms: -9, nifty: -22 },
];

const chartConfig = {
  pms: {
    label: "MF-PMS",
    color: "#025AE3",
  },
} satisfies ChartConfig;

export default function DrawdownsSection() {
  return (
    <section className="p-20">
      <div className="flex flex-col justify-around gap-8">
        <div>
          <h1 className="font-semibold text-6xl">Lower Drawdowns</h1>
          <p className="text-2xl font-normal text-[#8E8E8E] pt-4">
            MF-PMS has fallen less than Nifty50 in every major market correction
          </p>
        </div>

        <ChartContainer config={chartConfig} className="h-[500px] w-full">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              padding={{ left: 40 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${Math.abs(value)}%`}
              offset={-10}
            />
            <Area
              dataKey="nifty"
              type="linear"
              fill="#2A2A2A"
              stroke="#2A2A2A"
              stackId="2"
              fillOpacity={1}
            />
            <Area
              dataKey="pms"
              type="linear"
              fill="#1C82F9"
              fillOpacity={1}
              stackId="3"
              stroke="#1C82F9"
            />
          </AreaChart>
        </ChartContainer>

        <div className="bg-[#151515] text-[#C2C2C2] p-8 w-full text-xl flex flex-col gap-8 rounded-md">
          <p>
            In 2008 crash Nifty fell by 56% but MF-PMS portfolio was down only
            18%.
          </p>
          <p>
            In 2020, covid brought Nifty down by 29% from its peak monthly
            close, but MF-PMS was down only 19%.
          </p>
          <p>
            Even in recent fall of 2024/25, Nifty was down 14% but MF-PMS fell
            by only 7%.
          </p>
        </div>
      </div>
    </section>
  );
}
