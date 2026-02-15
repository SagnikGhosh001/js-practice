const reader = Deno.stdin.readable.getReader();
const writer = Deno.stdout.writable.getWriter();

while (true) {
  const { value, done } = await reader.read();
  // console.log(value, done);

  if (done) break;
  await writer.write(value);
}
