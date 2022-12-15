import ButtonLinkPrimary from "../button-link-primary/ButtonLinkPrimary";
import Poster from "../poster/Poster";
import StarRating from "../star-rating/StarRating";
import { FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { BiMovie } from "react-icons/bi";
import ButtonLinkTertiary from "../button-link-tertiary/ButtonLinkTertiary";
import CastList from "../cast-list/CastList";
import missingPoster from "../../images/missing-poster.jpg";
import { Link } from "react-router-dom";
import MovieList from "../movie-list/MovieList";
import { SpokenLanguage } from "../../types/movies";
import classNames from "classnames";

type MovieInfoTypes = {
  baseUrl: string;
  credits: {
    cast: Array<{
      character: string;
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
      site: string;
      type: string;
    }>;
  };
};

const getSpokenLanguage = (spokenLanguages: SpokenLanguage[]) => {
  if (spokenLanguages.length === 0) {
    return null;
  }

  return spokenLanguages[0].english_name ?? spokenLanguages[0].name ?? null;
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
  const language = getSpokenLanguage(spokenLanguages);

  return (
    <div className="divide-y-2 divide-grey-100">
      <div
        className={classNames(
          "flex flex-col lg:space-x-44 pt-40 pb-68 xl:flex-row",
          {
            "pb-0":
              recommendations.results.length === 0 && credits.cast.length === 0,
          }
        )}
      >
        <div className="flex justify-center mb-68 xl:mb-0 xl:w-35">
          {posterPath === null ? (
            <Poster imageUrl={missingPoster} alt={title} />
          ) : (
            <Poster imageUrl={`${baseUrl}w780${posterPath}`} alt={title} />
          )}
        </div>
        <div className="xl:w-65">
          <div className="mb-28">
            <h1 className="text-32 lg:text-40 font-bold uppercase mb-16">
              {title}
            </h1>
            {Boolean(tagline) && (
              <h2 className="uppercase leading-tight">{tagline}</h2>
            )}
          </div>
          <div className="flex justify-between mb-56">
            {voteAverage === 0 ? (
              <span className="text-14 text-grey-500">Not Rated</span>
            ) : (
              <StarRating
                starRatingClassName="text-grey-500 mx-2"
                rating={voteAverage}
              />
            )}
            <div className="flex space-x-8">
              {Boolean(language) && (
                <span
                  className="list-none text-14 text-grey-500"
                  key={language}
                >
                  {language}
                </span>
              )}
              {Boolean(runtime) && (
                <span className="uppercase text-14 text-grey-500">
                  <span className="mr-8">/</span>
                  {runtime} Min.
                </span>
              )}
              {Boolean(releaseDate) && (
                <span className="text-14 text-grey-500">
                  <span className="mr-8">/</span>
                  {releaseDate.slice(0, 4)}
                </span>
              )}
            </div>
          </div>
          {genres.length === 0 ? null : (
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
          )}
          {Boolean(overview) && (
            <div className="mb-36">
              <h3 className="font-bold uppercase mb-12">Synopsis:</h3>
              <p className="leading-normal">{overview}</p>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-20 lg:space-x-20">
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
            {videos.results
              .filter(
                (video) => video.type === "Trailer" && video.site === "YouTube"
              )
              .map((filteredVideo, i) => {
                if (i === 0) {
                  return (
                    <ButtonLinkPrimary
                      url={`https://www.youtube.com/watch?v=${filteredVideo.key}`}
                      key={filteredVideo.id}
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
      {credits.cast.length === 0 ? null : (
        <div
          className={classNames("py-68", {
            "pt-68 pb-40": recommendations.results.length === 0,
          })}
        >
          <h3 className="text-24 lg:text-32 font-bold uppercase mb-44">
            Top Cast:
          </h3>
          <div className="flex flex-col items-center">
            <CastList cast={credits.cast} baseUrl={baseUrl} imdbId={imdbId} />
            {imdbId === null ? null : (
              <ButtonLinkTertiary
                url={`https://www.imdb.com/title/${imdbId}/fullcredits/?ref_=tt_cl_sm`}
              >
                View All Cast
              </ButtonLinkTertiary>
            )}
          </div>
        </div>
      )}
      {recommendations.results.length === 0 ? null : (
        <div className="pt-68 lg:pb-40">
          <h2 className="text-24 lg:text-32 font-bold uppercase mb-44">
            Recommended Movies
          </h2>
          <MovieList movies={recommendations.results} baseUrl={baseUrl} />
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
