const dbg = (x) => {
  console.log(x);
  return x;
};

const generateBoard = (size) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    const rowElemts = [];
    for (let j = 0; j < size; j++) {
      rowElemts.push(" ");
    }
    board.push(rowElemts);
  }
  return board;
};

const isQueenExistInDiagonal = (board, i, j) => {
  for (let inner = 0; inner < board.length; inner++) {
    for (let outter = 0; outter < board.length; outter++) {
      if (
        board[inner][outter] === "Q" &&
        Math.abs(i - inner) === Math.abs(j - outter)
      ) {
        return true;
      }
    }
  }

  return false;
};

const isQueenExistInCol = (board, col) => board.some((row) => row[col] === "Q");

const isQueenExistInRow = (board, row) => board[row].some((ele) => ele === "Q");

const nQueen = (board, row, solutions) => {
  if (row === board.length) {
    solutions.push(board.map((r) => [...r]));
    return;
  }

  for (let col = 0; col < board.length; col++) {
    const isQueenExist = isQueenExistInRow(board, row) ||
      isQueenExistInCol(board, col) ||
      isQueenExistInDiagonal(board, row, col);

    if (!isQueenExist) {
      board[row][col] = "Q";
      nQueen(board, row + 1, solutions);
      board[row][col] = " ";
    }
  }
};

const main = () => {
  const size = 4;
  const board = generateBoard(size);
  const solutions = [];
  nQueen(board.map((row) => [...row]), 0, solutions);

  console.log(solutions);
};

main();
