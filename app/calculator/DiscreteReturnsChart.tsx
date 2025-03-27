import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, XAxis, Bar, BarChart } from "recharts";
import { useState, useEffect } from "react";
import { fetchDiscreteReturns } from "@/api";
import _ from "lodash";

interface Fund {
  value: string;
  label: string;
}

interface DiscreteReturnsChartProps {
  fundA: Fund;
  fundB: Fund;
  period: "Y" | "Q";
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function DiscreteReturnsChart(props: DiscreteReturnsChartProps) {
  const [chatData, setChartData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const data = await fetchData(props.fundA, props.fundB, props.period);
      if (data) {
        setChartData(data);
      }
    })();
  }, [props.fundA, props.fundB, props.period]);
  return (
    <Card className="w-full bg-background">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chatData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey={props.fundA.label} fill="#EEB04599" barSize={27} />
            <Bar dataKey={props.fundB.label} fill="#2261D6" barSize={27} />
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

const fetchData = async (
  fundA: Fund,
  fundB: Fund,
  period: "Y" | "Q"
): Promise<any[]> => {
  const fund1Label = fundA.label;
  const fund2Label = fundB.label;

  const report1 = await fetchDiscreteReturns(
    Number.parseInt(fundA.value),
    period
  );
  const report2 = await fetchDiscreteReturns(
    Number.parseInt(fundB.value),
    period
  );

  const reports = transformData(report1, fundA.value).concat(
    transformData(report2, fundB.value)
  );
  const data = Object.values(_.groupBy(reports, "month")).map(
    (reports: any[]) => {
      // @typescript-eslint/no-explicit-any
      const data = {
        month: reports[0].month,
        date: reports[0].date,
        [fund1Label]:
          _.at(reports[0], fundA.value)[0] || _.at(reports[1], fundA.value)[0],
        [fund2Label]:
          _.at(reports[0], fundB.value)[0] || _.at(reports[1], fundB.value)[0],
      };
      return data;
    }
  );

  return _.sortBy(data, ["date"]);
};

const transformData = (reports: any[], fundName: string): any[] => {
  //@typescript-eslint/no-explicit-any
  return reports.map((report) => {
    // Convert report date to a readable format (e.g., "Jan 23")
    const date = new Date(report.report_date);
    const month = date.toLocaleString("default", { month: "short" }); // "Jan", "Feb", etc.
    const year = date.getFullYear().toString().slice(-2); // "23"

    // Use the 1-month return value as the data
    const data = report["1yr_return"] || 0; // Default to 0 if null/undefined

    return {
      month: `${month} ${year}`, // "Jan 23"
      date,
      [fundName]: data,
    };
  });
};
