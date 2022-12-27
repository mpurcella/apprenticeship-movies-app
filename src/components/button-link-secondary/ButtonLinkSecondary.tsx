import React from "react";
import { NavLink } from "react-router-dom";

type ButtonLinkSecondaryTypes = {
  url: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const ButtonLinkSecondary = ({
  url,
  children,
  onClick,
}: ButtonLinkSecondaryTypes) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? "button-link-secondary border-b-red"
          : "button-link-secondary"
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default ButtonLinkSecondary;
