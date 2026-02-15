const emptyReadableStream = (file) =>
  new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const encodedString = encoder
        .encode(`head: ${file}: No such file or directory`);
      controller.enqueue(encodedString);
      controller.close();
    },
  });

export const createFileStreams = (files) =>
  files.map(async (file) =>
    await Deno.open(file)
      .then((data) => ({ isMissing: false, stream: data.readable }))
      .catch(() => ({ isMissing: true, stream: emptyReadableStream(file) }))
  );
