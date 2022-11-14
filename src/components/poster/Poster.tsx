type PosterTypes = {
  image: string;
  alt: string;
};

const Poster = ({ image, alt }: PosterTypes) => {
  return (
    <img
      src={image}
      className="block w-100 rounded-8 object-center object-cover shadow-lg shadow-black/50"
      alt={alt}
    />
  );
};

export default Poster;
