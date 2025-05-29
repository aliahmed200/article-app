"use client";
// import Lottie from "lottie-react";
// import animationData from "../../public/Animation - 1744046933637.json";
import theblog from "../../public/Container.svg";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="my-56">
      <div className="flex flex-col-reverse lg:flex-row gap-4  lg:gap-0 lg:justify-between items-center">
        <Image
          className="dark:brightness-0 dark:invert "
          src={theblog}
          alt="tree"
        />

        {/* <Lottie
          animationData={animationData}
          className="md:w-full lg:w-[800px]"
          style={{ backgroundColor: "#fff", borderRadius: "1rem" }}
          loop={true}
        /> */}
      </div>
    </section>
  );
};

export default HomePage;
