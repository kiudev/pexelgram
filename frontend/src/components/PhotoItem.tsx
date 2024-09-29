import DownloadButton from "./DownloadButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

function usePhotoContext() {
  const photoContext = useContext(PhotoContext);
  if (photoContext === null) {
    throw new Error('usePhotoContext must be used within a PhotoProvider');
  }
  return photoContext;
}

export default function PhotoItem({ photo }: any) {
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
