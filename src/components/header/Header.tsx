import { useEffect, useState } from "react";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 1023);

  const handleIsOpen = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const showSidebar = () => {
      if (window.innerWidth > 1023) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", showSidebar);

    return () => {
      window.removeEventListener("resize", showSidebar);
    };
  }, []);

  return (
    <header className="p-20">
      <HamburgerButton onClick={handleIsOpen} />
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </header>
  );
};

export default Header;
