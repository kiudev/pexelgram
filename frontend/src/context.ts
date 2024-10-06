import { useContext } from "react";
import { SearchContext } from "./context/SearchContext";
import { PhotoContext } from "./context/PhotoContext";

export function useSearchContext() {
  const searchContext = useContext(SearchContext);
  if (searchContext === null) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return searchContext;
}

export function usePhotoContext() {
  const photoContext = useContext(PhotoContext);
  if (photoContext === null) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return photoContext;
}
