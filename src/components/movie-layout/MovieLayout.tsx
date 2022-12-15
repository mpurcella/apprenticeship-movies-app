import React from "react";

type MovieLayoutTypes = {
  label: React.ReactNode;
  children: React.ReactNode;
};

const MovieLayout = ({ label, children }: MovieLayoutTypes) => {
  return (
    <div className="px-20 pt-132 pb-68 md:px-68 lg:p-68 lg:ml-260">
      {label === null ? null : (
        <h1 className="text-24 font-light uppercase mb-44 lg:text-32">
          {label} Movies
        </h1>
      )}
      {children}
    </div>
  );
};

export default MovieLayout;
