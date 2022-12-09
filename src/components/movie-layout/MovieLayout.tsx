import React from "react";

type MovieLayoutTypes = {
  label: React.ReactNode;
  children: React.ReactNode;
};

const MovieLayout = ({ label, children }: MovieLayoutTypes) => {
  return (
    <div className="flex flex-col items-center px-48 pt-102 pb-68 lg:py-56 lg:ml-260">
      <h1 className="inline-block text-20 text-white-200 bg-black uppercase font-semibold text-center mb-36 px-8 py-4">
        {label}
      </h1>
      {children}
    </div>
  );
};

export default MovieLayout;
