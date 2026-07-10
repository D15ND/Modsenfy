import homeImg from '@/assets/images/icons/home.svg?react';
import microphoneImg from '@/assets/images/icons/microphone.svg?react';
import { ROUTE_PATHS } from '@/routes/routePaths';

export const Navigation = [
  { icon: homeImg, title: 'Home', route: ROUTE_PATHS.HOME },
  { icon: microphoneImg, title: 'Your favorites', route: ROUTE_PATHS.FAVORITES },
];
