#!/usr/bin/env node
/**
 * Data Exporter Script for Hostinger Migration
 * Exports current database records to SQL insert statements.
 */
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '..', 'server', 'data', 'database.json');
const OUTPUT_SQL = path.join(__dirname, '..', 'database_export.sql');

if (!fs.existsSync(DB_FILE)) {
  console.log('No local database file found at server/data/database.json');
  process.exit(0);
}

try {
  const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  const lines = [
    '-- Exported data from Print Support local storage',
    '-- Timestamp: ' + new Date().toISOString(),
    'SET NAMES utf8mb4;',
    ''
  ];

  // Export full app_state document
  const escapedState = JSON.stringify(data).replace(/'/g, "\\'");
  lines.push(`INSERT INTO app_state (state_key, state_data, updated_at) VALUES ('main_state', '${escapedState}', NOW()) ON DUPLICATE KEY UPDATE state_data = VALUES(state_data);`);
  lines.push('');

  // Export shops
  if (Array.isArray(data.shops)) {
    for (const s of data.shops) {
      lines.push(`INSERT INTO shops (id, slug, name, owner_name, email, phone, address, upi_id, plan, agent_status, created_at) VALUES ('${s.id}', '${s.slug || s.id}', '${(s.name || '').replace(/'/g, "\\'")}', '${(s.ownerName || '').replace(/'/g, "\\'")}', '${s.email || ''}', '${s.phone || ''}', '${(s.address || '').replace(/'/g, "\\'")}', '${s.upiId || ''}', '${s.plan || 'STARTER'}', '${s.agentStatus || 'OFFLINE'}', NOW()) ON DUPLICATE KEY UPDATE name = VALUES(name);`);
    }
  }

  fs.writeFileSync(OUTPUT_SQL, lines.join('\n'), 'utf8');
  console.log(`✅ Successfully exported database to ${OUTPUT_SQL}`);
} catch (err) {
  console.error('Export failed:', err.message);
}
