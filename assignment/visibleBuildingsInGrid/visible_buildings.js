function convertAllStringIntoNumber(array) {
  const numberArray = [];
  for (let index = 0; index < array.length; index++) {
    const currentElement = array[index];
    numberArray.push(parseInt(currentElement));
  }

  return numberArray;
}

function covertIntoMultiDimensionArray(grid) {
  const multiDGrid = [];
  for (let index = 0; index < grid.length; index++) {
    const currentElement = grid[index].split("");
    const currentElementIntoNumber = convertAllStringIntoNumber(currentElement);

    multiDGrid.push(currentElementIntoNumber);
  }

  return multiDGrid;
}

function countBorder(multiDGrid, row) {
  let borderCount = 0;
  for (let col = 0; col < multiDGrid[row].length; col++) {
    if (multiDGrid[0][col] !== 0) {
      borderCount++;
    }
  }

  return borderCount;
}

function countBorderOfStartAndEnd(multiDGrid) {
  if (multiDGrid.length === 1) return countBorder(multiDGrid, 0);

  return countBorder(multiDGrid, 0) + countBorder(multiDGrid, multiDGrid.length - 1);
}

function calculateBorderNumber(multiDGrid) {
  let borderCount = countBorderOfStartAndEnd(multiDGrid);

  for (let row = 1; row < multiDGrid.length - 1; row++) {
    if (multiDGrid[row].length === 1) {
      borderCount += countBorder(multiDGrid, row);
    }
    else {
      const lastCol = multiDGrid[row].length - 1;
      if (multiDGrid[row][0] !== 0) {
        borderCount++;
      }

      if (multiDGrid[row][lastCol] !== 0) {
        borderCount++;
      }
    }
  }

  return borderCount;
}

function checkInDirections(multiDGrid, row, col, directionIndex = 0) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  if (directionIndex >= directions.length) {    
    return false;
  }

  const checkRow = row + directions[directionIndex][0];
  const checkCol = col + directions[directionIndex][1];

  if (multiDGrid[row][col] > multiDGrid[checkRow][checkCol]) {
    return true;
  }

  return checkInDirections(multiDGrid, row, col, directionIndex + 1);
}

function countVisibleBuildings(grid) {
  const multiDGrid = covertIntoMultiDimensionArray(grid);
  let visibleBuildings = calculateBorderNumber(multiDGrid);

  for (let row = 1; row < multiDGrid.length - 1; row++) {
    for (let col = 1; col < multiDGrid[row].length - 1; col++) {
      if (checkInDirections(multiDGrid, row, col) && multiDGrid[row][col] !== 0) {
        visibleBuildings++;
      }
    }
  }

  return visibleBuildings;
}

function areApproxEqual(result, expected) {
  const tolerance = expected - result;
  return tolerance <= 0.01 && tolerance >= -0.01;
}

function getEmoji(result, expected) {
  return result === expected ? "✅" : "❌";
}

function composeMsg(result, expected, grid, purpose) {
  const emoji = getEmoji(result, expected);
  const inputSection = "Inputs : [" + grid + "]";
  const resultSection = "result = " + result;
  const expectedSection = "expected result = " + expected;
  let message = emoji + purpose;
  if (result !== expected) {
    message += '\n\n' + inputSection;
    message += '\n' + resultSection;
    message += '\n' + expectedSection;
    message += "\n__________\n";
  }
  return message;
}

function testCountVisibleBuildings(gird, expected, purpose) {
  const result = countVisibleBuildings(gird);
  const msg = composeMsg(result, expected, gird, purpose);
  console.log(msg);
}


function main() {
  testCountVisibleBuildings(["000", "000", "000"], 0, "For all 0");
  testCountVisibleBuildings(["1", "2", "3"], 3, "For all 1 X 3");
  testCountVisibleBuildings(["1"], 1, "For all 1 X 1");
  testCountVisibleBuildings(["111", "191", "111"], 9, "For all 3 X 3");
  testCountVisibleBuildings(["9000", "0000", "0000", "0009"], 2, "For mixed 0");
  testCountVisibleBuildings(["123", "456", "789"], 9, "For all visible");
  testCountVisibleBuildings(["1212", "1231", "3143", "1111"], 15, "For 4 X 4");
}

main();
