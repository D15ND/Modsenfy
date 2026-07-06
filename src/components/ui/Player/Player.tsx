import pauseIcon from '@/assets/images/icons/pause.svg';
import PlayPlayer from '@/assets/images/icons/play-player.svg?react';
import { PlayerProps } from '@/types/player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from './Player.module.scss';

const Player = ({ selectedTrack, onPlay, onPause, onEnded }: PlayerProps) => {
  return (
    <AudioPlayer
      className={styles.player}
      src={selectedTrack?.stream?.url || ''}
      autoPlay={true}
      showJumpControls={false}
      showSkipControls={false}
      showFilledProgress={true}
      customIcons={{
        play: <PlayPlayer className={styles.player_icon} />,
        pause: <img src={pauseIcon} className={styles.player_pause} />,
      }}
      customAdditionalControls={[]}
      layout="horizontal-reverse"
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
    />
  );
};

export default Player;
