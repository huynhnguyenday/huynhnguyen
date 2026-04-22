"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SkillSection = ({ isDarkMode, isVietMode }) => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const displaySkills = useMemo(() => {
    if (skills.length > 0 && skills.length <= 5) {
      return [...skills, ...skills];
    }
    return skills;
  }, [skills]);

  useEffect(() => {
    let isMounted = true;

    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills", { cache: "no-store" });
        if (!response.ok) {
          setSkills([]);
          return;
        }
        const data = await response.json();
        if (isMounted && Array.isArray(data)) {
          setSkills(data);
        }
      } catch (error) {
        console.error("Cannot load skills:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchSkills();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="skills"
      className={`text-center pt-16 lg:pt-24 pb-24 
        ${isDarkMode ? "bg-transparent" : "bg-[rgb(246,243,252)]"}`}
    >
      <h1
        className={`text-5xl lg:text-6xl mb-6 h-16 font-extrabold text-transparent bg-clip-text 
        ${
          isDarkMode
            ? "bg-gradient-to-r from-purple-400 to-white"
            : "bg-gradient-to-r from-purple-400 to-black"
        }`}
      >
        {isVietMode ? "Kỹ năng" : "My Skills"}
      </h1>
      <p
        className={`${
          isDarkMode ? "text-white" : "text-[#2A1454]"
        } text-xl lg:text-2xl max-w-3xl mx-auto mb-20`}
      >
        {isVietMode
          ? "Tôi đặt hết ý tưởng và mong muốn của bạn vào trong dự án độc đáo và nó sẽ truyền cảm hứng cho bạn lẫn khách hàng của bạn."
          : "I put your ideas and thus your wishes in the form of a unique project that inspires you and your customers."}
      </p>

      <div className="max-w-6xl mx-auto pl-6 lg:pl-0">
        {isLoading ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={5.5}
            pagination={false}
            breakpoints={{
              320: { slidesPerView: 2.2 },
              640: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.7 },
            }}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={`skill-skeleton-${index}`}>
                <div
                  className={`p-4 rounded-3xl w-40 h-40 lg:w-48 lg:h-48 mx-auto animate-pulse ${
                    isDarkMode ? "bg-[rgb(29,17,40)]" : "bg-purple-100"
                  }`}
                >
                  <div
                    className={`w-20 h-20 rounded-full mx-auto mb-6 ${
                      isDarkMode ? "bg-purple-900/60" : "bg-purple-200"
                    }`}
                  />
                  <div
                    className={`h-5 w-2/3 mx-auto rounded ${
                      isDarkMode ? "bg-purple-900/60" : "bg-purple-200"
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={5.5}
            pagination={false}
            breakpoints={{
              320: { slidesPerView: 2.2 },
              640: { slidesPerView: 3.2 },
              1024: { slidesPerView: 5.5 },
            }}
          >
            {displaySkills.map((skill, index) => (
              <SwiperSlide key={`${skill.name}-${index}`}>
                <div
                  className={`group flex flex-col items-center justify-center p-4 rounded-3xl transition-all duration-300 w-40 h-40 lg:w-48 lg:h-48 border border-transparent  
    ${
      isDarkMode
        ? "lg:bg-[rgb(20,11,28)] bg-[rgb(29,17,40)] hover:bg-[rgb(135,80,247)] hover:border-purple-400 hover:bg-opacity-50 hover:backdrop-blur-lg text-white"
        : "bg-white hover:bg-[rgb(42,20,84)] hover:border-none text-[#2A1454] hover:text-purple-400"
    }`}
                >
                  <div className="w-20 h-20 relative transition-transform duration-300 group-hover:scale-125 mb-6">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      fill
                      sizes="(min-width: 1024px) 80px, 72px"
                      className="object-contain object-center"
                    />
                  </div>
                  <span className="text-xl font-bold">{skill.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
