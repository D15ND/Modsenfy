import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import './App.scss';
import { router } from './routes';

const App = () => {
  return (
    <Suspense fallback={<p>will spinner</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
