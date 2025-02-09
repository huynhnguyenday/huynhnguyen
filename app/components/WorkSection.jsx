import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    src: "/image/1.png",
    name: "BamosCoffe",
    type: "web",
    desc: "Website for coffee",
  },
  {
    src: "/image/2.png",
    name: "GasManagement",
    type: "mobile",
    desc: "App Java mobile",
  },
  {
    src: "/image/3.png",
    name: "Todolist",
    type: "web",
    desc: "Website for todolist",
  },
  {
    src: "/image/4.png",
    name: "Landingpage",
    type: "web",
    desc: "Website for landing page",
  },
];

const WorkSection = ({isDarkMode}) => {
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
        className={` text-lg max-w-xl mb-8 ${
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
            <div className="relative w-[90%]  pt-8 flex items-end overflow-hidden">
              <Image
                src={project.src}
                alt={project.name}
                width={500}
                height={300}
                className=" lg:w-[550px] lg:h-[460px] transition-transform duration-300 "
              />
            </div>
            {/* Overlay */}
            <div className="absolute bottom-3 left-3 right-3 lg:left-5 lg:right-5 rounded-2xl bg-gradient-to-r from-[#8750F7] to-[#2A1454] bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl lg:text-4xl font-semibold font-sora pb-3 pt-5 pl-5 flex text-start">
                {project.name}
              </h3>
              <p className="text-sm lg:text-base font-sora pb-5 pl-5 flex text-start">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
