import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { Heart } from "lucide-react";
import { use, useMemo } from "react";
import { useSearchParams } from "react-router";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { SearchControl } from "../search/ui/SearchControl";
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "6";
  const activeTab = searchParams.get("tab") || "all";
  const category = searchParams.get("category") || "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();

  const { favoriteCount, favorites } = use(FavoriteHeroContext);

  return (
    <>
      <CustomJumbotron
        title="Universo de Superhéroes"
        description="Descubre, explora y administra tus superhéroes y villanos favoritos."
      />

      <CustomBreadcrumbs
        items={[
          { label: "Inicio", path: "/" },
          { label: "Universo de Superhéroes", path: "/" },
        ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControl />

      {/* Tabs */}
      <Tabs value={selectedTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() => {
              setSearchParams((prev) => {
                prev.set("tab", "all");
                prev.set("category", "all");
                prev.set("page", "1");
                return prev;
              });
            }}
          >
            All Characters ({summary?.totalHeroes})
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            onClick={() => {
              setSearchParams((prev) => {
                prev.set("tab", "favorites");
                prev.set("category", "all");
                prev.set("page", "1");
                return prev;
              });
            }}
            className="flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Favorites ({favoriteCount})
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() => {
              setSearchParams((prev) => {
                prev.set("tab", "heroes");
                prev.set("category", "hero");
                prev.set("page", "1");
                return prev;
              });
            }}
          >
            Heroes ({summary?.heroCount})
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => {
              setSearchParams((prev) => {
                prev.set("tab", "villains");
                prev.set("category", "villain");
                prev.set("page", "1");
                return prev;
              });
            }}
          >
            Villains ({summary?.villainCount})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <HeroGrid heroes={heroesResponse?.heroes} />
        </TabsContent>
        <TabsContent value="favorites">
          <HeroGrid heroes={favorites} />
        </TabsContent>
        <TabsContent value="heroes">
          <HeroGrid heroes={heroesResponse?.heroes} />
        </TabsContent>
        <TabsContent value="villains">
          <HeroGrid heroes={heroesResponse?.heroes} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      {selectedTab !== "favorites" && (
        <CustomPagination totalPages={heroesResponse?.pages ?? 0} />
      )}
    </>
  );
};
