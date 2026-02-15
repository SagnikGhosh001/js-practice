import { TextLineStream } from "jsr:@std/streams/text-line-stream";

// const readable = new ReadableStream({
//   start(controller) {
//     controller.enqueue("hello1");
//     controller.enqueue("hello2");
//     controller.enqueue("hello3");
//     controller.enqueue("hello4");
//     controller.close();
//   },
// });

// for await (const chunk of readable) {
//   console.log(chunk);
// }

// const writable = new WritableStream({
//   write(chunk) {
//     console.log(chunk);
//   },

//   close() {
//     console.log("done");
//   },
// });

// const numberStream = new TransformStream({
//   transform(value, controller) {
//     controller.enqueue(value);
//   },
// });

// Deno.stdin.readable
//   .pipeThrough(numberStream)
//   .pipeTo(Deno.stdout.writable);

const formatLog = new TransformStream({
  transform(contents, controller) {
    const [heading, message] = contents.split(": ");
    const formattedHeading = `[${heading.toUpperCase()}]`;
    const formattedMessage = `${formattedHeading} ${message}\n`;
    controller.enqueue(formattedMessage);
  },
});

const file = await Deno.open("./input.txt");
file.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextLineStream())
  .pipeThrough(formatLog)
  .pipeThrough(new TextEncoderStream())
  .pipeTo(Deno.stdout.writable);
