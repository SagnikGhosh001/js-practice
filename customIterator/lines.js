const lineIterator = (lines) => {
  let index = 0;

  return {
    next() {
      if (index >= lines.length) return { value: undefined, done: true };
      let indexOfNewLine = lines.indexOf("\n", index);
      if (indexOfNewLine === -1) indexOfNewLine = lines.length;
      const value = lines.slice(index, indexOfNewLine);
      index = indexOfNewLine + 1;
      return { value, done: false };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
};
