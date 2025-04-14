"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { ReactNode, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { DataTablePagination } from "./DataTablePagination";
import { Button } from "./button";
import { Info, LinkIcon } from "lucide-react";
import Link from "next/link";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  search?: string | null;
  filterBar?: ReactNode;
  typeBar?: ReactNode;
  tooltip: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  search,
  filterBar,
  typeBar,
  tooltip
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>(() => {
    if (columns.find((col) => col.id === "fiveYear")) {
      return [{ id: "fiveYear", desc: true }];
    }
    return [];
  });
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  useEffect(() => {
    if (search) {
      table.getColumn("schemeName")?.setFilterValue(search);
    }
  }, [search, table, columns]);
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse 2xl:flex-row  justify-between gap-4 py-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Filter Scheme..."
            value={
              (table.getColumn("schemeName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("schemeName")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          {typeBar ? typeBar : null}
        </div>

        <div className="flex gap-5">
          {filterBar ? filterBar : null}
          {/* <DataTableViewOptions table={table} /> */}
        </div>
      </div>
      <div className="pb-5 flex gap-2 items-center">
        <Info />
        {tooltip}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        width: `${cell.column.getSize()}px`,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="pt-4">
        <DataTablePagination table={table}>
          <Link href="/computation-methodology">
            <Button variant="link">
              <LinkIcon />
              Computation Methodology
            </Button>
          </Link>
        </DataTablePagination>
      </div>
    </div>
  );
}
