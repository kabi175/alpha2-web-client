"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Table } from "@tanstack/react-table";
import { Settings2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { Button } from "./button";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

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

  lastYear: "2025",
  secondLastYear: "2024",
  thirdLastYear: "2023",
  fourthLastYear: "2022",
  fifthLastYear: "2021",

  sharpeRatio: "Sharpe Ratio",
  maxDrawdown: "Max Drawdown",
};

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <Settings2 />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {ColumnIdVsLabel[column.id]}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
