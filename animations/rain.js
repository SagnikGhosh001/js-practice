const RAIN_DROP = "💧";

const board = [];

const drawRain = (row) => {
  for (let col = 0; col < board.length; col++) {
    const ele = board[row][col];
    board[row][col] = ele === "☂️" ? ele : RAIN_DROP;
  }
};

const displayBoard = () =>
  console.log(board.map((row) => row.join("")).join("\n"));

const clearBoard = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const ele = board[row][col];
      board[row][col] = ele === "☂️" ? ele : "  ";
    }
  }
};

const setBoard = (rowSize, colSize) => {
  for (let row = 0; row < rowSize; row++) {
    board.push("  ".repeat(colSize).split(""));
  }
  board[rowSize - 1][Math.floor(colSize / 2)] = "☂️";
};

const main = (args) => {
  const [rowSize, colSize] = args;
  setBoard(+rowSize || 10, +colSize || 20);
  let row = 0;
  setInterval(() => {
    console.clear();
    drawRain(row);
    displayBoard();
    if (row >= board.length - 1) clearBoard();
    row = (row + 1) % board.length;
  }, 200);
};

main(Deno.args);
