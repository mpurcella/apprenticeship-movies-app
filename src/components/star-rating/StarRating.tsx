import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

type starRatingTypes = {
  rating: number;
};

const StarRating = ({ rating }: starRatingTypes) => {
  const stars: React.ReactNode[] = [];
  let remainder = Math.round(rating) / 2;

  for (let i = 0; i < 5; i++) {
    // If remainder >= 1, push filled stars
    if (remainder >= 1) {
      stars.push(
        <FaStar
          className="text-grey-500 mx-2 ease-out duration-200 group-hover:text-white-200"
          key={i}
        />
      );
      remainder--;
      // If remainder > 0 but < 1, push half stars
    } else if (remainder > 0) {
      stars.push(
        <FaStarHalfAlt
          className="text-grey-500 mx-2 ease-out duration-200 group-hover:text-white-200"
          key={i}
        />
      );
      remainder = 0;
    } else {
      // Push outline stars for remaining loops iterations
      stars.push(
        <FaRegStar
          className="text-grey-500 mx-2 ease-out duration-200 group-hover:text-white-200"
          key={i}
        />
      );
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
