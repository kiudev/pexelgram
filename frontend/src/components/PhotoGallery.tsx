import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import PhotoItem from "./PhotoItem";

interface Photo {
  id: number;
  src: {
    original: string;
    large: string;
  };
  alt: string;
}

interface PhotosProps {
  photos: Photo[];
}

function useSearchContext() {
  const searchContext = useContext(SearchContext);
  if (searchContext === null) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return searchContext;
}

export default function PhotoGallery({ photos }: PhotosProps) {
  const { photosRef } = useSearchContext();

  return (
    <div className="md:columns-2 lg:columns-3 gap-3 m-auto" ref={photosRef}>
      {photos.map((photo: Photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
