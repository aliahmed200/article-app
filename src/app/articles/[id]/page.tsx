import AddCommetForm from "@/app/components/comments/AddCommentForm";
import CommentItem from "@/app/components/comments/CommentItem";
import { Article } from "@/app/utils/types";

interface SignleArticleProps {
  params: { id: string };
}
const page = async ({ params }: SignleArticleProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!response.ok) throw new Error("Falid to fetch article");
  const article: Article = await response.json();

  return (
    <section className="my-4">
      <div className="bg-amber-50 p-4 px-6 rounded-lg shadow flex flex-col justify-between gap-4">
        <h1 className="text-4xl font-[900] ">{article.title}</h1>
        <div className="bg-gray-100 w-fit text-xl">1/1/2024</div>
        <p className="text-xl font-[400]">{article.body}</p>
      </div>
      <AddCommetForm />
      <p className="mb-2 text-xl font-bold">Comments</p>
      <CommentItem />
    </section>
  );
};

export default page;
