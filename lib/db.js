// lib/db.js
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "views.db");

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(DB_FILE);

// Таблица уникальных IP-хитов и агрегатов
db.exec(`
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS ip_views (
    id TEXT NOT NULL,
    ip_hash TEXT NOT NULL,
    ts INTEGER NOT NULL,
    PRIMARY KEY (id, ip_hash)
  );

  CREATE TABLE IF NOT EXISTS totals (
    id TEXT PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0
  );
`);

export default db;