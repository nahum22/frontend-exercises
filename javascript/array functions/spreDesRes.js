//spread destructure and rest

const destinaiton = {
  name: "Paris",
  country: "France",
  rating: 5,
  continent: "Europe",
};

const result = ([a, b, c] = [
  destinaiton.name,
  destinaiton.country,
  destinaiton.rating,
]);

//ex2

let topDestinations = ["Paris", "Tokyo", "New York", "London"];

topDestinations = [
  topDestinations[0],
  topDestinations[1],
  topDestinations[2],
  topDestinations[3],
];
//console.log(topDestinations);

//ex3

const destinationratings = { Paris: 5, Tokyo: 4 };

const updates = { Paris: 4, Tokyo: 5 };

function update(array, updates) {
  for (item of Object.entries(updates)) {
    if (typeof array[item[0]] !== "undefined") {
      array[item[0]] = item[1];
    }
  }
  return array;
}
//update(destinationratings, updates);

update(destinationratings, updates);

//ex4

const itinerary1 = ["Visit Louvre", "Eiffel Tower", "Seine River Cruise"];

const itinerary2 = ["Eiffel Tower", "Visit Louvre", "Montmartre"];

const resulto = [...itinerary1, ...itinerary2];

const ourResult = Array.from(new Set(resulto));

//ex5

const travelerDetails = {
  name: "John",
  accomodations: {
    first: "Hilton Paris Opers",
    second: "Mercure Paris Centre Tour Eiffel",
    third: "Ibis Paris Montamrtre",
  },
};

const [var1, var2] = [
  travelerDetails.accomodations.first,
  travelerDetails.accomodations.second,
];

//ex6

const baseProfile = {
  name: "Jane",
  nationality: "american",
};

const preferances = {
  food: "vegetarian",
  intrests: ["Museums", "Art"],
};

const resultp = { ...baseProfile, ...preferances };

//ex7

const travelerDetailsr = {
  name: "Dave",
  nationality: "Canadian",
  interests: ["Hiking", "Photograpy", "food"],
};

const newHobbies = ["a", "b", "c"];

travelerDetailsr.interests = [...travelerDetailsr.interests, ...newHobbies];

//ex8

const travelItinerary = [
  ["Paris", "Lyon"],
  ["Lyon", "Nice"],
  ["Nice", "Paris"],
];

function flatten(items) {
  let result = [];

  for (item of items) {
    result = [...result, ...item];
  }

  result = Array.from(new Set(result));

  return result;
}

//ex9

const travelers = [
  { name: "Aice", destinations: ["Berlin", "Amsterdam"] },
  { name: "Bob", destinations: ["Tokyo", "Kyoto"] },
  { name: "Carla", destinations: ["New Yorl", "Boston"] },
];

function extractFirst(travelers) {
  return travelers.map((item) => item.destinations[0]);
}

//ex10

const itineraries = [
  { name: "Explore the Alps", difficulty: 7 },
  { name: "Paris in a Day", difficulty: 4 },
];

function scoreIncreaser(name, score) {
  itineraries.map((item) => {
    if (item.name === name) {
      item.difficulty += score;
    }
  });
}
scoreIncreaser("Explore the Alps", 90);
console.log(itineraries);
