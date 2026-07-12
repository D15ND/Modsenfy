import { useEffect, useState } from 'react';

import { API_URL } from '@/services/API';
import { Track } from '@/types/track';

const limitCategory = 8;

export const useTrendingTracks = (category: string, page: number) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${API_URL}/tracks/trending?limit=${limitCategory}&offset=${page * limitCategory}&sort_method=${category}`,
        );
        const data = await response.json();
        setTracks(data.data);
      } catch {
        throw new Error('Error category request API');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryRequest();
  }, [category, page]);

  return { tracks, isLoading };
};
