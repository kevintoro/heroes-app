import { useQuery } from "@tanstack/react-query";
import {
  searchHeroesAction,
  type AdvancedSearchOptions,
} from "../api/actions/search-heroes.action";

export const useAdvancedSearch = (options: AdvancedSearchOptions) => {
  return useQuery({
    queryKey: ["advanced-search", { ...options }],
    queryFn: () => searchHeroesAction(options),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
