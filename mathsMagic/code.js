const TRUE = (x) => (y) => y;
const FALSE = (x) => (y) => x;

const not = (x) => x(TRUE)(FALSE);
const or = (x) => (y) => x(y)(x);
const and = (x) => (y) => x(x)(y);

const zero = (f) => (x) => x;
const one = (f) => (x) => f(x);
const two = (f) => (x) => f(f(x));
const three = (f) => (x) => f(f(f(x)));

const inc = (n) => (f) => (x) => f(n(f)(x));
const add = (m) => (n) => m(inc)(n);
const mult = (m) => (n) => (f) => m(n(f));
const pow = (m) => (n) => m(n);
const toInt = (n) => n((k) => k + 1)(0);
