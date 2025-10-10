const MOVES = ["rock", "paper", "scissor"];
const MOVES_FOR_WIN = ["paper", "scissor", "rock"];

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function randomChoose() {
  return MOVES[randomNumberBetween(0, 2)];
}

function isWon(userResponse, aiResponse) {
  return MOVES_FOR_WIN.indexOf(userResponse) === MOVES.indexOf(aiResponse);
}

function isDraw(userResponse, aiResponse) {
  return userResponse === aiResponse;
}

function takingInput() {
  let response = prompt("1.rock\n2.paper\n3.scissor\nEnter your choise:-");
  const responseToNumber = parseInt(response) - 1;

  if (MOVES.includes(MOVES[responseToNumber])) {
    response = MOVES[responseToNumber];
  }

  if (!MOVES.includes(response)) {
    return -1;
  }

  return response;
}

function symbolSelector(input) {
  if (input === "scissor") return "✂️";
  if (input === "rock") return "🪨";
  return "📈";
}

function playingGame() {
  const userResponse = takingInput();
  const aiResponse = randomChoose();

  if (userResponse === -1) {
    console.log("choose valid guess");
    doYouWantToPlayAgain();
  }

  console.log("Your Resonse:-", userResponse, symbolSelector(userResponse));
  console.log("Ai Response:-", aiResponse, symbolSelector(aiResponse));

  const result = isDraw(userResponse, aiResponse) ? "DRAW" : (isWon(userResponse, aiResponse) ? "WON" : "LOOSE");

  console.log(result, "\n");
  doYouWantToPlayAgain();
}

function doYouWantToPlayAgain() {
  const response = confirm("do you want to play again ?");
  if (response) {
    playingGame();
    return;
  }

  console.log("See You Later");
}

function main() {
  playingGame();
}

main();
