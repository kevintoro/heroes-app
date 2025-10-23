import type { SummaryResponse } from "@/heroes/types/get-summary";
import { heroApi } from "../hero.api";

export const getSummaryAction = async (): Promise<SummaryResponse> => {
  const { data } = await heroApi.get<SummaryResponse>(`/summary`);
  return data;
};
