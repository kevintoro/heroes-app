import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "../../components/HeroStats";
import { SearchControl } from "./ui/SearchControl";
import { useAdvancedSearch } from "@/heroes/hooks/useAdvancedSearch";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { data: heroes = [] } = useAdvancedSearch({
    name: searchParams.get("name") ?? "",
    strength: searchParams.get("strength") ?? "",
    team: searchParams.get("team") ?? "",
    category: searchParams.get("category") ?? "",
    universe: searchParams.get("universe") ?? "",
    status: searchParams.get("status") ?? "",
  });

  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Superhéroes"
        description="Encuentra los superhéroes que buscas."
      />
      <CustomBreadcrumbs
        items={[
          { label: "Inicio", path: "/" },
          { label: "Buscador de Superhéroes", path: "/search" },
        ]}
      />
      <HeroStats />
      <SearchControl />
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
