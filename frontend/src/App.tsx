import "./App.css";

// layouts
import PhotosLayout from "./layout/PhotosLayout";

// context
import SearchContextProvider from "./context/SearchContext";
import PhotoProvider from "./context/PhotoContext";

export default function App() {
  return (
    <div className="min-w-screen min-h-screen bg-mixed-100 flex flex-col px-[15vw]">
      <SearchContextProvider>
        <PhotoProvider>
          <PhotosLayout />
        </PhotoProvider>
      </SearchContextProvider>
    </div>
  );
}
