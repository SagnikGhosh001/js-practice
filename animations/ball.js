const BALL = "⚽️";
const LEFT_EMOJI = "🦵";
const RIGHT_EMOJI = "👈";
const MIDDLE_GROUND = " ".repeat(+Deno.args[0] || 20);

const board = [LEFT_EMOJI, MIDDLE_GROUND.split(""), RIGHT_EMOJI].flatMap((x) =>
  x
);

const drawBall = (x) => board[x] = BALL;

const clearBoard = () => {
  for (let i = 1; i < board.length - 1; i++) {
    board[i] = " ";
  }
};

const display = () => {
  console.log(board.join(""));
};

const main = (args) => {
  const speed = +args[1] || 1;
  const animationDelay = +args[2] || 100;
  let i = 1;
  let offset = speed;

  setInterval(() => {
    if (i >= board.length - (speed + 2)) offset = -speed;
    if (i <= 1) offset = speed;
    console.clear();
    drawBall(i);
    display();
    clearBoard();
    i = i + offset;
  }, animationDelay);
};

main(Deno.args);
