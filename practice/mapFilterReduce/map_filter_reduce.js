const QUESTION1 = ["### **1. Festival Ribbon Count**", "A craft booth cuts ribbons of different colors throughout the day:", ["red", "blue", "red", "green", "red", "blue"], "They want to know how many **blue** ribbons were cut."];

const QUESTION2 = ["### **2. Stargazing Log**", "A stargazing club logs visible constellations from each night:", [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]], "Combine everyone’s observations into one list of all constellations spotted."];

const QUESTION3 = ["### **3. Birdwatching Duplicate Removal**", "A birdwatcher notes species seen during a morning walk:", ["sparrow", "crow", "sparrow", "eagle", "crow", "crow", "sparrow"], "Create a list of the species without repeats, preserving the order first seen."];

const QUESTION4 = ["### **4. Classroom Attendance Check**", "A class records names of students present for each period:", [["Asha", "Ravi", "Neel"], ["Ravi", "Neel"], ["Asha", "Meera"]], "Determine which distinct students attended at least once."];

const QUESTION5 = ["### **5. Candy Jar Stocking**", "A store logs candy refills like this:", [[5, 3], [2], [4, 1]], "Find the total number of candies added."];

const QUESTION6 = ["### **6. Music Rehearsal Notes**", "Choir groups practice with sequences:", [["mi", "fa", "so"], ["do", "mi"], ["fa"]], 'Check whether **any** group sang `"do "`.'];

const QUESTION7 = ["### **7. Weather Sensor Validation**", "Several temperature sheets:", [[22, 23], [25, 24, 22], [29]], 'Check if **every** recorded temperature is below 32.'];

const QUESTION8 = ["### **8. Fitness Tracker Miles**", "Runner logs:", [[2, 3, 2], [4], [1, 1]], 'Find the total miles run.'];

const QUESTION9 = ["### **9. Art Workshop Color Variety**", "Paint colors used in sessions:", [["blue", "yellow"], ["yellow", "green"], ["blue"]], "Find unique colors used."];

const QUESTION10 = ["### **10. Library Return Counter**", "Books returned:", ["Dune", "Dune", "Foundation", "Dune"], "Count how many times “Dune” was returned."];

const QUESTION11 = [
  "### **11. Lunchbox Ingredient Inventory**",
  "Lists of ingredients:",
  [
    ["rice", "lentils"],
    ["rice"],
    ["curd", "lentils"]
  ],
  "Produce a list of distinct ingredients."
];

const QUESTION12 = [
  "### **12. Choir Harmony Review**",
  "Singers produce sequences:",
  [
    ["la", "la"],
    ["mi"],
    ["so", "la"]
  ],
  'Check whether any group sang "so".'
];

const QUESTION13 = [
  "### **13. Vegetable Crate Totals**",
  "Crate weights:",
  [
    [4, 6],
    [2, 3, 1],
    [5]
  ],
  "Find the sum of all weights."
];

const QUESTION14 = [
  "### **14. Post Office Parcel Record**",
  "Parcel sizes logged:",
  [
    ["small", "large", "medium", "small"]
  ],
  "Find unique parcel sizes."
];

const QUESTION15 = [
  "### **15. Wildlife Sighting Count**",
  "Animal sightings:",
  [
    ["deer", "deer", "rabbit", "deer"]
  ],
  'Count how many times "deer" was seen.'
];

const QUESTION16 = [
  "### **16. Study Group Completion**",
  "Study groups finish chapters:",
  [
    [1, 2],
    [3],
    [2, 4, 1]
  ],
  'Find all chapters completed by any group.'
];

const QUESTION17 = [
  "### **17. Dance Class Steps**",
  "Step sequences:",
  [
    ["step", "tap"],
    ["turn", "step"]
  ],
  'Check if "turn" appears in any sequence.'
];

const QUESTION18 = [
  "### **18. Garden Watering Amount**",
  "Water used:",
  [
    [1, 2, 1],
    [3],
    [2]
  ],
  'Total amount of water used.'
];

const QUESTION19 = [
  "### **19. Paper Crane Making**",
  "Origami students make cranes in sessions:",
  [
    [3, 2],
    [1],
    [4]
  ],
  'Compute the total cranes.'
];

const QUESTION20 = [
  "### **20. Fruit Basket Inventory**",
  "Mixed fruits recorded:",
  [
    ["apple", "banana"],
    ["apple"],
    ["apple", "orange"]
  ],
  'List unique fruits used.'
];

const QUESTION21 = [
  "### **21. Classroom Pen Distribution**",
  "Pens given:",
  [
    [2, 3],
    [1],
    [3, 2]
  ],
  'Total pens handed out.'
];

const QUESTION22 = [
  "### **22. Movie Marathon Titles**",
  "Movies watched:",
  [
    ["Inception", "Dunkirk"],
    ["Interstellar"],
    ["Inception"]
  ],
  'List unique titles watched.'
];

const QUESTION23 = [
  "### **23. Name Badge Sorting**",
  "Students sign in repeatedly:",
  [
    ["A", "B", "A", "C", "B"]
  ],
  'Create a unique list of attendees.'
];

const QUESTION24 = [
  "### **24. Ice Cream Orders**",
  "Orders recorded:",
  [
    ["vanilla", "chocolate"],
    ["strawberry"],
    ["chocolate"]
  ],
  'Find how many orders were "chocolate".'
];

const QUESTION25 = [
  "### **25. Flowers in Bouquets**",
  "Bouquets contain:",
  [
    ["rose", "lily"],
    ["lily", "tulip"]
  ],
  'List all unique flowers used.'
];

const QUESTION26 = [
  "### **26. Morning Exercise Count**",
  "Repetitions:",
  [
    [10, 20],
    [5],
    [15, 10]
  ],
  'Total repetitions done.'
];

const QUESTION27 = [
  "### **27. Train Station Announcements**",
  "Stations announced:",
  [
    ["A", "B"],
    ["B", "C"],
    ["A"]
  ],
  'Find the station names without repeats.'
];

const QUESTION28 = [
  "### **28. Book Club Pages Read**",
  "Groups read pages:",
  [
    [12, 10],
    [5],
    [8, 7]
  ],
  'Find total pages read.'
];

const QUESTION29 = [
  "### **29. Rainfall Data Check**",
  "Measurements:",
  [
    [3, 4],
    [5, 2],
    [1]
  ],
  'Check if all values are positive.'
];

const QUESTION30 = [
  "### **30. Fruit Stand Weight Totals**",
  "Weights:",
  [
    [4, 3],
    [2],
    [3, 1]
  ],
  'Compute total weight.'
];

const QUESTION31 = [
  "### **31. School Snack List**",
  "Snacks:",
  [
    ["idli", "vada"],
    ["vada", "upma"]
  ],
  'Unique snacks served.'
];

const QUESTION32 = [
  "### **32. Photo Contest Entries**",
  "Photographers submit sets:",
  [
    ["sunset", "bird"],
    ["river"],
    ["sunset"]
  ],
  'List unique themes.'
];

const QUESTION33 = [
  "### **33. Electricity Reading Validation**",
  "Readings:",
  [
    [110, 115],
    [118],
    [109]
  ],
  'Check if all readings are below 120.'
];

const QUESTION34 = [
  "### **34. Jogging Lap Count**",
  "Laps:",
  [
    [2, 3, 2],
    [1],
    [4]
  ],
  'Compute total laps.'
];

const QUESTION35 = [
  "### **35. Music Playlist Repeats**",
  "Songs played:",
  [
    ["track1", "track2", "track1"]
  ],
  'Count occurrences of "track1".'
];

const QUESTION36 = [
  "### **36. Café Order Ingredients**",
  "Ingredients:",
  [
    ["cheese", "bread"],
    ["tomato"],
    ["bread"]
  ],
  'Unique ingredients needed.'
];

const QUESTION37 = [
  "### **37. Student Poetry Words**",
  "Word lists:",
  [
    ["sky", "blue"],
    ["night"],
    ["sky", "dark"]
  ],
  'List all unique words.'
];

const QUESTION38 = [
  "### **38. Gift Box Items**",
  "Items:",
  [
    ["toy", "sticker"],
    ["candy", "sticker"]
  ],
  'List unique items used.'
];

const QUESTION39 = [
  "### **39. Gym Routine Count**",
  "Routine counts:",
  [
    [6, 4],
    [3, 2]
  ],
  'Total counts.'
];


const QUESTION40 = [
  "### **40. Fish Tank Measurements**",
  "Measurements:",
  [
    [5, 61],
    [7],
    [6]
  ],
  'Check if any measurement is above 7.'
];

const QUESTION41 = [
  "### **41. Candy Distribution**",
  "Candy numbers:",
  [
    [1, 2, 3],
    [2]
  ],
  'Sum all candies.'
];

const QUESTION42 = [
  "### **42. Workshop Attendance**",
  "Participants:",
  [
    ["Tom", "Jerry"],
    ["Jerry", "Spike"]
  ],
  'List unique participants.'
];

const QUESTION43 = [
  "### **43. Space Camp Star Names**",
  "Stars named:",
  [
    ["Vega", "Sirius"],
    ["Vega", "Rigel"]
  ],
  'Unique star names.'
];

const QUESTION44 = [
  "### **44. Train Car Passenger Check**",
  "Counts:",
  [
    [10, 12],
    [15]
  ],
  'Total passengers.'
];

const QUESTION45 = [
  "### **45. Weekly Grocery Tally**",
  "Quantities:",
  [
    [3, 5],
    [2, 1]
  ],
  'Find the total.'
];

const QUESTION46 = [
  "### **46. Tea Tasting Flavors**",
  "Flavors:",
  [
    ["mint", "ginger"],
    ["lemon"],
    ["mint"]
  ],
  'Unique flavors.'
];

const QUESTION47 = [
  "### **47. Photography Exposure Values**",
  "Values:",
  [
    [2, 3],
    [1],
    [4, 2]
  ],
  'Check if any value equals 4.'
];

const QUESTION48 = [
  "### **48. Drawing Class Tools**",
  "Tools:",
  [
    ["pencil", "charcoal"],
    ["ink"],
    ["pencil"]
  ],
  'Unique tools used.'
];

const QUESTION49 = [
  "### **49. Coin Collection Tally**",
  "Coins collected:",
  [
    [1, 1, 2],
    [2, 1]
  ],
  'Total coins.'
];

const QUESTION50 = [
  "### **50. Cooking Class Spices**",
  "Spices:",
  [
    ["salt", "pepper"],
    ["turmeric"],
    ["salt"]
  ],
  'Unique spices.'
];

const QUESTION51 = [
  "### **51. Count how many times “banana” appears in a fruit log**",
  "Fruit log:",
  [
    "apple", "banana", "orange", "banana",
    "grape", "banana", "kiwi"
  ],
  'Count of "banana".'
];

const QUESTION52 = [
  "### **52. Combine all words written by students on three worksheets**",
  "Worksheets:",
  [
    ["hello", "world", "cat"],
    ["dog", "hello", "sun"],
    ["moon", "cat", "jump"]
  ],
  'All words combined.'
];

const QUESTION53 = [
  "### **53. Determine whether any student wrote the word “excellent”**",
  "Student responses:",
  [
    ["good", "great", "awesome"],
    ["excellent", "okay"],
    ["fine", "nice"]
  ],
  'True if any student wrote "excellent".'
];

const QUESTION54 = [
  "### **54. Check whether all recorded rainfall values are under 50**",
  "Rainfall (mm):",
  [12, 45, 23, 38, 49, 15, 42],
  'True if all values < 50.'
];

const QUESTION55 = [
  "### **55. Produce a list of unique movie genres mentioned by a club**",
  "Genres by members:",
  [
    ["drama", "comedy"],
    ["action", "comedy", "thriller"],
    ["drama", "sci-fi"]
  ],
  'Unique genres.'
];

const QUESTION56 = [
  "### **56. Compute the total number of pushups done in all sessions**",
  "Pushup sessions:",
  [25, 30, 20, 35, 40],
  'Total pushups.'
];

const QUESTION57 = [
  "### **57. Create a list of all unique bird species spotted on a trip**",
  "Bird sightings:",
  [
    ["sparrow", "eagle", "sparrow"],
    ["owl", "hawk"],
    ["eagle", "sparrow", "kiwi"]
  ],
  'Unique bird species.'
];

const QUESTION58 = [
  "### **58. Count how many tiles in a mosaic were listed as “red”**",
  "Tile colors:",
  ["blue", "red", "green", "red", "yellow", "red", "blue"],
  'Count of "red" tiles.'
];

const QUESTION59 = [
  "### **59. Sum all distances covered during cycling practice**",
  "Distances (km):",
  [12.5, 18, 15.3, 22, 19.7],
  'Total distance.'
];

const QUESTION60 = [
  "### **60. List unique flavors tried in an ice-cream tasting event**",
  "Flavors tasted:",
  [
    ["vanilla", "chocolate", "strawberry"],
    ["mint", "chocolate", "vanilla"],
    ["cookie dough", "mango"]
  ],
  'Unique ice-cream flavors.'
];

const QUESTION61 = [
  "### **61. Check if any participant scored above 90 in tests**",
  "Test scores:",
  [78, 92, 85, 88, 95, 76],
  'True if any score > 90.'
];

const QUESTION62 = [
  "### **62. Verify if all ages listed for an event are 18 or above**",
  "Ages of attendees:",
  [19, 21, 18, 25, 17, 20, 22],
  'True if all ages >= 18.'
];

const QUESTION63 = [
  "### **63. Combine the ingredients from all recipe attempts**",
  "Recipe attempts:",
  [
    ["flour", "sugar", "eggs"],
    ["butter", "flour", "milk"],
    ["sugar", "eggs", "vanilla"]
  ],
  'All ingredients combined.'
];

const QUESTION64 = [
  "### **64. Reverse the order of dance steps recorded by a choreographer**",
  "Dance steps:",
  ["step", "turn", "jump", "spin", "slide", "kick"],
  'Steps in reverse order.'
];

const QUESTION65 = [
  "### **65. Build a frequency summary of words used in a poem draft**",
  "Poem draft words:",
  ["moon", "star", "night", "moon", "light", "star", "dream", "night"],
  'Object with word frequencies.'
];

const QUESTION66 = [
  "### **66. Determine whether the note “fa” appears in any music sheet**",
  "Music sheets:",
  [
    ["do", "re", "mi", "fa"],
    ["sol", "la", "ti"],
    ["re", "mi", "fa", "sol"]
  ],
  'True if "fa" appears in any sheet.'
];

const QUESTION67 = [
  "### **67. Sum all weights of parcels recorded in a courier office**",
  "Parcel weights (kg):",
  [2.5, 1.8, 3.2, 0.9, 4.1, 2.7],
  'Total weight.'
];

const QUESTION68 = [
  "### **68. List distinct toppings chosen by pizza customers**",
  "Customer orders:",
  [
    ["pepperoni", "mushrooms"],
    ["olives", "pepperoni", "cheese"],
    ["mushrooms", "onions", "olives"]
  ],
  'Unique toppings.'
];

const QUESTION69 = [
  "### **69. Count how many times a student reread a particular chapter**",
  "Reading log (chapter names):",
  ["ch1", "ch2", "ch1", "ch3", "ch1", "ch2", "ch1"],
  'Count of "ch1".'
];

const QUESTION70 = [
  "### **70. Combine all color swatches from three design sets**",
  "Design sets (color names):",
  [
    ["orange-red", "lime green", "bright blue"],
    ["golden yellow", "orange-red", "crimson red"],
    ["lime green", "deep red"]
  ],
  'All colors combined.'
];

const QUESTION71 = [
  "### **71. Check if any experiment reading reached the maximum threshold of 100**",
  "Experiment readings:",
  [85, 92, 100, 78, 95],
  'Did any reading hit 100?'
];

const QUESTION72 = [
  "### **72. Confirm that every participant completed at least one task**",
  "Tasks completed per participant:",
  [3, 1, 4, 2, 1],
  'Did every participant complete at least one task?'
];

const QUESTION73 = [
  "### **73. List all unique destinations selected in the travel club survey**",
  "Survey responses (destinations):",
  [
    ["Paris", "Tokyo", "New York"],
    ["Tokyo", "Bali", "Paris"],
    ["Cape Town", "Bali"]
  ],
  'All unique destinations.'
];

const QUESTION74 = [
  "### **74. Calculate the total hours spent practicing an instrument**",
  "Practice sessions (hours):",
  [2.5, 3, 1.5, 4, 2],
  'Total practice hours.'
];

const QUESTION75 = [
  "### **75. Identify all distinct types of plants recorded during fieldwork**",
  "Field notes (plant types):",
  [
    ["Fern", "Orchid", "Cactus"],
    ["Orchid", "Rose", "Fern"],
    ["Bamboo", "Cactus"]
  ],
  'All distinct plant types.'
];

const count = (result, element, toCount) => {
  return result += element === toCount ? 1 : 0;
}

const removeDuplicate = (result, element) => {
  if (!result.includes(element)) {
    result.push(element)
  }
  return result;
}

const sum = (result, element) => {
  return result + element;
}

const hasMatch = (element, matchingElement) => {
  return element === matchingElement;
}

const isTemperatureUnder32 = (element) => {
  return element < 32;
}

const isBelow120 = (element) => {
  return element < 120;
}

const isDistinct = (element, index, array) => {
  return !array.some((ele, i) => ele === element && index !== i);
}

const isPositive = (element) => {
  return element > 0;
}

const isABove7 = (element) => {
  return element > 7;
}

const isEquals4 = (element) => {
  return element === 4;
}

const isExcellent = (element) => {
  return element === "excellent";
}

const isUnder50 = (element) => {
  return element < 50;
}

const isGreater90 = (element) => {
  return element > 90;
}

const isAbove100 = (element) => {
  return element >= 100;
}

const isAbove1 = (element) => {
  return element >= 1;
}

const isGreater18 = (element) => {
  return element >= 18;
}

const reverse = (reverse, element) => {
  reverse.unshift(element);
  return reverse;
}

const frequency = (frequency, element) => {
  if (!frequency.some(ele => element === ele[0])) {
    frequency.push([element, 1]);
    return frequency;
  }

  const index = frequency.reduce((acc, ele, index) => {
    return ele[0] === element ? index : acc
  }, 0)

  frequency[index][1] += 1;
  return frequency;
}

const question1Answear = (data, helper) => {
  return data.reduce((count, element) => helper(count, element, "blue"), 0);
}

const question2Answear = (data, helper) => {
  return data.flat(helper);
}

const question3Answear = (data, helper) => {
  return data.reduce(helper, []);
}

const question4Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question5Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question6Answear = (data, helper) => {
  return data.flat().some(ele => helper(ele, "do"));
}

const question7Answear = (data, helper) => {
  return data.flat().every(helper);
}

const question8Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question9Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question10Answear = (data, helper) => {
  return data.reduce((count, element) => helper(count, element, "Dune"), 0);
}

const question11Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question12Answear = (data, helper) => {
  return data.flat().some(ele => helper(ele, "so"));
}

const question13Answear = (data, helper) => {
  return data.flat().reduce(helper);
}

const question14Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question15Answear = (data, helper) => {
  return data.flat().reduce((count, element) => helper(count, element, "deer"), 0);
}

const question16Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question17Answear = (data, helper) => {
  return data.flat().some(ele => helper(ele, "turn"));
}

const question18Answear = (data, helper) => {
  return data.flat().reduce(helper);
}

const question19Answear = (data, helper) => {
  return data.flat().reduce(helper);
}

const question20Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question21Answear = (data, helper) => {
  return data.flat().reduce(helper);
}

const question22Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question23Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question24Answear = (data, helper) => {
  return data.flat().reduce((count, element) => helper(count, element, "chocolate"), 0);;
}

const question25Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question26Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question27Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question28Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question29Answear = (data, helper) => {
  return data.flat().every(helper);
}

const question30Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question31Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question32Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question33Answear = (data, helper) => {
  return data.flat().every(helper);
}

const question34Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question35Answear = (data, helper) => {
  return data.flat().reduce((acc, ele) => helper(acc, ele, "track1"), 0);
}

const question36Answear = (data, helper) => {
  return data.flat().filter(helper, 0);
}

const question37Answear = (data, helper) => {
  return data.flat().filter(helper, 0);
}

const question38Answear = (data, helper) => {
  return data.flat().filter(helper, 0);
}

const question39Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question40Answear = (data, helper) => {
  return data.flat().some(helper);
}

const question41Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question42Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question43Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question44Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question45Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question46Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question47Answear = (data, helper) => {
  return data.flat().some(helper);
}

const question48Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question49Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question50Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question51Answear = (data, helper) => {
  return data.flat().reduce((acc, ele) => helper(acc, ele, "banana"), 0);
}

const question52Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question53Answear = (data, helper) => {
  return data.flat().some(helper);
}

const question54Answear = (data, helper) => {
  return data.flat().every(helper);
}

const question55Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question56Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question57Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question58Answear = (data, helper) => {
  return data.flat().reduce((acc, ele) => helper(acc, ele, "red"), 0);
}

const question59Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question60Answear = (data, helper) => {
  return data.flat().filter(helper);
}

const question61Answear = (data, helper) => {
  return data.flat().some(helper);
}

const question62Answear = (data, helper) => {
  return data.flat().every(helper);
}

const question63Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question64Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question65Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question66Answear = (data, helper) => {
  return data.flat().some(ele => helper(ele, "fa"));
}

const question67Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question68Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question69Answear = (data, helper) => {
  return data.flat().reduce((acc, ele) => helper(acc, ele, "ch1"), 0);
}

const question70Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question71Answear = (data, helper) => {
  return data.flat().some(helper);
}

const question72Answear = (data, helper) => {
  return data.flat().every(helper);
}

const question73Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const question74Answear = (data, helper) => {
  return data.flat().reduce(helper, 0);
}

const question75Answear = (data, helper) => {
  return data.flat().reduce(helper, []);
}

const showReuslt = (question, functionToUse, helper) => {
  const data = question[2];
  console.log(question[0]);
  console.log(question[1]);
  console.log(data);
  console.log(question[3]);
  const result = functionToUse(data, helper)
  console.log("result", result);
}

const QUESTIONWITHSOLUTION = [
  [QUESTION1, question1Answear, count],
  [QUESTION2, question2Answear, 1],
  [QUESTION3, question3Answear, removeDuplicate],
  [QUESTION4, question4Answear, removeDuplicate],
  [QUESTION5, question5Answear, sum],
  [QUESTION6, question6Answear, hasMatch],
  [QUESTION7, question7Answear, isTemperatureUnder32],
  [QUESTION8, question8Answear, sum],
  [QUESTION9, question9Answear, removeDuplicate],
  [QUESTION10, question10Answear, count],
  [QUESTION11, question11Answear, removeDuplicate],
  [QUESTION12, question12Answear, hasMatch],
  [QUESTION13, question13Answear, sum],
  [QUESTION14, question14Answear, removeDuplicate],
  [QUESTION15, question15Answear, count],
  [QUESTION16, question16Answear, removeDuplicate],
  [QUESTION17, question17Answear, hasMatch],
  [QUESTION18, question18Answear, sum],
  [QUESTION19, question19Answear, sum],
  [QUESTION20, question20Answear, removeDuplicate],
  [QUESTION21, question21Answear, sum],
  [QUESTION22, question22Answear, removeDuplicate],
  [QUESTION23, question23Answear, removeDuplicate],
  [QUESTION24, question24Answear, count],
  [QUESTION25, question25Answear, removeDuplicate],
  [QUESTION26, question26Answear, sum],
  [QUESTION27, question27Answear, isDistinct],
  [QUESTION28, question28Answear, sum],
  [QUESTION29, question29Answear, isPositive],
  [QUESTION30, question30Answear, sum],
  [QUESTION31, question31Answear, isDistinct],
  [QUESTION32, question32Answear, isDistinct],
  [QUESTION33, question33Answear, isBelow120],
  [QUESTION34, question34Answear, sum],
  [QUESTION35, question35Answear, count],
  [QUESTION36, question36Answear, isDistinct],
  [QUESTION37, question37Answear, isDistinct],
  [QUESTION38, question38Answear, isDistinct],
  [QUESTION39, question39Answear, sum],
  [QUESTION40, question40Answear, isABove7],
  [QUESTION41, question41Answear, sum],
  [QUESTION42, question42Answear, isDistinct],
  [QUESTION43, question43Answear, isDistinct],
  [QUESTION44, question44Answear, sum],
  [QUESTION45, question45Answear, sum],
  [QUESTION46, question46Answear, isDistinct],
  [QUESTION47, question47Answear, isEquals4],
  [QUESTION48, question48Answear, isDistinct],
  [QUESTION49, question49Answear, sum],
  [QUESTION50, question50Answear, isDistinct],
  [QUESTION51, question51Answear, count],
  [QUESTION52, question52Answear, removeDuplicate],
  [QUESTION53, question53Answear, isExcellent],
  [QUESTION54, question54Answear, isUnder50],
  [QUESTION55, question55Answear, removeDuplicate],
  [QUESTION56, question56Answear, sum],
  [QUESTION57, question57Answear, removeDuplicate],
  [QUESTION58, question58Answear, count],
  [QUESTION59, question59Answear, sum],
  [QUESTION60, question60Answear, isDistinct],
  [QUESTION61, question61Answear, isGreater90],
  [QUESTION62, question62Answear, isGreater18],
  [QUESTION63, question63Answear, removeDuplicate],
  [QUESTION64, question64Answear, reverse],
  [QUESTION65, question65Answear, frequency],
  [QUESTION66, question66Answear, hasMatch],
  [QUESTION67, question67Answear, sum],
  [QUESTION68, question68Answear, removeDuplicate],
  [QUESTION69, question69Answear, count],
  [QUESTION70, question70Answear, removeDuplicate],
  [QUESTION71, question71Answear, isAbove100],
  [QUESTION72, question72Answear, isAbove1],
  [QUESTION73, question73Answear, removeDuplicate],
  [QUESTION74, question74Answear, sum],
  [QUESTION75, question75Answear, removeDuplicate],
];

const solution = () => {
  QUESTIONWITHSOLUTION.map(element => {
    showReuslt(element[0], element[1], element[2]);
    console.log();
  })
}

const main = () => {
  solution();
}

main();