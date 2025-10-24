import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";

interface FilterSelectProps {
  label: string;
  options: string[];
  placeholder: string;
  queryParamKey: string;
}

export const FilterSelect = ({
  label,
  options,
  placeholder,
  queryParamKey,
}: FilterSelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSelect = (value: string) => {
    setSearchParams((prev) => {
      if (value === "all") {
        prev.delete(queryParamKey);
      } else {
        prev.set(queryParamKey, value);
      }
      return prev;
    });
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Select
        onValueChange={handleChangeSelect}
        defaultValue={searchParams.get(queryParamKey) ?? ""}
      >
        <SelectTrigger className="w-full h-10 mt-2">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
