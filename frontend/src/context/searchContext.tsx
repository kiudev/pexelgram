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
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export default function SearchContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchValue, setSearchValue] = useState<string>("");
  const photosRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const contextValues = {
    searchValue,
    handleSearchChange,
    photosRef,
    isLoading,
    setIsLoading,
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
}
