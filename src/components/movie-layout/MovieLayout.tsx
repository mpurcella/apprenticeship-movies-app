import React from "react";

type MovieLayoutTypes = {
  children: React.ReactNode;
};

const MovieLayout = ({ children }: MovieLayoutTypes) => {
  return <main className="px-20 py-68 md:px-68">{children}</main>;
};

export default MovieLayout;
