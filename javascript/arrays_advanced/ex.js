//ex1

const destinations = [
  { id: 1, traveler: "John Doe", destination: "Paris", days: 5, cost: 1200 },
  { id: 2, traveler: "Jane Doe", destination: "Paris", days: 7, cost: 1400 },
  { id: 3, traveler: "John Doe", destination: "London", days: 3, cost: 900 },
];

function group(destinations) {
  const result = {};

  for (travel of destinations) {
    if (typeof result[travel.destination] == "undefined") {
      result[travel.destination] = [];
    }
    result[travel.destination].push({
      id: travel["id"],
      traveler: travel["traveler"],
      days: travel["days"],
    });
  }

  return result;
}

//ex2

//find longest destinations
function findMaxDays(destinations) {
  destinations.sort((a, b) => {
    if (a.days > b.days) {
      return 1;
    }

    if (b.days > a.days) {
      return -1;
    }

    return 0;
  });

  return destinations[destinations.length - 1];
}

//ex3

//find most expensive destinations
function findMaxCost(destinations) {
  destinations.sort((a, b) => {
    if (a.cost > b.cost) {
      return 1;
    }

    if (b.cost > a.cost) {
      return -1;
    }

    return 0;
  });
  return destinations[destinations.length - 1];
}

///ex4

//const destinations = [
//   { id: 1, traveler: "John Doe", destination: "Paris", days: 5, cost: 1200 },
//  { id: 2, traveler: "Jane Doe", destination: "Paris", days: 7, cost: 1400 },
// { id: 3, traveler: "John Doe", destination: "London", days: 3, cost: 900 },
//];

function travelerTrips(destionations) {
  const result = {};

  for (travel of destionations) {
    if (typeof result[travel.traveler] == "undefined") {
      result[travel.traveler] = 0;
    }
    result[travel.traveler] += 1;
  }

  return result;
}

//ex5
//find all unique destinations
function uniqDestinations(destionations) {
  const result = [];
  console.log(destionations);
  for (travel of destionations) {
    result.push(travel.destination);
  }

  return Array.from(new Set(result));
}
