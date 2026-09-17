# Print Support — Hostinger Business Plan Migration & Deployment Guide

This guide provides step-by-step instructions to deploy and host the complete Print Support application (**Frontend, Backend, and Database**) 100% on **Hostinger Business Plan** with zero third-party cloud dependencies.

---

## 🏗️ Architecture on Hostinger

```
[ Customer / Merchant Browser ]
              │ HTTPS (Port 443 with Free SSL)
              ▼
    [ Hostinger LiteSpeed / Apache ] (.htaccess)
              │
              ├───► Static Assets (dist/) & Uploads (server/uploads/)
              │
              ▼ Reverse Proxy / Passenger
    [ Node.js Backend Server ] (server.js / server/server.js)
              │ (Port 5000 or Passenger Socket)
              │
              ├───► [ Hostinger MySQL Database ] (localhost:3306)
              │     (Tables: app_state, shops, orders, printers, enquiries)
              │
              └───► [ Hostinger Local SSD Storage ] (server/data/database.json)
                    (High-speed NVMe disk persistence with auto-backup)
```

---

## 📋 Prerequisites on Hostinger

1. **Hostinger Business Web Hosting** or **Cloud Startup / Business** plan.
2. Active Domain name mapped to Hostinger.
3. Free SSL certificate installed via Hostinger hPanel.

---

## 🚀 Step-by-Step Deployment

### Step 1: Clone or Deploy from GitHub

1. Log into your **Hostinger hPanel**.
2. Go to **Websites** ➔ **Manage** for your domain.
3. In the left navigation menu, scroll down to **Advanced** ➔ **Git**.
4. Configure Git Repository:
   - **Repository**: `https://github.com/aayush1574/Print_Support_1.git`
   - **Branch**: `main`
   - **Install Path**: `/public_html` (or leave default root)
5. Click **Create** and then click **Deploy**.

---

### Step 2: Configure Node.js in Hostinger hPanel

1. In hPanel, navigate to **Websites** ➔ **Manage** ➔ **Node.js** (under Advanced or Core features).
2. Set the following settings:
   - **Node.js Version**: `20.x` (or `18.x`)
   - **Application Mode**: `Production`
   - **Application Root**: `/home/uXXXXX/domains/yourdomain.com/public_html` (your project directory)
   - **Application Startup File**: `server.js` (or `app.js`)
   - **Application URL**: `https://yourdomain.com`
3. Under the **npm scripts** or **Dependencies** section, click **Run npm install** (or run via SSH terminal: `npm install`).
4. Run the frontend build:
   - In SSH / Web Terminal:
     ```bash
     npm run build
     ```
   *(This compiles Vite React frontend into the `dist/` directory, which Express automatically serves).*

---

### Step 3: Create Hostinger MySQL Database

Hostinger Business Plan includes native MySQL / MariaDB databases accessible directly via `localhost:3306`:

1. In hPanel, go to **Databases** ➔ **MySQL Databases**.
2. Enter:
   - **MySQL Database Name**: e.g., `printsupport` (Full name will look like: `u123456789_printsupport`)
   - **MySQL Username**: e.g., `admin` (Full user will look like: `u123456789_admin`)
   - **Password**: Create a strong password and copy it.
3. Click **Create**.
4. Under "List of Current MySQL Databases and Users", find your new database and click **Enter phpMyAdmin**.
5. Inside phpMyAdmin:
   - Click the **Import** tab at the top.
   - Click **Choose File** and select `database.sql` from this repository.
   - Click **Go** at the bottom.
   - All tables (`app_state`, `shops`, `orders`, `printers`, `support_enquiries`) and default seed data will be created instantly.

> [!TIP]
> **Zero-Config Local SSD Option**: If you do not wish to create a MySQL database, you can leave the MySQL environment variables empty. The application will automatically use Hostinger's high-speed local NVMe/SSD drive with the built-in database engine (`server/data/database.json`) and automated backup rotation!

---

### Step 4: Setup Environment Variables (`.env`)

In your Hostinger project directory, create or edit `.env` (using Hostinger File Manager or SSH):

```env
# Hostinger Server Settings
PORT=5000
NODE_ENV=production

# Hostinger MySQL Database (from Step 3)
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=u123456789_printsupport
MYSQL_USER=u123456789_admin
MYSQL_PASSWORD=YourDatabasePasswordHere
```

---

### Step 5: Web Server Configuration (`.htaccess`)

This repository already includes a pre-configured `.htaccess` specifically tuned for Hostinger LiteSpeed / Apache:
- Reverse proxies API and WebSocket requests to the Node.js backend.
- Enables Gzip compression and browser caching.
- Handles Single Page Application (React Router) navigation seamlessly.
- Configures security and CORS headers.

Ensure the `.htaccess` file is present in your web root (`public_html/.htaccess`).

---

### Step 6: Start / Restart the Application

1. In hPanel ➔ **Node.js**, click **Restart Application**.
2. Verify the health status by visiting in your browser:
   ```
   https://yourdomain.com/health
   ```
   You should receive a JSON response:
   ```json
   {
     "status": "OK",
     "app": "Print Support Automation Suite",
     "environment": "production",
     "storageMode": "HOSTINGER_MYSQL",
     "mysqlActive": true,
     "uptime": 45,
     "shopsCount": 1
   }
   ```

---

## 🖨️ Connecting Desktop Spooler Agent (`print-agent.js`)

Shop owners running the automatic background print agent on their physical counter PC can connect to Hostinger by simply setting the `API_URL`:

```bash
# In the agent .env or command line on shop PC:
API_URL=https://yourdomain.com
SHOP_ID=shop_main
AGENT_TOKEN=agt_tok_main_hub_01

npm run agent
```

The desktop agent connects over secure WebSockets (`wss://yourdomain.com/ws`) and auto-prints documents sent to the Hostinger queue!

---

## 🛠️ Useful Management Commands (SSH / Terminal)

| Action | Command |
| :--- | :--- |
| **Install Dependencies** | `npm install` |
| **Rebuild Frontend** | `npm run build` |
| **Run Test Suite** | `npm test` |
| **Export DB to SQL** | `npm run export:db` |
| **Start Server Manually** | `npm start` |

---

## 🔒 Security & Backups on Hostinger

- **Automatic Backups**: Hostinger Business Plan creates daily automatic backups of both files and MySQL databases.
- **Local JSON Backup**: In addition, the server maintains `server/data/database.backup.json` automatically on every save.
- **Free SSL**: Enabled automatically with auto-renewal via Let's Encrypt in hPanel.
