const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Enable raw mode
Deno.stdin.setRaw(true);

// Enable SGR mouse mode
// 1000 = normal tracking
// 1002 = for track mouse while clicking the left button
// 1003 = for track full mouse movement without even clicking
// 1006 = SGR extended mode (better format)
await Deno.stdout.write(
  encoder.encode("\x1b[?1002h\x1b[?1006h"),
  // encoder.encode("\x1b[?1000h\x1b[?1006h"),
  // encoder.encode("\x1b[?1000h\x1b[?1000h"),
);

console.log("Click anywhere in the terminal (Ctrl+C to exit)...");
console.clear();
function moveCursor(x, y) {
  Deno.stdout.writeSync(
    encoder.encode(`\x1b[${y};${x}H`),
  );
}

for await (const chunk of Deno.stdin.readable) {
  const input = decoder.decode(chunk);

  // SGR mouse format: \x1b[<b;x;yM
  const match = input.match(/\x1b\[<(\d+);(\d+);(\d+)([mM])/);
  // console.log(match);

  if (match) {
    const [, , x, y, type] = match;
    if (type === "M") {
      moveCursor(Number(x), Number(y));
      Deno.stdout.writeSync(encoder.encode("X"));
    }
  }
}
