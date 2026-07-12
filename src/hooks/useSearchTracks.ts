import { useEffect, useState } from 'react';

import { API_URL } from '@/services/API';
import { Track } from '@/types/track';

export const limitCategory = 8;

export const useSearchTracks = (searchMusic: string) => {
  const [searchResults, setSearchResults] = useState<Track[]>([]);

  useEffect(() => {
    if (!searchMusic) {
      setSearchResults([]);
      return;
    }

    const fetchSearchRequest = async () => {
      try {
        const response = await fetch(
          `${API_URL}/tracks/search?query=${searchMusic}&limit=${limitCategory}`,
        );
        const data = await response.json();
        setSearchResults(data.data || []);
      } catch {
        throw new Error('error search API');
      }
    };
    fetchSearchRequest();
  }, [searchMusic]);

  return { searchResults };
};
