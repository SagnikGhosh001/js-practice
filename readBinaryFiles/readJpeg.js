import jpeg from "npm:jpeg-js";
import { bgRgb24 } from "jsr:@std/fmt/colors";
const jpegData = await Deno.readFile("./image.jpeg");

const decodedData = jpeg.decode(jpegData);
const { width, height, data } = decodedData;

const genIndex = (coordinate = [0, 0]) =>
  (coordinate[0] * width + coordinate[1]) * 4;

for (let row = 0; row < height; row++) {
  let image = "";
  for (let col = 0; col < width; col++) {
    const index = genIndex([row, col]);

    const R = data[index];
    const G = data[index + 1];
    const B = data[index + 2];
    const A = data[index + 3];
    image += bgRgb24(" ", { r: R, g: G, b: B, a: A });
  }
  console.log(image);
}
