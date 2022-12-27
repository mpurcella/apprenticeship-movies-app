import moviesHeroJpeg from "../../images/movies-hero.jpeg";
import moviesHeroWebp from "../../images/movies-hero.webp";
import Form from "../form/Form";
import Search from "../search/Search";

const Hero = () => {
  return (
    <div className="bg-black relative h-full">
      <picture>
        <source srcSet={moviesHeroWebp} type="image/webp" />
        <source srcSet={moviesHeroJpeg} type="image/jpeg" />
        <img
          src={moviesHeroJpeg}
          alt="Collage of Movies"
          className="h-full w-full opacity-10 object-cover object-center"
        />
      </picture>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-20">
        <h1 className="flex flex-col gap-8 text-40 font-extrabold text-white-200 uppercase text-center mb-36 sm:flex-row sm:mb-20 sm:gap-12 md:text-52">
          <span>The</span>
          <span>Popcorn</span>
          <span>Place</span>
        </h1>
        <h2 className="text-20 text-white-200 font-light text-center leading-tight mb-68">
          Millions of movies waiting to&nbsp;be&nbsp;discovered
        </h2>
        <Form>
          <Search placeholder="Search for a movie..." />
        </Form>
      </div>
    </div>
  );
};

export default Hero;
