import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import _ from "lodash";
import { Badge } from "../ui/badge";

interface Option {
  value: string;
  label: string;
}

interface SearchBarProps {
  placeholder: string;
  selected?: Option;
  onValueChange?: (option: Option) => void;
  onSearch?: (query?: string, type?: string) => Promise<Array<Option>>;
  onBeforeOpen?: () => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = [props.selected?.value, props.onValueChange];
  const [groupedOptions, setDroupedOptions] = React.useState(
    _.groupBy([] as Option[], "group")
  );
  const [fundType, setFundType] = React.useState<
    "Mutual Fund" | "PMF" | undefined
  >();
  function CommandOptions() {
    if (Object.keys(groupedOptions).length === 0 && fundType == null) {
      const commands = ["Search Mutual Funds...", "Search PMF..."];
      return commands.map((command) => (
        <CommandItem
          key={command}
          value={command}
          onSelect={async () => {
            const type =
              command === "Search Mutual Funds..." ? "Mutual Fund" : "PMF";
            setFundType(type);
            if (props.onSearch) {
              const opts = await props.onSearch("", type);
              setDroupedOptions(_.groupBy(opts, "group"));
            }
          }}
        >
          {command}
        </CommandItem>
      ));
    }
    return Object.keys(groupedOptions).map((group) => {
      const opts = groupedOptions[group];
      return (
        <CommandGroup key={group} heading={group} value={group}>
          {opts.map((option) => (
            <CommandItem
              key={option.value}
              value={option.value}
              keywords={[option.label]}
              onSelect={(currentValue) => {
                const option = groupedOptions[group].find(
                  (o) => o.value === currentValue
                );
                if (option && setValue) {
                  setValue(option);
                }
                setOpen(false);
              }}
            >
              {option.label}
              <Check
                className={cn(
                  "ml-auto",
                  value === option.label ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      );
    });
  }

  return (
    <Popover
      open={open}
      onOpenChange={(state) => {
        if (state) {
          props.onBeforeOpen?.();
        }
        setOpen(state);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[478px] h-[54px] justify-between"
        >
          {props.selected ? props.selected.label : props.placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[478px] p-0">
        <Command>
          {fundType && (
            <Badge
              className="m-2"
              variant="outline"
              onClick={() => setFundType(undefined)}
            >
              {fundType}
            </Badge>
          )}
          <CommandInput
            placeholder={props.placeholder}
            onValueChange={async (search) => {
              if (!props.onSearch) {
                return;
              }
              const opts = await props.onSearch(search, fundType);
              setDroupedOptions(_.groupBy(opts, "group"));
            }}
          />
          <CommandList>
            <CommandEmpty>No Fund found.</CommandEmpty>
            <CommandOptions />
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
