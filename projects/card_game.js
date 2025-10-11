const TREASURE = "treasure";
const HEAL = "heal";
const TRAP = "trap";
const ATTACK = "attack";
const MYSTERY = "mystery";
const CURSE = "curse";
const BLESSING = "blessing";
const DOUBLE = "double";
const NOTHING = "nothing";
const MIRROR = "mirror";
const VISION = "vision";
const DRAIN = "drain";
const HOPE = "hope";
const MADWHISPER = "mad whisper";
const TWIST = "twist";

const NORMAL = "normal";
const CAUTIOUS = "cautious";
const BOLD = "bold";
const DESPERATE = "desperate";

const CARDS = [TREASURE, HEAL, TRAP, ATTACK, MYSTERY, CURSE, BLESSING, DOUBLE, NOTHING, MIRROR, VISION, DRAIN, HOPE, MADWHISPER, TWIST];

const CARDSMSG = [
  "💬 “You uncover a chest filled with shimmering gold. Fortune smiles upon you.”",
  "💬 “A warm light wraps around your wounds. Strength returns to your body.”",
  "💬 “Hidden blades spring from the shadows. You stagger, bleeding from unseen cuts.”",
  "💬 “A monstrous figure attacks! You fight back fiercely, earning both pain and glory.”",
  "💬 “The card flickers between light and darkness. Fate takes a wild turn.”",
  "💬 “Dark runes burn across your skin. You feel your life and luck slipping away.”",
  "💬 “A gentle glow descends from above. You feel calm, whole, and guided.”",
  "💬 “The air hums with energy — destiny echoes. Your next card will strike twice.”",
  "💬 “A blank card stares back at you. For a moment, nothing happens… and that’s somehow worse.”",
  "💬 “A ghostly reflection shimmers — the last card’s fate repeats itself.”",
  "💬 “The card splits into two shining paths. Two futures appear before you — you must choose one.”",
  "💬 “You feel power surge through you as your life force drains away. Strength bought with pain.”",
  "💬 “A calm voice whispers inside your mind — reminding you who you are. Sanity steadies your soul.”",
  "💬 “You hear whispers that shouldn’t exist. Laughter echoes in your thoughts.”",
  "💬 “The deck convulses — light and shadow trade places. The rules of fate twist around you.”"
];

const ATMOSPHERE = [
  "A chill wind passes through the room.",
  "You hear the shuffle of unseen hands.",
  "Your pulse quickens for no reason.",
  "The deck glows faintly, as if alive.",
  "Something watches you from the dark."
];

let isDouble = false;

const lastCard = [];
const MODES = [NORMAL, CAUTIOUS, BOLD, DESPERATE];
const EFFECT = [1, 0.5, 2, 3];
const PLAYER_STATS = [1, 10, 0, 0];

function formatHeading() {
  console.log(`TURN: ${PLAYER_STATS[0]} | HP: ${PLAYER_STATS[1]} | FP: ${PLAYER_STATS[2]} | MD: ${PLAYER_STATS[3]}`);
}

function askModeChoice() {
  const modeChoice = prompt(`\nHow do you draw? (${NORMAL} / ${CAUTIOUS} / ${BOLD} / ${DESPERATE}):-`).trim();
  if (modeChoice === NORMAL || modeChoice === CAUTIOUS || modeChoice === BOLD || modeChoice === DESPERATE) {
    return modeChoice;
  }

  console.log("Please choose valid mode");
  return askModeChoice();
}

function chooseMultiplier(modeChoose) {
  return EFFECT[MODES.indexOf(modeChoose)];
}

function drawCard() {
  prompt("Are You Ready To Draw a Card");
  return CARDS[randomNumberBetween(0, CARDS.length - 1)];
}

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function mysteryValueGenerate(value) {
  return Math.random() > 0.5 ? value : -value;
}

function randomlyChangeStats() {
  return PLAYER_STATS[randomNumberBetween(0, PLAYER_STATS.length - 1)] += mysteryValueGenerate(5);
}

function changeStats(cardGot, multiplier) {
  switch (cardGot) {
    case TREASURE:
      PLAYER_STATS[2] += 5 * multiplier;
      break;
    case HEAL:
      PLAYER_STATS[1] += 3 * multiplier;
      break;
    case TRAP:
      PLAYER_STATS[1] -= 4 * multiplier;
      break;
    case ATTACK:
      PLAYER_STATS[1] -= 2 * multiplier;
      PLAYER_STATS[2] += 2 * multiplier;
      break;
    case MYSTERY:
      PLAYER_STATS[2] += mysteryValueGenerate(8) * multiplier;
      break;
    case CURSE:
      PLAYER_STATS[1] -= 3 * multiplier;
      PLAYER_STATS[2] -= 3 * multiplier;
      PLAYER_STATS[3] += 1;
      break;
    case BLESSING:
      PLAYER_STATS[1] += 5 * multiplier;
      PLAYER_STATS[2] += 5 * multiplier;
      PLAYER_STATS[3] -= 1;
      break;
    case DOUBLE:
      isDouble = true;
      break;
    case MIRROR:
      return changeStats(lastCard, multiplier);
    case VISION:
      console.log("Yet To Implemet");
      break;
    case DRAIN:
      PLAYER_STATS[1] -= 5 * multiplier;
      PLAYER_STATS[2] += 5 * multiplier;
      PLAYER_STATS[3] += 1;
      break;
    case HOPE:
      PLAYER_STATS[2] += 5 * multiplier;
      PLAYER_STATS[3] -= 3;
      break;
    case MADWHISPER:
      PLAYER_STATS[3] += 3;
      break;
    case TWIST:
      randomlyChangeStats();
      break;
  }
}

function isEnd() {
  if (PLAYER_STATS[1] <= 0) {
    console.log("“Your body fails. The cards consume you.”");
    return true;
  }

  if (PLAYER_STATS[2] >= 50) {
    console.log("“You break the fate cycle. You awaken free.”");
    return true;
  }

  if (PLAYER_STATS[3] >= 10) {
    console.log("“You laugh endlessly. The world fades.”");
    return true;
  }

  if (PLAYER_STATS[0] > 20) {
    console.log("“You outlast fate’s patience. The deck vanishes, leaving silence.”");
    return true;
  }
  return false;
}

function play() {
  console.log(ATMOSPHERE[randomNumberBetween(0, ATMOSPHERE.length - 1)]);
  formatHeading();

  const modeChoose = askModeChoice();
  const multiplier = chooseMultiplier(modeChoose);
  const cardGot = drawCard();
  console.log(`\nCard: ${cardGot}`);
  console.log(CARDSMSG[CARDS.indexOf(cardGot)]);
  lastCard[0] = cardGot;
  PLAYER_STATS[0] += 1;
  changeStats(cardGot, multiplier);
  if (isEnd()) return;
  return play();
}

function main() {
  play();
}

main();
