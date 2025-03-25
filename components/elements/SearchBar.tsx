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

interface Option {
  value: string;
  label: string;
}

interface SearchBarProps {
  placeholder: string;
  options: Option[];
  selected?: Option;
  onValueChange?: (option: Option) => void;
  onSearch?: (query?: string) => Promise<Array<Option>>;
  onBeforeOpen?: () => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = [props.selected?.value, props.onValueChange];
  const [groupedOptions, setDroupedOptions] = React.useState(
    _.groupBy(props.options, "group")
  );

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
          {value
            ? props.options.find((option) => option.value === value)?.label
            : props.placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[478px] p-0">
        <Command>
          <CommandInput
            placeholder={props.placeholder}
            onValueChange={async (search) => {
              if (!props.onSearch) {
                return;
              }
              const opts = await props.onSearch(search);
              setDroupedOptions(_.groupBy(opts, "group"));
            }}
          />
          <CommandList>
            <CommandEmpty>No Fund found.</CommandEmpty>
            {Object.keys(groupedOptions).map((group) => {
              const opts = groupedOptions[group];
              return (
                <CommandGroup key={group} heading={group} value={group}>
                  {opts.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      keywords={[option.label]}
                      onSelect={(currentValue) => {
                        const option = props.options.find(
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
            })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
