"use client";
import React, { useEffect } from "react";
import { fetchFundsForExplore } from "@/api";
import { FundExploreData } from "@/api/data";
import {
  ColumnDef,
  Column,
  Row,
  AccessorKeyColumnDefBase,
} from "@tanstack/react-table";
import { DataTable } from "@/components/ui/DataTable";
import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

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
      {isNaN(amount) || amount == 0
        ? "-"
        : formatToTwoDecimals(amount, column.id)}
    </div>
  );
};

const ColumnIdVsLabel: Record<string, string> = {
  schemeName: "Scheme Name",
  aum: "AUM (Cr)",
  oneMonth: "1M",
  threeMonth: "3M",
  sixMonth: "6M",
  oneYear: "1Y",
  twoYear: "2Y",
  threeYear: "3Y",
  fourYear: "4Y",
  fiveYear: "5Y",

  lastYear: getYear(),
  secondLastYear: getYear(1),
  thirdLastYear: getYear(2),
  fourthLastYear: getYear(3),
  fifthLastYear: getYear(4),

  sharpeRatio: "Sharpe Ratio",
  maxDrawdown: "Max Drawdown",
};

const allcolumns: ColumnDef<FundExploreData>[] = [
  {
    accessorKey: "schemeName",
    maxSize: 200,
    size: 200,
    enableHiding: false,
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
    accessorKey: "fourYear",
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
    accessorKey: "lastYear",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "secondLastYear",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "thirdLastYear",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "fourthLastYear",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={ColumnIdVsLabel[column.id]}
      />
    ),
    cell: ({ row, column }) => <CellContent row={row} column={column} />,
  },
  {
    accessorKey: "fifthLastYear",
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

(
  allcolumns as Array<AccessorKeyColumnDefBase<FundExploreData, unknown>>
).forEach((column) => {
  if (column.accessorKey && typeof column.accessorKey === "string") {
    column.id = column.accessorKey;
  }
});

const typeVsColumns: Record<string, Array<string>> = {
  "Periodic Returns": [
    "schemeName",
    "aum",
    "oneMonth",
    "threeMonth",
    "sixMonth",
    "lastYear",
    "secondLastYear",
    "thirdLastYear",
    "fourthLastYear",
    "fifthLastYear",
  ],
  CAGR: [
    "schemeName",
    "aum",
    "oneMonth",
    "threeMonth",
    "sixMonth",
    "oneYear",
    "twoYear",
    "threeYear",
    "fourYear",
    "fiveYear",
    "sharpeRatio",
    "maxDrawdown",
  ],
};

export const MainContentSection = () => {
  const searchParams = useSearchParams();
  const [tableData, setTableData] = React.useState<FundExploreData[]>([]);
  const [filter, setFilter] = React.useState<string>(
    searchParams.get("filter") || "Top Picks"
  );
  const [type, setType] = React.useState<string>("CAGR");
  const [columns, setColumns] = React.useState<ColumnDef<FundExploreData>[]>(
    allcolumns.filter((col) => col.id && typeVsColumns[type].includes(col.id))
  );

  useEffect(() => {
    (async () => {
      const resp = await fetchFundsForExplore({
        per_page: "3000",
        page: "0",
        filter,
      });
      setTableData(resp.data);
    })();
  }, [filter]);

  useEffect(() => {
    setColumns(
      allcolumns.filter((col) => col.id && typeVsColumns[type].includes(col.id))
    );
  }, [type]);

  return (
    <div className="flex flex-col w-full items-start rounded-lg pb-20">
      <DataTable
        columns={columns}
        data={tableData}
        search={searchParams.get("search")}
        filterBar={
          <DataTableFilterOptions filter={filter} setFilter={setFilter} />
        }
        typeBar={<TableTypeBar type={type} setType={setType} />}
      />
    </div>
  );
};

function DataTableFilterOptions({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (filter: string) => void;
}) {
  const filters = [
    "Top Picks",
    "Sector Leaders",
    "Elite Fund Managers",
    "Consistent Compounders",
    "Top Grossers",
    "Rising Stars",
    "All Funds",
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((f) => (
        <Button
          variant={filter == f ? "default" : "outline"}
          key={f}
          className={`capitalize`}
          onClick={() => setFilter(f)}
        >
          {f}
        </Button>
      ))}
    </div>
  );
}

function TableTypeBar({
  type,
  setType,
}: {
  type: string;
  setType: (filter: string) => void;
}) {
  const types = ["CAGR", "Periodic Returns"];
  return (
    <div className="flex gap-2">
      {types.map((f) => (
        <Button
          key={f}
          variant={type == f ? "default" : "outline"}
          className="capitalize"
          onClick={() => setType(f)}
        >
          {f}
        </Button>
      ))}
    </div>
  );
}

function formatToTwoDecimals(num: number, colId: string) {
  if (colId == "aum") {
    return Math.round(num);
  }
  return (Math.floor(num * 100) / 100).toFixed(2);
}

function getYear(offset: number = 0) {
  const date = new Date();
  const year = date.getFullYear();
  return (year - offset).toString();
}

export default MainContentSection;
