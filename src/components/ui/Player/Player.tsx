import 'react-h5-audio-player/lib/styles.css';

import AudioPlayer from 'react-h5-audio-player';

import { pauseIcon, playPlayer } from '@/assets/images/icons';
import { PlayerProps } from '@/types/player';

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
        play: <img src={playPlayer} className={styles.player_icon} />,
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
