# Quy trình sử dụng GitHub Codespaces cho sinh viên

Áp dụng cho sinh viên ngành Công nghệ thông minh. Chỉ cần tài khoản GitHub và trình duyệt.

## 1. Chuẩn bị (làm một lần)
1. Tạo tài khoản GitHub, bật xác thực 2 lớp (2FA).
2. Đăng ký **GitHub Student Developer Pack** tại https://education.github.com/pack để có thêm hạn mức Codespaces.
3. Vào *Settings → Codespaces* và đặt **Default idle timeout = 30 phút**. Nhờ vậy máy ảo tự dừng, đỡ tốn giờ.

## 2. Vòng đời một Codespace
| Bước | Thao tác | Ghi chú |
|---|---|---|
| Tạo | Nút **Code → Codespaces → Create codespace on main**, hoặc nút "Open in Codespaces" trong README | Lần đầu mất 1–2 phút |
| Làm việc | Sửa code, chạy `npm run dev` trong Terminal | Cổng 3000 tự mở trong trình duyệt |
| Lưu | `git add . && git commit -m "mô tả" && git push` | **Luôn push cuối buổi** |
| Dừng | Nhấp tên Codespace (góc dưới trái) → **Stop Current Codespace** | Dừng thì không tính giờ chạy, nhưng vẫn tính dung lượng lưu trữ |
| Mở lại | https://github.com/codespaces → chọn Codespace | Dữ liệu vẫn còn |
| Xóa | https://github.com/codespaces → **⋯ → Delete** | Xóa khi xong bài. Codespace không dùng sẽ bị xóa sau 30 ngày |

## 3. Quy tắc chung
- Mỗi bài tập dùng một repo riêng, có sẵn thư mục `.devcontainer/`.
- Không commit mật khẩu hoặc khóa API. Dùng *Settings → Codespaces → Secrets* hoặc file `.env` (đã nằm trong `.gitignore`).
- Cổng chuyển tiếp mặc định là **Private**. Chỉ chuyển sang Public khi cần chia sẻ, và đổi lại sau khi xong.
- Chỉ tạo tối đa 1–2 Codespace cùng lúc.
- Chọn máy **2-core** cho bài tập thường, chỉ dùng máy lớn hơn khi thật sự cần.

## 4. Hạn mức miễn phí (kiểm tra lại tại docs.github.com/billing)
- Tài khoản cá nhân miễn phí: khoảng **120 core-giờ và 15 GB lưu trữ mỗi tháng**. Máy 2-core dùng được khoảng 60 giờ.
- Gói Student/Pro: khoảng 180 core-giờ mỗi tháng (tương đương 90 giờ máy 2-core).
- Xem mức đã dùng tại *Settings → Billing and plans*.

## 5. Xử lý lỗi thường gặp
| Hiện tượng | Cách xử lý |
|---|---|
| `npm: command not found` | Image chưa đúng. Kiểm tra `.devcontainer/devcontainer.json`, rồi chạy *F1 → Codespaces: Rebuild Container* |
| Cổng 3000 không mở | Mở tab **Ports** → bấm biểu tượng quả địa cầu. Kiểm tra server đã chạy chưa |
| `EADDRINUSE` | Cổng đang bị chiếm. Chạy `npx kill-port 3000` hoặc `PORT=3001 npm run dev` |
| Codespace chạy chậm hoặc hết RAM | Đổi cấu hình máy ở *Codespaces → ⋯ → Change machine type* |
| Hết hạn mức | Stop và xóa Codespace cũ, chờ sang tháng mới, hoặc dùng Student Pack |
| Mất file | Chưa push mà đã xóa Codespace thì không khôi phục được. Hãy push thường xuyên |

## 6. Mẫu cấu hình theo ngôn ngữ
Xem [GOI-Y-DEVCONTAINER.md](GOI-Y-DEVCONTAINER.md).
