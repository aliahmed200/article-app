import Link from "next/link";

interface PaginationProps {
  pages: number;
  pageNumber: number;
  route: string;
}
const Pagination = ({ pageNumber, pages, route }: PaginationProps) => {
  const pagesArray: number[] = [];
  for (let i = 1; i <= pages; i++) pagesArray.push(i);
  return (
    <div className="flex items-center justify-center mt-5 mb-10">
      {pageNumber !== 1 && (
        <Link
          href={`${route}?pageNumber=${pageNumber - 1}`}
          className="p-2 px-4 border cursor-pointer"
        >
          Prev
        </Link>
      )}

      {pagesArray.map((page) => (
        <Link
          href={`${route}?pageNumber=${page}`}
          className={` ${
            pageNumber === page ? "bg-white" : ""
          } p-2 px-4 border cursor-pointer`}
          key={page}
        >
          {page}
        </Link>
      ))}
      {pageNumber != pages && (
        <Link
          href={`${route}?pageNumber=${pageNumber + 1}`}
          className="p-2 px-4 border cursor-pointer"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
