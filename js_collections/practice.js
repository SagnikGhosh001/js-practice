import * as collections from "@std/collections";

const obj = {
  name: ["sagnik", "sandip", "vivek"],
  age: [20, 19, 20],
};

const description = collections.aggregateGroups(
  obj,
  (current, key, first, acc) =>
    first ? `${key} is ${current}` : `${acc} and ${current}`,
);

console.log(description);
