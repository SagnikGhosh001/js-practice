import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(":memory:");

db.exec(
  `
	CREATE TABLE IF NOT EXISTS people (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT,
	  age INTEGER
	);
  `,
);

// const data = Array.from({ length: 100 }, (_, i) => ["'name'", i]);
// const values = data.map((x) => "(" + x.join(",") + ")").join(",");
// const sql = `INSERT INTO people (name, age)VALUES ${values};`;

// console.time("Insert Time:");
// db.exec(sql);
// console.timeEnd("Insert Time:");
// db.prepare(sql).run(...values);

// console.time("Read Time:");
// const rows = db.prepare("SELECT id, name, age FROM people").all();
// console.timeEnd("Read Time:");
// console.table(rows)

// const data = Array.from({ length: 100 }, (_, i) => ["'name'", i]);
// const values = data.map((x) => "(" + x.join(",") + ")").join(",");
// const sql = `INSERT INTO people (name, age)VALUES ${values};`;
// db.exec(sql);

db.close();

const createPromise = () => {
  setTimeout(()=> {

  },100)
}