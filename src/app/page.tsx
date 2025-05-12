"use client";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1744046933637.json";

const HomePage = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col-reverse md:flex-row lg:justify-between items-center">
        <div className="flex hidden md:block  flex-col gap-3 sm:w-1/2 lg:w-4/5 items-center lg:items-start">
          <h1 className="sm:text-2xl lg:text-5xl font-black leading-16">
            Explore Ideas.
            <br /> Expand Your Mind.
          </h1>
          <p className="text lg:text-xl font-light">
            Discover engaging articles written to inform, inspire, and spark
            curiosity. Join our growing community of readers and stay ahead with
            fresh insights.
          </p>
        </div>
        <Lottie
          animationData={animationData}
          style={{ width: 500, backgroundColor: "#fff", borderRadius: "1rem" }}
          loop={true}
        />
      </div>
    </section>
  );
};

export default HomePage;
