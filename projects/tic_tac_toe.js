const WHITE = "⬜️";
const CROSS = "❌";
const CIRCLE = "⭕️";
const BOARD = [
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
];
const usedPosition = [];
const WINNING_COMBINATION = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
const firstPlayerUsedPosition = [];
const secondPlayerUsedPosition = [];

function showBoard() {
  for (let index = 0; index < BOARD.length; index++) {
    console.log(BOARD[index].join(""));
  }
}

function selectPosition() {
  const input = prompt("Enter your choice between 1 to 9:-");
  const selectedPos = parseInt(input);
  if (isNaN(selectedPos) || selectedPos < 1 || selectedPos > 9) {
    console.log("Enter valid Input");
    return selectPosition();
  }
  return selectedPos;
}

function changeBoard(selectedPos, userResponse) {
  const innerPos = selectedPos <= 3 ? 0 : (selectedPos <= 6 ? 1 : 2);
  const outerPos = (selectedPos - 1) % 3;
  return BOARD[innerPos][outerPos] = userResponse;
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

function gameStop(positionArray, symbol) {
  if (isWinner(positionArray)) {
    showBoard();
    console.log(`Player ${symbol} won`);
    return true
  }
  if (usedPosition.length === 9) {
    showBoard();
    console.log("Match Draw");
    return true;
  }
  return false;
}

function reset() {
  for (let i = 0; i < BOARD.length; i++) {
    BOARD[i] = [WHITE, WHITE, WHITE]; // Reset the board
  }
  usedPosition.length = 0;
  firstPlayerUsedPosition.length = 0;
  secondPlayerUsedPosition.length = 0;
}


function dowantToPlayAgain() {
  const response = confirm("Do you want to play again:-");
  if (response) {
    console.clear();
    reset();
    play();
  }
  console.log("Thx for playing");
  return;
}

function checkIfPositionIsUsed(selectedPos, currentPlayer) {
  if (usedPosition.includes(selectedPos)) {
    console.log("this position is already used");
    return playerTurn(currentPlayer);
  }
}

function positionArraySelect(currentPlayer) {
  return currentPlayer === 0 ? firstPlayerUsedPosition : secondPlayerUsedPosition
}

function symbolSelect(currentPlayer) {
  return currentPlayer === 0 ? CROSS : CIRCLE;
}

function pushedValueIntoArray(postionArray, selectedPos) {
  postionArray.push(selectedPos);
  usedPosition.push(selectedPos);
}

function playerTurn(currentPlayer) {
  const playerDetails = [CROSS, CIRCLE];
  showBoard();
  console.log(`${playerDetails[currentPlayer]} is Playing`);

  const selectedPos = selectPosition();

  checkIfPositionIsUsed(selectedPos, currentPlayer);
  const postionArray = positionArraySelect(currentPlayer);
  pushedValueIntoArray(postionArray, selectedPos);

  const symbol = symbolSelect(currentPlayer);
  changeBoard(selectedPos, symbol);

  if (gameStop(postionArray, symbol)) dowantToPlayAgain();
  console.clear();

  return playerTurn(Math.abs(currentPlayer - 1));
}

function play() {
  playerTurn(0);
}

function main() {
  play();
}

main();
