type BannerTypes = {
  label: React.ReactNode;
};

const Banner = ({ label }: BannerTypes) => {
  return (
    <div className="bg-red relative h-[15vh]">
      <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 ">
        <h1 className="text-28 text-white-200 uppercase font-extrabold md:text-32">
          {label} Movies
        </h1>
      </div>
    </div>
  );
};

export default Banner;
