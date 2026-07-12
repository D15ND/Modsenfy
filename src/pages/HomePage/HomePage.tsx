import { useContext, useState } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import TrackCard from '@/components/TrackCard/TrackCard';
import Accordion from '@/components/ui/Accordion/Accordion';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import Player from '@/components/ui/Player/Player';
import Spinner from '@/components/ui/Spinner/Spinner';
import { categoryContext } from '@/contexts/categoryContext';
import {
  limitCategory,
  useRecommendedTracks,
  useSearchTracks,
  useTrendingTracks,
} from '@/hooks/index';
import { getFavorites, toggleFavorite } from '@/services/favoritesService';
import { Track } from '@/types/track';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const [searchMusic, setSearchMusic] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [page, setPage] = useState(0);
  const { category } = useContext(categoryContext);
  const [favorites, setFavorites] = useState(getFavorites);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const { tracks, isLoading } = useTrendingTracks(category, page);
  const { recommendsTracks } = useRecommendedTracks();
  const { searchResults } = useSearchTracks(searchMusic);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleSaveTrack = (track: Track) => {
    setFavorites(toggleFavorite(track));
  };

  const isFavorite = (track: Track) => {
    return favorites.some((item) => item.id === track.id);
  };

  const isPlay = (track: Track) => {
    return currentlyPlaying === track.id;
  };

  const displayedTracks = searchMusic ? searchResults : tracks;

  return (
    <div className={styles.homepage}>
      <Input
        placeholder="Search artist, title, album"
        visible={false}
        value={searchMusic}
        onChange={(value) => setSearchMusic(value)}
      />
      <div className={styles.player_box}>
        <div className={styles.sort_box}>
          <p className={styles.sort_title}>Sort by</p>
          <Accordion />
        </div>
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
      <div className={styles.results_box}>
        <h3 className={styles.results_title}>Search results</h3>
        <div className={styles.results_container}>
          <ErrorBoundary>
            <div className={styles.results_cards}>
              {isLoading ? (
                <div className="centered">
                  <Spinner isLarge={false} />
                </div>
              ) : searchMusic && searchResults.length === 0 ? (
                <h2 className={styles.results_subtitle}>Not Found</h2>
              ) : (
                displayedTracks.map((track) => (
                  <TrackCard
                    key={track.id}
                    track={track}
                    playing={isPlay(track)}
                    favorite={isFavorite(track)}
                    cardType="base"
                    onPlay={setSelectedTrack}
                    onToggleFavorite={handleSaveTrack}
                  />
                ))
              )}
            </div>
            <div className={styles.buttons}>
              <Button disabled={page === 0} onClick={handlePrev}>
                Prev
              </Button>
              <Button disabled={tracks.length < limitCategory} onClick={handleNext}>
                Next
              </Button>
            </div>
          </ErrorBoundary>
        </div>
      </div>
      <div className={styles.recommended_box}>
        <h3 className={styles.recommended_title}>Recommended</h3>
        <div className={styles.recommended_cards_wrapper}>
          <ErrorBoundary>
            <div className={styles.recommended_cards}>
              {recommendsTracks.map((track) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  playing={isPlay(track)}
                  favorite={isFavorite(track)}
                  cardType="recommended"
                  onPlay={setSelectedTrack}
                  onToggleFavorite={handleSaveTrack}
                />
              ))}
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
