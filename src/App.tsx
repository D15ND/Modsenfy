import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router';
import './App.scss';
import Spinner from './components/ui/Spinner/Spinner';
import { categoryContext } from './contexts/categoryContext';
import { router } from './routes';

const App = () => {
  const [category, setCategory] = useState('popular');

  return (
    <categoryContext.Provider value={{ category, setCategory }}>
      <Suspense fallback={<Spinner size="s" />}>
        <RouterProvider router={router} />
      </Suspense>
    </categoryContext.Provider>
  );
};

export default App;
