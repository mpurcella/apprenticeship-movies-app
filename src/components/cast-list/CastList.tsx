import classNames from "classnames";
import missingPoster from "../../images/missing-poster.jpg";

type CastListTypes = {
  cast: Array<{
    character: string;
    name: string;
    id: number;
    profile_path: string | null;
  }>;
  baseUrl: string;
  imdbId: string | null;
};

const CastList = ({ cast, baseUrl, imdbId }: CastListTypes) => {
  return (
    <ul
      className={classNames(
        "grid grid-cols-1 mb-56 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-36",
        {
          "mb-0": imdbId === null,
        }
      )}
    >
      {cast.slice(0, 5).map((item) => {
        return (
          <li key={item.id}>
            <img
              src={
                item.profile_path === null
                  ? missingPoster
                  : `${baseUrl}w780${item.profile_path}`
              }
              alt={item.name}
              className="w-full object-cover object-center mb-8 shadow-lg shadow-black/30 aspect-2/3"
            />
            <span className="block text-center mb-8">{item.name}</span>
            <span className="text-14 text-grey-500 block text-center">
              {item.character}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
