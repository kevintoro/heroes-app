import { useMemo } from "react";
import { useSearchParams } from "react-router";

export const useHeroesPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "6";
  const activeTab = searchParams.get("tab") || "all";
  const category = searchParams.get("category") || "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const handleSetPage = (page: number) => {
    setSearchParams((prev) => {
      prev.set("page", page.toString());
      return prev;
    });
  };

  const handleSetLimit = (limit: number) => {
    setSearchParams((prev) => {
      prev.set("limit", limit.toString());
      return prev;
    });
  };

  const handleSetCategory = (category: string) => {
    setSearchParams((prev) => {
      prev.set("category", category);
      return prev;
    });
  };

  const handleSetActiveTab = (tab: string) => {
    console.log("handleSetActiveTab", tab);
    setSearchParams((prev) => {
      console.log("prev", prev);
      prev.set("tab", tab);
      return prev;
    });
  };

  return {
    category,
    limit,
    page,
    selectedTab,
    handleSetActiveTab,
    handleSetCategory,
    handleSetLimit,
    handleSetPage,
  };
};
