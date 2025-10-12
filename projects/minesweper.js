const BOMB = "💣";
const SAFE = "✅";
const BOARD = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];

const BOMB_BOARD = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];

function showBoard(array) {
  for (let index = 0; index < array.length; index++) {
    if (index === 0) {
      console.log(array[index].join("  | "));
      continue;
    }
    console.log(array[index].join(" | "));
  }
}

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function extractRowAndCol(number) {
  const row = Math.floor((number - 1) / 10);
  const col = (number - 1) % 10;
  return [row, col];
}

function randomNmberForBomb(times) {
  const bombPos = [];
  while (times >= 0) {
    const pos = randomNumberBetween(1, 100);
    const rowAndCol = extractRowAndCol(pos);
    const row = rowAndCol[0];
    const col = rowAndCol[1];

    BOMB_BOARD[row][col] = BOMB;
    times--;
    bombPos.push(rowAndCol);
  }
  return bombPos;
}

function takingUserResponse() {
  const userResponse = prompt("Enter Position :-")
  const responce = parseInt(userResponse);

  if (responce >= 0 && responce <= 100) {
    console.clear();
    return responce;
  }
  console.log("Use a valid position");
  return takingUserResponse();
}

function checkIfPosIsUsed(usedPos, pos) {
  if (usedPos.includes(pos)) {
    showBoard(BOARD);
    console.log("This Position is already used");
    return true;
  }

  return false;
}

function checkifBombFound(rowAndCal, bombPos) {
  for (let index = 0; index < bombPos.length; index++) {
    const bombLocation = bombPos[index];
    if (rowAndCal[0] === bombLocation[0] && rowAndCal[1] === bombLocation[1]) {
      return true;
    }
  }

  return false;
}

function play(bombPos, usedPos = [], point = 0) {
  console.log("Your point is,", point);
  let pos = takingUserResponse();

  while (checkIfPosIsUsed(usedPos, pos)) {
    pos = takingUserResponse();
  }

  usedPos.push(pos);
  const rowAndCal = extractRowAndCol(pos);
  const row = rowAndCal[0];
  const col = rowAndCal[1];

  if (checkifBombFound(rowAndCal, bombPos)) {
    console.log("Bomb Found");
    showBoard(BOMB_BOARD);
    console.log("You loose, your point is", point);
    return;
  }
  point++;
  BOARD[row][col] = SAFE;
  showBoard(BOARD);
  return play(bombPos, usedPos, point);
}

function levelSelect() {
  console.log("Easy Level:- 25 Bombs");
  console.log("Medium Level:- 50 Bombs");
  console.log("Hard Level:- 75 Bombs");

  const response = prompt("Press One For Easy, Two For Medium and Three For Hard:-");
  const level = parseInt(response);
  if (level >= 1 && level <= 3) {
    return level;
  }

  console.log("Choose valid input");
  return levelSelect();
}

function main() {
  console.clear();
  showBoard(BOARD);
  const level = levelSelect();
  const bombCount = level === 1 ? 25 : (level === 2 ? 50 : 75);
  const bombPos = randomNmberForBomb(bombCount);
  play(bombPos);
}

main();
