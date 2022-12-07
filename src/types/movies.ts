export type Config = { baseUrl: string };

export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
