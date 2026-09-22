# 🚀 Trang Web Portfolio Cá Nhân (Personal Landing Page)

Chào mừng bạn đến với mã nguồn website Portfolio cá nhân của bạn! Website được thiết kế theo phong cách hiện đại (Modern Tech / Vercel-inspired), tối ưu SEO, hỗ trợ chuyển đổi giao diện Sáng/Tối (Dark/Light mode) và hiển thị hoàn hảo trên mọi thiết bị (máy tính, máy tính bảng, điện thoại).

---

## 📁 Cấu Trúc Thư Mục

```text
personal-portfolio/
├── index.html        # Trang giao diện chính (Semantic HTML5, chuẩn SEO)
├── css/
│   └── style.css     # Toàn bộ hiệu ứng, hệ màu Dark/Light, typography và responsive
├── js/
│   ├── data.js       # 🌟 FILE QUAN TRỌNG NHẤT: Chứa toàn bộ thông tin cá nhân của bạn
│   └── main.js       # Xử lý tương tác: Dark mode, lọc dự án, hiệu ứng gõ chữ, modal xem chi tiết
└── assets/           # Thư mục lưu ảnh đại diện (avatar), ảnh chụp dự án, CV (PDF)
```

---

## ⚡ Cách Xem Trước (Preview Website)

Bạn có thể xem trước trang web theo một trong các cách cực kỳ đơn giản sau:

### Cách 1: Mở trực tiếp bằng trình duyệt (Không cần cài đặt gì)
- Chuột phải vào file `index.html` -> Chọn **Open With (Mở bằng)** -> Chọn Google Chrome, Safari hoặc trình duyệt bạn đang dùng.

### Cách 2: Chạy Local Web Server
Mở Terminal trong thư mục này và chạy lệnh:
```bash
# Sử dụng Python có sẵn trên máy Mac:
python3 -m http.server 8080
```
Sau đó mở trình duyệt truy cập: `http://localhost:8080`

---

## ✍️ Hướng Dẫn Tùy Chỉnh Thông Tin Của Bạn

Toàn bộ dữ liệu hiển thị trên website được cấu hình tập trung trong file:
**`js/data.js`**

Bạn chỉ cần mở file `js/data.js` lên và chỉnh sửa các mục:
1. **`personal`**: Thay đổi họ tên, chức danh, bio ngắn, ảnh đại diện, email, số điện thoại, link tải CV.
2. **`rotatingTitles`**: Danh sách các chức danh hiển thị hiệu ứng gõ máy chữ ở đầu trang.
3. **`skills`**: Thêm/bớt các kỹ năng theo nhóm (Frontend, Backend, DevOps, Tools...) và % mức độ thành thạo.
4. **`projects`**: Danh sách dự án của bạn (Tên, mô tả, công nghệ sử dụng, link Live Demo, link GitHub, hình ảnh chụp giao diện).
5. **`timeline`**: Lộ trình học vấn và kinh nghiệm làm việc qua các năm.
6. **`testimonials`**: Đánh giá, nhận xét từ đồng nghiệp hoặc khách hàng.

---

## 🌐 Hướng Dẫn Đưa Lên Mạng (Deploy) Hoàn Toàn Miễn Phí

### 1. Đưa lên GitHub Pages:
1. Tạo một repository mới trên GitHub (ví dụ: `my-portfolio` hoặc `username.github.io`).
2. Push toàn bộ mã nguồn này lên nhánh `main`.
3. Vào **Settings** của repository -> Chọn mục **Pages** -> Tại *Source*, chọn nhánh `main` và thư mục `/ (root)` -> Bấm **Save**.
4. Website của bạn sẽ hoạt động trực tiếp sau 1 phút!

### 2. Đưa lên Vercel hoặc Netlify:
- Đăng nhập vào [vercel.com](https://vercel.com) hoặc [netlify.com](https://netlify.com).
- Kéo thả trực tiếp thư mục `personal-portfolio` này vào trang dashboard, website sẽ được cấp tên miền miễn phí (ví dụ `yourname.vercel.app`) ngay lập tức!
