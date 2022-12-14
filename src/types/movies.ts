export type Config = { baseUrl: string };

export type SpokenLanguage = {
  english_name: string;
  name: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
};

export type MovieDetails = {
  credits: {
    cast: Array<{
      name: string;
      id: number;
      profile_path: string | null;
    }>;
  };
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string | null;
  imdb_id: string | null;
  overview: string | null;
  poster_path: string | null;
  recommendations: {
    results: Array<{
      id: number;
      poster_path: string | null;
      title: string;
      vote_average: number;
    }>;
  };
  release_date: string;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  tagline: string | null;
  title: string;
  videos: {
    results: Array<{
      id: number;
      key: string;
      site: string;
      type: string;
    }>;
  };
  vote_average: number;
};
