import {
  ChangeEvent,
  createContext,
  ReactNode,
  useState,
  useRef,
  RefObject,
} from "react";

interface SearchContextType {
  searchValue: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  photosRef: RefObject<HTMLDivElement>;
}

export const SearchContext = createContext<SearchContextType | null>(null);

export default function SearchContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchValue, setSearchValue] = useState<string>("");
  const photosRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const contextValues = {
    searchValue,
    handleSearchChange,
    photosRef,
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
}
