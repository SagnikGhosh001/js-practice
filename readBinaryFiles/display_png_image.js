const displayImage = (buffer) => {
  const b64 = btoa(String.fromCharCode(...buffer));
  const esc = `\x1b_Gf=100,a=T;${b64}\x1b\\`;
  Deno.stdout.writeSync(new TextEncoder().encode(esc));
};

const img = await Deno.readFile("./hello.png");
displayImage(img);
