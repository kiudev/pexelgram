import { ChangeEvent, createContext, ReactNode, useState, useRef } from "react";
import { SearchContextType } from "../types";

export const SearchContext = createContext<SearchContextType | null>(null);

export default function SearchContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [photos, setPhotos] = useState<[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const photosRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const searchPhotos = async (query: string) => {
    try {
      if (!query) {
        return;
      }

      const response = await fetch(
        `http://localhost:4000/v1/photos/search?query=${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setPhotos(data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValues = {
    searchValue,
    handleSearchChange,
    photosRef,
    photos,
    searchPhotos,
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
}
