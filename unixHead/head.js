import { createFileStreams } from "./src/createFIleStreams.js";
import { parseArgs } from "./src/parser.js";
import { readFromAllFileStream } from "./src/readAllFileStream.js";
import { readFromStdIn } from "./src/readFromStdinStream.js";

const main = async (args) => {
  try {
    const parsed = parseArgs(args);
    if (parsed.files.length === 0) {
      await readFromStdIn(parsed);
    }

    const streams = await Promise.all(createFileStreams(parsed.files));
    await readFromAllFileStream(parsed, streams);
  } catch (error) {
    Deno.stdout.write(new TextEncoder().encode(error.message));
  }
};

main(Deno.args);
