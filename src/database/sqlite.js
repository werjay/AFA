const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dbPath = path.join(
    __dirname,
    "../../data/afa.db"
);

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(
    dataDir,
    "afa.db"
);

// 建立資料庫
const db = new Database(dbPath);

// 建立 expenses table
db.exec(`
CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    name TEXT NOT NULL,
    amount INTEGER NOT NULL,
    currency TEXT DEFAULT 'TWD',
    category TEXT,
    subcategory TEXT,
    merchant TEXT,
    tag TEXT,
    note TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`);

module.exports = db;