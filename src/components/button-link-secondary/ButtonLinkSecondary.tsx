import React from "react";

interface ButtonLinkSecondaryTypes {
  link: string;
  startIcon?: React.ReactNode;
  children: React.ReactNode;
}

const ButtonLinkSecondary = ({
  link,
  startIcon,
  children,
}: ButtonLinkSecondaryTypes) => {
  if (startIcon !== undefined) {
    return (
      <a href={link} className="button-link-secondary">
        <span className="mr-12">{startIcon}</span>
        {children}
      </a>
    );
  } else {
    return null;
  }
};

export default ButtonLinkSecondary;
