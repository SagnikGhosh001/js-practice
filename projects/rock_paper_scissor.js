const ELEMENTS = ["rock", "paper", "scissor"];

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function randomChoose() {
  return ELEMENTS[randomNumberBetween(0, 2)];
}

function userInputAsStone(aiResponse) {
  if (aiResponse === ELEMENTS[1]) {
    console.log("You Lose");
    return;
  }

  console.log("You Won");
  return;
}

function userInputAsPaper(aiResponse) {
  if (aiResponse === ELEMENTS[0]) {
    console.log("You Won");
    return;
  }

  console.log("You Loose");
  return;

}

function userInputAsScissor(aiResponse) {
  if (aiResponse === ELEMENTS[0]) {
    console.log("You Loose");
    return;
  }

  console.log("You Won");
  return;
}

function takingInput() {
  let response = prompt("1.rock\n2.paper\n3.scissor\nEnter your choise:-");
  const responseToNumber = parseInt(response) - 1;

  if (ELEMENTS.includes(ELEMENTS[responseToNumber])) {
    response = ELEMENTS[responseToNumber];
  }

  if (!ELEMENTS.includes(response)) {
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
    return;
  }

  console.log("Your Resonse:-", userResponse, symbolSelector(userResponse));
  console.log("Ai Response:-", aiResponse, symbolSelector(aiResponse));

  if (userResponse === aiResponse) {
    console.log("DRAW");
    return;
  }

  switch (userResponse) {
    case ELEMENTS[0]:
      userInputAsStone(aiResponse);
      break;
    case ELEMENTS[1]:
      userInputAsPaper(aiResponse);
      break;
    case ELEMENTS[2]:
      userInputAsScissor(aiResponse);
      break;
  }

  console.log("\n");
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
