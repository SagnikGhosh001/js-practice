const BOMB = "💣\t";
const SAFE = "✅\t";
const BOARD = [];
const BOMB_BOARD = [];

function putVlaues() {
  for (let index = 0; index < 100; index++) {
    BOARD[index] = (index + 1) + "\t";
    BOMB_BOARD[index] = (index + 1) + "\t";
  }
}

function showBoard(array) {
  for (let index = 0; index < array.length; index = index + 10) {
    console.log(array.slice(index, index + 10).join(""));
  }
}

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function randomNmberForBomb(times) {
  const bombPos = [];
  while (times >= 0) {
    const pos = randomNumberBetween(0, 99);
    BOMB_BOARD[pos] = BOMB;
    times--;
    bombPos.push(pos);
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

function checkifBombFound(pos, bombPos) {  
  return bombPos.includes(pos);
}

function play(bombPos, usedPos = [], point = 0) {
  console.log("Your point is,", point);
  let pos = takingUserResponse();

  while (checkIfPosIsUsed(usedPos, pos)) {
    pos = takingUserResponse();
  }

  usedPos.push(pos);

  if (checkifBombFound(pos, bombPos)) {
    console.log("Bomb Found");
    showBoard(BOMB_BOARD);
    console.log("You loose, your point is", point);
    return;
  }
  point++;
  BOARD[pos - 1] = SAFE;
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
  putVlaues();
  showBoard(BOARD);
  const level = levelSelect();
  const bombCount = level === 1 ? 25 : (level === 2 ? 50 : 75);
  const bombPos = randomNmberForBomb(bombCount);
  console.log(bombPos);
  play(bombPos);
}

main();
