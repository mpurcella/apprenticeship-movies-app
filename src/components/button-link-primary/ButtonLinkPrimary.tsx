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
      target="_blank"
      rel="noopener noreferrer"
    >
      {Boolean(startIcon) && <span className="text-14 mr-12">{startIcon}</span>}
      {children}
      {Boolean(endIcon) && <span className="text-14 ml-12">{endIcon}</span>}
    </a>
  );
};

export default ButtonLinkPrimary;
