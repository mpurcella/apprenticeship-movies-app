import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY: string = import.meta.env.VITE_API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

function App() {
  const [genres, setGenres] = useState<Array<{ id: number; name: string }>>([]);
  const [movie, setMovie] = useState<{ title?: string; poster_path?: string }>(
    {}
  );

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
      );

      setGenres(response.data.genres);
    };

    const getMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/663712?api_key=${API_KEY}`
      );
      setMovie(response.data);
    };

    getData().catch(console.log);
    getMovie().catch(console.log);
  }, []);

  console.log(movie);

  if (genres.length === 0) return <></>;

  return (
    <div>
      {movie.title}
      <ul>
        {genres.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <img src={`${IMG_URL}${movie.poster_path}`} />
    </div>
  );
}

export default App;
