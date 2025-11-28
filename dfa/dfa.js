const starsWithZeroEndsWithOne = {
  q0: { 0: "q1", 1: "q3", isFinal: false },
  q1: { 0: "q1", 1: "q2", isFinal: false },
  q2: { 0: "q1", 1: "q2", isFinal: true },
  q3: { 0: "q3", 1: "q3", isFinal: false },
};

const isValidLanguage = (dfa, string) => {
  const finalState = [...string].reduce(
    (state, element) => dfa[state][element],
    "q0",
  );

  return dfa[finalState].isFinal;
};
