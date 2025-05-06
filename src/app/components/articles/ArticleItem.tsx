import { Article } from "@/generated/prisma";
import Link from "next/link";

interface ArticleItemProps {
  article: Article;
}
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="bg-amber-50 p-4 px-6 rounded-lg shadow flex flex-col justify-between gap-1">
      <h3 className="font-medium text-2xl line-clamp-1">{article.title}</h3>
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
