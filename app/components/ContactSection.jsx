import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import apiService from "../services/apiService";

const ContactSection = ({ isDarkMode, isVietMode }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await apiService.sendContactMessage(formData);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
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
                  {isVietMode ? "Điện thoại" : "Phone"}
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
                  {isVietMode ? "Địa chỉ" : "Address"}
                </p>
                <p
                  className={`text-lg lg:text-xl w-[250px] lg:w-[300px] ${
                    isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
                  }`}
                >
                  {isVietMode
                    ? "Phường Phú Hữu, Tp Thủ Đức."
                    : "Phu Huu Ward, Thu Duc City."}
                </p>
              </div>
            </div>
          </div>

          {/* Phần form nhập thông tin - Mobile nằm dưới, PC nằm trái */}
          <div
            className={`shadow-lg rounded-3xl p-3 w-full md:w-1/2 lg:p-10 mb-14 lg:mb-10 ${
              isDarkMode
                ? "bg-[rgb(29,17,40)] lg:bg-[rgb(20,12,28)]"
                : "bg-white"
            }`}
          >
            <h1
              className={`text-2xl lg:text-5xl lg:text-[45px] lg:h-14 flex justify-center mt-3 mb-3 font-extrabold text-transparent bg-clip-text ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-400 to-white"
                  : "bg-gradient-to-r from-[rgb(135,80,247)] to-[rgb(42,20,84)]"
              }`}
            >
              {isVietMode ? "Liên hệ với tôi nhé!" : "Let’s work together!"}
            </h1>
            <p
              className={`text-lg lg:text-base text-center flex justify-center mb-8  ${
                isDarkMode ? "text-white" : "text-[rgb(20,12,28)]"
              }`}
            >
              {isVietMode
                ? "Tôi thiết kế và viết mã những thứ đơn giản tuyệt đẹp và tôi yêu công việc của mình.Chỉ đơn giản như vậy thôi!"
                : "I design and code beautifully simple things and I love what I do.Just simple like that!"}
            </p>

            <form onSubmit={handleSubmit}>
              {/* Input Name */}
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder={isVietMode ? "Họ tên" : "Name"}
                className={`w-full p-3 border h-14 border-purple-950 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"
                }`}
                required
              />

              {/* Email & Phone - Chia cột trên desktop, xuống hàng trên mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={`w-full p-3 border h-14 mb-2 border-purple-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"
                  }`}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={isVietMode ? "Số điện thoại" : "Phone Number"}
                  className={`w-full p-3 border h-14 border-purple-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"
                  }`}
                  required
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={isVietMode ? "Để lại tin nhắn nhé!" : "Message"}
                className={`w-full p-3 border border-purple-950 rounded-xl mt-4 mb-5 resize-y focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  isDarkMode ? "bg-black" : "bg-[rgb(246,243,252)]"
                }`}
                rows="4"
                required
              ></textarea>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {isVietMode
                    ? "Tin nhắn đã được gửi thành công!"
                    : "Message sent successfully!"}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {isVietMode
                    ? "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại!"
                    : "Error sending message. Please try again!"}
                </div>
              )}

              {/* Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mb-5 px-8 py-[15px] text-base text-white rounded-full transition-all duration-300 font-sora font-bold bg-[linear-gradient(90deg,_rgb(42,20,84)_0%,_rgb(135,80,247)_51%,_rgb(42,20,84)_100%)] bg-[length:300%_100%] bg-right hover:bg-left ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting
                    ? isVietMode
                      ? "Đang gửi..."
                      : "Sending..."
                    : isVietMode
                    ? "Gửi Ngay"
                    : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
