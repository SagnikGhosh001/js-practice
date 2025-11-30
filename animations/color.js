export const black = (text) => {
  return "\x1B[30m" + text + "\x1B[0m";
};

export const red = (text) => {
  return "\x1B[31m" + text + "\x1B[0m";
};

export const green = (text) => {
  return "\x1B[32m" + text + "\x1B[0m";
};

export const yellow = (text) => {
  return "\x1B[33m" + text + "\x1B[0m";
};

export const blue = (text) => {
  return "\x1B[34m" + text + "\x1B[0m";
};

export const magenta = (text) => {
  return "\x1B[35m" + text + "\x1B[0m";
};

export const cyan = (text) => {
  return "\x1B[36m" + text + "\x1B[0m";
};

export const white = (text) => {
  return "\x1B[37m" + text + "\x1B[0m";
};

export const bold = (text) => {
  return "\x1B[1m" + text + "\x1B[0m";
};
