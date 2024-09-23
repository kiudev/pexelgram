import { useRef, RefObject, useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import Skeleton from "react-loading-skeleton";
import { Download } from "lucide-react";
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

export default function PhotoGallery({ photos }: PhotosProps) {
  const searchContext = useContext(SearchContext);

  const { photosRef, isLoading } = searchContext || {};

  return (
    <div className="columns-3 gap-3 m-auto" ref={photosRef}>
      {!isLoading ? (
        photos.map((item: Photo) => <PhotoItem photo={item} />)
      ) : (
        <p className="text-4xl text-red-500">Loading...</p>
      )}
    </div>
  );
}
