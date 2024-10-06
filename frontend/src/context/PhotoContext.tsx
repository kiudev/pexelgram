import { createContext, ReactNode, useState } from "react";
import { PhotoContextType } from "../types";

export const PhotoContext = createContext<PhotoContextType | null>(null);

export function PhotoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    id: number
    src: {
      original: string;
      large2x: string;
      large: string;
      medium: string;
      small: string;
      portrait: string;
      landscape: string;
      tiny: string;
    };
    alt: string;
    width: number;
    height: number;
  } | null>(null);

  const handlePhotoClick = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4000/v1/photos/${id}`);
      const data = await response.json();
      setSelectedPhoto(data);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValues = {
    selectedPhoto,
    handlePhotoClick,
    setSelectedPhoto
  };

  return (
    <PhotoContext.Provider value={contextValues}>
      {children}
    </PhotoContext.Provider>
  );
}
