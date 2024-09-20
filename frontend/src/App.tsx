import { useState, useEffect, useContext } from "react";
import "./App.css";

// components
import Form from "./components/Form";

// context
import { SearchContext } from "./context/searchContext";

export default function App() {
  const [images, setImages] = useState<any[]>([]);
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("SearchForm must be used within a SearchContextProvider");
  }

  const { searchValue } = searchContext || {};

  useEffect(() => {
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
        setImages(data.photos);
      } catch (error) {
        console.error(error);
      }
    };
    console.log('dentro de useEffect', searchValue)
    searchPhotos(searchValue);
  }, [searchValue]);

  return (
    <div className="min-w-screen min-h-screen bg-[#1b1823] flex flex-col px-[20vw]">
      <main className="flex flex-col min-h-screen border-2">
      <header className="flex flex-col items-center justify-start py-20">
      <Form />
      </header>

      <div className="columns-3 gap-3 m-auto">
        {images.map((image: any) => (
          <img
          className="mb-3 rounded-lg transition duration-300 ease-in-out hover:opacity-75"
            src={image.src.original}
            alt={image.alt}
            key={image.id}
          />
        ))}
      </div>
      </main>
    </div>
  );
}
