const WAIT = "wait";
const TOUCH = "touch";
const BREAK = "break";
const RUN = "run";
const HIDE = "hide";
const OPENDOOR = "opendoor";
const SHOUT = "shout";
const SLEEP = "sleep";
const DIG = "dig";
const MOVES = [[WAIT, TOUCH, BREAK], [RUN, HIDE, OPENDOOR], [SHOUT, SLEEP, DIG]];
const USER_RESPONSE = [];
const WINING_COMBO = [BREAK, HIDE, DIG];

function takingInput() {
  const response = prompt("Please enter your choice:-").trim().toLowerCase();
  return response;
}

function inputValidation(validMoves, response) {
  return validMoves.includes(response);
}
function sceneMsg(access) {
  const msg = access === 0 ? "You wake up in the same room. A clock ticks backward."
    : access === 1 ? "You enter a dark corridor." : "You find yourself in a garden.";
  return msg;
}

function scene(access) {
  console.log(`Scene ${access + 1} - ${sceneMsg(access)}: ${MOVES[access]}`);
  const userResponse = takingInput();

  if (!inputValidation(MOVES[access], userResponse)) {
    console.log("Please give valid input");
    return scene(access);
  }

  USER_RESPONSE[access] = userResponse;
  console.log("\n");
}

function isWon() {
  return USER_RESPONSE.join("") === WINING_COMBO.join("");
}

function clue() {
  const rule1 = USER_RESPONSE[0] === BREAK && USER_RESPONSE[2] === DIG && USER_RESPONSE[1] !== HIDE;
  const rule2 = USER_RESPONSE[0] !== BREAK && USER_RESPONSE[2] === DIG;
  const rule3 = USER_RESPONSE[2] === SLEEP;
  const rule4 = USER_RESPONSE[1] === RUN && USER_RESPONSE[2] === SHOUT;
  const rule5 = USER_RESPONSE[0] === BREAK;
  const rule6 = USER_RESPONSE[1] === HIDE;


  if (rule5 && !rule1 && !rule2) {
    return "The clock freezes for a moment. You feel reality bend.";
  }

  if (rule1) {
    return "You see the light begin to change — but something still watches you...";
  }

  if (rule2) {
    return "You uncover something, but it vanishes as the loop resets.";
  }

  if (rule3) {
    return "You close your eyes. When you open them, nothing feels real. The loop continues forever.";
  }

  if (rule4) {
    return "Your shout echoes. The air splits open. Something grabs you. Time snaps back.";
  }

  if (rule6) {
    return "You stay silent. Footsteps fade away. Something unseen passes by.";
  }

  return "Time loops again. Everything resets.";
}

function play(memory, turn = 5) {
  if (turn === 0) {
    console.clear();
    console.log("You Loose and trapped for eternity");
    return;
  }
  console.log("\nMemory:-", memory, "\n")

  for (let term = 0; term < 3; term++) {
    scene(term);
  }

  if (isWon()) {
    console.log("\nYou shatter the clock, hide from the echo, and dig into the roots.\nLight floods in — the loop collapses.");
    console.log("You are free.\n");
    console.log("Thanks for playing!\n");
    return;
  }

  memory = clue();
  play(memory, turn - 1)
}

function main() {
  console.log("Welcome to the Time Loop Trial.");
  console.log("You have 3 moments before the loop resets.");
  play("You don't have any memory now");
}
main()
