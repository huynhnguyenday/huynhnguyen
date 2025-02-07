import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const HeroSection = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  
  return (
    <section>
      {/* Navbar */}
      <nav className="flex bg-transparent items-center lg:py-4 top-0 left-0 w-full z-50">
        {/* Logo & Email */}
        <div className="flex items-center lg:ml-20 ml-4 my-4 lg:my-2">
          <span
            className={`text-7xl font-bold ${
              isDarkMode ? "text-white" : "text-purple-400"
            }`}
          >
            H
          </span>
          <span
            className={`hidden lg:block text-base ml-8 font-sora font-medium ${
              isDarkMode ? "text-white" : "text-[#2A1454]"
            }`}
          >
            huynhbutforwork@gmail.com
          </span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex ml-[300px] gap-14 text-base font-bold font-sora">
          {[
            { href: "#about", label: "Introduce" },
            { href: "#skills", label: "Skills" },
            { href: "#work", label: "Works" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative group ${
                isDarkMode ? "text-white" : "text-[#2A1454]"
              } transition`}
            >
              {link.label}
              <span className="absolute left-0 bottom-[-4px] rounded-full w-0 h-[3px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <button className="ml-32 lg:ml-16 px-8 py-[15px] text-base text-white rounded-full transition-all duration-300 font-sora font-bold bg-[linear-gradient(90deg,_rgb(42,20,84)_0%,_rgb(135,80,247)_51%,_rgb(42,20,84)_100%)] bg-[length:300%_100%] bg-right hover:bg-left">
          Hire Me!
        </button>

        {/* FAB Menu Button (Mobile) */}
        <button
          className={`md:hidden ml-6 text-[48px] ${
            isDarkMode ? "text-white" : "text-purple-500"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaXmark /> : <FaBarsStaggered />}
        </button>
      </nav>

      {/* Mobile Navigation Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed top-[94px] left-0 w-full h-[calc(100vh-75px)] bg-[rgb(42,20,84)] flex flex-col pl-6 pt-2 z-40">
          {[
            { href: "#about", label: "INTRODUCE" },
            { href: "#skills", label: "SKILLS" },
            { href: "#work", label: "WORKS" },
            { href: "#contact", label: "CONTACT" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-3xl text-white pt-6 pb-4 hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Email at the bottom */}
          <div className="mt-auto pb-10 pl-6 text-start text-white text-lg">
            huynhbutwork@gmail.com
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 mt-12 lg:mt-20 px-4 mb-12">
        {/* Phần chữ */}
        <div className="col-span-7 mx-2 lg:mt-8 lg:ml-20 lg:mr-0">
          <h1
            className={`text-3xl lg:text-5xl mb-4 font-bold ${
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
