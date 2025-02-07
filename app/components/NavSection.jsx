import React from "react";

const NavSection = ({ isDarkMode }) => {
  return (
    <nav className="flex bg-transparent items-center px-8 py-4 fixed top-0 left-0 w-full z-50">
      {/* Logo và Email */}
      <div className="flex items-center ml-24">
        <span
          className={`text-7xl font-bold ${
            isDarkMode ? "text-white" : "text-purple-400"
          }`}
        >
          H
        </span>
        <span
          className={`text-base ml-8 font-sora font-medium ${
            isDarkMode ? "text-white" : "text-[#2A1454]"
          }`}
        >
          huynhbutforwork@gmail.com
        </span>
      </div>

      {/* Navigation Links */}
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

      {/* Hire Me Button (Không thay đổi màu) */}
      <button className="ml-16 px-8 py-[15px] text-base order-none text-white shadow-none rounded-full transition-all duration-300 font-sora font-bold bg-[linear-gradient(90deg,_rgb(42,20,84)_0%,_rgb(135,80,247)_51%,_rgb(42,20,84)_100%)] bg-[length:300%_100%] bg-right hover:bg-left">
        Hire Me!
      </button>
    </nav>
  );
};

export default NavSection;
