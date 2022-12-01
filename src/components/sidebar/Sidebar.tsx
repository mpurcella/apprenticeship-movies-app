import { useState, useEffect } from "react";
import { axiosClient } from "../../utils/axios";
import classNames from "classnames";
import SidebarList from "../sidebar-list/SidebarList";
import { FaTimes } from "react-icons/fa";

type SideBarTypes = {
  isOpen: boolean;
  onClick: () => void;
  closeSidebar: () => void;
};

type GenresTypes = {
  id: number;
  name: string;
};

const staticGenres = [
  {
    name: "Popular",
    link: "#",
    id: 1,
  },
  {
    name: "Top Rated",
    link: "#",
    id: 2,
  },
  {
    name: "Upcoming",
    link: "#",
    id: 3,
  },
];

const Sidebar = ({ isOpen, onClick, closeSidebar }: SideBarTypes) => {
  const [genres, setGenres] = useState<GenresTypes[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const resp = await axiosClient.get<{ genres: GenresTypes[] }>(
          "/genre/movie/list"
        );
        const data = await resp.data;
        setGenres(data.genres);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGenres().catch(console.error);
  }, []);

  return (
    <div
      className={classNames(
        "w-[280px] bg-black pt-48 pb-36 fixed top-0 bottom-0 transition-all linear duration-500 no-scrollbar::-webkit-scrollbar no-scrollbar overflow-y-scroll lg:left-0",
        {
          "left-0 shadow-lg shadow-black/95": isOpen,
          "-left-[280px]": !isOpen,
        }
      )}
    >
      <button
        type="button"
        className="text-20 text-grey-300 absolute top-8 right-8 ease-out duration-200 hover:text-white-100 lg:hidden"
        onClick={onClick}
      >
        <FaTimes />
      </button>
      <div className="space-y-56">
        <SidebarList genreList={staticGenres} closeNav={closeSidebar}>
          Discover
        </SidebarList>
        <SidebarList genreList={genres} closeNav={closeSidebar}>
          Genres
        </SidebarList>
      </div>
    </div>
  );
};

export default Sidebar;
