const listener = Deno.listen({
  port: 8000,
  transport: "tcp",
});

const encoder = new TextEncoder();
const clients = new Set();

const handleClinets = async (name, conn) => {
  try {
    while (true) {
      const buff = new Uint8Array(1024);
      const n = await conn.read(buff);
      for (const client of clients) {
        if (conn !== client && n) {
          await client.write(encoder.encode(`${name}>>> `));
          await client.write(buff.slice(0, n));
        }
      }
    }
  } catch (error) {
    Deno.stdout.write(encoder.encode(error.message));
  } finally {
    clients.delete(conn);
    conn.close();
  }
};

const main = async () => {
  for await (const conn of listener) {
    conn.write(encoder.encode("Enter your name:- "));
    const buff = new Uint8Array(1024);
    const n = await conn.read(buff);
    clients.add(conn);
    const name = new TextDecoder().decode(buff.slice(0, n)).trim();
    Deno.stdout.write(encoder.encode(`${name} connected...\n`));
    handleClinets(name, conn);
  }
};

await main();
