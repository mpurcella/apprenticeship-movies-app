import React from "react";

type MovieLayoutTypes = {
  label: React.ReactNode;
  children: React.ReactNode;
};

const MovieLayout = ({ label, children }: MovieLayoutTypes) => {
  return (
    <div className="flex flex-col items-center px-48 pt-102 pb-68 lg:py-68 lg:ml-260">
      {label === null ? null : (
        <h1 className="inline-block text-24 uppercase font-light  mb-44">
          {label} Movies
        </h1>
      )}
      {children}
    </div>
  );
};

export default MovieLayout;
