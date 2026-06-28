import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import { ROUTE_PATHS } from './routePaths';

export const appRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <p>HomePage</p> },
      { path: ROUTE_PATHS.FAVORITES, element: <p>FavoritesPage</p> },
      { path: ROUTE_PATHS.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
];
