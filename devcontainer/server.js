const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// API trả về thông tin môi trường máy ảo
app.get('/api/system-info', (req, res) => {
  res.json({
    platform: os.platform(),
    release: os.release(),
    architecture: os.arch(),
    totalMemoryMB: Math.round(os.totalmem() / (1024 * 1024)),
    freeMemoryMB: Math.round(os.freemem() / (1024 * 1024)),
    uptimeHours: (os.uptime() / 3600).toFixed(2),
    nodeVersion: process.version,
    isCodespaces: Boolean(process.env.CODESPACES)
  });
});

app.listen(PORT, () => {
  console.log(`Web application is running at http://localhost:${PORT}`);
});
