const WL = "🟫";
const PL = "🐍";
const PLBODY = "🟠";
const ES = "  ";
const TR = "🕷️"
let head = [9, 8];
const body = [head];
let lastUsedMove = "";
const TARGET = [];

const boardArrays = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, PL, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
];

const MOVES = ["w", "a", "d", "s"];
const DIRECTIONS = [[-1, 0], [0, -1], [0, 1], [1, 0]];

function getHeadPosition() {
  return body[body.length - 1];
}

function getTailPosition() {
  return body[0];
}

function getDirection(response) {
  return DIRECTIONS[MOVES.indexOf(response)];
}

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function ifTouchOwnBody(x, y) {
  for (let index = 0; index < body.length; index++) {
    const currentBody = body[index];

    if (currentBody[0] === x && currentBody[1] === y) {
      return true;
    }
  }

  return false;
}

function setTarget() {
  const row = randomNumberBetween(1, boardArrays[0].length - 2);
  const col = randomNumberBetween(1, boardArrays.length - 2);
  TARGET[0] = row;
  TARGET[1] = col;

  if (ifTouchOwnBody(row, col)) return setTarget();

  boardArrays[row][col] = TR;
}

function showBoard() {
  for (let index = 0; index < boardArrays.length; index++) {
    console.log(boardArrays[index].join(""));
  }
}

function takingInput() {
  const response = prompt("w for up, a for left, s for down and d for right").toLowerCase().trim();
  if (MOVES.length - MOVES.indexOf(response) === MOVES.indexOf(lastUsedMove) + 1) return takingInput();

  if (MOVES.includes(response)) {
    lastUsedMove = response;
    return response;
  }

  return lastUsedMove;
}

function checkIfWall(pos) {
  return boardArrays[pos[0]][pos[1]] === WL;
}

function changePos(response, point) {
  const direcion = getDirection(response);
  const headPos = getHeadPosition();
  moveAccordingResponse(headPos[0], headPos[1], direcion[0], direcion[1], point);
}

function addBody() {
  const directionToAdd = getDirection(lastUsedMove);
  addBodyPosition(-directionToAdd[0], -directionToAdd[1]);
  const tail = getTailPosition();
  boardArrays[tail[0]][tail[1]] = PLBODY;
}

function addBodyPosition(x, y) {
  const tailPos = getTailPosition();

  if (checkIfWall([tailPos[0] + x, tailPos[1] + y])) {
    body.unshift([tailPos[0] - x, tailPos[1] - y]);
    return;
  }

  body.unshift([body[0][0] + x, body[0][1] + y]);
}

function movePlayerBody() {
  for (let index = 0; index < body.length - 1; index++) {

    const currentBody = body[index];
    const frontBody = body[index + 1];

    currentBody[0] = frontBody[0];
    currentBody[1] = frontBody[1];
    boardArrays[currentBody[0]][currentBody[1]] = PLBODY;
  }
}

function moveAccordingResponse(x, y, addX, addY, point) {
  if (checkIfWall([x + addX, y + addY]) || ifTouchOwnBody(x + addX, y + addY)) {
    showBoard();
    prompt("You Loose, Your score is", point);
    Deno.exit(0);
  }

  const tailPos = getTailPosition();

  boardArrays[tailPos[0]][tailPos[1]] = ES;
  movePlayerBody();

  body[body.length - 1] = [x + addX, y + addY];
  boardArrays[x + addX][y + addY] = PL;
}

function isEaten() {
  const headPos = getHeadPosition();
  return headPos[0] === TARGET[0] && headPos[1] === TARGET[1];
}

function play(point = 0) {
  const userResponse = takingInput();
  console.clear();
  changePos(userResponse, point);

  if (isEaten()) {
    addBody();
    point = point + 1;
    setTarget();
  }

  showBoard();
  console.log(`score :- ${point}`);
  return play(point);
}

function main() {
  console.clear();
  setTarget();
  showBoard();
  play();
}

main();
