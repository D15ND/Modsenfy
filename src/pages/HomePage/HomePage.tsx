import 'react-h5-audio-player/lib/styles.css';

import { useContext, useEffect, useState } from 'react';

import { likedImg, pauseIcon, playIcon, unlikedImg } from '@/assets/images/icons';
import Accordion from '@/components/ui/Accordion/Accordion';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import Player from '@/components/ui/Player/Player';
import Spinner from '@/components/ui/Spinner/Spinner';
import { categoryContext } from '@/contexts/categoryContext';
import { API_URL } from '@/services/API';
import { Track } from '@/types/track';
import { sliceText } from '@/utils/text';

import styles from './HomePage.module.scss';

const limitCategory = 8;
const limitRecommended = 5;

const HomePage = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [recommendsTracks, setRecommendsTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchMusic, setSearchMusic] = useState('');
  const [searchResults, setSearchResults] = useState<Track[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [page, setPage] = useState(0);
  const { category } = useContext(categoryContext);
  const [favorites, setFavorites] = useState<Track[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleSaveTrack = (track: Track) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === track.id);
      const updated = exists ? prev.filter((item) => item.id !== track.id) : [...prev, track];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (track: Track) => {
    return favorites.some((item) => item.id === track.id);
  };

  const isPlay = (track: Track) => {
    return currentlyPlaying === track.id;
  };

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
        console.log('Error category request API');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryRequest();
  }, [category, page]);

  useEffect(() => {
    const fetchRecommendedRequest = async () => {
      try {
        const response = await fetch(`${API_URL}/tracks/recommended?limit=${limitRecommended}`);
        const data = await response.json();
        setRecommendsTracks(data.data);
      } catch {
        console.log('error recommended API');
      }
    };
    fetchRecommendedRequest();
  }, []);

  useEffect(() => {
    const fetchSearchRequest = async () => {
      try {
        const response = await fetch(
          `${API_URL}/tracks/search?query=${searchMusic}&limit=${limitCategory}`,
        );
        const data = await response.json();
        setSearchResults(data.data || []);
      } catch {
        console.log('error search API');
      }
    };
    fetchSearchRequest();
  }, [searchMusic]);

  return (
    <div className={styles.content}>
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
              if (selectedTrack?.id) setCurrentlyPlaying(selectedTrack.id);
            }}
            onPause={() => {}}
            onEnded={() => setCurrentlyPlaying(null)}
          />
        </div>
      </div>
      <div className={styles.results_box}>
        <h3 className={styles.results_title}>Search results</h3>
        <div className={styles.results_container}>
          <div className={styles.results_cards}>
            {isLoading ? (
              <div className="centered">
                <Spinner isLarge={false} />
              </div>
            ) : (
              (searchMusic ? searchResults : tracks).map((card) => (
                <div className={styles.results_card} key={card.title}>
                  <div className={styles.card_img_box}>
                    <img src={card.artwork['480x480']} alt="card" className={styles.card_img} />
                    <img
                      src={isPlay(card) ? pauseIcon : playIcon}
                      alt="icon"
                      className={styles.play_payse_icon}
                      onClick={() => setSelectedTrack(card)}
                    />
                  </div>
                  <div className={styles.cards_info}>
                    <h4 className={styles.cards_title}>{sliceText(card.title)}</h4>
                    <p className={styles.cards_author}>{card.user.name}</p>
                    <img
                      src={isFavorite(card) ? likedImg : unlikedImg}
                      alt="like"
                      className={styles.cards_icon}
                      onClick={() => handleSaveTrack(card)}
                    />
                  </div>
                </div>
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
        </div>
      </div>
      <div className={styles.recommended_box}>
        <h3 className={styles.recommended_title}>Recommended</h3>
        <div className={styles.recommended_cards_wrapper}>
          <div className={styles.recommended_cards}>
            {recommendsTracks.map((card) => (
              <div className={styles.recommended_card} key={card.title}>
                <div className={styles.recommended_box_img}>
                  <img
                    src={card.artwork['480x480']}
                    alt="card"
                    className={styles.recommended_img}
                  />
                  <img
                    src={isPlay(card) ? pauseIcon : playIcon}
                    alt="icon"
                    className={styles.play_payse_icon}
                    onClick={() => setSelectedTrack(card)}
                  />
                </div>
                <div className={styles.recommended_card_info}>
                  <h4 className={styles.recommended_card_title}>{sliceText(card.title)}</h4>
                  <p className={styles.recommended_card_author}>{card.user.name}</p>
                  <img
                    src={isFavorite(card) ? likedImg : unlikedImg}
                    alt="like"
                    className={styles.cards_icon}
                    onClick={() => handleSaveTrack(card)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
