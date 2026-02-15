import { DatabaseSync } from "node:sqlite";
import { DB_NAME } from "./constants.js";

const db = new DatabaseSync(DB_NAME);

db.exec(
  `
	CREATE TABLE IF NOT EXISTS people (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT,
	  age INTEGER
	);
  `,
);
