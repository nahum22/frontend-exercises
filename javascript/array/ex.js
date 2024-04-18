//ex1

const traveliterary = ["Paris", "Tokyo", "New York City"];
destinationToCheck = "Tokyo";
if (traveliterary.indexOf(destinationToCheck) !== -1) {
  console.log("destination exist");
} else {
  console.log("destinaiton not exist");
}

//ex2
const travelDates = ["2023-07-01", "2023-07-15", "2023-08-01"];
const sortedDates = travelDates.sort();
console.log(sortedDates);

//ex3
const travelActivities = ["Sightseeing", "Hiking", "Dining"];
const resul = travelActivities.join(",");
console.log(resul);

//ex4

const activityToCheck = "Hiking";
if (travelActivities.indexOf(activityToCheck) !== -1) {
  console.log("activity exist");
} else {
  console.log("activity does not exist");
}

//ex5
const destinationList = ["Paris", "Tokyo", "New York City"];
const specificDestination = "New York City";

if (destinationList.indexOf(specificDestination) !== -1) {
  console.log(
    `destination is at place ${destinationList.indexOf(specificDestination)}`
  );
} else {
  console.log("destination not found");
}

//ex6
const upcomingTrips = ["Greece", "Iceland", "Japan"];
upcomingTrips.pop();
console.log(upcomingTrips);

//ex7
const BucketListDestinations = ["Machu Picchu", "Great Wall Of China"];
const NewDestination = "Aurora Australis Antartica";
BucketListDestinations.splice(0, 0, NewDestination);
console.log(BucketListDestinations);

//ex8

const europeanCapitals = ["Paris", "Berlin", "Madrid"];

const sliced = europeanCapitals.splice(0, 1);
console.log(sliced);

//ex9

const beachDestinations = ["Maldive", "Bora Bora"];
const cityDestinations = ["New York", "tokyo"];

//ex10

const destinaitonList = ["Paris", "Tokyo", "New York City"];
console.log(destinaitonList.sort());
//ex11

const packingListString = "Passport,Sunscreen,Camera";

const arrItems = packingListString.split(",");
console.log(arrItems);

//ex12

const tripItinerary = ["Visit Louvre", "Eiffel Tower", "Seine River Cruise"];
const n = 2;
const newArray = tripItinerary.slice(0, n);
console.log(newArray);

//ex13

const travelWishList = [
  "northern Lights in Norway",
  "Safari in Kenya",
  "Great Barrier Reef",
];

travelWishList.splice(0, travelWishList.length);
console.log(travelWishList);

//ex14

const destenations = ["Paris", "Tokyo"];

const NewDestination_ = "New York City";
destenations.push(NewDestination_);
console.log(destenations);

//ex15

const destinaitons = ["Paris", "Tokyo", "New York City"];
destinaitons.pop();
console.log(destinaitons);

//ex16

console.log(destinaitons.join(","));

//ex17
const destinaitons__ = ["Paris", "Tokyo", "New York City"];
const destinationToFind = "Tokyo";
console.log(destinaitons__.indexOf(destinationToFind));

//ex18
const destinaitons_ = ["Paris", "Tokyo", "New York City"];
console.log(destinaitons_.sort());

//ex19

const distances = [50, 140, 300, 200];
console.log(
  distances.sort(function (a, b) {
    return a - b;
  })
);
