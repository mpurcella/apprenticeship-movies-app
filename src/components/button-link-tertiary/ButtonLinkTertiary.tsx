import React from "react";

type ButtonLinkTertiaryTypes = {
  url: string;
  children: React.ReactNode;
};

const ButtonLinkTertiary = ({ url, children }: ButtonLinkTertiaryTypes) => {
  return (
    <a
      href={url}
      className="button-link-tertiary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ButtonLinkTertiary;
