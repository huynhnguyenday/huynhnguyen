import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const FooterSection = ({ isDarkMode, isVietMode }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-transparent pt-10 pb-3 text-center">
      {/* Logo */}
      <div
        className={`flex justify-center text-7xl font-bold pb-10 ${
          isDarkMode ? "text-white" : "text-purple-400"
        }`}
      >
        <span>
          <Image
            src={"/image/favicon.png"}
            alt="Language Flag"
            width={70}
            height={70}
            className="w-[70px] h-[70px] lg:w-[70px] lg:h-[70px]"
          />
        </span>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex justify-center gap-8 pb-6 mt-4 text-sm md:text-base ${
          isDarkMode ? "text-white" : "text-[#2A1454]"
        }`}
      >
        {[
          { id: "about", label: isVietMode ? "Giới thiệu" : "Introduce" },
          { id: "skills", label: isVietMode ? "Kỹ năng" : "Skills" },
          { id: "work", label: isVietMode ? "Dự án" : "Works" },
          { id: "contact", label: isVietMode ? "Liên hệ" : "Contact" },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="hover:text-purple-400 transition relative group"
          >
            {link.label}
            <span className="absolute left-0 bottom-[-4px] rounded-full w-0 h-[3px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4 text-2xl">
        {[
          {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/imodnoliub",
          },
          {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/hu%E1%BB%B3nh-nguy%E1%BB%85n-h%E1%BB%AFu/",
          },
          { icon: <FaGithub />, link: "https://github.com/huynhnguyenday" },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/hhuyn._.hn/",
          },
        ].map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center ${
              isDarkMode
                ? "bg-black text-purple-400"
                : "bg-white text-[#8750F7]"
            } border border-purple-400 rounded-full 
        hover:bg-purple-400 hover:text-white transition-transform duration-200 hover:scale-95`}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-6 text-xs lg:text-sm text-gray-500">
        © 2025{" "}
        {isVietMode
          ? "tất cả các quyền được bảo lưu bởi"
          : "All rights reserved by"}{" "}
        <span
          className={`text-sm lg:text-base font-semibold ${
            isDarkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white"
              : "text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-400"
          }`}
        >
          Nguyễn Hữu Huỳnh
        </span>
      </p>
    </footer>
  );
};

export default FooterSection;
