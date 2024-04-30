const destination = {
  name: "",
  country: "",
  yearVisited: 0,
  activities: ["activity1", "activity2"],
  ratings: [],
};

//ex2

console.log(destination["activities"][1]);
console.log(destination.activities[1]);
Object.assign(destination, {
  landmark: [
    { name: "some_name", description: "some_description" },
    { name: "some_name_", description: "some_description_" },
  ],
});

console.log(destination["landmark"][1]["name"]);
console.log(destination.landmark[1].name);

//ex3
destination.yearVisited = 1999;

destination.ratings.push(5);

delete destination.country;

destination.landmark[0].description = "new_description";

console.log("country" in destination);

//ex4

const destinations = [
  {
    name: "Eiffel Tower",
    details: { visitorsPeerYear: 700000, entryFee: "25 USD" },
  },
  {
    name: "Great Wall Of Chaina",
    details: { visitorsPeerYear: 1000000, entryFee: "60 CNY" },
  },
];

console.log(destinations[0].details.visitorsPeerYear);

let n = 0;
let sum = 0;
for (item of destinations) {
  sum += item.details.visitorsPeerYear;
  n = n + 1;
}

console.log("the average is " + sum / n);

//ex5

const destinations_ = [
  {
    name: "Eiffel Tower",
    details: { visitorsPeerYear: 700000, entryFee: "25 USD" },
  },
  {
    name1: "Great Wall Of Chaina",
    details1: { visitorsPeerYear: 1000000, entryFee1: "60 CNY" },
  },
];

const merged_object = Object.assign({}, destinations[0], destinations[1]);

Object.seal(merged_object);

console.log(Object.isSealed(merged_object));
console.log(Object.isFrozen(merged_object));

//ex6

const destinationDetails = {
  name: "Macho Picchu",
  country: "Peru",
  yearVisited: 2019,
  ratings: [9, 8.5, 9, 9.5],
};

function getNamesValues(obj) {
  for (key of Object.keys(obj)) {
    console.log(key + ": " + obj[key]);
  }
}

getNamesValues(destinationDetails);

//ex7

const destinationRatings = {
  "Machu Piccu": 9,
  "Great Wall Of China": 8.5,
  "Eiffel Tower": 7.5,
  Colosseum: 6.5,
};

function increase_score(specific) {
  const array = Object.entries(destinationRatings);
  for (score of array) {
    if (score[0] === specific && score[1] < 7) {
      destinationRatings[score[0]] += 1;
    }
  }
}

increase_score("Colosseum");
console.log(destinationRatings);

//ex8

const destinationss = {
  1: { name: "Machu Picchu", yearVisited: 2019, ratings: 9 },
  2: { name: "Stonhenge", yearVisited: 2010, ratings: 8.5 },
  3: { name: "Great Wall Of China", yearVisited: 2018, ratings: 8.6 },
};

function filter() {
  const array = Object.entries(destinationss);
  const result = [];
  for (item of array) {
    if (item[1].yearVisited > 2015) {
      item[1].isNewer = true;
      result.push(item);
    }
  }
  return result;
}

//ex9

const activityRatings = {
  hiking: [9, 8, 10, 7, 8.5],
  sightseeing: [8.5, 8, 9, 9.5, 7.5],
  snorkeling: [7, 7.5, 8, 8.5, 9],
};

function calculate_average(ratings) {
  const keys = Object.keys(ratings);
  let tempArray = [];
  let sum = 0;
  let n = 0;
  for (key of keys) {
    tempArray = ratings[key];
    for (result of tempArray) {
      sum += result;
      n += 1;
    }

    console.log(key + " average" + sum / n);

    n = 0;
    sum = 0;
  }
}

//ex10

const destinationAwards = {
  "Machu Picchu": "Most visited",
  "Great Wall of China": "Most Visited",
  Colosseum: "Most Iconic",
};

function reverse(awards) {
  const result = [];
  const array = Object.entries(awards);

  for (item of array) {
    let key_ = item.reverse()[0];

    result[key_] = item[1];
  }

  return result;
}

reverse(destinationAwards);
