import { useEffect, useState } from 'react';

import { API_URL } from '@/services/API';
import { Track } from '@/types/track';

const limitRecommended = 5;

export const useRecommendedTracks = () => {
  const [recommendsTracks, setRecommendsTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchRecommendedRequest = async () => {
      try {
        const response = await fetch(`${API_URL}/tracks/recommended?limit=${limitRecommended}`);
        const data = await response.json();
        setRecommendsTracks(data.data);
      } catch {
        throw new Error('error recommended API');
      }
    };
    fetchRecommendedRequest();
  }, []);

  return { recommendsTracks };
};
