import { Movie } from "../../types/movies";
import MovieCard from "../movie-card/MovieCard";

type MovieListTypes = {
  movies: Movie[];
  baseUrl: string;
};

const MovieList = ({ movies, baseUrl }: MovieListTypes) => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-36 sm:grid-cols-2 md:grid-cols-3 sm:gap-28 lg:grid-cols-2 xl:grid-cols-3 ">
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard
                imageUrl={
                  movie.poster_path === null
                    ? null
                    : `${baseUrl}w780${movie.poster_path}`
                }
                url={`/movie/${movie.id}`}
                title={movie.title}
                alt={movie.title}
                rating={movie.vote_average}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
