const createHashTable = (size) => ({ table: Array(size), size });

const hash = (key, size) => {
  const hashValue = 0;
  for (let index = 0; index < key; index++) {
    hashValue += (key.charCodeAt(i) * 31) % size;
  }

  return hashValue;
};

const insert = (ht, key, value) => {
  const index = hash(key, ht.size);

  if (!ht.table[index]) ht.table[index] = [];

  for (const pair of ht.table[index]) {
    if (pair[0] === key) {
      pair[1] = value;
      return;
    }
  }

  ht.table[index].push([key, value]);
};

const get = (ht, key) => {
  const index = hash(key, ht.size);

  if (!ht.table[index]) return undefined;

  for (const pair of ht.table[index]) {
    if (pair[0] === key) return pair[1];
  }

  return undefined;
};

const remove = (ht, key) => {
  const index = hash(key, ht.size);
  const bucket = ht.table[index];

  if (!bucket) return false;

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      return true;
    }
  }

  return false;
};

const main = () => {
  const size = 10;
  const ht = createHashTable(size);

  console.log(ht);
  insert(ht, "name", "sagnik");
  insert(ht, "name", "sanchita");
  insert(ht, "hiii", "new");
  console.log(ht);

  console.log(get(ht, "hiii"));

  console.log(remove(ht, "hiii"));
  console.log(ht);
  console.log(get(ht, "hiii"));
};

main();
