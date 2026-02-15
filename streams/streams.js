const stream = Deno.stdin.readable;

for await (const chunk of stream) {
  console.log(new TextDecoder().decode(chunk));
}

// const writer = Deno.stdout.writable.getWriter();
// writer.write(new TextEncoder().encode("sagnik"));

