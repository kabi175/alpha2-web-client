"use client";

import SearchBar from "@/components/elements/SearchBar";
import { useState } from "react";
import { fetchAllFunds } from "@/api";
import DiscreteReturnsChart from "./DiscreteReturnsChart";
import TrailingReturnsChart from "./TrailingReturnsChart";
import DatePicker from "@/components/elements/DatePicker";

export default function ReturnsDashboard() {
  const [timeframe, setTimeframe] = useState<string>("4Y");
  const [period, setPeriod] = useState<"Y" | "Q">("Y");
  const [fund1, setFund1] = useState<{ value: string; label: string }>();
  const [fund2, setFund2] = useState<{ value: string; label: string }>();
  const [startDate, setStartDate] = useState<Date>(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    return date;
  });
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [dataOption, setDataOption] = useState<
    "trailing" | "rolling" | "discrete"
  >("trailing");

  const startDataLimit = new Date();
  startDataLimit.setFullYear(startDataLimit.getFullYear() - 4);
  startDataLimit.setDate(1);
  startDataLimit.setMonth(1);
  const endDataLimit = new Date();
  endDataLimit.setDate(endDataLimit.getDate() - 1);

  const fetchData = async (search?: string, type?: string) => {
    // Fetch data from the API
    const funds = await fetchAllFunds(search, type === "PMS" ? "PMS" : "MF");
    const flist = funds.map((fund) => {
      return {
        value: fund.id.toString(),
        label: fund.name,
        group: fund.manager,
      };
    });
    return flist;
  };

  const onTimeframeChange = async (timeframe: string) => {
    const start = new Date();
    start.setDate(1);
    start.setMonth(start.getMonth());
    if (timeframe === "6M") {
      start.setMonth(start.getMonth() - 7);
    } else if (timeframe === "1Y") {
      start.setFullYear(start.getFullYear() - 1);
    } else if (timeframe === "2Y") {
      start.setFullYear(start.getFullYear() - 2);
    } else if (timeframe === "3Y") {
      start.setFullYear(start.getFullYear() - 3);
    } else if (timeframe === "4Y") {
      start.setFullYear(start.getFullYear() - 4);
    } else {
      start.setFullYear(start.getFullYear() - 10);
    }
    setStartDate(start);
    setTimeframe(timeframe);
  };

  return (
    <>
      <div className="w-full  flex flex-col items-center justify-center pb-8">
        <div className="p-4 rounded-lg w-full ">
          {/* Tab Section */}
          <div className="flex ">
            <button
              className={`px-4 py-2 rounded-l-lg ${
                dataOption === "trailing"
                  ? "bg-blue-600 text-white font-semibold"
                  : "bg-gray-700 text-gray-400"
              }`}
              onClick={() => setDataOption("trailing")}
            >
              Trailing Returns
            </button>
            <button
              className={`px-4 py-2  ${
                dataOption === "discrete"
                  ? "bg-blue-600 text-white font-semibold"
                  : "bg-gray-700 text-gray-400"
              }`}
              onClick={() => setDataOption("discrete")}
            >
              Discrete Returns
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${
                dataOption === "rolling"
                  ? "bg-blue-600 text-white font-semibold"
                  : "bg-gray-700 text-gray-400"
              }`}
              onClick={() => setDataOption("rolling")}
            >
              Point to Point Returns
            </button>
          </div>

          <div
            className={`flex flex-row  mt-6 ${
              dataOption == "rolling" ? "justify-end" : "justify-between"
            }`}
          >
            {/* Point to Point Return Section */}
            {dataOption == "trailing" && (
              <div className="bg-gray-700 flex rounded-md text-gray-400 items-baseline">
                {["4Y", "3Y", "2Y", "1Y", "6M"].map((label, index) => (
                  <button
                    onClick={() => onTimeframeChange(label)}
                    key={index}
                    className={`px-4 py-2  flex items-center ${
                      label === timeframe
                        ? "text-white font-semibold"
                        : "text-gray-400"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            {dataOption == "discrete" && (
              <div className="bg-gray-700 flex rounded-md text-gray-400">
                <button
                  onClick={() => setPeriod("Y")}
                  className={`px-3 py-1  flex items-center ${
                    period === "Y"
                      ? "text-white font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Annually
                </button>
                <button
                  onClick={() => setPeriod("Q")}
                  className={`px-3 py-1  flex items-center ${
                    period === "Q"
                      ? "text-white font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Quarterly
                </button>
              </div>
            )}

            {/* Selected Funds Section */}
            <div className="flex space-x-4">
              {fund1 && (
                <button className="border border-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full border-2 border-yellow-500"></span>
                  <span>{fund1?.label}</span>
                </button>
              )}
              {fund2 && (
                <button className="border border-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full border-2 border-blue-400"></span>
                  <span>{fund2?.label}</span>
                </button>
              )}
            </div>
          </div>

          {/* Search Inputs */}
          <div className="mt-6 flex space-x-4">
            <SearchBar
              placeholder="Select for Mutual Funds & PMS..."
              selected={fund1}
              onValueChange={setFund1}
              onSearch={fetchData}
            />
            <SearchBar
              placeholder="Select for Mutual Funds & PMS..."
              selected={fund2}
              onValueChange={setFund2}
              onSearch={fetchData}
            />
          </div>

          {dataOption == "rolling" && (
            <div className="mt-6 flex space-x-4">
              <DatePicker
                placeholder="Select Start Date"
                onValueChange={setStartDate}
                value={startDate}
                disabled={{ before: startDataLimit }}
              />
              <DatePicker
                placeholder="Select End Date"
                onValueChange={setEndDate}
                value={endDate}
                disabled={{ after: endDataLimit }}
              />
            </div>
          )}
        </div>
      </div>

      {(fund1 || fund2) && dataOption !== "discrete" && (
        <TrailingReturnsChart
          fundA={fund1}
          fundB={fund2}
          startDate={startDate}
          endDate={endDate}
        />
      )}
      {fund1 && fund2 && dataOption === "discrete" && (
        <DiscreteReturnsChart fundA={fund1} fundB={fund2} period={period} />
      )}
    </>
  );
}
