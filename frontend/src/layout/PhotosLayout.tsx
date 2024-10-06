import PhotoItem from "../components/PhotoItem";
import { PhotoType } from "../types";
import { useSearchContext } from "../hooks/useSearchContext";

export default function PhotosLayout() {
  const { photos, photosRef } = useSearchContext();

  return (
    <div className="md:columns-2 lg:columns-3 gap-3 m-auto" ref={photosRef}>
      {photos?.map((photo: PhotoType) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
