import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../../components/movie-info/MovieInfo";
import MovieLayout from "../../components/movie-layout/MovieLayout";
import { useStore } from "../../store/store";
import { MovieDetails } from "../../types/movies";
import { axiosClient } from "../../utils/axios";

const Movie = () => {
  const { id } = useParams();
  const { config } = useStore();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (id === undefined) {
      return;
    }

    const fetchMovie = async () => {
      setIsLoadingMovie(true);

      try {
        const resp = await axiosClient.get<MovieDetails>(
          `/movie/${id}?append_to_response=credits,recommendations,videos`,
          {
            signal,
          }
        );
        setMovie(resp.data);
      } catch (err) {
        if (!(err instanceof CanceledError)) {
          setError(err as Error);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoadingMovie(false);
        }
      }
    };

    fetchMovie().catch(console.error);

    return () => {
      controller.abort();
    };
  }, [id]);

  if (isLoadingMovie) {
    return <div>Loading movie</div>;
  }

  if (error !== null || id === undefined) {
    return <div>Oops...Something went wrong</div>;
  }

  if (movie === null) {
    return null;
  }

  console.log(movie);

  return (
    <MovieLayout label={null}>
      <MovieInfo
        baseUrl={config.baseUrl}
        credits={movie.credits}
        genres={movie.genres}
        homepage={movie.homepage}
        imdbId={movie.imdb_id}
        overview={movie.overview}
        posterPath={movie.poster_path}
        recommendations={movie.recommendations}
        releaseDate={movie.release_date}
        runtime={movie.runtime}
        spokenLanguages={movie.spoken_languages}
        tagline={movie.tagline}
        title={movie.title}
        voteAverage={movie.vote_average}
        videos={movie.videos}
      />
    </MovieLayout>
  );
};

export default Movie;
