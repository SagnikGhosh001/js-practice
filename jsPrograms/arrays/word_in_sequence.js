const BOARD = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const WORD = "ASADFBCCSECF";

const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const isOutOfBoundary = (row, col) => {
  return row < 0 || col < 0 || row >= BOARD.length || col >= BOARD[row].length;
};

const isTraversePossible = (row, col, indexOfWord = 0) => {
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

const isSequenceFound = () => {
  for (let i = 0; i < BOARD.length; i++) {
    for (let j = 0; j < BOARD.length; j++) {
      if (isTraversePossible(i, j)) {
        return true;
      }
    }
  }
  return false;
};

console.log(isSequenceFound());
