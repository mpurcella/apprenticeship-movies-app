import React from "react";
import Banner from "../banner/Banner";

type MovieLayoutTypes = {
  label: React.ReactNode;
  children: React.ReactNode;
};

const MovieLayout = ({ label, children }: MovieLayoutTypes) => {
  return (
    <main>
      {label === null ? null : <Banner label={label} />}
      <div className="m-auto px-20 py-68 md:px-68">{children}</div>
    </main>
  );
};

export default MovieLayout;
