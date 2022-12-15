import missingPoster from "../../images/missing-poster.jpg";

type PosterTypes = {
  imageUrl: string | null;
  alt: string;
};

const Poster = ({ imageUrl, alt }: PosterTypes) => {
  return (
    <img
      src={imageUrl === null ? missingPoster : imageUrl}
      className="block w-full sm:max-w-400 rounded-8 object-center object-cover shadow-lg shadow-black/50 ease-out duration-200 group-hover:shadow-none lg:group-hover:opacity-10 lg:group-focus:opacity-10 aspect-2/3"
      loading="lazy"
      alt={alt}
    />
  );
};

export default Poster;
