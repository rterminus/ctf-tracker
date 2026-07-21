import database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve(__dirname, "../../tracker.db");

const db = new database(dbPath, { verbose: console.log });
console.log("Connected to SQLite database.");

db.exec(`
  CREATE TABLE IF NOT EXISTS targets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT NOT NULL,
    name TEXT NOT NULL,
    status TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
