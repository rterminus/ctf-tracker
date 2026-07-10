import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.resolve(__dirname, "../../tracker.db");

sqlite3.verbose();

const db = new sqlite3.Database(dbPath, (err: Error | null) => {
  if (err) {
    console.error("Error connecting to database: ", err);
  } else {
    console.log("Conected to SQLite database.");

    db.run(`
      CREATE TABLE IF NOT EXISTS targets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ip TEXT NOT NULL,
        status TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

export default db;
