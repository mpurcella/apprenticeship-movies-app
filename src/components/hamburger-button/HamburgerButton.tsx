import { FiMenu, FiX } from "react-icons/fi";

type HamburgerButtonTypes = {
  isNavOpen: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ onClick, isNavOpen }: HamburgerButtonTypes) => {
  return (
    <button
      className="text-32 text-white-200 z-30 lg:hidden outline-none focus-visible:outline-1 focus-visible:outline-red focus-visible:rounded-2"
      onClick={onClick}
      aria-label="Navigation Menu"
    >
      {isNavOpen ? <FiX /> : <FiMenu />}
    </button>
  );
};

export default HamburgerButton;
