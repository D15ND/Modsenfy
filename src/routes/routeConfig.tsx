import RootLayout from '@/components/layout/RootLayout/RootLayout';
import FavoritePage from '@/pages/FavoritePage/FavoritePage';
import HomePage from '@/pages/HomePage/HomePage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

import { ROUTE_PATHS } from './routePaths';

export const appRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTE_PATHS.FAVORITES, element: <FavoritePage /> },
      { path: ROUTE_PATHS.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
];
