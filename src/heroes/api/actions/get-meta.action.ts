import type { HeroesMeta } from "@/heroes/types/heroes-meta";
import { heroApi } from "../hero.api";

export const getHeroesMetaAction = async (): Promise<HeroesMeta> => {
  const { data } = await heroApi.get<HeroesMeta>("/meta");
  return data;
};
