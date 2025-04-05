"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { FundData } from "@/api/data";
import { useState } from "react";

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

const keyVal: Record<string, string> = {
  "5Y": "fiveYear",
  "3Y": "threeYear",
  "1Y": "oneYear",
  "6M": "sixMonth",
  "3M": "threeMonth",
  "1M": "oneMonth",
};

export default function Component({ chartData }: { chartData: FundData[] }) {
  chartData = chartData.map((data) => {
    data.uv = 32.9;
    return data;
  });
  const [timeframe] = useState<"5Y" | "3Y" | "1Y" | "6M" | "3M" | "1M">("5Y");
  return (
    <Card className="bg-[#4BD8FF00] w-full border-0">
      <CardHeader>
        <CardTitle className="pl-12">
          Direct Growth Funds 5 year CAGR vs PMS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} height={500}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="schemeName"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              type="category"
            ></XAxis>
            <YAxis
              height={350}
              tickFormatter={(value) => value + "%"}
              domain={[0, 40]}
            />
            <ReferenceLine
              y={32.9}
              stroke="#4A9EFF"
              strokeDasharray="5 3"
              strokeWidth={2}
              pointsAtX={0}
            >
              <Label position="left" fill="#4A9EFF" className="font-semibold">
                32.9%
              </Label>
            </ReferenceLine>
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
