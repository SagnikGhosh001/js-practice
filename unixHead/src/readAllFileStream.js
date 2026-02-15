import { createTransformStream } from "./transform.js";
import { createWritableStream } from "./writableStream.js";

export const readFromAllFileStream = async (parsed, streams) => {
  for (let index = 0; index < streams.length; index++) {
    const { isMissing, stream } = streams[index];
    const isLastFile = index >= streams.length - 1;

    const writableStream = createWritableStream(
      parsed.isQuite || streams.length === 1,
      parsed.files[index],
      isMissing,
      isLastFile,
    );

    await stream
      .pipeThrough(createTransformStream(parsed, isMissing))
      .pipeTo(writableStream);
  }
};
