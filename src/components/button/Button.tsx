import React from "react";

type ButtonTypes = {
  startIcon: React.ReactNode;
  endIcon: React.ReactNode;
  children: React.ReactNode;
  styleLight: boolean;
};

const Button = ({ startIcon, endIcon, children, styleLight }: ButtonTypes) => {
  return (
    <button className={styleLight ? "button-light" : "button-dark"}>
      {Boolean(startIcon) && <span className="text-14 mr-12">{startIcon}</span>}
      {children}
      {Boolean(endIcon) && <span className="text-14 ml-12">{endIcon}</span>}
    </button>
  );
};

export default Button;
