const board = [];

const getTextData = () => [
  {
    pos: 0,
    speed: 2,
    boardPos: 0,
    text: Deno.args[2] || "text1",
    isVertical: false,
  },
  {
    pos: board[0].length,
    speed: 3,
    boardPos: 2,
    text: Deno.args[3] || "text2",
    isVertical: false,
  },
  {
    pos: 0,
    speed: -4,
    boardPos: 4,
    text: Deno.args[4] || "text3",
    isVertical: false,
  },
  {
    pos: board[0].length,
    speed: 1,
    boardPos: 6,
    text: Deno.args[5] || "text4",
    isVertical: false,
  },
  {
    pos: 0,
    speed: -5,
    boardPos: 8,
    text: Deno.args[6] || "text5",
    isVertical: false,
  },
  {
    pos: 0,
    speed: 1,
    boardPos: 2,
    text: Deno.args[7] || "text6",
    isVertical: true,
  },
  {
    pos: 0,
    speed: -1.2,
    boardPos: 59,
    text: Deno.args[8] || "text7",
    isVertical: true,
  },
  {
    pos: 0,
    speed: -0.8,
    boardPos: 49,
    text: Deno.args[9] || "text8",
    isVertical: true,
  },
];

const createBoard = (length) => {
  for (let time = 0; time < length; time++) {
    board.push(" ".repeat(+Deno.args[0] || 100).split(""));
  }
};

const drawOnScreenRow = (text, x, select, glitch) => {
  for (let index = 0; index < text.length; index++) {
    board[Math.floor(select + glitch)][(x + index) % board[select].length] =
      text[index];
  }
};

const drawOnScreenCol = (text, x, select, glitch) => {
  for (let index = 0; index < text.length; index++) {
    board[(x + index) % board.length][Math.floor(select + glitch)] =
      text[index];
  }
};

const clearBoard = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = " ";
    }
  }
};

const displayScreen = () => {
  // const reversed = [...board].reverse();
  // const firstPart = board.map((row) => row.join("")).join("\n");
  // const secondPart = reversed.map((row) => row.join("")).join("\n");
  // console.log(firstPart + secondPart);
  console.log(board.map((row) => row.join("")).join("\n"));
};

const main = (args) => {
  const length = 19;
  createBoard(length);
  const speed = +args[1] * 10 || 100;
  const textData = getTextData();

  setInterval(() => {
    console.clear();
    const glitch = Math.random() > 0.3 ? 1.9 : 0;

    for (const text of textData) {
      const offset = text.speed < 0 ? board[0].length : 0;
      const moduloLength = text.isVertical ? length : board[0].length;
      const drawFn = text.isVertical ? drawOnScreenCol : drawOnScreenRow;

      text.pos = ((text.pos + Math.floor(text.speed)) + offset) % moduloLength;
      drawFn(text.text, text.pos, text.boardPos, glitch);
    }

    displayScreen();
    clearBoard();
  }, speed);
};

main(Deno.args);
