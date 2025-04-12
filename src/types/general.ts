export type Rating = {
  ratings: {
    rating: number;
    title: string;
  }[];
  username: string;
};

export type Ratings = {
  ratings: Rating[];
  updatedAt: string;
};

export type FullStats = {
  rapid: {
    username: string;
    rating: number;
  }[];
  bullet: {
    username: string;
    rating: number;
  }[];
  blitz: {
    username: string;
    rating: number;
  }[];
};
