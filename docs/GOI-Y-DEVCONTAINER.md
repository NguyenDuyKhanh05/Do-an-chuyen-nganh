# Gợi ý cấu hình `devcontainer.json` theo ngôn ngữ

Copy khối JSON phù hợp vào `.devcontainer/devcontainer.json` của repo.

| Nhu cầu | Image | Extension chính | Cổng |
|---|---|---|---|
| Web / Node.js | `javascript-node:1-20-bullseye` | Prettier, ESLint | 3000 |
| Python / AI, ML | `python:1-3.12-bullseye` | Python, Jupyter, Pylance | 8000, 8888 |
| Java | `java:1-21-bullseye` | Extension Pack for Java | 8080 |
| C / C++ | `cpp:1-bullseye` | C/C++, CMake Tools | — |

## Python (AI / Khoa học dữ liệu)
```json
{
  "name": "Python Data & AI",
  "image": "mcr.microsoft.com/devcontainers/python:1-3.12-bullseye",
  "customizations": {
    "vscode": {
      "extensions": ["ms-python.python", "ms-python.vscode-pylance", "ms-toolsai.jupyter"]
    }
  },
  "forwardPorts": [8000, 8888],
  "postCreateCommand": "pip install -r requirements.txt"
}
```
Nếu repo chưa có `requirements.txt`, hãy tạo file trước, hoặc xóa dòng `postCreateCommand`.

## Java (Spring Boot)
```json
{
  "name": "Java 21",
  "image": "mcr.microsoft.com/devcontainers/java:1-21-bullseye",
  "customizations": {
    "vscode": { "extensions": ["vscjava.vscode-java-pack"] }
  },
  "forwardPorts": [8080]
}
```

## C / C++
```json
{
  "name": "C++",
  "image": "mcr.microsoft.com/devcontainers/cpp:1-bullseye",
  "customizations": {
    "vscode": { "extensions": ["ms-vscode.cpptools", "ms-vscode.cmake-tools"] }
  }
}
```

## Thêm công cụ bằng Features
Có thể thêm Docker, Git LFS... mà không cần viết Dockerfile:
```json
"features": {
  "ghcr.io/devcontainers/features/docker-in-docker:2": {},
  "ghcr.io/devcontainers/features/github-cli:1": {}
}
```

## Mẹo
- Danh sách image và feature: https://containers.dev/templates
- Sau khi sửa `devcontainer.json`, chạy **F1 → Codespaces: Rebuild Container**.
- Dùng `"hostRequirements": { "cpus": 2 }` để giới hạn cấu hình tối thiểu.
