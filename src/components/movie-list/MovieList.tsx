import { Movie } from "../../types/movies";
import MovieCard from "../movie-card/MovieCard";

type MovieListTypes = {
  movies: Movie[];
  baseUrl: string;
  label?: string;
};

const MovieList = ({ movies, baseUrl, label }: MovieListTypes) => {
  return (
    <section>
      {label === undefined ? null : (
        <h1 className="text-24 text-black uppercase font-extrabold flex justify-center mb-40 md:text-28">
          {label} Movies
        </h1>
      )}
      <ul className="grid grid-cols-1 gap-36 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </section>
  );
};

export default MovieList;
