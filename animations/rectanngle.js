let delX = 1;
let delY = 1;

const board = [
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
  " ".repeat(10).split(""),
];

const drawOnScreen = (x, y) => {
  board[x][y] = "+";
};

const clearScreen = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] = " ";
    }
  }
};

const displayScreen = () => {
  console.log(board.map((row) => row.join("")).join("\n"));
};

const increase = (x, y, width) => {
  console.log({ x, y, delX, delY, width });
  if (x <= width || delX === -1) {
    x += delX;
    x = x === 0 ? 1 : x;
  }
  if ((y <= width && x > width) || delY === -1) y += delY;
  if (x >= width && y === width) delX = -1;
  if (x === 1 && delX === -1) delY = -1;

  return [x, y];
};

const main = (args) => {
  let x = +args[0] || 0;
  let y = +args[1] || 0;
  const width = +args[2] || 7;

  setInterval(() => {
    [x, y] = increase(x, y, width);
    console.clear();
    drawOnScreen(x, y);
    displayScreen();
  }, 100);
};

main(Deno.args);
