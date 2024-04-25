//impure functions
//1
let travelDestinations;
function initializeDestinations() {
  travelDestinations = [];
}
initializeDestinations();

//2

function addDestination(destinationName, travelDate) {
  travelDestinations.push([destinationName, travelDate]);
}
//3

function findTravelDate(destinationName) {
  for (i = 0; i < travelDestinations.length; i++) {
    if (travelDestinations[i][0] === destinationName) {
      return travelDestinations[i][1];
    }
  }
  return "destination not found";
}

//4
function updateTravelDate(destinationName, newTravrlDate) {
  for (i = 0; i < travelDestinations.length; i++) {
    if (travelDestinations[i][0] === destinationName) {
      travelDestinations[i][1] = newTravrlDate;
    }
  }
  return "destination not found";
}

function removeDestination(destinationName) {
  for (i = 0; i < travelDestinations.length; i++) {
    if (travelDestinations[i][0] === destinationName) {
      unset(travelDestinations[i]);
    }
  }
}
//ex6

function listDestinations() {
  for (i = 0; i < travelDestinations.length; i++) {
    console.log(travelDestinations[i][0] + "-" + travelDestinations[i][1]);
  }
}

//ex7
function findNextDestination(destinationName) {
  let found = false;
  for (i = 0; i < travelDestinations.length - 1; i++) {
    if (travelDestinations[i][0] === destinationName) {
      console.log(travelDestinations[i + 1][1] + travelDestinations[i + 1][0]);
      found = true;
    }
  }
  if (!found) {
    console.log("not found");
  }
}
// Pure Functions

// 1. Determine the Average Rating of Trips
// Input: [8.5, 7.9, 6.3, 9.2, 8.1]

const trips = [8.5, 7.9, 6.3, 9.2, 8.1];

function calc_avg(numbers) {
  let len = 0;
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    len += 1;
  }
  return Math.floor(sum / len);
}

// 2. Extract Organizer Names from Trip Names
const desc = [
  "Europe Exploration (2020) - Organized by Wanderlust Travel",
  "Asian Adventure (2019) - Organized by Globe Trotters",
  "Caribbean Cruise (2022) - Organized by Cruise Experts",
];

function ExtractOrganizerNames(Names) {
  const results = [];

  for (i = 0; i < Names.length; i++) {
    results.push(Names[i].slice(Names[i].indexOf("Organized by") + 13, -1));
  }

  return results;
}
ExtractOrganizerNames(desc);

// 3. Check if a Trip Title Contains a Specific Word
// Input: ('European Adventure', 'Europe')

function containsWordInTitle(title, word) {
  return title.includes(word);
}

// 4. Check if All Trip Titles Start with the Same Letter
const titlef = [
  "Paris Getaway",
  "Prairie Expedition",
  "Portugal Experience",
  "Or",
];

function allTitlesStartWithSameLetter(titles) {
  const value1 = titles[0][0];
  let bool = true;

  for (i = 1; i < titles.length; i++) {
    if (titles[i][0] == value1) {
      console.log("ppppp");
      bool = false;
    }
  }
  return bool;
}

// 5. Concatenate All Trip Types into a Single String
// Input: ['City', 'Beach', 'Mountain', 'Cruise']
const trip_types = ["City", "Beach", "Mountain", "Cruise"];

function concatenateTypes(array) {
  return array.join(",");
}

// 6. Check if Any Trip Title is Longer Than 15 Characters
const titles = ["European Adventure", "Exploring Asia", "African Safari"];

function anyTitleLongerTHanFifteenCharecters(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i].length > 15) {
      return true;
    }
  }
  return false;
}

// 7. Find Trips Organized by a Specific Organizer
const examp = [
  ["European Adventure", "Asian Expedition", "Caribbean Cruise"],
  ["Wanderlust Travel", "Globe Trotters", "Cruise Experts"],
];

function findTripsByOrganozer(exemp, org) {
  const results = [];
  for (i = 0; i < exemp[0].length; i++) {
    if (exemp[1][i] === org) {
      results.push(exemp[0][i]);
    }
  }
  return results;
}

// 8. Capitalize the First Letter of Each Trip Title
// Input: ['european adventure', 'asian expedition', 'caribbean cruise']
const destination_loweer = [
  "european adventure",
  "asian expedition",
  "caribbean cruise",
];

function CapitalizeFirstLetter(destinations) {
  const results = [];
  for (i = 0; i < destinations.length; i++) {
    results.push(
      destinations[i][0].toUpperCase() +
        destinations[i].slice(1, destinations[i].length)
    );
  }

  return results;
}

// Bonus Exercises

// 1. Sort Destination Ratings
// Input: [4, 2, 5, 3, 1]

input = [4, 2, 5, 1];

function sortDestinationsRatings(input) {
  return input.sort((a, b) => a - b);
}

// 2. Average Rating of Top N Destinations
// Input: ([2, 3, 5, 4, 1], 3)

function averageTopNDestinations(array, number) {
  const array_sorted = array.sort((a, b) => b - a);

  let sum = 0;

  for (i = 0; i < number; i++) {
    sum += array_sorted[i];
  }

  return sum / number;
}

averageTopNDestinations([4, 2, 5, 3, 1], 3);

// 3. Create Rating Frequency Map for Destinations
function destinationRatingFrequency(array_num) {
  const result = [];
  const set = new Set(array_num);
  const set_array = Array.from(set);
  console.log(set_array);
  for (i = 0; i < set_array.length; i++) {
    let num_check = set_array[i];
    let freq = 0;

    for (i1 = 0; i1 < array_num.length; i1++) {
      if (array_num[i1] === num_check) {
        freq += 1;
      }
    }
    result.push(array_num[i1,freq])
  }

  return result;
} //


console.log(destinationRatingFrequency([3, 4, 3, 5, 4, 5, 5]))

// 4. Normalize Destination Ratings

function normalizeDestinationRarings(array, min_value, max_value) {

const result=[];
  const max_in_array= array.sort((a, b) => b - a)[0];
 const min_in_array= array.sort((a, b) => a - b)[0];


 const range=max_in_array-min_in_array;
for(i=0;i<array.length;i++){
  result.push(min_value+  (array[i]-min_in_array)/(range)*(max_value-min_value)  )
}

console.log(result);

}

normalizeDestinationRarings([1, 2, 3, 4, 5], 0, 100)
