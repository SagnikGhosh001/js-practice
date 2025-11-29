const lines = [];
const boundaries = [];

const drawCircle = (width, height, cx, cy, radius) => {
  const aspect = 1;
  boundaries.length = 0;
  for (let h = 0; h < height; h++) {
    const line = [];
    for (let w = 0; w < width; w++) {
      const dx = (w - cx) * aspect;
      const dy = h - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      const isCircle = Math.abs(d - radius) < 0.5;
      let char = " ";
      if (isCircle) {
        char = ".";
        boundaries.push([h, w]);
      }
      line.push(char);
    }
    lines.push(line);
  }
};

const cutBoundaries = (startCut, endCut) => {
  while (startCut !== endCut) {
    const cutX = boundaries[startCut][0];
    const cutY = boundaries[startCut][1];
    lines[cutX][cutY] = " ";
    startCut = (startCut + 1) % boundaries.length;
  }
};

const clearLines = () => lines.length = 0;
const showLines = () =>
  console.log(lines.map((row) => row.join("")).join("\n"));

const main = (args) => {
  const width = +args[0] || 30;
  const height = +args[1] || 30;
  const cx = +args[2] || 15;
  const cy = +args[3] || 15;
  const radius = +args[4] || 13;
  let startCut = 0;
  let endCut = 20;

  setInterval(() => {
    console.clear();
    clearLines();
    drawCircle(width, height, cx, cy, radius);
    cutBoundaries(startCut, endCut);
    startCut = (startCut + 1) % boundaries.length;
    endCut = (endCut + 1) % boundaries.length;
    showLines();
  }, 100);
};

main(Deno.args);
