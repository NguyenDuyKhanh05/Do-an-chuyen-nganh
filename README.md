# 🚀 Phát Triển Phần Mềm Trên Môi Trường Máy Ảo Với Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/NguyenDuyKhanh05/Do-an-chuyen-nganh?quickstart=1)

---

## 📋 Thông Tin Đồ Án

| Thông tin | Chi tiết |
|---|---|
| **Sinh viên** | Nguyễn Duy Khánh |
| **MSSV** | 23010335 |
| **Giảng viên hướng dẫn** | Nguyễn Lệ Thu |
| **Chủ đề** | Không gian Code và ứng dụng Codespaces |
| **Tên đề tài** | Phát triển phần mềm trên môi trường máy ảo với Codespaces |

---

## 🎯 Mục Tiêu Đề Tài

1. **Tìm hiểu Codespaces** — Nghiên cứu, cấu hình và gợi ý môi trường phát triển phần mềm trên không gian code.
2. **Xây dựng quy trình "Zero-Setup"** — Hướng dẫn sử dụng cho sinh viên ngành Công Nghệ Thông Minh có thể khởi động toàn bộ môi trường phát triển chỉ với **1 cú click chuột**, không cần cài đặt bất kỳ phần mềm nào trên máy tính cá nhân.
3. **Triển khai ứng dụng minh họa** — Thử nghiệm quy trình chạy máy ảo, cấu hình tự động và demo ứng dụng Node.js/Express thực tế trên Codespaces.

---

## ⚡ Hướng Dẫn Sử Dụng Nhanh (Zero-Setup)

> **Yêu cầu:** Tài khoản GitHub (miễn phí).  
> **Không cần cài đặt:** Node.js, npm, Git, hay bất kỳ phần mềm nào trên máy tính cá nhân.

### Bước 1 — Mở Codespace

Nhấn nút **"Open in GitHub Codespaces"** ở đầu trang,  
**hoặc** vào nút **`Code`** → tab **`Codespaces`** → **`Create codespace on main`**.

### Bước 2 — Chờ khởi tạo

GitHub tự động:
- Tạo máy ảo Linux trên đám mây (khoảng 1–2 phút lần đầu)
- Cài đặt Node.js 20 và toàn bộ dependencies (`npm install`)
- Mở VS Code trên trình duyệt

### Bước 3 — Khởi động ứng dụng

Trong Terminal của Codespaces, gõ:

```bash
npm run dev
```

### Bước 4 — Xem kết quả

Trình duyệt tự động mở tab mới hiển thị ứng dụng demo với thông tin thời gian thực về môi trường máy ảo Codespaces.

---

## 🏗️ Cấu Trúc Dự Án

```
Do-an-chuyen-nganh/
├── .devcontainer/
│   └── devcontainer.json     # Cấu hình môi trường Codespaces / Dev Container
├── public/
│   └── index.html            # Giao diện web demo (Vanilla HTML/CSS/JS)
├── .gitignore
├── package.json              # Thông tin dự án & dependencies
├── server.js                 # Backend Express.js
└── README.md
```

---

## 🛠️ Công Nghệ Sử Dụng

| Lớp | Công nghệ |
|---|---|
| **Runtime** | Node.js 20 (Debian Bullseye) |
| **Backend** | Express.js 4.x |
| **Frontend** | HTML5 / CSS3 / Vanilla JS (không dùng framework) |
| **Dev Environment** | GitHub Codespaces + VS Code Web |
| **Container Image** | `mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye` |

---

## 📡 API Endpoints

| Endpoint | Mô tả |
|---|---|
| `GET /` | Trang demo chính |
| `GET /api/system-info` | Thông tin hệ thống & môi trường Codespaces (JSON) |
| `GET /api/health` | Kiểm tra trạng thái server |

### Ví dụ phản hồi `/api/system-info`

```json
{
  "platform": "linux",
  "architecture": "x64",
  "release": "6.1.0-...",
  "hostname": "codespaces-...",
  "totalMemoryMB": 8192,
  "freeMemoryMB": 5120,
  "usedMemoryMB": 3072,
  "memoryUsagePercent": 37,
  "cpuModel": "Intel(R) Xeon(R) ...",
  "cpuCores": 2,
  "nodeVersion": "v20.x.x",
  "isCodespaces": true,
  "codespaceName": "nguyenduykhanh05-do-an-...",
  "serverTime": "15/10/2026, 00:55:00"
}
```

---

## 🔧 Cấu Hình `.devcontainer/devcontainer.json`

```json
{
  "name": "Node.js & GitHub Codespaces Demo",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye",
  "forwardPorts": [3000],
  "portsAttributes": {
    "3000": { "label": "Demo Web App", "onAutoForward": "openBrowser" }
  },
  "postCreateCommand": "npm install",
  "customizations": {
    "vscode": {
      "extensions": ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"]
    }
  }
}
```

**Giải thích các trường chính:**

- `image` — Docker image chứa Node.js 20 được dùng làm nền tảng máy ảo
- `forwardPorts` — Chuyển tiếp cổng 3000 từ container ra trình duyệt
- `onAutoForward: "openBrowser"` — Tự động mở tab trình duyệt khi server khởi động
- `postCreateCommand` — Lệnh chạy tự động sau khi container được tạo
- `extensions` — VS Code extensions được cài sẵn trong môi trường

---

## 📝 Kết Quả Đạt Được

- ✅ Xây dựng thành công môi trường phát triển "Zero-Setup" trên GitHub Codespaces
- ✅ Hướng dẫn cấu hình, cài đặt dễ hiểu, dễ tái sử dụng
- ✅ Ứng dụng Node.js/Express hoạt động hoàn toàn trên môi trường máy ảo đám mây
- ✅ Giao diện demo hiển thị thông tin thời gian thực của máy ảo Codespaces

---

## 📚 Tài Liệu Tham Khảo

- [GitHub Codespaces Documentation](https://docs.github.com/en/codespaces)
- [Dev Containers Specification](https://containers.dev/)
- [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
