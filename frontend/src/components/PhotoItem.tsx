import DownloadButton from "./ui/DownloadButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoType } from "../types";
import { usePhotoContext } from "../context";

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
