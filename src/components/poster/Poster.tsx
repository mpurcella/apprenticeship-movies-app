type PosterTypes = {
  imageUrl: string;
  alt: string;
};

const Poster = ({ imageUrl, alt }: PosterTypes) => {
  return (
    <img
      src={imageUrl}
      className="block w-full rounded-8 object-center object-cover shadow-lg shadow-black/50"
      alt={alt}
    />
  );
};

export default Poster;
