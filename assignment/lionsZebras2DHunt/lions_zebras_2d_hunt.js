function manhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function euclideanDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

function chooseMetricAndCalculate(metric, x1, y1, x2, y2) {
  switch (metric) {
    case "manhattan": return manhattanDistance(x1, y1, x2, y2);
    case "euclidean": return euclideanDistance(x1, y1, x2, y2);
  }
}

function findLionZebraLocation(grid) {
  const lionLoc = [];
  const zebraLoc = [];

  for (let row = 0; row < grid.length; row++) {
    const currentGridElement = grid[row];

    for (let col = 0; col < currentGridElement.length; col++) {
      const element = currentGridElement[col];
      if (element === "L") lionLoc.push([row, col]);
      if (element === "Z") zebraLoc.push([row, col]);
    }
  }

  return [lionLoc, zebraLoc];
}

function calculateDistance(metric, zebraLoc, x1, y1, minDistance) {
  for (let zebra = 0; zebra < zebraLoc.length; zebra++) {
    const x2 = zebraLoc[zebra][0];
    const y2 = zebraLoc[zebra][1];
    const currentDistance = chooseMetricAndCalculate(metric, x1, y1, x2, y2);

    minDistance = Math.min(currentDistance, minDistance);
  }

  return minDistance;
}

function findShortestDist2D(grid, metric) {
  const locations = findLionZebraLocation(grid);
  const lionLoc = locations[0];
  const zebraLoc = locations[1];
  let minDistance = Infinity;

  for (let lion = 0; lion < lionLoc.length; lion++) {
    const x1 = lionLoc[lion][0];
    const y1 = lionLoc[lion][1];
    minDistance = calculateDistance(metric, zebraLoc, x1, y1, minDistance);
  }

  return minDistance === Infinity ? null : minDistance;
}

function areApproxEqual(result, expected) {
  const tolerance = expected - result;
  return tolerance <= 0.01 && tolerance >= -0.01;
}

function getEmoji(result, expected) {
  return areApproxEqual(result, expected) ? "✅" : "❌";
}

function composeMsg(result, expected, grid, metric, purpose) {
  const emoji = getEmoji(result, expected);
  const inputSection = "Inputs : [" + grid + "]" + " Metric- " + metric;
  const resultSection = "result = " + result;
  const expectedSection = "expected result = " + expected;
  let message = emoji + purpose;
  if (!areApproxEqual(result, expected)) {
    message += '\n\n' + inputSection;
    message += '\n' + resultSection;
    message += '\n' + expectedSection;
    message += "\n__________\n";
  }
  return message;
}

function testFindShortestDist2D(gird, metric, expected, purpose) {
  const result = findShortestDist2D(gird, metric);
  const msg = composeMsg(result, expected, gird, metric, purpose);
  console.log(msg);
}


function main() {
  testFindShortestDist2D(["L", "Z"], 'manhattan', 1, "single lion & zebra manhattan");
  testFindShortestDist2D(["L", "Z"], 'euclidean', 1, "single lion & zebra euclidean");

  testFindShortestDist2D(["L   ", "  Z ", "   Z"], 'manhattan', 3, "basic test for manhattan");
  testFindShortestDist2D(["L   ", "  Z ", "   Z"], 'euclidean', 2.236, "basic test for euclidean");

  testFindShortestDist2D(["L   ", " Z  ", "  Z ", " L  "], 'manhattan', 2, "multiple lions and zebras manhattan");
  testFindShortestDist2D(["L   ", " Z  ", "  Z ", " L  "], 'euclidean', 1.414, "multiple lions and zebras euclidean");

  testFindShortestDist2D(["L   ", "L   ", "L   "], 'manhattan', null, "no zebras in grid manhattan");
  testFindShortestDist2D(["L   ", "L   ", "L   "], 'euclidean', null, "no zebras in grid euclidean");

  testFindShortestDist2D(["Z   ", " Z  ", "  Z "], 'manhattan', null, "no lions in grid manhattan");
  testFindShortestDist2D(["Z   ", " Z  ", "  Z "], 'euclidean', null, "no lions in grid euclidean");

  testFindShortestDist2D(["L Z ", "    ", " Z L"], 'manhattan', 2, "lions and zebras at corners manhattan");
  testFindShortestDist2D(["L Z ", "    ", " Z L"], 'euclidean', 2.0, "lions and zebras at corners euclidean");

  testFindShortestDist2D(["L    Z   L", "   Z   Z  ", "L   Z    L", "    Z    L"], 'manhattan', 3, "large grid with multiple animals manhattan");
  testFindShortestDist2D(["L    Z   L", "   Z   Z  ", "L   Z    L", "    Z    L"], 'euclidean', 2.236, "large grid with multiple animals euclidean");

}

main();
