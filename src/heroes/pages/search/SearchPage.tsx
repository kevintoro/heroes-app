import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { SearchControl } from "./ui/SearchControl";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
