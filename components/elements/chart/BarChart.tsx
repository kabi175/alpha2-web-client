"use client";

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useState } from "react";
import { FundData } from "@/api/data";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const keyVal = {
  "4Y": "fourYear",
  "3Y": "threeYear",
  "2Y": "twoYear",
  "1Y": "oneYear",
  "6M": "sixMonth",
  YTD: "ytd",
  "3M": "threeMonth",
};

export default function Component({ chartData }: { chartData: FundData[] }) {
  const [timeframe, setTimeframe] = useState<
    "4Y" | "3Y" | "2Y" | "1Y" | "1Y" | "6M" | "3M"
  >("4Y");
  return (
    <Card className="bg-[#4BD8FF00] w-3/4">
      <CardHeader>
        <CardTitle>Direct Growth Funds 5 year CAGR vs PMS</CardTitle>
        <div className="my-5 bg-gray-700 flex rounded-md text-gray-400 items-baseline w-fit">
          {["3Y", "2Y", "1Y", "6M", "3M"].map((label, index) => (
            <button
              onClick={() => setTimeframe(label as any)}
              key={index}
              className={`px-4 py-2  flex items-center ${
                label === timeframe
                  ? "text-white font-semibold"
                  : "text-gray-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="schemeName"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickFormatter={(value) => value + "%"} />

            <Bar
              dataKey={keyVal[timeframe]}
              fill="#4D97EE"
              radius={4}
              barSize={50}
            >
              {chartData.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index % 2 === 0 ? "#4D97EE" : "#8CC1FF"}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          *As reported to SEBI as at {getLastDateOfLastMonthFormatted()}
        </div>
      </CardFooter>
    </Card>
  );
}

function getLastDateOfLastMonthFormatted() {
  const lastDay = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
  const month = lastDay.toLocaleString("default", { month: "short" }); // "Jan", "Feb", etc.
  return `${lastDay.getDate()} ${month} ${lastDay.getFullYear()}`; // Format as YYYY-MM-DD
}
