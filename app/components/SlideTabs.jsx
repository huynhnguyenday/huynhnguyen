import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "Introduce" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Works" },
  { id: "contact", label: "Contact" },
];

const SlideTabs = ({ isDarkMode }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activeSection, setActiveSection] = useState(""); // Lưu tab đang active
  const [clickedSection, setClickedSection] = useState(null); // Lưu tab được click
  const tabRefs = useRef({});
  const timeoutRef = useRef(null);

  // Xử lý cuộn tới phần tương ứng
  const handleScroll = (id) => {
    setClickedSection(id); // Đánh dấu tab được click
    setActiveSection(id); // Cập nhật tab active
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Đặt lại timer để quay về tab cũ sau 2 giây nếu không có thao tác mới
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setClickedSection(null); // Xóa trạng thái click để quay về tab active cũ
    }, 500);
  };

  // Theo dõi vị trí scroll và cập nhật active tab
  useEffect(() => {
    const handleScroll = () => {
      if (clickedSection) return; // Nếu đã click, không tự động cập nhật lại

      let currentSection = "";
      let minDistance = window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top < minDistance) {
            minDistance = rect.top;
            currentSection = section.id;
          }
        }
      });

      if (currentSection && tabRefs.current[currentSection]) {
        setActiveSection(currentSection); // Cập nhật section đang active
        const ref = tabRefs.current[currentSection];
        const { width } = ref.getBoundingClientRect();
        setPosition({
          left: ref.offsetLeft,
          width,
          opacity: 1,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Gọi ngay khi load trang để cập nhật vị trí ban đầu

    return () => window.removeEventListener("scroll", handleScroll);
  }, [clickedSection]);

  // Khi rời chuột khỏi tab, đặt lại con trỏ về vị trí của tab đang active
  const handleMouseLeave = () => {
    if (clickedSection) return; // Nếu đã click vào tab, không reset vị trí nữa
    if (activeSection && tabRefs.current[activeSection]) {
      const ref = tabRefs.current[activeSection];
      const { width } = ref.getBoundingClientRect();
      setPosition({
        left: ref.offsetLeft,
        width,
        opacity: 1, // Giữ sáng, không ẩn
      });
    }
  };

  return (
    <ul
      onMouseLeave={handleMouseLeave} // Khi rời chuột, về vị trí tab active
      className={`relative mx-auto flex w-fit rounded-full border-2 
              backdrop-blur-sm p-1 transition-all duration-200
              ${
                isDarkMode
                  ? "bg-black/50 border-gray-500 text-white"
                  : "bg-white/60 border-gray-300 text-black"
              }`}
    >
      {sections.map(({ id, label }) => (
        <Tab
          key={id}
          id={id}
          setPosition={setPosition}
          onClick={() => handleScroll(id)}
          tabRefs={tabRefs}
        >
          {label}
        </Tab>
      ))}

      <Cursor position={position} isDarkMode={isDarkMode} />
    </ul>
  );
};

const Tab = ({ id, children, setPosition, onClick, tabRefs }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      tabRefs.current[id] = ref.current;
    }
  }, [id, tabRefs]);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-2 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position, isDarkMode }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className={`absolute z-0 h-7 rounded-full md:h-10 ${
        isDarkMode ? "bg-white" : "bg-black"
      }`}
    />
  );
};

export default SlideTabs;
