import './styles/globals.scss';

import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router';

import { CATEGORY } from '@/types/category';

import Spinner from './components/ui/Spinner/Spinner';
import { categoryContext } from './contexts/categoryContext';
import { router } from './routes';

const App = () => {
  const [category, setCategory] = useState(CATEGORY.POPULAR);

  return (
    <categoryContext.Provider value={{ category, setCategory }}>
      <Suspense fallback={<Spinner isLarge={false} />}>
        <RouterProvider router={router} />
      </Suspense>
    </categoryContext.Provider>
  );
};

export default App;
