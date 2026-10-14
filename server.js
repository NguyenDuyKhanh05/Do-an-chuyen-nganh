const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ─────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// ─── Helper ─────────────────────────────────────────────────────────────────
const toMB = (bytes) => Math.round(bytes / (1024 * 1024));
const toGB = (bytes) => (bytes / (1024 ** 3)).toFixed(2);

// ─── API: Thông tin hệ thống / môi trường ảo ────────────────────────────────
app.get('/api/system-info', (req, res) => {
  const cpus = os.cpus();
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;

  res.json({
    // Thông tin hệ điều hành
    platform: os.platform(),           // linux / win32 / darwin
    release: os.release(),             // Phiên bản kernel
    architecture: os.arch(),           // x64 / arm64 ...
    hostname: os.hostname(),           // Tên máy chủ container

    // RAM
    totalMemoryMB: toMB(totalMem),
    freeMemoryMB: toMB(freeMem),
    usedMemoryMB: toMB(usedMem),
    memoryUsagePercent: Math.round((usedMem / totalMem) * 100),
    totalMemoryGB: toGB(totalMem),

    // CPU
    cpuModel: cpus.length > 0 ? cpus[0].model.trim() : 'Unknown',
    cpuCores: cpus.length,
    cpuSpeedMHz: cpus.length > 0 ? cpus[0].speed : 0,

    // Uptime
    systemUptimeHours: (os.uptime() / 3600).toFixed(2),
    processUptimeSec: process.uptime().toFixed(1),

    // Node.js
    nodeVersion: process.version,
    v8Version: process.versions.v8,

    // Codespaces detection
    isCodespaces: !!process.env.CODESPACE_NAME,
    codespaceName: process.env.CODESPACE_NAME || null,
    codespaceRepository: process.env.GITHUB_REPOSITORY || null,

    // Timestamp
    serverTime: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
    timestamp: new Date().toISOString(),
  });
});

// ─── API: Health check ───────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: `${process.uptime().toFixed(1)}s`,
    environment: process.env.CODESPACE_NAME ? 'GitHub Codespaces' : 'Local Dev Container',
  });
});

// ─── Start Server ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  const env = process.env.CODESPACE_NAME
    ? `GitHub Codespaces (${process.env.CODESPACE_NAME})`
    : 'Local Dev Container';

  console.log('============================================');
  console.log(`  ✅ Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`  🚀 Môi trường: ${env}`);
  console.log(`  📦 Node.js: ${process.version}`);
  console.log('============================================');
});
