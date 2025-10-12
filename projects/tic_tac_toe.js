const WHITE = "⬜️";
const CROSS = "❌";
const CIRCLE = "⭕️";
const BOARD = [
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
];
const usedPosition = [];
const WINNING_COMBINATION = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 6]];
const firstPlayerUsedPosition = [];
const secondPlayerUsedPosition = [];

function showBoard() {
  for (let index = 0; index < BOARD.length; index++) {
    console.log(BOARD[index].join(""));
  }
}

// function takingInput() {
//   const input = prompt("Enter your choice 1 for cross 2 for circle:-");
//   if (input !== "1" && input !== "2") {
//     console.log(("Enter valid Input"));
//     return takingInput();
//   }
//   return input === "1" ? CROSS : CIRCLE;
// }

function selectPosition() {
  const input = prompt("Enter your choice between 1 to 9:-");
  const selectedPos = parseInt(input);
  if (selectedPos < 1 || selectedPos > 9) {
    console.log(("Enter valid Input"));
    return selectPosition();
  }
  return selectedPos;
}

function changeBoard(selectedPos, userResponse) {
  let innerPos = 0;
  switch (selectedPos) {
    case 1:
    case 2:
    case 3:
      innerPos = 0;
      break;
    case 4:
    case 5:
    case 6:
      innerPos = 1;
      break;
    case 7:
    case 8:
    case 9:
      innerPos = 2;
      break;
  }

  const outerPos = (selectedPos - 1) % 3;
  return BOARD[innerPos][outerPos] = userResponse;
}

function playerOneTurn() {
  console.log("First Player is Playing");
  const selectedPos = selectPosition();
  if (usedPosition.includes(selectedPos)) {
    console.log("this position is already used");
    return playerOneTurn();
  }
  firstPlayerUsedPosition.push(selectedPos);
  usedPosition.push(selectedPos);
  changeBoard(selectedPos, CROSS);
}

function playerTwoTurn() {
  console.log("Second Player is Playing");
  const selectedPos = selectPosition();
  if (usedPosition.includes(selectedPos)) {
    console.log("this position is already used");
    return playerTwoTurn();
  }
  secondPlayerUsedPosition.push(selectedPos);
  usedPosition.push(selectedPos);
  changeBoard(selectedPos, CIRCLE);
}

function isWinner(playerUsedPositions) {
  for (let i = 0; i < WINNING_COMBINATION.length; i++) {
    const winningCombo = WINNING_COMBINATION[i];
    let count = 0;
    for (let j = 0; j < winningCombo.length; j++) {
      if (playerUsedPositions.includes(winningCombo[j])) {
        count++;
      }
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
}

function gameStop() {
  if (isWinner(firstPlayerUsedPosition)) {
    console.log(`Player One ${CROSS} won`);
    return true
  }
  if (isWinner(secondPlayerUsedPosition)) {
    console.log(`Player Two ${CIRCLE} won`);
    return true;
  }
  if (usedPosition.length === 9) {
    console.log("Match Draw");
    return true;
  }
  return false;
}

function play() {
  console.clear();
  showBoard();
  playerOneTurn();
  showBoard();
  if (gameStop()) return
  playerTwoTurn();
  if (gameStop()) {
    showBoard();
    return
  }
  return play();

}

function main() {
  play();
}

main();
