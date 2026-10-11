#
| File | Thương hiệu |Slogan |  
|--------------|-------|------|
|`config.js`|SEVSENCÈS| the art of nature healing | 
|` config1.js` | ARESTRAVEL| MANG ĐẾN CHO BẠN SỰ THOẢI MÁI|  
| `config2.js`| BELLAND |CHẠM VÀO MÂY NGÀN · LẮNG NGHE NÚI RỪNG|  

# thông tin

| | SEVSENCÈS| ARESTRAVEL|BELLAND |
|--------------|-------|------|-------|
| Địa chỉ |Rừng quốc gia bù gia mập| Nha Trang Khánh Hòa| Sapa Lào  |
| Đối tượng khách hàng| người yêu thiên nhiên và đam mê với kiến trúc Việt Nam cổ| người muốn ngắm nhìn và hòa mình với biển khơi | người muốn chinh phục độ cao để ngắm nhìn quan cảnh|
|  Thông tin liên hệ |  0123456789 |  0901 234 567 | 0988 777 666 |

  

# phong cách
  ##  SEVSENCÈS
  
   - Lối kiến trúc tín ngưỡng Việt Nam cổ truyền kết hợp với lối kiến trúc hiện đại

   - Không gian rộng rãi ôm quanh thác nước và bao bọc bởi núi rừng 
  ##  ARESTRAVEL

   - Không gian thoáng mát, thoải mái kết hợp với sự rộng lớn của biển

   - Kiến trúc thân thuộc mang lại cảm giác thoải mái
  ##  BELLAND

   - Không gian mở được bao phủ bởi bầu trời

   - Lối kiến trúc hoài mình với thiên nhiên

     
# phân tích chi tiết kỹ thuật được áp dụng trong các file:
Các file mã nguồn trên không sử dụng bất kỳ thư viện (library) hoặc khung làm việc (framework) bên thứ ba nào (như jQuery, React, Vue, Bootstrap, Tailwind, Lodash, v.v.).

## 1. JavaScript (app.js, config.js, config1.js, config2.js)

#### Thuần mã Vanilla JS (JavaScript ES6+ Native)

- Sử dụng các Web API chuẩn có sẵn của trình duyệt để xử lý logic:

- URLSearchParams: Đọc tham số URL (?theme=...) để chuyển đổi cấu hình/giao diện đa chủ đề.

- IntersectionObserver: Xử lý hiệu ứng xuất hiện (reveal animation) khi cuộn trang thay vì dùng các thư viện cuộn như ScrollMagic hay AOS.

- HTMLDialogElement (showModal(), close()): Điều khiển hộp thoại/modal xem video native của HTML5 (<dialog>).

- Navigator.clipboard: Xử lý sao chép văn bản vào bộ nhớ tạm.

- window.matchMedia('(prefers-reduced-motion: reduce)'): Kiểm tra cài đặt giảm chuyển động của hệ điều hành.

## 2. HTML (index.html, credits.html, credits1.html, credits2.html)

#### Mã HTML5 Chuẩn (Semantic HTML5):

- Tận dụng các thẻ chuẩn HTML5 như `<header>, <main>, <section>, <article>, <footer>, <dialog>, <video>`.

- Font chữ bên ngoài (Google Fonts CDN):

- Nhúng trực tiếp 2 phông chữ từ Google Fonts qua CDN: Be Vietnam Pro và Playfair Display.

## 3. CSS (style.css)

#### Thuần CSS3 (Vanilla CSS):

- Tự viết toàn bộ giao diện bằng các tính năng CSS hiện đại:

- CSS Custom Properties (Variables): Quản lý màu sắc và typography (--ink, --forest, --paper, --serif).

- CSS Grid & Flexbox: Dùng cho bố cục chia cột và dàn trang.

- CSS Transitions & Animations: Tạo hiệu ứng hover và hiệu ứng xuất hiện (.reveal).

- Media Queries: Xử lý Responsive trên thiết bị di động và hỗ trợ prefers-reduced-motion.

# Các tính năng

### 1. Hệ thống Đa giao diện / Đa thương hiệu (Multi-Theme System)

* **Chuyển đổi thương hiệu động qua URL:** Khi người dùng truy cập với tham số `?theme=arestravel` hoặc `?theme=theme2`, hệ thống tự động nạp file cấu hình tương ứng (`config1.js` hoặc `config2.js`).


* **Thay đổi nội dung linh hoạt (Dynamic Data Rendering):** Tự động cập nhật toàn bộ tên thương hiệu, slogan, địa chỉ, số điện thoại, email, link Zalo/Google Maps, bài viết giới thiệu, hình ảnh bìa và liên kết trang Credits tùy thuộc vào theme đang kích hoạt.


---
### 2. Form Đặt phòng & Xử lý Yêu cầu (Booking Form)

* **Ràng buộc ngày tháng thông minh:**
* Tự động giới hạn ngày đến (`arrival`) nhỏ nhất là ngày hôm nay.


* Ngày đi (`departure`) tự động cập nhật mốc tối thiểu là 1 ngày sau ngày đến.


* Tự động kiểm tra tính hợp lệ và hiển thị thông báo lỗi bằng tiếng Việt.




* **Tạo nội dung mẫu & Gửi Email (Mailto Builder):**
* Tổng hợp toàn bộ thông tin người dùng nhập (họ tên, SĐT, email, ngày đến/đi, số khách, nhu cầu, lời nhắn) thành một văn bản yêu cầu hoàn chỉnh.


* Cung cấp nút **"Mở email để gửi yêu cầu"** (`mailto:`) tích hợp mã hóa ký tự (`encodeURIComponent`) để tự điền nội dung vào ứng dụng email mặc định.




* **Sao chép nhanh (Clipboard API):** Nút **"Sao chép nội dung"** cho phép người dùng copy toàn bộ thông tin đặt phòng vào bộ nhớ tạm.



---

### 3. Trình xem Video Điện ảnh (Cinema Video Modal)

* **Trình chiếu dạng Modal:** Sử dụng thẻ `<dialog>` native để phát video giới thiệu dạng toàn màn hình.


* **Tự động mở Video lần đầu (Intro Video):** Nhớ trạng thái qua `sessionStorage`; tự động mở video giới thiệu ở lần đầu người dùng ghé thăm trang.


* **Hiệu ứng kết thúc (Ending Screen):** Khi video phát tới giây thứ 11 hoặc kết thúc, giao diện tự chuyển sang màn hình mờ tối hiển thị thương hiệu và tự đóng lại sau 2.2 giây.


* **Xử lý sự cố phát video (Fallback Handling):** Hỗ trợ nút phát thủ công hoặc thông báo lỗi nếu trình duyệt chặn autoplay hoặc video gặp sự cố nạp.



---

### 4. Hiệu ứng Giao diện & Trải nghiệm Người dùng (UX/UI)

* **Hiệu ứng cuộn xuất hiện (Scroll Reveal Animation):** Sử dụng `IntersectionObserver` để tạo hiệu ứng trượt/hiện mượt mà cho các khối nội dung khi cuộn tới.

* **Hỗ trợ Giảm chuyển động (Accessibility / Prefers Reduced Motion):** Tự động tắt các hiệu ứng cuộn mượt và animation nếu thiết bị người dùng bật chế độ giảm chuyển động.


* **Responsive Design:** Tự động tối ưu giao diện linh hoạt cho cả máy tính và điện thoại di động.
### 5. Cách sử dụng AI 

* **Cung cấp thông tin thương hiệu:** tên SEVSENCÈS, slogan, màu sắc, khách hàng mục tiêu và thông tin liên hệ.

* **Mô tả định hướng thiết kế:** kết hợp kiến trúc Việt Nam cổ truyền với kiến trúc hiện đại, tạo không gian gần gũi thiên nhiên.

* **Yêu cầu xây dựng landing page tham khảo:** dùng Codex để triển khai nội dung và giao diện từ ý tưởng của bạn.
