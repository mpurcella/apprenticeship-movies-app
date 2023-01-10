import { Movies } from "../../types/movies";
import MovieCard from "../movie-card/MovieCard";

type MovieListTypes = {
  movies: Movies;
  baseImageUrl: string;
  label?: string;
};

const MovieList = ({ movies, baseImageUrl, label }: MovieListTypes) => {
  return (
    <section>
      {label === undefined ? null : (
        <h1 className="text-24 text-black uppercase font-extrabold flex justify-center mb-40 md:text-24">
          {label} Movies
        </h1>
      )}
      <ul className="grid grid-cols-1 gap-36 mb-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.results.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard
                imageUrl={
                  movie.poster_path === null
                    ? null
                    : `${baseImageUrl}w780${movie.poster_path}`
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
    </section>
  );
};

export default MovieList;
