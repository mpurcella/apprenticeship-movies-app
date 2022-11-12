import React from "react";

type ButtonLinkTypes = {
  link: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  styleLight: boolean;
};

const ButtonLink = ({
  link,
  children,
  startIcon,
  endIcon,
  styleLight,
}: ButtonLinkTypes) => {
  return (
    <a
      href={link}
      className={styleLight ? "button-link-light" : "button-link-dark"}
    >
      {startIcon && <span className="mr-8">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-8">{endIcon}</span>}
    </a>
  );
};

export default ButtonLink;
