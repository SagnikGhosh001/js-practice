const BOUNDARY_EMOJI = "🟥";
const FINISH = "🦌";
const START = "🦁";

const BOARD = [
  [BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, "", "", "", "", "", "", "", "", BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, "", "", "", "", "", "", "", "", BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, "", "", "", "", "", "", "", "", BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, "", "", "", "", "", "", "", "", BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, "", "", "", "", "", "", "", "", BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, "", "", "", "", "", "", "", "", BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, "", "", "", "", "", "", "", "", BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, "", "", "", "", "", "", "", "", BOUNDARY_EMOJI],
  [BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI, BOUNDARY_EMOJI]
];

let currentPos = [];
let finishPoint = [];
function showBoard() {

  let maxLength = 0;
  for (let i = 0; i < BOARD.length; i++) {
    for (let j = 0; j < BOARD[i].length; j++) {
      if (BOARD[i][j].length > maxLength) {
        maxLength = BOARD[i][j].length;
      }
    }
  }

  for (let i = 0; i < BOARD.length; i++) {
    let paddedRow = "";
    for (let j = 0; j < BOARD[i].length; j++) {
      paddedRow += BOARD[i][j].padEnd(maxLength, ' ') + " ";
    }
    console.log(paddedRow.trim());
  }
}

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function numberGenerationAndBoardChange(start, end, emoji) {
  const randomNumber = randomNumberBetween(start, end)
  const row = Math.floor(randomNumber / 10);
  const col = randomNumber % 10;
  BOARD[row][col] = emoji;
  return [row, col];
}

function randomMazeWallGeneration(wallCount) {
  while (wallCount >= 0) {
    numberGenerationAndBoardChange(0, 99, BOUNDARY_EMOJI);
    wallCount--;
  }
}

function setFinish() {
  finishPoint = numberGenerationAndBoardChange(91, 98, FINISH);
}

function setStart() {
  currentPos = numberGenerationAndBoardChange(1, 8, START);
}

function takingInput() {
  const response = prompt("w for up, a for left, s for down and d for right").toLowerCase().trim();
  if (response === "w" || response === "a" || response === "s" || response === "d") {
    console.clear();
    return response;
  }

  console.log("give proper input");
  return takingInput();
}

function checkIfNotWall(pos) {

  if (pos[0] === -1 || pos[1] === -1) {
    return false;
  }

  if (BOARD[pos[0]][pos[1]] === BOUNDARY_EMOJI) {
    return false;
  }

  return true;
}

function moveAccordingResponse(x, y, addX, addY) {
  if (checkIfNotWall([x + addX, y + addY])) {
    BOARD[x + addX][y + addY] = START;
    BOARD[x][y] = " ";
    currentPos = [x + addX, y + addY];
  }
}

function changePos(response) {

  if (response === "a") {
    moveAccordingResponse(currentPos[0], currentPos[1], 0, -1)
  }

  if (response === "s") {
    moveAccordingResponse(currentPos[0], currentPos[1], 1, 0)
  }

  if (response === "d") {
    moveAccordingResponse(currentPos[0], currentPos[1], 0, 1)
  }

  if (response === "w") {
    moveAccordingResponse(currentPos[0], currentPos[1], -1, 0)
  }
}

function isWin() {
  return currentPos[0] === finishPoint[0] && currentPos[1] === finishPoint[1];
}

function play(startTime) {
  const response = takingInput();
  changePos(response);
  showBoard();
  if (isWin()) {
    const endTime = Date.now();
    const timeTook = (endTime - startTime) / 1000;
    console.log("You win, You took", timeTook, "sec");
    return
  }
  play(startTime);
}

function initialBlockRemove() {
  if (!checkIfNotWall([currentPos[0] + 1, currentPos[1]])) {
    BOARD[currentPos[0] + 1][currentPos[1]] = " ";
  }
  if (!checkIfNotWall([finishPoint[0] - 1, finishPoint[1]])) {
    BOARD[finishPoint[0] - 1][finishPoint[1]] = " ";
  }
}

function main() {
  randomMazeWallGeneration(30);
  setStart();
  setFinish();
  initialBlockRemove();
  showBoard();
  const startTime = Date.now();
  play(startTime);
}

main();
