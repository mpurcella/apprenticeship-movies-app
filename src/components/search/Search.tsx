type SearchTypes = {
  placeholder: string;
};

const Search = ({ placeholder }: SearchTypes) => {
  return (
    <input
      type="search"
      className="w-full bg-white-200 px-16 py-12 rounded-8 outline-none duration-200 ease-out focus:ring-red/75 focus:ring-4"
      placeholder={placeholder}
      disabled
    />
  );
};

export default Search;
