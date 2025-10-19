const WL = "🟫";
const PL = "🐍";
const PLBODY = "🟠";
const ES = "  ";
const TR = "🕷️"
let head = [9, 8];
const body = [head];
let lastUsedMove = "";
let lastUsedMoveFrequency = 0;
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
 
function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
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
  console.clear();
  if (response === "w" || response === "a" || response === "s" || response === "d") {
    lastUsedMove = response;
    return response;
  }
  return lastUsedMove;
}

function checkIfWall(pos) {
  return boardArrays[pos[0]][pos[1]] === WL;
}

function changePos(response, point) {
  if (response === "a") {
    moveAccordingResponse(body[body.length - 1][0], body[body.length - 1][1], 0, -1, point)
  }

  if (response === "s") {
    moveAccordingResponse(body[body.length - 1][0], body[body.length - 1][1], 1, 0, point)
  }

  if (response === "d") {
    moveAccordingResponse(body[body.length - 1][0], body[body.length - 1][1], 0, 1, point)
  }

  if (response === "w") {
    moveAccordingResponse(body[body.length - 1][0], body[body.length - 1][1], -1, 0, point)
  }
}

function addBody() {
  if (lastUsedMove === "a") {
    addBodyPosition(0, 1);
  }

  if (lastUsedMove === "s") {
    addBodyPosition(-1, 0);
  }

  if (lastUsedMove === "d") {
    addBodyPosition(0, -1);
  }

  if (lastUsedMove === "w") {
    addBodyPosition(1, 0);
  }

  boardArrays[body[0][0]][body[0][1]] = PLBODY;
}

function addBodyPosition(x, y) {
  if (checkIfWall([body[0][0] + x, body[0][1] + y])) {
    body.unshift([body[0][0] - x, body[0][1] - y]);
    return;
  }

  body.unshift([body[0][0] + x, body[0][1] + y]);
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

function moveAccordingResponse(x, y, addX, addY, point) {
  if (checkIfWall([x + addX, y + addY]) || ifTouchOwnBody(x + addX, y + addY)) {
    showBoard();
    prompt("You Loose, Your score is", point);
    Deno.exit(0);
  }

  boardArrays[body[0][0]][body[0][1]] = ES;

  for (let index = 0; index < body.length - 1; index++) {

    const currentBody = body[index];
    const frontBody = body[index + 1];

    currentBody[0] = frontBody[0];
    currentBody[1] = frontBody[1];
    boardArrays[currentBody[0]][currentBody[1]] = PLBODY;
  }

  body[body.length - 1] = [x + addX, y + addY];
  boardArrays[x + addX][y + addY] = PL;
}


function play(point = 0) {
  const userResponse = takingInput();
  changePos(userResponse, point);
  showBoard();
  if (body[body.length - 1][0] === TARGET[0] && body[body.length - 1][1] === TARGET[1]) {
    addBody();
    console.clear();
    point = point + 1;
    setTarget();
    showBoard()
  }

  console.log(point);
  return play(point);
}

function main() {
  console.clear();
  setTarget();
  showBoard();
  play();
}

main();
