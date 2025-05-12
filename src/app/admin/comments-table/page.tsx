import CommentItem from "@/app/components/comments/CommentItem";
import { verifyTokenForPage } from "@/app/utils/verifyToken";
import { CommentWithUser } from "@/app/utils/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { DOMAIN } from "@/app/utils/constant";

const AdminCommentsTable = async () => {
  const token = cookies().get("jwtToken")?.value;
  const payload = verifyTokenForPage(token);
  if (!token || payload?.isAdmin === false) {
    redirect("/");
  }
  const response = await fetch(`${DOMAIN}/api/comments`);
  const comments: CommentWithUser[] = await response.json();
  console.log("comments--------------------------------------------", comments);



  return (
    <section className="mb-32">
      {/* <Pagination
        pageNumber={parseInt(pageNumber)}
        route="/admin/articles-table"
        pages={pages}
      /> */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </div>
    </section>
  );
};

export default AdminCommentsTable;
