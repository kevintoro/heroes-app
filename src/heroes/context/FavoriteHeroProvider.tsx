import { useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";
import { FavoriteHeroContext } from "./FavoriteHeroContext";

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoritesToLocalStorage = (favorites: Hero[]) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage()
  );

  const toggleFavorite = (hero: Hero) => {
    const heroExists = favorites.find((h) => h.id === hero.id);
    if (heroExists) {
      const newHeroes = favorites.filter((h) => h.id !== hero.id);
      setFavorites(newHeroes);
    } else {
      setFavorites([...favorites, hero]);
    }
  };

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };

  return (
    <FavoriteHeroContext
      value={{
        favorites,
        favoriteCount: favorites.length,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
