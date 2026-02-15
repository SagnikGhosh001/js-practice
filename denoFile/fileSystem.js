const x = await Deno.open("/dev/ttys002", { write: true });
Deno.stdin.setRaw(true, { cbreak: true });

const buf = new Uint8Array(1);

while (true) {
  const keyPressed = await Deno.stdin.read(buf);
  if (keyPressed === null) break;
  await x.write(buf);
}
