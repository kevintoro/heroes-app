import type { Hero } from "@/heroes/types/hero.interface";
import { heroApi } from "../hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

export interface AdvancedSearchOptions {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: number | string;
}

export const searchHeroesAction = async (
  options: AdvancedSearchOptions
): Promise<Hero[]> => {
  const { name, team, category, universe, status, strength } = options;

  if (!name && !team && !category && !universe && !status && !strength) {
    return [];
  }

  const { data } = await heroApi.get<Hero[]>("/search", {
    params: { name, team, category, universe, status, strength },
  });

  return data.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));
};
