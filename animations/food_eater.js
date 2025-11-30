const board = [];
const preditor = "🐍";
const prey = "🦋";

const createBoard = (rowSize, colSize) => {
  for (let row = 0; row < rowSize; row++) {
    const colElement = [];
    for (let col = 0; col < colSize; col++) {
      colElement.push("  ");
    }
    board.push(colElement);
  }
};

const set = (emoji) => {
  const row = Math.floor(Math.random() * board.length);
  const col = Math.floor(Math.random() * board[0].length);
  if (board[row][col] === "  ") {
    board[row][col] = emoji;
    return { row, col };
  }

  return set(emoji);
};

const displayBoard = () =>
  console.log(board.map((row) => row.join("")).join("\n"));

const movePreditor = (preditorLoc, preyLoc) => {
  board[preditorLoc.row][preditorLoc.col] = "  ";

  const delRow = Math.sign(preyLoc.row - preditorLoc.row);
  const delCol = delRow ? 0 : Math.sign(preyLoc.col - preditorLoc.col);

  preditorLoc.row += delRow;
  preditorLoc.col += delCol;

  board[preditorLoc.row][preditorLoc.col] = preditor;
};

const main = () => {
  createBoard(20, 20);
  const preditorLoc = set(preditor);
  const preyLoc = set(prey);
  const id = setInterval(() => {
    console.clear();
    movePreditor(preditorLoc, preyLoc);
    displayBoard();
    if (preditorLoc.row === preyLoc.row && preditorLoc.col === preyLoc.col) {
      clearInterval(id);
    }
  }, 300);
};

main();
