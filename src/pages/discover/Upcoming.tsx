import { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axios";
import MovieList from "../../components/movie-list/MovieList";
import { Movies } from "../../types/movies";
import { useStore } from "../../store/store";
import { CanceledError } from "axios";
import MovieLayout from "../../components/movie-layout/MovieLayout";
import Pagination from "../../components/pagination/Pagination";
import Button from "../../components/button/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Popular = () => {
  const { config } = useStore();
  const [movies, setMovies] = useState<Movies | null>(null);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async () => {
      setIsLoadingMovies(true);

      try {
        const resp = await axiosClient.get<Movies>(
          `/movie/upcoming?page=${currentPage}`,
          {
            signal,
          }
        );
        setMovies(resp.data);
      } catch (err) {
        if (!(err instanceof CanceledError)) {
          setError(err as Error);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoadingMovies(false);
        }
      }
    };

    fetchMovies().catch(console.error);

    return () => {
      controller.abort();
    };
  }, [currentPage]);

  const fetchPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const fetchNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  if (isLoadingMovies) {
    return null;
  }

  if (error !== null) {
    return <div>Oops...Something went wrong</div>;
  }

  if (movies === null) {
    return null;
  }

  return (
    <MovieLayout>
      <MovieList
        movies={movies}
        baseImageUrl={config.baseImageUrl}
        label="Upcoming"
      />
      {movies.total_pages > 1 ? (
        <Pagination>
          {currentPage !== 1 ? (
            <Button
              styleLight={true}
              startIcon={<FaArrowLeft />}
              onClick={fetchPreviousPage}
            >
              Prev
            </Button>
          ) : null}
          {currentPage < 500 ? (
            <Button
              styleLight={true}
              endIcon={<FaArrowRight />}
              onClick={fetchNextPage}
            >
              Next
            </Button>
          ) : null}
        </Pagination>
      ) : null}
    </MovieLayout>
  );
};

export default Popular;
