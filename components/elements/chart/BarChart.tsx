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
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { FundData } from "@/api/data";
import { useState } from "react";
import { getLastDateOfLastMonthFormatted } from "./LineChart";

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
  const [timeframe] = useState<"5Y" | "3Y" | "1Y" | "6M" | "3M" | "1M">("5Y");
  return (
    <Card className="bg-[#4BD8FF00] w-full border-0">
      <CardHeader>
        <CardTitle className="pl-12">5Y CAGR of PMS vs Mutual Fund</CardTitle>
      </CardHeader>
      <CardContent className="h-[500px] w-full">
        <ChartContainer config={chartConfig} height={500}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="schemeName"
              tickLine={false}
              tickMargin={10}
              axisLine={false}>

            </XAxis>
            <YAxis
              height={350}
              tickFormatter={(value) => value + "%"}
              domain={[0, 40]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent formatter={(label) => label + "%"} />}
            />
            <ReferenceLine
              y={32.9}
              stroke="#4A9EFF"
              strokeDasharray="5 3"
            >
              <Label position="left" fill="#4A9EFF" className="font-semibold">
                32.9%
              </Label>
              <Label position="top" fill="#fff" className="font-semibold">
                Median PMF CAGR
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
      <CardFooter className="gap-2 text-sm text-right">
        <div className="leading-none text-muted-foreground text-right w-full">
          *As reported to SEBI as at {getLastDateOfLastMonthFormatted()}
        </div>
      </CardFooter>
    </Card>
  );
}
