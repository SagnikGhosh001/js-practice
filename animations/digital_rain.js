import * as color from "./color.js";

const getTextData = () => [
  { string: "text", currentPos: 0, boardCol: 0, speed: 0.7 },
  { string: "text", currentPos: 0, boardCol: 2, speed: 1.3 },
  { string: "text", currentPos: 0, boardCol: 4, speed: 0.9 },
  { string: "text", currentPos: 0, boardCol: 6, speed: 1.8 },
  { string: "text", currentPos: 0, boardCol: 8, speed: 0.5 },
  { string: "text", currentPos: 0, boardCol: 10, speed: 2.2 },
  { string: "text", currentPos: 0, boardCol: 12, speed: 1.1 },
  { string: "text", currentPos: 0, boardCol: 14, speed: 0.6 },
  { string: "text", currentPos: 0, boardCol: 16, speed: 1.9 },
  { string: "text", currentPos: 0, boardCol: 18, speed: 0.8 },
  { string: "text", currentPos: 0, boardCol: 20, speed: 2.4 },
  { string: "text", currentPos: 0, boardCol: 22, speed: 0.7 },
  { string: "text", currentPos: 0, boardCol: 24, speed: 1.6 },
  { string: "text", currentPos: 0, boardCol: 26, speed: 0.4 },
  { string: "text", currentPos: 0, boardCol: 28, speed: 2.0 },
  { string: "text", currentPos: 0, boardCol: 30, speed: 1.3 },
  { string: "text", currentPos: 0, boardCol: 32, speed: 0.5 },
  { string: "text", currentPos: 0, boardCol: 34, speed: 2.1 },
  { string: "text", currentPos: 0, boardCol: 36, speed: 0.9 },
  { string: "text", currentPos: 0, boardCol: 38, speed: 0.3 },
  { string: "text", currentPos: 0, boardCol: 40, speed: 1.7 },
  { string: "text", currentPos: 0, boardCol: 42, speed: 0.8 },
];

const board = [];

const drawRain = (col, currentPos, string) => {
  const colorFns = [
    color.black,
    color.blue,
    color.cyan,
    color.green,
    color.magenta,
    color.red,
  ];

  for (let index = 0; index < string.length; index++) {
    board[(currentPos + index + 1) % board.length][col] = string[index];
  }
};

const displayBoard = () =>
  console.log(board.map((row) => row.join("")).join("\n"));

const clearBoard = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] = " ";
    }
  }
};

const setBoard = (rowSize, colSize) => {
  for (let row = 0; row < rowSize; row++) {
    board.push(" ".repeat(colSize).split(""));
  }
};

const main = (args) => {
  const [rowSize, colSize] = args;
  setBoard(+rowSize || 50, +colSize || 50);
  const textData = getTextData();

  setInterval(() => {
    console.clear();

    for (const text of textData) {
      drawRain(text.boardCol, text.currentPos, text.string);
      text.currentPos = (Math.ceil(text.currentPos + text.speed)) %
        board[0].length;
    }

    displayBoard();
    clearBoard();
  }, 200);
};

main(Deno.args);
