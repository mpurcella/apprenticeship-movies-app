import React from "react";

type ButtonLinkPrimaryTypes = {
  link: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  styleLight: boolean;
};

const ButtonLinkPrimary = ({
  link,
  children,
  startIcon,
  endIcon,
  styleLight,
}: ButtonLinkPrimaryTypes) => {
  return (
    <a
      href={link}
      className={styleLight ? "button-link-light" : "button-link-dark"}
    >
      {Boolean(startIcon) && <span className="mr-12">{startIcon}</span>}
      {children}
      {Boolean(endIcon) && <span className="ml-12">{endIcon}</span>}
    </a>
  );
};

export default ButtonLinkPrimary;
