import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="h-dvh flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-extrabold text-red-950">404</h1>
      <p className="text-xl">page not found</p>
      <Link className="bg-gray-100 w-fit underline text-xl" href="/">
        Go to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
