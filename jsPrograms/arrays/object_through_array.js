const OBJECT = [];

const findKey = (key) => OBJECT.findIndex((k) => k[0] === key);

const takingKeyInput = () => prompt("Enter key:-");

const keyAndKeyIndex = () => {
  const key = takingKeyInput();
  const keyIndex = findKey(key);

  return [key, keyIndex];
};

const isKeyNotPresent = (keyId) => keyId === -1;

const addKey = (key, keyId) => {
  if (isKeyNotPresent(keyId)) {
    OBJECT.push([key, []]);
    console.log(OBJECT);
    return;
  }

  console.log("this key is already present");
  return addKey();
};

const addElement = (keyId) => {
  if (isKeyNotPresent(keyId)) {
    console.log("this is not present");
    return add();
  }

  const element = prompt("Enter element:-");
  OBJECT[keyId][1].push(element);
};

const add = () => {
  const response = prompt(
    "\n1. for add key,\n2. for add element\nEnter your choice:-",
  );
  const keyAndKeyId = keyAndKeyIndex();
  const key = keyAndKeyId[0];
  const keyId = keyAndKeyId[1];

  switch (response) {
    case "1":
      return addKey(key, keyId);
    case "2":
      return addElement(keyId);
  }
};

const accessElement = () => {
  const keyAndKeyId = keyAndKeyIndex();
  const keyId = keyAndKeyId[1];

  if (isKeyNotPresent(keyAndKeyId[1])) {
    console.log("this is not present");
    return;
  }

  console.log(OBJECT[keyId][1]);
};

const askUser = () => {
  const response = prompt(
    "\n1 for add\n2 for access\n3 for exit\nEnter Your choice:-",
  );

  if (response === "1" || response === "2" || response === "3") {
    return response;
  }

  return askUser();
};

const main = () => {
  while (true) {
    const userChoice = askUser();

    if (userChoice === "1") add();
    else if (userChoice === "2") accessElement();
    else return;
  }
};

main();
