class Scanner {
  #tokens;

  constructor(token) {
    this.#tokens = token;
  }

  peek() {
    return this.#tokens[0];
  }

  consume() {
    return this.#tokens.shift();
  }

  getTokens() {
    return this.#tokens;
  }
}

const handleNandCMode = (scanner, parsed) => {
  const mode = scanner.consume();
  const arg = scanner.consume();
  const count = Number(arg);
  const word = mode === "-n" ? "line" : "byte";

  if (!Number.isInteger(count) || count < 0) {
    throw new Error(`head: illegal ${word} count -- ${arg}`);
  }

  parsed.mode = mode;
  parsed.count = count;
};

const handleQuiteMode = (scanner, parsed) => {
  scanner.consume();
  parsed.isQuite = true;
};

const optionFunctions = {
  "-n": handleNandCMode,
  "-c": handleNandCMode,
  "-q": handleQuiteMode,
};

export const parseArgs = (args) => {
  const scanner = new Scanner([...args]);
  const parsed = { isQuite: false, mode: "-n", count: 10, files: [] };

  while (scanner.getTokens().length > 0) {
    const currentArg = scanner.peek();

    if (!(currentArg in optionFunctions)) {
      parsed.files.push(...scanner.getTokens());
      break;
    }

    optionFunctions[currentArg](scanner, parsed);
  }

  return parsed;
};
