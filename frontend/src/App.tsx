// layouts
import MainLayout from "./layout/MainLayout";

// context
import { SearchContextProvider } from "./context/SearchContext";
import { PhotoContextProvider } from "./context/PhotoContext";

export default function App() {
  return (
    <div className="min-w-screen min-h-screen bg-mixed-100 flex flex-col px-[15vw]">
      <SearchContextProvider>
        <PhotoContextProvider>
          <MainLayout />
        </PhotoContextProvider>
      </SearchContextProvider>
    </div>
  );
}
