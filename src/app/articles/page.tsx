import ArticleItem from "../components/articles/ArticleItem";
import type { Metadata } from "next";
import SearchArticlesInput from "../components/articles/SearchArticlesInput";
import Pagination from "../components/articles/Pagination";
import { getArticles, getArticlesCount } from "@/apicalls/articleApiCall";
import { Article } from "@/generated/prisma";
import { ARTICLE_PER_PAGE } from "../utils/constant";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles about anything",
};

interface ArticlePageProps {
  searchParams: Promise<{ pageNumber: string }>;
}

const Articles = async ({ searchParams }: ArticlePageProps) => {
  const { pageNumber } = searchParams;

  const articles: Article[] = await getArticles(pageNumber);
  const count: number = await getArticlesCount();
  const pages = Math.ceil(count / ARTICLE_PER_PAGE);
  return (
    <section className="mb-32 w-[70%] m-auto md:w-full">
      <SearchArticlesInput />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {articles.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))}
      </div>
      <Pagination
        pageNumber={parseInt(pageNumber)}
        route="/articles"
        pages={pages}
      />
    </section>
  );
};

export default Articles;
