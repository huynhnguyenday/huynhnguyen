import React from "react";

const ExperienceSection = ({ isDarkMode, isVietMode }) => {
  return (
    <section
      id="experience"
      className={`pt-16 lg:pt-24 pb-24 ${
        isDarkMode ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1
          className={`text-center text-5xl lg:text-6xl mb-6 font-extrabold text-transparent bg-clip-text ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-400 to-white"
              : "bg-gradient-to-r from-purple-400 to-black"
          }`}
        >
          {isVietMode ? "Kinh nghiệm" : "Experience"}
        </h1>
        <p
          className={`text-center text-lg lg:text-2xl max-w-3xl mx-auto ${
            isDarkMode ? "text-white" : "text-[#2A1454]"
          }`}
        >
          {isVietMode
            ? "Hành trình làm việc của tôi với các cột mốc rõ ràng theo từng giai đoạn phát triển."
            : "My work journey with clear milestones through each stage of growth."}
        </p>

        <div className="relative mt-32  min-h-[560px]">
          <div
            className={`absolute left-[30px] md:left-1/2 top-10 -translate-x-1/2 h-[520px] w-[3px] ${
              isDarkMode ? "bg-purple-500/70" : "bg-purple-300"
            }`}
          />

          <div className="absolute left-[30px] md:left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-purple-500 border-4 border-white shadow-[0_0_0_2px_rgba(168,85,247,0.35)]" />
          <div
            className={`absolute left-12 md:left-auto md:right-[52%] top-[18px] -translate-y-1/2 w-[calc(100%-3.5rem)] md:w-[42%] rounded-2xl border p-5 lg:p-6 ${
              isDarkMode
                ? "bg-[rgb(20,12,28)] border-purple-500/40 text-white"
                : "bg-[rgb(246,243,252)] border-purple-200 text-[#2A1454]"
            }`}
          >
            <h3 className="text-xl lg:text-2xl font-bold">
              Ho Chi Minh City University of Economics and FINANCE
            </h3>
            <p className="mt-2 text-base lg:text-lg font-semibold text-purple-400">
              Software Engineering
            </p>
            <p className="mt-2 text-sm lg:text-base opacity-90">2021 - 2025</p>
          </div>

          <div className="absolute left-[30px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-purple-500 border-4 border-white shadow-[0_0_0_2px_rgba(168,85,247,0.35)]" />
          <div
            className={`absolute left-12 md:left-[52%] top-1/2 -translate-y-1/2 w-[calc(100%-3.5rem)] md:w-[42%] rounded-2xl border p-5 lg:p-6 ${
              isDarkMode
                ? "bg-[rgb(20,12,28)] border-purple-500/40 text-white"
                : "bg-[rgb(246,243,252)] border-purple-200 text-[#2A1454]"
            }`}
          >
            <h3 className="text-xl lg:text-2xl font-bold">
              TEKVIZON SOFTWARE CO., LTD
            </h3>
            <p className="mt-2 text-base lg:text-lg font-semibold text-purple-400">
              Fresher FullStack Developer
            </p>
            <p className="mt-2 text-sm lg:text-base opacity-90">
              {isVietMode
                ? "Tháng 3/2025 - Tháng 10/2025"
                : "Mar 2025 - Oct 2025"}
            </p>
          </div>

          <div className="absolute left-[30px] md:left-1/2 top-[calc(100%-20px)] -translate-x-1/2 w-5 h-5 rounded-full bg-purple-500 border-4 border-white shadow-[0_0_0_2px_rgba(168,85,247,0.35)]" />
          <div
            className={`absolute left-12 md:left-auto md:right-[52%] top-[calc(100%-10px)] -translate-y-1/2 w-[calc(100%-3.5rem)] md:w-[42%] rounded-2xl border p-5 lg:p-6 ${
              isDarkMode
                ? "bg-[rgb(20,12,28)] border-purple-500/40 text-white"
                : "bg-[rgb(246,243,252)] border-purple-200 text-[#2A1454]"
            }`}
          >
            <h3 className="text-xl lg:text-2xl font-bold">BYD OWAY AUTO</h3>
            <p className="mt-2 text-base lg:text-lg font-semibold text-purple-400">
              PHP Developer
            </p>
            <p className="mt-2 text-sm lg:text-base opacity-90">
              {isVietMode
                ? "Tháng 10/2025 - Tháng 4/2026"
                : "Oct 2025 - Apr 2026"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
