import { useQuery } from "@tanstack/react-query";
import { getHeroesMetaAction } from "../api/actions/get-meta.action";

export const useHeroesMeta = () => {
  return useQuery({
    queryKey: ["heroes-meta"],
    queryFn: () => getHeroesMetaAction(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
