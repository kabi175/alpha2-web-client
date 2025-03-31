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
    <Card className="w-full bg-background">
      <CardContent>
        <ChartContainer config={chartConfig}>
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
              content={<ChartTooltipContent hideLabel />}
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
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          As reported to SEBI as at {getLastDateOfLastMonthFormatted()}
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
