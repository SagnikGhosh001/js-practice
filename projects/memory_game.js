const DATA_SET = [
  // Fruits
  "apple", "apple",
  "banana", "banana",
  "cherry", "cherry",
  "date", "date",
  "elderberry", "elderberry",
  "fig", "fig",
  "grape", "grape",
  "honeydew", "honeydew",

  // Animals
  "cat", "cat",
  "dog", "dog",
  "elephant", "elephant",
  "frog", "frog",
  "giraffe", "giraffe",
  "hippopotamus", "hippopotamus",
  "iguana", "iguana",
  "jaguar", "jaguar",

  // Colors
  "red", "red",
  "blue", "blue",
  "green", "green",
  "yellow", "yellow",
  "purple", "purple",
  "orange", "orange",
  "pink", "pink",
  "black", "black",

  // Objects
  "pen", "pen",
  "book", "book",
  "laptop", "laptop",
  "glasses", "glasses",
  "phone", "phone",
  "watch", "watch",
  "key", "key",
  "camera", "camera",

  // Places
  "paris", "paris",
  "london", "london",
  "new york", "new york",
  "tokyo", "tokyo",
  "sydney", "sydney",
  "rome", "rome",
  "berlin", "berlin",
  "mumbai", "mumbai"
];

function randomNumberBetween(start, end) {
  const randomNumber = ((Math.random() * (end - start)) + start);
  return Math.round(randomNumber);
}

function takingUserResponse() {
  const userResponse = prompt("Enter Word :-")

  return userResponse;
}

function play() {
  const generatedWord = [];
  const randomWord = DATA_SET[randomNumberBetween(0, DATA_SET.length - 1)];
  generatedWord.push(randomWord);
}
