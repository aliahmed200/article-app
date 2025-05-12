"use client";

import { DOMAIN } from "@/app/utils/constant";
import { Article } from "@/generated/prisma";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface ArticleItemProps {
  article: Article;
  isAdmin?: boolean;
}
const ArticleItem = ({ article, isAdmin = false }: ArticleItemProps) => {
  const router = useRouter();
  const deleteSingleArticleById = async (articleId: number) => {
    try {
      await axios.delete(`${DOMAIN}/api/articles/${articleId}`);
      router.refresh();
      toast.success("Article deleted successfully..!");
    } catch (err: any) {
      toast.error(err?.response?.data.message);
    }
  };
  return (
    <div
      className={`bg-amber-50 p-4 px-6 rounded-lg shadow flex flex-col justify-between gap-1`}
    >
      <div className="flex justify-between">
        <h3 className="font-medium text-2xl line-clamp-1">{article.title}</h3>
        {isAdmin && (
          <button
            className="cursor-pointer bg-red-300 text-white py-2 px-4 rounded-md"
            onClick={() => deleteSingleArticleById(article.id)}
          >
            delete
          </button>
        )}
      </div>
      <p className="text-xl font-light">{article.description}</p>
      <Link
        className="bg-amber-300 w-fit underline text-xl"
        href={`/articles/${article.id}`}
      >
        Read More
      </Link>
    </div>
  );
};

export default ArticleItem;
