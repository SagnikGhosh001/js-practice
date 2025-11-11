const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const word = "CCEDFBASA";

const findIndex = (acc, ele, i, char) => {
  const index = ele.findIndex((ele) => ele === char);
  return acc.push([i, index]) && acc;
};

const findStart = (array, word) => {
  return array.reduce((acc, ele, i) => findIndex(acc, ele, i, word[0]), []);
};

const isOutOfBoundary = (row, col) => {
  return row < 0 || col < 0 || row >= board.length || col >= board[row].length;
};

const isTraversePossible = (row, col, indexOfWord) => {
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  if (indexOfWord === word.length) return true;

  for (const element of directions) {
    const newRow = row + element[0];
    const newCol = col + element[1];

    if (
      !isOutOfBoundary(newRow, newCol) &&
      board[newRow][newCol] === word[indexOfWord] &&
      isTraversePossible(newRow, newCol, indexOfWord + 1)
    ) {
      return true;
    }
  }

  return false;
};

const isSequenceFound = (board, word) => {
  const startingIndexs = findStart(board, word);

  for (const element of startingIndexs) {
    if (isTraversePossible(element[0], element[1], 1)) {
      return true;
    }
  }

  return false;
};

console.log(isSequenceFound(board, word));
