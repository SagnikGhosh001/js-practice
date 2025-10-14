const WL = "🟫";
const PL = "🐭";
const VIS = "🐾";
const ES = "  ";
let START = [16, 1];
const END = [16, 16];
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
  [WL, PL, ES, WL, WL, ES, WL, ES, ES, ES, ES, ES, ES, ES, ES, WL, "🧀", WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
]

function showMaze() {
  for (let index = 0; index < mazeArrays.length; index++) {
    console.log(mazeArrays[index].join(""));
  }
}

function checkIfNotWall(pos) {
  return mazeArrays[pos[0]][pos[1]] !== WL;
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
  if (checkIfNotWall([x + addX, y + addY]) && !checkIfPathAlreadyUsed([x + addX, y + addY])) {
    mazeArrays[x + addX][y + addY] = PL;
    mazeArrays[x][y] = VIS;
    START = [x + addX, y + addY];
    USED_PATH.push([x + addX, y + addY]);
    return true;
  }

  return false;
}

function autoSolve(move = 0) {

  if (START[0] === END[0] && START[1] === END[1]) {
    console.log(move);
    return
  }
  const dx = END[0] - START[0];
  const dy = END[1] - START[1];

  const addX = dx !== 0 ? Math.sign(dx) : 0;
  const addY = dy !== 0 ? Math.sign(dy) : 0;

  // console.clear();
  const moved = moveAccordingResponse(START[0], START[1], addX, addY);
  if (!moved) {
    USED_PATH.pop();
    const lastPos = USED_PATH[USED_PATH.length - 1] || START;
    START = lastPos;
    return autoSolve(move + 1);
  }

  showMaze()
  return autoSolve(move + 1);
}

function main() {
  showMaze();
  prompt("")
  autoSolve();
}

main();
