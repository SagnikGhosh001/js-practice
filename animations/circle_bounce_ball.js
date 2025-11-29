const BOUNDARY = "⬜️";
const BALL_EMOJI = "⚽️";
const cicle = [];
const velocity = {
  x: 1,
  y: 1,
};

const drawCircle = (width, height, cx, cy, radius) => {
  const aspect = 1;
  for (let h = 0; h < height; h++) {
    const line = [];
    for (let w = 0; w < width; w++) {
      const dx = (w - cx) * aspect;
      const dy = h - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      const isCircle = Math.abs(d - radius) < 1;
      const char = isCircle ? BOUNDARY : "  ";
      line.push(char);
    }
    cicle.push(line);
  }
};

const dotProduct = (x1, y1, x2, y2) => {
  return (x1 * x2 + y1 * y2);
};

const calulateDistance = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

const ballNewCoord = (ballX, ballY, cx, cy, radius) => {
  ballX += velocity.x;
  ballY += velocity.y;
  const distance = calulateDistance(ballX, ballY, cx, cy);

  if (distance >= radius) {
    const d = [ballX - cx, ballY - cy];
    const t = [-d[1], d[0]];
    const dot = dotProduct(velocity.x, velocity.y, t[0], t[1]);
    const tt = dotProduct(t[0], t[1], t[0], t[1]);
    const proj = [(dot / tt) * t[0], (dot / tt) * t[1]];
    velocity.x = Math.floor(2 * proj[0] - velocity.x);
    velocity.y = Math.floor(2 * proj[1] - velocity.y);
  }

  return [ballX, ballY];
};

const clearLines = () => cicle.length = 0;
const showLines = () =>
  console.log(cicle.map((row) => row.join("")).join("\n"));
const drawBall = (ballX, ballY) => cicle[ballX][ballY] = BALL_EMOJI;

const main = (args) => {
  const width = +args[0] || 50;
  const height = +args[1] || 50;
  const cx = +args[2] || 25;
  const cy = +args[3] || 25;
  const radius = +args[4] || Math.min(cx, cy) - 2;
  let ballX = cx + 1;
  let ballY = cy;

  const id = setInterval(() => {
    console.clear();
    clearLines();
    drawCircle(width, height, cx, cy, radius);
    drawBall(ballX, ballY);
    [ballX, ballY] = ballNewCoord(ballX, ballY, cx, cy, radius);
    showLines();
  }, 100);
};

main(Deno.args);
