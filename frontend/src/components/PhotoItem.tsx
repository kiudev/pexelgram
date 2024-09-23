import DownloadButton from "./DownloadButton";

export default function PhotoItem({ photo }: any) {
  return (
    <div className="relative cursor-pointer" key={photo.id}>
      <img
        className="photos-gallery mb-3 rounded-lg hover:opacity-10"
        src={photo.src.large}
        alt={photo.alt}
      />
      <DownloadButton url={photo.src.original} fileName={photo.alt.replace(/ /g, '_')} />
    </div>
  );
}
