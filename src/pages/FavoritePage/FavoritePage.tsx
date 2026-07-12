import { useState } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import TrackCard from '@/components/track/TrackCard/TrackCard';
import Player from '@/components/ui/Player/Player';
import { getFavorites, toggleFavorite } from '@/services/favoritesService';
import { Track } from '@/types/track';

import styles from './FavoritePage.module.scss';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState(getFavorites);

  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const isPlay = (track: Track) => {
    return currentlyPlaying === track.id;
  };

  const handleSaveTrack = (track: Track) => {
    setFavorites(toggleFavorite(track));
  };

  return (
    <div className={styles.favoritepage}>
      {favorites.length > 0 && (
        <div className={styles.player_box}>
          <div className={styles.select_player_box}>
            <h3 className={styles.select_player_description}>
              {selectedTrack ? selectedTrack.title : 'Select a track to listen to'}
            </h3>
            <Player
              selectedTrack={selectedTrack}
              onPlay={() => {
                if (selectedTrack?.id) {
                  setCurrentlyPlaying(selectedTrack.id);
                }
              }}
              onPause={() => {}}
              onEnded={() => setCurrentlyPlaying(null)}
            />
          </div>
        </div>
      )}
      {favorites.length === 0 ? (
        <div className={styles.plug_box}>
          <h2 className={styles.results_subtitle}>No favorite tracks</h2>
        </div>
      ) : (
        <div className={styles.results_box}>
          <h3 className={styles.results_title}>Your Favorites</h3>
          <div className={styles.results_container}>
            <ErrorBoundary>
              <div className={styles.results_cards}>
                {favorites.map((track) => (
                  <TrackCard
                    key={track.id}
                    track={track}
                    playing={isPlay(track)}
                    favorite
                    cardType="base"
                    onPlay={setSelectedTrack}
                    onToggleFavorite={handleSaveTrack}
                  />
                ))}
              </div>
            </ErrorBoundary>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
