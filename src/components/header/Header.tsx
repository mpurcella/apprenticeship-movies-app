import { useEffect, useState } from "react";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Needed?
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
      <Sidebar
        isOpen={isOpen}
        onClick={handleIsOpen}
        closeSidebar={closeSidebar}
      />
    </header>
  );
};

export default Header;
