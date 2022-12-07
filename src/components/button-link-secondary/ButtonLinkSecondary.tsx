import React from "react";
import { NavLink } from "react-router-dom";

type ButtonLinkSecondaryTypes = {
  url: string;
  startIcon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
};

const ButtonLinkSecondary = ({
  url,
  startIcon,
  children,
  onClick,
}: ButtonLinkSecondaryTypes) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        isActive ? "button-link-secondary active" : "button-link-secondary"
      }
      onClick={onClick}
    >
      <span className="mr-12">{startIcon}</span>
      {children}
    </NavLink>
  );
};

export default ButtonLinkSecondary;
