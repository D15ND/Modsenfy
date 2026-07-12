import { Track } from '@/types/track';

const FAVORITES_KEY = 'favorites';

export const getFavorites = (): Track[] => {
  const saved = localStorage.getItem(FAVORITES_KEY);
  return saved ? JSON.parse(saved) : [];
};
export const saveFavorites = (favorites: Track[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
export const toggleFavorite = (track: Track): Track[] => {
  const favorites = getFavorites();
  const updated = favorites.some((item) => item.id === track.id)
    ? favorites.filter((item) => item.id !== track.id)
    : [...favorites, track];
  saveFavorites(updated);
  return updated;
};
