"use client";

import { Input } from "@/components/ui/input";
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
        <Input
          className="w-full mb-4 "
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
