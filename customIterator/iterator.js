const iterator = {
  i: 0,
  next() {
    return { value: this.i++, done: this.i > 5 };
  },

  [Symbol.iterator]() {
    return this;
  },
};
