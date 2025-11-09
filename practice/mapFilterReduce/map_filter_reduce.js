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
    [5, 8],
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

const QUESTION76 = [
  "### **76. Count occurrences of a specific sound in a phonetics study**",
  "Recorded sounds:",
  ["p", "t", "k", "p", "s", "p"],
  "Target sound:",
  "p",
  'Number of times "p" appears.'
];

const QUESTION77 = [
  "### **77. Combine all syllables used in language drills**",
  "Drill sets (syllables):",
  [
    ["ba", "bi", "bu"],
    ["ma", "mi", "ba"],
    ["bu", "na", "mi"]
  ],
  'All unique syllables combined.'
];

const QUESTION78 = [
  "### **78. Check if any measurement is exactly zero**",
  "Measurements:",
  [12.5, 0, 8.3, 15.7, 9.1],
  'Is any measurement exactly 0?'
];

const QUESTION79 = [
  "### **79. Verify that all listed items weigh less than 10 grams**",
  "Item weights (grams):",
  [4.2, 7.8, 9.5, 3.1, 6.9],
  'Do all items weigh less than 10 grams?'
];

const QUESTION80 = [
  "### **80. Summarize how many times each color appears in a creative art project**",
  "Color usage across sections:",
  [
    ["red", "blue", "red"],
    ["yellow", "blue", "red"],
    ["yellow", "green"]
  ],
  'Object with color counts.'
];

const QUESTION81 = [
  "### **81. Reverse the order of instructions written for a scavenger hunt**",
  "Scavenger hunt instructions:",
  [
    "Find the old oak tree.",
    "Look under the red bench.",
    "Check behind the library sign.",
    "Search inside the hollow log."
  ],
  'Reversed list of instructions.'
];

const QUESTION82 = [
  "### **82. Count how many entries in a journal mention “rain”**",
  "Journal entries:",
  [
    "Today was sunny and warm.",
    "It started to rain in the afternoon.",
    "Rain all day — stayed inside.",
    "Clear skies, no rain.",
    "Heavy rain delayed the hike."
  ],
  'Number of entries containing the word “rain” (case-insensitive).'
];

const QUESTION83 = [
  "### **83. Merge all small poetry fragments into one list of lines**",
  "Poetry fragments:",
  [
    ["Roses are red,", "Violets are blue,"],
    ["The sky is vast,", "And so are you."],
    ["Whispers in wind,", "Secrets untold."]
  ],
  'Single flat list of all lines.'
];

const QUESTION84 = [
  "### **84. List unique cartoon characters favored by children**",
  "Children’s favorite lists:",
  [
    ["SpongeBob", "Pikachu", "Mickey Mouse"],
    ["Dora", "SpongeBob", "Bluey"],
    ["Pikachu", "Bluey", "Peppa Pig"]
  ],
  'Sorted list of unique characters.'
];

const QUESTION85 = [
  "### **85. Add up all points scored by a team across multiple games**",
  "Points per game:",
  [
    [12, 15, 8],
    [20, 18],
    [14, 22, 16]
  ],
  'Total points across all games.'
];

const QUESTION86 = [
  "### **86. Check whether any team scored exactly 50 points**",
  "Points per game:",
  [
    [12, 15, 8],
    [20, 18],
    [14, 22, 16],
    [10, 10, 10, 10, 10]
  ],
  'Check if any team has a total of exactly 50 points.'
];

const QUESTION87 = [
  "### **87. Ensure all pH values recorded are below 8**",
  "Recorded pH values:",
  [7.1, 7.5, 7.9, 8.0, 7.4],
  'Ensure all pH values are below 8.'
];

const QUESTION88 = [
  "### **88. Count unique flavors tasted in a chocolate workshop**",
  "Chocolate flavors tasted:",
  ['Dark', 'Milk', 'White', 'Dark', 'Milk', 'Hazelnut'],
  'Count the unique chocolate flavors tasted.'
];

const QUESTION89 = [
  "### **89. Sum all minutes of meditation logged across sessions**",
  "Meditation session times (minutes):",
  [20, 45, 30, 15, 25],
  'Sum all minutes spent meditating.'
];

const QUESTION90 = [
  "### **90. Identify every unique tool used in a repair workshop**",
  "Tools used in the workshop:",
  ['Hammer', 'Screwdriver', 'Wrench', 'Hammer', 'Pliers'],
  'Identify the unique tools used.'
];

const QUESTION91 = [
  "### **91. Count how many shirts in a laundry batch were listed as “white”**",
  "Laundry batch (shirt colors):",
  ['white', 'blue', 'white', 'green', 'white', 'black'],
  'Count how many shirts are listed as “white”.'
];

const QUESTION92 = [
  "### **92. Combine all notes written during a meeting into one list**",
  "Notes from each participant:",
  [
    ['Discuss budget', 'Review project timeline'],
    ['Assign new tasks', 'Confirm next meeting date'],
    ['Plan presentation', 'Send summary email']
  ],
  'Combine all notes into one single list.'
];

const QUESTION93 = [
  "### **93. Check if any item in a shipment is marked “fragile”**",
  "Shipment items:",
  ['books', 'glass vase', 'clothes', 'fragile - lamp', 'toys'],
  'Check whether any item is marked as “fragile”.'
];

const QUESTION94 = [
  "### **94. Verify that all letters written by participants are lowercase**",
  "Letters written:",
  ['hello', 'thank you', 'see you soon', 'goodbye'],
  'Ensure all letters are completely lowercase.'
];

const QUESTION95 = [
  "### **95. Reverse a list of moves recorded during a chess game**",
  "Moves recorded:",
  ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
  'Reverse the order of the recorded chess moves.'
];

const QUESTION96 = [
  "### **96. Build a frequency list for musical notes practiced in a session**",
  "Musical notes practiced:",
  ['C', 'D', 'E', 'C', 'G', 'C', 'D', 'F', 'E'],
  'Build a frequency list showing how many times each note was practiced.'
];

const QUESTION97 = [
  "### **97. Count the number of times “error” appears in a log of messages**",
  "System log messages:",
  ['startup complete', 'error: file not found', 'loading modules', 'error: access denied', 'shutdown sequence', 'error: timeout'],
  'Count how many times the word “error” appears in the log.'
];

const QUESTION98 = [
  "### **98. Gather all ingredients used in three versions of the same dish**",
  "Ingredients per version:",
  [
    ['tomato', 'onion', 'garlic'],
    ['onion', 'pepper', 'basil'],
    ['tomato', 'garlic', 'olive oil']
  ],
  'Gather all unique ingredients used across the three versions.'
];

const QUESTION99 = [
  "### **99. Check if any student skipped all activity sessions**",
  "Activity participation (1 = attended, 0 = skipped):",
  [
    [1, 1, 0],
    [0, 0, 0],
    [1, 0, 1],
    [1, 1, 1]
  ],
  'Check if any student has skipped all activity sessions.'
];

const QUESTION100 = [
  "### **100. Create a list of distinct songs hummed by children on a bus ride**",
  "Songs hummed by children:",
  ['Twinkle Twinkle', 'Happy Birthday', 'Twinkle Twinkle', 'Baby Shark', 'Old MacDonald', 'Baby Shark'],
  'List all distinct songs hummed during the ride.'
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

const isBelow = (element, threshold) => {
  return element < threshold;
}

const isDistinct = (element, index, array) => {
  return !array.some((ele, i) => ele === element && index !== i);
}

const isAbove = (element, threshold) => {
  return element > threshold;
}

const isEquals = (element, threshold) => {
  return element === threshold;
}

const reverse = (reverse, element) => {
  reverse.unshift(element);
  return reverse;
}

const isSentainContains = (count, ele, word) => {
  count += ele.toLowerCase().includes(word) ? 1 : 0;
  return count;
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

const isSumEquals = (ele, threshold) => {
  return ele.reduce(sum, 0) === threshold;
}

const toLowerCase = (ele) => {
  return ele.toLowerCase();
}

const isSkippedAll = (ele) => {
  return ele.every(ele => ele === 0);
}

// const question99Answear = (data, helper) => {
//   return data.some(helper);
// }

const answearForCount = (data, helper, initialValue, toCount) => {
  return data.flatMap(x => x).reduce((count, element) => helper(count, element, toCount), initialValue);
}

const answearForReduce = (data, helper, initialValue) => {
  return data.flatMap(ele => ele).reduce(helper, initialValue);
}

const answearForAnyMatch = (data, helper, initialValue, threshold) => {
  return data.flatMap(ele => ele).some(ele => helper(ele, threshold));
}

const answearForAnyMatchInArray = (data, helper, initialValue, threshold) => {
  return data.some(ele => helper(ele, threshold));
}

const answearForEveryMatch = (data, helper, initialValue, threshold) => {
  return data.flatMap(ele => ele).every(ele => helper(ele, threshold));
}

const answearForIsDistinct = (data, helper) => {
  return data.flatMap(ele => ele).filter(helper);
}

const answearForMap = (data, helper) => {
  return data.flatMap(ele => ele).map(helper);
}

const flatOnce = (data) => {
  return data.flatMap(ele => ele);
}

const showReuslt = (question, functionToUse, helper, initilaValue, arg) => {
  const data = question[2];
  console.log(question[0]);
  console.log(question[1]);
  console.log(data);
  console.log(question[3]);
  const result = functionToUse(data, helper, initilaValue, arg);
  console.log("result", result);
}

const QUESTIONWITHSOLUTION = [
  [QUESTION1, answearForCount, count, 0, "blue"],
  [QUESTION2, flatOnce],
  [QUESTION3, answearForReduce, removeDuplicate, []],
  [QUESTION4, answearForReduce, removeDuplicate, []],
  [QUESTION5, answearForReduce, sum, 0],
  [QUESTION6, answearForAnyMatch, hasMatch, 0, "do"],
  [QUESTION7, answearForEveryMatch, isBelow, 0, 32],
  [QUESTION8, answearForReduce, sum, 0],
  [QUESTION9, answearForReduce, removeDuplicate, []],
  [QUESTION10, answearForCount, count, 0, "Dune"],
  [QUESTION11, answearForReduce, removeDuplicate, []],
  [QUESTION12, answearForAnyMatch, hasMatch, 0, "so"],
  [QUESTION13, answearForReduce, sum, 0],
  [QUESTION14, answearForReduce, removeDuplicate, []],
  [QUESTION15, answearForCount, count, 0, "deer"],
  [QUESTION16, answearForReduce, removeDuplicate, []],
  [QUESTION17, answearForAnyMatch, hasMatch, 0, "turn"],
  [QUESTION18, answearForReduce, sum, 0],
  [QUESTION19, answearForReduce, sum, 0],
  [QUESTION20, answearForReduce, removeDuplicate, []],
  [QUESTION21, answearForReduce, sum, 0],
  [QUESTION22, answearForReduce, removeDuplicate, []],
  [QUESTION23, answearForReduce, removeDuplicate, []],
  [QUESTION24, answearForCount, count, 0, "chocolate"],
  [QUESTION25, answearForReduce, removeDuplicate, []],
  [QUESTION26, answearForReduce, sum, 0],
  [QUESTION27, answearForIsDistinct, isDistinct],
  [QUESTION28, answearForReduce, sum, 0],
  [QUESTION29, answearForEveryMatch, isAbove, 0, 0],
  [QUESTION30, answearForReduce, sum, 0],
  [QUESTION31, answearForIsDistinct, isDistinct],
  [QUESTION32, answearForIsDistinct, isDistinct],
  [QUESTION33, answearForEveryMatch, isBelow, 0, 120],
  [QUESTION34, answearForReduce, sum, 0],
  [QUESTION35, answearForCount, count, 0, "track1"],
  [QUESTION36, answearForIsDistinct, isDistinct],
  [QUESTION37, answearForIsDistinct, isDistinct],
  [QUESTION38, answearForIsDistinct, isDistinct],
  [QUESTION39, answearForReduce, sum, 0],
  [QUESTION40, answearForAnyMatch, isAbove, 0, 7],
  [QUESTION41, answearForReduce, sum, 0],
  [QUESTION42, answearForIsDistinct, isDistinct],
  [QUESTION43, answearForIsDistinct, isDistinct],
  [QUESTION44, answearForReduce, sum, 0],
  [QUESTION45, answearForReduce, sum, 0],
  [QUESTION46, answearForIsDistinct, isDistinct],
  [QUESTION47, answearForAnyMatch, isEquals, 0, 4],
  [QUESTION48, answearForIsDistinct, isDistinct],
  [QUESTION49, answearForReduce, sum, 0],
  [QUESTION50, answearForIsDistinct, isDistinct],
  [QUESTION51, answearForCount, count, 0, "banana"],
  [QUESTION52, answearForReduce, removeDuplicate, []],
  [QUESTION53, answearForAnyMatch, isEquals, 0, "excellent"],
  [QUESTION54, answearForEveryMatch, isBelow, 0, 50],
  [QUESTION55, answearForReduce, removeDuplicate, []],
  [QUESTION56, answearForReduce, sum, 0],
  [QUESTION57, answearForReduce, removeDuplicate, []],
  [QUESTION58, answearForCount, count, 0, "red"],
  [QUESTION59, answearForReduce, sum, 0],
  [QUESTION60, answearForIsDistinct, isDistinct],
  [QUESTION61, answearForAnyMatch, isAbove, 0, 90],
  [QUESTION62, answearForEveryMatch, isAbove, 0, 17],
  [QUESTION63, answearForReduce, removeDuplicate, []],
  [QUESTION64, answearForReduce, reverse, []],
  [QUESTION65, answearForReduce, frequency, []],
  [QUESTION66, answearForAnyMatch, hasMatch, 0, "fa"],
  [QUESTION67, answearForReduce, sum, 0],
  [QUESTION68, answearForReduce, removeDuplicate, []],
  [QUESTION69, answearForCount, count, 0, "ch1"],
  [QUESTION70, answearForReduce, removeDuplicate, []],
  [QUESTION71, answearForAnyMatch, isEquals, 0, 100],
  [QUESTION72, answearForEveryMatch, isAbove, 0, 1],
  [QUESTION73, answearForReduce, removeDuplicate, []],
  [QUESTION74, answearForReduce, sum, 0],
  [QUESTION75, answearForReduce, removeDuplicate, []],
  [QUESTION76, answearForCount, count, 0, "p"],
  [QUESTION77, answearForReduce, removeDuplicate, []],
  [QUESTION78, answearForAnyMatch, isEquals, 0, 0],
  [QUESTION79, answearForEveryMatch, isBelow, 0, 100],
  [QUESTION80, answearForReduce, frequency, []],
  [QUESTION81, answearForReduce, reverse, []],
  [QUESTION82, answearForCount, isSentainContains, 0, "rain"],
  [QUESTION83, flatOnce],
  [QUESTION84, answearForIsDistinct, isDistinct],
  [QUESTION85, answearForReduce, sum, 0],
  [QUESTION86, answearForAnyMatchInArray, isSumEquals, 0, 50],
  [QUESTION87, answearForEveryMatch, isBelow, 0, 8],
  [QUESTION88, answearForReduce, removeDuplicate, []],
  [QUESTION89, answearForReduce, sum, 0],
  [QUESTION90, answearForIsDistinct, isDistinct],
  [QUESTION91, answearForCount, count, 0, "white"],
  [QUESTION92, flatOnce],
  [QUESTION93, answearForAnyMatch, ele => ele.includes("fragile")],
  [QUESTION94, answearForMap, toLowerCase],
  [QUESTION95, answearForReduce, reverse, []],
  [QUESTION96, answearForReduce, frequency, []],
  [QUESTION97, answearForCount, isSentainContains, 0, "error"],
  [QUESTION98, answearForReduce, removeDuplicate, []],
  [QUESTION99, data => data.some(ele => ele.every(ele => ele === 0)),],
  [QUESTION100, answearForReduce, removeDuplicate, []]
];

const solution = () => {
  QUESTIONWITHSOLUTION.map(element => {
    showReuslt(element[0], element[1], element[2], element[3], element[4]);
    console.log();
  })
}

const main = () => {
  solution();
}

main();