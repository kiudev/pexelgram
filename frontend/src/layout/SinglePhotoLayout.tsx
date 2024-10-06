import { useState, useEffect, useRef, ChangeEvent } from "react";
import { usePhotoContext } from "../hooks/usePhotoContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { X } from "lucide-react";
import DownloadButton from "../components/ui/DownloadButton";

export default function SinglePhotoLayout() {
  const { selectedPhoto, setSelectedPhoto } = usePhotoContext();
  const dialogPhoto = useRef<HTMLDialogElement>(null);
  const [selectedSize, setSelectedSize] = useState<string>("original");

  const handleClick = () => {
    dialogPhoto.current?.close();
    setSelectedPhoto(null);
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  useEffect(() => {
    if (selectedPhoto && dialogPhoto.current) {
      dialogPhoto.current.showModal();
    }
  }, [selectedPhoto]);

  return (
    <dialog
      ref={dialogPhoto}
      className="w-screen min-h-screen bg-mixed-100/50 flex flex-row justify-center items-center animate-fade-in"
    >
      <div className="max-w-[800px] max-h-[800px] relative overflow-hidden bg-mixed-100">
        <LazyLoadImage
          className="rounded-lg w-screen h-screen max-w-full max-h-full object-contain absolute"
          src={selectedPhoto?.src.original}
          alt={selectedPhoto?.alt}
          width={selectedPhoto?.width}
          height={selectedPhoto?.height}
          placeholderSrc={selectedPhoto?.src.small}
        />

        <button
          className="text-white rounded-full absolute right-2 top-2"
          onClick={handleClick}
        >
          <X width={40} height={40} />
        </button>

        <div>
          <select
            onChange={handleSizeChange}
            name="size"
            className="absolute right-16 bottom-2 bg-green-100 text-green-600 rounded-lg outline-none p-2 text-lg"
          >
            <option value="original">Original</option>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>

          {selectedSize === "original" && (
            <DownloadButton
              url={selectedPhoto?.src.original}
              fileName={selectedPhoto?.alt.replace(/ /g, "_")}
            />
          )}

          {selectedSize === "large" && (
            <DownloadButton
              url={selectedPhoto?.src.large}
              fileName={selectedPhoto?.alt.replace(/ /g, "_")}
            />
          )}

          {selectedSize === "medium" && (
            <DownloadButton
              url={selectedPhoto?.src.medium}
              fileName={selectedPhoto?.alt.replace(/ /g, "_")}
            />
          )}

          {selectedSize === "small" && (
            <DownloadButton
              url={selectedPhoto?.src.small}
              fileName={selectedPhoto?.alt.replace(/ /g, "_")}
            />
          )}
        </div>
      </div>
    </dialog>
  );
}
