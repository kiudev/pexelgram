import { ChangeEvent, RefObject } from "react";

export interface SearchContextType {
  searchValue: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  photosRef: RefObject<HTMLDivElement>;
  photos: PhotoType[] | null;
  searchPhotos: (query: string) => void;
}

export interface PhotoContextType {
  selectedPhoto: {
    id: number;
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
  } | null;
  handlePhotoClick: (id: number) => void;
  setSelectedPhoto: (photo: {
    id: number;
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
  } |  null) => void;

}

export interface PhotoType {
  id: number;
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
}

export interface FormProps {
  onSearch?: (query: string) => void;
}
