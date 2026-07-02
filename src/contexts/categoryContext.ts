/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

export const categoryContext = createContext({
  category: 'popular',
  setCategory: (category: string) => {},
});
