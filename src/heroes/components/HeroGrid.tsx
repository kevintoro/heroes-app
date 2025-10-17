import { HeroGridCard } from "./HeroGridCard";

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Hero Card 1 - Superman */}
      <HeroGridCard
        name="Superman"
        description="The Last Son of Krypton, protector of Earth and symbol of hope for all humanity."
        strength={100}
        intelligence={100}
        speed={100}
        durability={100}
        firstAppeared="1938"
        imageUrl="/placeholder.svg?height=300&width=300"
        isActive={true}
        universe="DC"
      />
    </div>
  );
};
