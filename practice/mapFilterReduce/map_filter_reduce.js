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
  return data.flat(Infinity).reduce(helper, []);
}

const question5Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, 0);
}

const question6Answear = (data, helper) => {
  return data.flat(Infinity).some(ele => helper(ele, "do"));
}

const question7Answear = (data, helper) => {
  return data.flat(Infinity).every(helper);
}

const question8Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, 0);
}

const question9Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, []);
}

const question10Answear = (data, helper) => {
  return data.reduce((count, element) => helper(count, element, "Dune"), 0);
}

const question11Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, []);
}

const question12Answear = (data, helper) => {
  return data.flat(Infinity).some(ele => helper(ele, "so"));
}

const question13Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper);
}

const question14Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, []);
}

const question15Answear = (data, helper) => {
  return data.flat(Infinity).reduce((count, element) => helper(count, element, "deer"), 0);
}

const question16Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, []);
}

const question17Answear = (data, helper) => {
  return data.flat(Infinity).some(ele => helper(ele, "turn"));
}

const question18Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper);
}

const question19Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper);
}

const question20Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, []);
}

const question21Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper);
}

const question22Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, []);
}

const question23Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, []);
}

const question24Answear = (data, helper) => {
  return data.flat(Infinity).reduce((count, element) => helper(count, element, "chocolate"), 0);;
}

const question25Answear = (data, helper) => {
  return data.flat(Infinity).reduce(helper, []);
}

const showReuslt = (description, functionToUse, helper) => {
  const data = description[2];
  console.log(description[0]);
  console.log(description[1]);
  console.log(data);
  console.log(description[3]);
  const result = functionToUse(data, helper)
  console.log("result", result);
}

const QUESTIONWITHSOLUTION = [
  [QUESTION1, question1Answear, count],
  [QUESTION2, question2Answear, Infinity],
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
];

const solution = () => {
  for (const element of QUESTIONWITHSOLUTION) {
    showReuslt(element[0], element[1], element[2]);
    console.log();
  }
}

const main = () => {
  solution();
}

main();