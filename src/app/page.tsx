"use client";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1744046933637.json";

const HomePage = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center">
        <div className="flex lg:flex-col gap-3 sm:w-1/2 lg:w-4/5 items-center lg:items-start">
          <h1 className="hidden lg:block text-lg md:text-2xl lg:text-5xl font-black md:leading-8 lg:leading-16">
            Explore Ideas.
            <p>Expand Your Mind.</p>
          </h1>
          <p className="hidden lg:block text lg:text-xl font-light">
            Discover engaging articles written to inform, inspire, and spark
            curiosity. Join our growing community of readers and stay ahead with
            fresh insights.
          </p>
          <div className="bg-white w-fit p-5 rounded-2xl mt-2">
            <h2 className="text-xl font-bold">Admin Email:</h2>
            <p className="text-lg">Email: dev@dev.dev</p>
            <p className="text-lg">Password: 123456</p>
          </div>
        </div>
        <Lottie
          animationData={animationData}
          className="md:w-full lg:w-[800px]"
          style={{ backgroundColor: "#fff", borderRadius: "1rem" }}
          loop={true}
        />
      </div>
    </section>
  );
};

export default HomePage;
