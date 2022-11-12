import React from "react";

interface ButtonLinkPrimaryTypes {
  link: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  styleLight: boolean;
}

const ButtonLinkPrimary = ({
  link,
  children,
  startIcon,
  endIcon,
  styleLight,
}: ButtonLinkPrimaryTypes) => {
  if (startIcon !== undefined && endIcon === undefined) {
    return (
      <a
        href={link}
        className={styleLight ? "button-link-light" : "button-link-dark"}
      >
        <span className="mr-8">{startIcon}</span>
        {children}
      </a>
    );
  } else if (startIcon === undefined && endIcon !== undefined) {
    return (
      <a
        href={link}
        className={styleLight ? "button-link-light" : "button-link-dark"}
      >
        {children}
        <span className="ml-8">{endIcon}</span>
      </a>
    );
  } else {
    return null;
  }
};

export default ButtonLinkPrimary;
