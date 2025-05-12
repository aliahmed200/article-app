"use client";

import { DOMAIN } from "@/app/utils/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface AddCommentFormProps {
  articleId: number;
}

const AddCommetForm = ({ articleId }: AddCommentFormProps) => {
  const router = useRouter();
  const [text, setText] = useState("");

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error("please write something");
      return;
    }
    try {
      await axios.post(`${DOMAIN}/api/comments`, { text, articleId });
      router.refresh();
      setText("");
    } catch (err: any) {
      setText("");
      console.log(err);
      toast.error(err?.response?.data.message);
    }
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      className="flex justify-center items-start my-5"
    >
      <input
        className="w-full p-2 mb-4  bg-amber-50  text-xl"
        type="text"
        placeholder="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="text-sm cursor-pointer text-white bg-black p-3"
      >
        Comment
      </button>
    </form>
  );
};

export default AddCommetForm;
