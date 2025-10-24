import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Grid, Plus, Search, SortAsc } from "lucide-react";
import { useRef } from "react";
import { useSearchParams } from "react-router";
import { AdvancedFilters } from "./AdvancedFilters";

export const SearchControl = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryParam = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = inputRef.current?.value.trim();
    if (e.key === "Enter" && inputValue !== "") {
      setQueryParam("name", inputValue ?? "");
    }
  };

  const toggleAdvancedFilters = () => {
    if (searchParams.get("active-accordion") === "advanced-filters") {
      setSearchParams((prev) => {
        prev.delete("active-accordion");
        return prev;
      });
      return;
    }
    setQueryParam("active-accordion", "advanced-filters");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search heroes, villains, powers, teams..."
            className="pl-12 h-12 text-lg bg-white"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            defaultValue={searchParams.get("name") ?? ""}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            variant={
              searchParams.get("active-accordion") === "advanced-filters"
                ? "default"
                : "outline"
            }
            className="h-12"
            onClick={toggleAdvancedFilters}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Button variant="outline" className="h-12">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort by Name
          </Button>

          <Button variant="outline" className="h-12">
            <Grid className="h-4 w-4" />
          </Button>

          <Button className="h-12">
            <Plus className="h-4 w-4 mr-2" />
            Add Character
          </Button>
        </div>
      </div>
      <AdvancedFilters />
    </>
  );
};
