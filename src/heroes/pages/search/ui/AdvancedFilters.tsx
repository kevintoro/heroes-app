import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "react-router";
import { FilterSelect } from "./FilterSelect";
import { useHeroesMeta } from "@/heroes/hooks/useHeroMeta";

export const AdvancedFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const accordionValue = searchParams.get("active-accordion") || "";
  const strength = Number(searchParams.get("strength") ?? 0);

  const { data: heroesMeta } = useHeroesMeta();

  if (!heroesMeta) {
    return <div>Loading...</div>;
  }

  const setQueryParam = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    });
  };

  const handleStrengthChange = (value: number[]) => {
    setQueryParam("strength", value[0].toString());
  };

  return (
    <Accordion type="single" collapsible value={accordionValue}>
      <AccordionItem value="advanced-filters">
        <AccordionContent>
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Advanced Filters</h3>
              <Button variant="ghost">Clear All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FilterSelect
                label="Hero Team"
                options={heroesMeta.teams}
                placeholder="Select a team"
                queryParamKey="team"
              />
              <div className="space-y-2">
                <FilterSelect
                  label="Category"
                  options={heroesMeta.categories}
                  placeholder="Select a category"
                  queryParamKey="category"
                />
              </div>
              <div className="space-y-2">
                <FilterSelect
                  label="Universe"
                  options={heroesMeta.universes}
                  placeholder="Select a universe"
                  queryParamKey="universe"
                />
              </div>
              <div className="space-y-2">
                <FilterSelect
                  label="Status"
                  options={heroesMeta.statuses}
                  placeholder="Select a status"
                  queryParamKey="status"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">
                Minimum Strength: {strength}/10
              </label>
              <Slider
                defaultValue={[strength]}
                max={10}
                step={1}
                className="mt-2"
                onValueChange={handleStrengthChange}
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
