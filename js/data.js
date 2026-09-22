/**
 * DỮ LIỆU CÁ NHÂN (PORTFOLIO DATA)
 * Bạn có thể dễ dàng chỉnh sửa toàn bộ nội dung của website tại file này!
 */

const PORTFOLIO_DATA = {
  // Thông tin cá nhân cơ bản
  personal: {
    name: "Lê Anh Huy",
    nickname: "inshanemode",
    title: "Shopify Technical Support & IT Specialist",
    rotatingTitles: [
      "Shopify Technical Support (Remote)",
      "IT & Technical Specialist",
      "Freelance CMS & E-Commerce",
      "Kỹ sư Công Nghệ Thông Tin",
      "inshanemode"
    ],
    bio: "Mình thuộc hệ thích cái đẹp tối giản và ghét sự cẩu thả. Điểm cộng lớn nhất của mình là mắt nhìn gọn gàng, làm việc tỉ mỉ đến từng pixel và tính tự giác cao khi làm remote. Tập trung làm sao để sản phẩm mượt mà, đúng deadline và người hợp tác cùng cảm thấy yên tâm nhất.",
    avatar: "assets/1.jpg",
    // Danh sách các ảnh xoay vòng tự động cho khung hồ sơ (Bạn có thể thêm/đổi ảnh của mình vào đây)
    avatars: [
      "assets/1.jpg",
      "assets/2.jpg",
      "assets/3.jpg",
      "assets/4.jpg"
    ],
    statusBadge: "Sẵn sàng đón nhận cơ hội mới (Remote)",
    location: "Việt Nam (Hỗ trợ Remote)",
    email: "leanhhuy.dev@gmail.com",
    phone: "0974 784 812",
    resumeUrl: "#",
    yearsOfExperience: "GPA 3.18",
    completedProjects: "DNC Tech",
    happyClients: "Creative Mode"
  },

  // Mạng xã hội & Kênh liên lạc
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/inshanemode",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/huy-le-shane/",
      icon: "linkedin"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/inshanemode/",
      icon: "facebook"
    },
    {
      name: "Email",
      url: "mailto:leanhhuy.dev@gmail.com",
      icon: "mail"
    }
  ],

  // Phần Giới thiệu bản thân (About Me)
  about: {
    greeting: "Chào bạn, mình là Lê Anh Huy (inshanemode)!",
    description: [
      "Mình tốt nghiệp chuyên ngành Công nghệ Thông tin, luôn tìm kiếm niềm vui trong việc hiện thực hoá các ý tưởng độc đáo và biến những dòng code thành trải nghiệm sống động, sáng tạo.",
      "Phương châm sống và làm việc của mình: Luôn tò mò và sáng tạo ra những thứ mình chưa bao giờ làm! Mình không ngại thử sức với những công nghệ mới, những phong cách thiết kế chưa từng có và tạo ra sản phẩm mang đậm dấu ấn cá nhân.",
      "Ngoài thế giới công nghệ, bạn sẽ bắt gặp mình đang đắm chìm trong các tựa game giải trí hấp dẫn hoặc cháy hết mình trong những trận cầu lông đầy năng lượng cùng bạn bè."
    ],
    stats: [
      { number: "GPA 3.18", label: "Đại học Nam Cần Thơ" },
      { number: "100%", label: "Tỉ mỉ từng pixel" },
      { number: "Shopify", label: "Hỗ trợ Kỹ thuật Remote" },
      { number: "E-Commerce", label: "CMS & Giải pháp Bán lẻ" }
    ]
  },

  // Kỹ năng chuyên môn phân theo nhóm (Thực tế & Đúng định hướng)
  skills: [
    {
      category: "UI/UX & Thiết kế Sản phẩm",
      description: "Định hình trải nghiệm người dùng trực quan, thẩm mỹ và tối ưu tương tác",
      items: [
        { name: "Thiết kế UI/UX & Wireframe (Figma)", level: "92%" },
        { name: "Trải nghiệm Người dùng (User Flow)", level: "90%" },
        { name: "Tư duy Thẩm mỹ & Visual Polish", level: "88%" },
        { name: "Chuyển giao Thiết kế (Figma to Web)", level: "82%" },
        { name: "Thiết kế Giao diện Game & Pixel Art", level: "80%" }
      ]
    },
    {
      category: "Business Analysis (BA) & Nghiệp vụ",
      description: "Phân tích bài toán thực tế, làm rõ yêu cầu và thiết kế luồng quy trình",
      items: [
        { name: "Tư duy Logic & Phân tích Bài toán", level: "90%" },
        { name: "Nghiệp vụ E-Commerce & VietQR", level: "88%" },
        { name: "Khảo sát Yêu cầu & Viết User Stories", level: "85%" },
        { name: "Thiết kế Luồng Quy trình (Workflow)", level: "82%" },
        { name: "Tối ưu Vận hành & Hệ thống Nghiệp vụ", level: "80%" }
      ]
    },
    {
      category: "Kỹ thuật & Công cụ Thực thi",
      description: "Nền tảng công nghệ giúp biến ý tưởng thành sản phẩm và phối hợp với Dev",
      items: [
        { name: "Web & E-Commerce (WordPress / Woo)", level: "88%" },
        { name: "Ứng dụng AI & Công cụ Hiện đại", level: "85%" },
        { name: "Git, GitHub & Quản lý Mã nguồn", level: "78%" },
        { name: "Frontend (HTML5, CSS3, Tailwind)", level: "70%" },
        { name: "Lập trình C / C# (Backend cơ bản)", level: "40%" }
      ]
    }
  ],

  // Dự án tiêu biểu thực tế (Real Projects Showcase)
  projects: [
    {
      id: "proj-shane-shop",
      title: "Shane Shop - K-Pop Merch & VietQR Auto-Pay",
      category: "E-Commerce",
      featured: true,
      video: "assets/videos/shane-shop.mp4",
      image: "assets/shane-shop-poster.png",
      description: "Cửa hàng K-Pop trực tuyến trên WordPress 6.9 & WooCommerce. Tích hợp thanh toán VietQR tự động, tối ưu trải nghiệm mua sắm mượt mà.",
      fullDescription: "Hệ thống thương mại điện tử chuyên phân phối album và merchandise K-Pop chính hãng xây dựng trên nền tảng WordPress 6.9 và WooCommerce. Dự án tùy biến giao diện hiện đại với Blocksy & Elementor, tích hợp giải pháp cổng thanh toán VietQR tự động đối soát giao dịch thời gian thực và quản lý đơn hàng tối ưu.",
      tags: ["WordPress 6.9", "WooCommerce", "VietQR Auto-Pay", "Elementor", "PHP"],
      liveDemo: "https://shane.free.nf",
      github: "https://github.com",
      highlights: [
        "Cổng thanh toán mã VietQR tự động quét và xác nhận đơn hàng không cần thao tác thủ công",
        "Giao diện chuẩn responsive tối ưu cho cả máy tính và thiết bị di động",
        "Catalog sản phẩm phong phú với phân loại biến thể đa dạng (Standard, Remix, Limited)"
      ]
    },
    {
      id: "proj-handwriting-ocr",
      title: "Hệ Thống OCR Đơn Học Bổng Bằng YOLO11 & VietOCR",
      category: "AI / Machine Learning",
      featured: true,
      video: "assets/videos/handwriting-ocr.mp4",
      image: "assets/handwriting-ocr-poster.png",
      description: "Pipeline AI nhận dạng chữ viết tay tiếng Việt từ mẫu đơn học bổng. Kết hợp YOLO11 phát hiện trường thông tin và VietOCR trích xuất sang Excel.",
      fullDescription: "Giải pháp chuyển đổi số thông minh cho khâu xét duyệt hồ sơ học bổng. Pipeline kết hợp mô hình YOLO11-nano huấn luyện chuyên biệt để định vị 18 trường thông tin viết tay trên biểu mẫu phức tạp, sau đó đưa qua mạng nơ-ron Transformer VietOCR để chuyển tự động thành văn bản tiếng Việt có dấu với độ chính xác >98%, kết xuất bảng tính Excel chỉ trong vài giây.",
      tags: ["YOLO11", "VietOCR", "PyTorch", "FastAPI", "OpenCV", "React"],
      liveDemo: "#",
      github: "https://github.com",
      highlights: [
        "Nhận diện chính xác chữ viết tay tiếng Việt phức tạp với độ tin cậy đạt >98%",
        "Kiến trúc Backend FastAPI phi đồng bộ xử lý song song nhiều tài liệu cùng lúc",
        "Xuất dữ liệu có cấu trúc định dạng Excel (.xlsx) chuẩn hóa tự động"
      ]
    },
    {
      id: "proj-tower-builder",
      title: "Tower Builder - Game Xây Tháp Vật Lý",
      category: "Game Development",
      featured: true,
      video: "assets/videos/tower-builder.mp4",
      image: "assets/tower-builder-poster.png",
      description: "Tựa game xây tháp vật lý với cơ chế con lắc dao động, hiệu ứng gió ngẫu nhiên, cơ chế cắt gọt khối khi lệch tâm và bảng xếp hạng online Firebase.",
      fullDescription: "Trò chơi được phát triển bằng Python và Pygame với hệ thống vật lý dao động con lắc điều khiển dây cáp thả khối xây dựng. Người chơi cần căn thời gian chuẩn xác tuyệt đối để khối rơi khớp với tầng dưới; nếu lệch, phần rìa sẽ bị cắt gọt khiến tháp ngày càng hẹp lại. Tích hợp hiệu ứng gió đổi chiều ngẫu nhiên từ tầng 4 và hệ thống điểm combo 'PERFECT!' đồng bộ lên Firebase Realtime Database.",
      tags: ["Python 3", "Pygame", "Physics Pendulum", "Firebase DB", "Game Loop"],
      liveDemo: "#",
      github: "https://github.com/inshanemode/game-tower-builder",
      highlights: [
        "Cơ chế vật lý con lắc dao động tự nhiên và hiệu ứng gió ngẫu nhiên đầy thử thách",
        "Thuật toán cắt gọt khối (Slicing Polygon) chính xác theo độ lệch va chạm",
        "Hệ thống Combo Streak và bảng xếp hạng trực tuyến Realtime Leaderboard"
      ]
    },
    {
      id: "proj-farm-tycoon",
      title: "FarmTycoon - Mô Phỏng Nông Trại 2D",
      category: "Game Development",
      featured: true,
      video: "assets/videos/farm-fortune.mp4",
      image: "assets/farm-fortune-poster.png",
      description: "Game quản lý nông trại 2D trên Unity & C#. Chu kỳ phát triển cây trồng đa tầng, chăn nuôi gia súc, hệ thống nhiệm vụ và chợ nông sản sôi động.",
      fullDescription: "Dự án game mô phỏng nông trại đồ họa 2D Pixel Art phát triển bằng Unity Engine và ngôn ngữ C#. Trò chơi cung cấp hệ sinh thái cây trồng phong phú (Bí ngô, Dưa hấu, Lúa mì, Khoai tây, Cà chua) với 3 giai đoạn sinh trưởng trực quan, hệ thống tưới tiêu, chăn nuôi bò sữa/dê, quản lý túi đồ kho bãi và giao thương nông sản tại thị trường chợ thị trấn.",
      tags: ["Unity 2D", "C#", "Tilemap", "FSM State Machine", "Pixel Art"],
      liveDemo: "#",
      github: "https://github.com/inshanemode/farmtycoon",
      highlights: [
        "Hệ thống vòng đời sinh trưởng thực vật 3 giai đoạn (Sprout -> Grow -> Mature)",
        "Hệ thống kinh tế nông trại cân bằng: hạt giống, phân bón, năng lượng và thu hoạch",
        "Đồ họa Pixel Art sinh động kết hợp âm thanh thư giãn đậm chất Indie Game"
      ]
    },
    {
      id: "proj-news-portal",
      title: "NewsPortal - Cổng Tin Tức & AI CMS",
      category: "Fullstack Web",
      featured: true,
      video: "assets/videos/news-portal.mp4",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80",
      description: "Cổng thông tin báo điện tử hiện đại xây dựng trên Next.js 14 App Router, Tailwind CSS, Firebase Auth/Firestore và trợ lý ảo AI tóm tắt nội dung.",
      fullDescription: "Nền tảng xuất bản và truyền thông tin tức kỹ thuật số hiệu năng cao xây dựng bằng Next.js 14 App Router và Server Actions. Tích hợp hệ thống phân quyền biên tập viên CMS, duyệt bài viết động, công cụ tìm kiếm toàn diện và trợ lý AI thông minh tóm tắt nhanh các điểm chính của từng bài báo.",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase", "AI ChatWidget"],
      liveDemo: "#",
      github: "https://github.com",
      highlights: [
        "Kiến trúc Next.js 14 App Router với Server-Side Rendering (SSR) tối ưu SEO vượt trội",
        "Tích hợp trợ lý AI thông minh tự động tóm tắt nội dung bài báo và hỗ trợ độc giả",
        "Bảng điều khiển CMS quản lý bài viết thời gian thực với Firebase Firestore"
      ]
    }
  ],

  // Lộ trình học tập & Quá trình làm việc (Timeline)
  timeline: [
    {
      period: "06/2025 - 08/2026",
      role: "Kỹ Thuật và IT (IT & Technical Specialist)",
      company: "CÔNG TY TNHH GIẢI PHÁP BÁN LẺ SỐ TOT",
      description: "Phụ trách triển khai giải pháp kỹ thuật, bảo trì hệ thống và trực tiếp tham gia phát triển website toàn diện cho doanh nghiệp; làm việc với các đối tác bán lẻ quy mô lớn.",
      achievements: [
        "Lắp đặt, cấu hình và bảo trì các sản phẩm công nghệ do công ty kinh doanh; hỗ trợ kỹ thuật theo khu vực quản lý",
        "Trực tiếp đào tạo (training) cho nhân sự mới sử dụng thành thạo các sản phẩm và giải pháp kinh doanh",
        "Tham gia thiết kế & phát triển website công ty: Kiến trúc giao diện (UI), Cơ sở dữ liệu, Bảo mật và Triển khai (Deploy)",
        "Trực tiếp tham gia thảo luận và phối hợp làm việc với các đối tác lớn: Thiso, Aeon, MWG (Thế Giới Di Động), Minh Tuấn Mobile..."
      ]
    },
    {
      period: "02/2025 - 04/2025",
      role: "Thực tập sinh Phần mềm (Software Engineering Intern)",
      company: "CÔNG TY TNHH CÔNG NGHỆ PHẦN MỀM PHÚC LAM PHƯƠNG",
      description: "Tham gia nghiên cứu và xây dựng hệ thống phần mềm tài chính - ngân hàng trong môi trường doanh nghiệp chuẩn hóa.",
      achievements: [
        "Tham gia thiết kế hệ thống tính tiền / đối soát giao dịch phục vụ các khách hàng ngân hàng",
        "Bước đầu tiếp cận thực tế với mô hình doanh nghiệp, quy trình phát triển phần mềm và kiến trúc hệ thống nghiệp vụ",
        "Tích lũy kinh nghiệm quý báu từ thầy cô và đồng nghiệp trong việc xử lý tình huống và giải quyết các bài toán phát sinh"
      ]
    },
    {
      period: "09/2024 - 01/2025",
      role: "Freelance CMS & E-Commerce Developer",
      company: "Freelance & Dự án Độc lập",
      description: "Tư vấn, thiết kế và triển khai giải pháp website thương mại điện tử trọn gói cho các chủ kinh doanh nhỏ lẻ và người bán hàng cá nhân.",
      achievements: [
        "Hỗ trợ các cá nhân và chủ shop nhỏ xây dựng hoàn chỉnh website bán hàng trực quan, dễ quản lý (Shopify, WordPress, Weebly)",
        "Quản lý toàn diện vòng đời phát triển sản phẩm web: khảo sát yêu cầu, thiết kế luồng quy trình và tối ưu trải nghiệm mua sắm",
        "Đúc kết kinh nghiệm thực tế sâu sắc về các bài toán phát sinh trong quá trình xây dựng website và vận hành của doanh nghiệp nhỏ"
      ]
    },
    {
      period: "2022 - 2026",
      role: "Kỹ sư Công Nghệ Thông Tin (Bachelor of Information Technology)",
      company: "Trường Đại học Nam Cần Thơ - DNC",
      description: "Theo học chuyên ngành Công nghệ Thông tin. Điểm trung bình tích lũy học tập (GPA) xuất sắc đạt 3.18 / 4.0.",
      achievements: [
        "Điểm trung bình tích lũy GPA đạt 3.18 - Nền tảng học thuật vững chắc về Khoa học máy tính, Cấu trúc dữ liệu và Kỹ thuật phần mềm",
        "Thành thạo kỹ năng mềm thiết yếu: Tin học văn phòng, Giao tiếp tốt, Khả năng làm việc nhóm hiệu quả và Quản lý thời gian kỷ luật",
        "Thực hiện thành công các đồ án ứng dụng thực tế: Hệ thống AI OCR đơn học bổng, Farm Tycoon, Tower Builder và Web TMĐT"
      ]
    }
  ],

  // Đánh giá / Cảm nhận từ đồng nghiệp và bạn bè thực tế
  testimonials: [
    {
      quote: "Thằng em chịu khó mà tiếp thu lẹ lắm. Mấy đợt hệ thống POS với thiết bị ở các shop đối tác gặp trục trặc, quẳng việc sang cho Huy là nó tự mày mò xử lý êm ru, không cần anh em phải nhắc lần hai. Gu làm web của nó cũng bén, giao diện vừa gọn gàng vừa dễ xài.",
      author: "Hữu Vinh",
      role: "Senior IT Lead",
      tag: "TOT Retail • IT Support",
      initials: "HV",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    {
      quote: "Làm việc chung khâu đối soát với Huy khỏe ghê. Mấy vụ luồng tiền, lệch số hóa đơn hay cần chỉnh lại báo cáo, mình nói sơ qua là bạn ấy nắm được ý liền. Tính tình dễ thương, hỗ trợ nhiệt tình mà tính toán số liệu lúc nào cũng chuẩn chỉ từng đồng.",
      author: "Lương Ngọc",
      role: "Kế toán / Đối soát",
      tag: "TOT Retail • Kế toán nội bộ",
      initials: "LN",
      gradient: "linear-gradient(135deg, #0d9488, #059669)"
    },
    {
      quote: "Hồi làm đồ án tốt nghiệp chung nhóm, Huy chuyên gia thầu mấy phần khó nhất như làm UI/UX với ráp luồng chức năng. Tính ông này kỹ tính kinh khủng, giao diện lệch một tí hay chức năng bấm chưa mượt là ngồi sửa cho bằng được mới chịu nộp. Nhóm có Huy gánh khoản này khỏe re.",
      author: "Trần Minh Nghĩa",
      role: "Bạn học CNTT / Đồ án",
      tag: "ĐH Nam Cần Thơ • K10 CNTT",
      initials: "MN",
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)"
    },
    {
      quote: "Nó ở sạch lắm má, giờ giấc đúng giờ, nhiều khi 9h ngủ để mai đi làm nữa. Còn về chuyên môn thì thấy nó sửa win với làm giao diện đẹp.",
      author: "Jam Phạm",
      role: "Roommate / Bạn cùng phòng",
      tag: "Bạn cùng phòng • 4 năm ĐH",
      initials: "JP",
      gradient: "linear-gradient(135deg, #f97316, #e11d48)"
    }
  ]
};
