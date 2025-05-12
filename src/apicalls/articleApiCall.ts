import { Article, Comment } from "@/generated/prisma";
import { DOMAIN } from "@/app/utils/constant";
import { CommentWithUser, SingleArticle } from "@/app/utils/types";
// get article based in page number
export async function getArticles(
  pageNumber: string | undefined
): Promise<Article[]> {
  const response = await fetch(
    `${DOMAIN}/api/articles?pageNumber=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("falid to fetch articles");
  }

  return response.json();
}
// articles count
export async function getArticlesCount(): Promise<number> {
  const response = await fetch(`${DOMAIN}/api/articles/count`);

  if (!response.ok) {
    throw new Error("falid to fetch articles count");
  }

  const { count } = await response.json();
  return count;
}
// search for articles
export async function searchArticles(searchText: string): Promise<Article[]> {
  const response = await fetch(
    `${DOMAIN}/api/articles/search?searchText=${searchText}`
  );

  if (!response.ok) {
    throw new Error("falid to fetch articles count");
  }

  return response.json();
}

// get single article by id
export async function getSingleArticleById(
  articleId: string
): Promise<SingleArticle> {
  const response = await fetch(`${DOMAIN}/api/articles/${articleId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("falid to fetch articles count");
  }

  return response.json();
}
// // deltet single article by id

// export async function getComments() {
//   const response = await fetch(`${DOMAIN}/api/comments`);

//   if (!response.ok) {
//     throw new Error("falid to fetch comments");
//   }

//   return response.json();
// }
