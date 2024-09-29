import { createContext, ReactNode, useState } from "react";

interface PhotoContextType {
  selectedPhoto: number | null;
  handlePhotoClick: (id: number) => void;
}

export const PhotoContext = createContext<PhotoContextType | null>(null);

export default function PhotoProvider({ children }: { children: ReactNode }) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const handlePhotoClick = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4000/v1/photos/${id}`)
      const data = await response.json();
      console.log(data)
      setSelectedPhoto(data.photo);
    } catch (error) {
      console.error(error);
    }
  }

  const contextValues = {
    selectedPhoto,
    handlePhotoClick,
  }

  return (
    <PhotoContext.Provider value={contextValues}>
      {children}
    </PhotoContext.Provider>
  )
}
