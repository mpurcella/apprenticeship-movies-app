import missingPoster from "../../images/missingposter.jpg";

type CastListTypes = {
  cast: Array<{
    name: string;
    id: number;
    profile_path: string | null;
  }>;
  baseUrl: string;
};

const CastList = ({ cast, baseUrl }: CastListTypes) => {
  return (
    <ul className="flex flex-wrap space-x-8">
      {cast.slice(0, 6).map((item) => {
        return (
          <li
            className="max-w-[75px] max-h-[75px] group relative"
            key={item.id}
          >
            <img
              src={
                item.profile_path === null
                  ? missingPoster
                  : `${baseUrl}w780${item.profile_path}`
              }
              alt={item.name}
              className="w-full h-full object-cover object-center rounded-50 border border-grey-200"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
