import React from "react";

interface ButtonPrimaryTypes {
  endIcon: React.ReactNode;
  children: React.ReactNode;
}

const ButtonPrimary = ({ endIcon, children }: ButtonPrimaryTypes) => {
  return (
    <button className="button-primary">
      {children}
      <span className="ml-12">{endIcon}</span>
    </button>
  );
};

export default ButtonPrimary;
