import { likedImg, pauseIcon, playIcon, unlikedImg } from '@/assets/images/icons';
import { TrackCardProps } from '@/types/track';
import { sliceText } from '@/utils/text';

import styles from './TrackCard.module.scss';

const TrackCard = ({
  track,
  playing,
  favorite,
  cardType,
  onPlay,
  onToggleFavorite,
}: TrackCardProps) => {
  const { title, artwork, user } = track;

  return (
    <div className={`${styles.card} ${styles[cardType]}`}>
      <div className={styles.image_box}>
        <img src={artwork['480x480']} alt={title} className={styles.image} />
        <img
          src={playing ? pauseIcon : playIcon}
          alt="icon"
          className={styles.playIcon}
          onClick={() => onPlay(track)}
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{sliceText(title)}</h4>
        <p className={styles.author}>{user.name}</p>
        <img
          src={favorite ? likedImg : unlikedImg}
          alt="icon"
          className={styles.favoriteIcon}
          onClick={() => onToggleFavorite(track)}
        />
      </div>
    </div>
  );
};

export default TrackCard;
