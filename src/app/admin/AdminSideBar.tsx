import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";

const AdminSideBar = () => {
  return (
    <>
      <Link href="/admin" className="flex items-center px-3 gap-1 mb-4">
        <CgMenuGridR />
        <span className="hidden lg:block">Dashboard</span>
      </Link>
      <ul>
        <li>
          <Link
            href="/admin/articles-table"
            className="flex items-center gap-1  p-3 hover:lg:bg-amber-200 underline"
          >
            <MdOutlineArticle />
            <span className="hidden lg:block">Articles</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/comments-table"
            className="flex items-center gap-1  p-3 hover:lg:bg-amber-200 underline"
          >
            <FaRegComments />
            <span className="hidden lg:block">Comments</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AdminSideBar;
