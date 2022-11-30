type HamburgerButtonTypes = {
  onClick: () => void;
};

const HamburgerButton = ({ onClick }: HamburgerButtonTypes) => {
  return (
    <button
      className="w-32 h-28 flex flex-col justify-around lg:hidden"
      onClick={onClick}
    >
      <span className="w-full h-3 bg-black"></span>
      <span className="w-full h-3 bg-black"></span>
      <span className="w-full h-3 bg-black"></span>
    </button>
  );
};

export default HamburgerButton;
