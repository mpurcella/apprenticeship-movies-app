import React from "react";

type ButtonLinkSecondaryTypes = {
  link: string;
  startIcon: React.ReactNode;
  children: React.ReactNode;
};

const ButtonLinkSecondary = ({
  link,
  startIcon,
  children,
}: ButtonLinkSecondaryTypes) => {
  return (
    <a href={link} className="button-link-secondary">
      <span className="mr-12">{startIcon}</span>
      {children}
    </a>
  );
};

export default ButtonLinkSecondary;
