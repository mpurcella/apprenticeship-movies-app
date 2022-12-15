import React from "react";
import { Link } from "react-router-dom";

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
    <Link
      to={url}
      className="button-link-secondary flex items-center"
      onClick={onClick}
    >
      <span className="mr-12 text-14">{startIcon}</span>
      {children}
    </Link>
  );
};

export default ButtonLinkSecondary;
