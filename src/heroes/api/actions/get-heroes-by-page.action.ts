import type { HeroesResponse } from "../../types/get-heroes.response";
import { heroApi } from "../hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (
  page: number,
  limit: number,
  category: string
): Promise<HeroesResponse> => {
  if (isNaN(page)) {
    page = 1;
  }

  if (isNaN(limit)) {
    limit = 0;
  }

  const { data } = await heroApi.get<HeroesResponse>(`/`, {
    params: {
      offset: (page - 1) * limit,
      limit,
      category,
    },
  });
  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));
  return {
    ...data,
    heroes,
  };
};
