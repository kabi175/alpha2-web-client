"use client";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FundHouseData } from "@/hooks/useFundHouse";
import { endOfMonth, startOfMonth } from "date-fns";
import React from "react";
import { DateRange } from "react-day-picker";

export default function RefetchDialog({
  fundHouse,
}: {
  fundHouse: FundHouseData;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: startOfMonth(new Date()),
    to: endOfMonth(new Date()),
  });

  const refetchReports = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/fund-house/${fundHouse.id}/action/refetch-reports`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          from: date?.from?.toISOString(),
          to: date?.to?.toISOString(),
        }),
      }
    );
  };

  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <Button variant="outline">Refetch Reports</Button>
      </DialogTrigger>
      <DialogContent className="p-4">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action will refetch reports for the selected dates.
          </DialogDescription>
        </DialogHeader>

        {/* <Calendar
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        /> */}

        <DatePickerWithRange date={date} setDate={setDate} />

        <DialogFooter className="sm:justify-end p-4">
          <DialogClose asChild>
            <Button onClick={refetchReports}>Refetch</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
