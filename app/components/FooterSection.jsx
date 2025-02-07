import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-transparent text-white pt-10 pb-3 text-center">
      {/* Logo */}
      <div className="text-7xl font-bold">H</div>

      {/* Navigation Links */}
      <div className="flex justify-center gap-8 mt-4 text-sm md:text-base">
        {[
          { id: "about", label: "Introduce" },
          { id: "skills", label: "Skills" },
          { id: "work", label: "Works" },
          { id: "contact", label: "Contact" },
        ].map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            scroll={false}
            className="hover:text-purple-400 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4 text-lg">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-xs md:text-sm opacity-75">
        © 2025 All rights reserved by Nguyễn Hữu Huỳnh
      </p>
    </footer>
  );
};

export default FooterSection;
