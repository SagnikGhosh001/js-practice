const WHITE = "⬜️";
const CROSS = "❌";
const CIRCLE = "⭕️";
const BOARD = [
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
];
const WINNING_COMBINATION = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

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

function changeBoard(pos, userResponse) {
  const innerPos = Math.floor((pos - 1) / 3);
  const outerPos = (pos - 1) % 3;
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

function gameStop(moves, players, currentPlayer, p1Moves, p2Moves) {
  if (isWinner(moves)) {
    showBoard();
    console.log(`${players[currentPlayer]} won`);
    return true
  }
  if (p1Moves.length + p2Moves.length === 9) {
    showBoard();
    console.log("Match Draw");
    return true;
  }
  return false;
}

function reset() {
  for (let i = 0; i < BOARD.length; i++) {
    BOARD[i] = [WHITE, WHITE, WHITE];
  }
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

function checkIfPositionIsUsed(pos, p1Moves, p2Moves) {
  if (!p1Moves.includes(pos) && !p2Moves.includes(pos)) {
    return false;
  }
  console.log("This position is already used");
  return true;
}

function positionArraySelect(currentPlayer, p1Moves, p2Moves) {
  return currentPlayer === 0 ? p1Moves : p2Moves
}

function playerTurn(currentPlayer, players, p1Moves = [], p2Moves = []) {
  const symbols = [CROSS, CIRCLE];

  showBoard();
  console.log(`${players[currentPlayer]} is Playing`);

  let pos = selectPosition();
  while (checkIfPositionIsUsed(pos, p1Moves, p2Moves)) {
    pos = selectPosition();
  }

  const moves = positionArraySelect(currentPlayer, p1Moves, p2Moves);
  moves.push(pos);

  const symbol = symbols[currentPlayer];
  changeBoard(pos, symbol);

  if (gameStop(moves, players, currentPlayer, p1Moves, p2Moves)) {
    dowantToPlayAgain();
    return;
  }
  console.clear();
  const nextPlayer = 1 - currentPlayer;
  return playerTurn(nextPlayer, players, p1Moves, p2Moves);
}

function play() {
  console.clear();
  const firstPlayerName = prompt("Enter First Player Name:-");
  const secondPlayerName = prompt("Enter Second Player Name:-");
  playerTurn(0, [firstPlayerName, secondPlayerName]);
}

function main() {
  play();
}

main();
