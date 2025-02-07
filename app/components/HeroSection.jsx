import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeroSection = ({ isDarkMode }) => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-28 lg:mt-36">
        {/* Phần chữ */}
        <div className="col-span-7 mx-2 lg:mt-8 lg:ml-20 lg:mr-0">
          <h1
            className={`text-4xl lg:text-5xl mb-4 font-bold ${
              isDarkMode ? "text-white" : "text-[#2A1454]"
            }`}
          >
            Hi, I am Huỳnh
          </h1>
          <h2
            className={`text-5xl lg:text-6xl mb-10 font-extrabold text-transparent bg-clip-text ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-400 to-white"
                : "bg-gradient-to-r from-purple-400 to-black"
            }`}
          >
            Front End Developer.
          </h2>

          {/* Ảnh chỉ hiển thị trên mobile */}
          <div className="flex lg:hidden justify-center my-8">
            <Image
              src="/image/img-bg2.png"
              alt="Background"
              width={250}
              height={220}
              className="rounded-3xl rotate-6 hover:rotate-0 border-2 border-indigo-900 hover:border-purple-400 transition-all duration-300"
            />
          </div>
          <p
            className={`${
              isDarkMode ? "text-white" : "text-[#2A1454]"
            } text-2xl lg:text-2xl`}
          >
            I like to focus on making my website simple but easy to use and
            optimized for users while still fully meeting the minimum uxui
            architecture of the website.
          </p>

          {/* Chỉnh sửa flex để các icon nằm ngang bên phải nút Download */}
          <div className="flex flex-col lg:flex-row items-center mt-12">
            <button
              className={`relative overflow-hidden ${
                isDarkMode
                  ? "bg-black text-purple-400"
                  : "bg-white text-[#8750F7]"
              } font-semibold border border-purple-400 px-8 py-4 text-xl rounded-full flex items-center transition-transform duration-300 hover:scale-95 group hover:text-white`}
            >
              <span className="relative z-10 flex items-center">
                Download CV
                <MdOutlineFileDownload className={`ml-2 text-4xl font-thin`} />
              </span>
              <span className="absolute inset-0 bg-purple-400 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"></span>
            </button>

            <div className="flex lg:ml-6 gap-4 mt-6 lg:mt-0">
              <a
                href="https://www.facebook.com/imodnoliub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`w-10 h-10 flex items-center justify-center ${
                    isDarkMode
                      ? "bg-black text-purple-400"
                      : "bg-white text-[#8750F7]"
                  } border-solid border border-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-transform duration-200 hover:scale-95`}
                >
                  <FaFacebookF className="text-xl hover:text-white" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/hu%E1%BB%B3nh-nguy%E1%BB%85n-h%E1%BB%AFu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`w-10 h-10 flex items-center justify-center ${
                    isDarkMode
                      ? "bg-black text-purple-400"
                      : "bg-white text-[#8750F7]"
                  } border-solid border border-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-transform duration-200 hover:scale-95`}
                >
                  <FaLinkedinIn className="text-xl hover:text-white" />
                </button>
              </a>
              <a
                href="https://github.com/huynhnguyenday"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`w-10 h-10 flex items-center justify-center ${
                    isDarkMode
                      ? "bg-black text-purple-400"
                      : "bg-white text-[#8750F7]"
                  } border-solid border border-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-transform duration-200 hover:scale-95`}
                >
                  <FaGithub className="text-xl hover:text-white" />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Ảnh hiển thị bên phải trên màn hình lớn */}
        <div className="col-span-5 mt-16 lg:ml-8 lg:mt-0 hidden lg:block">
          <Image
            src="/image/img-bg2.png"
            alt="Background"
            width={350}
            height={300}
            className="rounded-3xl rotate-6 hover:rotate-0 border-2 border-indigo-950 hover:border-purple-400 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
