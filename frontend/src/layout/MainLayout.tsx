import { usePhotoContext } from "../hooks/usePhotoContext";
import { useSearchContext } from "../hooks/useSearchContext";

import Form from "../components/Form";
import PhotosLayout from "./PhotosLayout";
import SinglePhotoLayout from "./SinglePhotoLayout";

export default function MainLayout() {
  const { searchPhotos } = useSearchContext();
  const { selectedPhoto } = usePhotoContext();

  return (
    <div>
      <main className="flex flex-col min-h-screen place-content-center">
        <header>
          <Form onSearch={searchPhotos} />
        </header>
      </main>
      <PhotosLayout />

      {selectedPhoto && <SinglePhotoLayout />}
    </div>
  );
}
