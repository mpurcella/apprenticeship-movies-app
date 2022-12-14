import ButtonLinkPrimary from "../button-link-primary/ButtonLinkPrimary";
import Poster from "../poster/Poster";
import StarRating from "../star-rating/StarRating";
import { FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { BiMovie } from "react-icons/bi";
import ButtonLinkTertiary from "../button-link-tertiary/ButtonLinkTertiary";
import CastList from "../cast-list/CastList";
import missingPoster from "../../images/missingposter.jpg";
import { Link } from "react-router-dom";
import MovieList from "../movie-list/MovieList";

type MovieInfoTypes = {
  baseUrl: string;
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
  imdbId: string | null;
  overview: string | null;
  posterPath: string | null;
  recommendations: {
    results: Array<{
      id: number;
      poster_path: string | null;
      title: string;
      vote_average: number;
    }>;
  };
  releaseDate: string;
  runtime: number | null;
  spokenLanguages: Array<{
    english_name: string;
    name: string;
  }>;
  tagline: string | null;
  title: string;
  voteAverage: number;
  videos: {
    results: Array<{
      id: number;
      key: string;
      name: string;
      site: string;
    }>;
  };
};

const MovieInfo = ({
  baseUrl,
  credits,
  genres,
  homepage,
  imdbId,
  overview,
  posterPath,
  recommendations,
  releaseDate,
  runtime,
  spokenLanguages,
  tagline,
  title,
  videos,
  voteAverage,
}: MovieInfoTypes) => {
  return (
    <>
      <div className="flex items-center space-x-36">
        <div className="w-[40%]">
          {posterPath === null ? (
            <Poster imageUrl={missingPoster} alt={title} />
          ) : (
            <Poster imageUrl={`${baseUrl}w780/${posterPath}`} alt={title} />
          )}
        </div>
        <div className="w-[60%]">
          <div className=" mb-28">
            <h1 className="text-[40px] font-bold uppercase mb-16">{title}</h1>
            {Boolean(tagline) && <h2 className="uppercase">{tagline}</h2>}
          </div>
          <div className="flex justify-between mb-56">
            {voteAverage === 0 ? (
              <span className="text-14">Not Rated</span>
            ) : (
              <StarRating
                starRatingClassName="text-grey-500 mx-2"
                rating={voteAverage}
              />
            )}
            <div className="flex space-x-8">
              {spokenLanguages.map((language, i) => {
                if (i === 0 && Boolean(language.english_name)) {
                  return (
                    <li
                      className="list-none text-14"
                      key={language.english_name}
                    >
                      {language.english_name}
                      <span className="ml-8">/</span>
                    </li>
                  );
                } else if (i === 0 && Boolean(language.name)) {
                  return (
                    <li className="list-none text-14" key={language.name}>
                      {language.name}
                      <span className="ml-8">/</span>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
              {Boolean(runtime) && (
                <span className="uppercase text-14">
                  {runtime} Min.<span className="ml-8">/</span>
                </span>
              )}
              <span className="text-14">{releaseDate.slice(0, 4)}</span>
            </div>
          </div>
          <div className="mb-36">
            <h3 className="font-bold uppercase mb-12">Genres:</h3>
            <ul className="flex space-x-16">
              {genres.map((genre) => {
                return (
                  <Link
                    to={`/genres/${genre.name}`}
                    className="button-link-tertiary"
                    key={genre.id}
                  >
                    {genre.name}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="mb-36">
            <h3 className="font-bold uppercase mb-12">Synopsis:</h3>
            {Boolean(overview) && <p className="leading-snug">{overview}</p>}
          </div>
          <div className="mb-56">
            <h3 className="font-bold uppercase mb-12">Top Cast:</h3>
            <div className="flex space-x-12 items-end">
              <CastList cast={credits.cast} baseUrl={baseUrl} />
              {imdbId === null ? null : (
                <ButtonLinkTertiary
                  url={`https://www.imdb.com/title/${imdbId}/fullcredits/?ref_=tt_cl_sm`}
                >
                  View All Cast
                </ButtonLinkTertiary>
              )}
            </div>
          </div>
          <div className="space-x-20">
            {homepage === null || homepage === "" ? null : (
              <ButtonLinkPrimary
                url={homepage}
                styleLight={false}
                endIcon={<FaExternalLinkAlt />}
              >
                Website
              </ButtonLinkPrimary>
            )}
            {imdbId === null ? null : (
              <ButtonLinkPrimary
                url={`https://www.imdb.com/title/${imdbId}`}
                styleLight={false}
                endIcon={<BiMovie />}
              >
                IMDB
              </ButtonLinkPrimary>
            )}
            {videos.results.map((video) => {
              if (
                video.name.includes("Official Trailer") &&
                video.site === "YouTube"
              ) {
                return (
                  <ButtonLinkPrimary
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                    key={video.id}
                    styleLight={false}
                    endIcon={<FaPlay />}
                  >
                    Trailer
                  </ButtonLinkPrimary>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      {recommendations.results.length === 0 ? null : (
        <div className="flex flex-col items-center mt-68">
          <h2 className="inline-block text-24 uppercase font-light mb-44">
            Recommended Movies
          </h2>
          <MovieList movies={recommendations.results} baseUrl={baseUrl} />
        </div>
      )}
    </>
  );
};

export default MovieInfo;
