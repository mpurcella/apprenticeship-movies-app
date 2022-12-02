import { useState, useEffect } from "react";
import { axiosClient } from "../../utils/axios";
import classNames from "classnames";
import SidebarList from "../sidebar-list/SidebarList";
import {
  FaTimes,
  FaHeart,
  FaChartBar,
  FaCalendarAlt,
  FaRegCircle,
} from "react-icons/fa";

type SideBarTypes = {
  isOpen: boolean;
  closeSidebar: () => void;
};

type GenresTypes = {
  id: number;
  name: string;
};

const discoverItems = [
  {
    label: "Popular",
    url: "/movies/popular",
    icon: <FaHeart />,
  },
  {
    label: "Top Rated",
    url: "/movies/top-rated",
    icon: <FaChartBar />,
  },
  {
    label: "Upcoming",
    url: "/movies/upcoming",
    icon: <FaCalendarAlt />,
  },
];

const Sidebar = ({ isOpen, closeSidebar }: SideBarTypes) => {
  const [genres, setGenres] = useState<GenresTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchGenres = async () => {
      setIsLoading(true);

      try {
        const resp = await axiosClient.get<{ genres: GenresTypes[] }>(
          "/genre/movie/list",
          { signal }
        );
        setGenres(resp.data.genres);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres().catch(console.error);

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>It broke... {error.message}</div>;
  }

  return (
    <div
      className={classNames(
        "w-280 bg-black pt-48 pb-36 fixed top-0 bottom-0 transition-all linear duration-500 scrollbar-none overflow-y-scroll",
        {
          "left-0 shadow-lg shadow-black/95": isOpen,
          "-left-280": !isOpen,
        }
      )}
    >
      <button
        type="button"
        className="text-20 text-grey-300 absolute top-8 right-8 ease-out duration-200 hover:text-white-100 lg:hidden"
        onClick={closeSidebar}
      >
        <FaTimes />
      </button>

      <div className="space-y-56">
        <SidebarList label="Discover">
          {discoverItems.map((item) => {
            return (
              <SidebarList.Item
                key={item.label}
                url={item.url}
                icon={item.icon}
                onClick={closeSidebar}
              >
                {item.label}
              </SidebarList.Item>
            );
          })}
        </SidebarList>

        <SidebarList label="Genres">
          {genres.map((genre) => {
            return (
              <SidebarList.Item
                key={genre.id}
                url={`/genres/${genre.name}`}
                icon={<FaRegCircle />}
                onClick={closeSidebar}
              >
                {genre.name}
              </SidebarList.Item>
            );
          })}
        </SidebarList>
      </div>
    </div>
  );
};

export default Sidebar;
