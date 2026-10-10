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

   - 
# phân tích chi tiết kỹ thuật được áp dụng trong các file:
Các file mã nguồn trên không sử dụng bất kỳ thư viện (library) hoặc khung làm việc (framework) bên thứ ba nào (như jQuery, React, Vue, Bootstrap, Tailwind, Lodash, v.v.).

## 1. JavaScript (app.js, config.js, config1.js, config2.js)

### Thuần mã Vanilla JS (JavaScript ES6+ Native)

Sử dụng các Web API chuẩn có sẵn của trình duyệt để xử lý logic:

URLSearchParams: Đọc tham số URL (?theme=...) để chuyển đổi cấu hình/giao diện đa chủ đề.

IntersectionObserver: Xử lý hiệu ứng xuất hiện (reveal animation) khi cuộn trang thay vì dùng các thư viện cuộn như ScrollMagic hay AOS.

HTMLDialogElement (showModal(), close()): Điều khiển hộp thoại/modal xem video native của HTML5 (<dialog>).

Navigator.clipboard: Xử lý sao chép văn bản vào bộ nhớ tạm.

window.matchMedia('(prefers-reduced-motion: reduce)'): Kiểm tra cài đặt giảm chuyển động của hệ điều hành.
