import * as fs from "node:fs";

const result = fs.readFile("./files.txt", "utf8", (err, data) => {
  const files = data.split("\n");

  fs.readFile(files[0], "utf8", (err, con1) => {
    fs.readFile(files[1], "utf8", (err, con2) => {
      console.log(con1 + con2);
    });
  });
});

console.log("after read file", result);
