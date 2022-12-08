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
      className="rounded-8 group ease-out duration-200 flex flex-col relative outline-none hover:bg-black hover:scale-102 hover:shadow-lg hover:shadow-black/50 focus:bg-black focus:scale-102 lg:bg-black"
    >
      <Poster imageUrl={imageUrl} alt={alt} />
      <div className="flex flex-col items-center px-12 py-20 space-y-12 lg:space-y-20 lg:w-full lg:h-full lg:absolute lg:justify-center lg:top-0 lg:left-0">
        <p className="text-16 font-light leading-tight text-center ease-out duration-200 group-hover:text-white-200 group-focus:text-white-200 lg:text-20 lg:hidden lg:group-hover:block lg:group-focus:block">
          {title}
        </p>
        <StarRating rating={rating} />
      </div>
    </a>
  );
};

export default MovieCard;
