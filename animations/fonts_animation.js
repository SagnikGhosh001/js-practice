import {
  black,
  blue,
  bold,
  cyan,
  green,
  magenta,
  red,
  white,
  yellow,
} from "./color.js";

import { getBlockFont, getSimpleFont } from "./fonts_data.js";

const textToAsciiArt = (text, font) => {
  const characters = font;
  const height = characters[0].length;

  const result = [];
  for (let i = 0; i < height; i++) {
    result.push("");
  }

  const char = text.toUpperCase();
  const charLines = char in characters ? characters[char] : characters["?"];

  for (let line = 0; line < height; line++) {
    result[line] += charLines[line].padStart(10);
  }

  return result;
};

const printOnScreen = (chars) => {
  const colorFns = [black, red, green, yellow, blue, magenta, cyan, white];
  const linesPerChar = chars[0].length;
  let result = "";
  let line = 0;

  setInterval(() => {
    const randomColorIndex = Math.floor(Math.random() * colorFns.length);
    console.clear();

    if (line >= linesPerChar) {
      line = 0;
      result = "";
      console.clear();
    }

    let combinedLine = "";
    for (let index = 0; index < chars.length; index++) {
      combinedLine += bold(colorFns[randomColorIndex](chars[index][line]));
    }

    result += combinedLine + "\n";
    console.log(result);

    line++;
  }, 500);
};

const main = (args) => {
  const text = args[0] || "Hello!";
  const fontName = (args[1] || "block").toLowerCase();

  const selectedFont = fontName === "simple" ? getSimpleFont() : getBlockFont();

  console.clear();

  const str = [];
  for (const char of text) {
    const line = [];
    const asciiArt = textToAsciiArt(char, selectedFont);
    for (let i = 0; i < asciiArt.length; i++) {
      line.push(asciiArt[i]);
    }
    str.push(line);
  }

  printOnScreen(str);
};

main(Deno.args);
