import 'react-h5-audio-player/lib/styles.css';

import { useState } from 'react';

import { likedImg, pauseIcon, playIcon, unlikedImg } from '@/assets/images/icons';
import Player from '@/components/ui/Player/Player';
import { Track } from '@/types/track';

import styles from './FavoritePage.module.scss';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState<Track[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const isPlay = (track: Track) => {
    return currentlyPlaying === track.id;
  };

  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

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

  return (
    <div className={styles.content}>
      {favorites.length > 0 && (
        <div className={styles.player_box}>
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
      )}
      {favorites.length === 0 ? (
        <div className={styles.plug_box}>
          <h2 className={styles.results_subtitle}>No favorite tracks</h2>
        </div>
      ) : (
        <div className={styles.results_box}>
          <h3 className={styles.results_title}>Your Favorites</h3>
          <div className={styles.results_container}>
            <div className={styles.results_cards}>
              {favorites.length === 0 ? (
                <h2 className={styles.results_subtitle}>No favorite tracks</h2>
              ) : (
                favorites.map((card) => {
                  const { title, artwork, user } = card;
                  return (
                    <div className={styles.results_card} key={title}>
                      <div className={styles.card_img_box}>
                        <img src={artwork['480x480']} alt="card" className={styles.card_img} />
                        <img
                          src={isPlay(card) ? pauseIcon : playIcon}
                          alt="icon"
                          className={styles.play_payse_icon}
                          onClick={() => setSelectedTrack(card)}
                        />
                      </div>
                      <div className={styles.cards_info}>
                        <h4 className={styles.cards_title}>{title}</h4>
                        <p className={styles.cards_author}>{user.name}</p>
                        <img
                          src={isFavorite(card) ? likedImg : unlikedImg}
                          alt="like"
                          className={styles.cards_icon}
                          onClick={() => handleSaveTrack(card)}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
