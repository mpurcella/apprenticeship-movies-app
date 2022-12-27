import classNames from "classnames";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

type NavbarDropdownTypes = {
  children: React.ReactNode;
  isGenreListOpen: boolean;
  handleIsGenreListOpen: () => void;
};

const NavbarDropdown = ({
  children,
  isGenreListOpen,
  handleIsGenreListOpen,
}: NavbarDropdownTypes) => {
  return (
    <div className="flex flex-col items-center lg:flex-none">
      <button
        type="button"
        className={classNames(
          "text-24 text-white-200 uppercase font-semibold leading-normal flex items-center gap-4 duration-200 ease-out outline-none border-y-1 border-y-transparent lg:text-14 hover:border-b-red focus:border-b-red",
          {
            "border-b-red": isGenreListOpen,
          }
        )}
        onClick={handleIsGenreListOpen}
      >
        Genres
        <span className="relative top-1">
          <FiChevronDown
            className={classNames("text-20 duration-100 ease-out lg:text-14", {
              "-rotate-180 text-red": isGenreListOpen,
            })}
          />
        </span>
      </button>
      <div
        className={classNames(
          "w-full lg:bg-grey-700 lg:py-68 lg:px-40 lg:absolute lg:top-full lg:left-0 lg:shadow-xl lg:shadow-black/60 lg:border-grey-600 lg:border-t-1 lg:z-20",
          {
            hidden: !isGenreListOpen,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default NavbarDropdown;
