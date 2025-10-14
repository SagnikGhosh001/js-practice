const WL = "🟫";
const PL = "🐭";
const ES = "  ";
let START = [16, 1];
const END = [17, 16];

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

function moveAccordingResponse(x, y, addX, addY) {
  if (checkIfNotWall([x + addX, y + addY])) {
    mazeArrays[x + addX][y + addY] = PL;
    mazeArrays[x][y] = "  ";
    START = [x + addX, y + addY];
  }
}

function autoSolve(move = 0) {
  if (START[0] === END[0] && START[1] === END[1]) {
    console.log(move);
    return
  }
  
  const randomOfSetForX = randomNumberBetween(-1, 1);
  const randomOfSetForY = randomNumberBetween(-1, 1);
  console.log(randomOfSetForX, randomOfSetForY);
  console.clear();
  moveAccordingResponse(START[0], START[1], randomOfSetForX, randomOfSetForY);
  showMaze()
  return autoSolve(move + 1);
}

function main() {
  showMaze();
  prompt("")
  autoSolve();
}

main();
