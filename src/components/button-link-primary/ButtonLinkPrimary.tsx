import React from "react";

type ButtonLinkPrimaryTypes = {
  url: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  styleLight: boolean;
};

const ButtonLinkPrimary = ({
  url,
  children,
  startIcon,
  endIcon,
  styleLight,
}: ButtonLinkPrimaryTypes) => {
  return (
    <a
      href={url}
      className={styleLight ? "button-link-light" : "button-link-dark"}
    >
      {Boolean(startIcon) && <span className="mr-12">{startIcon}</span>}
      {children}
      {Boolean(endIcon) && <span className="ml-12">{endIcon}</span>}
    </a>
  );
};

export default ButtonLinkPrimary;
