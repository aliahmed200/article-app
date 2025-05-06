"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const AddArticleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") toast.error("Title is Required");
    if (description === "") toast.error("Description is Required");
    console.log({ title, description });
  };
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <div className="flex flex-col gap-2.5">
        <label className="text-xl" htmlFor="">
          Title
        </label>
        <input
          className="mb-4 rounded border border-gray-400 p-2 text-xl"
          type="text"
          placeholder="Enter Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-xl" htmlFor="">
          Description
        </label>
        <textarea
          className="mb-4 rounded border border-gray-400 p-2 text-xl"
          placeholder="Enter Article decription"
          value={description}
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="text-2xl text-white bg-black p-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddArticleForm;
