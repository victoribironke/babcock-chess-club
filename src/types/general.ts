export type Rating = {
  ratings: {
    rating: number;
    title: string;
    played: number;
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
    played: number;
  }[];
  bullet: {
    username: string;
    rating: number;
    played: number;
  }[];
  blitz: {
    username: string;
    rating: number;
    played: number;
  }[];
};
