const plateauBoard = [];
const roverNorth = "^";
const roverSouth = "v";
const roverEast = ">";
const roverWest = "<";
const trail = ".";

const selectRoverEmoji = {
  N: roverNorth,
  S: roverSouth,
  E: roverEast,
  W: roverWest,
};
const showAnimation = ({ xCoord, yCoord, direction }, { maxY }) => {
  const roverEmoji = selectRoverEmoji[direction];
  console.clear();
  setEmoji(xCoord, yCoord, maxY, roverEmoji);
  displayPlateau();
  setEmoji(xCoord, yCoord, maxY, trail);
};

const setPlateau = (rowSize, colSize) => {
  for (let row = 0; row <= rowSize; row++) {
    plateauBoard.push(" ".repeat(colSize + 1).split(""));
  }
};

const displayPlateau = () =>
  console.log(plateauBoard.map((row) => row.join("")).join("\n"));

const setEmoji = (x, y, maxY, roverEmoji) =>
  plateauBoard[maxY - y][x] = roverEmoji;

const isOutOfRange = (value, max, min) => value < min || value > max;

const hasFallen = ({ xCoord, yCoord }, { maxX, maxY, minX, minY }) =>
  isOutOfRange(xCoord, maxX, minX) || isOutOfRange(yCoord, maxY, minY);

const isInvalidInstructions = (instructions) =>
  instructions.some((ele) => !"LMR".includes(ele));

const moveForward = ({ xCoord, yCoord, direction }) => {
  const movementRules = {
    N: { xCoord, yCoord: yCoord + 1 },
    E: { xCoord: xCoord + 1, yCoord },
    S: { xCoord, yCoord: yCoord - 1 },
    W: { xCoord: xCoord - 1, yCoord },
  };

  return { ...movementRules[direction], direction };
};

const parseInputsPosition = (position) => {
  const [xCoord, yCoord, direction] = position.split(" ");

  return { xCoord: parseInt(xCoord), yCoord: parseInt(yCoord), direction };
};

const parsePlateau = (plateau) => {
  const [maxX, maxY] = plateau.split(" ");
  return { maxX: parseInt(maxX), maxY: parseInt(maxY) };
};

const turn = ({ direction, ...rest }, offset) => {
  const directions = ["N", "E", "S", "W"];
  const index = (directions.indexOf(direction) + offset) % directions.length;

  return { direction: directions.at(index), ...rest };
};

const executeCommand = (position, command) => {
  const moves = {
    M: (position) => moveForward(position),
    L: (position) => turn(position, -1),
    R: (position) => turn(position, 1),
  };

  return moves[command](position);
};

const moveRover = (initialPosition, plateau, command) => {
  const updatedPosition = executeCommand(initialPosition, command);

  if (hasFallen(updatedPosition, plateau)) {
    return { postion: initialPosition, hasFall: true };
  }

  return { postion: updatedPosition, hasFall: false };
};

const main = () => {
  const plateau = prompt("Give platue dimensions").trim() || "5 5";
  const position = prompt("provide initial position").trim().toUpperCase() ||
    "0 0 N";

  let initialPos = parseInputsPosition(position);
  const plateauDimensions = parsePlateau(plateau);
  setPlateau(plateauDimensions.maxY, plateauDimensions.maxX);
  let index = 0;
  let instructions = prompt("provide instruction").trim().toUpperCase() || "M";

  const id = setInterval(() => {
    showAnimation(initialPos, plateauDimensions);

    if (index === instructions.length) {
      index = 0;
      instructions = prompt("provide instruction").trim().toUpperCase() || "M";
    }

    if (isInvalidInstructions([...instructions])) {
      console.log("Invalid instruction");
      clearInterval(id);
      return;
    }

    const rover = moveRover(initialPos, plateauDimensions, instructions[index]);

    if (rover.hasFall) {
      console.log("You fall");
      clearInterval(id);
      return;
    }

    initialPos = rover.postion;
    index++;
  }, 200);
};

main();
