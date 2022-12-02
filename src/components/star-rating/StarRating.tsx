import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

type starRatingTypes = {
  rating: number;
};

const StarRating = ({ rating }: starRatingTypes) => {
  const stars: React.ReactNode[] = [];
  // Variable that is set to a rating that has been rounded to the nearest whole number and then divided by 2.
  let remainder = Math.round(rating) / 2;

  for (let i = 0; i < 5; i++) {
    if (remainder >= 1) {
      // If remainder >= 1, push filled stars
      stars.push(
        <FaStar
          className="text-grey-500 mx-2 ease-out duration-200 group-hover:text-white-200"
          key={i}
        />
      );
      remainder--;
    } else if (remainder > 0) {
      // If remainder > 0 but < 1, push half stars
      stars.push(
        <FaStarHalfAlt
          className="text-grey-500 mx-2 ease-out duration-200 group-hover:text-white-200"
          key={i}
        />
      );
      remainder = 0;
    } else {
      // Else push outline stars for remaining loop iterations
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
