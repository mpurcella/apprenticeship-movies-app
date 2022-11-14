import React from "react";

type ButtonTypes = {
  endIcon: React.ReactNode;
  children: React.ReactNode;
};

const Button = ({ endIcon, children }: ButtonTypes) => {
  return (
    <button className="button-primary">
      {children}
      <span className="ml-12">{endIcon}</span>
    </button>
  );
};

export default Button;
