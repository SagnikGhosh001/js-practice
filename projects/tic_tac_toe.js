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

function isWinner(symbol) {
  for (let i = 0; i < WINNING_COMBINATION.length; i++) {
    const winningCombo = WINNING_COMBINATION[i];
    const pos1 = winningCombo[0] - 1;
    const pos2 = winningCombo[1] - 1;
    const pos3 = winningCombo[2] - 1;

    const row1 = Math.floor(pos1 / 3);
    const col1 = pos1 % 3;
    const row2 = Math.floor(pos2 / 3);
    const col2 = pos2 % 3;
    const row3 = Math.floor(pos3 / 3);
    const col3 = pos3 % 3;

    if (BOARD[row1][col1] === symbol && BOARD[row2][col2] === symbol && BOARD[row3][col3] === symbol) {
      return true;
    }
  }
  return false;
}

function gameStop(moves, symbol, players, currentPlayer) {
  if (isWinner(symbol)) {
    showBoard();
    console.log(`${players[currentPlayer]} won`);
    return true
  }
  if (moves.length === 9) {
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

function checkIfPositionIsUsed(pos, moves) {
  if (!moves.includes(pos)) {
    return false;
  }
  console.log("This position is already used");
  return true;
}

function playerTurn(currentPlayer, players, moves = []) {
  const symbols = [CROSS, CIRCLE];

  showBoard();
  console.log(`${players[currentPlayer]} is Playing`);

  let pos = selectPosition();
  while (checkIfPositionIsUsed(pos, moves)) {
    pos = selectPosition();
  }

  moves.push(pos);

  const symbol = symbols[currentPlayer];
  changeBoard(pos, symbol);

  if (gameStop(moves, symbol, players, currentPlayer)) {
    dowantToPlayAgain();
    return;
  }
  console.clear();
  const nextPlayer = 1 - currentPlayer;
  return playerTurn(nextPlayer, players, moves);
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
