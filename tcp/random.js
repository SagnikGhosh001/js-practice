const ENCODER = new TextEncoder();
const DECODER = new TextDecoder();

export const encodeData = (data) =>
  // data accpected as an object
  ENCODER.encode(JSON.stringify(data)); // retuns a Uint8Array

export const decodeData = (data) =>
  // data accpected as an Uint8Array
  JSON.parse(DECODER.decode(data)); // returns an object

const CONNECTION = await Deno.connect({
  hostname: "10.132.124.179",
  port: 8000,
  transport: "tcp",
});

const readFromServer = async (connection) => {
  const buffer = new Uint8Array(1024);
  const n = await connection.read(buffer);
  return decodeData(buffer.slice(0, n));
};

const writeToServer = async (connection, input) => {
  const message = { answer: input };
  await connection.write(encodeData(message));
};

const main = async () => {
  console.log("waiting to connect to server");

  while (true) {
    const message = await readFromServer(CONNECTION);
    console.log(message.message);
    if (message.talk) {
      console.clear();
      const input = prompt(message.message);
      await writeToServer(CONNECTION, input);
    }
  }
};

await main();
