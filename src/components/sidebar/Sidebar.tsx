import classNames from "classnames";
import {
  FaCalendarAlt,
  FaChartBar,
  FaHeart,
  FaRegCircle,
  FaTimes,
} from "react-icons/fa";
import { useStore } from "../../store/store";
import SidebarList from "../sidebar-list/SidebarList";

type SideBarTypes = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const discoverItems = [
  {
    label: "Popular",
    url: "/discover/popular",
    icon: <FaHeart />,
  },
  {
    label: "Top Rated",
    url: "/discover/top-rated",
    icon: <FaChartBar />,
  },
  {
    label: "Upcoming",
    url: "/discover/upcoming",
    icon: <FaCalendarAlt />,
  },
];

const Sidebar = ({ isOpen, closeSidebar }: SideBarTypes) => {
  const { genres } = useStore();

  return (
    <div
      className={classNames(
        "w-260 bg-black pt-48 pb-36 fixed top-0 bottom-0 transition-all linear duration-500 scrollbar-none overflow-y-scroll",
        {
          "left-0 shadow-lg shadow-black/95": isOpen,
          "-left-260": !isOpen,
        }
      )}
    >
      <button
        type="button"
        className="text-20 text-grey-300 absolute top-8 right-8 ease-out duration-200 hover:text-white-100 lg:hidden"
        onClick={closeSidebar}
        aria-label="Close"
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
