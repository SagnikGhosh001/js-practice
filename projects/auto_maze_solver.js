const WL = "🟫";
const PL = "🐭";
const CH = "🧀";
const ES = "  ";
let START = [];
let END = [];
const USED_PATH = [];
const availablePath = [];
let mazeArrays = [];

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function putValue(size) {
  for (let i = 0; i < size; i++) {
    mazeArrays[i] = [];
    for (let j = 0; j < size; j++) {
      mazeArrays[i][j] = WL;
    }
  }
}

function setStart(size) {
  START = [1, randomNumberBetween(1, size - 1)];
  mazeArrays[START[0]][START[1]] = PL
}

function setEnd(size) {
  END = [size - 2, randomNumberBetween(1, size - 1)];
  mazeArrays[END[0]][END[1]] = CH;
}

function showMaze() {
  for (let index = 0; index < mazeArrays.length; index++) {
    console.log(mazeArrays[index].join(""));
  }
}

function checkIfNotSpace(pos) {
  if (pos[0] > 0 && pos[0] < mazeArrays.length - 1 && pos[1] > 0 && pos[1] < mazeArrays[0].length - 1) {
    return mazeArrays[pos[0]][pos[1]] !== ES;
  }
  return false;
}

function checkIfPathAlreadyUsed(pos) {
  for (let index = 0; index < USED_PATH.length; index++) {
    const currentUsedPath = USED_PATH[index];
    if (currentUsedPath[0] === pos[0] && currentUsedPath[1] === pos[1]) {
      return true;
    }
  }

  return false;
}

function moveAccordingResponse(x, y, addX, addY) {
  if (checkIfNotSpace([x + addX, y + addY])) {
    mazeArrays[x + addX][y + addY] = PL;
    mazeArrays[x][y] = "  ";
    START = [x + addX, y + addY];
    USED_PATH.push(START);
    return true;
  }

  return false;
}

function pushAvailablePath(x, y, addX, addY) {
  if (mazeArrays[x + addX][y + addY] !== WL && !checkIfPathAlreadyUsed([x + addX, y + addY])) {
    availablePath.push([x + addX, y + addY]);
  }
}

function delay(sec) {
  for (let index = 0; index < 100000000 * sec; index++) {
  }
}

function autoCreate(size) {
  while (START[0] !== END[0] || START[1] !== END[1]) {

    pushAvailablePath(START[0], START[1], 0, 1);
    pushAvailablePath(START[0], START[1], 1, 0);
    pushAvailablePath(START[0], START[1], 0, -1);
    pushAvailablePath(START[0], START[1], -1, 0);

    let moved = false;

    while (availablePath.length > 0 && !moved) {
      const possiblePath = availablePath.pop();
      const nextX = possiblePath[0];
      const nextY = possiblePath[1];

      const dx = nextX - START[0];
      const dy = nextY - START[1];
      moved = moveAccordingResponse(START[0], START[1], dx, dy);
    }

    if (USED_PATH.length > 0 && !moved) {
      const possiblePath = USED_PATH.pop();
      mazeArrays[START[0]][START[1]] = VIS;
      START = possiblePath;
      mazeArrays[START[0]][START[1]] = PL;
    }
    delay(7);
    console.clear();

    showMaze()
  }

}

function main(size) {
  putValue(size);
  setStart(size);
  setEnd(size);
  showMaze();
  prompt("")
  autoCreate(size);
}

main(30);
