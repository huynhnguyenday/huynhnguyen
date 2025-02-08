import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

const ContactSection = ({isDarkMode}) => {
  return (
    <div
      id="contact"
      className={`${isDarkMode ? "bg-transparent" : "bg-[rgb(246,243,252)]"}`}
    >
      <div className="max-w-7xl mx-auto p-6 lg:py-24">
        {/* Container tổng - Form bên trái, thông tin bên phải trên PC, ngược lại trên mobile */}
        <div className="flex flex-col md:flex-row-reverse items-start gap-8">
          {/* Phần thông tin liên hệ - Mobile nằm trên, PC nằm phải */}
          <div className="bg-transparent rounded-lg pt-10 lg:p-6 w-full md:w-1/2 lg:pl-28 lg:pt-28">
            {/* Phone */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center justify-center rounded-full h-12 w-12 bg-gradient-to-r from-[#8750F7] to-[#2A1454]">
                <FiPhoneCall className="text-white text-2xl" />
              </div>
              <div>
                <p
                  className={`text-base font-sora pb-2 ${
                    isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
                  }`}
                >
                  Phone
                </p>
                <p
                  className={`text-lg lg:text-xl font-sora ${
                    isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
                  }`}
                >
                  0907 767 360
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center justify-center rounded-full h-12 w-12 bg-gradient-to-r from-[#8750F7] to-[#2A1454]">
                <IoMailOutline className="text-white text-2xl" />
              </div>
              <div>
                <p
                  className={`text-base font-sora pb-2 ${
                    isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
                  }`}
                >
                  Email
                </p>
                <p
                  className={`text-lg lg:text-xl font-sora w-[100px] lg:w-[300px] ${
                    isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
                  }`}
                >
                  huynhbutforwork@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center justify-center rounded-full h-12 w-12 bg-gradient-to-r from-[#8750F7] to-[#2A1454]">
                <IoLocationOutline className="text-white text-2xl" />
              </div>
              <div>
                <p
                  className={`text-base font-sora pb-2 ${
                    isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
                  }`}
                >
                  Address
                </p>
                <p
                  className={`text-lg lg:text-xl font-sora w-[250px] lg:w-[300px] ${
                    isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
                  }`}
                >
                  26b Đường 882 Phú Hữu, TP Thủ Đức, TP Hồ Chí Minh.
                </p>
              </div>
            </div>
          </div>

          {/* Phần form nhập thông tin - Mobile nằm dưới, PC nằm trái */}
          <div
            className={`shadow-lg rounded-3xl p-3 w-full md:w-1/2 lg:p-10 mb-14 lg: mb-10 ${
              isDarkMode ? "bg-[rgb(20,12,28)]" : "bg-white"
            }`}
          >
            <h1
              className={`text-2xl lg:text-5xl lg:text-[45px] lg:h-14 flex justify-center mt-3 mb-3 font-extrabold text-transparent bg-clip-text ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-400 to-white"
                  : "bg-gradient-to-r from-[rgb(135,80,247)] to-[rgb(42,20,84)]"
              }`}
            >
              Let’s work together!
            </h1>
            <p
              className={`text-lg lg:text-base text-center flex justify-center mb-8  ${
                isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
              }`}
            >
              I design and code beautifully simple things and I love what I do.
              Just simple like that!
            </p>

            {/* Input Name */}
            <input
              type="text"
              placeholder="Name"
              className={`w-full p-3 border h-14 border-purple-950 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"
              }`}
            />

            {/* Email & Phone - Chia cột trên desktop, xuống hàng trên mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full p-3 border h-14 mb-2 border-purple-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"
                }`}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={`w-full p-3 border h-14 border-purple-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"
                }`}
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className={`w-full p-3 border border-purple-950 rounded-xl mt-4 mb-5 resize-y focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"
              }`}
              rows="4"
            ></textarea>

            {/* Button */}
            <div className="flex justify-center">
              <button className="mb-5 px-8 py-[15px] text-base text-white rounded-full transition-all duration-300 font-sora font-bold bg-[linear-gradient(90deg,_rgb(42,20,84)_0%,_rgb(135,80,247)_51%,_rgb(42,20,84)_100%)] bg-[length:300%_100%] bg-right hover:bg-left">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
