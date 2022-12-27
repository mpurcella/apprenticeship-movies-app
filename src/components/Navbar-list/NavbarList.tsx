import React from "react";

type NavbarListProps = {
  children: React.ReactNode;
  navbarListClassName: string;
};

const NavbarList = ({ navbarListClassName, children }: NavbarListProps) => {
  return <ul className={navbarListClassName}>{children}</ul>;
};

export default NavbarList;
