import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import Navbar from "../navbar/Navbar";
import popcornLogo from "../../images/popcorn.png";

function useMediaQuery(mq: string) {
  const [mql] = useState(() => window.matchMedia(mq));
  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mql.addEventListener("change", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [mql]);

  return matches;
}

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(() => false);
  const [isGenreListOpen, setIsGenreListOpen] = useState(() => false);
  const isDesktop = useMediaQuery("(min-width: 1023px)");

  const handleIsNavOpen = () => {
    setIsNavOpen((currentIsNavOpen) => !currentIsNavOpen);
  };

  const handleIsGenreListOpen = () => {
    setIsGenreListOpen((currentIsGenreListOpen) => !currentIsGenreListOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const closeGenreList = () => {
    setIsGenreListOpen(false);
  };

  useEffect(() => {
    if (!isDesktop) {
      setIsNavOpen(false);
      setIsGenreListOpen(false);
    }
  }, [isDesktop]);

  return (
    <header className="h-68 bg-black flex justify-between items-center shadow-xl shadow-black/30 px-20 z-20 sticky top-0 left-0 md:px-68 lg:gap-44">
      <Link
        to="/"
        className="inline-flex items-center z-30 py-2 px-4  outline-none focus-visible:outline-1 focus-visible:outline-red"
        aria-label="Homepage"
        onClick={() => {
          closeGenreList();
          closeNav();
        }}
      >
        <img src={popcornLogo} alt="Popcorn Logo" className="w-[40px]" />
      </Link>
      <HamburgerButton
        isNavOpen={isNavOpen}
        onClick={() => {
          closeGenreList();
          handleIsNavOpen();
        }}
      />
      <Navbar
        isNavOpen={isNavOpen}
        isGenreListOpen={isGenreListOpen}
        handleIsNavOpen={handleIsNavOpen}
        handleIsGenreListOpen={handleIsGenreListOpen}
        closeNav={closeNav}
        closeGenreList={closeGenreList}
      />
    </header>
  );
};

export default Header;
