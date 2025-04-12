"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export interface LineChartData {
  entries: any[];
  xplot: string;
  plots: {
    key: string;
    color: string;
  }[];
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Component(props: LineChartData) {
  return (
    <Card className="w-full bg-background border-0">
      <CardContent className="h-[500px] w-full">
        <ChartContainer config={chartConfig} height={500}>
          <LineChart
            accessibilityLayer
            data={props.entries}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={props.xplot}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickFormatter={(value) => value + "₹"}
              domain={["dataMin", "auto"]}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, payload, _temp0, _temp1, item) => {
                    value = Math.round(Number.parseFloat(value.toString()));
                    if (
                      typeof payload === "string" &&
                      typeof item === "object"
                    ) {
                      const dd = item as any;
                      const ret = dd[payload + "returns"];
                      if (ret) {
                        return `${payload} : ₹${value} (${formatToTwoDecimals(
                          ret
                        )}%)`;
                      }
                    }
                    return `${payload} - ₹${value}`;
                  }}
                />
              }
            />
            {props.plots.map((plot) => (
              <Line
                key={plot.key}
                dataKey={plot.key}
                type="linear"
                stroke={plot.color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
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

export function getLastDateOfLastMonthFormatted() {
  const lastDay = new Date(
    new Date().getFullYear(),
    new Date().getMonth() - 1,
    0
  );
  const month = lastDay.toLocaleString("default", { month: "short" }); // "Jan", "Feb", etc.
  return `${month} ${lastDay.getFullYear()}`; // Format as YYYY-MM-DD
}

function formatToTwoDecimals(num: number) {
  return (Math.floor(num * 100) / 100).toFixed(2);
}
