"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const AddCommetForm = () => {
  const [comment, setComment] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment === " ") toast.error("please write something");
    console.log({ comment });
    setComment("");
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
        value={comment}
        onChange={(e) => setComment(e.target.value)}
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
