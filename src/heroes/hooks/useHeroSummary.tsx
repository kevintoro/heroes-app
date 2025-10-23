import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../api/actions/get-summary.action";

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ["summary"],
    queryFn: getSummaryAction,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
