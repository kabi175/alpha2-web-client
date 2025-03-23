import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface SearchBarProps {
  placeholder: string;
  options: Option[];
  onValueChange?: (value: string) => void;
  onBeforeOpen?: () => void;
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <Select
      onValueChange={props.onValueChange}
      onOpenChange={(state) => {
        if (state) {
          props.onBeforeOpen?.();
        }
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Mutual Fund</SelectLabel>
          {props.options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
