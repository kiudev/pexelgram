import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const searchPhotos = async (query: string) => {
      try {
        const response = await fetch(`http://localhost:4000/api/photos/search?query=${query}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    searchPhotos("mountain");
  }, []);

  return (
    <div className="content">
      <h1>Pexelgram</h1>
      <p>Search for beautiful images with Pexelgram.</p>
      <div className="images">
        {images.map((image: any) => (
          <img width={40} src={image.src.original} alt={image.alt} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
