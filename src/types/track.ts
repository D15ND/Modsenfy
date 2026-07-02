export type Track = {
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
