import { assertEquals, assertThrows } from "@std/assert";
import { parseArgs } from "../src/parser.js";

Deno.test("parsing args with single -n option", () => {
  const input = ["-n", "5", "file1.txt", "file2.txt"];
  const expected = {
    isQuite: false,
    mode: "-n",
    count: 5,
    files: ["file1.txt", "file2.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("parsing args with single -c option", () => {
  const input = ["-c", "10", "file1.txt"];
  const expected = {
    isQuite: false,
    mode: "-c",
    count: 10,
    files: ["file1.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("parsing args with multiple options", () => {
  const input = ["-n", "3", "-c", "20", "file1.txt", "file2.txt"];
  const expected = {
    isQuite: false,
    mode: "-c",
    count: 20,
    files: ["file1.txt", "file2.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("parsing args with -q option only", () => {
  const input = ["-q", "file1.txt"];
  const expected = {
    isQuite: true,
    mode: "-n",
    count: 10,
    files: ["file1.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("parsing args with files only", () => {
  const input = ["file1.txt", "file2.txt"];
  const expected = {
    isQuite: false,
    mode: "-n",
    count: 10,
    files: ["file1.txt", "file2.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("parsing args with options interleaved with files", () => {
  const input = ["-n", "2", "file1.txt", "-q", "file2.txt"];
  const expected = {
    isQuite: false,
    mode: "-n",
    count: 2,
    files: ["file1.txt", "-q", "file2.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("parsing args with no arguments", () => {
  const input = [];
  const expected = { isQuite: false, mode: "-n", count: 10, files: [] };
  assertEquals(parseArgs(input), expected);
});

Deno.test("last option wins when -n used multiple times", () => {
  const input = ["-n", "5", "-n", "8", "file.txt"];
  const expected = {
    isQuite: false,
    mode: "-n",
    count: 8,
    files: ["file.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("last option wins when mixing -n and -c multiple times", () => {
  const input = ["-c", "3", "-n", "7", "-c", "2", "file.txt"];
  const expected = {
    isQuite: false,
    mode: "-c",
    count: 2,
    files: ["file.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("multiple -q options", () => {
  const input = ["-q", "-q", "file.txt"];
  const expected = {
    isQuite: true,
    mode: "-n",
    count: 10,
    files: ["file.txt"],
  };
  assertEquals(parseArgs(input), expected);
});

Deno.test("negative count throws error", () => {
  const input = ["-n", "-5", "file.txt"];
  assertThrows(
    () => parseArgs(input),
    String,
    "head: illegal line count -- -5",
  );
});

Deno.test("non-numeric count throws error", () => {
  const input = ["-c", "abc", "file.txt"];
  assertThrows(
    () => parseArgs(input),
    String,
    "head: illegal byte count -- abc",
  );
});

Deno.test("missing count after -n throws error", () => {
  const input = ["-n"];
  assertThrows(
    () => parseArgs(input),
    String,
    "head: illegal line count -- undefined",
  );
});

// Deno.test("invalid option throws error", () => {
//   const input = ["-x", "file.txt"];
//   assertThrows(
//     () => parseArgs(input),
//     String,
//     "head: invalid option -- -x",
//   );
// });

Deno.test("dash-prefixed filename after files is treated as file", () => {
  const input = ["file1.txt", "-n", "file2.txt"];
  const expected = {
    isQuite: false,
    mode: "-n",
    count: 10,
    files: ["file1.txt", "-n", "file2.txt"],
  };
  assertEquals(parseArgs(input), expected);
});
