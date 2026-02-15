const handleLineMode = (content, count) =>
  content.split("\n").slice(0, count).join("\n");

const handleByteMode = (content, count) => content.slice(0, count);

export const createTransformStream = ({ mode, count }, isMissing = false) => {
  return new TransformStream({
    transform(chunk, controller) {
      if (isMissing) {
        controller.enqueue(chunk);
        return;
      }

      const decoder = new TextDecoder();
      const content = decoder.decode(chunk);
      const modeFn = mode === "-n" ? handleLineMode : handleByteMode;
      const processedContent = modeFn(content, count);

      controller.enqueue(new TextEncoder().encode(processedContent));
    },
  });
};
