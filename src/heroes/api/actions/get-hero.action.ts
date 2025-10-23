import type { Hero } from "@/heroes/types/hero.interface";
import { heroApi } from "../hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroBySlugAction = async (slug: string): Promise<Hero> => {
  const { data } = await heroApi.get<Hero>(`/${slug}`);
  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  };
};
