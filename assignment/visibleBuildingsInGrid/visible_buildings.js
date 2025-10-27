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

function isBorder(rows, row, cols, col) {
  return row === 0 || row === rows - 1 || col === 0 || col === cols - 1;
}

function calculateBorderNumber(multiDGrid) {
  let borderCount = 0;
  const rows = multiDGrid.length;
  const cols = multiDGrid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (multiDGrid[row][col] !== 0 && isBorder(rows, row, cols, col)) {
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

  let currentRow = row;
  let currentCol = col;

  while (!isBorder(multiDGrid.length, currentRow, multiDGrid[0].length, currentCol)) {
    const checkRow = currentRow + directions[directionIndex][0];
    const checkCol = currentCol + directions[directionIndex][1];

    if (multiDGrid[checkRow][checkCol] >= multiDGrid[currentRow][currentCol]) {
      return checkInDirections(multiDGrid, row, col, directionIndex + 1);
    }

    currentRow = checkRow;
    currentCol = checkCol;
  }

  return true;
}

function countVisibleBuildings(grid) {
  const multiDGrid = covertIntoMultiDimensionArray(grid);
  let visibleBuildings = calculateBorderNumber(multiDGrid);

  for (let row = 1; row < multiDGrid.length - 1; row++) {
    for (let col = 1; col < multiDGrid[row].length - 1; col++) {
      if (multiDGrid[row][col] !== 0 && checkInDirections(multiDGrid, row, col)) {
        visibleBuildings++;
      }
    }
  }

  return visibleBuildings;
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
  testCountVisibleBuildings(["111", "121", "111"], 9, "Center 2 visible from all sides");
  testCountVisibleBuildings(["101", "010", "101"], 5, "Zero-height interior with 1s on border");
  testCountVisibleBuildings(["1212", "2321", "3143", "1111"], 15, "Multiple interior heights, some blocked");
  testCountVisibleBuildings(["12", "21"], 4, "2x2 grid, all visible");
  testCountVisibleBuildings(["11111", "12921", "11111"], 15, "Interior taller building blocking neighbors");
  testCountVisibleBuildings(["11911", "19391", "19491", "11911"], 18, "Interior buildings blocked by taller neighbors, some still visible");
  testCountVisibleBuildings(["111", "121", "111"], 9, "Center 2 visible from all sides");
  testCountVisibleBuildings(["11111", "11211", "11111"], 13, "Single taller building in center with all perimeter visible");
  testCountVisibleBuildings(["11111", "19291", "19191", "11111"], 19, "Tall buildings block some interior neighbors completely");
  testCountVisibleBuildings(["101", "010", "101"], 5, "Zero-height interior with 1s on border");
  testCountVisibleBuildings(["999", "929", "999"], 8, "Interior 2 completely blocked by surrounding 9s");
  testCountVisibleBuildings(["12345", "54321", "11111"], 15, "Mixed interior heights, visibility depends on direction");

}

main();
