import { createContext } from 'react';

export const categoryContext = createContext({
  category: 'popular',
  setCategory: (_category: string) => {},
});
