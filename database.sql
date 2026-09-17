-- ==============================================================================
-- Print Support — Hostinger MySQL / MariaDB Production Database Schema & Seed
-- ==============================================================================
-- Usage on Hostinger Business Plan:
-- 1. In Hostinger hPanel -> Databases -> MySQL Databases -> Create Database
-- 2. Open phpMyAdmin for your new database
-- 3. Click "Import" -> choose this database.sql file -> Click "Go"
-- ==============================================================================

SET NAMES utf8mb4;
SET time_zone = '+05:30';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

-- ------------------------------------------------------------------------------
-- 1. Table structure for app_state (Permanent 100% Full Document State Sync)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_state` (
  `state_key` VARCHAR(64) NOT NULL,
  `state_data` LONGTEXT NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`state_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 2. Table structure for shops (Relational Table for phpMyAdmin Management)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `shops` (
  `id` VARCHAR(64) NOT NULL,
  `slug` VARCHAR(128) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `owner_name` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `phone` VARCHAR(32) DEFAULT NULL,
  `address` TEXT DEFAULT NULL,
  `upi_id` VARCHAR(128) DEFAULT NULL,
  `plan` VARCHAR(64) DEFAULT 'ENTERPRISE',
  `agent_token` VARCHAR(128) DEFAULT NULL,
  `agent_status` VARCHAR(32) DEFAULT 'ONLINE',
  `print_credits` INT DEFAULT 999999,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `raw_json` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_slug` (`slug`),
  KEY `idx_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 3. Table structure for orders (Relational Orders for Live Feed & Daily Ledger)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `orders` (
  `id` VARCHAR(64) NOT NULL,
  `shop_id` VARCHAR(64) NOT NULL,
  `customer_name` VARCHAR(255) DEFAULT NULL,
  `customer_phone` VARCHAR(32) DEFAULT NULL,
  `total_amount` DECIMAL(10,2) DEFAULT 0.00,
  `payment_status` VARCHAR(32) DEFAULT 'PENDING',
  `status` VARCHAR(32) DEFAULT 'SUBMITTED',
  `pickup_token` VARCHAR(32) DEFAULT NULL,
  `payment_method` VARCHAR(32) DEFAULT 'UPI',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `raw_json` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_shop_created` (`shop_id`, `created_at`),
  KEY `idx_status` (`status`),
  KEY `idx_pickup` (`pickup_token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 4. Table structure for printers (Physical Spoolers & Counter Machines)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `printers` (
  `id` VARCHAR(64) NOT NULL,
  `shop_id` VARCHAR(64) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `model` VARCHAR(255) DEFAULT NULL,
  `connection_type` VARCHAR(64) DEFAULT 'USB_DIRECT',
  `status` VARCHAR(32) DEFAULT 'ONLINE',
  `is_default_mono` TINYINT(1) DEFAULT 1,
  `supports_color` TINYINT(1) DEFAULT 1,
  `ip_address` VARCHAR(64) DEFAULT '127.0.0.1',
  PRIMARY KEY (`id`),
  KEY `idx_shop_printer` (`shop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 5. Table structure for support_enquiries
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_enquiries` (
  `id` VARCHAR(64) NOT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `phone` VARCHAR(32) DEFAULT NULL,
  `subject` VARCHAR(255) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `status` VARCHAR(32) DEFAULT 'OPEN',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 6. Initial Seed Data
-- ------------------------------------------------------------------------------
INSERT INTO `shops` (`id`, `slug`, `name`, `owner_name`, `email`, `phone`, `address`, `upi_id`, `plan`, `agent_token`, `agent_status`, `print_credits`, `created_at`)
VALUES
('shop_main', 'printsupport-hub', 'Print Support Main Hub', 'Aayush Purohit', 'shop@printsupport.in', '7225083904', 'Vidisha, Madhya Pradesh (MP)', 'printsupport@upi', 'ENTERPRISE', 'agt_tok_main_hub_01', 'ONLINE', 999999, NOW())
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `printers` (`id`, `shop_id`, `name`, `model`, `connection_type`, `status`, `is_default_mono`, `supports_color`, `ip_address`)
VALUES
('prn_main_01', 'shop_main', 'Counter Master (B&W / Color)', 'LaserJet Pro M428dw', 'USB_DIRECT', 'ONLINE', 1, 1, '127.0.0.1')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

SET foreign_key_checks = 1;
