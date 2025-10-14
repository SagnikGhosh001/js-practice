const WL = "🟫";
const PL = "🐭";
const VIS = "🐾";
const ES = "  ";
let START = [16, 1];
const END = [17, 16];
const USED_PATH = [];

let mazeArrays = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, ES, ES, ES, ES, ES, ES, WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, ES, WL, WL, WL, ES, WL, WL, ES, WL, WL, WL, ES, WL, WL, WL, ES, WL],
  [WL, ES, WL, ES, ES, ES, ES, ES, ES, WL, ES, WL, ES, ES, ES, WL, ES, WL],
  [WL, ES, WL, ES, WL, WL, WL, WL, ES, WL, ES, WL, ES, WL, ES, WL, ES, WL],
  [WL, ES, WL, ES, ES, ES, ES, ES, ES, WL, ES, ES, WL, WL, ES, WL, ES, WL],
  [WL, ES, WL, WL, WL, ES, WL, WL, WL, WL, WL, ES, WL, WL, ES, WL, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL, ES, ES, ES, ES, WL, ES, WL],
  [WL, ES, WL, WL, WL, ES, WL, WL, WL, ES, WL, WL, WL, ES, WL, WL, WL, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL, ES, ES, ES, ES, WL],
  [WL, ES, WL, WL, WL, WL, WL, WL, ES, WL, WL, WL, WL, ES, WL, WL, ES, WL],
  [WL, ES, WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL, ES, ES, WL, ES, WL],
  [WL, ES, WL, ES, WL, WL, WL, WL, WL, WL, WL, WL, WL, ES, WL, WL, ES, WL],
  [WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL, ES, WL, WL, ES, WL],
  [WL, WL, ES, WL, WL, WL, WL, WL, WL, ES, WL, WL, WL, ES, ES, WL, ES, WL],
  [WL, WL, ES, ES, ES, ES, ES, ES, WL, ES, WL, WL, WL, WL, ES, WL, ES, WL],
  [WL, PL, ES, WL, WL, ES, WL, ES, ES, ES, ES, ES, ES, ES, ES, ES, ES, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, "🧀", WL]
]

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function showMaze() {
  for (let index = 0; index < mazeArrays.length; index++) {
    console.log(mazeArrays[index].join(""));
  }
}

function checkIfNotWall(pos) {
  if (pos[0] < mazeArrays.length && pos[1] < mazeArrays.length) {
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
  } else {
    const randomAddX = randomNumberBetween(-1, 1);
    const randomAddY = randomNumberBetween(-1, 1);
    return moveAccordingResponse(x, y, randomAddX, randomAddY);
  }
}

function autoSolve(move = 0) {

  if (START[0] === END[0] && START[1] === END[1]) {
    console.log(move);
    return
  }
  const dx = END[0] - START[0];
  const dy = END[0] - START[1];

  const addX = dx !== 0 ? Math.sign(dx) : 0;
  const addY = dx !== 0 ? Math.sign(dy) : 0;

  console.clear();
  moveAccordingResponse(START[0], START[1], addX, addY);
  showMaze()
  return autoSolve(move + 1);
}

function main() {
  showMaze();
  prompt("")
  autoSolve();
}

main();
