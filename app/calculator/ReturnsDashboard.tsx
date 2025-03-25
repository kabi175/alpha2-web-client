"use client";

import SearchBar from "@/components/elements/SearchBar";
import TrailingReturnsChart from "./TrailingReturnsChart";
import { useEffect, useState } from "react";
import { fetchAllFunds } from "@/api";
import _ from "lodash";
import DiscreteReturnsChart from "./DiscreteReturnsChart";

export default function ReturnsDashboard() {
  const [fundList, setFundList] = useState<{ value: string; label: string }[]>(
    []
  );
  const [timeframe, setTimeframe] = useState<string>("1Y");
  const [fund1, setFund1] = useState<{ value: string; label: string }>();
  const [fund2, setFund2] = useState<{ value: string; label: string }>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const funds = await fetchAllFunds();
      const flist = funds.map((fund) => {
        return {
          value: fund.id.toString(),
          label: fund.name,
        };
      });

      setFundList(flist);
    };

    fetchData();
  }, []);

  const onTimeframeChange = async (timeframe: string) => {
    const start = new Date();
    if (timeframe === "6Y") {
      start.setMonth(start.getMonth() - 5);
    } else if (timeframe === "1Y") {
      start.setFullYear(start.getFullYear() - 1);
    } else if (timeframe === "2Y") {
      start.setFullYear(start.getFullYear() - 2);
    } else if (timeframe === "3Y") {
      start.setFullYear(start.getFullYear() - 3);
    } else if (timeframe === "4Y") {
      start.setFullYear(start.getFullYear() - 4);
    } else if (timeframe === "5Y") {
      start.setFullYear(start.getFullYear() - 6);
    } else {
      start.setFullYear(start.getFullYear() - 10);
    }
    setStartDate(start);
    setTimeframe(timeframe);
  };

  return (
    <>
      <div className="w-full  flex flex-col items-center justify-center">
        <div className="p-4 rounded-lg w-full ">
          {/* Tab Section */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Trailing Returns
            </button>
            <button className="px-4 py-2 bg-gray-700 text-gray-400 rounded-lg">
              Discrete Returns
            </button>
            <button className="px-4 py-2 bg-gray-700 text-gray-400 rounded-lg">
              Rolling Returns
            </button>
          </div>

          <div className="flex flex-row justify-between mt-6">
            {/* Point to Point Return Section */}
            <div className="bg-gray-700 flex rounded-md text-gray-400">
              <span className=" px-3 py-1 flex items-center">
                Point to Point Return
              </span>
              {["All", "5Y", "4Y", "3Y", "2Y", "1Y", "6M"].map(
                (label, index) => (
                  <button
                    onClick={() => onTimeframeChange(label)}
                    key={index}
                    className={`px-3 py-1  flex items-center ${
                      label === timeframe ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>

            {/* Selected Funds Section */}
            <div className="flex space-x-4">
              {fund1 && (
                <button className="border border-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-300">
                  <span className="w-3 h-3 rounded-full border border-yellow-500"></span>
                  <span>{fund1?.label}</span>
                </button>
              )}
              {fund2 && (
                <button className="border border-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-300">
                  <span className="w-3 h-3 rounded-full border border-blue-400"></span>
                  <span>{fund2?.label}</span>
                </button>
              )}
            </div>
          </div>

          {/* Search Inputs */}
          <div className="mt-6 flex space-x-4">
            <SearchBar
              placeholder="Select PMS or MFs"
              options={fundList}
              onValueChange={(val) => {
                const option = fundList.find((f) => f.value === val);
                if (!option) {
                  //TODO: hit search API
                }
                setFund1(option);
              }}
            />
            <SearchBar
              placeholder="Select PMS or MFs"
              options={fundList}
              onValueChange={(val) =>
                setFund2(fundList.find((f) => f.value === val))
              }
            />
          </div>
        </div>
      </div>

      {fund1 && fund2 && (
        // <TrailingReturnsChart
        //   fundA={fund1}
        //   fundB={fund2}
        //   startDate={startDate}
        //   endDate={endDate}
        // />
        <DiscreteReturnsChart fundA={fund1} fundB={fund2} />
      )}
    </>
  );
}

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
