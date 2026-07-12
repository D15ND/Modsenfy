export type Track = {
  id?: string;
  title: string;
  artwork: {
    '480x480': string;
  };
  user: {
    name: string;
  };
  stream?: {
    url: string;
  };
};

export type TrackCardProps = {
  track: Track;
  playing: boolean;
  favorite: boolean;
  cardType: 'base' | 'recommended';
  onPlay: (track: Track) => void;
  onToggleFavorite: (track: Track) => void;
};
