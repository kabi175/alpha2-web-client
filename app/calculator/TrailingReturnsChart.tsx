import LineChart from "@/components/elements/chart/LineChart";
import { useEffect, useState } from "react";
import { fetchTrailingReturns } from "@/api";
import _ from "lodash";

interface Fund {
  value: string;
  label: string;
}

interface TrailingReturnsChartProps {
  fundA: Fund;
  fundB: Fund;
  startDate: Date;
  endDate: Date;
}

export default function TrailingReturnsChart(props: TrailingReturnsChartProps) {
  const [chatData, setChartData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const data = await fetchData(
        props.fundA,
        props.fundB,
        props.startDate,
        props.endDate
      );
      if (data) {
        setChartData(data);
      }
    })();
  }, []);

  return (
    <LineChart
      entries={chatData}
      xplot={"month"}
      plots={[
        {
          key: props.fundA.label,
          color: "#45D0EE",
        },
        {
          key: props.fundB.label,
          color: "#EEB045",
        },
      ]}
    />
  );
}

const fetchData = async (
  fundA: Fund,
  fundB: Fund,
  start: Date,
  end: Date
): Promise<any[]> => {
  const fund1Label = fundA.label;
  const fund2Label = fundB.label;

  const report1 = await fetchTrailingReturns(
    Number.parseInt(fundA.value),
    start,
    end
  );
  const report2 = await fetchTrailingReturns(
    Number.parseInt(fundB.value),
    start,
    end
  );

  const reports = transformData(report1, fundA.value).concat(
    transformData(report2, fundB.value)
  );
  const data = Object.values(_.groupBy(reports, "month")).map(
    (reports: any[]) => {
      // @typescript-eslint/no-explicit-any
      const data = {
        month: reports[0].month,
        [fund1Label]:
          _.at(reports[0], fundA.value)[0] || _.at(reports[1], fundA.value)[0],
        [fund2Label]:
          _.at(reports[0], fundB.value)[0] || _.at(reports[1], fundB.value)[0],
      };
      return data;
    }
  );

  return data;
};

const transformData = (reports: any[], fundName: string): any[] => {
  //@typescript-eslint/no-explicit-any
  return reports.map((report) => {
    // Convert report date to a readable format (e.g., "Jan 23")
    const date = new Date(report.ReportDate);
    const month = date.toLocaleString("default", { month: "short" }); // "Jan", "Feb", etc.
    const year = date.getFullYear().toString().slice(-2); // "23"

    // Use the 1-month return value as the data
    const data = report["1_month_return"] || 0; // Default to 0 if null/undefined

    return {
      month: `${month} ${year}`, // "Jan 23"
      [fundName]: data,
    };
  });
};
