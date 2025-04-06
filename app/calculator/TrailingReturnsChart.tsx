import LineChart from "@/components/elements/chart/LineChart";
import { useEffect, useState } from "react";
import { fetchTrailingReturns } from "@/api";
import _ from "lodash";

interface Fund {
  value: string;
  label: string;
}

interface TrailingReturnsChartProps {
  fundA?: Fund;
  fundB?: Fund;
  startDate: Date;
  endDate: Date;
}

export default function TrailingReturnsChart(props: TrailingReturnsChartProps) {
  const [chatData, setChartData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const data = await fetchData(
        props.startDate,
        props.endDate,
        props.fundA,
        props.fundB
      );
      if (data) {
        setChartData(data);
      }
    })();
  }, [props]);

  return (
    <LineChart
      entries={chatData}
      xplot={"month"}
      plots={[
        {
          key: props.fundA?.label || "",
          color: "#EEB045",
        },
        {
          key: props.fundB?.label || "",
          color: "#45D0EE",
        },
      ]}
    />
  );
}

const fetchData = async (
  start: Date,
  end: Date,
  fundA?: Fund,
  fundB?: Fund
): Promise<any[]> => {
  const fund1Label = fundA?.label || "";
  const fund2Label = fundB?.label || "";

  const fund1Value = fundA?.value || "";
  const fund2Value = fundB?.value || "";

  const report1 = await fetchTrailingReturns(
    Number.parseInt(fund1Value),
    start,
    end
  );
  const report2 = await fetchTrailingReturns(
    Number.parseInt(fund2Value),
    start,
    end
  );

  const reports = transformData(report1, fund1Value).concat(
    transformData(report2, fund2Value)
  );
  const data = Object.values(_.groupBy(reports, "month")).map(
    (reports: any[]) => {
      // @typescript-eslint/no-explicit-any
      const data = {
        month: reports[0].month,
        date: reports[0].date,
        [fund1Label]:
          _.at(reports[0], fund1Value)[0] || _.at(reports[1], fund1Value)[0],
        [fund2Label]:
          _.at(reports[0], fund2Value)[0] || _.at(reports[1], fund2Value)[0],

        [fund1Label + "returns"]:
          _.at(reports[0], fund1Value + "returns")[0] ||
          _.at(reports[1], fund1Value + "returns")[0],
        [fund2Label + "returns"]:
          _.at(reports[0], fund2Value + "returns")[0] ||
          _.at(reports[1], fund2Value + "returns")[0],
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
    const data = report["amount"] || 0; // Default to 0 if null/undefined

    return {
      month: `${month} ${year}`, // "Jan 23"
      date,
      [fundName]: data,
      [fundName + "returns"]: report["returns"] || 0, // Default to 0 if null/undefined
    };
  });
};
