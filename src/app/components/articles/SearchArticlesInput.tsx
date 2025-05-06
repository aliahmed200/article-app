"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchArticlesInput = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/articles/search?searchText=${searchText}`);
  };
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <div className="flex flex-col gap-2.5">
        <input
          className="w-full mb-4 rounded  bg-amber-50 border-black p-2 text-xl"
          type="search"
          placeholder="Search For articles"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchArticlesInput;
