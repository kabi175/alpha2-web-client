"use client";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { fetchFundsForExplore } from "@/api";
import { FundExploreData } from "@/api/data";
import { Label } from "@/components/ui/label";

export const MainContentSection = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [searchParam] = React.useState<Record<string, string>>({
    per_page: "10",
    page: "0",
  });
  const [tableData, setTableData] = React.useState<FundExploreData[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [orderBy, setOrderBy] = React.useState<string>("schemeName");
  const [order, setOrder] = React.useState<string>("asc");
  const itemsPerPage = 10;
  useEffect(() => {
    (async () => {
      const resp = await fetchFundsForExplore({
        ...searchParam,
        page: (currentPage - 1).toString(),
        order_by: orderBy,
        order,
      });
      setTableData(resp.data);
      setTotal(resp.total);
    })();
  }, [searchParam, currentPage, orderBy, order]);

  // Define column headers with their labels
  const columns = [
    { id: "schemeName", label: "Scheme Name" },
    { id: "aum", label: "AUM (Cr)" },
    { id: "threeMonth", label: "3M" },
    { id: "sixMonth", label: "6M" },
    { id: "oneYear", label: "1Y" },
    { id: "twoYear", label: "2Y" },
    { id: "threeYear", label: "3Y" },
    { id: "ytd", label: "YTD" },
    { id: "sharpeRatio", label: "Sharpe Ratio" },
    { id: "maxDrawdown", label: "Max Drawdown" },
  ];

  // Helper function to determine text color based on value
  const getValueColor = (value: number) => {
    if (value < 0) return "text-[#ff3131]";
    if (value > 0) return "text-[#70b15d]";
    return "text-[#ababab]";
  };

  const totalPages = Math.ceil(total / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="flex flex-col w-[1122px] items-start">
      <Table className="border-collapse">
        <TableHeader className="bg-[#2b2b2b]">
          <TableRow>
            {columns.map((column, index) => (
              <TableHead
                key={column.id}
                className={`h-[39px] text-[#ababab] text-xs [font-family:'Inter',Helvetica] font-normal px-8 py-3 ${
                  index === 0 ? "rounded-tl-[18px]" : ""
                } ${index === columns.length - 1 ? "rounded-tr-[18px]" : ""}`}
              >
                <div
                  className="flex items-center"
                  onClick={() => {
                    setOrderBy(column.id);
                    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
                  }}
                >
                  {column.label}
                  {orderBy == column.id && (
                    <div className="flex flex-col ml-1 h-4">
                      {order == "asc" && <ArrowUpIcon className="w-3 h-3" />}
                      {order == "desc" && (
                        <ArrowDownIcon className="w-3 h-3 " />
                      )}
                    </div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-[#252525]" : "bg-[#2b2b2b]"}
            >
              <TableCell className="px-8 py-2.5 h-[37px] text-[#ababab] text-xs [font-family:'Inter',Helvetica] font-normal">
                <Label className="truncate">{row.schemeName}</Label>
              </TableCell>
              <TableCell className="px-8 py-2.5 h-[37px] text-right text-[#ababab] text-xs [font-family:'Inter',Helvetica] font-normal">
                {row.aum}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.threeMonth
                )}`}
              >
                {row.threeMonth}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.sixMonth
                )}`}
              >
                {row.sixMonth}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.oneYear
                )}`}
              >
                {row.oneYear}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.twoYear
                )}`}
              >
                {row.twoYear}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.threeYear
                )}`}
              >
                {row.threeYear}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.fiveYear
                )}`}
              >
                {row.fiveYear}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.ytd
                )}`}
              >
                {row.ytd}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.sharpeRatio
                )}`}
              >
                {row.sharpeRatio}
              </TableCell>
              <TableCell
                className={`px-2 py-2.5 h-[37px] text-right text-xs [font-family:'Inter',Helvetica] font-normal ${getValueColor(
                  row.maxDrawdown
                )}`}
              >
                {row.maxDrawdown}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center w-full mt-4 px-8">
        <div className="text-[#ababab] text-xs">
          Showing {startIndex + 1} to {Math.min(endIndex, total)} of {total}{" "}
          entries
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-[#ababab] hover:text-white disabled:opacity-50"
          >
            Previous
          </Button>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              className={`w-8 h-8 bg-[#0076ff] text-white`}
            >
              {currentPage}
            </Button>
          </div>
          <Button
            variant="ghost"
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            }}
            disabled={currentPage === totalPages}
            className="text-[#ababab] hover:text-white disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainContentSection;
