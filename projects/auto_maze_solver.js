const WL = "🟫";
const PL = "🐭";
const VIS = "🐾";
const ES = "  ";
let START = [16, 1];
const END = [16, 16];
const USED_PATH = [];
const availablePath = [];

let mazeArrays = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, ES, ES, ES, WL, ES, ES, ES, WL, ES, ES, ES, ES, ES, ES, WL, ES, WL],
  [WL, WL, WL, ES, WL, ES, WL, ES, WL, ES, WL, ES, WL, ES, WL, WL, ES, WL],
  [WL, ES, ES, ES, WL, ES, WL, ES, WL, ES, WL, ES, WL, ES, WL, ES, ES, WL],
  [WL, ES, WL, WL, WL, ES, WL, ES, WL, ES, WL, ES, WL, ES, WL, ES, WL, WL],
  [WL, ES, WL, ES, ES, ES, WL, ES, ES, ES, WL, ES, WL, ES, WL, ES, ES, WL],
  [WL, ES, WL, ES, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL, ES, WL],
  [WL, WL, WL, WL, WL, WL, WL, ES, WL, WL, WL, WL, WL, ES, WL, WL, ES, WL],
  [WL, ES, ES, ES, ES, ES, WL, ES, WL, ES, ES, ES, ES, ES, WL, ES, ES, WL],
  [WL, ES, WL, WL, WL, ES, WL, ES, WL, ES, WL, WL, WL, WL, WL, ES, WL, WL],
  [WL, ES, WL, ES, ES, ES, WL, ES, WL, ES, ES, ES, ES, ES, WL, ES, ES, WL],
  [WL, ES, WL, ES, WL, WL, WL, ES, WL, WL, WL, WL, WL, ES, WL, WL, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL, ES, WL, WL, ES, WL],
  [WL, WL, ES, WL, WL, WL, WL, WL, WL, ES, WL, WL, WL, ES, ES, WL, ES, WL],
  [WL, WL, ES, ES, ES, ES, ES, ES, WL, ES, WL, WL, WL, WL, ES, WL, ES, WL],
  [WL, PL, ES, WL, WL, ES, WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, "🧀", WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
];


function showMaze() {
  for (let index = 0; index < mazeArrays.length; index++) {
    console.log(mazeArrays[index].join(""));
  }
}

function checkIfNotWall(pos) {
  if (pos[0] >= 0 && pos[0] < mazeArrays.length && pos[1] >= 0 && pos[1] < mazeArrays[0].length) {
    return mazeArrays[pos[0]][pos[1]] !== WL;
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
  if (checkIfNotWall([x + addX, y + addY])) {
    mazeArrays[x + addX][y + addY] = PL;
    mazeArrays[x][y] = VIS;
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

function autoSolve(point = 0) {
  while (!(START[0] === END[0] && START[1] === END[1])) {

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
    point++;
    showMaze()
  }
  console.log(point);

}

function main() {
  showMaze();
  prompt("")
  autoSolve();
}

main();
