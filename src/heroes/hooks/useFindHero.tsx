import { useQuery } from "@tanstack/react-query";
import { getHeroBySlugAction } from "../api/actions/get-hero.action";

export const useFindHero = (slug: string = "") => {
  return useQuery({
    queryKey: ["find-hero", slug],
    queryFn: () => getHeroBySlugAction(slug),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
