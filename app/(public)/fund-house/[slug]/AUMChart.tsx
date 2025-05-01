import { AUMChartData } from "@/api/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart } from "recharts";
import React, { JSX } from "react";
import { CartesianGrid, XAxis, YAxis, Line } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const AUMChart = ({
  entries,
  displayName,
}: {
  entries: AUMChartData[];
  displayName: string;
}): JSX.Element => {
  const rawData = entries.map((entry) => {
    return {
      aum: entry.aum,
      report_date: `${new Date(entry.report_date).toLocaleString("default", {
        month: "short",
      })} ${new Date(entry.report_date).getFullYear()}`,
    };
  });

  const first = rawData.find((d) => d.aum)?.aum || 0;

  const percentData = rawData.map((d) => ({
    ...d,
    percent: ((d.aum - first) / first) * 100,
  }));

  // Chart data
  return (
    <div className="flex flex-col w-full max-w-[1320px] gap-8 mx-auto">
      <h2 className="font-semibold text-2xl leading-7 text-[#a0a0a0] font-['Inter',Helvetica] tracking-[0]">
        AUM Chart
      </h2>

      <Card className="w-full bg-[#16191c] rounded-2xl overflow-hidden">
        <CardHeader>
          <div className="flex flex-row justify-between items-center">
            <div className=" top-[63px] left-16 font-semibold text-[#f0f0f0] text-[32px] leading-[normal] whitespace-nowrap font-['Inter',Helvetica] tracking-[0]">
              {displayName}
            </div>

            {/* <div className="flex flex-row items-center gap-2">
              <div className=" top-0 left-0 font-['Inter',Helvetica] font-semibold text-[#70b15d] text-4xl tracking-[0] leading-[normal]">
                40%
              </div>
              <ArrowUpIcon className=" w-6 h-5 top-3 right-0 text-[#70b15d]" />
            </div> */}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ChartContainer config={chartConfig} height={500}>
            <LineChart
              data={percentData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={"report_date"}
                tickLine={false}
                axisLine={false}
                interval={4}
              />
              <YAxis
                dataKey={"percent"}
                tickFormatter={(value) => value + "%"}
                domain={[0, "auto"]}
                axisLine={false}
                tickLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Line
                dataKey={"percent"}
                type="linear"
                stroke={"#288DFF"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
