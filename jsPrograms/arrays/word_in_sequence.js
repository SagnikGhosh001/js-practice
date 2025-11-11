const BOARD = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const WORD = "ASADECSEED";

const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const findIndex = (acc, ele, i, char) => {
  const index = ele.findIndex((ele) => ele === char);
  return acc.push([i, index]) && acc;
};

const findStarts = (array, word) => {
  return array.reduce((acc, ele, i) => findIndex(acc, ele, i, word[0]), []);
};

const isOutOfBoundary = (row, col) => {
  return row < 0 || col < 0 || row >= BOARD.length || col >= BOARD[row].length;
};

const isTraversePossible = (row, col, indexOfWord = 1) => {
  if (indexOfWord === WORD.length) return true;

  for (const element of DIRECTIONS) {
    const newRow = row + element[0];
    const newCol = col + element[1];

    if (
      !isOutOfBoundary(newRow, newCol) &&
      BOARD[newRow][newCol] === WORD[indexOfWord] &&
      isTraversePossible(newRow, newCol, indexOfWord + 1)
    ) {
      return true;
    }
  }

  return false;
};

const isSequenceFound = (board, word) => {
  const startingIndexs = findStarts(board, word);

  for (const element of startingIndexs) {
    if (isTraversePossible(element[0], element[1])) {
      return true;
    }
  }

  return false;
};

console.log(isSequenceFound(BOARD, WORD));
