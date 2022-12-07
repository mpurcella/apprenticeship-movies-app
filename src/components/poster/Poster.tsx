type PosterTypes = {
  imageUrl: string;
  alt: string;
};

const Poster = ({ imageUrl, alt }: PosterTypes) => {
  return (
    <img
      src={imageUrl}
      className="block h-full w-full rounded-8 object-center object-cover shadow-lg shadow-black/50 ease-out duration-200 lg:group-hover:opacity-10 lg:group-focus:opacity-10"
      alt={alt}
    />
  );
};

export default Poster;
