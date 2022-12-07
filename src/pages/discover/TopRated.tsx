import { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axios";
import MovieList from "../../components/movie-list/MovieList";
import { Movie } from "../../types/movies";
import { useStore } from "../../store/store";
import { CanceledError } from "axios";

const TopRated = () => {
  const { config } = useStore();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async () => {
      setIsLoadingMovies(true);

      try {
        const resp = await axiosClient.get<{ results: Movie[] }>(
          "/movie/top_rated",
          { signal }
        );
        setMovies(resp.data.results);
      } catch (err) {
        if (!(err instanceof CanceledError)) {
          setError(err as Error);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoadingMovies(false);
        }
      }
    };

    fetchMovies().catch(console.error);

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoadingMovies) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>It broke...{error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center px-48 pt-102 pb-68 lg:py-56 lg:ml-260">
      <h1 className="inline-block text-20 text-white-200 bg-black uppercase font-semibold text-center mb-36 px-8 py-4">
        Top Rated Movies
      </h1>
      <MovieList movies={movies} baseUrl={config.baseUrl} />
    </div>
  );
};

export default TopRated;
