import { useRef, RefObject, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

interface Photo {
  id: number;
  src: {
    large: string;
  };
  alt: string;
}

interface PhotosProps {
  photos: Photo[];
}

export default function Photos({ photos }: PhotosProps) {
  const searchContext = useContext(SearchContext);

  const { photosRef } = searchContext || {};

  return (
    <div className="columns-3 gap-3 m-auto py-20" ref={photosRef}>
      {photos.map((photo: any) => (
        <div>
          <img
            className="photos-gallery mb-3 rounded-lg"
            src={photo.src.large}
            alt={photo.alt}
            key={photo.id}
          />
        </div>
      ))}
    </div>
  );
}
