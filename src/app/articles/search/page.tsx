import { searchArticles } from "@/apicalls/articleApiCall";
import ArticleItem from "@/app/components/articles/ArticleItem";
import { Article } from "@/generated/prisma";

interface SearchArticlePageProps {
  searchParams: Promise<{ searchText: string }>;
}
const Search = async ({ searchParams }: SearchArticlePageProps) => {
  const searchText = searchParams?.searchText || "";
  const articles: Article[] = await searchArticles(searchText);
  if (!searchText) {
    return <p className="text-center mt-10">No search text provided.</p>;
  }

  return (
    <section>
      {articles.length === 0 ? (
        "no results"
      ) : (
        <div className="mb-32">
          <h1>
            Articles Based on{" "}
            <span className="font-bold underline">{searchText}</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {articles.map((article) => (
              <ArticleItem article={article} key={article.id} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Search;
