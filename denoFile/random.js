// console.log("1");

// const fn1 = async () => {
//   console.log("2");
//   await Promise.resolve();
//   console.log("21");
//   Promise.resolve("3").then((x) => console.log(x));
//   await Promise.reject("4").catch((x) => console.log(x));
//   console.log("5");
//   return 11;
// };

// const fn2 = async () => {
//   console.log("6");
//   await Promise.resolve();
//   console.log("7");
//   Promise.resolve("8").then((x) => console.log(x));
//   await Promise.reject("9").catch((x) => console.log(x));
//   console.log("10");
//   return 12;
// };

// Promise.all([fn1(), fn2()]).then(console.log);
// console.log("end");

// const file = await Deno.open("file.txt", { read: true, write: true });
// await file.seek(1, Deno.SeekMode.Start);
// const buf = new Uint8Array(2);
// await file.read(buf);
// await file.seek(1, Deno.SeekMode.Current);
// await file.read(buf);
// console.log(new TextDecoder().decode(buf));

const readable = new ReadableStream({
  start(controller) {
    this.i = 0;
    controller.enqueue(new TextEncoder().encode("hello"));
  },
  pull(controller) {
    this.i++;
    controller.enqueue(new TextEncoder().encode("hi"));
    if (this.i >= 10) {
      controller.close();
    }
  },
  cancel(reason) {
    console.log(reason);
  },
});

const writable = new WritableStream({
  async write(chunk) {
    await Deno.stdout.write(chunk);
  },
  close() {
    console.log("cancel");
  },
  abort(reason) {
    console.log("reason from abort", reason);
  },
});

// await readable.pipeTo(writable);
const reader = await readable.getReader();
let data = await reader.read();
const writer = writable.getWriter();
await writer.write(data.value);
writer.releaseLock();
await writable.abort("hello");
data = await reader.read();
await writable.getWriter().write(data.value);
