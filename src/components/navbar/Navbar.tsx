import { useStore } from "../../store/store";
import NavbarList from "../Navbar-list/NavbarList";
import { NavLink } from "react-router-dom";
import NavbarDropdown from "../navbar-dropdown/NavbarDropdown";
import classNames from "classnames";
import ButtonLinkSecondary from "../button-link-secondary/ButtonLinkSecondary";

type NavbarTypes = {
  isNavOpen: boolean;
  isGenreListOpen: boolean;
  handleIsNavOpen: () => void;
  handleIsGenreListOpen: () => void;
  closeNav: () => void;
  closeGenreList: () => void;
};

const discoverItems = [
  {
    label: "Popular",
    url: "/discover/popular",
  },
  {
    label: "Top-rated",
    url: "/discover/top-rated",
  },
  {
    label: "Upcoming",
    url: "/discover/upcoming",
  },
];

const Navbar = ({
  isNavOpen,
  isGenreListOpen,
  handleIsGenreListOpen,
  closeNav,
  closeGenreList,
}: NavbarTypes) => {
  const { genres } = useStore();

  return (
    <nav
      className={classNames(
        "h-[calc(100vh-68px)] w-full bg-grey-700 flex justify-center mt-68 p-20 fixed top-0 bottom-0 right-0 border-grey-600 border-t-1 scrollbar-none overflow-y-scroll lg:h-full lg:w-full lg:bg-black lg:mt-0 lg:p-0 lg:static lg:border-none",
        { "-right-full lg:right-0": !isNavOpen }
      )}
    >
      <NavbarList navbarListClassName="w-full flex flex-col items-center gap-44 mt-20 lg:flex-row lg:mt-0">
        {discoverItems.map((item) => {
          return (
            <li key={item.label}>
              <ButtonLinkSecondary
                url={item.url}
                onClick={() => {
                  closeGenreList();
                  closeNav();
                }}
              >
                {item.label}
              </ButtonLinkSecondary>
            </li>
          );
        })}
        <li className="lg:ml-auto">
          <NavbarDropdown
            isGenreListOpen={isGenreListOpen}
            handleIsGenreListOpen={handleIsGenreListOpen}
          >
            <NavbarList navbarListClassName="flex flex-col items-center gap-28 py-40 lg:flex-none lg:grid lg:grid-flow-col lg:grid-rows-4 lg:grid-cols-5 lg:justify-items-center lg:gap-44 lg:py-0">
              {genres.map((genre) => {
                return (
                  <li key={genre.id}>
                    <NavLink
                      to={`/genres/${genre.name}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-white-200 font-semibold uppercase leading-normal py-2 px-4 outline-none focus-visible:outline-1 focus-visible:outline-red"
                          : "text-white-200 font-light uppercase leading-normal duration-200 ease-out py-2 px-4 outline-none hover:font-semibold focus:font-semibold focus-visible:outline-1 focus-visible:outline-red"
                      }
                      onClick={() => {
                        closeGenreList();
                        closeNav();
                      }}
                    >
                      {genre.name}
                    </NavLink>
                  </li>
                );
              })}
            </NavbarList>
          </NavbarDropdown>
        </li>
      </NavbarList>
    </nav>
  );
};

export default Navbar;
