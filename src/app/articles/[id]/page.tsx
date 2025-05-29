import { getSingleArticleById } from "@/apicalls/articleApiCall";
import AddCommetForm from "@/app/components/comments/AddCommentForm";
import CommentItem from "@/app/components/comments/CommentItem";
import { SingleArticle } from "@/app/utils/types";
import { verifyTokenForPage } from "@/app/utils/verifyToken";
import { cookies } from "next/headers";
import Image from "next/image";

interface SignleArticleProps {
  params: Promise<{ id: string }>;
}
const page = async ({ params }: SignleArticleProps) => {
  const { id } = await params;
  const cookieStore = await cookies();

  const token = cookieStore.get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);
  const article: SingleArticle = await getSingleArticleById(id);

  return (
    <section className="my-8 mb-48">
      <div className=" rounded-lg flex flex-col justify-between gap-1">
        {article.image && (
          <Image
            src={article.image}
            alt="Preview"
            className="rounded object-cover object-top w-full max-h-[500px]"
            width={120}
            height={120}
            layout="responsive"
            priority={true}
          />
        )}
        <h1 className="text-lg font-[900] ">{article.title}</h1>
        <div className="bg-gray-100 w-fit mb-2">
          {new Date(article.createdAt).toDateString()}
        </div>
        <div
          className="font-light mb-2 mx-3"
          dangerouslySetInnerHTML={{ __html: article.description }}
        />
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
