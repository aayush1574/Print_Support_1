# Print Support — Print Shop Automation Suite (Hostinger Edition)

![Print Support Automation](https://img.shields.io/badge/Platform-Hostinger_Business-blue?style=flat-square)
![Node Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green?style=flat-square)
![Database](https://img.shields.io/badge/Database-MySQL%20%2F%20Local%20SSD-orange?style=flat-square)
![License](https://img.shields.io/badge/License-Proprietary-lightgrey?style=flat-square)

**Print Support** is a complete, self-hosted web platform designed for counter print shops, digital xerox centers, and commercial reprographics stores. It automates customer document submission via QR codes, instant page calculations, UPI payments, counter live order queues, and direct-to-printer spooling.

---

## 🌟 Hostinger Self-Hosted Architecture

This release is fully optimized to run **100% on Hostinger Business Plan** with all frontend, backend, uploads, and database hosted natively on Hostinger:

- **Frontend**: Vite + React 18 + TailwindCSS Single Page Application (pre-compiled in `dist/`).
- **Backend**: Express.js + WebSocket server (`server.js` / `server/server.js`).
- **Database**:
  - **Hostinger Native MySQL / MariaDB** (standard on Hostinger Business Plan via `localhost:3306`).
  - **Hostinger NVMe/SSD Local Storage Engine** (`server/data/database.json` with auto-backup rotation).
- **Web Server Integration**: Hostinger LiteSpeed / Apache reverse proxy and Passenger `.htaccess`.
- **Desktop Agent**: Local Windows/Linux background agent (`server/agent-client/print-agent.js`) for direct USB/LAN printer spooling.

---

## 🚀 Quick Deployment on Hostinger

Please refer to the complete step-by-step guide in [HOSTINGER_MIGRATION_GUIDE.md](file:///c:/Users/aayus/OneDrive/Desktop/printcatalyst%20-%20Copy/HOSTINGER_MIGRATION_GUIDE.md).

### 1. In Hostinger hPanel (Git Auto-Deploy):
- **Advanced** ➔ **Git**
- Repository: `https://github.com/aayush1574/Print_Support_1.git`
- Branch: `main`
- Install Path: `/public_html`

### 2. In Hostinger Node.js Application Manager:
- **Node.js Version**: `20.x`
- **Application Startup File**: `server.js`
- **Application Mode**: `Production`

### 3. Database:
- Import `database.sql` into your Hostinger MySQL database via **phpMyAdmin**, or run with local NVMe disk persistence out-of-the-box.

---

## 🛠️ Key Scripts

```bash
# Start backend server
npm start

# Run automated tests
npm test

# Build frontend production bundle
npm run build

# Export current database to SQL
npm run export:db

# Run desktop print spooler agent
npm run agent
```

---

## 📄 License & Attribution
Proprietary software for Print Support. Developed for high-volume automated counter operations.