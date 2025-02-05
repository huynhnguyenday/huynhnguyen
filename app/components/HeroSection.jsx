import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-28">
        <div className="col-span-7 mt-16 ml-20">
          <h1 className="text-4xl lg:text-6xl mb-6 font-extrabold text-white">
            Hi, I'm Huỳnh
          </h1>
          <h2 className="text-4xl lg:text-6xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Front End Developer.
          </h2>
          <p className="text-[#ADB7BE] text-lg lg:text-2xl">
            I like to focus on making my website simple but easy to use and
            optimized for users while still fully meeting the minimum uxui
            architecture of the website.
          </p>
        </div>
        <div className="col-span-5 ml-16 mt-16 lg:mt-0">
          <Image
            src="/image/img-backround.jpg"
            alt="Background"
            width={350}
            height={300}
            className="rounded-3xl rotate-6 hover:rotate-0 border-2 border-blue-950 hover:border-purple-600 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
