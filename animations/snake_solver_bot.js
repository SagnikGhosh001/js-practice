const board = [];
const preditor = "🐍";
const prey = "🦋";
const preditorBody = [];

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
    return [row, col];
  }

  return set(emoji);
};

const displayBoard = () =>
  console.log(board.map((row) => row.join("")).join("\n"));

const moveBody = () => {
  for (let index = preditorBody.length - 1; index > 0; index--) {
    preditorBody[index] = [...preditorBody[index - 1]];
  }
};

const movePreditor = (preditorHead, preyLoc) => {
  const tail = preditorBody[preditorBody.length - 1];
  board[tail[0]][tail[1]] = "  ";
  const delRow = Math.sign(preyLoc[0] - preditorHead[0]);
  const delCol = delRow ? 0 : Math.sign(preyLoc[1] - preditorHead[1]);

  moveBody();
  preditorHead[0] += delRow;
  preditorHead[1] += delCol;
  board[preditorHead[0]][preditorHead[1]] = preditor;
  return [delRow, delCol];
};

const setLastpart = (delRow, delCol) => {
  const tail = preditorBody[preditorBody.length - 1];
  board[tail[0] - delRow][tail[1] - delCol] = preditor;
  preditorBody.push([tail[0] - delRow, tail[1] - delCol]);
};

const main = (args) => {
  const rowSize = +args[0] || 20;
  const colSize = +args[1] || 20;
  createBoard(rowSize, colSize);

  const preditorHead = set(preditor);
  preditorBody.push(preditorHead);
  let preyLoc = set(prey);

  setInterval(() => {
    console.clear();
    const [delRow, delCol] = movePreditor(preditorHead, preyLoc);

    if (preditorHead[0] === preyLoc[0] && preditorHead[1] === preyLoc[1]) {
      setLastpart(delRow, delCol);
      preyLoc = set(prey);
    }

    displayBoard();
  }, 100);
};

main(Deno.args);
