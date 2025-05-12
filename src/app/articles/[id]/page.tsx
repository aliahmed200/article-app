import { getSingleArticleById } from "@/apicalls/articleApiCall";
import AddCommetForm from "@/app/components/comments/AddCommentForm";
import CommentItem from "@/app/components/comments/CommentItem";
import { SingleArticle } from "@/app/utils/types";
import { verifyTokenForPage } from "@/app/utils/verifyToken";
import { cookies } from "next/headers";

interface SignleArticleProps {
  params: { id: string };
}
const page = async ({ params }: SignleArticleProps) => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);
  const article: SingleArticle = await getSingleArticleById(params.id);

  return (
    <section className="my-4 mb-32">
      <div className="bg-amber-50 p-4 px-6 rounded-lg shadow flex flex-col justify-between gap-4">
        <h1 className="text-4xl font-[900] ">{article.title}</h1>
        <div className="bg-gray-100 w-fit text-xl">
          {new Date(article.createdAt).toDateString()}
        </div>
        <p className="text-xl font-[400]">{article.description}</p>
      </div>
      {payload ? (
        <AddCommetForm articleId={article.id} />
      ) : (
        <p>You should log in first</p>
      )}
      <p className="mb-2 text-xl font-bold">Comments</p>
      {article.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default page;
