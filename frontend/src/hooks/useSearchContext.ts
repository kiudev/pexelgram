import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { SearchContextType } from '../types';

export function useSearchContext(): SearchContextType {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
