"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const skills = [
  { src: "/image/CSS3.png", name: "CSS3" },
  { src: "/image/HTML5.png", name: "HTML5" },
  { src: "/image/Tailwind.png", name: "Tailwind" },
  { src: "/image/js.png", name: "JavaScript" },
  { src: "/image/react.png", name: "React" },
  { src: "/image/Node.png", name: "Node.js" },
  { src: "/image/Java.png", name: "Java" },
  { src: "/image/Sql.png", name: "SQL" },
  { src: "/image/MongoDB.png", name: "MongoDB" },
  { src: "/image/figma.png", name: "Figma" },
];

const SkillSection = ({ isDarkMode }) => {
  const swiperRef = useRef(null);

  return (
    <section
      id="skills"
      className={`text-center pt-16 pb-24 
        ${isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"}`}
    >
      <h1
        className={`text-5xl lg:text-6xl mb-6 font-extrabold text-transparent bg-clip-text 
        ${
          isDarkMode
            ? "bg-gradient-to-r from-purple-400 to-white"
            : "bg-gradient-to-r from-purple-400 to-black"
        }`}
      >
        My Skills
      </h1>
      <p
        className={`${
          isDarkMode ? "text-white" : "text-[#2A1454]"
        } text-xl lg:text-2xl max-w-3xl mx-auto mb-20`}
      >
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </p>

      <div
        className="max-w-6xl mx-auto pl-6 lg:pl-0"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          pagination={false}
          loop={true}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div
                className={`group flex flex-col items-center justify-center p-4 rounded-3xl transition-all duration-300 w-40 h-40 lg:w-48 lg:h-48 border border-transparent  
    ${
      isDarkMode
        ? "bg-[rgb(20,11,28)] hover:bg-[rgb(135,80,247)] hover:border-purple-400 hover:bg-opacity-50 hover:backdrop-blur-lg text-white"
        : "bg-white hover:bg-[rgb(42,20,84)] hover:border-none text-[#2A1454] hover:text-purple-400"
    }`}
              >
                <div className="w-20 h-20 relative transition-transform duration-300 group-hover:scale-125 mb-6">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <span className="text-xl font-bold">{skill.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillSection;
