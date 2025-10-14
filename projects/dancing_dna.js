function x(y, amplitude, wavelength, arg) {
  if (arg % 2 === 0) {
    return amplitude + Math.floor(amplitude * Math.sin(y * wavelength));
  }
  return amplitude + Math.floor(amplitude * Math.cos(y * wavelength));
}

function dnaPair(config) {
  const x1 = config[0];
  const x2 = config[1];
  const l = config[2];
  const r = config[3];
  return ' '.repeat(x1) + l + '='.repeat(x2 - x1) + r;
}

function dnaStrand(strandLength, amplitude, wavelength, arg) {
  const pairs = [];
  for (let i = 0; i < strandLength; i++) {
    const k1 = x(i, amplitude, wavelength, arg);
    const k2 = x(i + amplitude, amplitude, wavelength, arg);
    let config = k1 < k2 ? [k1, k2, '🔵', '🟡'] : [k2, k1, '🟡', '🔵'];
    pairs.push(dnaPair(config));
  }

  return pairs;
}

function delay(sec) {
  for (let index = 0; index < 100000000 * sec; index++) {
  }
}

function main(arg) {
  for (let term = 0; term < +arg[0]; term++) {
    const strand = dnaStrand(40, 10, 0.2, term);
    console.log(strand.join('\n'));
    delay(7);
    console.clear();
  }
}

main(Deno.args);
