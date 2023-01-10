import React from "react";
import { Link } from "react-router-dom";

type ButtonLinkPrimaryTypes = {
  url: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  styleLight: boolean;
  externalLink: boolean;
};

const ButtonLinkPrimary = ({
  url,
  children,
  startIcon,
  endIcon,
  styleLight,
  externalLink,
}: ButtonLinkPrimaryTypes) => {
  if (externalLink)
    return (
      <a
        href={url}
        className={styleLight ? "button-link-light" : "button-link-dark"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Boolean(startIcon) && (
          <span className="text-14 mr-12">{startIcon}</span>
        )}
        {children}
        {Boolean(endIcon) && <span className="text-14 ml-12">{endIcon}</span>}
      </a>
    );
  else {
    return (
      <Link
        to={url}
        className={styleLight ? "button-link-light" : "button-link-dark"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Boolean(startIcon) && (
          <span className="text-14 mr-12">{startIcon}</span>
        )}
        {children}
        {Boolean(endIcon) && <span className="text-14 ml-12">{endIcon}</span>}
      </Link>
    );
  }
};

export default ButtonLinkPrimary;
