import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GoArrowDownLeft } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineZoomOutMap } from "react-icons/md";

const WorkSection = ({ isDarkMode, isVietMode }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const projects = [
    {
      src: "/image/workbamos.jpeg",
      name: "BamosCoffe",
      type: "web",
      desc: isVietMode
        ? "Website thức uống tiện lợi có trang quản trị."
        : "Convenient water sales website with admin page.",
      descrip1: isVietMode
        ? "Trang web quán cà phê cung cấp trải nghiệm mua sắm hiện đại và tiện lợi với giao diện thanh lịch, thân thiện với người dùng. Khách hàng có thể dễ dàng duyệt sản phẩm với mô tả và giá chi tiết, thêm sản phẩm vào giỏ hàng và thanh toán trực tuyến an toàn. Trang web cũng có tin tức về các chương trình khuyến mãi và sự kiện, định vị cửa hàng với bản đồ tích hợp và theo dõi lịch sử đơn hàng để quản lý chi tiêu tốt hơn."
        : "The coffee shop website provides a modern and convenient shopping experience with an elegant, user-friendly interface. Customers can easily browse products with detailed descriptions and prices, add items to their cart, and securely pay online. The website also features news on promotions and events, store locator with integrated maps, and order history tracking for better spending management.",
      descrip2: isVietMode
        ? "Công cụ quản trị mạnh mẽ cho phép chủ cửa hàng quản lý sản phẩm, tin tức và chương trình khuyến mãi dễ dàng. Công cụ này hỗ trợ theo dõi đơn hàng theo thời gian thực, quản lý khách hàng và phân phối hóa đơn và phiếu giảm giá tự động, tối ưu hóa tiếp thị và nâng cao dịch vụ chăm sóc khách hàng."
        : "The powerful admin tool allows shop owners to manage products, news, and promotions easily. It supports real-time order tracking, customer management, and automated invoice and coupon distribution, optimizing marketing and enhancing customer care.",
      img: [
        "/image/1.png",
        "/image/2.png",
        "/image/3.png",
        "/image/4.png",
        "/image/5.png",
        "/image/6.png",
        "/image/7.png",
        "/image/8.png",
        "/image/9.png",
        "/image/10.png",
        "/image/11.png",
        "/image/12.png",
        "/image/13.png",
        "/image/14.png",
        "/image/15.png",
        "/image/16.png",
        "/image/17.png",
        "/image/18.png",
        "/image/19.png",
        "/image/20.png",
      ],
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
      desc: isVietMode
        ? "App quản lý hóa đơn gas."
        : "Gas bill management app.",
      tech: ["/image/java.svg", "/image/sql.svg"],
      descrip1: isVietMode
        ? "Ứng dụng quản lý khí được thiết kế để hợp lý hóa việc thanh toán và cung cấp thông tin cập nhật theo thời gian thực về giá khí cho Loại 1 và Loại 2. Người dùng có thể dễ dàng quản lý hóa đơn, theo dõi lịch sử thanh toán và khám phá hồ sơ thanh toán chi tiết bằng các tùy chọn tìm kiếm và lọc nâng cao. Ứng dụng đảm bảo cập nhật giá chính xác, giúp người dùng luôn cập nhật về những thay đổi của thị trường."
        : "The gas management app is designed to streamline billing and provide real-time updates on gas prices for Type 1 and Type 2. Users can easily manage invoices, track payment history, and explore detailed billing records using advanced search and filtering options. The app ensures accurate price updates, helping users stay informed about market changes.",
      descrip2: isVietMode
        ? "Ngoài ra, ứng dụng cung cấp các thiết lập linh hoạt cho phép người dùng tùy chỉnh trải nghiệm của họ, bao gồm chuyển đổi hiển thị giá cả và thông tin người dùng, cũng như bật hoặc tắt nhạc nền. Kiểm soát được cá nhân hóa này nâng cao khả năng sử dụng và sự hài lòng của người dùng."
        : "Additionally, the app offers flexible settings that allow users to customize their experience, including toggling the display of prices and user information, as well as enabling or disabling background music. This personalized control enhances usability and user satisfaction.",
      img: [
        "/image/gas1.png",
        "/image/gas2.png",
        "/image/gas3.png",
        "/image/gas4.png",
        "/image/gas5.png",
        "/image/gas6.png",
        "/image/gas7.png",
      ],
      links: [
        {
          icon: "/image/figma.svg",
          url: "https://www.figma.com/design/LEPiW8Lw0VMcqVYKJEPiLL/GasManagement?node-id=3-1319&t=8fomn78iU0YkWjgC-1",
        },
        {
          icon: "/image/github.svg",
          url: "https://github.com/huynhnguyenday/Mobile-application",
        },
      ],
    },
    {
      src: "/image/workdemo.png",
      name: "Process List",
      type: "web",
      desc: isVietMode ? "Website dành cho ghi chú." : "Website for todolist",
      descrip1: isVietMode
        ? "Trang to do list này không chỉ giúp bạn quản lý công việc hiệu quả mà còn là nơi lưu trữ tin nhắn quan trọng. Với khả năng ghi chú tin nhắn thông minh, bạn có thể dễ dàng lưu trữ, xem lại và tìm kiếm tin nhắn theo công việc. Trang web cũng hỗ trợ kéo thả để sắp xếp công việc, xóa công việc không cần thiết và lưu trữ danh sách công việc an toàn. Giao diện thân thiện, trải nghiệm người dùng tuyệt vời và khả năng truy cập mọi nơi là những điểm nổi bật của trang to do list này. Hãy bắt đầu xây dựng trang to do list của bạn ngay hôm nay để quản lý công việc và thông tin một cách hiệu quả!"
        : "This to-do list site not only helps you manage your tasks effectively but also stores important messages. With smart message annotation capabilities, you can easily store, review and search messages by task. The site also supports drag and drop to organize tasks, delete unnecessary tasks and store to-do lists securely. The friendly interface, great user experience and everywhere accessibility are the highlights of this to-do list site. Start building your to-do list site today to manage tasks and information effectively!",
      img: ["/image/workbamos.jpeg", "/image/workbamos.jpeg"],
      tech: ["/image/react.svg", "/image/nextjs.svg"],
      links: [
        { icon: "/image/global.svg", url: "https://process-list.vercel.app/" },
        {
          icon: "/image/github.svg",
          url: "https://github.com/huynhnguyenday/Process-List",
        },
      ],
    },
    {
      src: "/image/workapple2.png",
      name: "iPhone",
      type: "web",
      desc: isVietMode
        ? "Website giới thiệu mẫu điện thoại iPhone sắp được ra mắt."
        : "Landing page about iPhone.",
      descrip1: isVietMode
        ? "Trang web giới thiệu iPhone cung cấp tổng quan toàn diện về các mẫu mới nhất, có thông tin chi tiết về giá cả, thông số kỹ thuật sản phẩm và các bản cập nhật mới nhất từ ​​Apple. Người dùng có thể khám phá nhiều tùy chọn màu sắc và cấu hình có sẵn cho từng phiên bản, đảm bảo họ tìm thấy sự kết hợp hoàn hảo với phong cách và nhu cầu của mình. Trang web cũng giúp khách hàng cập nhật tin tức và cải tiến mới nhất, giúp họ luôn cập nhật các xu hướng công nghệ tiên tiến nhất."
        : "The iPhone introduction website provides a comprehensive overview of the latest models, featuring detailed information on pricing, product specifications, and the newest updates from Apple. Users can explore various color options and configurations available for each version, ensuring they find the perfect match for their style and needs. The site also keeps customers informed about the latest news and innovations, helping them stay up-to-date with the most advanced technology trends.",
      img: [
        "/image/ip1.png",
        "/image/ip2.png",
        "/image/ip3.png",
        "/image/ip4.png",
      ],
      tech: ["/image/html.svg", "/image/css.svg", "/image/bootstrap.svg"],
      links: [
        {
          icon: "/image/github.svg",
          url: "https://github.com/huynhnguyenday/Landingpage",
        },
      ],
    },
  ];

  useEffect(() => {
    if (selectedProject) {
      // Khi Drawer mở
      document.body.style.overflow = "hidden";
    } else {
      // Khi Drawer đóng
      document.body.style.overflow = "auto";
    }

    // Cleanup khi component bị unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <div id="work" className="flex flex-col items-center text-center py-16">
      <h1
        className={`text-5xl lg:text-6xl mb-4 h-24 lg:pt-8 font-extrabold text-transparent bg-clip-text ${
          isDarkMode
            ? "bg-gradient-to-r from-purple-400 to-white"
            : "bg-gradient-to-r from-purple-300 to-purple-900"
        }`}
      >
        {isVietMode ? "Dự án gần đây" : "My Recent Works"}
      </h1>
      <p
        className={`text-lg max-w-xl mb-8 ${
          isDarkMode ? "text-white" : "text-[#2A1454]"
        }`}
      >
        {isVietMode
          ? "Tôi đưa ý tưởng và mong muốn của bạn vào một dự án web độc đáo, truyền cảm hứng cho bạn và khách hàng của bạn."
          : "I put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers."}
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
            <div className="absolute top-3 lg:top-5 left-4 flex space-x-[-5px] z-30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
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
            <div className="absolute top-3 lg:top-5 right-4 flex space-x-[-2px] z-30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
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
            <div
              className="absolute bottom-1 lg:bottom-4 left-3 right-3 lg:left-5 lg:right-5 rounded-2xl bg-gradient-to-r from-[#8750F7] to-[#2A1454] bg-opacity-50 text-white lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 p-3 lg:p-5 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex flex-col items-start">
                <h3 className="text-2xl lg:text-4xl font-semibold font-sora lg:pb-3 text-left">
                  {project.name}
                </h3>
                <p className="text-sm lg:text-base w-60 lg:w-auto font-sora text-left">
                  {project.desc}
                </p>
              </div>
              <GoArrowDownLeft
                className="absolute top-6 lg:top-9 right-3 lg:right-5 text-4xl lg:text-5xl 
                transform transition-transform duration-700 rotate-180 lg:rotate-0 lg:group-hover:rotate-180"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Drawer */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" // Background mờ với hiệu ứng blur
          onClick={() => setSelectedProject(null)} // Đóng khi click bên ngoài
        >
          <div
            className="fixed bottom-0 left-0 right-0 h-[85vh] bg-gray-900 text-white p-6 rounded-t-3xl shadow-lg overflow-y-auto transition-transform duration-500 z-50"
            onClick={(e) => e.stopPropagation()} // Ngăn không cho đóng khi click bên trong
          >
            {/* Đặt absolute để nút luôn ở góc trên bên phải */}
            <button
              className="absolute top-4 right-4 text-3xl lg:text-5xl z-10"
              onClick={() => setSelectedProject(null)}
            >
              <IoClose />
            </button>

            {/* Tên dự án */}
            <h1 className="text-4xl lg:text-6xl font-bold mt-5 lg:mt-4 mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-white">
              {selectedProject.name}
            </h1>

            {/* Nội dung drawer */}
            <div className="flex flex-col items-center gap-6">
              {/* Carousel */}
              <div className="w-full flex justify-center">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1.2}
                  className="lg:max-w-5xl"
                >
                  {selectedProject.img.map((img, idx) => (
                    <SwiperSlide key={idx} className="relative group">
                      <Image
                        src={img}
                        alt={selectedProject.name}
                        width={500}
                        height={300}
                        className="w-full object-cover rounded-lg cursor-pointer"
                        onClick={() => setFullscreenImg(img)}
                      />
                      <div
                        className="absolute bottom-2 lg:top-3 lg:left-3 right-3 h-6 w-6 lg:h-10 lg:w-10 lg:text-2xl text-base flex justify-center items-center bg-gray-700 rounded-full transition-opacity duration-300 cursor-pointer"
                        onClick={() => setFullscreenImg(img)}
                      >
                        <MdOutlineZoomOutMap className="text-white" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Tech Stack và Description */}
              <div className="w-full lg:w-[70%] text-left">
                <h2 className="text-2xl lg:text-4xl font-sora mb-5 font-bold">
                  Technology
                </h2>
                <div className="flex justify-start space-x-4 mb-10 ml-4">
                  {selectedProject.tech.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon}
                      alt="tech-icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ))}
                </div>
                <h2 className="text-2xl lg:text-4xl font-sora mb-8 font-bold">
                  Project Description
                </h2>
                <div className="ml-4">
                  <p className="text-base lg:text-lg font-sora mb-4">
                    {selectedProject.descrip1}
                  </p>
                  <p className="text-base lg:text-lg font-sora mb-4">
                    {selectedProject.descrip2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setFullscreenImg(null)}
        >
          <Image
            src={fullscreenImg}
            alt="Fullscreen"
            width={1200}
            height={900}
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-6 text-4xl text-white"
            onClick={() => setFullscreenImg(null)}
          >
            <IoClose />
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkSection;
