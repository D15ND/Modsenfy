import { Track } from './track';

export type PlayerProps = {
  selectedTrack: Track | null;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
};
