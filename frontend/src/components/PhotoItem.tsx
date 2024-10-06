import DownloadButton from "./ui/DownloadButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import { PhotoType } from "../types";

function usePhotoContext() {
  const photoContext = useContext(PhotoContext);
  if (photoContext === null) {
    throw new Error("usePhotoContext must be used within a PhotoProvider");
  }
  return photoContext;
}

export default function PhotoItem({ photo }: { photo: PhotoType }) {
  const { handlePhotoClick } = usePhotoContext();

  return (
    <div className="relative cursor-pointer" key={photo.id}>
      <LazyLoadImage
        onClick={() => handlePhotoClick(photo.id)}
        className="photos-gallery mb-3 rounded-lg"
        src={photo.src.large}
        alt={photo.alt}
        width={500}
        height={500}
      />
      <DownloadButton
        url={photo.src.original}
        fileName={photo.alt.replace(/ /g, "_")}
      />
    </div>
  );
}
