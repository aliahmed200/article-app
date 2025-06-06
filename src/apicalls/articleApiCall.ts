import { Article } from "@/generated/prisma";

// get article based in page number
export async function getArticles(
  pageNumber: string | undefined
): Promise<Article[]> {
  const response = await fetch(
    `http://localhost:3000/api/articles?pageNumber=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("falid to fetch articles");
  }

  return response.json();
}
// articles count
export async function getArticlesCount(): Promise<number> {
  const response = await fetch(`http://localhost:3000/api/articles/count`);

  if (!response.ok) {
    throw new Error("falid to fetch articles count");
  }

  const { count } = await response.json();
  return count;
}
// search for articles
export async function searchArticles(searchText: string): Promise<Article[]> {
  const response = await fetch(
    `http://localhost:3000/api/articles/search?searchText=${searchText}`
  );

  if (!response.ok) {
    throw new Error("falid to fetch articles count");
  }

  return response.json();
}
