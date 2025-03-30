"use client";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export const MainContentSection = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 10;

  // Define column headers with their labels
  const columns = [
    { id: "schemeName", label: "Scheme Name" },
    { id: "aum", label: "AuM (Cr)" },
    { id: "threeMonth", label: "3M" },
    { id: "sixMonth", label: "6M" },
    { id: "ytd", label: "YTD" },
    { id: "oneYear", label: "1Y" },
    { id: "twoYear", label: "2Y" },
    { id: "threeYear", label: "3Y" },
    { id: "fiveYear", label: "5Y" },
  ];

  // Define table data
  const tableData = Array(12).fill({
    schemeName: "Flexi Cap Fund",
    aum: "5,254.65",
    threeMonth: "-17.16%",
    sixMonth: "-18.34%",
    ytd: "-15.26%",
    oneYear: "2.24%",
    twoYear: "28.28%",
    threeYear: "24.09%",
    fiveYear: "22.09%",
  });

  // Helper function to determine text color based on value
  const getValueColor = (value: string) => {
    if (value.startsWith("-")) return "text-[#ff3131]";
    if (value.startsWith("+") || Number.parseFloat(value) > 0)
      return "text-[#70b15d]";
    return "text-[#ababab]";
  };

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col w-full items-start">
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
                <div className="flex items-center">
                  {column.label}
                  {column.id !== "schemeName" && (
                    <div className="flex flex-col ml-1 h-4">
                      <ArrowUpIcon className="w-3 h-3" />
                      <ArrowDownIcon className="w-3 h-3 -mt-1" />
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
                {row.schemeName}
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
                  row.ytd
                )}`}
              >
                {row.ytd}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center w-full mt-4 px-8">
        <div className="text-[#ababab] text-xs">
          Showing {startIndex + 1} to {Math.min(endIndex, tableData.length)} of{" "}
          {tableData.length} entries
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant="ghost"
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 ${
                  currentPage === page
                    ? "bg-[#0076ff] text-white"
                    : "text-[#ababab] hover:text-white"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
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
