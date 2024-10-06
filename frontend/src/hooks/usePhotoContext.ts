import { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import { PhotoContextType } from '../types';

export function usePhotoContext(): PhotoContextType {
  const context = useContext(PhotoContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}
