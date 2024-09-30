import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import PhotoItem from "@/components/PhotoItem";
import { PhotoType } from "@/types";

function useSearchContext() {
  const searchContext = useContext(SearchContext);
  if (searchContext === null) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return searchContext;
}

export default function PhotosLayout() {
  const { photos, photosRef } = useSearchContext();

  return (
    <div className="md:columns-2 lg:columns-3 gap-3 m-auto" ref={photosRef}>
      {photos.map((photo: PhotoType) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
