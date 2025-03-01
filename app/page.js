"use client";

import React, { useState, useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import FooterSection from "./components/FooterSection";
import SlideTabs from "./components/SlideTabs";
import ContactSection from "./components/ContactSection";
import WorkSection from "./components/WorkSection";
import { MdOutlineNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { GoArrowUp } from "react-icons/go";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSlideTabs, setShowSlideTabs] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVietMode, setIsVietMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth(); // Lấy width lần đầu tiên khi load trang
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleLanguageToggle = () => {
    setIsVietMode((prevMode) => !prevMode);
  };

  // Toggle between dark and light mode
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to apply the background color and text color based on the mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--background", "#0a0a0a");
      document.documentElement.style.setProperty("--foreground", "#ededed");
    } else {
      document.documentElement.style.setProperty("--background", "#ffffff");
      document.documentElement.style.setProperty("--foreground", "#171717");
    }
  }, [isDarkMode]);

  // Starry sky effect function
  useEffect(() => {
    const generateStars = (numStars) => {
      const container = document.querySelector("main");

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("span");
        star.classList.add("star");

        const randomX = Math.random();
        const randomY = Math.random();
        const randomSize = Math.random() * 0.8 + 0.5;
        const randomDuration = Math.random() * 2 + 3;

        star.style.setProperty("--random-x", randomX);
        star.style.setProperty("--random-y", randomY);
        star.style.setProperty("--random-size", randomSize);
        star.style.setProperty("--random-duration", randomDuration);

        container.appendChild(star);
      }
    };

    generateStars(500);

    return () => {
      const stars = document.querySelectorAll(".star");
      stars.forEach((star) => star.remove());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowSlideTabs(window.scrollY > 300); // Hiển thị khi cuộn xuống 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollProgressRef = { current: 0 };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / pageHeight) * 100;

      scrollProgressRef.current = scrollPercent;
      setScrollProgress(scrollPercent); // Cập nhật UI nhưng không gây render lại quá nhiều
      setShowGoTop(scrollPercent > 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] mx-auto lg:py-2 transition-all duration-300">
      <HeroSection
        isDarkMode={isDarkMode}
        isVietMode={isVietMode}
        onLanguageToggle={handleLanguageToggle}
      />

      {/* SlideTabs - Fixed nhưng chỉ hiển thị khi cuộn */}
      <div
        className={`fixed z-40 top-5 left-0 w-full transition-all duration-300 
          ${
            showSlideTabs
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }
  `}
      >
        <SlideTabs
          isDarkMode={isDarkMode}
          isVietMode={isVietMode}
          onLanguageToggle={handleLanguageToggle}
        />
      </div>
      <SkillSection
        isDarkMode={isDarkMode}
        isVietMode={isVietMode}
        onLanguageToggle={handleLanguageToggle}
      />
      <WorkSection
        isDarkMode={isDarkMode}
        isVietMode={isVietMode}
        onLanguageToggle={handleLanguageToggle}
      />
      <ContactSection
        isDarkMode={isDarkMode}
        isVietMode={isVietMode}
        onLanguageToggle={handleLanguageToggle}
      />
      <FooterSection
        isDarkMode={isDarkMode}
        isVietMode={isVietMode}
        onLanguageToggle={handleLanguageToggle}
      />

      {/* Nút Go To Top */}
      {showGoTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-3 right-3 lg:bottom-6 lg:right-6 z-40 flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 bg-transparent text-purple-400 rounded-full shadow-lg transition-all duration-300"
        >
          {/* SVG với vòng tròn nền và vòng tròn tiến trình */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Vòng tròn nền (màu tím đậm hơn) */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4A1F7C" // Màu tím đậm, hơi trong suốt
              strokeWidth="6"
            />
            {/* Vòng tròn tiến trình */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgb(135,80,247)" // Màu tím sáng
              strokeWidth="6"
              strokeDasharray="282.6" // Full vòng tròn (2 * π * r)
              strokeDashoffset={`${282.6 - (scrollProgress / 100) * 282.6}`}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.2s ease-in-out" }}
            />
          </svg>
          <GoArrowUp size={windowWidth >= 1024 ? 30 : 20} />
        </button>
      )}

      {/* Dark/Light Mode Toggle Button */}
      <button
        onClick={handleToggle}
        className="fixed top-52 lg:top-80 h-10 w-11 text-white group hover:w-28 right-0 flex items-center justify-start pl-3 border-none shadow-none rounded-l-full transition-all duration-300 font-sora 
    bg-[linear-gradient(90deg,_rgb(42,20,84)_0%,_rgb(135,80,247)_51%,_rgb(42,20,84)_100%)] 
    bg-[length:300%_100%] bg-[position:30%] hover:bg-left z-50"
      >
        <div className="flex items-center w-24">
          {isDarkMode ? (
            <>
              <CiLight className="w-6 h-6 flex-shrink-0" />
              <span className="mx-2 text-lg whitespace-nowrap overflow-hidden transition-all duration-300 group-hover:w-20 w-0">
                {isVietMode ? "Sáng" : "Light"}
              </span>
            </>
          ) : (
            <>
              <MdOutlineNightlight className="w-6 h-6 flex-shrink-0" />
              <span className="mx-2 text-lg whitespace-nowrap overflow-hidden transition-all duration-300 group-hover:w-20 w-0">
                {isVietMode ? "Tối" : "Dark"}
              </span>
            </>
          )}
        </div>
      </button>
    </main>
  );
}
