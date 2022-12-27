type BannerTypes = {
  label: React.ReactNode;
};

const Banner = ({ label }: BannerTypes) => {
  return (
    <div className="bg-red flex justify-center items-center h-15">
      <h1 className="text-28 text-white-200 uppercase font-extrabold md:text-32">
        {label} Movies
      </h1>
    </div>
  );
};

export default Banner;
