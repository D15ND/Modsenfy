import { homeImg, microphoneImg } from '@/assets/images/icons';
import { ROUTE_PATHS } from '@/routes/routePaths';

export const Navigation = [
  { Icon: homeImg, title: 'Home', route: ROUTE_PATHS.HOME },
  { Icon: microphoneImg, title: 'Your favorites', route: ROUTE_PATHS.FAVORITES },
];
