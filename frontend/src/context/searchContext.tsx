import { ChangeEvent, createContext, ReactNode, useState } from "react";

interface SearchContextType {
  searchValue: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default function SearchContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  return (
    <SearchContext.Provider value={{searchValue, handleSearchChange}}>
      {children}
    </SearchContext.Provider>
  );
}
