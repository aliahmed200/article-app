"use client";
import { DOMAIN } from "@/app/utils/constant";
import { CommentWithUser } from "@/app/utils/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface CommentItemProps {
  comment: CommentWithUser;
}
const CommentItem = ({ comment }: CommentItemProps) => {
  const router = useRouter();
  const deleteSingleCommentById = async (commmentId: number) => {
    try {
      await axios.delete(`${DOMAIN}/api/comments/${commmentId}`);
      router.refresh();
      toast.success("Article deleted successfully..!");
    } catch (err: any) {
      toast.error(err?.response?.data.message);
    }
  };

  return (
    <div className="flex justify-between  bg-amber-50 px-4 mb-4 p-2 rounded-lg shadow min-h-24">
      <div className="flex flex-col justify-between">
        <strong className="text-gray-800 uppercase">
          {comment.user.username}
        </strong>
        <p className="text-gray-800 mb-2">{comment.text}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-center items-center">
          <FaEdit className="text-green-600 text-xl cursor-pointer me-3" />
          <FaTrash
            onClick={() => deleteSingleCommentById(comment.id)}
            className="text-red-600 text-xl cursor-pointer"
          />
        </div>
        <span className="bg-black px-1 rounded-lg text-white">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default CommentItem;
