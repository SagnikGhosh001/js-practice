const formatHeader = (file) => `==> ${file} <==\n`;

export const createWritableStream = (isQuite, fileName, isMissing, isLast) =>
  new WritableStream({
    write(chunk) {
      const encoder = new TextEncoder();
      const header = isQuite || isMissing ? "" : formatHeader(fileName);
      const encodedHeader = encoder.encode(header);
      const appendArray = isQuite || isLast ? [10] : [10, 10];
      const encodedString = new Uint8Array([
        ...encodedHeader,
        ...chunk,
        ...appendArray,
      ]);
      Deno.stdout.write(encodedString);
    },
  });
