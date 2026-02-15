import { createTransformStream } from "./transform.js";
import { createWritableStream } from "./writableStream.js";

const transfromForLineMode = (limit) => {
  let count = 0;

  return new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.slice(0, -1));
      count++;
      if (count >= limit) controller.terminate();
    },
  });
};

const transfromForByteMode = (limit) => {
  let count = 0;
  const buffer = [];

  return new TransformStream({
    transform(chunk, controller) {
      buffer.push(...chunk.slice(0, limit - count));
      count = buffer.length;
      if (count >= limit) {
        controller.enqueue(new Uint8Array([...buffer]));
        controller.terminate();
      }
    },
  });
};

export const readFromStdIn = (parsed) => {
  const transformer = parsed.mode === "-n"
    ? transfromForLineMode
    : transfromForByteMode;

  const isQuite = true;
  const fileName = "";
  const isFileMissing = true;
  const isLast = true;

  Deno.stdin.readable
    .pipeThrough(transformer(parsed.count))
    .pipeThrough(createTransformStream(parsed))
    .pipeTo(createWritableStream(isQuite, fileName, isFileMissing, isLast));
};
