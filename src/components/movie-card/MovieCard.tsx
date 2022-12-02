import Poster from "../poster/Poster";
import StarRating from "../star-rating/StarRating";

type MovieCardTypes = {
  imageUrl: string;
  url: string;
  title: string;
  alt: string;
  rating: number;
};

const MovieCard = ({ imageUrl, url, title, alt, rating }: MovieCardTypes) => {
  return (
    <a
      href={url}
      className="w-quarter rounded-8 group ease-out duration-200 hover:scale-102 hover:bg-black hover:shadow-lg hover:shadow-black/50"
    >
      <Poster imageUrl={imageUrl} alt={alt} />
      <div className="flex flex-col items-center px-12 py-20 space-y-12">
        <p className="text-14 leading-snug text-center ease-out duration-200 group-hover:text-white-200">
          {title}
        </p>
        <StarRating rating={rating} />
      </div>
    </a>
  );
};

export default MovieCard;
