const TOSS_COIN = ["h", "t"];
const BAT_BALL = ["bat", "ball"];
const PLAYERS = ["user", "ai"];
const TOTAL_RUN = [0, 0];
const WHO_IS_OUT = [false, false];
let track_current_player = 0;

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function chooseBatBall() {
  const userResponse = parseInt(prompt("Press 0 for bat and 1 for ball:-"));
  return userResponse >= 0 || userResponse <= 1 ? userResponse : chooseBatBall();
}

function aiChooseBatBall() {
  return randomNumberBetween(0, 1);
}

function chooseHeadAndTail() {
  const userResponse = prompt("Type 'h' for head and 't' for tail:-").toLowerCase();
  if (userResponse !== "h" && userResponse !== 't') {
    console.log("Invalid Input");
    chooseHeadAndTail();
  }

  const generatedResponse = randomNumberBetween(0, 1);
  if (userResponse === TOSS_COIN[generatedResponse]) {
    console.log("You Won Toss");
    track_current_player = PLAYERS[chooseBatBall()];
  } else {
    const aiResponse = aiChooseBatBall();
    console.log("You Loose Toss, AI choose to", BAT_BALL[aiResponse]);
    track_current_player = PLAYERS[Math.abs(aiResponse - 1)];
  }
}

function formatHeading() {
  console.log("Batting", track_current_player);
  console.log("Your Run", TOTAL_RUN[0]);
  console.log("Ai Run", TOTAL_RUN[1]);
  console.log("\n");
}

function takingInput() {
  const response = prompt("Press Any Number between 0 to 6:-");
  const userResponse = parseInt(response);

  if (userResponse >= 0 && userResponse <= 6) {
    return userResponse;
  }
  console.log("Choose between 0 to 6:-");
  return takingInput();
}

function whoWon() {
  if (TOTAL_RUN[0] > TOTAL_RUN[1] && WHO_IS_OUT[1]) {
    console.log("You Won");
    return;
  }

  if (TOTAL_RUN[0] < TOTAL_RUN[1] && WHO_IS_OUT[0]) {
    console.log("You Loose");
    return;
  }
}

function playerBatitng() {
  formatHeading();
  const userResponse = takingInput();
  const aiResponse = randomNumberBetween(0, 6);
  console.log("You choose", userResponse);
  console.log("Ai choose", aiResponse);

  if (userResponse === aiResponse) {
    console.log("Out\n");
    track_current_player = PLAYERS[1];
    WHO_IS_OUT[0] = true;
    whoWon();
    return;
  }
  
  TOTAL_RUN[0] += userResponse;
  playerBatitng();
}

function aiBatitng() {
  formatHeading();
  const userResponse = takingInput();
  const aiResponse = randomNumberBetween(0, 6);
  console.log("You choose", userResponse);
  console.log("Ai choose", aiResponse);
  
  if (userResponse === aiResponse) {
    console.log("Out\n");
    track_current_player = PLAYERS[0];
    WHO_IS_OUT[1] = true;
    whoWon();
    return;
  }

  TOTAL_RUN[1] += aiResponse;
  aiBatitng();
}

function play() {
  chooseHeadAndTail();

  if (track_current_player === "user") {
    playerBatitng();
    aiBatitng();
  } else {
    aiBatitng();
    playerBatitng();
  }

  console.log("Your Run", TOTAL_RUN[0]);
  console.log("Ai Run", TOTAL_RUN[1]);
}

play();
