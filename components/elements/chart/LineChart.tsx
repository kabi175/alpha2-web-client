"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import _ from "lodash";

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
  const maxPerPlot = props.plots.map((plot) => {
    return _.maxBy(props.entries, plot);
  });
  const mimPerPlot = props.plots.map((plot) => {
    return _.minBy(props.entries, plot);
  });
  const maxPlot = _.maxBy(maxPerPlot);
  const minPlot = _.minBy(mimPerPlot);

  return (
    <Card className="w-7xl bg-background">
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
            <YAxis tickFormatter={(value) => value + "%"} />
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
    </Card>
  );
}
