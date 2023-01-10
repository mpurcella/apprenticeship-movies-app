type PaginationTypes = {
  children: React.ReactNode;
};

const Pagination = ({ children }: PaginationTypes) => {
  return <div className="flex justify-center gap-28">{children}</div>;
};

export default Pagination;
