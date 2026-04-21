import fs from "node:fs";
import path from "node:path";
import { MongoClient } from "mongodb";

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) return;
  const raw = fs.readFileSync(envPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

const skills = [
  { src: "/image/Tailwind.png", name: "Tailwind" },
  { src: "/image/js.png", name: "JavaScript" },
  { src: "/image/react.png", name: "React" },
  { src: "/image/Node.png", name: "Node.js" },
  { src: "/image/CSS3.png", name: "CSS3" },
  { src: "/image/HTML5.png", name: "HTML5" },
  { src: "/image/bootstrap.png", name: "Bootstrap" },
  { src: "/image/Java.png", name: "Java" },
  { src: "/image/Sql.png", name: "SQL" },
  { src: "/image/MongoDB.png", name: "MongoDB" },
  { src: "/image/figma.png", name: "Figma" },
];

const projects = [
  {
    src: "/image/workbamos.jpeg",
    name: "BamosCoffe",
    type: "web",
    descVi: "Website thức uống tiện lợi có trang quản trị.",
    descEn: "Convenient water sales website with admin page.",
    descrip1Vi:
      "Trang web quán cà phê cung cấp trải nghiệm mua sắm hiện đại và tiện lợi với giao diện thanh lịch, thân thiện với người dùng. Khách hàng có thể dễ dàng duyệt sản phẩm với mô tả và giá chi tiết, thêm sản phẩm vào giỏ hàng và thanh toán trực tuyến an toàn. Trang web cũng có tin tức về các chương trình khuyến mãi và sự kiện, định vị cửa hàng với bản đồ tích hợp và theo dõi lịch sử đơn hàng để quản lý chi tiêu tốt hơn.",
    descrip1En:
      "The coffee shop website provides a modern and convenient shopping experience with an elegant, user-friendly interface. Customers can easily browse products with detailed descriptions and prices, add items to their cart, and securely pay online. The website also features news on promotions and events, store locator with integrated maps, and order history tracking for better spending management.",
    descrip2Vi:
      "Công cụ quản trị mạnh mẽ cho phép chủ cửa hàng quản lý sản phẩm, tin tức và chương trình khuyến mãi dễ dàng. Công cụ này hỗ trợ theo dõi đơn hàng theo thời gian thực, quản lý khách hàng và phân phối hóa đơn và phiếu giảm giá tự động, tối ưu hóa tiếp thị và nâng cao dịch vụ chăm sóc khách hàng.",
    descrip2En:
      "The powerful admin tool allows shop owners to manage products, news, and promotions easily. It supports real-time order tracking, customer management, and automated invoice and coupon distribution, optimizing marketing and enhancing customer care.",
    img: Array.from({ length: 20 }, (_, i) => `/image/${i + 1}.png`),
    tech: [
      "/image/react.svg",
      "/image/node.svg",
      "/image/tailwind.svg",
      "/image/mongo.svg",
    ],
    links: [
      { icon: "/image/global.svg", url: "https://bamoscoffee.vercel.app/" },
      {
        icon: "/image/github.svg",
        url: "https://github.com/huynhnguyenday/WebBamosCoffee",
      },
    ],
  },
  {
    src: "/image/weather.png",
    name: "Skycloud",
    type: "web",
    descVi: "Website dự báo thời tiết.",
    descEn: "Weather forecast website.",
    descrip1Vi:
      "Skycloud là trang web giúp bạn cập nhật nhanh chóng và chính xác tình hình thời tiết ở bất kỳ đâu. Với giao diện thân thiện, hiển thị trực quan và phù hợp với mọi loại thiết bị , bạn có thể dễ dàng theo dõi nhiệt độ, độ ẩm, tốc độ gió, lượng mưa và dự báo theo giờ hoặc theo ngày. Dữ liệu được cập nhật liên tục từ nguồn tin cậy, giúp bạn chủ động lên kế hoạch cho công việc, học tập hay du lịch một cách thuận tiện nhất.",
    descrip1En:
      "Skycloud is a website that helps you update the weather quickly and accurately anywhere. With a friendly interface, intuitive display and suitable for all types of devices, you can easily track temperature, humidity, wind speed, rainfall and forecast by hour or by day. Data is constantly updated from reliable sources, helping you proactively plan your work, study or travel in the most convenient way.",
    descrip2Vi: "",
    descrip2En: "",
    img: ["/image/weather.png", "/image/weatherphone.png", "/image/weatheripad.png"],
    tech: ["/image/react.svg", "/image/tailwind.svg"],
    links: [
      { icon: "/image/global.svg", url: "https://skycloud.vercel.app/" },
      {
        icon: "/image/github.svg",
        url: "https://github.com/huynhnguyenday/sky-cloude",
      },
    ],
  },
  {
    src: "/image/workgas.png",
    name: "GasManagement",
    type: "mobile",
    descVi: "App quản lý hóa đơn gas.",
    descEn: "Gas bill management app.",
    descrip1Vi:
      "Ứng dụng quản lý khí được thiết kế để hợp lý hóa việc thanh toán và cung cấp thông tin cập nhật theo thời gian thực về giá khí cho Loại 1 và Loại 2. Người dùng có thể dễ dàng quản lý hóa đơn, theo dõi lịch sử thanh toán và khám phá hồ sơ thanh toán chi tiết bằng các tùy chọn tìm kiếm và lọc nâng cao. Ứng dụng đảm bảo cập nhật giá chính xác, giúp người dùng luôn cập nhật về những thay đổi của thị trường.",
    descrip1En:
      "The gas management app is designed to streamline billing and provide real-time updates on gas prices for Type 1 and Type 2. Users can easily manage invoices, track payment history, and explore detailed billing records using advanced search and filtering options. The app ensures accurate price updates, helping users stay informed about market changes.",
    descrip2Vi:
      "Ngoài ra, ứng dụng cung cấp các thiết lập linh hoạt cho phép người dùng tùy chỉnh trải nghiệm của họ, bao gồm chuyển đổi hiển thị giá cả và thông tin người dùng, cũng như bật hoặc tắt nhạc nền. Kiểm soát được cá nhân hóa này nâng cao khả năng sử dụng và sự hài lòng của người dùng.",
    descrip2En:
      "Additionally, the app offers flexible settings that allow users to customize their experience, including toggling the display of prices and user information, as well as enabling or disabling background music. This personalized control enhances usability and user satisfaction.",
    img: [
      "/image/gas1.png",
      "/image/gas2.png",
      "/image/gas3.png",
      "/image/gas4.png",
      "/image/gas5.png",
      "/image/gas6.png",
      "/image/gas7.png",
    ],
    tech: ["/image/java.svg", "/image/sql.svg"],
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
    src: "/image/worktodo.png",
    name: "Process List",
    type: "web",
    descVi: "Website dành cho ghi chú.",
    descEn: "Website for todolist",
    descrip1Vi:
      "Trang to do list này không chỉ giúp bạn quản lý công việc hiệu quả mà còn là nơi lưu trữ tin nhắn quan trọng. Với khả năng ghi chú tin nhắn thông minh, bạn có thể dễ dàng lưu trữ, xem lại và tìm kiếm tin nhắn theo công việc. Trang web cũng hỗ trợ kéo thả để sắp xếp công việc, xóa công việc không cần thiết và lưu trữ danh sách công việc an toàn. Giao diện thân thiện, trải nghiệm người dùng tuyệt vời và khả năng truy cập mọi nơi là những điểm nổi bật của trang to do list này. Hãy bắt đầu xây dựng trang to do list của bạn ngay hôm nay để quản lý công việc và thông tin một cách hiệu quả!",
    descrip1En:
      "This to-do list site not only helps you manage your tasks effectively but also stores important messages. With smart message annotation capabilities, you can easily store, review and search messages by task. The site also supports drag and drop to organize tasks, delete unnecessary tasks and store to-do lists securely. The friendly interface, great user experience and everywhere accessibility are the highlights of this to-do list site. Start building your to-do list site today to manage tasks and information effectively!",
    descrip2Vi: "",
    descrip2En: "",
    img: ["/image/worktodo2.png", "/image/worktodo3.png"],
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
    descVi: "Website giới thiệu mẫu điện thoại iPhone sắp được ra mắt.",
    descEn: "Landing page about iPhone.",
    descrip1Vi:
      "Trang web giới thiệu iPhone cung cấp tổng quan toàn diện về các mẫu mới nhất, có thông tin chi tiết về giá cả, thông số kỹ thuật sản phẩm và các bản cập nhật mới nhất từ Apple. Người dùng có thể khám phá nhiều tùy chọn màu sắc và cấu hình có sẵn cho từng phiên bản, đảm bảo họ tìm thấy sự kết hợp hoàn hảo với phong cách và nhu cầu của mình. Trang web cũng giúp khách hàng cập nhật tin tức và cải tiến mới nhất, giúp họ luôn cập nhật các xu hướng công nghệ tiên tiến nhất.",
    descrip1En:
      "The iPhone introduction website provides a comprehensive overview of the latest models, featuring detailed information on pricing, product specifications, and the newest updates from Apple. Users can explore various color options and configurations available for each version, ensuring they find the perfect match for their style and needs. The site also keeps customers informed about the latest news and innovations, helping them stay up-to-date with the most advanced technology trends.",
    descrip2Vi: "",
    descrip2En: "",
    img: ["/image/ip1.png", "/image/ip2.png", "/image/ip3.png", "/image/ip4.png"],
    tech: ["/image/html.svg", "/image/css.svg", "/image/bootstrap.svg"],
    links: [
      {
        icon: "/image/github.svg",
        url: "https://github.com/huynhnguyenday/Landingpage",
      },
    ],
  },
];

async function run() {
  loadEnvLocal();

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB_NAME || "portfolio";
  if (!uri) {
    throw new Error("Thiếu MONGODB_URI trong .env.local");
  }
  if (uri.includes("<username>") || uri.includes("<password>")) {
    throw new Error("MONGODB_URI vẫn là placeholder. Hãy điền chuỗi Mongo thật.");
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  const now = new Date();
  const skillDocs = skills.map((item, index) => ({
    ...item,
    order: index,
    createdAt: now,
    updatedAt: now,
  }));
  const projectDocs = projects.map((item, index) => ({
    ...item,
    order: index,
    createdAt: now,
    updatedAt: now,
  }));

  await db.collection("skills").deleteMany({});
  await db.collection("projects").deleteMany({});
  const skillResult = await db.collection("skills").insertMany(skillDocs);
  const projectResult = await db.collection("projects").insertMany(projectDocs);

  console.log(`Seed xong skills: ${skillResult.insertedCount}`);
  console.log(`Seed xong projects: ${projectResult.insertedCount}`);
  await client.close();
}

run().catch((error) => {
  console.error("Seed thất bại:", error.message);
  process.exit(1);
});
