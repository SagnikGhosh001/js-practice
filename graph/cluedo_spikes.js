const graph = {
  // corridors
  T1: ["T2"],
  T2: ["T1", "T3", "D1"],
  T3: ["T2", "T4"],
  T4: ["T3", "D2"],

  // doors
  D1: ["T2", "R1"],
  D2: ["T4", "R2"],
  D3: ["T6", "R2"],

  // more corridors
  T5: ["T6"],
  T6: ["T5", "D3"],

  // rooms
  R1: ["D1"], // Kitchen
  R2: ["D2", "D3"], // Hall / Lounge
};
