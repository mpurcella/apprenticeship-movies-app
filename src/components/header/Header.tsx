import { useEffect, useState } from "react";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import Sidebar from "../sidebar/Sidebar";

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
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isOpen, setIsOpen] = useState(() => false);

  const handleIsOpen = () => {
    setIsOpen((currentIsDesktop) => !currentIsDesktop);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  return (
    <header className="w-full fixed top-0 bg-white shadow-xl shadow-black/15 lg:bg-transparent p-20 z-50 lg:p-0">
      <HamburgerButton onClick={handleIsOpen} />
      <Sidebar isOpen={isDesktop || isOpen} closeSidebar={closeSidebar} />
    </header>
  );
};

export default Header;
