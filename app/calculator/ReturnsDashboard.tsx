"use client";

import SearchBar from "@/components/elements/SearchBar";
import { useEffect, useRef, useState } from "react";
import { fetchAllFunds } from "@/api";
import DiscreteReturnsChart from "./DiscreteReturnsChart";
import TrailingReturnsChart from "./TrailingReturnsChart";
import DatePicker from "@/components/elements/DatePicker";

export default function ReturnsDashboard() {
  const [timeframe, setTimeframe] = useState<string>("4Y");
  const [period, setPeriod] = useState<"Y" | "Q">("Y");
  const [fund1, setFund1] = useState<{ value: string; label: string }>();
  const [fund2, setFund2] = useState<{ value: string; label: string }>();
  const [fund1FinalAmount, setFund1FinalAmount] = useState<
    number | undefined
  >();
  const [fund2FinalAmount, setFund2FinalAmount] = useState<
    number | undefined
  >();
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
  const targetRef = useRef(null);
  useEffect(() => {
    const fetchFunds = async () => {
      const fund1 = await fetchData(
        "Quest Investment : Alpha Opportunities",
        "PMS"
      );
      const fund2 = await fetchData(
        "2Point2 Capital Advisors : Long Term Value Fund",
        "PMS"
      );
      setFund1(fund1[0]);
      setFund2(fund2[0]);
    };
    fetchFunds();
  }, []);

  useEffect(() => {
    if (targetRef.current) {
      (targetRef.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [
    fund1FinalAmount,
    fund2FinalAmount,
    fund1,
    fund2,
    period,
    startDate,
    dataOption,
  ]);

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
    <div ref={targetRef} className="w-full mb-12">
      <div className="w-full  flex flex-col items-center justify-center pb-8">
        <div className="p-4 rounded-lg w-full ">
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* Tab Section */}
            <div className="flex">
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
              className={`flex flex-row  ${
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
            </div>
          </div>
          {/* Search Inputs */}
          <div className="mt-6 flex flex-wrap gap-4 space-x-4">
            <div className="flex flex-col gap-2">
              <SearchBar
                placeholder="Select for Mutual Funds & PMS..."
                selected={fund1}
                onValueChange={setFund1}
                onSearch={fetchData}
              />
              {fund1 && calculateCAGR(endDate, startDate, fund1FinalAmount) && (
                <button className="border border-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full border-2 border-yellow-500"></span>
                  <span>
                    Over All Returns:{" "}
                    {calculateCAGR(endDate, startDate, fund1FinalAmount)}%
                  </span>
                </button>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <SearchBar
                placeholder="Select for Mutual Funds & PMS..."
                selected={fund2}
                onValueChange={setFund2}
                onSearch={fetchData}
              />
              {fund2 && calculateCAGR(endDate, startDate, fund2FinalAmount) && (
                <button className="border border-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-300">
                  <span className="w-4 h-4 rounded-full border-2 border-blue-400"></span>
                  <span>
                    Over All Returns:{" "}
                    {calculateCAGR(endDate, startDate, fund2FinalAmount)}%
                  </span>
                </button>
              )}
            </div>
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
          setFundAFinalAmount={setFund1FinalAmount}
          setFundBFinalAmount={setFund2FinalAmount}
          startDate={startDate}
          endDate={endDate}
        />
      )}
      {fund1 && fund2 && dataOption === "discrete" && (
        <DiscreteReturnsChart fundA={fund1} fundB={fund2} period={period} />
      )}
    </div>
  );
}

const cagr = (fr: number, yr: number) => (Math.pow(fr / 100, 1 / yr) - 1) * 100;

const calculateCAGR = (endDate: Date, startDate: Date, fr?: number) => {
  if (!fr) {
    return null;
  }
  const diffTime = endDate.getTime() - startDate.getTime();
  let diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // convert ms to years  const totalMonths = years * 12 + months;
  if (diffYears <= 1) {
    return null;
  }
  return (Math.floor(cagr(fr, diffYears) * 100) / 100).toFixed(2);
};
