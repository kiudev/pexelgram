import { useState, useEffect, useContext } from "react";

// components
import Form from "../components/Form";

// context
import { SearchContext } from "../context/SearchContext";
import Photos from "../components/Photos";

export default function PhotosLayout() {
  const [photos, setPhotos] = useState<any[]>([]);
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("SearchForm must be used within a SearchContextProvider");
  }

  const searchPhotos = async (query: string) => {
    try {
      if (!query) {
        return;
      }

      const response = await fetch(
        `http://localhost:4000/api/photos/search?query=${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <main className="flex flex-col min-h-screen place-content-center">
        <header>
          <Form onSearch={searchPhotos} />
        </header>
      </main>
      <Photos photos={photos} />
    </div>
  );
}
