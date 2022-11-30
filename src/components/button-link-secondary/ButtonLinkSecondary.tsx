import React from "react";

type ButtonLinkSecondaryTypes = {
  url: string;
  startIcon: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
};

const ButtonLinkSecondary = ({
  url,
  startIcon,
  children,
  onClick,
}: ButtonLinkSecondaryTypes) => {
  return (
    <a href={url} className="button-link-secondary" onClick={onClick}>
      <span className="mr-12">{startIcon}</span>
      {children}
    </a>
  );
};

export default ButtonLinkSecondary;
