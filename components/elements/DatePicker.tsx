"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Matcher } from "react-day-picker";

interface DatePickerProps {
  placeholder: string;
  value: Date;
  onValueChange: (date: Date) => void;
  disabled?: Matcher | Matcher[] | undefined;
}

export default function DatePicker(props: DatePickerProps) {
  const date = props.value;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] h-[54px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, "PPP")
          ) : (
            <span>{props.placeholder || "Pick a date"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={props.value}
          onSelect={(d) => d && props.onValueChange(d)}
          initialFocus
          disabled={props.disabled}
        />
      </PopoverContent>
    </Popover>
  );
}
