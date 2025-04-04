"use client";
import React, { useEffect } from "react";
import { fetchFundsForExplore } from "@/api";
import { FundExploreData } from "@/api/data";
import { ColumnDef, Column, Row } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader";

const getValueColor = (value: number) => {
  if (value < 0) return "text-[#ff3131]";
  if (value > 0) return "text-[#70b15d]";
  return "text-[#ababab]";
};

const CellContent = ({
  row,
  column,
}: {
  row: Row<FundExploreData>;
  column: Column<FundExploreData, unknown>;
}) => {
  const amount = parseFloat(row.getValue(column.id));
  return (
    <div className={`text-center font-medium ${getValueColor(amount)}`}>
      {isNaN(amount) ? "-" : amount}
    </div>
  );
};

const ColumnIdVsLabel: Record<string, string> = {
  schemeName: "Scheme Name",
  aum: "AUM (Cr)",
  oneMonth: "1M",
  threeMonth: "3M",
  sixMonth: "6M",
  ytd: "YTD",
  oneYear: "1Y",
  twoYear: "2Y",
  threeYear: "3Y",
  fiveYear: "5Y",
  sharpeRatio: "Sharpe Ratio",
  maxDrawdown: "Max Drawdown",
};

export const columns: ColumnDef<FundExploreData>[] = [
  {
    accessorKey: "schemeName",
    maxSize: 200,
    size: 200,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => (
      <div className="flex items-center pr-2">
        <p className="text-sm text-[#ababab] font-semibold overflow-hidden text-ellipsis">
          {row.getValue(column.id)}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "aum",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "oneMonth",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "threeMonth",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "sixMonth",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "oneYear",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "twoYear",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "threeYear",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "fiveYear",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "ytd",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "sharpeRatio",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "maxDrawdown",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
];

export const MainContentSection = () => {
  // const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [tableData, setTableData] = React.useState<FundExploreData[]>([]);

  useEffect(() => {
    (async () => {
      const resp = await fetchFundsForExplore({
        per_page: "3000",
        page: "0",
      });
      setTableData(resp.data);
    })();
  }, []);

  return (
    <div className="flex flex-col w-full items-start rounded-lg pb-20">
      <DataTable columns={columns} data={tableData} />
    </div>
  );
};

export default MainContentSection;
