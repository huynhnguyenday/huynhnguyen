import React, { useState } from "react";
import Image from "next/image";
import { GoArrowDownLeft } from "react-icons/go";

const projects = [
  {
    src: "/image/workbamos.jpeg",
    name: "BamosCoffe",
    type: "web",
    desc: "Convenient water sales website with admin page.",
    tech: [
      "/image/react.svg",
      "/image/node.svg",
      "/image/tailwind.svg",
      "/image/mongo.svg",
    ],
    links: [
      {
        icon: "/image/github.svg",
        url: "https://github.com/huynhnguyenday/WebBamosCoffee",
      },
    ],
  },
  {
    src: "/image/workgas.png",
    name: "GasManagement",
    type: "mobile",
    desc: "Gas bill management app.",
    tech: ["/image/java.svg", "/image/sql.svg"],
    links: [
      {
        icon: "/image/github.svg",
        url: "https://github.com/huynhnguyenday/Mobile-application",
      },
    ],
  },
  {
    src: "/image/3.png",
    name: "Todolist",
    type: "web",
    desc: "Website for todolist",
    tech: [
      "/image/react.svg",
      "/image/nextjs.svg",
      "/image/node.svg",
      "/image/mongo.svg",
    ],
    links: [
      { icon: "/image/global.svg", url: "https://your-todolist-website.com" },
      {
        icon: "/image/github.svg",
        url: "https://github.com/your-todolist-repo",
      },
    ],
  },
  {
    src: "/image/workapple2.png",
    name: "Apple",
    type: "web",
    desc: "Landing page about iPhone.",
    tech: ["/image/html.svg", "/image/css.svg", "/image/bootstrap.svg"],
    links: [
      {
        icon: "/image/github.svg",
        url: "https://github.com/huynhnguyenday/Landingpage",
      },
    ],
  },
];

const WorkSection = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <div id="work" className="flex flex-col items-center text-center py-16">
      <h1
        className={`text-5xl lg:text-6xl mb-4 lg:pt-8 font-extrabold text-transparent bg-clip-text ${
          isDarkMode
            ? "bg-gradient-to-r from-purple-400 to-white"
            : "bg-gradient-to-r from-purple-300 to-purple-900"
        }`}
      >
        My Recent Works
      </h1>
      <p
        className={`text-lg max-w-xl mb-8 ${
          isDarkMode ? "text-white" : "text-[#2A1454]"
        }`}
      >
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </p>

      {/* Tabs */}
      <div className="flex space-x-4 mb-10">
        {["all", "web", "mobile"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
              activeTab === tab
                ? "bg-[rgb(29,17,40)] text-white"
                : "bg-gray-200 text-[#2A1454]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 gap-10 w-full max-w-7xl">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative group w-full lg:h-[500px] flex items-end justify-center bg-[rgb(29,17,40)] rounded-2xl overflow-hidden"
          >
            {/* Tech Icons (Góc trên) */}
            <div className="absolute top-3 lg:top-5 left-4 flex space-x-[-5px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.tech.map((icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-[#2A1454] rounded-full border border-purple-900"
                >
                  <Image src={icon} alt="tech-icon" width={24} height={24} />
                </div>
              ))}
            </div>

            {/* Links Icons (Góc trên bên phải) */}
            <div className="absolute top-3 lg:top-5 right-4 flex space-x-[-2px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-[#2A1454] rounded-full border border-purple-900 hover:bg-purple-800 transition-all duration-300">
                    <Image
                      src={link.icon}
                      alt="link-icon"
                      width={24}
                      height={24}
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className="relative w-[90%] pt-8 flex items-end overflow-hidden">
              <Image
                src={project.src}
                alt={project.name}
                width={500}
                height={300}
                className="lg:w-[550px] lg:h-[460px] transition-transform duration-300"
              />
            </div>

            {/* Overlay */}
            <div className="absolute bottom-1 lg:bottom-4 left-3 right-3 lg:left-5 lg:right-5 rounded-2xl bg-gradient-to-r from-[#8750F7] to-[#2A1454] bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 lg:p-5">
              <div className="flex flex-col items-start">
                <h3 className="text-2xl lg:text-4xl font-semibold font-sora lg:pb-3 text-left">
                  {project.name}
                </h3>
                <p className="text-sm lg:text-base w-60 lg:w-auto font-sora text-left">
                  {project.desc}
                </p>
              </div>
              <GoArrowDownLeft
                className="absolute top-4 lg:top-9 right-3 lg:right-5 text-3xl lg:text-5xl 
             transform transition-transform duration-700 
             rotate-0 group-hover:rotate-180"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
