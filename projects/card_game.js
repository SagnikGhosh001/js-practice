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

const isDouble = [false, 2];

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
  return PLAYER_STATS[randomNumberBetween(1, PLAYER_STATS.length - 1)] += mysteryValueGenerate(5);
}

function cardChooseForVision(card1, card2, multiplier) {
  const cardChoose = prompt(`Select Between These Two Card ${card1} or ${card2} :-`);
  if (cardChoose !== card1 && cardChoose !== card2) {
    console.log("Please select a valid input");
    return cardChooseForVision(card1, card2, multiplier);
  }
  console.log(`You chose: ${cardChoose}`);
  console.log(CARDSMSG[CARDS.indexOf(cardChoose)]);
  changeStats(cardChoose, multiplier);
}

function visionCardSelector(multiplier) {
  const card1 = CARDS[randomNumberBetween(0, CARDS.length - 1)];
  const card2 = CARDS[randomNumberBetween(0, CARDS.length - 1)];
  if (card1 === VISION || card2 === VISION) {
    return visionCardSelector(multiplier);
  }
  cardChooseForVision(card1, card2, multiplier);
}

function changeStats(cardGot, multiplier) {
  multiplier *= isDouble[0] ? 2 : 1;
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
      isDouble[0] = true;
      break;
    case MIRROR:
      if (lastCard[0] !== MIRROR) {
        return changeStats(lastCard[0], multiplier);
      } else {
        console.log("The mirror shows only emptiness...");
      }
      break;
    case VISION:
      prompt("You can choose between Random Two Card, Are You Ready ?");
      visionCardSelector(multiplier);
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

  if (cardGot !== DOUBLE) {
    isDouble[0] = false;
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
  const before = PLAYER_STATS.slice(1);
  changeStats(cardGot, multiplier);
  const after = PLAYER_STATS.slice(1);
  const diffHP = after[0] - before[0];
  const diffFP = after[1] - before[1];
  const diffMD = after[2] - before[2];
  console.log(`(Δ HP: ${diffHP >= 0 ? "+" + diffHP : diffHP}, Δ FP: ${diffFP >= 0 ? "+" + diffFP : diffFP}, Δ MD: ${diffMD >= 0 ? "+" + diffMD : diffMD})\n`);
  if (isEnd()) return;
  return play();
}

function main() {
  console.clear();
  console.log("\nIf You Match any of the following criteria you wil win:-");
  console.log("1.Survive for 20 turns");
  console.log("2.If your FP (Fate Points) become 50 or more than 50:-\n");
  console.log("If You Match any of the following criteria you wil loose:-");
  console.log("1.Lose if MD (Madness) become 10 or more than 10:-");
  console.log("2.Death If HP reaches to 0:-\n")
  play();
}

main();
